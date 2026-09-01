# Shared UI components

Framework: static HTML with Bootstrap-style utility classes and a minified custom JavaScript bundle. There is no component framework and no standalone component directory; reusable patterns are embedded directly in `index.html`.

## SearchTabs
- Source: `index.html` (home hero)
- Purpose: Buy/Rent mode selector and property search field.

```html
<form id="search" action="https://eurovilla.hr/en/search/" method="post" role="search">
  <div id="search-tabs">
    <div id="search-tab-sale" class="search-tab on" data-tabvalue="1">Buy</div>
    <div id="search-tab-rent" class="search-tab" data-tabvalue="3">Rent</div>
  </div>
  <input id="search-field" type="search" aria-label="Street, neighborhood, search or listing ID">
  <button id="search-button" type="submit" aria-label="Search"><i class="svg-icon"></i></button>
</form>
```

## PropertyCard
- Source: `index.html` (`#home-properties`)
- Purpose: repeated recommended-property tile.

```html
<a class="property-item" href="https://eurovilla.hr/en/property/zadar-crvene-kuce-modern-ground-floor-apartment-with-garden-51-98-m2/112364/">
  <img loading="eager" src="images/d4bfda6d0aef93e92166a7970418cabe.webp" alt="Zadar, Crvene Kuće - Modern Ground-Floor Apartment with Garden, 51.98 m²" width="383" height="215">
  <h2 class="property-title">Zadar, Crvene Kuće - Modern Ground-Floor Apartment with Garden, 51.98 m²</h2>
  <div class="property-price">€ 200.123</div>
</a>
```

## RegionCard
- Source: `index.html` (`#home-grid`)
- Purpose: destination/offer category tile with image overlay, title and short copy.

```html
<a href="https://eurovilla.hr/en/dalmatia/">
  <img loading="lazy" class="img-responsive" src="images/home-block-dalmatia.jpg" alt="Dalmatia" width="400" height="526">
  <h4>Dalmatia</h4>
  <p>Eurovilla's offer of top real estate in magical Dalmatia</p>
</a>
```

## FAQPanel
- Source: `index.html` (`#home-faq`)
- Purpose: Bootstrap collapse panel used for each frequently asked question.

```html
<div class="panel panel-default">
  <div class="panel-heading" id="faq-heading-1">
    <h5 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#faq-1" aria-expanded="false" aria-controls="faq-1">How much is the real estate transfer tax in the Republic of Croatia? <i class="svg-icon"></i></a></h5>
  </div>
  <div id="faq-1" class="panel-collapse collapse" role="region" aria-labelledby="faq-heading-1">
    <div class="panel-body"><p>Real estate transfer tax in Croatia is generally 3% of the property's market value.</p></div>
  </div>
</div>
```

The complete implementations, all repetitions and all content variants remain in `index.html`.
