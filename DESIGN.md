<!-- PARTIAL: color tokens + typography committed (mcv2 implementation); components documented. Green editorial palette (skydesigner-inspired) applied to mcv2. -->

---
name: Roy Wang Portfolio
description: Senior Product Designer portfolio — green editorial restraint, inspired by skydesigner.me, vibe-coded
colors:
  paper: "#f7f9f2"
  ink: "#101604"
  muted: "#595959"
  rule: "#d5dcd0"
  accent: "#a0c347"
  accent-text: "#5c7028"
  outcome-text: "#4d6e06"
  surface-mint: "#e6ecd6"
  surface-beige: "#eef3e4"
  paper-on-dark: "#FFFFFF"
  muted-on-dark: "rgba(255,255,255,0.6)"
  rule-on-dark: "rgba(255,255,255,0.18)"
---

# Design System: Roy Wang Portfolio

## 1. Overview

**Creative North Star: "The Quiet Press"**

A senior designer's portfolio that reads like a small, considered editorial — not a gallery wall and not a marketing campaign. The page holds the frame; the writing and the work do the talking. Every visual decision is made under the question *would Linear ship this?* and resolved on the side of restraint when the answer isn't a clear yes.

The visual register is *Crafted · Quiet · Slightly playful*. The writing register layered on top is *Editorial · Honest · Considered*. The two stack deliberately: the visual layer signals confidence by what it leaves out, which is what gives the writing room to carry weight. The aim is the energy of Rauno (rauno.me), Soleio.com, Paco Coursey, and Brian Lovin — designer-portfolio canon where each site reads as proof-of-craft in its own right.

This system explicitly rejects the saturated portfolio defaults: generic Cargo/Webflow/Notion templates (which would falsify Roy's vibe-coding superpower), awwwards-style heavy motion / WebGL flex (which steals attention from the case-study narrative), bootcamp process-theater (personas, journey maps, Crazy 8s as evidence), the current v1 aesthetic (Tailwind v1 + Creative Tim + AOS scroll fades + vanilla-tilt + teal-cyan gradient — every layer is a 2018-2020 tell), 2018 device mockups (hand-holding iPhone, isometric MacBook stacks), AI-tinged marketing voice ("how AI helped us streamline our process"), and the warm cream/sand/beige body bg that is the current saturated AI default of 2026.

**Key Characteristics:**
- Green editorial color system: soft green-tinted paper, near-black green ink, olive accent and surface washes (inspired by skydesigner.me)
- 3-color semantic palette: Argument (dark green), Evidence (olive), Outcome (vibrant green) — applied through section headings and 1px top rules, not full-bleed slabs
- One committed dark green slab on the hero for the opening statement; surface washes (mint, beige) for If Not Me and Outcomes
- Serif display + sans body — editorial canon, not single-sans product-marketing
- Responsive motion only — hover/focus/page transitions; zero scroll-driven choreography
- Vibe-coded by Roy in hand-written HTML/CSS (and React + Tailwind where it earns its place)
- The case-study layout itself enforces the *Trailer, Not Museum* principle from PRODUCT.md

## 2. Colors

The strategy is **Full Palette** (green editorial): three semantic roles derived from the skydesigner.me green system, applied with restraint. The dark green (`#101604`) carries the intellectual core (Argument: Reframe, If Not Me). The darkened olive (`#5c7028`) owns the craft layer (Evidence: Research, Insights, Process). The vibrant dark green (`#4d6e06`) signals resolution (Outcome: Solutions, Outcomes). Surface washes in mint (`#e6ecd6`) and soft beige (`#eef3e4`) create visual rhythm without dark full-bleed slabs. Reference: skydesigner.me's green monochrome editorial system — soft green-tinted background, dark green text, olive and neon green accents.

### Base Tokens
- **Paper** (`#f7f9f2`): Soft green-tinted off-white. Page background. Green-tinted, NOT cream/sand — the tint is green (hue ~80), not warm (hue 40-100). 0.005 chroma toward green.
- **Ink** (`#101604`): Near-black with green undertone. Body and headline text. ~17.4:1 contrast against Paper (AAA).
- **Muted** (`#595959`): Secondary text — meta labels, eyebrow line, figcaptions. ~6.6:1 contrast against Paper (AA).
- **Rule** (`#d5dcd0`): 1px borders/dividers on paper. Slightly darker than paper for subtle separation.

### Semantic Colors (3 roles)
- **Argument** (`--ink`, `#101604`): The intellectual anchor. Applied to Reframe and If Not Me section headings. The dark green itself serves as the argument color — it owns the reframe.
- **Evidence** (`--accent-text`, `#5c7028`): Darkened olive, 5.2:1 on Paper. Applied to Research, Insights, and Process section headings. Also used for 1px top rules on findings, insights, and process items. Original skydesigner olive (`--accent`, `#a0c347`) reserved for non-text decorative use (insufficient contrast for text).
- **Outcome** (`--outcome-text`, `#4d6e06`): Darkened vibrant green, 5.6:1 on Paper. Applied to Solutions and Outcomes section headings and solution divider top rules.

### Surface Washes
- **Mint** (`#e6ecd6`): Full-bleed section background for If Not Me. Also available for Research/Evidence sections.
- **Soft Beige** (`#eef3e4`): Full-bleed section background for Outcomes.

### On-Dark (text and rule colors when surface is dark green, e.g., hero)
- **Paper-on-dark** (`#FFFFFF`): All type on dark green slabs. ~18.4:1 contrast (AAA).
- **Muted-on-dark** (`rgba(255,255,255,0.6)`): Eyebrow/meta text on dark green.
- **Rule-on-dark** (`rgba(255,255,255,0.18)`): Blockquote `border-left` and dividers on dark green slabs.

### Named Rules
**The Green Editorial Rule.** The palette is a green monochrome system with three functional intensities (dark green, olive, vibrant green). No blue, no teal, no warm accents. Green carries the entire semantic range — from intellectual weight to analytical craft to outcome resolution.

**The No-Teal Rule.** The retired v1 color (`#00bac7` / `#13acbd`) is permanently off-palette. Green sits at hue ~80-130; teal lives at hue ~190. The two are deliberately far enough apart that a glance cannot conflate them.

**The Slab Rule (revised).** The hero keeps one committed dark green slab for the opening statement. All other sections use surface washes (mint, beige) or paper. No more dark full-bleed slabs beyond the hero. Transitions between surfaces are hard cuts; no gradient fades, no diagonal slices.

**The Contrast Rule.** All semantic text colors must pass ≥4.5:1 against their background. The original skydesigner olive (`#a0c347`, 1.9:1) and neon (`#b7fe02`, 1.2:1) are reserved for borders and decorative elements only — never for text.

## 3. Typography

**Display Font:** Georgia, "Times New Roman", serif
**Body Font:** -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
**Label/Mono Font:** Same sans stack as body; no mono face needed yet

**Character:** Georgia brings editorial weight to headlines, blockquotes, and the hero — it reads as considered, not decorative. The system sans body stack keeps long-form prose neutral and highly readable. The pairing sits in the Stripe Press / The Pudding neighborhood without copying either.

### Hierarchy (committed on mcv2)
- **Hero** (`h1.mcv2-hero`): Georgia, `clamp(2.5rem, 5vw, 4rem)`, line-height 1.05, letter-spacing -0.035em. White on dark green slab. `text-wrap: balance`.
- **Section heading** (`h2.mcv2-section`): Georgia, `clamp(1.75rem, 3vw, 2.5rem)`, line-height 1.15, letter-spacing -0.02em. `text-wrap: balance`. 5rem top margin, 1.5rem bottom.
- **Sub-heading** (`h3.mcv2-sub`): Georgia, 1.5rem / 1.25rem (context-dependent), font-weight 500. `text-wrap: balance`.
- **Lead / Deck** (`.mcv2-lead`): Georgia, `clamp(1.2rem, 1.8vw, 1.45rem)`, line-height 1.45, max-width 56ch. White on dark green slab. `text-wrap: pretty`.
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
- **Slab — dark** (`.mcv2-slab--dark`): Full-bleed `width: 100%`, background dark green (`var(--ink)`), `padding: 5rem 0`. All type inside goes white; `<strong>` stays white. Used on Hero only (one committed dark opening). Hard cuts to paper on either side — no gradients.
- **Slab — mint** (`.mcv2-slab--mint`): Full-bleed `width: 100%`, background mint (`var(--surface-mint)`), `padding: 5rem 0`. Used on If Not Me.
- **Slab — beige** (`.mcv2-slab--beige`): Full-bleed `width: 100%`, background soft beige (`var(--surface-beige)`), `padding: 5rem 0`. Used on Outcomes.

### Section-level patterns
- **Meta row** (`.mcv2-meta-row`): `grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))`, 1px rule top and bottom, `padding: 2rem 0`. Holds project metadata (Type, What I Did, Role, Tools, Team, Impact).
- **Reframe grid** (`.mcv2-reframe-grid`): 2-column `minmax(0, 3fr) minmax(0, 2fr)` at ≥900px, `column-gap: 4rem`, `align-items: start`. Prose on left, Fork aside on right.
- **Fork** (`.mcv2-fork`): An `<aside>` with a muted label (`.mcv2-fork-label`) and rows (`.mcv2-fork-row`). No border, no background — pure typographic contrast against the prose column.
- **Findings grid** (`.mcv2-findings`): 2-column at ≥768px, `gap: 2.5rem`. Each finding (`.mcv2-finding`) gets a 1px top rule. Body paragraphs fill the column width; quotes use italic muted.
- **Insights grid** (`.mcv2-insights`): 2-column at ≥768px, `gap: 2.5rem`. Each insight (`.mcv2-insight`) has a 1px top rule, sub-heading, body paragraph, and optional italic quote.
- **Solution grid** (`.mcv2-solution`): 2-column `minmax(0, 1fr) minmax(0, 1fr)` at ≥900px, `gap: 3rem`, separated by 1px top rule. Prose on one side, figure(s) on the other.
- **Process grid** (`.mcv2-process`): 2-column at ≥768px, `gap: 2.25rem` / `column-gap: 3rem`. Each item (`.mcv2-process-item`) gets a 1px top rule.

### Navigation
- **TOC** (`.mcv2-toc`): Fixed right, vertically centered, max-width 180px. 9-item ordered list with scroll-spy via IntersectionObserver (`rootMargin: -40% 0 -40% 0`). Active item gets olive accent color + `scaleX(1)` tick mark on `::before` pseudo-element. Theme-aware: toggles `.on-cobalt` class when the observed section is inside a dark slab, switching text/accent colors to the on-dark palette. Hidden below 1200px. Respects `prefers-reduced-motion`.
- **Nav** (`nav.mcv2-nav`): Cobalt background, white links with `border-bottom: 1px solid transparent` → `border-bottom-color: white` on hover. Mobile toggle opens on paper background with dark links. Tailwind v1 grid classes handle the responsive collapse.

### Interaction states
- **Links**: Default color inherit + underline in rule color. Hover: color → dark olive (`var(--accent-text)`), underline-color → dark olive. Transition 0.2s ease on both.
- **Focus-visible**: 2px solid outline, 2px offset, 1px border-radius. Dark olive ring on paper; white ring on dark slabs; ink ring in footer; olive accent ring on TOC.
- **Selection**: `rgba(var(--ink-rgb), 0.18)` background, color inherit (green-tinted).

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
- **Don't** use cream / sand / beige / parchment / linen / bone body backgrounds. The warm-tinted neutral (OKLCH L 0.84–0.97, C < 0.06, hue 40–100) is the saturated AI default of 2026. The current `--paper` token (`#f7f9f2`) is green-tinted (hue ~80-120, chroma ~0.005), which sits outside the warm band — it reads as a deliberate green editorial tint, not the AI-default warm body bg.
- **Don't** use tiny tracked uppercase eyebrows above every section. The 2023-era kicker is now AI grammar, not voice.
- **Don't** use numbered section markers (`01 · About / 02 · Process`) as decorative scaffolding. Numbers earn their place only when the section actually IS a sequence the reader needs ordered.
- **Don't** ship scroll-driven reveal animations (AOS fade-up, fade-right, fade-left). The current v1 leans on this and it's a tell. Motion is for response and feedback, not entrances.
- **Don't** include 2018 device mockups (hand-holding iPhone, isometric MacBook-on-desk renders, stacked-device hero compositions). Agency-deck aesthetic, not designer-site aesthetic.
- **Don't** write AI-tinged marketing voice ("how AI helped us streamline / supercharge / transform / leverage"). This is the credibility kill at the target tier; the writing register is editorial, not promotional.
- **Don't** use "Hi I'm Roy 👋" plus emoji as design language anywhere on the site.
- **Don't** use em dashes in copy (—). Use commas, colons, semicolons, periods, or parentheses. Also no `--`.
- **Don't** invent new top-level navigation items to fill the nav bar. The current `Work / About` is correct; resist the urge to add `Blog / Now / Reading / Bookshelf` on day one unless there's actual content behind them.
