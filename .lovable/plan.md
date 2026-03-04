

# Plan: Restructure Sections

## Changes

### 1. Remove Projects section from Index.tsx
Remove `<Projects />` from the page layout.

### 2. Remove WhyUs (Team) section from Index.tsx
Remove `<WhyUs />` from the page layout.

### 3. Replace Problem section ("We Analyze Your Data") with text-based Integration Marquee
Replace the current `<Problem />` component with a new text-based integration marquee matching the reference image (image-62):
- Small header: "SEAMLESSLY INTEGRATING WITH YOUR TECH STACK" in uppercase, spaced lettering
- Single row of tool names scrolling horizontally as plain text with dots separating them: Pipedrive, GoHighLevel, Stripe, Gmail, HubSpot, Salesforce, WhatsApp, Slack, Calendly, Zapier, Make.com, ActiveCampaign
- Clean minimal background, no logos -- just text names

This will be built into `Integrations.tsx` (replacing the current logo-based version), and placed where `<Problem />` currently sits.

### 4. Add "Where Your Revenue Disappears" section after the marquee
Create new `RevenueDisappears.tsx` matching image-63:
- Green dot + "THE PROBLEM" badge
- Heading: "Where Your Revenue" (bold) + "Disappears" (Instrument Serif italic, muted green color)
- Subtitle paragraph
- 3 cards in a row:
  - **Missed Inquiries** -- card with mini UI mockup (colored dots + bars + red "MISSED" badge)
  - **Slow Follow-Ups** -- card with progress bar from "5 MIN" to "48 HOURS LATER" + red "LEAD IS COLD" badge
  - **No Clear Picture** -- card with data grid mockup
- Each card has title + description text below

### 5. Replace CTA section with embedded Cal.com booking
Replace the entire CTA content with an inline Cal.com embed matching image-61:
- Green "GET STARTED" label
- Heading: "Book Your Free Audit"
- Subtitle: "15 minutes to understand your operations..."
- Embedded Cal.com iframe (same URL: `https://cal.com/dheekshit-datta-hc4xco/30-min-meeting`) displayed directly in the section (not as a popup)
- No more button/popup pattern for this section

### 6. Updated Index.tsx page order
```
Header
Hero
Integrations (text marquee - moved up, replaces Problem)
RevenueDisappears (new)
VideoSection
Services
Features
WhyChoose
Integrations (remove old position)
Testimonials
FAQ
CTA (inline Cal.com embed)
Footer
```

Wait -- let me simplify. The current Integrations at its old position should be removed. The new text marquee replaces Problem's position. Final order:

```
Header
Hero
Integrations (text marquee, new style)
RevenueDisappears (new section)
VideoSection
Services
Features
WhyChoose
Testimonials
FAQ
CTA (embedded Cal.com)
Footer
```

## Files to Create
- `src/components/RevenueDisappears.tsx`

## Files to Modify
- `src/components/Integrations.tsx` -- rewrite to text-based scrolling marquee
- `src/components/CTA.tsx` -- replace with inline Cal.com embed, remove `onBookCallClick` prop
- `src/pages/Index.tsx` -- remove Projects, WhyUs, Problem; add RevenueDisappears; reorder sections; CTA no longer needs onClick

