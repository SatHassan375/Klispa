# Relationship Scroll Story

A Vue 3 + Vite + GSAP reproduction of the "Different relationships unlock
different experiences" scroll section, built around the same mechanism as
the Wispr Flow reference video: a sticky card + a naturally scrolling list,
not a pinned/scrubbed section.

## Stack
- Vue 3 (`<script setup>`)
- Vite
- Vue Router 4
- GSAP (for the accent-color tween and card crossfade only — no ScrollTrigger pin)
- Plain CSS (no Tailwind, no UI kit)

## Run it

```bash
npm install
npm run dev
```

## How the scroll story works (matches the Wispr Flow reference)

- `src/data/relationships.js` is the single source of truth: all 8 states
  (Soulmate → Situationship → Flame → My person → Safe Space → Constant →
  The Circle → Legacy), each with accent color, icon, copy, and features.
- **Left column** (`RelationshipCard.vue`): `position: sticky`. It holds
  its position on screen purely via CSS while its taller sibling column
  scrolls past — no pin plugin, no calculated scroll-spacer height.
- **Right column** (`RelationshipBlock.vue` × 8): a plain, naturally tall
  stack. Every relationship's label/title/description is always in the
  document; nothing is virtualized or swapped in.
- A lightweight scroll listener (rAF-throttled, `passive: true`) finds
  whichever block's vertical center is closest to the middle of the
  viewport and marks it active — this is what makes the next block
  genuinely "become visible and take over" as you scroll, instead of
  simulating it with a progress calculation.
- The **active block** turns from gray to full ink color, and its feature
  list (icon + title + description rows) expands open underneath via a
  `grid-template-rows: 0fr → 1fr` transition. Inactive blocks show only
  their label/title/description, dimmed.
- The **sticky card** crossfades (GSAP, opacity + slight translateY) to
  match whichever block is currently active.
- The accent color (label, pills, icon) is tweened on CSS custom
  properties (`--accent`, `--accent-soft`) with GSAP so the palette
  shifts smoothly between states.

## Responsive / accessibility behavior

- Below 900px, the sticky column becomes `position: static` and sits above
  the scrolling list as a single intro card — no JS branching needed, it's
  pure CSS.
- `prefers-reduced-motion: reduce` skips the GSAP crossfade/accent tween
  (values are set immediately instead); the sticky/scroll mechanism itself
  stays, since CSS `position: sticky` is layout, not motion.
- Scroll/resize listeners are removed in `onUnmounted`, verified via the
  `/about` route.

## Project structure

```
src/
├── components/
│   ├── RelationshipSection.vue     (sticky/scroll orchestration)
│   ├── RelationshipCard.vue        (sticky left card, crossfade)
│   ├── RelationshipBlock.vue       (one scrolling right-column entry)
│   └── RelationshipFeatureItem.vue (single feature row)
├── data/
│   ├── relationships.js            (all 8 states)
│   └── icons.js                    (inline thin-stroke SVG set)
├── router/
│   └── index.js
├── styles/
│   ├── variables.css
│   └── global.css
└── views/
    ├── Home.vue
    └── About.vue
```
