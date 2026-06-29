# AboutJourney Section — Implementation Plan

## Overview

**Section name:** `AboutJourney`  
**File location:** `src/components/sections/about/AboutJourney/`  
**Files to create:**
- `index.tsx`
- `AboutJourney.module.css`

**Placement:** After `<AboutEliteAmenities />` in `src/app/about/page.tsx`

---

## Figma Design Analysis

### Section Heading

```
OUR 16 YEAR   ← orange (#E8400C)
JOURNEY       ← white (#ffffff)
```

- Font: `Bebas Neue` (`var(--font-heading)`)
- Size: `clamp(100px, 11vw, 160px)`
- Weight: `400` (Bebas Neue is inherently heavy)
- Line-height: `0.9`
- Letter-spacing: `-1px`
- Alignment: `left` (flush to container left edge)
- "OUR 16 YEAR" and "JOURNEY" are on two separate lines; "OUR 16 YEAR" spans a single `<span class="orange">`, "JOURNEY" spans a `<span class="white">`

---

### Layout Structure (Desktop ≥ 992px)

Each timeline entry is a **full-width row** split into two halves:

```
[ TEXT BLOCK  38% ] [ badge ] [ IMAGE BLOCK  57% ]
```

- **Odd rows (index 0, 2, 4, 6):** text LEFT, image RIGHT
- **Even rows (index 1, 3, 5, 7):** image LEFT, text RIGHT (`.reverse` class)
- Gap between text and image: `40px`
- Rows separated by `80px` vertical gap (no border/divider)

---

### Text Block (per entry)

```
2010 (YEAR 1)           ← year line
PHOENIX FITNESS         ← title line 1 (white)
FOUNDED                 ← title line 2 / highlight word (orange)
```

**Year line:**
- `2010` — Bebas Neue, `48px`, orange `#E8400C`, `font-weight: 400`
- ` (YEAR 1)` — Bebas Neue, `48px`, white `rgba(255,255,255,0.75)`, `font-weight: 400`
- They are inline in a single `<span>` element

**Title lines:**
- Font: `Bebas Neue` (`var(--font-heading)`)
- Size: `clamp(64px, 7vw, 96px)`
- Weight: `400`
- Line-height: `1`
- Letter-spacing: `-0.5px`
- `text-transform: uppercase`
- All words white, **last/highlight word** in orange `#E8400C`
- Title uses `<h3>` element

**Caption text** (below image, NOT below text block):
- Font: `Open Sans` (`var(--font-subtitle)`)
- Size: `18px`
- Weight: `400`
- Line-height: `1.5`
- Color: `rgba(255,255,255,0.75)`
- Appears under the image, left-aligned

---

### Number Badge (per entry)

- Small circle: `44px × 44px`
- Background: `rgba(255,255,255,0.06)`
- Border: `1px solid rgba(255,255,255,0.18)`
- Border-radius: `50%`
- Content: `01`, `02`... `08` — white, Satoshi, `13px`, `font-weight: 700`, letter-spacing `0.5px`
- **Position:** Absolutely positioned at the **top-right corner of the image** (`top: 16px; right: 16px`)

---

### Image Block (per entry)

- Uses `journey1.png` for all entries
- `border-radius: 20px` (`var(--radius-lg)`)
- `object-fit: cover`
- `object-position: center`
- Height: `480px` at desktop
- Width: fills its flex column (`flex: 0 0 57%`)
- `overflow: hidden` on wrapper
- Position: `relative` (for badge overlay)
- Caption below the image (not overlaid)

---

## Data Array

```tsx
const milestones = [
  {
    id: '01', year: '2010', yearLabel: 'YEAR 1',
    titleWhite: 'PHOENIX FITNESS', titleOrange: 'FOUNDED',
    image: '/images/about/journey1.png',
    caption: 'First Gym – Ramamurthy Nagar, Bangalore',
  },
  {
    id: '02', year: '2011', yearLabel: 'YEAR 2',
    titleWhite: 'BUILDING THE PHOENIX', titleOrange: 'COMMUNITY',
    image: '/images/about/journey1.png',
    caption: 'Membership growth & local recognition',
  },
  {
    id: '03', year: '2012', yearLabel: 'YEAR 3',
    titleWhite: 'SECOND BRANCH', titleOrange: 'LAUNCHED',
    image: '/images/about/journey1.png',
    caption: '',
  },
  {
    id: '04', year: '2016', yearLabel: 'YEAR 6',
    titleWhite: 'THIRD MAJOR LOCATION', titleOrange: 'LAUNCHED',
    image: '/images/about/journey1.png',
    caption: 'Phoenix Fitness – Hope Farm, Whitefield',
  },
  {
    id: '05', year: '2018', yearLabel: 'YEAR 8',
    titleWhite: 'FOURTH GYM', titleOrange: 'LAUNCHED',
    image: '/images/about/journey1.png',
    caption: 'Phoenix Fitness – Seegehalli, Bangalore',
  },
  {
    id: '06', year: '2019', yearLabel: 'YEAR 9',
    titleWhite: 'MULTI-CITY EXPANSION', titleOrange: 'BEGINS',
    image: '/images/about/journey1.png',
    caption: 'Phoenix Fitness – Kompally, Hyderabad & Nallurhalli, Bangalore',
  },
  {
    id: '07', year: '2025', yearLabel: 'YEAR 15',
    titleWhite: 'NEW BRANCH', titleOrange: 'LAUNCHED',
    image: '/images/about/journey1.png',
    caption: 'Phoenix Fitness – Budigere Bommenahalli, Bangalore',
  },
  {
    id: '08', year: '2026', yearLabel: 'YEAR 16',
    titleWhite: 'BRAND GROWTH', titleOrange: 'PHASE',
    image: '/images/about/journey1.png',
    caption: 'Preparing for future expansion',
  },
]
```

---

## JSX Structure (`index.tsx`)

```tsx
import Image from 'next/image'
import styles from './AboutJourney.module.css'

export default function AboutJourney() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* HEADING */}
        <h2 className={styles.sectionHeading}>
          <span className={styles.headingOrange}>Our 16 Year</span>
          <span className={styles.headingWhite}>Journey</span>
        </h2>

        {/* TIMELINE ROWS */}
        <div className={styles.timeline}>
          {milestones.map((m, i) => (
            <div key={m.id} className={`${styles.row} ${i % 2 === 1 ? styles.reverse : ''}`}>

              {/* TEXT BLOCK */}
              <div className={styles.textBlock}>
                <span className={styles.yearLine}>
                  <span className={styles.yearNum}>{m.year}</span>
                  <span className={styles.yearLabel}>&nbsp;({m.yearLabel})</span>
                </span>
                <h3 className={styles.title}>
                  <span className={styles.titleWhite}>{m.titleWhite}</span>
                  <br />
                  <span className={styles.titleOrange}>{m.titleOrange}</span>
                </h3>
              </div>

              {/* IMAGE BLOCK */}
              <div className={styles.imageBlock}>
                <div className={styles.imageWrap}>
                  <Image
                    src={m.image}
                    alt={`${m.year} – ${m.titleWhite} ${m.titleOrange}`}
                    fill
                    sizes="(max-width: 992px) 100vw, 57vw"
                    className={styles.photo}
                  />
                  <span className={styles.badge}>{m.id}</span>
                </div>
                {m.caption && (
                  <p className={styles.caption}>{m.caption}</p>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
```

---

## CSS (`AboutJourney.module.css`)

### Section & Container

```css
.section {
  background: #0a0a0a;
  width: 100%;
  padding: 100px 0 120px;
}

.inner {
  width: min(100% - 100px, 1400px);
  margin: 0 auto;
}
```

### Section Heading

```css
.sectionHeading {
  display: block;
  line-height: 0.9;
  letter-spacing: -1px;
  text-transform: uppercase;
  margin: 0 0 80px;
}

.headingOrange {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(100px, 11vw, 160px);
  font-weight: 400;
  color: #E8400C;
}

.headingWhite {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(100px, 11vw, 160px);
  font-weight: 400;
  color: #ffffff;
}
```

### Timeline Row

```css
.timeline {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.row {
  display: flex;
  align-items: center;
  gap: 40px;
}

.row.reverse {
  flex-direction: row-reverse;
}
```

### Text Block

```css
.textBlock {
  flex: 0 0 38%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.yearLine {
  display: block;
  font-family: var(--font-heading);
  font-size: 48px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
}

.yearNum {
  color: #E8400C;
}

.yearLabel {
  color: rgba(255, 255, 255, 0.75);
}

.title {
  font-family: var(--font-heading);
  font-size: clamp(64px, 7vw, 96px);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  margin: 0;
}

.titleWhite {
  color: #ffffff;
}

.titleOrange {
  color: #E8400C;
}
```

### Image Block

```css
.imageBlock {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.imageWrap {
  position: relative;
  width: 100%;
  height: 480px;
  border-radius: 20px;
  overflow: hidden;
}

.photo {
  object-fit: cover;
  object-position: center;
}

.badge {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-satoshi), var(--font-subtitle), sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #ffffff;
  z-index: 2;
}

.caption {
  font-family: var(--font-subtitle), sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
}
```

### Responsive

```css
/* ≤ 1200px */
@media (max-width: 1200px) {
  .headingOrange,
  .headingWhite { font-size: clamp(80px, 9vw, 120px); }
  .title { font-size: clamp(52px, 6vw, 80px); }
  .yearLine { font-size: 40px; }
  .imageWrap { height: 380px; }
}

/* ≤ 992px — stack vertically */
@media (max-width: 992px) {
  .row,
  .row.reverse { flex-direction: column; gap: 28px; }
  .textBlock { flex: none; width: 100%; }
  .imageWrap { height: 320px; }
}

/* ≤ 768px */
@media (max-width: 768px) {
  .section { padding: 64px 0 80px; }
  .inner { width: min(100% - 48px, 100%); }
  .sectionHeading { margin-bottom: 48px; }
  .headingOrange,
  .headingWhite { font-size: clamp(64px, 16vw, 96px); }
  .title { font-size: clamp(48px, 12vw, 64px); }
  .yearLine { font-size: 32px; }
  .imageWrap { height: 260px; }
  .caption { font-size: 16px; }
  .timeline { gap: 56px; }
}

/* ≤ 480px */
@media (max-width: 480px) {
  .headingOrange,
  .headingWhite { font-size: 56px; }
  .title { font-size: 44px; }
  .imageWrap { height: 220px; }
}
```

---

## Color Reference

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#E8400C` | Orange — year numbers, highlight words, heading line 1 |
| White | `#ffffff` | Title words, heading line 2 |
| Muted white | `rgba(255,255,255,0.75)` | Year label "(YEAR X)", caption text |
| Section bg | `#0a0a0a` | Section background |
| Badge bg | `rgba(255,255,255,0.06)` | Number badge fill |
| Badge border | `rgba(255,255,255,0.18)` | Number badge border |

---

## Font Reference

| Element | Font | Size | Weight |
|---|---|---|---|
| Section heading | Bebas Neue (`--font-heading`) | clamp(100px,11vw,160px) | 400 |
| Year number "2010" | Bebas Neue | 48px | 400 |
| Year label "(YEAR 1)" | Bebas Neue | 48px | 400 |
| Title | Bebas Neue | clamp(64px,7vw,96px) | 400 |
| Number badge | Satoshi (`--font-satoshi`) | 13px | 700 |
| Caption | Open Sans (`--font-subtitle`) | 18px | 400 |

---

## Registration in `about/page.tsx`

```tsx
import AboutJourney from '../../components/sections/about/AboutJourney'

// Inside <main>:
<AboutEliteAmenities />
<AboutJourney />
```

---

## File Summary

| File | Action |
|---|---|
| `src/components/sections/about/AboutJourney/index.tsx` | Create |
| `src/components/sections/about/AboutJourney/AboutJourney.module.css` | Create |
| `src/app/about/page.tsx` | Add import + JSX |
