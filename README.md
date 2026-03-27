# Mark Viera — The Latin Assassin | Official Website

The official website for **Mark Viera**, aka **"The Latin Assassin"** — a Bronx-born Puerto Rican comedian featured on HBO, Showtime, Comedy Central, NBC, BET, and truTV.

**Live:** Deployed on Vercel via GitHub (auto-deploy on push to `main`)
**Repo:** [github.com/cqdesignsny/Mark-Viera-2026](https://github.com/cqdesignsny/Mark-Viera-2026)

---

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router, Server Components, Turbopack)
- **Styling:** Tailwind CSS 4 with custom neon/cyberpunk theme (`globals.css`)
- **Animations:** Framer Motion (hover, entrance, scroll-triggered) + CSS keyframes (neon flicker, glow pulse)
- **Fonts:** Oswald (headings) + DM Sans (body) via `next/font/google`
- **Deployment:** Vercel (auto-deploy from `main` branch)
- **No CMS** — all content lives in static TypeScript data files

## Design Direction

Inspired by Mark's **"Art of the Laugh Tour" flyers** — cyberpunk neon meets Latino tropical energy:

- **Dark-only** background (`#0a0a0a`) — no light mode
- **Neon cyan** (`#00e5ff`) — headings, nav hovers, stat numbers, section labels
- **Gold** (`#d4a844`) — CTAs (Get Tickets, Book Mark), secondary accents
- **Neon outline text** — `MARK` in hero uses transparent fill + cyan stroke with glow shadow
- **Neon flicker animation** — header name and hero text flicker like a real neon sign (2.5s cycle)
- **Card glow** — hover effects with cyan border glow + drop shadow
- **Scroll-triggered animations** — `AnimatedSection` component fades in content as you scroll
- **Framer Motion** — hover scale effects on cards, stats, specials, timeline items

### CSS Utilities (in `globals.css`)
- `.text-neon-cyan` — cyan text with glow shadow
- `.text-neon-gold` — gold text with glow shadow
- `.text-neon-outline` — transparent text with cyan stroke (the flyer look)
- `.text-gradient-gold` — gold gradient fill text
- `.card-glow` — border that glows cyan on hover
- `.border-neon` / `.border-neon-gold` — neon-glowing borders
- `.glow-ambient` — element that gets a gradient glow behind it on hover
- `.animate-neon-flicker` / `.animate-neon-flicker-alt` — neon sign flicker effect
- `.animate-glow-pulse` — pulsing glow on section labels

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Tour Dates, About, Specials, As Seen On, Press, Contact |
| `/bio` | Full biography with career timeline + photo |
| `/press` | Press kit page with downloadable info |

## Components (`src/components/`)

| Component | Description |
|-----------|-------------|
| `Header.tsx` | Fixed nav with MV logo, smart anchor/link behavior, mobile hamburger |
| `Hero.tsx` | Full-screen hero with cutout photo, neon text, ambient glows |
| `TourDates.tsx` | Show list with date blocks, expandable flyer previews |
| `About.tsx` | Photo + bio + stats bar (20+ years, 8 networks, etc.) |
| `Specials.tsx` | 4 comedy specials with poster images + watch links |
| `Videos.tsx` | "As Seen On" TV appearances + streaming links |
| `Press.tsx` | Network badges + press quotes |
| `Contact.tsx` | Booking CTA + Comedy Workshops promo |
| `Footer.tsx` | Logo, social links, nav links |
| `AnimatedSection.tsx` | Scroll-triggered fade-in wrapper (IntersectionObserver) |
| `JsonLd.tsx` | SEO structured data (Person, ComedyEvent, FAQPage) |
| `SocialIcons.tsx` | SVG icons for Instagram, TikTok, Twitter/X, YouTube |

## Data Files (`src/data/`)

All content is managed via static TypeScript files — edit these to update the site:

| File | What to edit | Notes |
|------|-------------|-------|
| `tourDates.ts` | Upcoming shows | Add/remove shows, update ticket URLs, add flyer paths |
| `specials.ts` | Comedy specials | Title, year, platform, watch URL, poster image |
| `videos.ts` | YouTube videos | **NEEDS REAL IDs** — see TODO below |
| `bio.ts` | Biography | `bioShort` (homepage), `bioFull` (bio page), `milestones` (timeline) |
| `press.ts` | Press quotes + TV credits | Network names, press quotes with outlets |

## Images (`public/images/`)

| Folder/File | Description |
|------------|-------------|
| `mark-hero-1.jpeg` | Professional photo — hands on chin, smiling (hero cutout source) |
| `mark-hero-2.jpeg` | Professional photo — hands on hips, looking up (about section) |
| `mark-laughing.jpeg` | Laughing closeup |
| `mark-praying.jpeg` | Prayer hands, serious look (bio page) |
| `mark-cutout-smile.png` | Transparent cutout — chin pose (hero overlay) |
| `mark-cutout-pointing.png` | Transparent cutout — pointing at camera |
| `mark-cutout-mic.png` | Transparent cutout — holding mic |
| `mark-cutout-full.png` | Transparent cutout — full body casual |
| `mv-logo-white.png` | MV Comedy circular logo (white, for dark backgrounds) |
| `mv-logo-black.png` | MV Comedy circular logo (black, for light backgrounds) |
| `flyers/*.png` | Show flyers for tour dates (9 flyers currently) |
| `special-*.png/jpg` | Comedy special poster images |
| `stage-*.jpg` | Stage/performance shots used in "As Seen On" section |

### Adding New Flyers
1. Save the flyer image to `public/images/flyers/` (use kebab-case: `city-name.png`)
2. In `src/data/tourDates.ts`, add `flyer: "/images/flyers/city-name.png"` to the show entry
3. The "Flyer" expand button will automatically appear for that show

### Source Images (NOT in repo)
The project root has source photo files that are `.gitignored`:
- `Mark_Mark_CTR00586.jpeg` through `Mark_Mark_CTR00624.jpeg` — raw professional photos
- `mark1.png`, `mark2.png`, `mark3.png`, `Mark-1.png` — cutout PNGs
- `Mark Viera Logo/` — original logo files

Flyer source files live in Dropbox at: `/Users/cqstudio/Library/CloudStorage/Dropbox/Mark Viera/Flyers/2026/`

## SEO / AEO Implementation

### Structured Data (JSON-LD)
- **Person schema** — name, alternate names, job title, birthPlace, social profiles, TV credits, occupation
- **ComedyEvent schema** — one per tour date with venue, location, ticket URL, flyer image
- **FAQPage schema** — 4 questions: who is Mark Viera, how to book, what specials, where to see live

### Keywords (in layout.tsx metadata)
30+ keywords including: Mark Viera, The Latin Assassin, Latin comedian, Latino comedian, Puerto Rican comedian, Hispanic comedian, Nuyorican comedian, Boricua comedian, Bronx comedian, book a comedian, hire a comedian, corporate comedian, HBO comedian, Showtime comedian, Comedy Central comedian, The Art of the Laugh Tour, Boricuas of Comedy, etc.

### Other SEO
- OpenGraph + Twitter Card metadata
- Sitemap (`/sitemap.xml`) + robots (`/robots.txt`)
- Canonical URL set to markviera.com
- Descriptive alt text on all images
- Semantic HTML structure

---

## TODO — Remaining Work

### Priority 1 — Must Do
- [ ] **Add real YouTube video IDs** — Go to [youtube.com/@markvieracomedy](https://youtube.com/@markvieracomedy), click on 3-4 videos, grab the ID from the URL (the part after `watch?v=`). Edit `src/data/videos.ts` and replace `REPLACE_WITH_REAL_ID_1`, etc. The Videos section will auto-embed them.
- [ ] **Connect markviera.com domain** — In Vercel dashboard → project → Settings → Domains → add `markviera.com` and `www.markviera.com`. Update DNS records as instructed.
- [ ] **Generate OG image** — Create a 1200x630 image using one of Mark's photos + the neon text style for social media link previews. Add to `public/og-image.jpg` and update `layout.tsx` metadata.

### Priority 2 — Should Do
- [ ] **Add Vercel Analytics** — `npm i @vercel/analytics @vercel/speed-insights` and add to layout. Tracks visitors + Core Web Vitals.
- [ ] **Update tour dates regularly** — Edit `src/data/tourDates.ts`. Remove past shows, add new ones. Copy flyers to `public/images/flyers/`.
- [ ] **Mobile flyer view** — Currently the "Flyer" button is hidden on mobile (`hidden sm:flex`). Could add a tap-to-view on mobile.
- [ ] **Press page content** — The `/press` page exists but could use more content (high-res photos, one-sheet download, etc.)

### Priority 3 — Nice to Have
- [ ] **Email signup / mailing list** — Add a Mailchimp or ConvertKit form to the Contact section
- [ ] **Merchandise section** — Link to Mark's merch store
- [ ] **Google Business Profile** — Set up for local comedy search
- [ ] **Video section upgrade** — Once YouTube IDs are added, could show actual embedded players
- [ ] **Performance** — Optimize flyer images (they're large PNGs from Dropbox, could be compressed)

---

## How to Update Content

### Add a New Show
```typescript
// In src/data/tourDates.ts, add to the array:
{
  id: "unique-id",
  date: "2026-MM-DD",
  venue: "Venue Name",
  city: "City",
  state: "ST",
  ticketUrl: "https://ticket-link.com",
  flyer: "/images/flyers/city-name.png", // optional
}
```

### Remove a Past Show
Delete the entry from the `tourDates` array in `src/data/tourDates.ts`.

### Update Bio
Edit `src/data/bio.ts` — `bioShort` shows on homepage, `bioFull` shows on `/bio` page.

### Deploy Changes
```bash
git add -A && git commit -m "update: description" && git push
# Vercel auto-deploys within ~60 seconds
```

---

## Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Production build (verify no errors)
npm run start        # Serve production build locally
```

## Project Structure
```
mark-viera-site/
├── public/
│   ├── icon.png              # Favicon (MV logo)
│   ├── apple-icon.png        # Apple touch icon
│   └── images/
│       ├── flyers/           # Show flyers (9 PNGs)
│       ├── mark-hero-*.jpeg  # Professional photos
│       ├── mark-cutout-*.png # Transparent cutouts
│       ├── mv-logo-*.png     # MV Comedy logos
│       ├── special-*.png     # Comedy special posters
│       └── stage-*.jpg       # Performance shots
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout (fonts, metadata, header/footer)
│   │   ├── page.tsx          # Homepage (assembles all sections)
│   │   ├── globals.css       # Tailwind config + neon theme + animations
│   │   ├── bio/              # /bio route
│   │   ├── press/            # /press route
│   │   ├── sitemap.ts        # Auto-generated sitemap
│   │   └── robots.ts         # Robots.txt config
│   ├── components/           # 12 React components
│   └── data/                 # 5 static content files
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md                 # This file
```

---

Built by [CQ Designs NY](https://github.com/cqdesignsny)
