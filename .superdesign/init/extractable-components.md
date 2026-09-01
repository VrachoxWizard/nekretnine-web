# Extractable components

No safe standalone DraftComponents are available. Header, dropdown menus, footer, search, sliders and cards are embedded in one minified static `index.html` document and their behavior depends on the bundled Bootstrap/Swiper-style JavaScript in `js/main.min.js`.

For design context, use `index.html`, `.superdesign/design-system.md` and the compact tokens in `.superdesign/init/theme.md` directly. Component extraction is intentionally skipped to avoid converting partial markup that would omit the real menus, logo sprite, state behavior or responsive branches.
