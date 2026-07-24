# Learn Chinese with Kazi Robin

A responsive learning platform built with Next.js App Router, React, Tailwind CSS and section-based JSON content.

## Development

```bash
npm install
npm run dev
```

## Content editing

Every page and section has its own JSON file under `app/data`. Keep existing keys unchanged, edit values or array records, then rebuild.

### Shared layout

- `app/data/shared/navigation.json` - navbar links and visibility
- `app/data/shared/footer.json` - footer columns, links, contact and visibility
- `app/data/shared/footer-pages.json` - content for generated footer destination pages
- `app/data/shared/cta.json` - CTA banner
- `app/data/shared/modals.json` - popup content
- `app/data/shared/seo.json` - metadata for every main route

Navbar controls:

- Set the top-level `visible` to hide the full navbar.
- Set an item `visible` to show or hide one link.
- Set `communityButtonVisible` to show or hide the WhatsApp button.

Footer controls:

- Set the top-level `visible` to hide the full footer.
- Use `brandVisible`, `socialsVisible`, `contactVisible` and `bottomVisible` for major areas.
- Every column and link also has its own `visible` value.

### Home

- `app/data/home/hero.json`
- `app/data/home/stats.json`
- `app/data/home/features.json`
- `app/data/home/roadmap.json`
- `app/data/home/courses.json`
- `app/data/home/notices.json`
- `app/data/home/videos.json`
- `app/data/home/audio.json`
- `app/data/home/why-robin.json`

### Resources

- `app/data/resources/page.json`
- `app/data/resources/library.json`
- `app/data/resources/notices.json`
- `app/data/resources/students.json`
- `app/data/resources/study.json`
- `app/data/resources/audio.json`
- `app/data/resources/pinyin.json`
- `app/data/resources/hanzi.json`
- `app/data/resources/exams.json`
- `app/data/resources/gallery.json`

### Full media and community pages

- `app/data/videos/page.json`
- `app/data/videos/library.json`
- `app/data/audio/page.json`
- `app/data/audio/library.json`
- `app/data/community/page.json`
- `app/data/community/benefits.json`
- `app/data/community/groups.json`
- `app/data/community/events.json`

## Media sources

Audio and video items support local public assets, direct external URLs and embeddable providers.

```json
{
  "sourceType": "local",
  "sourceUrl": "/assets/audio/lesson.mp3",
  "downloadUrl": "/assets/audio/lesson.mp3",
  "externalUrl": ""
}
```

For a direct external file, put the complete URL in `sourceUrl`. For YouTube or Google Drive, omit `sourceUrl` and use an embeddable `embedUrl`.

```json
{
  "sourceType": "embed",
  "embedUrl": "https://drive.google.com/file/d/FILE_ID/preview",
  "downloadUrl": "https://drive.google.com/uc?export=download&id=FILE_ID",
  "externalUrl": "https://drive.google.com/file/d/FILE_ID/view"
}
```

Images use `image`, `downloadUrl` and `externalUrl`. Clicking a gallery image opens the zoomable lightbox.

## Downloadable assets

Real public assets are stored in:

- `public/assets/audio` - local Mandarin MP3 files
- `public/assets/documents` - PDF e-books, assignments, DOCX notice templates and student-list CSV/DOCX
- `public/assets` - downloadable images and brand assets

## Validation

```bash
npm run lint
npm test
npm run build
```

npx prisma migrate dev --name init
npx prisma generate