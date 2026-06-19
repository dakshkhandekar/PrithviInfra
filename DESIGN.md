# Design Brief

## Direction

Prithvi Infrastructure — a bold, industrial-modern construction company landing page with massive typography, high-contrast dark/light section alternation, and a confident red-cyan accent system.

## Tone

Brutalist-industrial with premium refinement: raw construction power expressed through sharp geometry, stark contrast, and uncompromisingly bold type.

## Differentiation

Massive viewport-filling company name typography combined with construction photography and a red-to-cyan accent pairing creates an unforgettable brand presence.

## Color Palette

| Token      | OKLCH          | Role                                  |
| ---------- | -------------- | ------------------------------------- |
| background | 0.98 0.005 260 | Light sections (About, Projects)      |
| foreground | 0.12 0.01 260  | Body text on light                    |
| card       | 1.0 0.0 0      | White cards on dark backgrounds       |
| primary    | 0.55 0.18 25   | Red accent — CTAs, footer, highlights |
| accent     | 0.65 0.14 195  | Cyan headings on dark sections        |
| muted      | 0.95 0.01 260  | Subtle backgrounds, borders           |

## Typography

- Display: Space Grotesk — massive headings, hero title, footer name
- Body: Space Grotesk — paragraphs, nav, UI labels
- Scale: hero `text-6xl md:text-8xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold`, label `text-sm font-semibold tracking-widest uppercase`, body `text-base md:text-lg`

## Elevation & Depth

Cards float on dark backgrounds with subtle shadow; hero uses text-shadow for depth; no glassmorphism — solid surfaces only for industrial honesty.

## Structural Zones

| Zone           | Background                        | Border        | Notes                                     |
| -------------- | --------------------------------- | ------------- | ----------------------------------------- |
| Header         | oklch(0.08 0.0 0) pure black    | none          | Fixed, transparent-to-black on scroll     |
| Hero           | Dark construction photo + overlay | none          | Full viewport height, massive title         |
| About          | Light white                       | none          | Clean editorial layout with portrait      |
| Services       | Dark charcoal construction bg     | none          | 3 white elevated cards                    |
| Why Choose Us  | Dark charcoal bg                  | none          | Cyan headings, 3 photo columns            |
| Projects       | Light white                       | none          | 4-column masonry gallery                  |
| Contact        | Light white                       | top border    | Simple form-focused section               |
| Footer         | oklch(0.55 0.18 25) red          | none          | Massive bold company name, contact info   |

## Spacing & Rhythm

Sections separated by 0px (full-bleed alternation). Internal section padding: `py-20 md:py-32`. Content max-width container with `px-6 md:px-12`.

## Component Patterns

- Buttons: `rounded-sm`, `bg-primary`, `text-primary-foreground`, hover `brightness-110`, uppercase tracking-wide
- Cards: `rounded-lg`, `bg-card`, `shadow-card`, hover `shadow-elevated` with `transition-smooth`
- Badges: `rounded-full`, `bg-accent`, `text-accent-foreground`, small uppercase

## Motion

- Entrance: `fade-in-up` on scroll for each section, stagger 0.1s between elements
- Hover: buttons scale `1.02`, cards lift with shadow increase, `transition-smooth`
- Decorative: none — motion is functional, not decorative

## Constraints

- Space Grotesk only — no system fallbacks beyond stack
- Red accent #e74c3c reserved for primary actions and footer only
- Cyan headings strictly on dark-background sections
- No gradients on UI surfaces — solid colors or photography only

## Signature Detail

The footer spans full width in solid red with the company name rendered at `text-6xl md:text-8xl` in pure white, creating a powerful brand stamp that closes the page with authority.
