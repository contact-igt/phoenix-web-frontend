# About Journey Timeline UI Fix — Implementation Plan

## Goal

Refactor the `/about` journey section so it matches the supplied Figma layout:

- Two balanced timeline columns on desktop.
- One continuous connector line on the left side of each column.
- Every milestone's content stays to the right of its connector.
- The numbered circle sits beside the top edge of the milestone image.
- Milestones have a larger, consistent vertical gap without overlapping.
- The timeline becomes a clean single-column layout on tablet and mobile.

## Current Implementation

Primary files:

- `src/components/sections/about/AboutJourney/index.tsx`
- `src/components/sections/about/AboutJourney/AboutJourney.module.css`

Current data is split into `group1` and `group2`. Each group uses a different grid structure:

- Group 1: text left, connector center, image right.
- Group 2: connector left, image center, text right.

The second group is pulled upward with:

```css
margin-top: -440px;
```

The first group's image is also manually displaced with:

```css
top: 180px;
```

These offsets cause the content collision, mismatched connector positions, inconsistent spacing, and the repeated `01–04` marker sequence visible in the current page.

## Figma Layout Interpretation

The desktop design is two independent vertical timelines:

```text
LEFT TIMELINE COLUMN                 RIGHT TIMELINE COLUMN

│  2010 milestone content           │  2018 milestone content
01 image + caption                  05 image + caption
│                                   │
│  2011 milestone content           │  2019 milestone content
02 image + caption                  06 image + caption
│                                   │
│  2012 milestone content           │  2025 milestone content
03 image + caption                  07 image + caption
│                                   │
│  2016 milestone content           │  2026 milestone content
04 image + caption                  08 image + caption
```

Within each milestone:

1. The year/title appears first.
2. The image appears below the title.
3. The number marker is aligned beside the image's top edge.
4. The caption appears directly below the image.
5. The connector remains on the far left and does not pass through the content.

## Implementation Steps

### 1. Normalize the milestone data

In `AboutJourney/index.tsx`:

- Replace `group1` and `group2` with one `milestones` array.
- Keep IDs globally sequential from `01` through `08`.
- Split the array only for presentation:
  - Left column: milestones `01–04`.
  - Right column: milestones `05–08`.
- Preserve each milestone's year, title, image, and caption.

This removes duplicated IDs and prevents the two columns from drifting into different markup patterns.

### 2. Use one reusable milestone structure

Render both columns with the same markup:

```text
timelineColumn
└── timelineItem
    ├── markerRail
    │   └── numberBadge
    └── itemContent
        ├── milestoneHeading
        └── mediaBlock
            ├── image
            └── caption
```

Recommended item grid:

```css
grid-template-columns: 48px minmax(0, 1fr);
grid-template-rows: auto auto;
```

- Heading: column 2, row 1.
- Image/caption: column 2, row 2.
- Badge: column 1, row 2, aligned to the image top.

This directly satisfies the requirement that the connector stays left, content stays right, and the number begins beside the image.

### 3. Build a continuous connector rail

Create the connector line once per `.timelineColumn`, rather than independently stretching a pseudo-element inside every row.

Implementation approach:

- Set `.timelineColumn` to `position: relative`.
- Draw a `1px` vertical line using `.timelineColumn::before`.
- Place the line through the center of the `48px` rail column.
- Give each badge a solid section background and higher `z-index` so it cleanly interrupts the line.
- Start the line at the first badge center and end it at the last badge center, using first/last item classes or column padding.

This prevents small gaps or doubled line segments when the item spacing increases.

### 4. Match the desktop two-column composition

Replace the overlapping `.group1` and `.group2` layout with:

```css
.timelineGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(72px, 8vw, 140px);
  align-items: start;
}
```

Each timeline column should:

- Use the same width and internal structure.
- Keep all text and media right of its rail.
- Use `min-width: 0` to prevent long headings from overflowing.
- Avoid `position: top`, negative margins, transforms, or hard-coded overlap corrections.

### 5. Increase and standardize milestone spacing

Use a responsive item gap instead of the current `80px` plus manual offsets:

```css
.timelineColumn {
  display: flex;
  flex-direction: column;
  gap: clamp(120px, 10vw, 190px);
}
```

The exact desktop value should be adjusted during visual verification, but it must remain controlled by the column layout rather than negative margins.

Add a smaller, explicit gap between:

- Heading and image: approximately `48–64px`.
- Image and caption: approximately `20–28px`.

### 6. Make images fluid and Figma-proportional

Remove:

```css
width: 500px;
height: 280px;
```

Use:

```css
.imageWrap {
  width: 100%;
  aspect-ratio: 1.76 / 1;
  min-height: 0;
}
```

Keep:

- `position: relative`
- `overflow: hidden`
- `border-radius`
- `object-fit: cover`

This preserves the source image's approximate `1500 × 843` ratio and lets each timeline column resize without causing horizontal overflow.

### 7. Align typography with the available column width

Use one shared milestone heading style for both columns.

Desktop recommendations:

- Year/title line: `clamp(34px, 3vw, 52px)`.
- Tight heading line-height around `0.95–1`.
- Orange year and highlighted word.
- Muted white year label.
- Content aligned left, as shown in the Figma cards.

Avoid the current `clamp(64px, 7vw, 60px)`, whose minimum is larger than its maximum and cannot scale predictably.

### 8. Responsive behavior

#### Large desktop: above `1200px`

- Two timeline columns.
- Wide center gap.
- Full connector line in each column.
- Large milestone spacing.

#### Tablet: `769px–1199px`

- Keep two columns only while each content area remains readable.
- Reduce column gap, title size, image radius, and item spacing.
- At approximately `992px`, switch to one timeline column if the cards become cramped.

#### Mobile/tablet stack: `≤ 992px`

- Merge the visual presentation into one chronological column, `01–08`.
- Keep one connector line on the left.
- Keep all headings, images, and captions to the right.
- Keep each marker beside the image start.
- Do not hide the connector line.

#### Small mobile: `≤ 480px`

- Rail width: approximately `34–40px`.
- Badge: approximately `34–38px`.
- Content gap from rail: approximately `12–16px`.
- Fluid image width with preserved aspect ratio.
- Reduce vertical item gap while retaining clear separation.

## CSS Cleanup

Remove the layout rules that currently create collisions:

- `.group1` and `.group2` as separate layout systems.
- `.row1` and `.row2`.
- `.connector1` and `.connector2`.
- `.c1First`, `.c1Last`, `.c2First`, and `.c2Last`.
- `.imageBlockRight { top: 180px; }`
- `.group2 { margin-top: -440px; }`
- Fixed `500px` image width.
- Mobile rule that hides connector pseudo-elements.

Replace them with shared classes:

- `.timelineGrid`
- `.timelineColumn`
- `.timelineItem`
- `.markerCell`
- `.badge`
- `.itemContent`
- `.milestoneHeading`
- `.mediaBlock`
- `.imageWrap`
- `.caption`

## Verification Checklist

### Desktop visual check

- The section shows two clean timeline columns.
- IDs are `01–04` on the left and `05–08` on the right.
- Each connector line is on the left edge of its column.
- All content appears to the right of the connector.
- Every badge aligns with the top of its image.
- Images and headings do not overlap adjacent milestones.
- Both columns have comparable vertical rhythm.

### Responsive check

Test at:

- `1440px`
- `1280px`
- `1024px`
- `768px`
- `390px`

Confirm:

- No horizontal scrollbar.
- No clipped title or caption.
- One chronological timeline is shown below the stack breakpoint.
- Connector and badges remain visible on mobile.
- Images preserve their ratio and fit the available content width.

### Code validation

Run:

```bash
npm run build
```

Then compare `/about` against the supplied Figma reference at desktop and mobile widths.

## Expected Files to Change

| File | Change |
|---|---|
| `src/components/sections/about/AboutJourney/index.tsx` | Consolidate data and render two shared timeline columns |
| `src/components/sections/about/AboutJourney/AboutJourney.module.css` | Replace overlapping group layouts with responsive rail/content layout |

No image assets or other About page sections should need modification for this UI fix.
