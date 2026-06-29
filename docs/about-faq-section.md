# AboutFAQ Section — Implementation Plan

## Overview

**Section name:** `AboutFAQ`  
**File location:** `src/components/sections/about/AboutFAQ/`  
**Files to create:**
- `index.tsx`
- `AboutFAQ.module.css`

**Placement:** After `<AboutJourney />` in `src/app/about/page.tsx`

---

## Figma Design Analysis

### Section Heading (centered)

```
FREQUENTLY        ← orange (#E8400C)
ASKED QUESTIONS   ← white (#ffffff)
```

- Font: `Bebas Neue` (`var(--font-heading)`)
- Size: `clamp(56px, 6vw, 80px)`
- Weight: `400`
- Line-height: `1`
- Letter-spacing: `-0.5px`
- `text-transform: uppercase`
- Both lines centered (`text-align: center`)
- Margin below heading before accordion: `56px`

---

### Container Width

- Narrower than full page: `min(100% - 64px, 960px)`
- Centered with `margin: 0 auto`
- This matches the FAQ accordion not spanning full 1400px width

---

### Accordion Items (6 total)

Each item is a collapsed accordion row:

```
[  Question text                              [+]  ]
```

**Item dimensions:**
- Height (collapsed): `~88px`
- Padding: `28px 32px`
- Border: `1px solid rgba(255, 255, 255, 0.12)` on all sides
- Border-radius: `8px`
- Background: transparent (same as section `#0a0a0a`)
- Gap between items: `12px`

**When expanded:**
- Height grows to show answer text below question
- "+" icon rotates to 45° (becomes "×")
- Answer text slides in with CSS transition
- Border color brightens slightly: `rgba(255, 255, 255, 0.22)`

---

### Question Text

- Font: `Open Sans` (`var(--font-subtitle)`)
- Size: `18px`
- Weight: `400`
- Color: `rgba(255, 255, 255, 0.90)`
- Flex: grows to fill row

---

### Plus Button

- Shape: Circle, `40px × 40px`
- Border: `1px solid rgba(255, 255, 255, 0.75)`
- Background: transparent
- Icon: `+` (Lucide `Plus` icon, 18px, white) — rotates 45° when open
- Transition: `transform 0.3s ease`
- Flex-shrink: `0` (never squishes)

---

### Answer Text (revealed on open)

- Font: `Open Sans` (`var(--font-subtitle)`)
- Size: `16px`
- Weight: `400`
- Line-height: `1.6`
- Color: `rgba(255, 255, 255, 0.65)`
- Padding: `0 0 24px` (top padding handled by gap inside item)
- Transition: `max-height 0.35s ease, opacity 0.3s ease`

---

## FAQ Data (6 items, Phoenix Fitness–adapted)

```tsx
const faqs = [
  {
    q: "I'm a complete beginner. Can I still join Phoenix Fitness?",
    a: "Absolutely! Phoenix Fitness welcomes members of all fitness levels. Our trainers will create a personalised plan that starts at your current level and progresses at your pace.",
  },
  {
    q: "Do I need to bring anything for my first session?",
    a: "Just bring comfortable workout clothes, a water bottle, and a positive mindset. Towels and lockers are available at all our branches.",
  },
  {
    q: "Are personal training sessions included in the plans?",
    a: "Personal training sessions are available as an add-on to any membership. Our team will help you choose the right package based on your fitness goals.",
  },
  {
    q: "What kind of group classes do you offer?",
    a: "We offer a wide range of group classes including strength training, HIIT, yoga, Zumba, and more. Class schedules vary by branch — check our app for the latest timings.",
  },
  {
    q: "Can I freeze or pause my membership if needed?",
    a: "Yes, you can freeze your membership for up to 30 days per year. Visit the front desk or contact our support team to request a freeze.",
  },
  {
    q: "How do I cancel my membership?",
    a: "To cancel, simply visit your nearest Phoenix Fitness branch with a written request 30 days before your next billing date. Our team will process it promptly.",
  },
]
```

---

## JSX Structure (`index.tsx`)

```tsx
'use client'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import styles from './AboutFAQ.module.css'

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) =>
    setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.inner}>

        {/* HEADING */}
        <h2 id="faq-heading" className={styles.heading}>
          <span className={styles.headingOrange}>Frequently</span>
          <span className={styles.headingWhite}>Asked Questions</span>
        </h2>

        {/* ACCORDION */}
        <div className={styles.accordion}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
              >
                {/* TRIGGER ROW */}
                <button
                  className={styles.trigger}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className={styles.question}>{faq.q}</span>
                  <span
                    className={`${styles.plusBtn} ${isOpen ? styles.plusOpen : ''}`}
                    aria-hidden="true"
                  >
                    <Plus size={18} strokeWidth={2} />
                  </span>
                </button>

                {/* ANSWER PANEL */}
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
                >
                  <p className={styles.answer}>{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
```

---

## CSS (`AboutFAQ.module.css`)

### Section & Container

```css
.section {
  background: #0a0a0a;
  width: 100%;
  padding: 100px 0 120px;
}

.inner {
  width: min(100% - 64px, 960px);
  margin: 0 auto;
}
```

### Heading

```css
.heading {
  display: block;
  text-align: center;
  line-height: 1;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  margin: 0 0 56px;
}

.headingOrange {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(56px, 6vw, 80px);
  font-weight: 400;
  color: #E8400C;
}

.headingWhite {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(56px, 6vw, 80px);
  font-weight: 400;
  color: #ffffff;
}
```

### Accordion Container

```css
.accordion {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
```

### Item

```css
.item {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.itemOpen {
  border-color: rgba(255, 255, 255, 0.22);
}
```

### Trigger (button row)

```css
.trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 28px 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
}

.question {
  font-family: var(--font-subtitle), sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.90);
  flex: 1;
}
```

### Plus Button

```css
.plusBtn {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: transform 0.3s ease, border-color 0.2s ease;
}

.plusOpen {
  transform: rotate(45deg);
  border-color: #E8400C;
  color: #E8400C;
}
```

### Answer Panel (CSS height animation)

```css
.panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.3s ease;
  opacity: 0;
}

.panelOpen {
  max-height: 300px;
  opacity: 1;
}

.answer {
  font-family: var(--font-subtitle), sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  padding: 0 32px 28px;
  margin: 0;
}
```

### Responsive

```css
@media (max-width: 768px) {
  .section { padding: 64px 0 80px; }
  .inner   { width: min(100% - 32px, 100%); }
  .heading { margin-bottom: 40px; }
  .headingOrange,
  .headingWhite { font-size: clamp(44px, 12vw, 64px); }
  .trigger { padding: 22px 20px; gap: 16px; }
  .question { font-size: 16px; }
  .plusBtn  { width: 36px; height: 36px; }
  .answer   { padding: 0 20px 22px; font-size: 15px; }
}

@media (max-width: 480px) {
  .headingOrange,
  .headingWhite { font-size: 40px; }
  .question { font-size: 14px; }
}
```

---

## Color Reference

| Element | Value | Usage |
|---|---|---|
| Section bg | `#0a0a0a` | Background |
| "FREQUENTLY" | `#E8400C` | Orange heading line |
| "ASKED QUESTIONS" | `#ffffff` | White heading line |
| Question text | `rgba(255,255,255,0.90)` | Accordion question |
| Answer text | `rgba(255,255,255,0.65)` | Expanded answer |
| Item border (closed) | `rgba(255,255,255,0.12)` | Accordion item outline |
| Item border (open) | `rgba(255,255,255,0.22)` | Brighter when expanded |
| Plus icon (closed) | `rgba(255,255,255,0.75)` | Circle border |
| Plus icon (open) | `#E8400C` | Orange when open, rotates 45° |

---

## Font Reference

| Element | Font | Size | Weight |
|---|---|---|---|
| "FREQUENTLY" | Bebas Neue | clamp(56px,6vw,80px) | 400 |
| "ASKED QUESTIONS" | Bebas Neue | clamp(56px,6vw,80px) | 400 |
| Question text | Open Sans (`--font-subtitle`) | 18px | 400 |
| Answer text | Open Sans (`--font-subtitle`) | 16px | 400 |

---

## Registration in `about/page.tsx`

```tsx
import AboutFAQ from '../../components/sections/about/AboutFAQ'

// Inside <main>:
<AboutJourney />
<AboutFAQ />
```

---

## Notes

- `'use client'` is required because of `useState` accordion logic
- Only one FAQ item open at a time (single-open accordion)
- CSS `max-height` animation (no JS height measurement needed)
- `lucide-react` `Plus` icon already used in the codebase — no new dependency
