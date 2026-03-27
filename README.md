# Mark Viera — The Latin Assassin | Official Website

The official website for **Mark Viera**, aka **"The Latin Assassin"** — a Bronx-born Puerto Rican comedian featured on HBO, Showtime, Comedy Central, NBC, BET, and truTV.

**Live:** [markviera.com](https://markviera.com) (deployed on Vercel)

---

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router, Server Components)
- **Styling:** Tailwind CSS 4 with custom neon/cyberpunk theme
- **Animations:** Framer Motion + CSS keyframes (neon flicker, glow pulse)
- **Fonts:** Oswald (headings) + DM Sans (body) via `next/font`
- **Deployment:** Vercel (auto-deploy from `main` branch)

## Design Direction

- **Dark-only** with cyberpunk/neon aesthetic inspired by Mark's "Art of the Laugh Tour" flyers
- **Neon cyan** (`#00e5ff`) for headings and accents — matches the flyer neon text
- **Gold** (`#d4a844`) for CTAs and secondary accents — matches the brand gold
- **Neon outline text** effect on hero name (transparent fill, cyan stroke with glow)
- **Card glow** effects on hover — cyan border glow with shadow
- **Animated sections** with scroll-triggered fade-in

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Tour Dates, About, Specials, Videos/As Seen On, Press, Contact |
| `/bio` | Full biography with career timeline |
| `/press` | Press kit page |

## Key Features

### SEO / AEO (AI Engine Optimization)
- Full JSON-LD structured data (Person, ComedyEvent, FAQPage)
- FAQ schema for AI search engines (who is Mark Viera, how to book, specials, tour)
- 30+ keywords targeting: Latin comedian, Puerto Rican comedian, Hispanic comedian, Nuyorican comedian, book a comedian, corporate comedian, etc.
- OpenGraph + Twitter Card metadata
- Sitemap + robots.txt
- Semantic HTML with descriptive alt text

### Tour Dates
- Static data in `src/data/tourDates.ts` — easy to update
- Each show has an expandable flyer view
- Flyer images stored in `public/images/flyers/`
- Past shows are cleaned out (only current/future dates)
- Schema.org ComedyEvent markup for each show

### Navigation
- Smart header: anchor scroll on homepage, `/#section` links on sub-pages
- MV Comedy logo in header
- Mobile menu with Framer Motion animations
- Bio page has clear navigation back to homepage

### Images
- New professional photos in `public/images/mark-hero-*.jpeg`
- Transparent cutout photos for hero overlay
- MV Comedy logo (white version) for header + footer
- Show flyers in `public/images/flyers/`

## Data Files

All content is managed via static TypeScript files (no CMS):

| File | Content |
|------|---------|
| `src/data/tourDates.ts` | Upcoming shows with dates, venues, ticket URLs, flyer paths |
| `src/data/specials.ts` | Comedy specials (title, year, platform, watch URL, image) |
| `src/data/videos.ts` | YouTube video IDs (need real IDs from @markvieracomedy) |
| `src/data/bio.ts` | Short bio, full bio, career milestones |
| `src/data/press.ts` | Press quotes, TV credits |

## TODO

- [ ] Add real YouTube video IDs from @markvieracomedy channel
- [ ] OG image (use one of the new photos or generate)
- [ ] Add more upcoming show dates as they're announced
- [ ] Connect domain markviera.com to Vercel
- [ ] Add Google Analytics / Vercel Analytics

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Production build
```

## Deployment

Connected to Vercel via GitHub. Every push to `main` auto-deploys.

```bash
git add -A && git commit -m "update" && git push
```

---

Built by [CQ Designs NY](https://github.com/cqdesignsny)
