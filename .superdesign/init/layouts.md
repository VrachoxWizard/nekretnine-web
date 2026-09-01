# Shared layouts

The application is a single static document. The full layout source is `index.html`; the shared shell is embedded rather than split into partial files.

## Header and navigation
- Source: `index.html`, beginning at `<header id="header-wrapper">`
- Renders a fixed/absolute transparent header on the home hero, desktop dropdown navigation, mobile collapse control, Eurovilla logo, language menu and sign-in/contact actions.

```html
<header id="header-wrapper" class="container-fluid">
  <nav id="header" class="navbar navbar-default">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false" aria-label="Menu">
        <span class="sr-only">Menu</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
      </button>
      <a id="logo" class="navbar-brand" href="https://eurovilla.hr/en/" aria-label="Eurovilla"></a>
    </div>
    <div class="collapse navbar-collapse" id="main-navbar">
      <ul class="nav navbar-nav navbar-right" role="menu">
        <li class="dropdown"><a href="https://eurovilla.hr/en/search/buy/" class="dropdown-toggle" data-toggle="dropdown">Buy <i class="caret"></i></a></li>
        <li class="dropdown"><a href="https://eurovilla.hr/en/search/rent/" class="dropdown-toggle strong" data-toggle="dropdown">Rent <i class="caret"></i></a></li>
        <li><a href="https://eurovilla.hr/en/projects/">Projects</a></li>
        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Special Offer <i class="caret"></i></a></li>
        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">About Us <i class="caret"></i></a></li>
        <li><a href="https://eurovilla.hr/en/contact/">Contact</a></li>
      </ul>
    </div>
  </nav>
</header>
```

## Main content shell
- Source: `index.html`, `<main>` through `</main>`
- Section order: hero/search, recommended properties, explore offer, projects, Zagreb neighborhoods, reviews, FAQ.

```html
<main>
  <div id="home-search" class="container-fluid">...</div>
  <section id="home-properties" class="container-fluid">...</section>
  <section id="home-grid" class="container-fluid">...</section>
  <section id="home-projects" class="container-fluid">...</section>
  <section id="home-blocks" class="container-fluid">...</section>
  <section id="home-reviews" class="container-fluid">...</section>
  <section id="home-faq">...</section>
</main>
```

## Contact footer and legal footer
- Source: `index.html`, `<aside id="home-contact">` and `<footer id="footer">`
- Renders company contact data, offices, social links, contact form, footer navigation and legal links.

```html
<aside id="home-contact" class="container-fluid">
  <div class="container"><div class="row">
    <div id="home-contact-data" class="col-md-4 col-xs-12">...</div>
    <div id="home-contact-menu" class="col-md-4 col-xs-12">...</div>
    <div id="home-contact-right" class="col-md-4 col-xs-12"><form class="contact-form" aria-label="Contact">...</form></div>
  </div></div>
</aside>
<footer id="footer" class="container-fluid"><p>© 2002 - 2026 Eurovilla | Sitemap | Terms of business | Terms of Service | Privacy Policy</p></footer>
```

All dropdown contents, office addresses, form fields and legal links are present in full in `index.html`.
