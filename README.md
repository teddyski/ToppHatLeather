# Hightopp Leather

A brand site for **Shawn Cook** — leatherworker, wildland firefighter, cyr wheel performer — and his studio, Hightopp Leather. Hand-built leather top hats, goggles, satchels, and masks.

Site: [hightoppleather.com](https://hightoppleather.com)

---

## About this project

This is part of my web design portfolio. The brief: a clean, photography-forward brand site for a one-person leather studio. It needed to be fast, easy to update later, and built around the work itself — not the chrome.

## Design notes

- **Photography-first layout.** Generous whitespace, large image treatments, no tight crops.
- **Custom palette** — warm cream / bark / tan. Earthy without going saddlery-cliché.
- **Cormorant Garamond** serif headings (echoing antiquity and handcraft), **Inter** sans for body.
- **Text-forward page intros** — no big-image headers with overlay text. Images placed inline lower on the page.
- **Subtle Wonderland-flavored brand voice** on the About page. Hightopp is the Mad Hatter's surname (Tarrant Hightopp), so the page leans lightly whimsical without naming the source.

## Stack

- **[Astro](https://astro.build)** — static site generation, zero client JS by default
- **[Tailwind CSS](https://tailwindcss.com)** — utility styling, custom theme
- **TypeScript** — content modeled as typed data files in `src/content/`
- **Cloudflare Pages** — hosting + CDN
- **[forwardemail.net](https://forwardemail.net)** — custom-domain email forwarding
- **[Sanity](https://www.sanity.io)** — headless CMS scaffolded in `sanity/` and parked for when the client is ready to take over content updates

## Local development

```bash
npm install
npm run dev      # localhost:4321
npm run build    # → dist/
```

Content lives in `src/content/`:

- `products.ts` — the work catalog (hats, goggles, bags, masks)
- `gallery.ts` — gallery items with category filtering
- `settings.ts` — site-wide config (title, contact email, socials)

Pages live in `src/pages/` (file-based routing).

---

Built by **[Teddy Ski](https://github.com/teddyski)**.
