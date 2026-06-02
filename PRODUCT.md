# Product

## Register

brand

## Users

Hiring managers, design leaders, and senior ICs at **complex enterprise SaaS and dev-adjacent companies** (Linear / Stripe / Anthropic / Vercel tier, plus the broader mid-market enterprise category Roy has actually shipped in). Reviewers almost always arrive late in the loop: after a referral, an inbound message, a recruiter conversation, or a job application. They are not browsing. They have ~5 minutes to decide whether to push Roy forward.

The bar is intentionally set above the primary audience. Clearing Linear/Stripe-tier craft also clears FAANG recruiters and AI-tooling reviewers; optimizing for the lower bar does not work in reverse.

## Product Purpose

Be the **artifact that closes the loop** in Roy's 2026 Senior Product Designer job search. Not a top-of-funnel screener, not a long-game brand exercise. After someone has been told "Roy is good," this is the page they open to confirm it — and either commit to an interview or move on.

Success = the portfolio earns the next conversation without diluting the positioning: *Senior Product Designer — problem reframing → product systems → shipped outcomes.*

The portfolio is also evidence of one of Roy's stated superpowers: *vibe coding (React + Tailwind prototypes, not just Figma)*. Off-the-shelf templates would falsify that claim. The site is part of the proof.

## Brand Personality

Two stacked registers, deliberately layered:

- **Visual register: Crafted · Quiet · Slightly playful.** Restrained surface, occasional sharp moment. Neighbors: Rauno (rauno.me), Linear changelog, Cursor, Paco Coursey, Brian Lovin, Soleio.com. The visual layer signals confidence by what it leaves out.
- **Writing register: Editorial · Honest · Considered.** Case-study copy reads like long-form magazine writing — Stripe Press, The Pudding, real product writing on Notion / Pitch blogs. Texture of pain, not tidy arcs. The restraint of the visual layer is what gives the writing room to carry weight.

Voice rules (apply to all case-study and landing copy):
- Show the brief, the reframe, what got cut, the tradeoff that survived, the residual discomfort.
- No tidy story arcs (research → align → solution → launch → win).
- No marketing buzzwords (streamline, empower, supercharge, leverage, unleash, seamless, world-class, next-generation, game-changer).
- No "Hi I'm Roy 👋" + emoji as design language.
- No AI-tinged voice ("how AI helped us streamline our process"). This is a credibility kill at the target tier.

## Anti-references

The portfolio must **not** look or read like any of these:

- **Generic portfolio templates** (Cargo, Webflow templates, Notion-style sites). Directly contradicts the vibe-coding superpower claim.
- **Awwwards-style "designer" showcase** (heavy motion, scroll hijack, WebGL flex). Demonstrates surface skill but steals attention from the case-study narrative, which is where the actual judgment lives.
- **Bootcamp / process-theater portfolios** (endless personas, journey maps, Crazy 8s, double diamonds). Process screenshots used as evidence read as someone proving they did the steps, not someone who shipped. Already codified in `career-ops/config/profile.yml` → `case_study_standard.must_avoid`.
- **The current v1 site itself** — Tailwind v1 + Creative Tim starter + AOS scroll fades + vanilla-tilt 3D card hovers + teal-cyan gradient hero. Reads as 2018–2020 portfolio era; signals "followed a tutorial," not "Senior PD with a point of view."
- **2018 device-mockup aesthetic** (hand holding iPhone, isometric stacked devices, MacBook-on-desk renders). Agency deck, not designer site.
- **Over-friendly about pages** with coffee / pets / hobbies as the dominant visual. Short paragraph fine; never the hero.

## Design Principles

Five strategic principles. These guide every page, case study, and component decision. They are *behavioral*, not visual — DESIGN.md owns the visual rules.

1. **Trailer, not museum.** (Soleio.) Every case study is curated selection, not exhaustive documentation. The reader should leave knowing the one decision that mattered, not every meeting that happened.

2. **Show the texture of pain.** What got cut. What survived as a tradeoff with rationale. What still feels uncomfortable in retrospect. Tidy arcs read as fiction; texture reads as judgment.

3. **Practice what you preach.** The portfolio's own typography, hierarchy, motion, and code are themselves the proof of design judgment. A case study about restraint cannot be presented in a loud layout. A case study about systems thinking cannot live in a one-off custom page. Internal consistency is the strongest signal that Roy actually believes what he writes.

4. **Vibe-coded, not templated.** Built and maintained by Roy in HTML / CSS / JS (and React + Tailwind where it earns its place). The medium is part of the message; using a portfolio template would invalidate the central claim of the positioning.

5. **Quiet beats loud.** Restraint is the senior signal. The work is the loud part — the site holds the frame. If a visual or animation flourish is added, it must justify itself against the question *would Linear ship this?*

## Accessibility & Inclusion

WCAG 2.2 **AA floor, pragmatic execution.** Don't make accessibility a brand feature; make it non-negotiable hygiene.

- Contrast checks pass on body text (≥4.5:1) and large text (≥3:1).
- All meaningful images have alt text; decorative images are marked `alt=""`.
- `prefers-reduced-motion` respected on every animation (scroll reveals, hover transitions, page transitions).
- Full keyboard navigability on case studies and landing page (Tab order, visible focus rings).
- No essential content gated behind hover or pointer-only interactions.

Skip: high-contrast theming, complex screen-reader optimization beyond defaults, formal a11y certification. Those are valuable but not the bar for this job-search artifact, and chasing them would slow the rebuild.
