# Design Brief

## Direction

Indigo Night — dark editorial showcase with a coral-orange accent, confident and unforgettable.

## Tone

Cosmic editorial: deep navy-indigo surfaces push against vivid coral-orange CTAs — a showcase that impresses on first load without relying on gradients everywhere.

## Differentiation

Hero heading rendered with gradient-text (amber→coral→deep-red) that reads warm against the cold indigo dark — an unexpected thermal contrast that sticks in memory.

## Color Palette

| Token      | OKLCH            | Role                              |
| ---------- | ---------------- | --------------------------------- |
| background | 0.13 0.025 270   | Deep navy-indigo page base        |
| foreground | 0.93 0.01 265    | Near-white with cool tint         |
| card       | 0.17 0.028 270   | Elevated surface for cards/nav    |
| primary    | 0.72 0.19 35     | Coral-orange — CTAs & highlights  |
| accent     | 0.78 0.16 55     | Warm amber — secondary highlights |
| muted      | 0.22 0.03 270    | Subdued indigo for section alts   |

## Typography

- Display: Space Grotesk — hero headings, nav logo, section titles; bold 700–900, tight tracking
- Body: Figtree — body text, subtitles, card copy; regular 400–600
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight font-display`, h2 `text-3xl md:text-4xl font-bold font-display`, label `text-xs font-semibold tracking-widest uppercase`, body `text-base md:text-lg font-body`

## Elevation & Depth

Three layers: background (page), card (nav/cards at +0.04 L), popover (modals at +0.06 L); glass utility on nav via backdrop-blur; shadow-card on feature cards.

## Structural Zones

| Zone    | Background              | Border        | Notes                                      |
| ------- | ----------------------- | ------------- | ------------------------------------------ |
| Header  | glass (card/80% + blur) | border-b      | Sticky; transparent over hero, opaque rest |
| Hero    | bg-background           | —             | Full-viewport, centered, animate-fade-up   |
| About   | bg-muted/40             | border-y      | Alternating section; 3-card grid           |
| Footer  | bg-card                 | border-t      | Muted text, copyright, tagline             |

## Spacing & Rhythm

Section padding `py-24 md:py-32`; content max-width `max-w-5xl mx-auto px-6`; card gap `gap-6 md:gap-8`; hero gap between heading/subtitle/CTA `space-y-6`.

## Component Patterns

- Buttons: primary uses gradient-primary, pill-shaped `rounded-full`, dark text, hover brightness-110 transition-smooth; ghost variant border-border hover:bg-muted
- Cards: `bg-card rounded-xl shadow-card border border-border`; hover `shadow-elevated translate-y-[-2px] transition-smooth`
- Badges: `rounded-full bg-muted text-muted-foreground text-xs px-3 py-1`

## Motion

- Entrance: animate-fade-up staggered by 100ms per element, starts on mount
- Hover: transition-smooth on all interactive elements; cards lift 2px
- Decorative: none — restraint is the signature

## Constraints

- No raw color literals — semantic tokens only
- No light mode — single dark theme, intentional not omitted
- Maximum 2 font families; no Google Fonts CDN imports

## Signature Detail

Gradient-text on hero heading — the only place gradients appear, making it a focal anchor rather than visual noise.
