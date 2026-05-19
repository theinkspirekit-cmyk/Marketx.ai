# MARKITX Site Overhaul Plan

Major rebrand: switch to a dark (#0A0A0A) infrastructure-focused aesthetic, rewrite all copy, restructure sections, and replace the favicon/nav logo with the uploaded MARKITX mark.

## 1. Assets & Branding
- Copy uploaded image to `public/favicon.png` and `src/assets/markitx-logo.png`.
- Delete `public/favicon.ico` so the new PNG takes over.
- Update `index.html`: new `<link rel="icon">`, page title ("MARKITX — AI Infrastructure for Businesses"), meta description, OG tags.

## 2. Global Design System (`src/index.css`, `tailwind.config.ts`)
- Background: `#0A0A0A`, foreground: white, muted: `#888`, card: `#141414`, border: subtle white/10.
- Remove all blue accents/gradients. Accent = white.
- Heavier headline weight (Manrope 800/900).
- Update CSS tokens (HSL) so existing semantic classes (`bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `border-border`, `primary`) cascade across all components.
- CTA button style: white bg, black text, rounded-full.

## 3. Header (`src/components/Header.tsx`)
- Replace logo image with new MARKITX mark.
- Nav links: Problem | What We Build | Case Studies | FAQ (anchor links).
- CTA: "Book a Call →" (white bg, black text).
- Adjust pill nav colors for dark theme.

## 4. Hero (`src/components/Hero.tsx`)
- Remove `hero-bg.png` blue background entirely. Solid `#0A0A0A` with subtle radial/noise.
- Headline: "Building AI Infrastructure for Businesses."
- Subheadline: new copy (automate the hustle, amplify the win…).
- Single CTA "Book a Call →". Remove "Discover More".
- Remove the green-dot status pill or restyle minimally.

## 5. Integrations Strip (`src/components/Integrations.tsx`)
- Change label to "Integrated across your entire stack".
- Restyle for dark bg, keep logos.

## 6. Problem (`src/components/RevenueDisappears.tsx`)
- Label: "THE PROBLEM".
- Headline: "Most businesses don't have an AI problem. They have an infrastructure problem."
- Body: new copy.
- Replace three cards & widgets with: No Single Source of Truth / Humans Doing Machine Work / Growth That Breaks Things. Simple dark cards, no fake widgets — just title + body with subtle icon or number.

## 7. How It Works (`src/components/VideoSection.tsx` → rename role)
- Remove video player + dialog entirely.
- Label: "THE PROCESS", headline: "How we build your infrastructure."
- Three steps: Diagnose / Engineer / Deploy with new copy.

## 8. Services (`src/components/Services.tsx`)
- Label: "WHAT WE BUILD", headline: "Not tools. Infrastructure."
- Replace cards with 4: Multi-Agent Systems / Automated Outreach Pipelines / Custom AI Agents / Operational Workflow Automation.

## 9. New Case Studies Section (new `src/components/CaseStudies.tsx`)
- Label: "PROOF OF WORK", headline: "What we've built."
- Two cards: Growzzy Media (Outbound Sales System) and Hotel Aria (Voice Agent). No fake metrics.

## 10. New "Who This Is For" Section (new `src/components/WhoFor.tsx`)
- Label: "WHO WE WORK WITH", headline: "This is not for everyone."
- Body + 3 bullet rows + closing line.

## 11. FAQ (`src/components/FAQ.tsx`)
- Replace all Q&A with the 6 new ones provided.

## 12. CTA (`src/components/CTA.tsx`)
- Headline: "Ready to build?"
- New body + single white "Book a Call →" button.

## 13. Footer (`src/components/Footer.tsx`)
- Tagline → "Building AI infrastructure for businesses."
- Remove 4 service links.
- Keep email + Privacy / Terms.
- Add LinkedIn link (placeholder `#` until URL provided — will flag to user).

## 14. Removals from `src/pages/Index.tsx`
- Remove `<Features />`, `<WhyChoose />`, `<Testimonials />`.
- New order: Header → Hero → Integrations → RevenueDisappears (Problem) → VideoSection (Process) → Services → CaseStudies → WhoFor → FAQ → CTA → Footer.
- Leave the unused component files in place (not imported).

## 15. Misc
- Sweep remaining components for blue/`primary` hardcoded colors and any remaining light-theme assumptions.
- MobileCTA & ChatWidget restyled to dark/white.

## Open Question
- LinkedIn URL not provided — I'll use `#` and ask you to share it after.

Hit "Implement plan" and I'll build it.