# AVEORA Estates

Premium real-estate concept website for curated residences between Zagreb and the Adriatic.

## Local development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm ci
npm run build
npm run preview
```

## Vercel deployment

1. Import `VrachoxWizard/nekretnine-web` in Vercel.
2. Vercel should detect **Vite** automatically.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. No environment variables are required for this concept preview.

The repository includes `vercel.json`, so the build and output settings are already defined.

## Before commercial launch

- Replace placeholder contact and legal company details.
- Connect the inquiry form to an approved email, CRM or serverless endpoint.
- Complete the Croatian routes and legal pages.
- Replace demo listings and confirm the rights for every image listed in `ASSET_SOURCES.md`.
- Remove the demo notice and `noindex`/`robots.txt` block only after those items are complete.
