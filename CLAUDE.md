# Roy Wang Portfolio — Agent Context

## What this repo is

Roy Wang's personal design portfolio. Live at **roywannago.com** (GitHub Pages, served from the `master` branch). Static multi-page HTML — no framework, no build step. Currently mid-redesign on the `2026-redesign` branch.

## CRITICAL: This repo is NOT career-ops

The parent directory `/2026PortfolioCloud/` contains a `CLAUDE.md` and `AGENTS.md` describing the **career-ops** system (a separate sibling project at `career-ops/` — AI job-search pipeline, evaluations, scoring, scan commands, `modes/` directory, tracker, batch workers). **None of that applies here.**

If you find yourself reaching for a career-ops command, mode, script, or convention while working in this repo, stop. You are in the wrong mental model.

The only file from the career-ops sibling that is relevant here is **read-only context**:
- `../career-ops/config/profile.yml` — Roy's canonical career narrative, superpowers list, `case_study_standard.must_show` / `must_avoid`, and the Tom Scott / Soleio / Julie Zhuo "great designer" bars. Portfolio copy and case-study structure should stay consistent with this. **Read it, don't edit it.**

## Canonical docs for this repo

Read these first on any non-trivial task:

- **`PRODUCT.md`** — strategic: register (`brand`), users, purpose, brand personality (2-layer: visual + writing), anti-references, 5 design principles, accessibility floor.
- **`DESIGN.md`** — visual: north star "The Quiet Press", color strategy, typography direction, named rules (No-Teal, One-Accent, No-Eyebrow, No-Numbered-Section, Flat-By-Default), do's/don'ts. **Currently SEED**; re-run `/impeccable document` after tokens settle to capture real values.
- **`.impeccable/live/config.json`** — live-mode injection config for `/impeccable live` (static HTML, `*.html` glob).

## Tech stack (current state)

- Static HTML multi-page at repo root (`index.html`, `masschallenge-v2.html`, `ai-intake-form.html`, `firm-review-management.html`, `legaltech-review-redesign.html`, `masschallenge.html`).
- `CNAME` → `roywannago.com`. Deployed by GitHub Pages from `master`.
- Stylesheets: `style.css` (global) + `projectStyle.css` (case-study primitives). Both small.
- Vendor scripts (all on the redesign chopping block — see DESIGN.md anti-list): Tailwind v1 + Creative Tim starter via CDN, AOS scroll animations, Font Awesome 5, `vanilla-tilt.js`. No bundler, no `node_modules` for the site itself.
- Preview locally with any static server (`python3 -m http.server` from repo root) or just `open file://...` for quick reads.

## Branch & deploy conventions

- `master` is what's live. Treat as production.
- `2026-redesign` is the active feature branch (currently 8 commits ahead of `master`).
- **Do not merge `2026-redesign` → `master` without explicit user confirmation.** Do not push to `master`. Do not deploy.
- Working branches off `2026-redesign` are fine.

## Tone for any agent writing copy in this repo

Match PRODUCT.md's voice rules. The shortlist:

- No marketing buzzwords (streamline, empower, supercharge, leverage, seamless, world-class, next-generation, game-changer).
- No em dashes (`—`). Use commas, colons, semicolons, periods, parentheses. Also no `--`.
- No "Hi I'm Roy 👋" + emoji as design language.
- No AI-tinged voice ("how AI helped us streamline our process") — credibility kill at the target tier.
- Editorial register: show the brief, the reframe, what got cut, the tradeoff that survived, the residual discomfort. No tidy arcs.

## When in doubt

Open `PRODUCT.md` and `DESIGN.md` before writing. They were built deliberately to enforce a single aesthetic line across the rebuild. Drifting from them once will be visible; drifting twice will compound.
