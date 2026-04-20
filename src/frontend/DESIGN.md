# Design Brief

## Direction

Cosmic Editorial — deep navy-indigo base with unexpected warm coral-orange accent for a "Hello World" showcase.

## Tone

Cosmic editorial: bold, confident, dark — uses thermal contrast (warm coral against cold navy) to create hierarchy without decoration fatigue.

## Differentiation

Single-theme dark editorial with gradient-text reserved exclusively for the hero heading, making every other element feel clean and focused by contrast.

## Color Palette

| Token      | OKLCH          | Role                              |
| ---------- | -------------- | --------------------------------- |
| background | 0.13 0.025 270 | Deep navy-indigo page base        |
| foreground | 0.93 0.01 265  | Near-white body text              |
| card       | 0.17 0.028 270 | Elevated surfaces, nav, cards     |
| primary    | 0.72 0.19 35   | Coral-orange CTAs and accents     |
| accent     | 0.78 0.16 55   | Amber secondary highlight         |
| muted      | 0.22 0.03 270  | Subdued backgrounds and borders   |

## Typography

- Display: Space Grotesk — hero heading, section titles, nav brand
- Body: Figtree — body copy, card descriptions, nav links
- Scale: hero `text-6xl md:text-8xl font-display font-bold`, h2 `text-3xl md:text-4xl font-display font-semibold`, label `text-sm font-body font-medium`, body `text-base font-body`

## Elevation & Depth

Three-layer stack: `bg-background` (page) → `bg-card` (nav, feature cards) → glass (sticky nav blur) with `shadow-card` on hover.

## Structural Zones

| Zone    | Background              | Border           | Notes                              |
| ------- | ----------------------- | ---------------- | ---------------------------------- |
| Header  | glass (card/0.8 blur)   | border-b border  | Fixed, elevates on scroll          |
| Hero    | bg-background + orbs    | —                | Full viewport, gradient-text title |
| About   | bg-muted/30             | border-y border  | Alternating section treatment      |
| Footer  | bg-card                 | border-t border  | Distinct from content              |

## Spacing & Rhythm

Section padding `py-24 md:py-32`, card gap `gap-6 md:gap-8`, micro-spacing uses 4px base grid.

## Component Patterns

- Buttons: rounded-full, gradient-primary fill, hover scale-105 + shadow-elevated, coral-to-amber gradient
- Cards: `bg-card` rounded-xl border border-border shadow-card on hover, icon in primary color
- Badges: rounded-full bg-primary/10 text-primary border border-primary/20

## Motion

- Entrance: fade-up (0.65s cubic) staggered by index * 100ms, whileInView + once
- Hover: scale-105 + shadow transition over 200ms on cards and CTA
- Decorative: animate-float on hero icon element (4.5s ease-in-out)

## Constraints

- Raw color classes banned (bg-white, text-gray-*, etc.) — semantic tokens only
- gradient-text used ONLY on hero heading — nowhere else
- No dual light/dark mode — single dark theme reduces token surface
- Inline styles banned — all motion via Tailwind utilities

## Signature Detail

Coral-to-amber gradient hero text (gradient-text utility) against deep navy, with decorative floating orbs built purely from CSS radial gradients — visual richness with zero external asset dependency.
