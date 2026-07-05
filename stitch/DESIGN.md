---
name: Focus Pad
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#454654'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#757686'
  outline-variant: '#c5c5d7'
  surface-tint: '#3b4fd2'
  primary: '#2036bd'
  on-primary: '#ffffff'
  primary-container: '#3e52d5'
  on-primary-container: '#d7daff'
  inverse-primary: '#bbc3ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#7e3100'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44200'
  on-tertiary-container: '#ffd3bf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dfe0ff'
  primary-fixed-dim: '#bbc3ff'
  on-primary-fixed: '#000d60'
  on-primary-fixed-variant: '#1d34ba'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb694'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7a2f00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
  mono-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 24px
  element-gap: 8px
  stack-gap: 12px
  panel-width-sm: 280px
  panel-width-md: 360px
---

## Brand & Style
The design system is built for high-performance productivity where cognitive load must be minimized. The brand personality is **utilitarian, disciplined, and serene**. It avoids decorative flourishes in favor of extreme functional clarity.

The aesthetic follows a **High-Density Minimalism** approach. It borrows from Swiss design principles—prioritizing grid systems and typographic hierarchy—and combines them with a modern SaaS sensibility. The goal is to feel like a precision instrument: dense enough to show significant data at a glance, yet calm enough to prevent user fatigue during long sessions.

**Key Visual Principles:**
- **Intentional Density:** Information is packed tightly but organized through strict alignment.
- **Reductionist UI:** If an element doesn't serve a functional purpose, it is removed.
- **Monochromatic Foundation:** Using a grayscale spectrum to define structure, reserving color strictly for intent and focus.

## Colors
The palette is architectural, using a range of cool grays to create layers without relying on shadows.

- **Primary (Indigo):** Reserved exclusively for the "Point of Focus"—primary buttons, active cursor states, and critical progress indicators.
- **Neutral/Surface:** A sophisticated scale of Slate grays. `#0F172A` (Slate 950) is used for primary text to ensure high contrast, while `#F8FAFC` (Slate 50) provides a soft secondary background for side panels.
- **Semantic Colors:** Success, Warning, and Error states should be desaturated to maintain the "calm" atmosphere, using 500-level shades only when necessary.

## Typography
The system uses **Inter** for all UI elements to take advantage of its tall x-height and excellent legibility at small sizes. 

- **Scale:** The scale is tight. We use 13px as the standard body size to achieve higher information density without sacrificing readability.
- **Hierarchy:** Contrast is created through weight (Semibold vs. Regular) and color (Slate 950 vs. Slate 500) rather than large jumps in font size.
- **Labels:** Small caps or uppercase tracking is used for metadata and utility labels to distinguish them from actionable content.
- **Monospace:** JetBrains Mono is introduced sparingly for metrics, timers, or ID strings to ensure character alignment.

## Layout & Spacing
This design system employs a **Fixed-Fluid Hybrid** layout. 
- **The Sidebar/Insights Panel:** Fixed width (`280px` or `360px`) to maintain consistent density for metrics and navigation.
- **The Editor/Main View:** Fluid, expanding to fill the remaining space, but with a maximum readable line length (max-width) of `768px` for the content itself.
- **Spacing Rhythm:** Based on a **4px baseline grid**. Components use `8px` (2 units) for internal grouping and `16px` (4 units) for sectional separation. This tight spacing is balanced by large `24px` outer margins to give the "focused" area room to breathe.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Subtle Outlines** rather than traditional shadows.

1.  **Level 0 (Canvas):** The base background (White).
2.  **Level 1 (Panels):** Sidebars and utility panels use a subtle gray fill (`#F8FAFC`) and a 1px border (`#E2E8F0`).
3.  **Level 2 (Floating/Modals):** Only used for dropdowns or context menus. These use a white fill with a very soft, 10% opacity neutral shadow to separate them from the Level 1 panels.

Avoid background blurs or glassmorphism to keep the interface feeling "solid" and predictable.

## Shapes
The shape language is disciplined. A **4px (Soft)** radius is the standard for almost all components (buttons, inputs, cards). 

- **Consistency:** All corners should be uniform. Do not mix sharp and rounded corners within the same view.
- **Inner vs. Outer:** When nesting elements, the inner radius should be 2px smaller than the outer radius to maintain visual harmony.
- **Interactive Elements:** Buttons and form fields maintain the 4px radius, creating a "tool-like" feel that is professional and precise.

## Components
- **Buttons:** 
  - *Primary:* Indigo background, white text. No shadow, 1px inset border for depth.
  - *Secondary:* White background, Slate 200 border, Slate 950 text.
  - *Ghost:* No background or border until hover. Used for low-priority toolbar actions.
- **Inputs:** 
  - 32px height for density. 
  - Subtle 1px border. 
  - Focus state: Indigo border with a 2px semi-transparent indigo ring (focus-visible).
- **Chips/Tags:** 
  - 20px height. 
  - Used for status and categories. 
  - High-contrast text on very pale backgrounds (e.g., Indigo 900 text on Indigo 50 background).
- **Cards:** 
  - No shadows. 
  - Defined by a 1px border (`#E2E8F0`). 
  - Headers inside cards should have a subtle bottom border to separate metadata from content.
- **Iconography:** 
  - 1.5pt stroke weight. 
  - 20x20px bounding box for high-density layouts.
  - Icons should always be the same color as the adjacent text.