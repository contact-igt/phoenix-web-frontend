# About Page Responsive Implementation Plan

## Objective

Make the complete `/about` page responsive at the required breakpoints:

```css
@media (max-width: 1200px) {}
@media (max-width: 992px) {}
@media (max-width: 768px) {}
@media (max-width: 576px) {}
@media (max-width: 390px) {}
```

The implementation must preserve the existing desktop/Figma composition while preventing clipping, hidden content, overlapping controls, oversized fixed layouts, and horizontal overflow.

## Page Sections in Scope

Render order from `src/app/about/page.tsx`:

1. `Navbar`
2. `AboutBanner`
3. `AboutStats`
4. `AboutMissionVision`
5. `AboutEliteAmenities`
6. `AboutJourney`
7. `AboutFAQ`
8. `AboutContact`
9. `Footer` through the shared layout

## Files Expected to Change

| File | Responsive work |
|---|---|
| `src/styles/globals.css` | Confirm shared container gutter values for all required breakpoints |
| `src/components/layout/Navbar/index.module.css` | Validate mobile header, logo and menu trigger spacing |
| `src/components/sections/about/AboutBanner/index.module.css` | Hero height, title, CTA wrapping, watermark and info-row behavior |
| `src/components/sections/about/AboutStats/index.module.css` | Logo wrapping and compact spacing |
| `src/components/sections/about/AboutMissionVision/index.module.css` | Replace overflowing fixed collage behavior on tablet/mobile |
| `src/components/sections/about/AboutEliteAmenities/AboutEliteAmenities.module.css` | CTA wrapping, image visibility and service-row sizing |
| `src/components/sections/about/AboutJourney/AboutJourney.module.css` | Normalize breakpoints and verify the existing mobile timeline |
| `src/components/sections/about/AboutFAQ/AboutFAQ.module.css` | Heading, accordion padding and narrow-screen controls |
| `src/components/sections/about/AboutContact/AboutContact.module.css` | Stack form, fields, contact links and social controls |
| `src/components/layout/Footer/index.module.css` | Verify final mobile footer wrapping and spacing |

JSX changes should only be introduced where CSS alone cannot provide a clean accessible layout.

## Browser-Agent Audit Results

The live page was measured at the five requested viewport widths.

| Viewport | Main finding |
|---:|---|
| `1200px` | Mission/Vision collage extends beyond its section width; Journey desktop structure has large internal overflow hidden by the section |
| `992px` | Major sections stack, but page height becomes very large; Journey mobile layout activates correctly |
| `768px` | Mission/Vision still contains fixed `820px` watermark and collage cards extending past the viewport |
| `576px` | Mission/Vision collage remains wider than the viewport; Banner watermark remains `710px`; missing dedicated `576px` rules in several sections |
| `390px` | Banner internal width reaches about `414px`; Mission/Vision reaches about `820px`; Elite Amenities CTA reaches about `468px`; Journey content itself remains within the viewport |

The document currently hides global horizontal overflow, so some broken layouts are clipped rather than producing a visible scrollbar. Each section must be made intrinsically responsive instead of relying on `overflow-x: hidden`.

## Breakpoint Contract

### `1200px` - Compact Desktop

- Preserve desktop composition.
- Reduce container gutters and fixed media dimensions.
- Prevent any collage or timeline element from extending outside its section.
- Keep Navbar desktop links visible while reducing logo and button dimensions.
- Use two-column layouts only where both columns retain readable widths.

### `992px` - Tablet Structural Breakpoint

- Switch Navbar to hamburger navigation.
- Stack Mission/Vision copy and media.
- Stack Elite Amenities columns.
- Switch Journey to its existing single left-rail timeline.
- Stack About Contact into one column.
- Remove desktop absolute-position assumptions.

### `768px` - Compact Tablet

- Reduce heading sizes, section padding and vertical gaps.
- Make CTA rows wrap safely.
- Convert image collages to responsive grid dimensions.
- Keep touch controls at least `40px` high.
- Wrap Stats logos without clipping.

### `576px` - Mobile

- Use `16px` horizontal gutters.
- Stack multi-button CTA groups.
- Collapse metrics and form field rows to one column.
- Remove fixed media heights that leave empty space.
- Reduce image/card radii and typography proportionally.
- Ensure no element exceeds `calc(100vw - 32px)`.

### `390px` - Narrow Mobile

- Use `12-14px` page gutters where appropriate.
- Reduce the largest headings without forcing overflow.
- Stack every CTA group vertically or into two safe rows.
- Keep badges, hamburger, accordion buttons and submit controls accessible.
- Prevent phone pills and social links from exceeding the viewport.

## Shared Responsive Foundation

### Container system

Continue using the existing global variables but ensure section CSS consumes them consistently:

```css
width: min(
  calc(100% - (var(--container-pad) * 2)),
  var(--container-max)
);
```

Required gutter targets:

| Breakpoint | Suggested side gutter |
|---:|---:|
| Desktop | `48-50px` |
| `1200px` | `32px` |
| `992px` | `24px` |
| `768px` | `20px` |
| `576px` | `16px` |
| `390px` | `12-14px` |

Avoid each section independently using unrelated values such as `100px`, `64px`, `48px`, and `32px` unless the design specifically requires them.

### Shared rules

- Add `min-width: 0` to all grid/flex children that contain text or media.
- Use `max-width: 100%` for responsive media wrappers.
- Prefer `aspect-ratio` over fixed image heights.
- Replace large fixed widths with `clamp()` or percentages.
- Do not treat global `overflow-x: hidden` as a layout solution.
- Use the same five breakpoint values across all About CSS modules.

## Section-by-Section Plan

## 1. Navbar

Current responsive coverage already includes all requested breakpoints.

### `1200px`

- Keep desktop navigation.
- Confirm logo, nav pills, contact CTA and arrow fit without compression.
- Reduce inner gap before reducing font size.

### `992px`

- Keep the existing hamburger switch.
- Ensure header height remains `78px`.
- Hide desktop nav and contact controls completely.
- Confirm menu overlay starts below the fixed header.

### `768px`

- Header height: approximately `70px`.
- Reduce logo width.
- Preserve a minimum `44px` hamburger hit area even if the visible icon is `20px`.

### `576px` and `390px`

- Use the requested mobile gutters.
- Ensure logo and menu button never collide.
- Verify body scrolling is locked while the mobile menu is open.
- Verify focus states and Escape/close interaction.

## 2. About Banner

Current problems:

- Mobile watermark remains fixed at `710px`.
- Hero title uses `white-space: nowrap`.
- CTA buttons can wrap without an explicit mobile layout contract.
- `480px` is used instead of `576px/390px`.

### `1200px`

- Keep the desktop hero composition.
- Reduce title using a controlled `clamp()`.
- Keep the info row bottom-right if space permits.

### `992px`

- Move info content below the main copy as currently intended.
- Keep hero content within tablet gutters.
- Adjust background image focal point.

### `768px`

- Keep title readable without crossing the viewport.
- Replace fixed watermark width with:

```css
width: clamp(420px, 92vw, 620px);
```

- Allow CTA groups to wrap.
- Keep description width fluid.

### `576px`

- Replace the current `480px` rule with a dedicated `576px` rule.
- Remove `white-space: nowrap` from the title if required.
- Use a two-row CTA layout:
  - Join button + arrow.
  - Watch button + play.
- Reduce hero height if wrapped content leaves excessive empty space.
- Scale and reposition watermark relative to the viewport.

### `390px`

- Title target: approximately `56-64px`.
- Use full-width description.
- Keep buttons inside `calc(100vw - 28px)`.
- Reduce action button padding rather than clipping text.
- Ensure info items wrap vertically.

## 3. About Stats

Current layout is generally stable.

### `1200px` and `992px`

- Reduce logo-track gaps progressively.
- Keep label and logos on one row only while they fit.

### `768px`

- Retain existing wrapped layout.
- Confirm the section grows naturally.

### `576px`

- Place the label on its own centered row.
- Use a compact 2x3 or 3x2 logo arrangement.
- Reduce logo gaps and preserve aspect ratio.

### `390px`

- Use three logos per row only if they fit; otherwise use two.
- Avoid reducing logos below useful visibility.

## 4. About Mission & Vision

This is the highest-priority responsive repair.

Browser-agent findings:

- Internal width reaches approximately `1302px` at the `1200px` viewport.
- The fixed watermark remains `820px` wide at tablet/mobile.
- The collage still reaches approximately `953px` at `768px`.
- Internal collage width remains approximately `820px` at `390px`.

Current causes:

- Fixed `836x574px` media column.
- Four absolutely positioned cards.
- Fixed `820x640px` watermark.
- Mobile uses `transform: scale()` rather than true responsive layout.
- Breakpoint uses `640px` instead of `576px`.

### Implementation direction

Keep the absolute Figma collage only above `992px`. Create a real responsive grid below it:

```css
@media (max-width: 992px) {
  .mediaColumn {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: auto;
    width: 100%;
    height: auto;
    transform: none;
  }

  .imageCard {
    position: relative;
    inset: auto;
    width: auto;
    height: auto;
    aspect-ratio: 16 / 10;
  }
}
```

### `1200px`

- Recalculate collage scale from available width rather than using `left: 44%`.
- Ensure the right edge stays inside the inner container.
- Make copy width respect its column.

### `992px`

- Stack copy above media.
- Convert the collage to a two-column responsive grid.
- Place statement text as a grid overlay or dedicated block.
- Reduce watermark dimensions and keep it decorative.

### `768px`

- Use two equal collage columns.
- Make statement text smaller and prevent it from covering essential image content.
- Metrics may remain horizontal only if labels fit.

### `576px`

- Stack metrics vertically.
- Use either:
  - Two-column compact collage, or
  - One featured image plus two smaller cards.
- Remove all fixed card coordinates.
- Replace `min-height` with content-driven padding.

### `390px`

- Use one-column media cards or a controlled two-column mosaic.
- Watermark width must not exceed the section.
- Title target: `44-50px`.
- Body copy target: `15-16px`.
- Ensure the statement wraps within the viewport.

## 5. About Elite Amenities

Browser-agent finding:

- At `390px`, the second CTA group reaches approximately `468px`, outside the viewport.

Current issues:

- CTA row has a fixed `48px` height.
- Two `198px` button groups plus gap cannot fit narrow mobile.
- Left images are removed at `640px`, not the requested `576px`.
- Section retains `min-height: 1100px`, which can leave excess empty space.

### `1200px`

- Retain two columns.
- Reduce media height and service typography.

### `992px`

- Stack the left introduction and services.
- Keep left image pair at a responsive aspect ratio.
- Replace fixed `min-height` with content-driven height.

### `768px`

- Reduce service-row padding.
- Keep thumbnails and numbers proportional.
- Allow service descriptions to wrap.

### `576px`

- Replace the current `640px` behavior with the required breakpoint.
- Hide or stack the decorative left images based on Figma.
- Set `.ctaRow` to:

```css
height: auto;
flex-wrap: wrap;
gap: 12px;
```

- Put each button group on a safe row.

### `390px`

- Stack CTA groups vertically and align left.
- Reduce button minimum widths.
- Reduce service thumbnail dimensions.
- Ensure service number does not overlap text.

## 6. About Journey

The Journey section already has the strongest responsive structure.

Browser-agent results:

- No section content-width overflow at `992`, `768`, `576`, or `390px`.
- Desktop switches to the mobile left-rail timeline at `992px`.
- The connector and media remain contained.

Required normalization:

- Add explicit `576px` and `390px` rules.
- Replace the existing `480px` breakpoint.
- Confirm the decorative watermark does not obscure milestone headings.
- Keep line ownership between badges singular to prevent doubled connector segments.

### `1200px`

- Preserve the desktop two-phase timeline.
- Revalidate connector coordinates after container width changes.

### `992px`

- Preserve the existing single chronological timeline.
- Keep badge, rail and content grid.

### `768px`

- Reduce heading and caption sizes.
- Reduce item spacing.

### `576px`

- Rail approximately `38-40px`.
- Content gap approximately `14-16px`.
- Make watermark viewport-relative.

### `390px`

- Rail approximately `34-36px`.
- Keep images full width.
- Ensure title wraps naturally.
- Connector must remain one continuous line without duplicate pseudo-elements.

## 7. About FAQ

Current layout is stable but uses `480px` rather than `576px/390px`.

### `1200px` and `992px`

- Keep centered `960px` maximum content width.
- Reduce section padding at tablet.

### `768px`

- Retain existing compact accordion padding.

### `576px`

- Heading target: approximately `36-44px`.
- Question target: `14-16px`.
- Reduce trigger horizontal padding.

### `390px`

- Use `14px` question text.
- Keep plus control at least `36px`.
- Ensure long questions wrap without pushing the plus button out.
- Use answer padding consistent with the trigger.

## 8. About Contact

Current issues:

- Uses `600px`, not `576px`.
- `576px` currently still uses the desktop two-column form row.
- Phone pills and social links need explicit narrow-screen behavior.

### `1200px`

- Keep two main columns.
- Reduce main column gap.

### `992px`

- Retain existing one-column section stack.
- Keep contact information before the form.

### `768px`

- Reduce heading, section padding and column gap.
- Keep paired form fields only while usable.

### `576px`

- Replace `600px` with `576px`.
- Stack all `.fieldRow` fields.
- Stack phone pills or allow safe wrapping.
- Reduce section padding.

### `390px`

- Make phone pills width `100%` or fit content without overflow.
- Wrap social links into multiple rows.
- Keep submit button and round icon inside the viewport.
- Reduce large headings to approximately `42-48px`.

## 9. Footer

Footer already has `992`, `768`, and `576px` rules.

Required work:

- Add a dedicated `390px` refinement.
- Confirm newsletter/input controls do not overflow.
- Stack legal links and social controls where needed.
- Replace the existing `align-items: start` warning with `flex-start`.
- Preserve comfortable tap spacing.

## Implementation Order

1. Normalize shared container variables in `src/styles/globals.css`.
2. Fix Mission/Vision fixed collage overflow.
3. Fix Elite Amenities CTA and mobile service rows.
4. Update Banner mobile title, watermark and CTA wrapping.
5. Normalize Contact, FAQ and Journey to `576px/390px`.
6. Refine Stats wrapping.
7. Verify Navbar and Footer interactions.
8. Run browser-agent verification at every requested width.
9. Run production build.

## Browser Verification Plan

Use browser-agent at:

```text
1200 x 900
992 x 900
768 x 900
576 x 900
390 x 844
```

For every viewport:

1. Open `/about`.
2. Confirm document width equals viewport client width.
3. Measure every direct child of `<main>`.
4. Detect descendants whose left edge is negative or right edge exceeds the viewport.
5. Capture a full-page screenshot.
6. Check browser console and framework error overlays.
7. Open and close the mobile Navbar below `992px`.
8. Open at least one FAQ item.
9. Check form fields and CTA controls.

Pass conditions:

- No unintended horizontal overflow.
- No content clipped by section `overflow: hidden`.
- No overlapping headings, buttons, images, badges or captions.
- No fixed empty section height after content stacks.
- All controls remain visible and usable.
- Journey connector remains continuous and single-width.

## Technical Validation

Run after implementation:

```bash
npx tsc --noEmit
npm run build
```

The existing Footer autoprefixer warning should be fixed during this work:

```css
align-items: flex-start;
```

instead of:

```css
align-items: start;
```

## Completion Criteria

The About page is complete when:

- All five required media queries exist where relevant.
- Every section adapts without internal overflow.
- Mission/Vision no longer relies on scaled fixed desktop coordinates on mobile.
- Elite Amenities CTAs fit at `390px`.
- Banner content and watermark fit at `390px`.
- Contact fields stack at `576px`.
- Journey remains visually correct at all requested widths.
- Browser-agent screenshots pass at all five sizes.
- TypeScript and production build pass.

