---
target: masschallenge-v2.html
total_score: 24
p0_count: 2
p1_count: 3
timestamp: 2026-06-02T19-44-34Z
slug: masschallenge-v2-html
---
## Anti-Patterns Verdict

**LLM assessment.** Yes — this page is a near-textbook example of the visual register DESIGN.md was written to retire, despite the rewritten copy. The hero is a flat teal slab (`.hero-bg { background-color: #13acbd }`, line 25) — the exact retired v1 color the **No-Teal Rule** explicitly bans. Every section opens with a `.sectionTitle` teal-uppercase-tracked eyebrow (**No-Eyebrow Rule**); Solutions 1/2/3 use filled teal `.section-number` circles (**No-Numbered-Section Rule**); Outcomes is a three-up identical-card hero-metric template with giant teal numbers; AOS `fade-up / fade-right / fade-left` fires on almost every block; the footer ships an SVG wave + emoji. Two competing Tailwind v1 CDNs load simultaneously (lines 18, 22).

**Deterministic scan.** 4 findings: 2× side-tab (lines 28, 36 — `border-left: 4px solid #13acbd`), 1× gray-on-color (line 532 Back-to-Top button hover `text-gray-300` on `bg-teal-500`), 1× em-dash-overuse (19 em-dashes in body copy). Detector caught the Back-to-Top contrast failure and the em-dash count, both of which LLM review missed. No false positives.

**Visual overlay.** Unavailable — no browser automation tools in this environment; detector findings stand on their own.

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Nav present; no scroll progress or breadcrumb back to Work |
| 2 | Match System / Real World | 3 | Copy is editorial; "Asking for the Ball" lands |
| 3 | User Control and Freedom | 2 | No back-to-Work link; mobile menu contrast collapses |
| 4 | Consistency and Standards | 1 | Violates the portfolio's own DESIGN.md on five named rules |
| 5 | Error Prevention | 3 | n/a — neutral |
| 6 | Recognition Rather Than Recall | 3 | Section headings explicit |
| 7 | Flexibility and Efficiency | 2 | No section TOC; 9 H2s in one scroll |
| 8 | Aesthetic and Minimalist Design | 1 | Two accent slabs, side-stripes, numbered circles, emoji cards, shadowed cards, gradient wave |
| 9 | Error Recovery | 3 | n/a — neutral |
| 10 | Help and Documentation | 3 | n/a — neutral |
| **Total** |  | **24/40** | Acceptable band — narrative is doing ~8 points of work the visual is undoing |

## Overall Impression

Writing already at the bar PRODUCT.md targets; chrome is not. Every senior reviewer reads a contradiction: a designer claiming Soleio/Tom Scott standards while shipping a Creative Tim starter template underneath the words. Single biggest opportunity is a subtraction pass — rip out the inline `<style>`, AOS, Tailwind CDNs, side-stripe cards, eyebrow labels, and metric-card grid. What's left is already strong enough to carry the page.

## What's Working

1. **Hero sub-headline (line 132)** — one sentence: problem → reframe → business outcome, no buzzwords. Only line on the page in the new positioning's voice.
2. **The Fork card content (lines 203–207)** — wrong/right direction binary. Content honors PRODUCT.md's *"show the tradeoff that survived"*; container (side-stripe card, teal eyebrow) betrays it.
3. **"If Not Me" callout (line 462)** — Soleio-grade closer. Three parallel "would have stayed" clauses; exactly the texture of pain PRODUCT.md asks for.

## Priority Issues

- **[P0] Visual layer falsifies the entire positioning.** Page is plumbed end-to-end on `#13acbd` — the retired v1 color named in the No-Teal Rule. Hero bg, eyebrows, side-stripes, numbered circles, impact numbers, hover state. At Linear/Stripe/Anthropic tier the surface IS the proof; reviewer decides in 4 seconds and the writing never gets read. Fix: rip inline `<style>` (lines 24-62), retire `.hero-bg / .accent-bg / .decision-card / .callout-box / .impact-number / .section-number`, retire `.sectionTitle` from `projectStyle.css`. Rebuild on tinted near-white paper + Editorial Ink + one non-teal accent per DESIGN.md §2. **Cmd:** `/impeccable quieter` then `/impeccable colorize`.

- **[P0] Every named DESIGN.md ban is shipped simultaneously.** No-Eyebrow (every section), No-Numbered-Section (Solutions 1/2/3), Flat-By-Default (shadowed image cards, footer SVG wave), hero-metric template (three identical cards, giant teal numbers). Violates PRODUCT.md principle #3 (*Practice what you preach*). Fix: remove `.sectionTitle` usages, kill `.section-number` circles (let H3 do the work), collapse Outcomes from three identical cards to one editorial paragraph with $500K in prose. **Cmd:** `/impeccable harden`.

- **[P1] Voice rule violations: 19 em-dashes + emoji footer + banned "seamlessly" in self-quote.** Detector caught body em-dashes; LLM caught emoji footer and Sprint Reality self-quote (line 450) using banned word *and* putting marketing line in a quote frame. Global replace `—`; delete emoji line; rewrite or delete Sprint Reality callout. **Cmd:** `/impeccable clarify`.

- **[P1] Motion is entrance theater.** AOS fade variants on hero, details bar, every section H2, every card. DESIGN.md don'ts: *"Motion is for response and feedback, not entrances."* No `prefers-reduced-motion` honored. Fix: remove all `data-aos="*"` attributes, drop AOS CDN (line 15) and script (line 589). **Cmd:** `/impeccable animate` (to reduce, not add).

- **[P1] Back-to-Top button gray-on-teal contrast failure on hover.** Line 532: `text-gray-300` on `hover:bg-teal-500`. Detector flagged. Most common AI contrast failure. Replace with plain link styled like body text or fix hover text color to white. **Cmd:** `/impeccable polish`.

- **[P2] Peak-end fail — ending undercuts the page.** Outcomes is three-up identical metric cards; Lessons is two-up identical cards; footer is decorative wave + emoji. Reviewer remembers last screen as template grammar. Fix: collapse Outcomes to one editorial paragraph opening *"Mobilize was sunset"* with 2,344 and 5/5 in prose. Move Lessons under "If Not Me" or cut to single closing paragraph. Plain footer. **Cmd:** `/impeccable distill`.

## Persona Red Flags

**Senior Design Hiring Manager (Linear/Stripe/Anthropic tier, 5 min, referral):** Flat teal hero + `/Product Design · /UX Research · /Internship` slash-tags reads "student portfolio." Sub-headline saves it briefly. By the 5 Insights teal slab with emoji-fronted cards (lines 271-301) the verdict is in: writing is senior, surface is not. Closes tab. Killers: line 25, the `.accent-bg` 5-insights section (line 260+), three-up Outcomes (lines 481-498).

**Alex (impatient skimmer):** No section TOC, no anchor nav, 9 H2s in one scroll. Eye trained by `.sectionTitle` eyebrows to skip teal labels, so actual section headings (gray-700 3xl) read as flat scale — Editorial Weight Rule failure. Can't triage; bounces around line 4-5 of scroll.

**Casey (mobile, distracted):** Hero `min-height: 70vh` (line 111) with 7/12 hero image at `md:` — on small phones image stacks below, teal slab dominates entire first viewport. H1 at `text-2xl` on saturated teal pushes contrast at small sizes. Serif slash-tags collapse to base size, look like typo on phone.

## Minor Observations

- "Built with Love 💙 2026 Roy Wang" — emoji-as-design-language violation.
- Slash-tags `/Product Design · /UX Research · /Internship` (line 118) — Notion-template flavor; commit sitewide or cut.
- Line 353 *"This wasn't a deliverable. It was a business decision triggered by the design."* — strong line, bold-tag inside `<p>` flattens it. Pull-quote.
- Two copies of `Company-Specialty.png` (lines 364, 388) — asset oversight.
- `bg-white` body + `#f7fafc` cards + teal slabs = three competing "near-neutral" bases. Pick one paper.
- Page title (line 6) contains em dash — banned.

## Provocative Questions

1. If the rewritten copy is Soleio-grade and the chrome is Creative Tim, which one is the actual portfolio?
2. What does this case study look like if the entire page is one column, 65ch, no cards, no eyebrows, no metrics block — just typography and three image figures?
3. The reframe is the whole story. Why is it section 1 of 9 instead of the entire page?
