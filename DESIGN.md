<!-- PARTIAL: color tokens + typography are committed (mcv2 implementation); components documented. Other case studies still need adoption. -->

---
name: Roy Wang Portfolio
description: Senior Product Designer portfolio — editorial restraint on paper, cobalt commit on slabs, vibe-coded
colors:
  cobalt: "#1F35B5"
  cobalt-deep: "#131E84"
  paper: "#FCFCFC"
  ink: "#1B1B1F"
  muted: "#5E5E66"
  rule: "#EAEAEC"
  paper-on-cobalt: "#FFFFFF"
  muted-on-cobalt: "#C0C6E0"
---

# Design System: Roy Wang Portfolio

## 1. Overview

**Creative North Star: "The Quiet Press"**

A senior designer's portfolio that reads like a small, considered editorial — not a gallery wall and not a marketing campaign. The page holds the frame; the writing and the work do the talking. Every visual decision is made under the question *would Linear ship this?* and resolved on the side of restraint when the answer isn't a clear yes.

The visual register is *Crafted · Quiet · Slightly playful*. The writing register layered on top is *Editorial · Honest · Considered*. The two stack deliberately: the visual layer signals confidence by what it leaves out, which is what gives the writing room to carry weight. The aim is the energy of Rauno (rauno.me), Soleio.com, Paco Coursey, and Brian Lovin — designer-portfolio canon where each site reads as proof-of-craft in its own right.

This system explicitly rejects the saturated portfolio defaults: generic Cargo/Webflow/Notion templates (which would falsify Roy's vibe-coding superpower), awwwards-style heavy motion / WebGL flex (which steals attention from the case-study narrative), bootcamp process-theater (personas, journey maps, Crazy 8s as evidence), the current v1 aesthetic (Tailwind v1 + Creative Tim + AOS scroll fades + vanilla-tilt + teal-cyan gradient — every layer is a 2018-2020 tell), 2018 device mockups (hand-holding iPhone, isometric MacBook stacks), AI-tinged marketing voice ("how AI helped us streamline our process"), and the warm cream/sand/beige body bg that is the current saturated AI default of 2026.

**Key Characteristics:**
- Committed color: cobalt full-bleed slabs on hero, If Not Me, and Outcomes (30–40% of page surface); paper editorial middle between them
- Serif display + sans body — editorial canon, not single-sans product-marketing
- Responsive motion only — hover/focus/page transitions; zero scroll-driven choreography
- Vibe-coded by Roy in hand-written HTML/CSS (and React + Tailwind where it earns its place)
- The case-study layout itself enforces the *Trailer, Not Museum* principle from PRODUCT.md

## 2. Colors

The strategy is **Committed**: one saturated cobalt carries 30–40% of the surface (hero, "If Not Me" callout, Outcomes block) and recurs through body copy via inline `<strong>` and link hover. The editorial paper middle is where the case-study writing lives; the cobalt slabs are where the brand asserts itself. Color discipline is voice. Reference points: Yves Klein blue, vintage IBM branding, Wikipedia's source-link blue — not navy, not Linear/Stripe SaaS-purple.

### Primary
- **Cobalt** (`oklch(42% 0.20 255)` ≈ `#1F35B5`): The single brand color. Owns hero, "If Not Me", and Outcomes slabs at full bleed. Also: link hover color, active nav indicator, inline `<strong>` on paper sections, selection highlight. Contrast against paper ≈ 9.4:1 (AAA). Pure white type on cobalt = 9.4:1 (AAA).
- **Cobalt-deep** (`oklch(28% 0.18 258)` ≈ `#131E84`): Reserved for `:active` / pressed states and any future "deeper" emphasis. Not yet used on mcv2; declared as a token for downstream consistency.

### Neutral (the editorial body)
- **Paper** (`#FCFCFC`): True off-white, chroma 0. Page background for the editorial middle (Reframe, Research, 5 Insights, Solutions, Process, Sprint Reality, Lessons). NOT cream, NOT sand, NOT tinted-warm.
- **Ink** (`#1B1B1F`): Body and headline text on paper. ~14:1 contrast against Paper.
- **Muted** (`#5E5E66`): Secondary text on paper — meta labels, eyebrow line, figcaptions. ~7:1 contrast against Paper.
- **Rule** (`#EAEAEC`): 1px borders/dividers on paper. Used for the meta-row top/bottom rules, blockquote `border-left` (≤1px), section dividers.

### On-Cobalt (text and rule colors when surface is cobalt)
- **Paper-on-cobalt** (`#FFFFFF`): All type on cobalt slabs. Pure white; the line-height bumps by 0.05–0.1 to compensate for the lighter-on-dark optical weight.
- **Muted-on-cobalt** (`#C0C6E0`): Eyebrow/meta text on cobalt. ~5:1 against cobalt.
- **Rule-on-cobalt** (`rgba(255,255,255,0.18)`): Blockquote `border-left` and dividers on cobalt slabs.

### Named Rules
**The One Brand Rule.** Cobalt is the only brand color. No second accent. If a moment needs a second color, it doesn't need a color — it needs a typographic move or a structural decision. (Updated from the seed "One Accent Rule" now that the strategy is Committed; "<10%" coverage no longer applies — cobalt is intentionally dominant on the slabs it owns.)

**The No-Teal Rule.** The retired v1 color (`#00bac7` / `#13acbd`) is permanently off-palette. Cobalt sits at hue 255; teal lives at hue ~190. The two are deliberately far enough apart that a glance cannot conflate them.

**The Slab Rule.** Cobalt appears as a full-bleed slab, never as a half-width band, sidebar rail, or shape behind text. When cobalt is on, it owns the entire viewport width. When it's off, the surface is paper. Transitions between the two are hard cuts; no gradient fades, no diagonal slices.

## 3. Typography

**Display Font:** Georgia, "Times New Roman", serif
**Body Font:** -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
**Label/Mono Font:** Same sans stack as body; no mono face needed yet

**Character:** Georgia brings editorial weight to headlines, blockquotes, and the hero — it reads as considered, not decorative. The system sans body stack keeps long-form prose neutral and highly readable. The pairing sits in the Stripe Press / The Pudding neighborhood without copying either.

### Hierarchy (committed on mcv2)
- **Hero** (`h1.mcv2-hero`): Georgia, `clamp(2.5rem, 5vw, 4rem)`, line-height 1.05, letter-spacing -0.035em. White on cobalt slab. `text-wrap: balance`.
- **Section heading** (`h2.mcv2-section`): Georgia, `clamp(1.75rem, 3vw, 2.5rem)`, line-height 1.15, letter-spacing -0.02em. `text-wrap: balance`. 5rem top margin, 1.5rem bottom.
- **Sub-heading** (`h3.mcv2-sub`): Georgia, 1.5rem / 1.25rem (context-dependent), font-weight 500. `text-wrap: balance`.
- **Lead / Deck** (`.mcv2-lead`): Georgia, `clamp(1.2rem, 1.8vw, 1.45rem)`, line-height 1.45, max-width 56ch. White on cobalt slab. `text-wrap: pretty`.
- **Body** (`.mcv2-prose`): System sans, 17px, line-height 1.6, max-width 65ch. `text-wrap: pretty`.
- **Body wide** (`.mcv2-prose--wide`): Same, max-width 75ch (upper bound of readable range). Used for narrative subsections that need more horizontal presence (The Struggle, Sprint Reality).
- **Eyebrow / Meta** (`.mcv2-eyebrow-meta`): System sans, 0.85rem, color muted, letter-spacing 0.01em. Used ONCE on the hero slab to signal the page type — not repeated above every section.
- **Meta labels** (`.mcv2-meta-label`): System sans, 0.78rem, font-weight 600, letter-spacing 0.02em, color muted.
- **Blockquote** (`.mcv2-quote`): Georgia italic, `clamp(1.3rem, 2vw, 1.6rem)`, 1px `border-left` in rule color, max-width 60ch.
- **Fork label** (`.mcv2-fork-label`): System sans, 0.78rem, font-weight 600, letter-spacing 0.02em, color muted.

### Named Rules
**The Editorial Weight Rule.** Hierarchy comes from scale + weight contrast (≥1.25 ratio between steps). Georgia at 400 weight carries enough presence that bolding is rarely needed — the serif itself does the differentiation.

**The No-Eyebrow Rule.** The tiny uppercase tracked label above every section heading is banned. One deliberate eyebrow (`.mcv2-eyebrow-meta` on the hero) is voice; an eyebrow on every section is AI grammar.

**The No-Numbered-Section Rule.** Numbered eyebrows (`01 · About / 02 · Process`) are banned as decorative scaffolding. Numbers earn their place only when the section actually IS a sequence the reader needs ordered.

## 4. Elevation

Flat by default. The system uses **tonal layering and typographic hierarchy**, not shadows, to convey depth. Shadows appear only as a response to state (subtle hover lift on interactive elements), never as ambient decoration on cards or sections.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. No drop shadows on cards. No glow effects. No backdrop-filter glassmorphism. Hover state can introduce a 2-4px translateY plus a soft shadow; nothing more.

## 5. Components

All primitives committed on masschallenge-v2. Case-study primitives are page-local for now (scoped to `main.mcv2`) — extract to a shared stylesheet once a second case study adopts the system.

### Layout primitives
- **Container** (`.mcv2-container`): `max-width: 1100px`, `margin: 0 auto`, `padding: 0 24px`. The content column.
- **Prose** (`.mcv2-prose`): `max-width: 65ch`. Body text constraint for standard narrative. Used for intros, single-column descriptions.
- **Prose wide** (`.mcv2-prose--wide`): `max-width: 75ch`. Upper bound of the readable range. Used for narrative subsections that benefit from more horizontal presence (findings, The Struggle, Sprint Reality).
- **Slab — cobalt** (`.mcv2-slab--cobalt`): Full-bleed `width: 100%`, background cobalt, `padding: 5rem 0`. All type inside goes white; `<strong>` stays white. Used on Hero, If Not Me, and Outcomes. Hard cuts to paper on either side — no gradients.

### Section-level patterns
- **Meta row** (`.mcv2-meta-row`): `grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))`, 1px rule top and bottom, `padding: 2rem 0`. Holds project metadata (Type, What I Did, Role, Tools, Team, Impact).
- **Reframe grid** (`.mcv2-reframe-grid`): 2-column `minmax(0, 3fr) minmax(0, 2fr)` at ≥900px, `column-gap: 4rem`, `align-items: start`. Prose on left, Fork aside on right.
- **Fork** (`.mcv2-fork`): An `<aside>` with a muted label (`.mcv2-fork-label`) and rows (`.mcv2-fork-row`). No border, no background — pure typographic contrast against the prose column.
- **Findings grid** (`.mcv2-findings`): 2-column at ≥768px, `gap: 2.5rem`. Each finding (`.mcv2-finding`) gets a 1px top rule. Body paragraphs fill the column width; quotes use italic muted.
- **Insights grid** (`.mcv2-insights`): 2-column at ≥768px, `gap: 2.5rem`. Each insight (`.mcv2-insight`) has a 1px top rule, sub-heading, body paragraph, and optional italic quote.
- **Solution grid** (`.mcv2-solution`): 2-column `minmax(0, 1fr) minmax(0, 1fr)` at ≥900px, `gap: 3rem`, separated by 1px top rule. Prose on one side, figure(s) on the other.
- **Process grid** (`.mcv2-process`): 2-column at ≥768px, `gap: 2.25rem` / `column-gap: 3rem`. Each item (`.mcv2-process-item`) gets a 1px top rule.

### Navigation
- **TOC** (`.mcv2-toc`): Fixed right, vertically centered, max-width 180px. 9-item ordered list with scroll-spy via IntersectionObserver (`rootMargin: -40% 0 -40% 0`). Active item gets accent color + `scaleX(1)` tick mark on `::before` pseudo-element. Theme-aware: toggles `.on-cobalt` class when the observed section is inside a cobalt slab, switching text/accent colors to the on-cobalt palette. Hidden below 1200px. Respects `prefers-reduced-motion`.
- **Nav** (`nav.mcv2-nav`): Cobalt background, white links with `border-bottom: 1px solid transparent` → `border-bottom-color: white` on hover. Mobile toggle opens on paper background with dark links. Tailwind v1 grid classes handle the responsive collapse.

### Interaction states
- **Links**: Default color inherit + underline in rule color. Hover: color → cobalt, underline-color → cobalt. Transition 0.2s ease on both.
- **Focus-visible**: 2px solid outline, 2px offset, 1px border-radius. Cobalt ring on paper; white ring on cobalt slabs; ink ring in footer; accent-color ring on TOC.
- **Selection**: `rgba(var(--cobalt-rgb), 0.18)` background, color inherit.

### Retired v1 patterns
The following v1 primitives are permanently retired and must not reappear: `.sectionTitle` (uppercase teal label), `.decision-card` (colored `border-left` side-stripe), `.callout-box` (same side-stripe pattern), AOS scroll-fade wrappers, vanilla-tilt 3D card hover. The side-stripe pattern violates impeccable's absolute ban on colored side-borders >1px.

## 6. Do's and Don'ts

### Do:
- **Do** verify body-text contrast against the page background — ≥4.5:1, no exceptions. Test with a contrast checker; do not eyeball gray-on-near-white "for elegance."
- **Do** cap body line length at 65–75ch.
- **Do** use `text-wrap: balance` on h1–h3, `text-wrap: pretty` on long prose.
- **Do** respect `prefers-reduced-motion` on every animation. Crossfade or instant as the reduced-motion alternative.
- **Do** build hierarchy through scale + weight contrast (≥1.25 ratio).
- **Do** let typography carry the editorial register. The serif/sans pairing is the brand expression — color stays out of the way.
- **Do** keep the visible navigation honest: link text reads on its own ("View case study", "Read the MassChallenge writeup"), not "Click here."

### Don't:
- **Don't** use the v1 teal `#00bac7` / `#13acbd` or any teal/cyan in the same hue family. Carrying the color forward carries the old positioning forward.
- **Don't** use side-stripe `border-left` >1px on cards, callouts, or list items (the `.decision-card` and `.callout-box` patterns in the current v1). This is on impeccable's absolute-ban list and is the saturated "card with personality" move.
- **Don't** use gradient text (`background-clip: text` + gradient background). Decorative, meaningless, banned.
- **Don't** use glassmorphism or backdrop-filter as default styling. Rare and purposeful, or nothing.
- **Don't** use cream / sand / beige / parchment / linen / bone body backgrounds. The warm-tinted neutral (OKLCH L 0.84–0.97, C < 0.06, hue 40–100) is the saturated AI default of 2026. The `--paper` token is `#FCFCFC` at chroma 0 — a true off-white that reads as deliberate restraint, not warm tint.
- **Don't** use tiny tracked uppercase eyebrows above every section. The 2023-era kicker is now AI grammar, not voice.
- **Don't** use numbered section markers (`01 · About / 02 · Process`) as decorative scaffolding. Numbers earn their place only when the section actually IS a sequence the reader needs ordered.
- **Don't** ship scroll-driven reveal animations (AOS fade-up, fade-right, fade-left). The current v1 leans on this and it's a tell. Motion is for response and feedback, not entrances.
- **Don't** include 2018 device mockups (hand-holding iPhone, isometric MacBook-on-desk renders, stacked-device hero compositions). Agency-deck aesthetic, not designer-site aesthetic.
- **Don't** write AI-tinged marketing voice ("how AI helped us streamline / supercharge / transform / leverage"). This is the credibility kill at the target tier; the writing register is editorial, not promotional.
- **Don't** use "Hi I'm Roy 👋" plus emoji as design language anywhere on the site.
- **Don't** use em dashes in copy (—). Use commas, colons, semicolons, periods, or parentheses. Also no `--`.
- **Don't** invent new top-level navigation items to fill the nav bar. The current `Work / About` is correct; resist the urge to add `Blog / Now / Reading / Bookshelf` on day one unless there's actual content behind them.
