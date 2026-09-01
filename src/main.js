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

const menuButton = document.querySelector('[aria-controls="mobile-navigation"]');
const mobileNavigation = document.querySelector('#mobile-navigation');

function setMenu(open) {
  if (!menuButton || !mobileNavigation) return;

  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileNavigation.setAttribute('aria-hidden', String(!open));
  mobileNavigation.classList.toggle('hidden', !open);

}

menuButton?.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

mobileNavigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1280) setMenu(false);
});

const advancedFilterToggle = document.querySelector('[data-filter-toggle]');
const advancedFilter = document.querySelector('[data-advanced-filter]');

advancedFilterToggle?.addEventListener('click', () => {
  const expanded = advancedFilterToggle.getAttribute('aria-expanded') === 'true';
  advancedFilterToggle.setAttribute('aria-expanded', String(!expanded));
  advancedFilter?.classList.toggle('hidden', expanded);
});

const searchForm = document.querySelector('form[role="search"]');
const searchStatus = document.querySelector('#search-status');

searchForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(searchForm);
  const transaction = data.get('transaction') === 'rent' ? 'rent' : 'buy';
  const location = data.get('location') || 'all destinations';

  if (searchStatus) {
    searchStatus.textContent = `Showing demo residences to ${transaction} in ${location}.`;
  }

  document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const favouriteButtons = [...document.querySelectorAll('button[aria-label^="Save"]')];
let favourites = [];

try {
  favourites = JSON.parse(localStorage.getItem('aveora-favourites') || '[]');
} catch {
  favourites = [];
}

function renderFavourite(button) {
  const key = button.getAttribute('aria-label');
  const saved = favourites.includes(key);
  button.setAttribute('aria-pressed', String(saved));
  button.classList.toggle('is-saved', saved);
}

favouriteButtons.forEach((button) => {
  renderFavourite(button);
  button.addEventListener('click', () => {
    const key = button.getAttribute('aria-label');
    favourites = favourites.includes(key)
      ? favourites.filter((item) => item !== key)
      : [...favourites, key];

    localStorage.setItem('aveora-favourites', JSON.stringify(favourites));
    renderFavourite(button);
  });
});

const inquiryForm = document.querySelector('#inquiry-form');
const inquiryStatus = document.querySelector('#inquiry-status');

inquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!inquiryForm.checkValidity()) {
    inquiryForm.reportValidity();
    return;
  }

  if (inquiryStatus) {
    inquiryStatus.textContent = 'Thank you. This demo inquiry was validated locally; connect an email or CRM endpoint before commercial launch.';
    inquiryStatus.classList.remove('hidden');
  }

  inquiryForm.reset();
});

const languageStatus = document.querySelector('#language-status');

document.querySelectorAll('[data-language]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const language = link.getAttribute('data-language');
    if (language === 'en') return;

    event.preventDefault();
    if (languageStatus) {
      languageStatus.textContent = 'The Croatian demo route will be added during the multilingual implementation phase.';
    }
  });
});
