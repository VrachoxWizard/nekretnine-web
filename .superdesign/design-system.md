# AnaMarija Estates design system

## Product context and goals

AnaMarija Estates is a bilingual Croatian premium real-estate agency concept focused on carefully selected residences in Zagreb and along the Adriatic. The primary job is to let affluent domestic and international buyers immediately explore, filter, save and inquire about a property. The brand should feel discreet, architectural and rooted in Mediterranean materials without resembling Eurovilla.

The initial product includes a homepage, property catalogue, property detail, services, about, contact, privacy and terms in Croatian and English. Demo listings and placeholder company details must be clearly identified; do not invent awards, performance claims, employee identities or client testimonials.

## Brand identity

- Name: AnaMarija Estates.
- Croatian hero line: "Prostori vrijedni življenja."
- English hero line: "Places worth living in."
- Supporting Croatian copy: "Odabrane rezidencije između Zagreba i Jadrana."
- Supporting English copy: "Curated residences between Zagreb and the Adriatic."
- Tone: quiet confidence, precise advice, discretion, local knowledge, international fluency. Never loud, salesy, generic or opulent for its own sake.
- Wordmark direction: set “AnaMarija” as the expressive editorial name and “ESTATES” as a smaller, widely tracked descriptor. Preserve a confident mixed-case spelling—never collapse it to generic initials or an all-caps template wordmark.
- Logo: use the exact supplied AnaMarija Estates Brand Asset in every logo position. The mark combines a stone arch with a restrained Adriatic horizon. Never replace it with initials, emoji, generic house icons, an invented SVG or text alone.

## Color system

- Primary olive `#233D32`: navigation, primary buttons, strong text and dark surfaces.
- Clay `#A85D3C`: small accents, active indicators, editorial rules and selected map markers. Do not use it as the main large CTA background.
- Sand `#E7DDD0`: secondary surfaces and warm separators.
- Warm ivory `#F8F5EF`: main background.
- Paper `#FFFDF8`: elevated panels and form fields.
- Charcoal `#18201C`: body copy.
- Muted stone `#6F756F`: secondary copy.
- Border `#D6CFC3`: quiet one-pixel rules.
- White `#FFFFFF`: text only on the primary olive or photo overlays with sufficient contrast.

No blue action color, pure black sections, neon colors, gradients or glossy effects.

## Typography

- Display: Newsreader, editorial serif, weights 400 and 500. Use for the wordmark-adjacent hero, section statements and select property titles.
- Interface and body: Manrope, weights 400, 500, 600 and 700.
- Large desktop hero: 64–76px with compact line height and left alignment. Mobile: 42–48px.
- Section heading: 40–52px desktop, 32–38px mobile.
- Body: 16–18px with generous 1.55–1.7 line height.
- Metadata and eyebrow labels: 11–13px uppercase Manrope with wide tracking.

## Layout and composition

- Desktop content grid: maximum 1320px, 12 columns, 24–32px gutters. Mobile horizontal padding: 20px.
- Header is an ivory or transparent-to-ivory architectural bar, never a copy of the old full-width transparent navigation. Logo left, concise navigation center/right, outlined contact CTA and HR/EN switch.
- Hero is the signature “Mediterranean editorial gateway”: approximately 90svh on warm ivory in a 12-column grid, with editorial copy in the left five columns and one cinematic property image in the right seven columns. The image begins below the navigation and may use exactly one large arched corner to echo the AnaMarija stone-arch mark; this large radius is exclusive to the hero image.
- A sand-colored concierge search console sits inside the lower-left third and crosses roughly one grid column into the photograph without hanging below the section. It contains Buy/Rent, Location, Property type, Budget and one primary search action. Use quiet borders, strong focus states and no heavy shadow, glass effect or excessive card treatment.
- Add one restrained vertical editorial index `01 / SELECTED RESIDENCES` beside the photograph and one tiny image caption; these are the only decorative metadata in the hero.
- Featured properties use an editorial grid with one larger lead card and smaller supporting cards rather than three identical cards.
- Destination section uses Zagreb, Istria, Kvarner and Dalmatia as typographic/image pairings with varied proportions, not three equal tall cards.
- Services/process uses a numbered sequence: Discover, Advise, Complete. Avoid fake statistics and testimonials.
- Brand story uses layered but restrained photography, a short manifesto and a clay rule.
- Footer is warm ivory or olive with the exact logo, placeholder contact data, bilingual legal links and a visible demo notice.

## Components

- Buttons: 48–56px high, minimal 2–4px radius. Primary olive with white text; secondary transparent with olive border; text links carry a fine clay underline or arrow.
- Cards: image-led, no heavy shadows. Use thin borders, paper surfaces and small editorial overlaps only where composition benefits.
- Property cards show localized title, region, price, area, bedrooms and a heart favorite control. The favorite control must be keyboard accessible and visually distinct when active.
- Forms use visible labels, ample spacing, clear error copy and explicit consent. Never rely on placeholder text as the only label.
- Icons: Lucide line icons with consistent 1.5–2px stroke. Do not use emojis or generic filled real-estate iconography.
- Map markers: olive default, clay selected, with an accessible list counterpart.

## Interaction and motion

- Motion is restrained: 180–260ms ease-out for menu, card image scale, favorite state and filter panels.
- Respect `prefers-reduced-motion`.
- Hover effects may reveal a clay rule or move an arrow 3–4px; avoid floating cards and exaggerated parallax.
- Mobile navigation opens as a full-height ivory drawer with large bilingual links.
- Loading, empty, error and success states use plain language and retain the user's filters.

## Content and legal rules

- Use only newly licensed demo photography with source records. Do not reuse any Eurovilla images or copy.
- Every demo listing carries a subtle "Demo oglas" / "Demo listing" label.
- The public preview carries a persistent concept-demo notice and reserved `.example` contact details until real company data is supplied.
- Do not make unsupported tax, legal, investment-return or market-performance claims.
- Croatian and English content must be written natively, not word-for-word mirrored when phrasing would feel unnatural.

## Responsive behavior

- At tablet widths, the hero becomes a 5/7 split and the filter panel wraps into two rows.
- At mobile widths, header, hero copy, a compact search card and image stack in that order; advanced filters open in an accessible panel. The first property result remains visible without excessive narrative content.
- Property grids become one column; map can collapse behind an explicit "Prikaži kartu / Show map" control.
- Preserve readable tap targets of at least 44px and avoid horizontal overflow at 320px.

## Fidelity constraint

Use ONLY the fonts, colors, spacing, corner treatment and component styles defined in this AnaMarija Estates design system. Do not introduce blue, black-heavy sections, DM Sans, Questa, Eurovilla assets, centered slogan-over-hero composition, identical three-column cards, gradients, invented brand claims or any other recognizable Eurovilla design signature.
