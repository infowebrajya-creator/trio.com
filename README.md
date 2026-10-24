# Trust Trio website — Version 1

Responsive Next.js 14, TypeScript and Tailwind project for trusttrio.com. Includes Home, CPA Firms, Businesses, Individuals, Wealth, Resources, About and Contact pages; audience pathways; SEO metadata, sitemap and robots; accessible responsive navigation; and a lightweight abstract visual system made with CSS.

## Preview locally (Windows)

Double-click **Start Preview.bat** in this folder. A black command window will open; leave it open while you view the site. Your browser should open to http://localhost:3000 after a few seconds. When you finish, close the command window to stop the preview.

If the one-click file is unavailable or dependencies need reinstalling:

1. Install Node.js 20 or newer and pnpm.
2. In this folder run `pnpm install`.
3. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_CONTACT_EMAIL` to the approved public enquiry address.
4. Run `pnpm dev` and open the local URL printed by Next.js (normally http://localhost:3000).

The enquiry form opens an email draft in the visitor’s email app. It does not transmit or store form data. If the destination is unset, the page explicitly tells the visitor the enquiry was not sent.

## Publish on Vercel

1. Create an empty GitHub repository named `trust-trio`. In this folder run `git init`, `git add .`, `git commit -m "Build Trust Trio website v1"`, `git branch -M main`, `git remote add origin https://github.com/YOUR-USERNAME/trust-trio.git`, and `git push -u origin main` (replace `YOUR-USERNAME`).
2. In Vercel choose **Add New → Project**, import that repository, keep the detected Next.js settings and deploy.
3. In Vercel Project Settings → Environment Variables, add `NEXT_PUBLIC_CONTACT_EMAIL` with the approved enquiry address, for Production and Preview; redeploy.
4. Preview and review the Vercel deployment. The existing Canva site and DNS are untouched. When ready, domain connection is a separate deliberate step in Vercel and the registrar; do not change it until the new site is approved.

## Checks

Run `pnpm build` for the production build. TypeScript is checked as part of Next.js build. Use `pnpm dev` to review mobile and desktop layouts.

## Before launch

- Set and test the approved public contact address.
- Confirm service scope, operating arrangements and public descriptions with the relevant professionals.
- Review the India mutual fund distribution disclosure and ARN-278052 wording for applicable requirements.
- Add an approved privacy notice and any required legal or jurisdiction-specific disclosures.
- Connect GitHub and Vercel accounts, deploy a preview, and review it before any DNS changes.

## Version 3 — premium redesign notes

- **Design system:** all styles live in `src/app/globals.css`, organised into numbered sections (tokens, type, controls, motion, header, hero, sections, cards, bands, inner pages, footer, responsive).
- **Fonts:** Newsreader (headlines) and Inter (body/UI) via `next/font/google`, self-hosted at build time. Requires internet access on the first `pnpm build`; falls back to Georgia / Helvetica / Arial.
- **Motion:** CSS + IntersectionObserver only (no animation library). Reveals are visible by default and are only hidden once scripting is confirmed; a fail-safe reveals everything if hydration never completes. `prefers-reduced-motion` disables all of it.
- **Components:** `components/sections.tsx` (hero, cards, bands), `components/motion.tsx` (`Reveal`, `ScrollScene`), `components/icons.tsx` (service icons, arrow), `components/site.tsx` (header, footer).
