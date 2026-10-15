# Fix AI Search Visibility on kazlong.com

Goal: put the homepage's full text into the first page the server sends, and add the missing search basics. The design and features stay exactly as they are.

## Current state (checked live)

- Page body sent to crawlers is empty (`<div id="root"></div>`). All text appears only after scripts run, so most AI tools can't see it.
- robots.txt allows all crawlers. There is no sitemap, no canonical tag, no structured data, and no llms.txt.
- The meta description has a line break in the middle.
- kazlong.com redirects to www.kazlong.com with a temporary (302) redirect.
- Google Search Console is not connected, so indexing status is unknown.

## 1. Pre-render the homepage (recommended approach)

The simplest, safest option for a one-page site is to **build-time pre-render with React's own server rendering**:

- During publishing, a small step renders the existing homepage to plain HTML and writes it into the page that is served. No new hosting, no headless browser, and the visual code stays the same.
- In the browser, the app takes over that HTML ("hydrates") instead of drawing from scratch. Visitors see the same site, and it often appears faster.
- It runs inside the normal build, so it works with Lovable publishing as is.

Alternatives considered:
- Full upgrade to TanStack Start (server rendering): the most robust long term, but a larger change that uses more credits. Not needed for one page.
- Headless-browser snapshot tools: they need Chrome during the build, which can break publishing. Not recommended.

## 2. Structured data (in the page head)

- `LegalService` / `Attorney` for Kaz Long Law Office: name, phone 402-681-7294, email kazclong@gmail.com, url, logo, area served "Nebraska", opening hours as shown on the site, services (the 8 practice areas).
- `Person` for Kaz Long: job title "Criminal Defense Attorney", works for the firm, awards (NACDA 2020–2024, BusinessRate 2025).
- No review stars in structured data: Google ignores self-published reviews on a firm's own site and may flag them.
- No address, bar number or school unless you provide them.

## 3. Canonical URL

`<link rel="canonical" href="https://www.kazlong.com/">` plus a matching `og:url`.

## 4. Sitemap and robots.txt

- `sitemap.xml` with one entry: https://www.kazlong.com/
- Add `Sitemap: https://www.kazlong.com/sitemap.xml` to robots.txt and keep all existing allow rules.

## 5. llms.txt

A short plain-text summary covering the firm name, tagline, Nebraska criminal defense, the 8 practice areas, awards, phone and email, and a link to the homepage. It uses only facts already on the site.

## 6. Corrected meta description

Put it on one line, about 150 characters, using existing facts only. For example: "Kaz Long Law Office: Nebraska criminal defense attorney for DUI, drug, assault, theft, federal and juvenile cases. Call 402-681-7294." The same text goes into the og and twitter descriptions.

## Risks and how they're handled

- **Code that only works in a browser** (screen-size checks, scroll animations, carousel timers): it is guarded so it runs only in the browser after the page loads. The first frame matches the pre-rendered HTML.
- **Hydration mismatch** (the browser's first draw differs from the HTML): the mobile/desktop testimonial layout and the carousel start position are fixed to one default for the first draw. A brief layout shift on mobile is possible, and I'll check for it.
- **Scroll fade-in animations**: the pre-rendered text stays in the HTML even while visually hidden, so crawlers still read it. The animations themselves are unchanged.
- **Publishing**: if the pre-render step fails, the build should fall back to the current page instead of breaking. I'll verify this.
- **Live site**: nothing changes until you publish again after the work is done.

## Verification after building

- Fetch the built page without scripts and confirm the section text, practice areas and reviews are present.
- Compare desktop and mobile screenshots before and after to confirm the design is identical.
- Confirm there are no hydration warnings in the console and that the carousels, menu and call/email links still work.
- Validate the structured data with Google's Rich Results Test after publishing.

## Information needed from you

1. **Office address, or the cities and counties served.** This is optional: without it, structured data will say "Nebraska" only.
2. **Sunday hours:** the site shows 9 AM–6 PM, the same as Monday–Saturday. Is that correct? It goes into the structured data.
3. Optional, for the attorney data: bar admission, law school, and any Google Business Profile, Avvo or Justia profile links.

## Your follow-up steps after publishing

- Connect Google Search Console, submit the sitemap, and run URL Inspection on the homepage.
- If your domain settings allow it, change the kazlong.com redirect to permanent (301).

## Technical details

- Add `src/entry-server.tsx` (`renderToString(<App />)` with `StaticRouter`), and switch `main.tsx` to `hydrateRoot`.
- Add a Vite plugin (in `closeBundle`) that runs an SSR build of the entry, renders it, and replaces `<div id="root"></div>` in `dist/index.html`. If rendering throws, it logs a warning and leaves the file untouched.
- Guard `window`/`IntersectionObserver` in `use-scroll-fade-in` and `useIsMobile` (default `false` on the server).
- Static `public/sitemap.xml` (single route, no `lastmod`), `public/llms.txt`, and JSON-LD in `index.html`.
