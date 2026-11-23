# Alpha Interoil website

Next.js website for Alpha Interoil, including a local company information assistant.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Website assistant

The assistant searches `knowledge/alpha-interoil.md` locally through the Next.js server route at `/api/chat`. It returns matching source text and website links. If it cannot find a relevant passage, it directs visitors to `/contact`.

This version does not call OpenAI or another external AI service and does not require an API key or vector store. Its replies are excerpts from the source, so phrasing and matching are more limited than a language model.

### Refresh the knowledge file

Start the local website, then in another terminal run:

```bash
npm run crawl:site
```

The crawler visits the site's main pages on `http://localhost:3000`, extracts visible section text, and rebuilds `knowledge/alpha-interoil.md` with source paths. To crawl another running instance, set `SITE_BASE_URL` to its base URL before running the command.

## Scripts

- `npm run dev` — start the development server.
- `npm run build` — create a production build.
- `npm run start` — start the production server.
- `npm run lint` — run ESLint.
- `npm run crawl:site` — crawl the running website and refresh its local knowledge file.
