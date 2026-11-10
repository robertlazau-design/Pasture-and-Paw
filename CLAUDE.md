# Pasture & Paw (pasturepaw.com): notes for Claude

The website for Pasture & Paw, a working farm and dog training business (training and boarding) serving Enumclaw, Buckley, Auburn, Maple Valley and Black Diamond. Robert Lazau (Golden Boy Productions) builds and runs it for the owner, Mak. Read this before changing anything.

## How Robert works

- **Never commit to `main`.** Use a feature branch and open a pull request; Robert merges.
- **Keep commits few.** Vercel has a daily build cap, so bundle related changes into one PR.
- **Show the change first.** For anything visual, send a side-by-side video (now vs. new) and the gzip size difference before opening the PR.
- **Don't invent facts.** No made-up prices, availability, results, credentials, review counts or customer stories. If something is unknown, ask.
- **The booking and contact forms go to Mak** (`TARGET_EMAIL` in `src/services/emailService.ts`). Don't change where they send without Robert's OK.

## Stack

- Vite, React 19, React Router 7 and Tailwind CSS 4, hosted on Vercel (project `pasture-and-paw`).
- Pages are prerendered to static HTML by `scripts/prerender.mjs`, which also writes the sitemap. `npm run build` builds and prerenders. `npm run lint` type-checks.
- Page titles, descriptions, canonicals and structured data live in `src/seo.ts`. Town names and FAQs live in `src/content/local.ts`.
- Fonts load from Google Fonts through `<link>` tags in `index.html`. Don't move them back to an `@import` in `index.css`: that makes the browser wait for the app CSS before it even asks for the fonts.
- `vercel.json` sends `pasture-and-paw.vercel.app` to `www.pasturepaw.com`, so Google sees one copy of the site.

| File | What's in it |
| --- | --- |
| `src/App.tsx` | App shell, menu, footer and the home page |
| `src/pages/*.tsx` | Farm, breed pages (`/farm/<slug>`), Training, Boarding, Contact, Privacy, 404 |
| `src/components/AreasServed.tsx` | The towns-served block at the bottom of most pages |
| `src/effects.tsx` | Motion effects (see below) |
| `src/index.css` | Brand tokens and effect styles (`pp-` classes) |

## Brand

- Colors are Tailwind theme tokens in `src/index.css`: cream `#F9F6F0`, teal `#125B5C` / `#0B3B3C` / `#052223`, sage `#95C0A1`, sage-light `#B4D4BD`, clay `#C89F7E`.
- Type: Fraunces (`font-display`) for headings, Inter for body text.
- The look is tactile: thick teal borders, hard offset shadows, rounded cards, buttons that press in on hover.

## Motion rules (the Golden Boy kit, same as RobertLazau.com)

- **What to animate:** only `transform` and `opacity` (Tailwind 4's `translate`, `scale` and `rotate` count), plus small paint-only touches like the headline's light sweep. Never animate layout.
- **Easing:** `--pp-ease` (`cubic-bezier(0.16, 1, 0.3, 1)`) for reveals; `--pp-ease-settle` (a small overshoot) for cards and photos.
- **Reduce motion:** every effect needs a `prefers-reduced-motion` fallback that shows the finished state.
- **Mouse-only effects:** put them behind `(hover: hover) and (pointer: fine)`.
- **Text:** keep all of it in the prerendered HTML. Never hide content until JavaScript runs, and never hide something that was already on screen at load. Don't use motion's `initial={{ opacity: 0 }}` or `whileInView` for scroll reveals; use `data-reveal` (below). Inside `AnimatePresence`, use `initial={false}` so the first child is visible in the prerendered page.
- **Libraries:** don't add animation libraries. `motion` is already in the bundle.
- **Phones:** nothing may make the page scroll sideways (`scrollWidth` must equal the viewport width).

## Effects in `src/effects.tsx` (styles in `index.css`)

| Effect | Where | What it does |
| --- | --- | --- |
| `data-reveal` + `usePageEffects` | Sections and cards on every page | Content rises, slides or settles in the first time it scrolls into view; things that arrive together cascade in reading order. Variants: `up`, `up-lg`, `left`, `left-sm`, `right`, `right-sm`, `zoom`, `tilt`, `tilt-left`, `card`. The markup is fully visible; only content below the first screen is held back, and only once JavaScript runs. |
| `.pp-sweep-text` | Home hero: "Real-World Dog Training." | The line catches the morning light once after load. Readable from the first frame. |
| `LightLeak` | Home hero photo | Golden-hour light drifts across the photo once, on the first page load only. It sits under the headline. |
