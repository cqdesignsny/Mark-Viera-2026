# Mark Viera — Official Website

**markviera.com** redesign for Mark Viera, "The Latin Assassin" — nationally touring comedian with credits on HBO, Showtime, Comedy Central, NBC, and BET.

---

## Development Status

**Phase:** Initial build complete, pending review and refinement.

**Last updated:** February 2026

**Build status:** Production build compiles with zero errors. All routes generate successfully.

---

## Quick Start

```bash
cd mark-viera-site
npm install
npm run dev
# Open http://localhost:3000
```

**Production build:**
```bash
npm run build
npm start
```

---

## Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Framework   | Next.js 16.1.6 (App Router)      |
| Language    | TypeScript 5                      |
| Styling     | Tailwind CSS 4                    |
| Animations  | Framer Motion 12.x (hero), CSS transitions (scroll sections) |
| Fonts       | Oswald (headings), DM Sans (body) via `next/font/google` |
| Deployment  | Vercel (planned)                  |
| React       | 19.2.3                           |

**Important:** Tailwind CSS v4 does NOT use `tailwind.config.ts`. All theme configuration lives in `src/app/globals.css` using `@theme inline` blocks.

---

## Project Structure

```
mark-viera-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, metadata, JSON-LD, Header/Footer)
│   │   ├── page.tsx            # Homepage — composes all sections
│   │   ├── globals.css         # Tailwind v4 theme, custom colors, utilities
│   │   ├── bio/
│   │   │   └── page.tsx        # Full biography page
│   │   ├── press/
│   │   │   └── page.tsx        # Press kit page
│   │   ├── sitemap.ts          # Auto-generated sitemap.xml
│   │   └── robots.ts           # robots.txt config
│   ├── components/
│   │   ├── Header.tsx          # Fixed nav, mobile hamburger, scroll blur effect
│   │   ├── Hero.tsx            # Full-screen hero with stage photo, Framer Motion entrance
│   │   ├── TourDates.tsx       # Tour dates list from data file
│   │   ├── About.tsx           # Bio section with headshot + stats
│   │   ├── Specials.tsx        # Comedy specials grid with poster art
│   │   ├── Videos.tsx          # Video embeds (placeholder YouTube IDs)
│   │   ├── Press.tsx           # Network logos + press quotes
│   │   ├── Contact.tsx         # Booking CTA + workshops card
│   │   ├── Footer.tsx          # Social links, nav, copyright
│   │   ├── AnimatedSection.tsx # Scroll-triggered fade-in wrapper
│   │   ├── JsonLd.tsx          # Person + ComedyEvent structured data
│   │   ├── SocialIcons.tsx     # SVG social media icons
│   │   ├── BioContent.tsx      # Bio page content with career timeline
│   │   └── PressContent.tsx    # Press kit page content
│   └── data/
│       ├── tourDates.ts        # 8 upcoming shows (Mar–May 2026)
│       ├── specials.ts         # 4 comedy specials
│       ├── videos.ts           # 3 video entries (NEED REAL YOUTUBE IDS)
│       ├── press.ts            # 3 press quotes + 8 TV credits
│       └── bio.ts              # Short bio, full bio, 11 career milestones
├── public/
│   └── images/                 # 20 images (see Image Assets below)
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── .claude/
    └── launch.json             # Dev server config (port 3000)
```

---

## Pages & Routes

| Route    | File                    | Description                                      |
|----------|-------------------------|--------------------------------------------------|
| `/`      | `src/app/page.tsx`      | Homepage — Hero, Tour Dates, About, Specials, Videos, Press, Contact |
| `/bio`   | `src/app/bio/page.tsx`  | Full biography with career timeline (11 milestones) |
| `/press` | `src/app/press/page.tsx`| Press kit — TV credits, network badges, booking info |

---

## Homepage Sections (in order)

1. **Hero** — Full-screen with `hero-bg-wide.jpg` background, 70% dark overlay, staggered Framer Motion entrance. Shows "THE LATIN ASSASSIN" subtitle, "MARK VIERA" in gold gradient, two CTAs (Get Tickets / Watch Specials), animated scroll indicator.

2. **Tour Dates** — 8 shows rendered from `data/tourDates.ts`. Each row shows formatted date, venue, city/state, and external "Get Tickets" link. Supports "Sold Out" status.

3. **About** — Two-column layout: headshot with gradient overlay on left, bio text on right. 4 stat cards below (TV Specials, Countries, Years, Shows). Links to `/bio`.

4. **Specials** — 2x2 grid of comedy specials with real poster artwork. Hover effects: image zoom, play icon overlay, title turns gold. Links to streaming platforms.

5. **Videos** — 3-column responsive grid. **Currently uses placeholder YouTube IDs — needs real video IDs.**

6. **Press** — 8 network logo badges (text-based) + 3 press quote cards with decorative quotation marks.

7. **Contact** — Two cards: Booking inquiry CTA (email link) + Comedy Workshops promo.

---

## Data Files

All content is stored in static TypeScript files. No CMS or database required.

### `src/data/tourDates.ts`
```typescript
interface TourDate {
  id: string;
  date: string;       // ISO date string
  venue: string;
  city: string;
  state: string;
  ticketUrl: string;  // External link
  soldOut?: boolean;
}
```
Currently has 8 shows (March–May 2026). Update this file to add/remove/modify tour dates.

### `src/data/specials.ts`
```typescript
interface Special {
  id: string;
  title: string;
  year: number;
  platform: string;
  description: string;
  watchUrl: string;   // Link to streaming platform
  image: string;      // Path in /public/images/
}
```
4 specials: Mark My Words (Amazon/Tubi 2024), Entre Nos: The Winners (HBO 2020), Tales of a Nuyorican (Showtime 2018), Back From Quarantine (Digital 2021).

### `src/data/videos.ts`
**NEEDS WORK** — Contains 3 placeholder entries with fake YouTube IDs (`dQw4w9WgXcQ`). Replace with real YouTube video IDs from Mark's channel.

### `src/data/press.ts`
3 press quotes + `tvCredits` array with 8 show entries (each has `show`, `network`, `year`).

### `src/data/bio.ts`
Exports `bioShort` (1 paragraph), `bioFull` (multi-paragraph array), and `milestones` (11 career milestones for the timeline UI).

---

## Image Assets

All images are in `public/images/`. Downloaded from the live WordPress site's media library.

| File | Usage |
|------|-------|
| `hero-bg-wide.jpg` | Hero section background (Levity Comedy stage) |
| `headshot-portrait.jpeg` | About section headshot |
| `headshot-portrait-2.jpeg` | Alternate headshot |
| `headshot-hbo-1.jpg` | HBO promotional headshot |
| `headshot-hbo-2.jpg` | HBO promotional headshot (alt) |
| `mark-main-hero.png` | Primary hero photo |
| `mark-2024.jpeg` | Recent photo |
| `mark-full.png` | Full body photo |
| `mark-corporate.png` | Corporate event photo |
| `hero-slide.jpg` | Alternate hero slide |
| `hero-slide-2025.webp` | Alternate hero slide (WebP) |
| `stage-levity.jpg` | Levity Comedy Club stage shot |
| `stage-trutv.jpg` | TruTV stage shot |
| `special-mark-my-words.png` | "Mark My Words" poster art |
| `special-entre-nos.png` | "Entre Nos: The Winners" poster |
| `special-nuyorican.jpg` | "Tales of a Nuyorican" poster |
| `special-back-quarantine.png` | "Back From Quarantine" poster |
| `special-levity-2022.png` | Levity special poster |
| `logo-white.svg` | White logo |
| `logo-black.svg` | Black logo |

---

## Design System

### Color Palette (defined in `globals.css`)

| Token           | Value     | Usage                    |
|-----------------|-----------|--------------------------|
| `--color-gold`  | `#d4a844` | Primary accent, CTAs     |
| `--color-gold-light` | `#e8c468` | Hover states        |
| `--color-background` | `#0a0a0a` | Page background     |
| `--color-surface` | `#141414` | Card backgrounds       |
| `--color-surface-light` | `#1e1e1e` | Elevated surfaces |
| `--color-border` | `#2a2a2a` | Borders, dividers       |
| `--color-muted` | `#888888` | Secondary text           |
| `--color-foreground` | `#ededed` | Primary text          |

### Typography

- **Headings:** Oswald (Google Fonts), bold, uppercase, tight tracking
- **Body:** DM Sans (Google Fonts), regular weight, relaxed leading
- **Usage:** `font-[family-name:var(--font-heading)]` for headings

### Custom CSS Utilities (in `globals.css`)

- `.text-gradient-gold` — Gold gradient text effect
- `.spotlight-glow` — Radial gradient spotlight (hero background)
- `.noise-overlay` — Subtle noise texture overlay
- `.section-divider` — Gold gradient horizontal line between sections

---

## SEO Implementation

### Metadata (in `layout.tsx`)
- Title, description, Open Graph tags, Twitter cards
- `metadataBase` set to `https://markviera.com`
- OG image path configured (image file needs to be created)

### Structured Data (in `JsonLd.tsx`)
- **Person schema** — name, alternateName ("The Latin Assassin"), jobTitle, social `sameAs` links
- **ComedyEvent schema** — generated for each tour date with offers and availability

### Auto-generated
- `sitemap.ts` — generates sitemap.xml with all routes
- `robots.ts` — standard robots.txt allowing all crawlers

---

## Animations

### Hero Section (Framer Motion)
- Staggered entrance: subtitle (0.2s delay) → name (0.4s) → tagline (0.7s) → CTAs (1.0s) → scroll indicator (1.5s)
- `translateY` fade-up effect on each element
- Infinite bouncing scroll indicator

### All Other Sections (CSS + JS)
- `AnimatedSection` wrapper component
- Uses `getBoundingClientRect` to detect when elements enter viewport
- Triggers `opacity: 0→1` and `translateY(30px)→0` CSS transitions
- Supports staggered delays via `delay` prop
- 0.7s ease-out duration

---

## Known Issues & Incomplete Items

### Must Fix
- [ ] **Videos section needs real YouTube IDs** — `src/data/videos.ts` has placeholder IDs
- [ ] **OG image missing** — Need to create `/public/images/og-image.jpg` (1200x630px)
- [ ] **Tour dates need verification** — Current dates in `tourDates.ts` are sample data, need to confirm with Mark's actual schedule

### Should Improve
- [ ] **Contact form** — Currently just an email link; could add a proper form (Formspree, Resend, etc.)
- [ ] **Email signup** — Footer has placeholder text but no actual integration (Mailchimp, ConvertKit, etc.)
- [ ] **Network logos** — Currently text badges; should be replaced with actual SVG/PNG logos
- [ ] **Favicon** — Using default Next.js favicon; need Mark's branding
- [ ] **Video section design** — Consider carousel or lightbox instead of embedded grid
- [ ] **Workshop section** — Minimal content; could expand with pricing, schedule, testimonials
- [ ] **Loading states** — No skeleton screens or loading indicators
- [ ] **404 page** — Using default Next.js 404; should be custom branded

### Nice to Have
- [ ] Photo gallery / carousel section
- [ ] Testimonials section
- [ ] Merch store link integration
- [ ] Instagram feed embed
- [ ] Dark/light mode toggle (currently dark-only)
- [ ] CMS integration (Sanity, Contentful) for easier content updates
- [ ] Analytics integration (Google Analytics, Plausible)

---

## Deployment

Designed for **Vercel** (free tier):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Or connect the GitHub repo to Vercel for automatic deployments on push.

**Environment variables:** None required currently. All content is static.

---

## External Links in the Site

| Link Target | Used In | Notes |
|-------------|---------|-------|
| Ticketmaster/venue URLs | Tour Dates | External ticket purchase links |
| Amazon Prime Video | Specials | "Mark My Words" watch link |
| HBO Max (max.com) | Specials | "Entre Nos" watch link |
| Showtime (sho.com) | Specials | "Nuyorican" watch link |
| markviera.com/shop | Specials | "Back From Quarantine" purchase |
| Instagram (@markviera) | Footer, Press | Social link |
| TikTok (@markviera) | Footer, Press | Social link |
| X/Twitter (@markviera) | Footer, Press | Social link |
| YouTube | Footer, Press | Social link |
| booking@markviera.com | Contact | Booking email |

---

## Development Notes

- **Tailwind v4 syntax:** Uses `@import "tailwindcss"` and `@theme inline { }` instead of the v3 `tailwind.config.ts` approach. Custom colors are defined directly in `globals.css`.
- **No `tailwind.config.ts`:** This is intentional. Tailwind v4 moved configuration into CSS.
- **`"use client"` directives:** Components using hooks, Framer Motion, or browser APIs are marked as client components. Layout and page files remain server components where possible.
- **Image optimization:** All images use `next/image` with `fill` layout and appropriate `sizes` props for responsive loading.
- **Font loading:** Oswald and DM Sans are loaded via `next/font/google` in `layout.tsx` with CSS variable injection (`--font-heading`, `--font-body`).
