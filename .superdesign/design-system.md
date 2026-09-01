# Eurovilla homepage design system

## Product and scope

English-language real-estate agency homepage for discovering Croatian properties. The primary first-viewport task is choosing Buy or Rent, entering a street/neighborhood/listing ID, and starting a search. Secondary flows present recommended properties, offer regions, projects, Zagreb neighborhoods, testimonials, FAQs and direct contact.

This local project must reproduce `https://eurovilla.hr/en/` faithfully rather than reinterpret it. The existing `index.html`, `css/styles.min.css`, local fonts and local images are the source of truth.

## Brand and visual language

- Luxury editorial real-estate tone: restrained, photographic and functional.
- Palette: action blue `#0064e5`; ink `#111`; deep charcoal `#1c2021`; page gray `#f5f5f5`; white `#fff`; quiet borders `#ddd`/`#eee`.
- Typography: Questa Regular serif for the large hero slogan; DM Sans for navigation, controls, headings and body text.
- Logo: exact Eurovilla white logo in transparent hero header and the appropriate dark/red variants where the source uses them. Never invent a symbol, monogram or replacement wordmark.
- Imagery: use the bundled real-estate photographs exactly, including `images/home-hero.webp` on desktop and `images/home-xshero.webp` on mobile.

## Layout and components

- Transparent 64px navigation over the desktop hero, logo at left and uppercase navigation aligned right.
- Full-width hero around 640px tall on desktop with dark overlay.
- Centered 60px serif slogan at approximately 200px from the top.
- Search panel centered below the slogan: compact Buy/Rent tabs, 60px white input, 60px blue square search button.
- Content sections alternate light gray/white and deep charcoal surfaces. Main content is centered in a Bootstrap-style container.
- Recommended listings use a three-column desktop grid with 383×215 imagery, title, price and compact fact icons.
- Offer regions use tall photographic cards. Projects use dark-section horizontal slides with image and editorial copy.
- FAQ uses simple bordered accordion panels. Contact/footer is deep charcoal with three desktop columns.
- Responsive behavior collapses navigation, uses the mobile hero crop and dark overlay, reduces type/search heights, and stacks content at ≤767px.

## Interaction and motion

- Desktop Buy/Rent/About/Special Offer menus open as source dropdowns; mobile uses the source collapse navigation.
- Buy/Rent tabs switch the hidden search transaction value and active blue/white state.
- Recommended properties, projects, neighborhoods and reviews retain source slider/grid behavior.
- FAQ panels expand/collapse with the bundled source behavior.
- Keep hover/focus states, keyboard labels, responsive breakpoints and local cookie preference behavior aligned with the source.

## Fidelity constraint

Use ONLY the fonts, colors, spacing, image assets and component styles defined here and in the provided source. Do not introduce new fonts, colors, gradients, icons, shadows, radii, marketing copy or visual styles.
