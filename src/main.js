import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Menu,
  Search,
  SlidersHorizontal,
  createIcons,
} from 'lucide';

import './styles.css';

const supportedLanguages = ['hr', 'en'];

function readDefaultTranslations() {
  const defaultTranslations = {};

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const attribute = element.dataset.i18nAttr;
    const value = attribute ? element.getAttribute(attribute) : element.textContent;

    if (key && value !== null && defaultTranslations[key] === undefined) {
      defaultTranslations[key] = value.trim();
    }
  });

  return defaultTranslations;
}

const translations = {
  hr: readDefaultTranslations(),
  en: {
    metaTitle: 'AnaMarija Estates — Places worth living in.',
    metaDescription: 'Curated residences and discreet property guidance between Zagreb and the Adriatic.',
    skipToContent: 'Skip to content',
    mainNavigation: 'Main navigation',
    homeLabel: 'AnaMarija Estates home',
    brandName: 'AnaMarija Estates',
    residences: 'Residences',
    destinations: 'Destinations',
    privateAdvisory: 'Private advisory',
    journalNav: 'Inspiration',
    about: 'About',
    languageLabel: 'Language',
    privateInquiry: 'Private inquiry',
    openMenu: 'Open menu',
    mobileNavigation: 'Mobile navigation',
    heroEyebrow: 'Zagreb · Adriatic',
    heroTitle: 'Places worth living in.',
    heroBody: 'Curated residences and discreet guidance between Zagreb and the Adriatic.',
    searchAria: 'Find a property',
    transaction: 'Transaction',
    buy: 'Buy',
    rent: 'Rent',
    location: 'Location',
    allDestinations: 'All destinations',
    istria: 'Istria',
    dalmatia: 'Dalmatia',
    propertyType: 'Property type',
    anyType: 'Any type',
    apartment: 'Apartment',
    house: 'House',
    villa: 'Villa',
    land: 'Land',
    viewResidences: 'View residences',
    privacyHint: 'No registration · Favourites stay on this device',
    introductionIndex: '00 / The introduction',
    heroImageAlt: 'Mediterranean villa overlooking the Adriatic',
    adriaticEdit: 'The Adriatic edit',
    architectureCaption: 'Architecture in conversation with the landscape.',
    pointOfView: 'A point of view',
    belongingTitle: 'A home is more than an address. It is a way of belonging.',
    adriatic: 'Adriatic',
    propertiesKicker: '01 / Residences',
    propertiesTitle: 'A considered selection',
    exploreResidences: 'Explore all residences',
    kvarnerImageAlt: 'Contemporary white villa with a pool',
    demoListing: 'Demo listing',
    kvarnerLocation: 'Kvarner · Island setting',
    kvarnerTitle: 'Sea-view villa shaped around open-air living',
    kvarnerFeatures: '286 m² · 4 bedrooms · Pool',
    demoPrice: 'Demo price',
    zagrebImageAlt: 'Warm contemporary residence interior',
    zagrebLocation: 'Zagreb · Tuškanac',
    zagrebTitle: 'Garden residence near the city centre',
    zagrebFeatures: '168 m² · 3 bedrooms',
    istriaImageAlt: 'Contemporary residence surrounded by mature trees',
    istriaLocation: 'Istria · Rovinj hinterland',
    istriaTitle: 'Contemporary home among olive groves',
    istriaFeatures: '205 m² · 4 bedrooms',
    destinationsKicker: '02 / Destinations',
    destinationsTitleOne: 'Two ways of living.',
    destinationsTitleTwo: 'One point of view.',
    destinationsBody: 'The energy of the capital and the slower rhythm of the coast, connected by a sense of place.',
    urbanImageAlt: 'Contemporary urban residence',
    urbanCalm: 'Urban calm',
    adriaticImageAlt: 'Stone arch framing a Mediterranean residence and sea',
    lifeBySea: 'Life by the sea',
    servicesKicker: '03 / Private advisory',
    servicesTitle: 'Clarity at every decision.',
    servicesBody: 'Property decisions call for context, patience and precise coordination. Our role is to make each stage considered and understandable.',
    servicesImageAlt: 'Stone residence among olive trees',
    discoverTitle: 'Discover',
    discoverBody: 'We listen closely, define the brief and introduce a small number of homes that fit the way you want to live.',
    evaluateTitle: 'Evaluate',
    evaluateBody: 'We provide local context, coordinate viewings and help you assess the property, setting and practical details with care.',
    completeTitle: 'Complete',
    completeBody: 'We coordinate the path to completion with clear communication and the right specialist support at each step.',
    journalKicker: '04 / The AnaMarija Edit',
    journalTitle: 'Ideas for living well',
    journalBody: 'A concept collection of place, architecture and practical guidance.',
    journalFeatureAlt: 'Sunlit living room with warm natural materials',
    journalFeatureLabel: 'Perspective · Demo editorial',
    journalFeatureTitle: 'What makes a residence feel quietly enduring?',
    journalGuideAlt: 'Mediterranean villa entrance framed by greenery',
    journalGuideLabel: 'Guide · Demo editorial',
    journalGuideTitle: 'A considered approach to buying in Croatia',
    journalNotesLabel: 'Field notes · Demo editorial',
    journalNotesTitleOne: 'City mornings.',
    journalNotesTitleTwo: 'Island evenings.',
    exploreDestinations: 'Explore destinations',
    aboutKicker: '05 / Point of view',
    aboutTitle: 'A home should belong to its place.',
    aboutBodyOne: 'AnaMarija Estates brings together architectural awareness, local knowledge and discreet guidance across Zagreb and the Adriatic.',
    aboutBodyTwo: 'We look for homes that respond to their setting and support the life imagined within them — without noise, pressure or passing trends.',
    cityWord: 'CITY',
    coastWord: 'COAST',
    contextWord: 'CONTEXT',
    contactKicker: '06 / Private conversation',
    contactTitle: 'Tell us how you want to live.',
    contactBody: 'Share a few details and we will respond with a considered next step. No mailing lists and no unnecessary data.',
    contactDemoBrand: 'AnaMarija Estates — Concept Demo',
    inquiryAria: 'Property inquiry',
    interestLegend: 'I am interested in',
    buying: 'Buying',
    renting: 'Renting',
    selling: 'Selling',
    formName: 'Name',
    formEmail: 'Email',
    preferredLocation: 'Preferred location',
    telephone: 'Telephone',
    optional: '(optional)',
    message: 'Message',
    consent: 'I agree that my demo inquiry may be processed only for the purpose of responding to this request.',
    formDataNote: 'These details are used only to respond to your inquiry.',
    formSubmit: 'Begin a private conversation',
    advisory: 'Advisory',
    privacy: 'Privacy',
    terms: 'Terms',
    copyright: '© 2026 AnaMarija Estates. Concept demo.',
    demoNotice: 'Demo listings and placeholder company details — not a commercial offer',
  },
};

const interfaceMessages = {
  hr: {
    openMenu: 'Otvori izbornik',
    closeMenu: 'Zatvori izbornik',
    moreFilters: 'Više filtara',
    fewerFilters: 'Manje filtara',
    searchBuy: 'kupnja',
    searchRent: 'najam',
    searchStatus: (transaction, location) => `Prikaz oglednih rezidencija: ${transaction}, ${location}.`,
    inquirySuccess: 'Hvala. Ogledni upit uspješno je provjeren lokalno; prije komercijalnog pokretanja potrebno je povezati e-poštu ili CRM sustav.',
    languageChanged: 'Jezik je postavljen na hrvatski.',
    saveFavourite: 'Spremi',
    removeFavourite: 'Ukloni iz spremljenih',
    properties: {
      'sea-view-villa': 'Vila s pogledom na more',
      'zagreb-residence': 'Zagrebačka rezidencija',
      'istrian-residence': 'Istarska rezidencija',
    },
  },
  en: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    moreFilters: 'More filters',
    fewerFilters: 'Fewer filters',
    searchBuy: 'buy',
    searchRent: 'rent',
    searchStatus: (transaction, location) => `Showing demo residences: ${transaction}, ${location}.`,
    inquirySuccess: 'Thank you. This demo inquiry was validated locally; connect an email or CRM endpoint before commercial launch.',
    languageChanged: 'Language set to English.',
    saveFavourite: 'Save',
    removeFavourite: 'Remove from favourites',
    properties: {
      'sea-view-villa': 'Sea-view villa',
      'zagreb-residence': 'Zagreb residence',
      'istrian-residence': 'Istrian residence',
    },
  },
};

const locationTranslationKeys = {
  all: 'allDestinations',
  istria: 'istria',
  dalmatia: 'dalmatia',
};

const favouriteStorageKey = 'anamarija-estates-favourites';
const legacyFavouriteStorageKey = 'aveora-favourites';
const legacyFavouriteIds = {
  'Save sea-view villa': 'sea-view-villa',
  'Save Zagreb residence': 'zagreb-residence',
  'Save Istrian residence': 'istrian-residence',
};

const currencyFormatters = {
  hr: new Intl.NumberFormat('hr-HR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }),
  en: new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }),
};

const languageStatus = document.querySelector('#language-status');
const menuButton = document.querySelector('[aria-controls="mobile-navigation"]');
const mobileNavigation = document.querySelector('#mobile-navigation');
const advancedFilterToggle = document.querySelector('[data-filter-toggle]');
const advancedFilterToggleLabel = document.querySelector('[data-filter-toggle-label]');
const advancedFilter = document.querySelector('[data-advanced-filter]');
const searchForm = document.querySelector('form[role="search"]');
const searchStatus = document.querySelector('#search-status');
const inquiryForm = document.querySelector('#inquiry-form');
const inquiryStatus = document.querySelector('#inquiry-status');
const favouriteButtons = [...document.querySelectorAll('button[data-property-id]')];

function languageFromUrl() {
  return new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'hr';
}

let currentLanguage = languageFromUrl();
let favourites = [];

function readStoredFavourites() {
  try {
    const saved = JSON.parse(localStorage.getItem(favouriteStorageKey) || 'null');

    if (Array.isArray(saved)) {
      return saved.filter((id) => favouriteButtons.some((button) => button.dataset.propertyId === id));
    }

    const legacy = JSON.parse(localStorage.getItem(legacyFavouriteStorageKey) || '[]');
    if (!Array.isArray(legacy)) return [];

    const migrated = legacy.map((item) => legacyFavouriteIds[item]).filter(Boolean);
    localStorage.setItem(favouriteStorageKey, JSON.stringify(migrated));
    localStorage.removeItem(legacyFavouriteStorageKey);
    return migrated;
  } catch {
    return [];
  }
}

function renderFavourite(button) {
  const id = button.dataset.propertyId;
  const saved = favourites.includes(id);
  const messages = interfaceMessages[currentLanguage];
  const action = saved ? messages.removeFavourite : messages.saveFavourite;

  button.setAttribute('aria-pressed', String(saved));
  button.setAttribute('aria-label', `${action}: ${messages.properties[id]}`);
  button.classList.toggle('is-saved', saved);
}

function renderSearchStatus() {
  if (!searchStatus?.dataset.transaction || !searchStatus.dataset.location) return;

  const transaction = searchStatus.dataset.transaction === 'rent'
    ? interfaceMessages[currentLanguage].searchRent
    : interfaceMessages[currentLanguage].searchBuy;
  const locationValue = searchStatus.dataset.location;
  const translationKey = locationTranslationKeys[locationValue];
  const location = translationKey
    ? translations[currentLanguage][translationKey]
    : locationValue === 'zagreb' ? 'Zagreb' : 'Kvarner';

  searchStatus.textContent = interfaceMessages[currentLanguage].searchStatus(transaction, location);
}

function renderInquiryStatus() {
  if (inquiryStatus?.dataset.state !== 'success') return;
  inquiryStatus.textContent = interfaceMessages[currentLanguage].inquirySuccess;
}

function renderPrices() {
  document.querySelectorAll('[data-price]').forEach((element) => {
    const price = Number(element.dataset.price);
    if (Number.isFinite(price)) {
      element.textContent = currencyFormatters[currentLanguage].format(price);
    }
  });
}

function updateMenuLabel() {
  if (!menuButton) return;
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-label', interfaceMessages[currentLanguage][open ? 'closeMenu' : 'openMenu']);
}

function updateFilterToggleLabel() {
  if (!advancedFilterToggle || !advancedFilterToggleLabel) return;
  const expanded = advancedFilterToggle.getAttribute('aria-expanded') === 'true';
  advancedFilterToggleLabel.textContent = interfaceMessages[currentLanguage][expanded ? 'fewerFilters' : 'moreFilters'];
}

function updateLanguageControls() {
  document.querySelectorAll('a[data-language]').forEach((link) => {
    const active = link.dataset.language === currentLanguage;
    const inFooter = Boolean(link.closest('footer'));

    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');

    link.classList.toggle('border-[#A85D3C]', active && !inFooter);
    link.classList.toggle('border-[#E7DDD0]', active && inFooter);
    link.classList.toggle('border-transparent', !active);
    link.classList.toggle('text-[#233D32]', active && !inFooter);
    link.classList.toggle('text-[#4F5A54]', !active && !inFooter);
    link.classList.toggle('text-white', active && inFooter);
    link.classList.toggle('text-white/60', !active && inFooter);
  });
}

function applyLanguage(language, { announce = false } = {}) {
  currentLanguage = supportedLanguages.includes(language) ? language : 'hr';
  const copy = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.documentElement.dataset.locale = currentLanguage;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (typeof value !== 'string') return;

    const attribute = element.dataset.i18nAttr;
    if (attribute) element.setAttribute(attribute, value);
    else element.textContent = value;
  });

  updateLanguageControls();
  updateMenuLabel();
  updateFilterToggleLabel();
  favouriteButtons.forEach(renderFavourite);
  renderPrices();
  renderSearchStatus();
  renderInquiryStatus();

  if (announce && languageStatus) {
    languageStatus.textContent = interfaceMessages[currentLanguage].languageChanged;
  }
}

function updateLanguageUrl(language) {
  const url = new URL(window.location.href);

  if (language === 'en') url.searchParams.set('lang', 'en');
  else url.searchParams.delete('lang');

  window.history.pushState({ language }, '', `${url.pathname}${url.search}${url.hash}`);
}

function setMenu(open) {
  if (!menuButton || !mobileNavigation) return;

  menuButton.setAttribute('aria-expanded', String(open));
  mobileNavigation.setAttribute('aria-hidden', String(!open));
  mobileNavigation.classList.toggle('hidden', !open);
  updateMenuLabel();
}

favourites = readStoredFavourites();
applyLanguage(currentLanguage);

createIcons({
  icons: {
    ArrowRight,
    ArrowUpRight,
    Heart,
    Menu,
    Search,
    SlidersHorizontal,
  },
});

menuButton?.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

mobileNavigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1280) setMenu(false);
});

advancedFilterToggle?.addEventListener('click', () => {
  const expanded = advancedFilterToggle.getAttribute('aria-expanded') === 'true';
  advancedFilterToggle.setAttribute('aria-expanded', String(!expanded));
  advancedFilter?.classList.toggle('hidden', expanded);
  updateFilterToggleLabel();
});

function handleSearch(event) {
  event.preventDefault();
  if (!searchForm) return;

  const transaction = searchForm.querySelector('input[name="transaction"]:checked')?.value;
  const location = searchForm.querySelector('select[name="location"]')?.value;

  if (searchStatus) {
    searchStatus.dataset.transaction = transaction === 'rent' ? 'rent' : 'buy';
    searchStatus.dataset.location = location || 'all';
    renderSearchStatus();
  }

  document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

searchForm?.addEventListener('submit', handleSearch);

favouriteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const id = button.dataset.propertyId;
    favourites = favourites.includes(id)
      ? favourites.filter((item) => item !== id)
      : [...favourites, id];

    try {
      localStorage.setItem(favouriteStorageKey, JSON.stringify(favourites));
    } catch {
      // The visual state still works when storage is unavailable.
    }

    renderFavourite(button);
  });
});

inquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!inquiryForm.checkValidity()) {
    inquiryForm.reportValidity();
    return;
  }

  if (inquiryStatus) {
    inquiryStatus.dataset.state = 'success';
    inquiryStatus.classList.remove('hidden');
    renderInquiryStatus();
  }

  inquiryForm.reset();
});

document.querySelectorAll('a[data-language]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const language = link.dataset.language;
    if (!supportedLanguages.includes(language)) return;
    if (language === currentLanguage) {
      if (languageStatus) languageStatus.textContent = interfaceMessages[currentLanguage].languageChanged;
      return;
    }

    updateLanguageUrl(language);
    applyLanguage(language, { announce: true });
  });
});

window.addEventListener('popstate', () => {
  applyLanguage(languageFromUrl());
});
