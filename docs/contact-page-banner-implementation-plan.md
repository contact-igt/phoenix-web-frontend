# Contact Us Page — Banner Section Implementation Plan

## Objective

Create the **Contact Us** page banner section to match the provided Figma design, following the same architecture, folder structure, typography, and CTA patterns already used on **Home**, **About**, **Services**, and **Pricing**.

This plan covers **Phase 1 only**: route scaffolding, folder structure, and the hero/banner section (including CTAs). Additional Contact page sections (form, FAQ, footer) can be added in a follow-up phase.

---

## Figma Reference — Banner Spec

| Element | Figma value | Notes |
|---|---|---|
| **Eyebrow** | `Reach out to us` | White, Satoshi, centered above title |
| **Title (H1)** | `Contact us` | Satoshi **900**, `200px` / `84px` line-height, `-1.28px` letter-spacing |
| **Title fill** | Linear gradient | `rgba(245, 59, 0, 1)` → `rgba(113, 27, 0, 1)` (top → bottom) |
| **Description** | Same copy as About banner | White, small body text, centered |
| **Primary CTA** | `JOIN US` | White filled pill + separate round arrow button |
| **Secondary CTA** | `WATCH VIDEO` | Outlined transparent pill + separate round play button |
| **Background** | Full-bleed gym photo | Dark overlay for text contrast |
| **Trusted strip** | `TRUSTED BY ENTERPRISE LEADERS:` + 6 logos | Dark bar at bottom of hero area |
| **Layout** | Center-aligned stack | Eyebrow → title → description → CTA row (unlike About’s bottom-left layout) |
| **Navbar** | Existing global header | Logo left, nav center, `CONTACT US` pill right |

**Existing asset ready:** `public/images/contact/banner.png`

---

## Current Codebase Patterns (Reference)

### Page composition (inner pages)

Services and Pricing follow this pattern:

```tsx
<>
  <Navbar />
  <main>
    <PageBanner />
    <AboutStats />        {/* "Trusted by enterprise leaders" strip */}
    {/* ...page sections... */}
    <AboutFAQ />
    <AboutContact />
  </main>
  <MarketingFooter />
</>
```

About uses the same banner + stats pattern but omits `MarketingFooter`.

### Banner component conventions

| Page | Component path | Layout | Title style | CTAs |
|---|---|---|---|---|
| Home | `sections/home/HeroBanner` | Orange collage hero | Bebas Neue | Explore + Free trial |
| About | `sections/about/AboutBanner` | Bottom-left copy on photo | Solid `#f13a05` | Join us + Watch video |
| Services | `sections/services/ServicesBanner` | Left-aligned on photo | Solid orange spans | Explore + WATCH VIDEO |
| Pricing | `sections/pricing/PricingBanner` | Left-aligned on photo | **Gradient** orange + white | None |
| **Contact (new)** | `sections/contact/ContactBanner` | **Center-aligned** on photo | **Gradient** (single line) | JOIN US + WATCH VIDEO |

### Reusable patterns to copy

| Need | Copy from |
|---|---|
| Gradient title CSS | `PricingBanner/index.module.css` → `.pricing-title-orange` |
| JOIN US + WATCH VIDEO buttons | `AboutBanner/index.tsx` + `index.module.css` → `.joinButton`, `.roundButton`, `.videoButton`, `.playButton` |
| Full-bleed background + scrim | `AboutBanner/index.module.css` → `.banner`, `.bannerImage`, `.scrim` |
| Trusted-by strip | Reuse `AboutStats` component (do **not** duplicate inside banner) |
| Navbar offset | `margin-top: 96px` on banner section |
| Responsive breakpoints | About banner system: `1200 / 992 / 768 / 576 / 390` |

---

## Folder Structure to Create

Mirror the About / Services / Pricing page layout:

```
src/
├── app/
│   └── contact/
│       └── page.tsx                          # Contact route (/contact)
│
└── components/
    └── sections/
        └── contact/
            └── ContactBanner/
                ├── index.tsx                 # Banner component
                └── index.module.css          # Banner styles
```

**Phase 2 placeholders** (not in scope for banner-only work, but reserve the pattern):

```
src/components/sections/contact/
├── ContactBanner/          ← Phase 1
├── ContactFormSection/     ← Phase 2 (or reuse AboutContact)
└── ContactFAQ/             ← Phase 2 (or reuse AboutFAQ)
```

---

## Files to Create / Modify

### New files

| File | Purpose |
|---|---|
| `src/app/contact/page.tsx` | Contact page route — composes Navbar, ContactBanner, AboutStats |
| `src/components/sections/contact/ContactBanner/index.tsx` | Banner JSX |
| `src/components/sections/contact/ContactBanner/index.module.css` | Banner styles |

### Files to update (recommended)

| File | Change |
|---|---|
| `src/components/layout/Navbar/index.tsx` | Update `Contact us` CTA href from `/#contact` → `/contact` |
| `docs/contact-page.md` | Optional page documentation (follow `docs/about-page.md` format) |

### Files to reuse (no changes)

| File | Usage on Contact page |
|---|---|
| `src/components/sections/about/AboutStats/index.tsx` | Trusted-by logo strip directly below banner |
| `src/components/sections/shared/MarketingFooter/index.tsx` | Page footer (match Services/Pricing) |
| `src/components/sections/about/AboutContact/index.tsx` | Contact form section (Phase 2 page assembly) |
| `src/components/sections/about/AboutFAQ/index.tsx` | FAQ section (Phase 2 page assembly) |

---

## Contact Page Route — `src/app/contact/page.tsx`

Phase 1 minimal page (banner + trusted strip only):

```tsx
import Navbar from '@/components/layout/Navbar'
import ContactBanner from '@/components/sections/contact/ContactBanner'
import AboutStats from '@/components/sections/about/AboutStats'
import MarketingFooter from '@/components/sections/shared/MarketingFooter'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactBanner />
        <AboutStats />
        {/* Phase 2: AboutContact, AboutFAQ, etc. */}
      </main>
      <MarketingFooter />
    </>
  )
}
```

---

## ContactBanner Component Spec

### `index.tsx` structure

```tsx
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Play } from 'lucide-react'
import styles from './index.module.css'

export default function ContactBanner() {
  return (
    <section
      id="contact"
      className={styles.banner}
      aria-labelledby="contact-banner-title"
    >
      {/* 1. Full-bleed background image */}
      <Image
        src="/images/contact/banner.png"
        alt="Phoenix Fitness gym interior"
        fill
        priority
        sizes="100vw"
        className={styles.bannerImage}
      />

      {/* 2. Dark scrim overlay */}
      <div className={styles.scrim} aria-hidden="true" />

      {/* 3. Centered content stack */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>Reach out to us</p>

        <h1 id="contact-banner-title" className={styles.title}>
          Contact us
        </h1>

        <p className={styles.description}>
          Just simple, effective workouts tailored to your goals &mdash; guided by real people who care.
        </p>

        <div className={styles.actionsRow}>
          <Link href="#contact-form" className={styles.joinButton}>
            Join us
          </Link>
          <Link href="#contact-form" className={styles.roundButton} aria-label="Join us">
            <ArrowUpRight size={15} strokeWidth={2.2} />
          </Link>
          <Link href="#video" className={styles.videoButton}>
            Watch video
          </Link>
          <Link href="#video" className={styles.playButton} aria-label="Watch video">
            <Play size={11} fill="currentColor" strokeWidth={0} />
          </Link>
        </div>
      </div>
    </section>
  )
}
```

**Key differences from AboutBanner:**

- Content is **centered** (flex column, `align-items: center`, `text-align: center`) — not bottom-left absolute.
- Title uses **gradient text** (Pricing pattern), not solid orange.
- No bottom-right info row (affordable training / 14-day return badges) — not in Figma.
- No watermark phoenix icon — not visible in Figma Contact frame.
- `id="contact"` on section so Navbar anchor still works when linked from other pages.

---

## ContactBanner CSS Spec — `index.module.css`

### Section shell

```css
.banner {
  position: relative;
  margin-top: 96px;                              /* Navbar offset */
  height: clamp(668px, calc(100vh - 96px), 900px);
  overflow: hidden;
  isolation: isolate;
  background-color: #090909;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Background image

```css
.bannerImage {
  object-fit: cover;
  object-position: center center;                /* Figma: centered gym scene */
  z-index: -2;
}
```

### Scrim overlay

Use a centered vignette so white text reads clearly over the gym photo:

```css
.scrim {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.55) 100%),
    linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.35) 100%);
}
```

### Centered content container

```css
.content {
  position: relative;
  z-index: 1;
  width: min(100% - 64px, 1400px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 40px;                          /* breathing room above AboutStats */
}
```

### Typography

| Class | CSS |
|---|---|
| `.eyebrow` | Satoshi 700, `clamp(18px, 2vw, 28px)`, white, uppercase optional (Figma shows sentence case), `margin-bottom: 8px` |
| `.title` | Satoshi 900, `clamp(64px, 13.9vw, 200px)`, line-height `0.84`, letter-spacing `-1.28px`, gradient fill (see below) |
| `.description` | Satoshi 700, `13px`, white, `max-width: 420px`, `margin: 20px auto 22px` |

### Gradient title (from PricingBanner)

```css
.title {
  background: linear-gradient(
    180deg,
    rgba(245, 59, 0, 1) 0%,
    rgba(113, 27, 0, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
```

> **Note:** Pricing uses `135deg`; Figma Contact frame specifies a **vertical** gradient (top orange → bottom dark red). Use `180deg` for pixel-accuracy.

### CTA buttons (copy from AboutBanner)

Reuse these classes verbatim from `AboutBanner/index.module.css`:

| Class | Spec |
|---|---|
| `.actionsRow` | `display: flex`, `align-items: center`, `justify-content: center`, `height: 48px` |
| `.joinButton` | White pill, `#111` text, `min-width: 120px`, `padding: 0 26px`, `border-radius: 999px`, Satoshi 13px/800 uppercase |
| `.roundButton` | `48×48` white circle, `ArrowUpRight` icon |
| `.videoButton` | Outlined pill, white text, `border: 1px solid rgba(255,255,255,0.85)`, `margin-left: 16px` |
| `.playButton` | `48×48` outlined circle, `Play` icon |

**Figma label casing:** Buttons display as `JOIN US` and `WATCH VIDEO` — ensure `text-transform: uppercase` on both pill labels (already set in AboutBanner).

---

## Trusted-By Section

**Do not embed logos inside ContactBanner.** Follow Services/Pricing/About:

- Render `<AboutStats />` immediately after `<ContactBanner />` in `page.tsx`.
- Component: `src/components/sections/about/AboutStats/`
- Label: `Trusted by enterprise leaders:`
- Logos: `/images/home/home-logo1.png` × 6
- Bar: `80px` height, `#101010` background

This matches Figma’s bottom strip while keeping a single shared component.

---

## Navbar Integration

Current Navbar CTA (`src/components/layout/Navbar/index.tsx`):

```tsx
<Button variant="white" pill href="/#contact">Contact us</Button>
```

**Recommended update:**

```tsx
<Button variant="white" pill href="/contact">Contact us</Button>
```

Also update the round arrow button href to `/contact`.

Mobile drawer Contact link should point to `/contact` as well.

---

## Responsive Breakpoints

Apply the same breakpoint system used on AboutBanner:

| Breakpoint | Banner adjustments |
|---|---|
| `1200px` | Reduce eyebrow size; title `clamp(80px, 13.9vw, 200px)` |
| `992px` | Navbar becomes hamburger (`margin-top: 78px`); reduce content padding |
| `768px` | Title `clamp(64px, 15vw, 96px)`; CTA buttons `40px` height; description `11px` |
| `576px` | CTA grid: 2-column layout (pill + icon per row); stack actions safely |
| `390px` | Title `clamp(56px, 17vw, 66px)`; min button widths `132px`; tighter gutters `28px` |

Copy responsive rules from `AboutBanner/index.module.css` lines 200–460, adapting only for centered layout (no `.infoRow` or `.watermark` rules needed).

---

## Implementation Steps (Checklist)

### Step 1 — Scaffold route and folder

- [ ] Create `src/app/contact/page.tsx`
- [ ] Create `src/components/sections/contact/ContactBanner/index.tsx`
- [ ] Create `src/components/sections/contact/ContactBanner/index.module.css`

### Step 2 — Build ContactBanner

- [ ] Add full-bleed background using `/images/contact/banner.png`
- [ ] Add dual-gradient scrim overlay
- [ ] Add centered content stack (eyebrow, title, description)
- [ ] Apply gradient title styling (Figma orange → dark red)
- [ ] Add JOIN US + arrow + WATCH VIDEO + play CTA row (AboutBanner pattern)
- [ ] Set `margin-top: 96px` and hero height clamp

### Step 3 — Wire page

- [ ] Compose `Navbar` + `ContactBanner` + `AboutStats` + `MarketingFooter` in `page.tsx`
- [ ] Verify `/contact` route renders in dev server

### Step 4 — Navbar update

- [ ] Change Contact CTA hrefs to `/contact`
- [ ] Confirm active-page styling if applicable

### Step 5 — Responsive pass

- [ ] Test at `1920`, `1200`, `992`, `768`, `576`, `390` px widths
- [ ] Confirm title scales without horizontal overflow
- [ ] Confirm CTA row wraps cleanly on mobile
- [ ] Confirm AboutStats strip sits flush below banner

### Step 6 — Visual QA against Figma

- [ ] Title gradient direction and colors match Figma
- [ ] Eyebrow text: "Reach out to us"
- [ ] Title text: "Contact us"
- [ ] Description copy matches About banner
- [ ] Button styles match About/Services (white fill + outline)
- [ ] Background image framing matches gym interior reference
- [ ] Trusted-by strip present below hero

---

## Phase 2 — Remaining Contact Page Sections (Out of Scope)

After banner approval, assemble the full Contact page using existing shared sections:

| Section | Reuse component | Notes |
|---|---|---|
| Contact form | `AboutContact` | Add `id="contact-form"` for JOIN US anchor |
| FAQ | `AboutFAQ` | Same as Services/Pricing |
| Footer | `MarketingFooter` | Already on page shell |

Optional dedicated wrappers under `sections/contact/` only if Contact-specific copy/layout diverges from AboutContact.

---

## Acceptance Criteria

1. `/contact` route exists and renders without errors.
2. Banner matches Figma: centered layout, gradient "Contact us" title, eyebrow, description, dual CTAs.
3. CTA buttons use the same visual pattern as AboutBanner (pill + companion icon circle).
4. `AboutStats` trusted-by strip appears directly below the banner.
5. Banner is responsive at all five standard breakpoints with no horizontal overflow.
6. Navbar "Contact us" button navigates to `/contact`.
7. Folder structure follows `sections/{page}/{ComponentName}/` convention used by About, Services, and Pricing.

---

## Estimated Effort

| Task | Estimate |
|---|---|
| Folder scaffold + page route | 15 min |
| ContactBanner JSX | 20 min |
| ContactBanner CSS (desktop) | 45 min |
| Responsive CSS | 30 min |
| Navbar href update | 5 min |
| Visual QA + tweaks | 30 min |
| **Total** | **~2.5 hours** |
