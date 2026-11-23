import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = path.join(root, "knowledge", "alpha-interoil.md");
const cliBaseUrl = process.argv.slice(2).find((argument) => !argument.startsWith("-"));
const baseUrl = (cliBaseUrl || process.env.SITE_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const routes = ["/", "/about", "/services", "/fleet", "/hse", "/news", "/careers", "/contact"];

const entityMap = {
  amp: "&", apos: "'", quot: '"', nbsp: " ", lt: "<", gt: ">",
  mdash: "—", ndash: "–", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", copy: "©",
};

function decodeEntities(text) {
  return text
    .replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (entity, code) => {
      if (code.startsWith("#x")) return String.fromCodePoint(parseInt(code.slice(2), 16));
      if (code.startsWith("#")) return String.fromCodePoint(parseInt(code.slice(1), 10));
      return entityMap[code] ?? entity;
    })
    .replaceAll("â€”", "—")
    .replaceAll("â€“", "–")
    .replaceAll("â€™", "’")
    .replaceAll("â€œ", "“")
    .replaceAll("â€", "”")
    .replaceAll("Â³", "³")
    .replaceAll("Â²", "²")
    .replaceAll("Â°", "°");
}

function stripMarkup(html) {
  return decodeEntities(
    html
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(/<(script|style|svg|noscript)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
      .replace(/<br\s*\/?\s*>/gi, "\n")
      .replace(/<\/(?:p|li|h[1-6]|div|span|summary|blockquote|dt|dd)\s*>/gi, "\n")
      .replace(/<[^>]+>/g, " "),
  )
    .split(/\r?\n/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

function sectionTitle(html, fallback) {
  const heading = html.match(/<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>/i);
  if (!heading) return fallback;
  return stripMarkup(heading[1]).join(" ") || fallback;
}

function sectionId(attributes) {
  return attributes.match(/\bid=["']([^"']+)["']/i)?.[1];
}

async function crawlRoute(route) {
  const response = await fetch(`${baseUrl}${route}`, {
    headers: { Accept: "text/html" },
    signal: AbortSignal.timeout(90_000),
  });

  if (!response.ok) throw new Error(`${route} returned HTTP ${response.status}`);

  const html = await response.text();
  const sectionMatches = Array.from(html.matchAll(/<section\b([^>]*)>([\s\S]*?)<\/section>/gi));
  const sections = sectionMatches.flatMap((match, index) => {
    const [, attributes, sectionHtml] = match;
    const id = sectionId(attributes);
    const title = sectionTitle(sectionHtml, `${route === "/" ? "Home" : route} section ${index + 1}`);
    const lines = stripMarkup(sectionHtml);
    const imageAlts = Array.from(sectionHtml.matchAll(/<img\b[^>]*\balt=["']([^"']+)["'][^>]*>/gi))
      .map((image) => decodeEntities(image[1]).trim())
      .filter(Boolean);
    const allLines = [...lines, ...imageAlts.map((alt) => `Image: ${alt}`)];
    const nonContentLines = new Set([
      "Contact", "Discuss a Project", "Explore Our Services", "Explore Our Fleet",
      "Explore Fleet Details", "Learn More", "Learn More About Us", "Send Message",
      "Send Another Message", "View Our QHSE Standards", "Read More", "Read Less",
      "CONTACT", "Name", "Subject", "Message", "Vessels in our fleet", "Fleet series",
      "Capabilities", "Assets", "Our Offices", "Calendar", "Newsroom",
    ]);
    const uniqueLines = allLines.filter(
      (line, lineIndex) =>
        line && !/^\d+$/.test(line) && !nonContentLines.has(line) && allLines.indexOf(line) === lineIndex,
    );
    if (!uniqueLines.length) return [];

    return [{
      title,
      source: `${route}${id ? `#${id}` : ""}`,
      lines: uniqueLines,
    }];
  });

  if (!sections.length) throw new Error(`${route} returned no readable page sections`);
  return sections;
}

try {
  const pages = [];
  for (const route of routes) pages.push(await crawlRoute(route));
  const sections = pages.flat();
  const document = [
    "# Alpha Interoil website knowledge",
    "",
    "Generated from the rendered website by `scripts/crawl-site.mjs`. Re-run `npm run crawl:site` after website copy changes. Each section is linked to its page or section. This is source text from the website, not independently verified company information. If the site does not answer a question, direct visitors to /contact.",
    "",
    ...sections.flatMap((section) => [
      `## ${section.title}`,
      "",
      `Source: \`${section.source}\``,
      "",
      ...section.lines.map((line) => `- ${line}`),
      "",
    ]),
  ].join("\n");

  await writeFile(outputPath, document, "utf8");
  console.log(`Crawled ${routes.length} pages and ${sections.length} sections.`);
  console.log(`Knowledge file updated: ${path.relative(root, outputPath)}`);
} catch (error) {
  console.error(`Could not crawl ${baseUrl}. Start the website first with npm run dev.`);
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
