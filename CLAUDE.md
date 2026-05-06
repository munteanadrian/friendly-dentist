# Friendly Dentist — Website

## Stack decision
This is a single-page marketing site with moderate interactivity 
(accordion FAQ, contact form, mobile nav). React + Vite is the 
correct choice — no routing needed, no dynamic data.

## Project overview
- Client: Friendly Dentist — stomatologie, București
- Type: Single-page marketing site
- Language: Romanian (diacritics: ș ț ă â î — not ş ţ)
- Reference mockup: https://friendly-dentist-dc2cc8.webflow.io/
- Deploy: Netlify (npm run build → drag /dist)
- Design spec: @docs/design-brief.md
- All copy: @docs/copy.md

## Architecture
src/
  components/
    Nav/          Nav.jsx + Nav.module.css
    Hero/         Hero.jsx + Hero.module.css
    Servicii/     Servicii.jsx + Servicii.module.css
    PrimaVizita/  PrimaVizita.jsx + PrimaVizita.module.css
    Echipa/       Echipa.jsx + Echipa.module.css
    Recenzii/     Recenzii.jsx + Recenzii.module.css
    FAQ/          FAQ.jsx + FAQ.module.css
    Contact/      Contact.jsx + Contact.module.css
    Footer/       Footer.jsx + Footer.module.css
  styles/
    global.css    ← all CSS custom properties live here only
  assets/
    images/       ← placeholder images for now
  App.jsx
  main.jsx

## Rules
- All colors, fonts, spacing via CSS custom properties — 
  never hardcode hex values in component CSS
- No Tailwind, no UI libraries, no icon libraries — 
  SVG icons inline or as React components
- Forms: real controlled components with validation state
- Images: descriptive alt text, consistent aspect ratios
- Romanian diacritics must be correct throughout
- Test at 375px, 768px, 1280px before marking any section done
- Accordion FAQ: pure CSS transition, no library
- Mobile nav: hamburger toggle, no library
- Git is initialized — commit after every section with a short descriptive message
