

## Plan: Add Google Analytics, Fix Logo, and Adjust Hero Buttons

### 1. Add Google Analytics (gtag.js) to `index.html`
Insert the Google tag script immediately after `<head>`, before the existing Matomo script:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-EGN21RC4FP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-EGN21RC4FP');
</script>
```

### 2. Fix Navigation Logo
Copy `user-uploads://image-81.png` (the "M Markitx" text logo) to `src/assets/markitx-logo.png`, replacing the current broken/incorrect logo. The Header component already imports from this path.

### 3. Fix Hero Section Buttons to Match Reference (image-84)
The reference shows:
- **"Book Free Call >"** — blue gradient pill button (rounded-full, gradient from light blue to blue)
- **"Discover More"** — white/light pill button with subtle shadow, no border

Update `src/components/Hero.tsx` button styles:
- "Book Free Call" button: add a blue gradient (`bg-gradient-to-r from-blue-400 to-blue-600`) instead of flat `bg-primary`
- "Discover More" button: use `bg-white shadow-md` instead of `liquid-glass-button`

### 4. Ensure Section Title Typography is Correct
All section titles already use inline styles with `fontFamily: "'Manrope', sans-serif"`, `fontWeight: 700`, `fontSize: 48px`, `lineHeight: '66px'`. The reference images (82, 83) confirm the current pattern matches. No changes needed here — the typography is already applied correctly.

### Files to Edit
- `index.html` — add Google Analytics script
- `src/assets/markitx-logo.png` — replace with new logo
- `src/components/Hero.tsx` — fix button styles to match gradient blue + white pill design

