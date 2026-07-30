# Reference Study: Fueled Work Page

**Source:** https://fueled.com/work/  
**Reviewed:** 2026-07-30  
**Observed viewport:** 1280 × 720  
**Purpose:** Extract reusable portfolio patterns, including Fueled's motion qualities, without copying its agency voice wholesale.

## One-line read

Fueled turns a conventional case-study index into a cinematic proof stream: one nearly full-viewport project at a time, with strong client imagery, outcome-first writing, restrained metadata, and a repeated card anatomy that makes 30 projects easy to parse.

The strongest idea is not the black background or rounded cards. It is the content hierarchy:

> recognizable client → consequential outcome → one-sentence proof → capabilities

## Page anatomy

### 1. Minimal global navigation

- Logo at the left.
- Five direct destinations: Expertise, Work, Company, Blog, Contact.
- No secondary navigation or filtering controls compete with the work.
- A skip-to-content link is present.

The navigation does not attempt to explain the agency. It gets out of the way and lets the project stream establish credibility.

### 2. Centered editorial introduction

The opening uses three levels:

1. Purple section label: `Work`
2. Large statement: `Projects that make an impact.`
3. One-sentence framing paragraph

Observed desktop typography:

- Body: Aeonik, 16px / 24px, medium
- Section label: approximately 24px / 30px, purple `#6e5bff`
- H1: approximately 51px / 56px, bold
- Intro: approximately 24px / 30px

The introduction is intentionally brief. It establishes the evaluation criterion (impact), then immediately shows evidence.

### 3. Single-column cinematic project stream

- 30 project entries.
- One column rather than a thumbnail grid.
- Each desktop card is approximately 1248 × 810px.
- Cards sit 16px from the viewport edge with roughly 16px vertical separation.
- 40px corner radius and clipped overflow.
- Total observed page height was approximately 26,525px.

This creates a deliberate rhythm: one client, one outcome, one visual world. It avoids the comparison-heavy behavior of a dense card grid and gives every project a moment of authority.

### 4. Full-bleed image as the card surface

Each project uses a large editorial image as the background. The image is not a device mockup floating in a decorative scene; it fills the entire case-study surface.

A dark diagonal gradient sits above the image:

```css
linear-gradient(
  219deg,
  rgba(0, 0, 0, 0) 34.12%,
  rgb(0, 0, 0) 75.8%
)
```

The gradient is approximately 90% opaque at its darkest point. It preserves the photograph's emotional value while creating a predictable reading zone in the lower-left corner.

### 5. Bottom-left narrative layer

The content area is anchored to the bottom left with approximately 40px of card padding and a readable width of roughly 657px.

Its hierarchy is:

1. Client logo, around 40px tall
2. Outcome-led project title
3. One-sentence evidence statement
4. `Read Case Study` CTA
5. Capability tags

Observed desktop type:

- Card heading: approximately 31px / 34px, bold
- Description: approximately 18px / 23px
- CTA: 18px
- Tags: 16px

The writing and image share one surface, so the card reads as a single editorial statement rather than an image plus a detached metadata panel.

### 6. Outcome-first naming system

Most titles follow:

> We + consequential verb + outcome

Examples:

- `We Digitized Democracy`
- `We Unlocked Revenue`
- `We Sparked Sales Growth`
- `We Made Insurance Service as Simple as a Tap`
- `We Led a Company-Wide Digital Transformation`

The title describes why the work mattered, not what artifact was delivered. The sentence below supplies the client, intervention, scale, or metric.

This is the page's most transferable content pattern.

## Language system

Fueled writes its work index like a sequence of campaign headlines rather than a project directory. The language has three jobs: make the consequence memorable, establish the agency as an active force, and attach enough evidence to make the claim feel plausible.

### Headline grammar

Nearly every title starts with the collective subject `We`, continues with a past-tense action verb, and ends on the changed condition rather than the shipped artifact:

```text
We + consequential verb + changed condition
```

The recurring constructions are:

1. **Direct transformation**: `We + changed/unlocked/reinvented + domain or outcome`
2. **Before-to-after conversion**: `We + turned + constraint + into + opportunity`
3. **Desired-state claim**: `We + made + difficult experience + beneficial adjective`
4. **Transfer or expansion**: `We + brought/put + capability + into + new context`
5. **Domain metaphor**: a familiar phrase is rewritten with vocabulary from the client's world
6. **Build or launch**: used when the new thing itself carries enough novelty to be the consequence

This grammar is highly active. It removes setup, process, and hesitation; every project enters the page at the moment of consequence.

### Supporting-sentence grammar

The sentence beneath the title usually follows one of these structures:

```text
We + intervention + client/context + measurable consequence
We + partner/help/build verb + product + participle list of benefits
We took + client/product + from initial state + to expanded state + scale proof
```

Its information order is remarkably stable:

1. Agency action
2. Recognizable client or product
3. Compressed mechanism
4. Business or user consequence
5. Metric, scale, speed, or award when available

One sentence often carries the whole case. It favors one concrete number or proper noun over several process details.

### Rhetorical devices

- **Parallelism**: repeating `We + verb` makes 30 unrelated projects feel like one body of work.
- **Compression**: research, design, engineering, and delivery collapse into one causal sentence.
- **Contrast**: `from X to Y` and `turned X into Y` create a miniature transformation arc.
- **Triads**: three benefits produce rhythm and imply completeness.
- **Domain language**: sports, publishing, government, travel, and hospitality vocabulary makes otherwise generic outcomes more memorable.
- **Scale anchors**: time, users, revenue, conversion, retention, and awards act as credibility shortcuts.
- **Universal stakes**: phrases about access, the future, or broad public benefit raise the perceived importance of the work.

### Tone

The voice is:

- collective rather than personal
- declarative rather than exploratory
- celebratory rather than reflective
- consequence-first rather than process-first
- accessible rather than technical
- commercially confident, occasionally grandiose

It is effective agency language because it makes breadth feel coherent and reassures a buyer that Fueled can produce outcomes. It is less suitable as-is for a senior product designer because it suppresses authorship boundaries, uncertainty, tradeoffs, and the contribution of the wider team.

### What gives the copy energy

The energy does not come from adjectives. It comes from verbs and sentence position. Fueled front-loads the action, postpones implementation detail, and ends on the largest credible consequence. Even longer headlines remain legible because they describe one directional change.

### Where the language loses trust

- Repeating `We` makes the agency the hero of every client story.
- Large verbs such as “transformed” or “reinvented” can imply sole causality.
- Broad nouns such as “impact,” “future,” and “experience” are weak without a nearby mechanism or number.
- Compression removes the tension and judgment that distinguish senior design work.
- Triumphant framing makes every engagement sound equally successful.
- Some benefit lists read like marketing promises rather than observed outcomes.

The lesson is not to make smaller claims. It is to make the causal chain more inspectable.

## Distilled portfolio language

Roy's adaptation should keep Fueled's consequence-first compression but change the narrative engine:

```text
Fueled: We + changed the world
Roy:    I + consequential design decision + sourced proof
```

`I` is the default narrative subject. A portfolio is an authorship document: it must reveal what Roy noticed, decided, made, changed, or advocated for. `We` is reserved for a specific shared team action and should appear only after Roy's individual contribution is already unambiguous.

### Recommended card anatomy

```text
[Project or domain]

[Tension, reframe, or consequential change]
[What I changed or clarified] + [why it mattered] + [sourced proof, if available]

[Role] · [system or constraint] · [strongest evidence]
[Specific case-study link]
```

### Four approved headline forms

1. **Tension**
   - `The signal looked healthy. The behavior said otherwise.`
2. **Reframe**
   - `A visual brief became a trust problem.`
3. **Decision**
   - `One constraint changed the shape of the system.`
4. **Consequence**
   - `A clearer model for a harder decision.`

These forms create forward motion without claiming that one designer single-handedly transformed a company. The headline can remain about the problem or decision, but the supporting sentence uses `I` to establish Roy's authorship. Use `we` only when the sentence describes an irreducibly shared action, never as a default voice.

### Sentence formula

```text
I [specific design/research decision] because [observed tension],
which [sourced consequence or changed team understanding].
```

When the outcome is not yet measured:

```text
I [specific contribution] to test or support [stated target],
not [unverified outcome claim].
```

### Vocabulary to retain

Prefer verbs that expose judgment:

- reframed
- clarified
- reduced
- connected
- tested
- prioritized
- authored
- rebuilt
- surfaced

Use them only when the project source material supports the action. Follow the verb with a concrete object: the decision model, workflow, evidence hierarchy, prototype, brief, or system.

### Vocabulary to resist

Avoid unsupported totalizing verbs and polished abstractions:

- transformed
- revolutionized
- reinvented
- empowered
- elevated
- seamless
- world-class
- game-changing
- impactful
- innovative

Also avoid using `streamlined` as a substitute for naming what became shorter, clearer, or easier.

### Copy quality gate

Before a card ships, verify:

1. Can a reader identify the original tension in five seconds?
2. Does the sentence name Roy's actual decision or contribution?
3. Is every metric and outcome traceable to project source material?
4. Does the claim distinguish contribution from team or company causality?
5. Would the sentence remain meaningful without the client logo?
6. Is the link label specific about what the reader will open?
7. If the sentence says `we`, is the shared action specific and is Roy's individual role already clear?

The distilled voice is **editorial confidence with inspectable causality**: memorable enough to stop the scroll, precise enough to survive an interview.

### 7. Trust before detail

The cards foreground recognizable client logos and concrete proof:

- 5 million site owners
- 33 million people
- $100 million in enterprise value
- doubled online transactions
- 80% higher renewals
- 3.5 billion monthly views

The work index therefore performs as evidence, not navigation alone. A visitor can understand the agency's credibility without opening a case study.

### 8. Capability taxonomy

Each card ends with a compact set of outlined pills such as:

- AI
- Backend
- Branding
- Design
- Research
- Web
- WordPress
- iOS / Android / Flutter

The pills use:

- 100px radius
- 1.5px low-opacity white border
- muted white text
- 4px × 10px padding

They are descriptive spans, not filters. Visually they resemble controls, so a portfolio adaptation should either make them interactive or reduce the button-like affordance.

### 9. Motion model

Observed behavior:

- Cards reveal from approximately 20px below while fading from 0 to 1.
- Client logo and heading reveal as the card enters the viewport.
- Image and gradient use short, approximately 300ms transitions.
- Image scale and overlay opacity are prepared for responsive hover feedback.
- The CTA is visually suppressed at rest and appears to be reserved for an active/hover state.

This choreography is one of the page's strongest qualities. It makes a very long sequence feel paced rather than stacked and gives each project a small moment of arrival. Roy explicitly prefers this motion direction, so the portfolio should retain its calm lift, fade, and content stagger in a narrower form: only the homepage hero and Featured Work cards, triggered once, with no scroll hijacking or content gating.

## Why the page feels strong

### Repetition reduces cognitive load

Every project uses the same content order. Once the visitor understands the first card, the remaining cards become fast to scan even though their imagery is highly varied.

### Each project receives narrative weight

The near-full-screen format prevents high-value work from collapsing into tiny thumbnails. The layout communicates confidence: each project is important enough to occupy the stage alone.

### The image does emotional work; the copy does evidentiary work

Photography creates atmosphere and brand recognition. The title and sentence supply consequence, scale, and business value. Neither layer has to do both jobs.

### The index already answers “why should I care?”

Project names such as “Website Redesign” force visitors to open the case study before they understand its value. Fueled's outcome-first titles let the index carry a meaningful portion of the argument.

### Breadth stays legible

Capability tags communicate the range of work without adding filters, comparison tables, or long service descriptions.

## Tradeoffs and risks

### Excessive page length

Thirty 810px cards create a page over 26,000px tall. The cinematic rhythm becomes repetition fatigue. It works as an agency archive with many famous clients, but it is too much for a hiring-manager portfolio with a five-minute review window.

### No visible way to narrow the work

Tags describe capabilities but do not filter the project list. Visitors interested specifically in product systems, AI, or research must scan the entire page.

### Outcome language can become marketing language

The writing is efficient, but consistently triumphant “We…” headlines hide uncertainty, tradeoffs, and residual pain. This is appropriate for an agency sales surface, but it conflicts with Roy's editorial and honest case-study voice.

### Image-dependent readability

The diagonal gradient creates a reliable reading zone, but contrast still depends on the source image. Every image requires a manual contrast check at desktop and mobile breakpoints.

### Performance pressure

Thirty large media surfaces create an aggressive image-loading budget. Any adaptation needs responsive sources, explicit dimensions, lazy loading below the fold, and a small featured set.

### Faux affordance risk

Outlined taxonomy pills look interactive. If they remain static, they should be quieter than actual controls.

### Motion and accessibility

Entrance animation must never be required to access the content. Any adaptation must provide visible content by default under `prefers-reduced-motion`, preserve keyboard focus states, and avoid hover-only CTAs.

## Fit with Roy's portfolio

### Adopt

1. **Outcome-first project framing.** Let the work index communicate the consequential decision or result before the project name.
2. **Large featured-work surfaces.** Give the strongest three projects enough room to feel authored, not templated.
3. **A stable card anatomy.** Product/client → consequential statement → one-sentence proof → role/capability context.
4. **One visual world per project.** Use a single strong image or art-directed composition rather than a collage of small process artifacts.
5. **Readable image overlay.** Use a deterministic gradient zone when text sits over imagery.
6. **Evidence at index level.** Surface a trustworthy metric, decision, or scale indicator before the visitor opens the case study.

### Adapt

1. Replace Fueled's black-and-purple agency palette with the portfolio's green editorial system.
2. Limit the landing page to 3–4 featured projects rather than 30.
3. Use outcome-first titles in Roy's voice, not a repeated “We…” formula.
4. Keep tags to 2–4 high-signal attributes; render them as quiet metadata unless they actually filter.
5. Adapt the reveal choreography to 3–4 Featured Work cards: 12–20px lift plus fade, 320–450ms ease-out, and a 60–90ms internal stagger.
6. Keep image response subtle: no more than 1.02 scale over 250–300ms, with an equivalent focus state and no hover-only information.
7. Use 24–32px corner radii instead of 40px so the surface feels editorial rather than campaign-like.
8. Allow the card to lead to the case study, but keep link purpose explicit and keyboard accessible.
9. On mobile, move critical text into a solid content region if the image cannot guarantee AA contrast.

### Do not copy

1. Thirty full-viewport cards.
2. Site-wide or repeatedly replayed scroll entrances.
3. Hover-only access to the CTA.
4. Marketing-only success arcs with no tradeoff or residual pain.
5. Static tags styled strongly enough to look clickable.
6. Client-logo prestige as a substitute for Roy's actual decision-making.

## Recommended portfolio pattern

Create a `Featured Work` sequence with three cards:

1. Legal Tech / Trust Engine
2. MassChallenge
3. Guarankey or Quipital, depending on the target role

Suggested anatomy:

```text
[Project / domain identity]

[Outcome- or reframe-led headline]
[One sentence: original brief → changed question → consequence]

[Role] · [System type] · [Strongest proof]
[View case study →]
```

Example direction:

```text
Legal Tech

The ranking was healthy. The conversion story was not.
I reframed a visual-refresh brief around the gap between a 4.5 ranking
and a 2.5% CTR, then authored the north-star brief the team reused.

Sole designer · B2B workflow · Targeting 2× organic CTR
View case study →
```

This borrows Fueled's ability to make an index card carry a complete argument while preserving Roy's factual attribution and editorial voice.

## Implementation checklist for a future iteration

- [ ] Prototype one featured-work card before changing the full index.
- [ ] Use `aspect-ratio` rather than fixed height.
- [ ] Provide responsive `srcset`, explicit image dimensions, and lazy loading below the first card.
- [ ] Add a tested overlay token for text-on-image contrast.
- [ ] Keep essential copy visible without hover.
- [ ] Add hover and focus-visible states with equivalent information.
- [ ] Respect `prefers-reduced-motion`.
- [ ] Test at 390px, 768px, 1024px, and 1440px.
- [ ] Measure LCP before and after introducing large cover media.
- [ ] Validate that each card answers “why should I care?” in under five seconds.

## Decision

Fueled is a useful structural reference, not a visual north star.

Borrow:

- outcome-first indexing
- cinematic featured work
- consistent card anatomy
- image plus evidence

Reject:

- archive-scale length
- agency victory language
- site-wide or repeating scroll choreography
- parallax and scroll hijacking
- prestige without process texture

The adaptation should feel like **The Quiet Press with stronger covers and Fueled-like pacing**, not Fueled reskinned green.
