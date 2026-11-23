import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_MESSAGE_LENGTH = 1200;
const STOP_WORDS = new Set([
  "a", "about", "an", "and", "are", "as", "at", "be", "can", "company", "could", "do", "does",
  "for", "from", "give", "have", "he", "her", "how", "i", "in", "is", "it", "me", "of",
  "on", "or", "please", "say", "she", "tell", "that", "the", "their", "them", "there", "they",
  "this", "to", "us", "we", "what", "when", "where", "which", "who", "why", "would", "you", "its",
  "your", "alpha", "interoil",
]);

const SYNONYMS: Record<string, string[]> = {
  careers: ["jobs", "vacancies", "employment", "recruiting"],
  jobs: ["careers", "vacancies", "employment", "recruiting"],
  vacancies: ["careers", "jobs", "employment", "recruiting"],
  contact: ["phone", "email", "address", "office", "support", "enquiry"],
  email: ["contact", "address", "enquiry"],
  phone: ["contact", "number", "office"],
  address: ["location", "office", "contact"],
  location: ["address", "office", "contact"],
  vessel: ["boat", "fleet", "ship", "crewboat"],
  boat: ["vessel", "fleet", "ship", "crewboat"],
  fleet: ["vessel", "boat", "ship", "crewboat"],
  passenger: ["crew", "people", "capacity"],
  training: ["course", "simulator", "stcw", "competence", "development"],
  course: ["training", "simulator", "stcw", "competence"],
  safety: ["hse", "qhse", "environment", "quality"],
  environmental: ["environment", "pollution", "sustainability", "qhse"],
  service: ["transportation", "logistics", "training"],
  transport: ["transportation", "transfer", "crew"],
  transfer: ["transportation", "transport", "crew"],
  many: ["fleet", "count", "number", "vessel"],
  number: ["fleet", "count", "vessel"],
};

type Passage = {
  title: string;
  text: string;
  paths: string[];
};

function normalizeToken(word: string) {
  if (word.endsWith("ies") && word.length > 5) return `${word.slice(0, -3)}y`;
  if (word.endsWith("s") && !word.endsWith("ss") && word.length > 4) return word.slice(0, -1);
  return word;
}

function tokenize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 1 && !STOP_WORDS.has(word))
    .map(normalizeToken);
}

function pathsFromSource(source: string) {
  return Array.from(
    source.matchAll(/\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?(?:#[a-z0-9-]+)?/gi),
    (match) => match[0],
  );
}

function parseKnowledge(markdown: string): Passage[] {
  const passages: Passage[] = [];
  let parentTitle = "Company information";
  let parentPaths: string[] = [];
  let currentTitle = "Company information";
  let currentPaths: string[] = [];
  let insideSection = false;

  for (const rawLine of markdown.split(/\r?\n/)) {
    const line = rawLine.trim();
    const heading = line.match(/^(#{2,3})\s+(.+)$/);

    if (heading) {
      const level = heading[1].length;
      currentTitle = heading[2].trim();
      if (level === 2) {
        insideSection = true;
        parentTitle = currentTitle;
        parentPaths = [];
        currentPaths = [];
      } else {
        currentPaths = [...parentPaths];
      }
      continue;
    }

    if (!insideSection) continue;

    if (/^Source:/i.test(line)) {
      currentPaths = pathsFromSource(line);
      if (currentTitle === parentTitle) parentPaths = [...currentPaths];
      continue;
    }

    if (!line || line.startsWith("#")) continue;

    const text = line.replace(/^[-*]\s+/, "").replace(/\*\*/g, "").trim();
    if (!text) continue;
    passages.push({
      title: currentTitle || parentTitle,
      text,
      paths: currentPaths.length ? currentPaths : parentPaths,
    });
  }

  return passages;
}

function scorePassage(queryTokens: string[], passage: Passage) {
  const contentTokens = new Set(tokenize(`${passage.title} ${passage.text}`));
  let score = 0;
  let exactMatches = 0;

  for (const token of queryTokens) {
    if (contentTokens.has(token)) {
      score += 2;
      exactMatches += 1;
    }
    for (const synonym of SYNONYMS[token] ?? []) {
      if (contentTokens.has(normalizeToken(synonym))) score += 0.65;
    }
  }

  const normalizedQuery = queryTokens.join(" ");
  const normalizedPassage = tokenize(`${passage.title} ${passage.text}`).join(" ");
  if (normalizedQuery && normalizedPassage.includes(normalizedQuery)) score += 1.5;
  if (contentTokens.has(queryTokens[0] ?? "")) score += 0.4;

  return { score, exactMatches };
}

function labelForPath(pathname: string) {
  const page = pathname.split("#")[0];
  const labels: Record<string, string> = {
    "/": "Home",
    "/about": "About",
    "/services": "Services",
    "/fleet": "Fleet",
    "/hse": "QHSE",
    "/news": "News",
    "/careers": "Careers",
    "/contact": "Contact",
  };
  return labels[page] ?? "Website";
}

function sourceLinks(paths: string[]) {
  return Array.from(new Set(paths))
    .slice(0, 3)
    .map((source) => `[${labelForPath(source)}](${source})`)
    .join(" | ");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please send a valid message." }, { status: 400 });
  }

  const message =
    typeof body === "object" && body !== null && "message" in body
      ? (body as { message?: unknown }).message
      : undefined;

  if (typeof message !== "string" || !message.trim()) {
    return NextResponse.json({ error: "Enter a question to continue." }, { status: 400 });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Please keep your question under ${MAX_MESSAGE_LENGTH} characters.` },
      { status: 400 },
    );
  }

  try {
    const knowledgePath = path.join(process.cwd(), "knowledge", "alpha-interoil.md");
    const markdown = await readFile(knowledgePath, "utf8");
    const passages = parseKnowledge(markdown);
    const queryTokens = Array.from(new Set(tokenize(message)));
    const normalizedMessage = message.toLowerCase();

    const asksAboutCompany =
      /\bwhat\s+.*\b(?:company|business|alpha(?:\s+interoil)?)\s+about\b/.test(normalizedMessage) ||
      /\bwhat\b.*\b(?:company|business|alpha(?:\s+interoil)?)\s+(?:is|are|ia)\s+about\b/.test(normalizedMessage) ||
      /\bwho\s+is\s+(?:the\s+)?(?:company|business|alpha(?:\s+interoil)?)\b/.test(normalizedMessage) ||
      /\bwhat\s+is\s+(?:the\s+)?(?:company|business|alpha(?:\s+interoil)?)\s+about\b/.test(normalizedMessage) ||
      /\bwhat\s+(?:does|do)\s+(?:the\s+)?(?:company|business|alpha(?:\s+interoil)?)\s+do\b/.test(normalizedMessage) ||
      /\b(?:tell me|give me)\s+(?:about|an overview of)\s+(?:the\s+)?(?:company|alpha(?:\s+interoil)?)\b/.test(normalizedMessage);

    if (asksAboutCompany) {
      const overview = passages.filter(
        (passage) => passage.paths.includes("/about#profile") && passage.text.length > 70,
      );
      const sources = sourceLinks(overview.flatMap((passage) => passage.paths));

      return NextResponse.json({
        answer: overview.length
          ? `${overview.map((passage) => passage.text).join(" ")}${sources ? `\n\nSources: ${sources}` : ""}`
          : "I couldn't find that information. Please contact our team via [Contact](/contact).",
      });
    }

    const asksHowManyVessels =
      /\b(how many|number of|count|total)\b/.test(normalizedMessage) &&
      /\b(vessel|boat|ship|fleet)\w*\b/.test(normalizedMessage);

    if (asksHowManyVessels) {
      const fleetSize = passages.find((passage) =>
        /(?:\b(\d+)\s+vessels?\s+in\s+our\s+fleet\b|\b(\d+)[- ]vessel fleet\b)/i.test(passage.text),
      );
      const count = fleetSize?.text.match(/\b(\d+)\b/)?.[1];

      if (count) {
        const sources = sourceLinks(fleetSize?.paths ?? ["/fleet"]);
        return NextResponse.json({
          answer: `The homepage states that Alpha Interoil has ${count} vessels in its fleet.${sources ? `\n\nSource: ${sources}` : ""}`,
        });
      }
    }

    const asksAboutAcquiringVessel =
      /\b(get|buy|purchase|hire|charter|rent|book|lease|obtain|acquire)\b/.test(normalizedMessage) &&
      /\b(vessel|boat|ship|fleet)\w*\b/.test(normalizedMessage);

    if (asksAboutAcquiringVessel) {
      return NextResponse.json({
        answer:
          "The website doesn't explain how to buy, rent, or obtain a vessel. For chartering or other commercial enquiries, contact the business development team via [Contact](/contact#enquiries).",
      });
    }

    if (!queryTokens.length) {
      return NextResponse.json({
        answer: "I couldn't find that in the company information. Please contact our team via [Contact](/contact).",
      });
    }

    const matches = passages
      .map((passage) => ({ passage, ...scorePassage(queryTokens, passage) }))
      .filter((match) => match.exactMatches > 0 && match.score >= 2.4)
      .sort((a, b) => b.score - a.score)
      .slice(0, 2);

    if (!matches.length) {
      return NextResponse.json({
        answer: "I couldn't find that information on the website. Please contact our team via [Contact](/contact).",
      });
    }

    const answerLines = matches.map(({ passage }) => `- ${passage.text}`);
    const sources = sourceLinks(matches.flatMap(({ passage }) => passage.paths));

    return NextResponse.json({
      answer: `${answerLines.join("\n")}${sources ? `\n\nSources: ${sources}` : ""}`,
    });
  } catch (error) {
    console.error("Local company information search failed:", error);
    return NextResponse.json(
      { error: "I couldn't search the company information just now. Please use the [Contact page](/contact)." },
      { status: 500 },
    );
  }
}
