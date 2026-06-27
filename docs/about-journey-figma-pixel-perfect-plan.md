# About Journey Section - Figma Pixel-Perfect Implementation Plan

## Objective

Rebuild the `/about` journey section to follow the supplied Figma screenshots exactly.

The design is a long, sequential timeline with **two different desktop layout phases**. It is not a pair of equal timeline columns rendered from top to bottom.

The implementation must reproduce:

- The centered section heading.
- The large Phoenix watermark behind the beginning of the timeline.
- The first four milestones using a center connector.
- The next four milestones using a connector on the far left.
- The exact relationship between headings, number markers, images, and captions.
- The large vertical spacing and dark alternating background bands.
- A controlled responsive version without overlap or horizontal scrolling.

## Files in Scope

Primary implementation:

- `src/components/sections/about/AboutJourney/index.tsx`
- `src/components/sections/about/AboutJourney/AboutJourney.module.css`

Existing assets:

- `public/images/about/journey_logo.png`
- `public/images/about/journey1.png`

Additional Figma image exports will be required because the design shows multiple milestone photos while the repository currently contains only one journey photo.

## Correct Figma Structure

### Phase 1 - Center Timeline

The first four markers use one vertical connector near the center of the section.

Figma order:

1. `01` - 2010, Year 1
2. `02` - 2011, Year 2
3. `03` - 2012, Year 3
4. `04` - 2018, Year 8

Desktop structure:

```text
                 TEXT          MARKER + LINE          IMAGE / CAPTION

        2010 (YEAR 1)                 01              [ journey image ]
   PHOENIX FITNESS FOUNDED             |              First Gym...
                                       |
        2011 (YEAR 2)                 02              [ journey image ]
 BUILDING THE PHOENIX COMMUNITY        |              Membership growth...
                                       |
        2012 (YEAR 3)                 03              [ journey image ]
     SECOND BRANCH LAUNCHED            |              Phoenix Fitness...
                                       |
        2018 (YEAR 8)                 04              [ journey image ]
      FOURTH GYM LAUNCHED                              Phoenix Fitness...
```

Rules:

- Heading block is left of the connector.
- Heading text is right-aligned toward the connector.
- Number badge is centered on the vertical line.
- Image and caption are right of the connector.
- Badge aligns approximately with the image's top edge.
- Heading aligns above or near the upper part of its related image as shown in Figma.
- Connector runs continuously from marker `01` to marker `04`.

### Phase 2 - Left Timeline

The next four markers restart at `01` and use a new vertical connector near the far-left side.

Figma order:

1. `01` - 2016, Year 6
2. `02` - 2019, Year 9
3. `03` - 2025, Year 15
4. `04` - 2026, Year 16

Desktop structure:

```text
MARKER + LINE       IMAGE / CAPTION                         TEXT

     01             [ journey image ]            2016 (YEAR 6) - THIRD MAJOR
      |             Phoenix Fitness...                 LOCATION LAUNCHED
      |
     02             [ journey image ]            2019 (YEAR 9) - MULTI-CITY
      |             Phoenix Fitness...                  EXPANSION BEGINS
      |
     03             [ journey image ]            2025 (YEAR 15) - NEW BRANCH
      |             Phoenix Fitness...                  LAUNCHED
      |
     04             [ journey image ]            2026 (YEAR 16) - BRAND
                    Preparing for...                    GROWTH PHASE
```

Rules:

- Connector is positioned near the left container edge.
- Number badge is centered on the connector.
- Image and caption are immediately right of the connector.
- Heading is placed in the large right-side content area.
- Heading is vertically aligned around the image's upper or center area according to the Figma item.
- Connector runs continuously from the second phase's marker `01` to marker `04`.

## Important Phase Transition

The Figma transition is intentionally staggered.

The first item of Phase 2 (`2016`, marker `01`) begins at approximately the same vertical level as the last item of Phase 1 (`2018`, marker `04`).

This must be implemented as a controlled overlap between two timeline sections:

```text
Phase 1 final row:                     2018 content
Phase 2 first row: 2016 content
```

Do not recreate this with arbitrary negative margins on individual cards. Use an explicit transition grid or a measured phase offset controlled by one CSS custom property.

Recommended structure:

```tsx
<div className={styles.phaseOne}>
  {/* 2010, 2011, 2012 */}
</div>

<div className={styles.transitionRow}>
  {/* 2016 on the left-side timeline */}
  {/* 2018 on the center timeline */}
</div>

<div className={styles.phaseTwo}>
  {/* 2019, 2025, 2026 */}
</div>
```

This structure mirrors the visual transition more accurately than rendering two independent columns.

## Data Model Refactor

Do not use one array split with `slice(0, 4)` and `slice(4)`.

Use explicit Figma groups so order and marker labels remain intentional:

```tsx
const centerTimeline = [
  { marker: '01', year: '2010', ... },
  { marker: '02', year: '2011', ... },
  { marker: '03', year: '2012', ... },
  { marker: '04', year: '2018', ... },
]

const leftTimeline = [
  { marker: '01', year: '2016', ... },
  { marker: '02', year: '2019', ... },
  { marker: '03', year: '2025', ... },
  { marker: '04', year: '2026', ... },
]
```

Keep chronology and visual order separate if the design intentionally interlocks `2016` and `2018`.

Each item should include:

```ts
{
  marker: string
  year: string
  yearLabel: string
  titleWhite: string
  titleOrange: string
  image: string
  imagePosition?: string
  caption: string
}
```

## Required JSX Architecture

Use reusable content pieces while preserving separate phase layouts:

```text
AboutJourney
|-- section heading
|-- Phoenix watermark
|-- center timeline
|   |-- center timeline connector
|   `-- center milestone items
|-- transition row
|   |-- 2016 left milestone
|   `-- 2018 center milestone
`-- left timeline
    |-- left timeline connector
    `-- left milestone items
```

Recommended reusable components inside `index.tsx`:

- `MilestoneHeading`
- `MilestoneMedia`
- `TimelineBadge`
- `CenterTimelineItem`
- `LeftTimelineItem`

Do not force both phases into one shared CSS grid because their alignment contracts are different.

## Desktop Layout Measurements

The final values should be confirmed using Figma Inspect. Based on the supplied screenshots, start with these proportions:

### Section

- Background: `#000000` / `#0a0a0a`.
- Content width: approximately `min(calc(100% - 96px), 1400px)`.
- Top padding before heading: approximately `70-100px`.
- Large bottom padding to protect the final milestone.
- `overflow: hidden` only at section level if the watermark extends outside the container.

### Heading

- One horizontal line on desktop:
  - `OUR 16 YEAR` in orange.
  - `JOURNEY` in white.
- Center aligned.
- Font: `var(--font-heading)`.
- Suggested size: `clamp(84px, 8vw, 132px)`.
- Line-height: approximately `0.88`.
- Gap between orange and white words: approximately `20-30px`.
- Bottom gap before the first milestone: approximately `80-110px`.

### Phase 1 Grid

Suggested grid:

```css
grid-template-columns:
  minmax(0, 1fr)
  56px
  minmax(360px, 0.78fr);
```

- Left heading column: approximately `44-48%`.
- Connector rail: approximately `48-60px`.
- Right media column: approximately `34-38%`.
- Gap from heading to rail: approximately `28-44px`.
- Gap from rail to image: approximately `28-44px`.

### Phase 2 Grid

Suggested grid:

```css
grid-template-columns:
  56px
  minmax(360px, 0.72fr)
  minmax(0, 1.2fr);
```

- Far-left connector rail: approximately `48-60px`.
- Image/caption column: approximately `32-36%`.
- Right heading column consumes the remaining width.
- Gap from rail to image: approximately `28-36px`.
- Gap from image to heading: approximately `80-140px`.

### Images

The Figma cards are landscape images close to the existing source ratio:

```css
aspect-ratio: 1500 / 843;
```

Target desktop width:

- Approximately `360-430px`, depending on the real Figma frame width.

Target details:

- `object-fit: cover`.
- Border radius approximately `2-6px`; the Figma reference is much squarer than the current `18px`.
- Caption gap approximately `28-36px`.
- Caption width approximately equal to the image width.

### Badge and Connector

- Badge diameter: approximately `42-46px`.
- Dark fill matching section background.
- Border: `1px solid rgba(255,255,255,0.18)`.
- Text: `12-13px`.
- Connector: `1px dotted` or low-contrast dashed line based on Figma inspection.
- Connector color: approximately `rgba(255,255,255,0.15)`.
- Every badge must be centered exactly on the line.

### Milestone Heading

- Font: `var(--font-heading)`.
- Year: orange.
- Year label: white.
- Main title: white.
- Highlight word: orange where shown.
- Suggested size: `clamp(34px, 2.7vw, 48px)`.
- Line-height: approximately `0.98`.
- Phase 1 heading: right aligned.
- Phase 2 heading: left aligned.

### Captions

- Font: `var(--font-satoshi)`.
- Color: white.
- Suggested desktop size: `28-34px`.
- Line-height: approximately `1`.
- Preserve the line breaks visible in Figma by controlling caption width, not by inserting `<br />` tags unless Figma requires a fixed editorial break.

## Phoenix Watermark

The first screenshots show a large Phoenix logo behind the first timeline items.

Use:

- `public/images/about/journey_logo.png`
- Absolute positioning inside the section.
- Place behind the content with `z-index: 0`.
- Keep timeline content at `z-index: 1`.
- Apply a dark red tint or opacity matching Figma.

Suggested initial CSS:

```css
.watermark {
  position: absolute;
  top: 230px;
  left: 4%;
  width: clamp(420px, 40vw, 650px);
  opacity: 0.14;
  filter: sepia(1) saturate(5) hue-rotate(335deg);
  pointer-events: none;
}
```

The exact size, tint, and position must be adjusted against Figma.

## Background Bands

The screenshots show subtle alternating black tones across long vertical sections.

Implement bands using phase wrappers rather than attaching backgrounds to individual cards:

- Primary background: `#000000`.
- Secondary band: approximately `#101010`.
- Band transitions should align with milestone groups shown in Figma.
- Avoid visible gaps between wrappers.

## Asset Work Required

The current repository repeats:

```text
/images/about/journey1.png
```

for all eight milestones.

The Figma screenshots use at least these distinct images:

- Person using a tablet.
- Aerial parking/logistics image.
- Hand holding a phone with map navigation.
- Shipping/container yard image.
- Additional milestone images for the remaining entries.

Export the correct images from Figma and add them with stable names:

```text
public/images/about/journey-2010.png
public/images/about/journey-2011.png
public/images/about/journey-2012.png
public/images/about/journey-2016.png
public/images/about/journey-2018.png
public/images/about/journey-2019.png
public/images/about/journey-2025.png
public/images/about/journey-2026.png
```

Pixel-perfect completion is not possible while all milestones reuse `journey1.png`.

## Responsive Strategy

### Above 1200px

- Preserve the exact two-phase Figma layout.
- Phase 1: heading left, center connector, media right.
- Phase 2: left connector, media left, heading right.
- Preserve the staggered 2016/2018 transition.

### 993px to 1199px

- Keep the phase-specific direction.
- Reduce image width, heading size, and inter-column gaps.
- Do not let heading text cross the connector.
- Reduce the transition overlap if necessary.

### 769px to 992px

- Convert both phases into one readable timeline pattern:
  - Connector left.
  - Badge on connector.
  - Heading and media to the right.
- Preserve visual order as:
  - 2010
  - 2011
  - 2012
  - 2016
  - 2018
  - 2019
  - 2025
  - 2026
- Remove desktop-only overlap.

### 768px and below

- Use one left-side connector.
- Keep badge visible.
- Stack heading above image.
- Use full available image width.
- Heading: approximately `28-38px`.
- Caption: approximately `20-28px`.
- Reduce item gap but keep enough space to distinguish milestones.

### 480px and below

- Rail width: approximately `34-38px`.
- Badge: approximately `34-38px`.
- Content gap from rail: approximately `14px`.
- Section side padding: approximately `14-20px`.
- Heading should wrap naturally without clipping.
- No horizontal scrollbar.

## Current Code to Replace

The current implementation uses:

```tsx
const timelineColumns = [milestones.slice(0, 4), milestones.slice(4)]
```

and:

```css
.timelineGrid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
```

This creates two parallel columns and does not reproduce the Figma sequence.

Replace:

- `.timelineGrid`
- `.timelineColumn`
- The shared `.timelineItem` grid used for both phases
- Globally sequential marker IDs `01-08`

With:

- `.centerTimeline`
- `.centerTimelineItem`
- `.transitionRow`
- `.leftTimeline`
- `.leftTimelineItem`
- Separate marker sequences `01-04` for each phase

## Implementation Sequence

1. Export and add the missing Figma milestone images.
2. Reorder data into `centerTimeline` and `leftTimeline`.
3. Add the Phoenix watermark using `journey_logo.png`.
4. Build the Phase 1 center-connector layout.
5. Build the 2016/2018 transition row.
6. Build the Phase 2 left-connector layout.
7. Add background bands and exact vertical spacing.
8. Match typography, image sizing, captions, marker size, and connector style.
9. Add tablet and mobile layout rules.
10. Run build and perform screenshot comparison at all target widths.

## Pixel-Perfect Verification

### Desktop target

Use the same viewport and zoom as the Figma frame export.

Check:

- Heading width and baseline.
- Watermark size and position.
- Connector X position.
- Badge center against connector line.
- Heading-to-connector distance.
- Connector-to-image distance.
- Image width, height, crop, and radius.
- Caption width and line breaks.
- Vertical distance between milestones.
- Exact alignment of the 2016/2018 transition.
- Background band boundaries.

### Responsive targets

Capture and compare:

- `1920 x 1080`
- `1440 x 900`
- `1280 x 800`
- `1024 x 768`
- `768 x 1024`
- `390 x 844`

### Technical checks

Run:

```bash
npm run build
```

Confirm:

- No TypeScript errors.
- No CSS module errors.
- No horizontal overflow.
- All images have useful alt text.
- Connector lines do not stop between items.
- No heading, marker, image, or caption overlap.

## Expected File Changes

| File | Required change |
|---|---|
| `src/components/sections/about/AboutJourney/index.tsx` | Replace parallel-column rendering with two explicit Figma phases and transition row |
| `src/components/sections/about/AboutJourney/AboutJourney.module.css` | Implement center timeline, left timeline, watermark, bands, spacing, and responsive layouts |
| `public/images/about/journey-*.png` | Add the milestone-specific Figma image exports |

No other About page sections should need modification.

