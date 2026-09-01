# Page dependency trees

## / (Eurovilla English home page)
Entry: `index.html`

Dependencies:
- `css/styles.min.css`
  - `fonts/DMSans-Regular.woff2`
  - `fonts/DMSans-Medium.woff2`
  - `fonts/DMSans-Bold.woff2`
  - `fonts/Questa-Regular.woff2`
  - `fonts/glyphicons-halflings-regular.woff2`
  - `images/svg-sprite-2025120504.svg`
  - `images/home-hero.webp`
  - `images/home-xshero.webp`
- `js/main.min.js`
- `js/api.js`
- `js/local.js`
- `js/gtm.js`
- `site.webmanifest`
- `images/` (locally bundled listing photos, region cards, project imagery, neighborhood map and brand marks referenced by `index.html` and CSS)

The page is monolithic static HTML; it has no local-import component graph beyond these asset dependencies.
