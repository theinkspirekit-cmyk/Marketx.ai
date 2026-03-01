

# Complete Website Redesign to Match Reference (Systemora-style)

Based on the reference images, the website needs a major overhaul to match a clean, light, professional design with specific new sections and a restructured layout.

---

## Overview of Changes

The reference site has a completely different structure and visual style compared to the current site. It uses a clean off-white/cream background (#f7f7f2 or similar), minimal styling, green accent color, and a very different section layout. Here's the full plan:

---

## 1. Global Theme Overhaul

**Current**: Dark liquid glass theme with blue accents, backdrop-blur effects everywhere
**Target**: Clean, light cream/off-white background, minimal borders, green (#22c55e) accent color, no heavy glassmorphism

- Change body background to a warm off-white/cream tone (approx `#f5f5f0`)
- Remove the dark radial gradient background
- Replace blue primary color with green (#22c55e / #16a34a)
- Simplify card styles to clean white with subtle borders (no heavy blur/glass)
- Keep typography: Geist 500 as primary, Instrument Serif italic for accent words
- Remove heavy glass/blur effects; use simple white cards with light borders and subtle shadows

---

## 2. Header / Navbar

**Current**: Glass/blur nav with Markitx logo
**Target**: Simple clean nav with logo left, links center, green CTA button right

- Keep the existing structure but simplify styling
- Change CTA button to green with white text ("Get Started" style)
- Remove heavy glass effects, use simple white/transparent background

---

## 3. Hero Section Redesign

**Current**: "Automate Your Business. Save 10+ Hours/Week" with gradient text
**Target**: "Stop losing leads. Start closing more deals." with bold black text and "more deals" in bold/italic

- Change headline to business-focused copy matching reference
- Add subtitle text below
- Two small metric badges (e.g., "10x Faster Response", "24/7 Available")
- Simple green primary CTA button + secondary outline button
- Clean white background with subtle grid/dot pattern

---

## 4. Integration Marquee (Below Hero)

**Current**: Logo grid in a box with marquee animation
**Target**: Simple text-based marquee - "SEAMLESSLY INTEGRATING WITH YOUR TECH STACK" header, then tool NAMES as text (not logos) scrolling horizontally with small dots before each name

- Replace logo images with plain text names: HubSpot, Salesforce, WhatsApp, Slack, Calendly, Zapier, Make.com, ActiveCampaign
- Simple horizontal scrolling text marquee
- Light background, minimal styling

---

## 5. "Where Your Revenue Disappears" Section (replaces "We Analyze Your Data")

**Current**: Problem section with quote and avatar
**Target**: "THE PROBLEM" badge, "Where Your Revenue Disappears" heading with "Disappears" in green Instrument Serif, subtitle text, then 3 cards (Missed Inquiries, Slow Follow-Ups, No Clear Picture) each with a mini illustration/widget inside

- Create 3 problem cards with mock UI widgets inside each
- Card 1: "Missed Inquiries" - shows a notification-style widget with "MISSED" badge
- Card 2: "Slow Follow-Ups" - shows a timeline bar from "5 MIN" to "48 HOURS LATER" with "LEAD IS COLD" badge
- Card 3: "No Clear Picture" - shows a simple data grid mockup

---

## 6. "From overwhelmed to in control" Section (replaces WhyChoose)

**Current**: "Why Choose MARKITX" with two comparison cards
**Target**: "THE SOLUTION" badge, "From overwhelmed to in control." heading with "in control" in green, then side-by-side comparison: "WITHOUT MARKITX" (red X items) vs "WITH MARKITX" (green dot items on light green background)

- Keep the comparison concept but update copy and styling
- Left card: white background, red X marks
- Right card: light green background, green dot marks
- Update comparison points to match reference content

---

## 7. "How It Works" Section (replaces VideoSection)

**Current**: Video section with play button
**Target**: "How It Works" heading with "Works" in green Instrument Serif, subtitle, then 3 feature cards (Instant Lead Response, Your Knowledge Automated, Hands-Off Follow-Up)

- Remove video player entirely
- Add 3 clean white cards with icons and descriptions
- Each card has a small green-tinted icon at top, bold title, description text

---

## 8. 5-Step Process Section (replaces Services)

**Current**: Services grid with 5 cards
**Target**: 5 alternating left-right steps, each with text on one side and a mock UI widget on the other

- **Step 01**: "We Audit Your Operations" - left text, right shows "DISCOVERY PROCESS" widget with green "Check Availability" button
- **Step 02**: "We Pinpoint What to Automate" - right text, left shows "TASKS WE AUTOMATE" widget with task list and stats (20+ hrs saved, less than 2 min response)
- **Step 03**: "We Connect Your Tools" - left text, right shows a leads table with "Qualified"/"Not Qualified" badges
- **Step 04**: "We Capture Your Knowledge" - right text, left shows "WHAT IT KNOWS" grid widget
- **Step 05**: "You Go Live" - left text, right shows "LIVE SYSTEM ACTIVITY" widget with green "Book a Free Audit" button

Each step has a green "STEP 0X" label with a horizontal line before it.

---

## 9. Testimonials Section

- Keep the existing auto-scrolling carousel but update styling to match the cleaner aesthetic
- Update heading: "What Clients Experience" with "Experience" in green Instrument Serif

---

## 10. "Built for businesses that run on leads" Section (replaces Features)

- Simple section with heading and minimal content about target audience
- Clean styling matching the reference

---

## 11. CTA / Footer Section

**Current**: "INFRASTRUCTURE OVER TEMPLATES" style
**Target**: Large bold heading section, then a clean "Book Your Free Audit" section showing a calendar widget mockup, then simple footer

- Update CTA to show "Book Your Free Audit" with a calendar-style mockup
- Simplify footer styling

---

## 12. Remove/Reorganize Sections

Sections to **remove**:
- VideoSection (replaced by "How It Works" cards)
- Current Services (replaced by 5-step process)
- Current Features (replaced by "Built for businesses" section)
- Projects section
- WhyUs (team) section

Sections to **add/replace**:
- "Where Your Revenue Disappears" (Problem cards)
- "From overwhelmed to in control" (Solution comparison)
- "How It Works" (3 feature cards)
- 5-Step Process (alternating layout)
- "Built for businesses that run on leads"

---

## 13. Page Order (Final)

1. Header
2. Hero
3. Integration Marquee (text-based)
4. "Where Your Revenue Disappears" (Problem)
5. "From overwhelmed to in control" (Solution)
6. "How It Works" (3 cards)
7. 5-Step Process (Steps 01-05)
8. Testimonials
9. "Built for businesses that run on leads"
10. CTA with calendar mockup
11. Footer

---

## Technical Details

### Files to Create:
- `src/components/HowItWorks.tsx` - 3 feature cards section
- `src/components/ProcessSteps.tsx` - 5-step alternating layout
- `src/components/RevenueDisappears.tsx` - Problem cards with mini UI mockups
- `src/components/SolutionComparison.tsx` - Before/after comparison
- `src/components/BuiltForBusiness.tsx` - Target audience section

### Files to Heavily Modify:
- `src/index.css` - Remove dark glass theme, switch to clean light theme with green accents
- `src/pages/Index.tsx` - Restructure section order, remove old sections, add new ones
- `src/components/Hero.tsx` - Complete content and styling overhaul
- `src/components/Integrations.tsx` - Switch from logo grid to text marquee
- `src/components/Header.tsx` - Simplify styling, green CTA
- `src/components/CTA.tsx` - Calendar mockup style
- `src/components/Footer.tsx` - Simplified clean footer
- `src/components/Testimonials.tsx` - Update heading and styling
- `tailwind.config.ts` - Update primary color to green

### Files to Remove from Page (keep files but remove from Index):
- `WhyChoose.tsx` (replaced by SolutionComparison)
- `Services.tsx` (replaced by ProcessSteps)
- `Features.tsx` (replaced by BuiltForBusiness)
- `VideoSection.tsx` (replaced by HowItWorks)
- `Projects.tsx` (removed)
- `WhyUs.tsx` (removed)
- `Problem.tsx` (replaced by RevenueDisappears)

