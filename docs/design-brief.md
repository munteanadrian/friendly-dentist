# Friendly Dentist — Design Brief (from live Webflow audit)

## Palette — exact extracted values
--color-dark:         #3A3939   /* nav, services section, FAQ, footer bg */
--color-dark-card:    #474747   /* service cards */
--color-light-bg:     #F4F4F4   /* hero behind image, prima vizita, reviews */
--color-white:        #FFFFFF
--color-text-on-dark: #EEEEEE
--color-text-on-dark-muted: rgba(238,238,238,0.7)
--color-btn:          #8A8383   /* pill CTA buttons */
--color-btn-text:     #F7F6F6

## Typography — exact fonts
- Cormorant (Google Fonts) — display headings. 400 weight. Used at 24px 
  (eyebrow), 96–112px (section heroes), uppercase for impact
- Moontime (Google Fonts) — the script "altfel" word only. 144px, white
- Montserrat (Google Fonts) — all body copy, nav links, labels, buttons
  Load: &display=swap&subset=latin,latin-ext (for Romanian ș ț ă â î)

## Section-by-section spec

### 1. Nav
- bg: #3A3939, sticky
- Logo: circular badge left
- Links: Montserrat, white, normal weight
- CTA pill: bg #8A8383, text #F7F6F6, border-radius 32px

### 2. Hero — keep very close to original
- Full-viewport height (100vh), background image of dentist/clinic
- Dark overlay: rgba(0,0,0,0.35)
- Text stack left-aligned, starting around 35% from top:
  1. Eyebrow: "o nouă perspectivă asupra stomatologiei" — Cormorant 24px
  2. H1: "SE POATE ȘI" — Cormorant 112px, uppercase, white, line-height 0.9
  3. Script: "altfel" — Moontime 144px, white, overlaps H1 bottom
  4. CTA button below: "PROGRAMEAZĂ-TE"

### 3. Servicii
- bg: #3A3939
- Left: section heading "Îngrijire completă pentru toată / FAMILIA"
  "FAMILIA" — Cormorant ~96px, uppercase
- Right: body description, Montserrat
- 3×2 grid of cards, bg: #474747, border-radius: 12px
- Each card: icon (proper SVG, not emoji) + bold heading + body text, white
- UPGRADE: replace emoji icons with clean line SVGs from lucide or similar

### 4. Prima Vizită — "PRIMA VIZITA" section
- Full-width background image (clinic interior), dark overlay
- "vrem să știi exact la ce să te aștepți" eyebrow (Cormorant, white)
- "PRIMA VIZITA" — Cormorant ~120px, uppercase, white, overlaid on image
- Below image: 4 numbered steps in white cards on light bg
  01. PROGRAMEZI RAPID / 02. NE CUNOAȘTEM / 03. CONTROLUL BLAND / 04. PLAN CLAR
- Cards: white bg, rounded, centered text, numbered label then bold title then body
- UPGRADE: cards currently have too much centered text — left-align body copy

### 5. Echipă
- bg: #F4F4F4
- Section heading: "Echipa noastră" or similar — Cormorant, large
- 5 doctor cards in horizontal scroll on mobile, 5-col grid on desktop
- Each card: photo (portrait, cropped consistently) + name + specialty
- Card bg: white, subtle border, rounded corners
- UPGRADE: fix duplicate names in Webflow — use placeholder names for now

### 6. Recenzii
- bg: #F4F4F4 (same as team, flows naturally)
- Section heading: "Ce spun pacienții noștri?" — Cormorant, centered, large
- 3 review cards: white bg, rounded, star rating (★★★★★), quote text, 
  avatar initial circle + name
- Below: "Vezi mai mult" button with Google G icon
- UPGRADE: add patient photo placeholders instead of initial circles

### 7. Întrebări Frecvente (FAQ)
- bg: #3A3939 (dark)
- Left col (40%): "Întrebări Frecvente" heading (Cormorant, large, white) 
  + subtitle text
- Right col (60%): accordion items
  - Q: De la ce vârstă pot veni copiii?
  - Q: Ce faceți dacă cel mic plânge sau refuză?
  - Q: Anestezia doare?
  - Q: Pot sta cu copilul în cabinet?
  - Q: Cât durează o ședință?
- Accordion: border-bottom divider, + / − toggle, answers reveal on click
- UPGRADE: answers are empty in Webflow — need real copy from client

### 8. Contact / Programare
- Split layout: left (40%) info, right (60%) form card
- bg of section: #3A3939
- Left: "Primul pas e cel mai ușor" (Montserrat, large, white)
  + subtext + phone + address + hours (with small icons)
  - TELEFON: 0743 169 796
  - ADRESĂ: Str. Cezar Bolliac 66, București
  - PROGRAM: Lun–Vin 9:00–21:00 / Sâm 10:00–16:00
- Right: card bg #474747, rounded
  - Heading: "Fa o programare" (Cormorant, large, light)
  - Fields: NUME, EMAIL, MESAJ (textarea)
  - Submit button: full-width, "Trimite"
- UPGRADE: add phone number field, add a service dropdown

### 9. Footer
- bg: #3A3939, simple centered text
- "© 2026 · Toate drepturile rezervate"
- UPGRADE: add logo, social links (Facebook, Instagram), nav links

## Floating elements
- WhatsApp button: fixed bottom-right, green circle with WA icon
