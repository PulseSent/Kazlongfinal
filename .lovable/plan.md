# Crawler and AI Search Review: kazlong.com

This is a review only. Nothing on the site changes until you approve.

## What crawlers actually see (checked live)

- **The page text is not in the first response.** When fetched, the page body is empty (`<div id="root"></div>`). All text (Meet Kaz, practice areas, reviews, awards, contact) appears only after scripts run.
  - Google: usually runs scripts, so it can read the page, but with a delay and less reliably.
  - AI search tools (ChatGPT/GPTBot, Perplexity, Claude, and others): most do not run scripts, so they see only the title and description. Nothing else.
- **The title, description and social image are in the first response**, so link previews and basic search listings work.
- **robots.txt: OK.** All crawlers are allowed, nothing is blocked.
- **kazlong.com redirects to www.kazlong.com:** good, but it uses a temporary (302) redirect. A permanent one (301) is better if the domain settings offer it.
- **No sitemap** (sitemap.xml returns "not found"), and robots.txt does not point to one.
- **No canonical tag** (marks the one official address) and **no structured data** (hidden business information for search tools).
- **No llms.txt** (an optional summary file for AI tools).
- **Indexing status: unknown.** Google Search Console is not connected, so I can't confirm whether Google has indexed the site or reported errors.
- The description has a line break in the middle. This is a small cleanup.

## Recommended fixes (simplest, most reliable first)

1. **Put the real page text into the first response.** This is the biggest fix.
   - Most reliable: upgrade to Lovable's newer setup (TanStack Start), which builds the full page on the server so every crawler gets all the text. It's a larger one-time change, and the design stays the same.
   - Simpler option, nearly as good for a one-page site: generate the finished page as plain HTML during publishing (pre-rendering), so the first response already contains all the text. Visitors see no difference.
2. **Add structured data to the page head:** law firm (name, phone, email, area served, hours, services) and attorney (Kaz Long, awards). Search tools read this without running scripts.
3. **Add a canonical tag** pointing to https://www.kazlong.com/.
4. **Add a sitemap** and a `Sitemap:` line in robots.txt.
5. **Add llms.txt**, a short plain-text summary of the firm, services, area served and contact details for AI tools.
6. **Fix the description** (one line, include the city or area served).
7. **Connect Google Search Console** (you do this, and I can guide you): verify the site, submit the sitemap, and use "URL Inspection" to confirm Google sees the full text.

## Content improvements from the earlier review (still recommended)

- Add the city, county and office address. These matter most for local searches.
- Add 2–4 sentences for each practice area, an FAQ or "What to do if arrested" section, and a fuller bio for Kaz.

## What I need from you

- Which option you prefer for fix 1: full upgrade, or the simpler pre-rendering
- Office address, or the cities and counties served
