# Services and Pricing Componentization Plan

## Goal

Refactor the `services` and `pricing` routes to follow the same structure already used by the Home and About pages, without changing the visible UI.

Current working pattern:

- `src/app/page.tsx` imports small section components from `src/components/sections/home/*`.
- `src/app/about/page.tsx` imports small section components from `src/components/sections/about/*`.
- Each section owns its markup in `index.tsx` and scoped CSS in either `index.module.css` or a named module file.
- Shared layout is handled by `src/components/layout/Navbar` and `src/components/layout/Footer`.

Current Services/Pricing issue:

- `src/app/services/page.tsx` contains the full Services page in one large client component.
- `src/app/pricing/page.tsx` contains the full Pricing page in one large client component.
- Their CSS selectors are global class names defined in `src/app/globals.css`.
- The app layout currently imports `src/styles/globals.css`, not `src/app/globals.css`, so Services/Pricing styles are not applied unless that unused file is loaded.

## Non-Negotiable UI Rule

Do not redesign the UI.

The refactor must preserve:

- Existing text/copy.
- Existing images and asset paths.
- Existing layout order.
- Existing class behavior.
- Existing responsive behavior.
- Existing visual dimensions, colors, typography, and spacing as much as the current CSS defines them.
- Existing FAQ and contact form content/behavior.

The work is structural: move code into maintainable components and move the required CSS beside those components.

## Proposed Folder Structure

Create Services sections:

```text
src/components/sections/services/
  ServicesBanner/
    index.tsx
    index.module.css
  StrengthTraining/
    index.tsx
    index.module.css
  CardioTraining/
    index.tsx
    index.module.css
  FunctionalTraining/
    index.tsx
    index.module.css
  PersonalTraining/
    index.tsx
    index.module.css
  ServicesFAQ/
    index.tsx
    index.module.css
  ServicesContact/
    index.tsx
    index.module.css
```

Create Pricing sections:

```text
src/components/sections/pricing/
  PricingBanner/
    index.tsx
    index.module.css
  PricingJourney/
    index.tsx
    index.module.css
  PricingPlans/
    index.tsx
    index.module.css
  PricingAmenities/
    index.tsx
    index.module.css
  PricingFAQ/
    index.tsx
    index.module.css
  PricingContact/
    index.tsx
    index.module.css
```

Optional shared components, only if they reduce duplication without changing UI:

```text
src/components/sections/shared/
  PageFAQ/
  PageContact/
```

## Target Page Shape

`src/app/services/page.tsx` should become a lightweight composition file:

```tsx
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ServicesBanner from '@/components/sections/services/ServicesBanner'
import StrengthTraining from '@/components/sections/services/StrengthTraining'
import CardioTraining from '@/components/sections/services/CardioTraining'
import FunctionalTraining from '@/components/sections/services/FunctionalTraining'
import PersonalTraining from '@/components/sections/services/PersonalTraining'
import ServicesFAQ from '@/components/sections/services/ServicesFAQ'
import ServicesContact from '@/components/sections/services/ServicesContact'

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesBanner />
        <StrengthTraining />
        <CardioTraining />
        <FunctionalTraining />
        <PersonalTraining />
        <ServicesFAQ />
        <ServicesContact />
      </main>
      <Footer />
    </>
  )
}
```

`src/app/pricing/page.tsx` should become:

```tsx
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PricingBanner from '@/components/sections/pricing/PricingBanner'
import PricingJourney from '@/components/sections/pricing/PricingJourney'
import PricingPlans from '@/components/sections/pricing/PricingPlans'
import PricingAmenities from '@/components/sections/pricing/PricingAmenities'
import PricingFAQ from '@/components/sections/pricing/PricingFAQ'
import PricingContact from '@/components/sections/pricing/PricingContact'

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingBanner />
        <PricingJourney />
        <PricingPlans />
        <PricingAmenities />
        <PricingFAQ />
        <PricingContact />
      </main>
      <Footer />
    </>
  )
}
```

## CSS Migration Strategy

Do not simply import `src/app/globals.css` into `layout.tsx`.

Reason:

- `src/app/globals.css` includes global resets, root variables, header styles, footer styles, Services page styles, Pricing page styles, and duplicated blocks.
- `src/styles/globals.css` is already the real global stylesheet for the current Home/About app.
- Importing both can create cascade conflicts across Home, About, Services, and Pricing.

Safer approach:

1. Keep `src/styles/globals.css` as the app-wide base stylesheet.
2. Move only Services/Pricing page-specific CSS from `src/app/globals.css` into CSS modules beside the new components.
3. Convert global selectors to module selectors.
4. Leave true shared base styles in `src/styles/globals.css` only when required.
5. After migration, remove or stop using `src/app/globals.css` if no longer needed.

Example conversion:

Current:

```tsx
<section className="journey-section">
```

Target:

```tsx
<section className={styles.journeySection}>
```

Current CSS:

```css
.journey-section {
  ...
}
```

Target CSS module:

```css
.journeySection {
  ...
}
```

## Header/Footer Strategy

The current Services/Pricing pages manually define:

- `<header className="site-header">...`
- mobile nav state with `useState`
- `<footer className="site-footer">...`

Home and About already use:

- `src/components/layout/Navbar`
- `src/components/layout/Footer`

To match project structure, Services and Pricing should use `Navbar` and `Footer`.

Important:

- Before replacing the inline header/footer, compare the visual output against the current Services/Pricing header/footer.
- If the current pages require exact visual parity with their inline header/footer, extract that markup into a shared layout component instead of silently changing it.
- Preferred path is to use existing `Navbar`/`Footer` if the project standard is more important than preserving the old inline header/footer.

## Current Section Boundary Mapping

Services page sections from `src/app/services/page.tsx`:

| Current lines/markers | New component |
| --- | --- |
| Header block | Existing `Navbar` or extracted shared page header |
| Hero section | `ServicesBanner` |
| `id="strength"` | `StrengthTraining` |
| `id="cardio"` | `CardioTraining` |
| `id="functional"` | `FunctionalTraining` |
| `id="personal"` | `PersonalTraining` |
| `id="faq"` | `ServicesFAQ` |
| `id="contact"` | `ServicesContact` |
| Footer block | Existing `Footer` or extracted shared page footer |

Pricing page sections from `src/app/pricing/page.tsx`:

| Current lines/markers | New component |
| --- | --- |
| Header block | Existing `Navbar` or extracted shared page header |
| `main.pricing-hero-wrapper` hero block | `PricingBanner` |
| `.journey-section` | `PricingJourney` |
| `.pricing-plans-section` | `PricingPlans` |
| `<AboutEliteAmenities />` | `PricingAmenities` wrapper or direct import |
| `id="faq"` | `PricingFAQ` |
| `id="contact"` | `PricingContact` |
| Footer block | Existing `Footer` or extracted shared page footer |

## Implementation Steps

1. Create `src/components/sections/services/*` folders.
2. Move Services page JSX section-by-section from `src/app/services/page.tsx` into the new section components.
3. Extract only the CSS used by each Services component from `src/app/globals.css` into that component CSS module.
4. Replace global class names in each Services component with CSS module references.
5. Rewrite `src/app/services/page.tsx` to import and compose the new section components.
6. Create `src/components/sections/pricing/*` folders.
7. Move Pricing page JSX section-by-section from `src/app/pricing/page.tsx` into the new section components.
8. Extract only the CSS used by each Pricing component from `src/app/globals.css` into that component CSS module.
9. Replace global class names in each Pricing component with CSS module references.
10. Rewrite `src/app/pricing/page.tsx` to import and compose the new section components.
11. Reuse existing `FAQAccordion`, `ContactForm`, `Navbar`, `Footer`, and `AboutEliteAmenities` where appropriate.
12. Remove dead duplicate CSS from `src/app/globals.css` only after verifying every selector has moved or is no longer used.

## Verification Plan

Run:

```powershell
npm run build
```

Then verify these routes:

```text
http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/services
http://localhost:3000/pricing
```

Responsive viewports to check:

```text
390px
576px
768px
992px
1200px
Desktop wide
```

Visual acceptance criteria:

- Services page looks unchanged from current intended design.
- Pricing page looks unchanged from current intended design.
- Home page is not affected.
- About page is not affected.
- No global CSS conflicts appear in shared components.
- Build passes.
- `/services` and `/pricing` return `200`.

## Risks

- The global CSS in `src/app/globals.css` appears to contain duplicated Services blocks and Pricing blocks. During extraction, duplicate selectors must be resolved carefully so the final component CSS preserves the currently intended cascade.
- Some inline styles exist inside `pricing/page.tsx` and `services/page.tsx`. These should be moved only if the exact computed styling is preserved.
- Manual header/footer markup may not exactly match the existing shared `Navbar` and `Footer`. Decide whether visual parity or project consistency wins before replacing them.
- `src/components/AboutEliteAmenities` exists separately from `src/components/sections/about/AboutEliteAmenities`. Pricing currently imports the top-level version. Confirm which one is the intended visual before wiring `PricingAmenities`.

## Recommended First Implementation Pass

Start with Services first, then Pricing.

Reason:

- Services has clearer section boundaries.
- Services uses shared `FAQAccordion` and `ContactForm`, making it a good template for Pricing.
- Once Services is componentized successfully, Pricing can follow the same migration pattern.

Stop after Services, verify visually, then proceed to Pricing.
