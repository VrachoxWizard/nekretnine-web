# Theme

## Compact token summary

- Primary action blue: `#0064e5`
- Ink/dark: `#111`, `#1c2021`, `#232323`
- Page background: `#f5f5f5`
- White surfaces/type: `#fff`
- Muted border: `#ddd`, `#eee`
- Display type: `Questa-Regular, serif` (hero headline, 60px desktop)
- UI/body type: `DMSans-Regular, sans-serif`; medium `DMSans-Medium`; semibold `DMSans-Bold`
- Desktop content container follows Bootstrap's 1170px max-width at ≥1200px
- Breakpoints: 768px, 992px, 1200px; additional mobile tuning at 767px, 480px and 320px
- Primary button/search: square blue surface, white text/icon, 4–5px corner radius
- Main dark sections/footer: `#1c2021`; white or translucent-white text
- Home hero: full-bleed property photo with 30% black overlay on desktop, 50% overlay and alternate crop on mobile
- Motion: Bootstrap dropdown/collapse, Swiper sliders, image fade/transform hover states

## Raw source excerpts

Full source: `css/styles.min.css`.

```css
@font-face{font-family:DMSans-Regular;font-style:normal;font-weight:400;font-display:swap;src:url(../fonts/DMSans-Regular.woff2) format('woff2')}
@font-face{font-family:DMSans-Medium;font-style:normal;font-weight:500;font-display:swap;src:url(../fonts/DMSans-Medium.woff2) format('woff2')}
@font-face{font-family:DMSans-Bold;font-style:normal;font-weight:600;font-display:swap;src:url(../fonts/DMSans-Bold.woff2) format('woff2')}
@font-face{font-family:Questa-Regular;font-style:normal;font-weight:400;font-display:swap;src:url(../fonts/Questa-Regular.woff2) format('woff2')}
body{background-color:#f5f5f5;color:#111;font-family:DMSans-Regular,sans-serif;font-weight:400;padding-top:50px}
#header-wrapper{height:64px;z-index:1049;position:fixed;background-color:#fff;left:0;right:0;top:0}
#home-search{background-image:linear-gradient(rgb(0 0 0 / 30%),rgb(0 0 0 / 30%)),url(../images/home-hero.webp)}
#slogan{font-size:60px;font-family:Questa-Regular,serif;color:#fff;text-align:center;margin:0 0 10px}
#search-container{margin-top:200px}
#search-field{font-size:14px;border:0;background-color:#fff;height:60px;border-radius:0 0 0 5px;box-shadow:none}
#search-button{background-color:#0064e5;color:#fff;height:60px;width:60px;border-radius:0 5px 5px 0;border:0}
#home-projects{background-color:#1c2021;padding-bottom:80px;overflow:hidden}
#home-contact{color:#fff;padding-top:100px;padding-bottom:40px;background:#1c2021}
#footer{margin-bottom:0;background:#1c2021;color:rgb(255 255 255 / 60%)}
```

The complete 231 KB minified stylesheet contains Bootstrap primitives, Swiper styles, responsive rules, all section layouts, icon-sprite mappings, hover states, forms and modal/cookie styles.
