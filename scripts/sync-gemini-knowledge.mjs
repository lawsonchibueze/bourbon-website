import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import nextEnv from "@next/env";
import { GoogleGenAI } from "@google/genai";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const envPath = path.join(root, ".env.local");
const knowledgePath = path.join(root, "knowledge", "alpha-interoil.md");
nextEnv.loadEnvConfig(root);

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) throw new Error("Add GEMINI_API_KEY to .env.local before syncing the knowledge file.");

const ai = new GoogleGenAI({ apiKey });
let storeName = process.env.GEMINI_FILE_SEARCH_STORE?.trim();

if (!storeName) {
  const store = await ai.fileSearchStores.create({
    config: {
      displayName: "Alpha Interoil website knowledge",
      embeddingModel: "models/gemini-embedding-2",
    },
  });
  if (!store.name) throw new Error("Gemini created a File Search store without returning its name.");
  storeName = store.name;

  let envContents = "";
  try {
    envContents = await readFile(envPath, "utf8");
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }

  const storeSetting = `GEMINI_FILE_SEARCH_STORE=${storeName}`;
  if (/^\s*GEMINI_FILE_SEARCH_STORE\s*=/m.test(envContents)) {
    envContents = envContents.replace(/^\s*GEMINI_FILE_SEARCH_STORE\s*=.*$/m, storeSetting);
  } else {
    envContents = `${envContents.replace(/\s*$/, "")}${envContents.trim() ? "\n" : ""}${storeSetting}\n`;
  }
  await writeFile(envPath, envContents, "utf8");
  console.log("Created the Alpha Interoil File Search store and saved its ID in .env.local.");
}

const operation = await ai.fileSearchStores.uploadToFileSearchStore({
  fileSearchStoreName: storeName,
  file: knowledgePath,
  config: { displayName: "alpha-interoil.md", mimeType: "text/plain" },
});

let completedOperation = operation;
const deadline = Date.now() + 4 * 60 * 1000;
while (!completedOperation.done) {
  if (Date.now() > deadline) throw new Error("Gemini knowledge indexing took too long. Run the sync command again.");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  completedOperation = await ai.operations.get({ operation: completedOperation });
}

if (completedOperation.error) {
  throw new Error(`Gemini could not index the knowledge file: ${JSON.stringify(completedOperation.error)}`);
}

const currentDocument = completedOperation.response?.documentName;
if (!currentDocument) throw new Error("Gemini finished indexing without returning a document name.");

const documents = await ai.fileSearchStores.documents.list({ parent: storeName });
for await (const document of documents) {
  if (document.name && document.name !== currentDocument) {
    await ai.fileSearchStores.documents.delete({ name: document.name });
  }
}

console.log("Knowledge file indexed successfully in the Alpha Interoil File Search store.");
console.log("The previous indexed version was removed; .env.local contains the store ID.");
