

## Plan: Fix Typography, Restore Hero, Add Liquid Glass Theme & New Logo

### 1. Fix Section Title Typography (All Sections)

The reference images show a specific pattern: **Manrope 700, ~48-56px, black for first words, muted grey (`rgb(137,137,137)`) for accent words**. Currently, the headings are close but inconsistent. I'll standardize all section titles to use:
- `font-family: 'Manrope', sans-serif` / `font-weight: 700`
- Size: `text-4xl md:text-[48px]` with `line-height: 66px`
- Black words + grey accent words matching reference images exactly

Affected sections:
- **RevenueDisappears**: "Where Your Revenue" (black) + "Disappears" (grey)
- **VideoSection**: "How It" (black) + "Works" (grey)  
- **Services**: "Smarter Services," (black) + "Built with AI" (grey)
- **Features**: "Automate Faster," (black) + "Work Smarter" (grey)
- **WhyChoose**: "Why Choose" (black) + "MARKITX" (grey)
- **Testimonials**: "What Our Clients Are" (black) + "Saying" (grey) — fix split
- **FAQ**: "Frequently Asked" (black) + "Questions" (grey)

### 2. Restore Original Hero Section with Blue Theme + Liquid Glass Background

Replace the current grid-pattern hero with the previous liquid glass/wavy background design (matching image-79):
- Light blue/purple gradient wavy background with glass effect
- "Automate Your Business." in black Manrope 700
- "Save 10+ Hours/Week" in blue (`text-primary`) with Instrument Serif italic
- Blue pill "Book Free Call >" button with shadow
- White pill "Discover More" button
- Subtitle with "amplify the win" in italic

### 3. Update Navigation Logo

Copy `user-uploads://image-80.png` as the new logo (`src/assets/markitx-logo.png`) showing the "M" icon + "Markitx" text mark.

### 4. Apply Liquid Glass Theme Site-wide

Ensure all cards, sections, and containers use the liquid glass styling already defined in `index.css`:
- Cards: `bg-white/80 backdrop-blur-xl border border-white/40` with glass shadows
- Section backgrounds: subtle glass overlays
- Maintain `#F9FAFB` as base background

### Files to Edit
- `src/assets/markitx-logo.png` — replace with new logo
- `src/components/Hero.tsx` — restore liquid glass hero
- `src/components/Header.tsx` — use new logo
- `src/components/RevenueDisappears.tsx` — fix title typography
- `src/components/VideoSection.tsx` — fix title typography
- `src/components/Services.tsx` — fix title typography + glass cards
- `src/components/Features.tsx` — fix title typography + glass cards
- `src/components/WhyChoose.tsx` — fix title typography + glass cards
- `src/components/Testimonials.tsx` — fix title typography
- `src/components/FAQ.tsx` — fix title typography
- `src/components/CTA.tsx` — glass styling

