# Alpha Interoil website

Next.js website for Alpha Interoil, including a Gemini-powered company information assistant.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Gemini company assistant

The server route at `/api/chat` uses Gemini File Search to retrieve information from `knowledge/alpha-interoil.md`, then asks Gemini to write a concise, natural answer grounded in that information. If the retrieved content does not support an answer, the assistant directs visitors to `/contact`. The Gemini API key and File Search store ID stay in the server-side `.env.local` file and are never sent to the browser.

Add the API key to `.env.local`:

```env
GEMINI_API_KEY=your_key
```

The first knowledge sync creates a dedicated Gemini File Search store and saves its ID in `.env.local` as `GEMINI_FILE_SEARCH_STORE`. The sync uploads and indexes the knowledge file. Later syncs replace the prior indexed copy in that store.

## Refresh website knowledge

Start the local website, then in another terminal run:

```bash
npm run refresh:knowledge
```

This crawls the site's main pages on `http://localhost:3000`, rebuilds `knowledge/alpha-interoil.md`, then updates Gemini's File Search index. To crawl another running instance, set `SITE_BASE_URL` to its base URL before running the command. To only re-index the current knowledge file, run `npm run sync:knowledge`.

## Scripts

- `npm run dev` — start the development server.
- `npm run build` — create a production build.
- `npm run start` — start the production server.
- `npm run lint` — run ESLint.
- `npm run crawl:site` — crawl the running website and refresh its local knowledge file.
- `npm run sync:knowledge` — upload and index the local knowledge file with Gemini File Search.
- `npm run refresh:knowledge` — crawl the site and sync the new knowledge to Gemini.
