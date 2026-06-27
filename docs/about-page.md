# About Page — Full Documentation

## Page Route
`/about` → `src/app/about/page.tsx`

---

## Sections (Render Order)

| # | Component | File Path |
|---|-----------|-----------|
| 1 | `<Navbar />` | `src/components/layout/Navbar/` |
| 2 | `<AboutBanner />` | `src/components/sections/about/AboutBanner/` |
| 3 | `<AboutStats />` | `src/components/sections/about/AboutStats/` |
| 4 | `<AboutMissionVision />` | `src/components/sections/about/AboutMissionVision/` |

---

## Section Details

### 1. AboutBanner

**Purpose:** Full-viewport hero banner for the About page.

**Layout:**
- `position: relative`, `height: clamp(668px, calc(100vh - 96px), 900px)`
- `margin-top: 96px` (offset for fixed Navbar)
- Background: full-cover image (`/images/about/banner.png`) + dual gradient scrim overlay
- Watermark logo (`/images/about/banner_bg_icon.png`) — top-right, `clamp(190px, 21.9vw, 286px)`, `opacity: 0.32`
- Content container: `width: min(100% - 64px, 1400px)`, centered

**Content (`.copyBlock`) — anchored to bottom-left:**
- **Eyebrow:** "About Phoenix Fitness"
- **Heading (H1):** "Rise With Us"
- **Description:** short 2-line body text
- **CTA Row:** 4 elements — `Join us` pill button + arrow icon button + `Watch video` outline button + play icon button
- **Info Row (bottom-right):** "Affordable training & eating plans" | "14 day free return on purchase" with RotateCcw icon

**Images:**
| Asset | Usage |
|-------|-------|
| `/images/about/banner.png` | Full-cover hero background |
| `/images/about/banner_bg_icon.png` | Watermark (top-right, greyscale, 0.32 opacity) |

---

### 2. AboutStats

**Purpose:** Thin trust bar showing partner/enterprise logos below the banner.

**Layout:**
- `height: 80px`, `background: #101010`
- Top + bottom borders: `1px solid rgba(255,255,255,0.08)`
- Inner flex row (centered), `gap: 40px`

**Content:**
- Label text: "Trusted by enterprise leaders:"
- 6× logo images from `/images/home/home-logo1.png` (greyscale, `opacity: 0.52`)

---

### 3. AboutMissionVision

**Purpose:** Mission & Vision section with copy on the left and a 2×2 image grid collage on the right.

**Layout:**
- `height: 740px`, `background: #000000`
- Inner container: `width: min(100% - 64px, 1500px)`, `margin: 20px auto`
- Watermark logo (`/images/about/about_mission_logo.png`) — bottom-left, `820px × 640px`

**Left Column (`.copyColumn`) — `width: 612px`, `top: 36px`:**
- **Heading (H2):** "Mission & Vision" — "Mission &" in orange `#f13a05`, "Vision" in white
- **Body copy:** 4-line paragraph, `width: 740px`
- **Metrics pill bar:** 3-column pill (`border-radius: 999px`), height `68px` with icon + text for each stat:
  - Crown icon → "17+ years of experience"
  - CreditCard icon → "5000+ community members"
  - Columns2 icon → "5+ branches across bangalore"

**Right Column (`.mediaColumn`) — `width: 836px`, `height: 574px`, `top: 48px`, `right: 20px`:**
- 2×2 corner-touching image grid with `6px` gaps:
  | Card | Position | Size |
  |------|----------|------|
  | `.topLeft` | `top:0, left:140px` | `480×284px` |
  | `.topRight` | `top:0, left:615px` | `326×284px` |
  | `.bottomLeft` | `top:305px, left:0` | `484×270px` |
  | `.bottomRight` | `top:305px, left:495px` | `454×270px` |
- Overlay statement floated over bottom images: "Its about / **Resilience,** / Discipline, & / **Self-belief.**" (orange highlights on Resilience and Self-belief)

**Images:**
| Asset | Card |
|-------|------|
| `/images/about/mission1.png` | Top Left |
| `/images/about/mission2.png` | Top Right |
| `/images/about/mission3.png` | Bottom Left |
| `/images/about/mission4.png` | Bottom Right |

---

## Theme Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#E8400C` | Phoenix orange — CTAs, orange text |
| `#f13a05` | Direct value | H2 orange span, statement highlights (slight variation) |
| `--color-black` | `#1A1A1A` | Near-black text |
| `--color-white` | `#FFFFFF` | Primary text on dark sections |
| `--color-dark-bg` | `#111111` | Dark section backgrounds |
| `--color-card-bg` | `#1E1E1E` | Card backgrounds |
| `--color-text-muted` | `#888888` | Secondary/muted text |
| `--color-border` | `#2A2A2A` | Card and divider borders |
| `--color-overlay` | `rgba(0,0,0,0.55)` | Image overlays |
| `--color-subtitle` | `rgba(255,255,255,0.2)` | Subtitle global color |
| `#000000` | Direct value | MissionVision section bg |
| `#101010` | Direct value | Stats bar bg |
| `#090909` | Direct value | Banner fallback bg |

---

## Font Families

| Token | Value | Used For |
|-------|-------|----------|
| `--font-heading` | `Bebas Neue` (Google Fonts) | H1–H2 headings, statement overlay |
| `--font-subtitle` | `Open Sans` / `Open Sans Condensed` (Google Fonts) | Subtitles, body copy, description text |
| `--font-satoshi` | `Satoshi` (Fontshare CDN) + `Plus Jakarta Sans` fallback | Eyebrow, banner title, buttons, metric labels |
| `--font-body` | `Open Sans Condensed` | General body text |

**Font loading:**
- `Bebas_Neue` — weight `400`, Google Fonts
- `Open_Sans` — weights `300, 400, 500, 700, 800`, Google Fonts
- `Plus_Jakarta_Sans` — weights `400, 500, 700, 800`, Google Fonts (Satoshi fallback)
- `Satoshi` — weights `400, 500, 700, 900` via Fontshare CDN (`api.fontshare.com`)

---

## Font Sizes (Desktop ≥ 1200px)

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Banner eyebrow | `36px` | `700` | `1` | — |
| Banner H1 "Rise With Us" | `clamp(96px, 13.9vw, 200px)` | `900` | `0.83` | `-1.28px` |
| Banner description | `13px` | `700` | `1.3` | — |
| Banner CTA buttons | `13px` | `800` | `1` | — |
| Banner info row items | `13px` | `700` | `1.15` | — |
| Stats label | `13px` | `700` | `1` | `0.5px` |
| MissionVision H2 | `88px` | `400` | `0.9` | `0` |
| MissionVision body copy | `26px` | `500` | `1.2` | `0` |
| Metric pill text | `13.5px` | `700` | `1.2` | `0` |
| Statement overlay heading | `88px` | `400` | `0.97` | `0` |
| Statement "Its about" | `28px` | `400` | `1.08` | — |

---

## Layout Structure

```
<html>
  <body>
    <Navbar />                          ← fixed, height 96px
    <main>
      <AboutBanner />                   ← 100vh - 96px (clamp 668–900px)
        ├── background image (fill)
        ├── gradient scrim overlay
        ├── watermark icon (top-right)
        └── content (max-width 1400px, centered)
            ├── copyBlock (bottom-left)
            │   ├── eyebrow text
            │   ├── H1 title
            │   ├── description
            │   └── CTA row (4 buttons)
            └── infoRow (bottom-right)
                ├── "Affordable training..." text
                └── "14 day free return..." with icon

      <AboutStats />                    ← height 80px, full-width bar
        └── inner (max-width 1400px, centered flex)
            ├── label text
            └── logoTrack (6 logos)

      <AboutMissionVision />            ← height 740px
        ├── watermark logo (bottom-left bg)
        └── inner (max-width 1500px, centered)
            ├── copyColumn (left, width 612px)
            │   ├── H2 "Mission & Vision"
            │   ├── body paragraph
            │   └── metrics pill (3 stats)
            └── mediaColumn (right, 836×574px)
                ├── topLeft image (480×284px)
                ├── topRight image (326×284px)
                ├── bottomLeft image (484×270px)
                ├── bottomRight image (454×270px)
                └── statement overlay text
    </main>
  </body>
</html>
```

---

## Responsive Breakpoints

| Breakpoint | Key Changes |
|------------|-------------|
| `≤ 1400px` | Container pad increases to `80px`, font sizes scale down |
| `≤ 1200px` | Banner height reduced, eyebrow `28px`, MissionVision col `52%`, media scaled `0.82` |
| `≤ 992px` | Banner `margin-top: 78px`, infoRow moves below copyBlock, MissionVision stacks vertically (columns → block) |
| `≤ 768px` | Banner `margin-top: 70px`, scrim adjusted, Stats bar wraps logos |
| `≤ 640px` | MissionVision H2 `54px`, metrics pill stacks to 1 column, media scaled `0.72` |

---

## Container Widths

| Context | Max Width | Padding |
|---------|-----------|---------|
| Global container | `1280px` | `50px` horizontal |
| Banner content | `min(100% - 64px, 1400px)` | `32px` each side |
| Stats inner | `min(100% - 64px, 1400px)` | `32px` each side |
| MissionVision inner | `min(100% - 64px, 1500px)` | `32px` each side |
