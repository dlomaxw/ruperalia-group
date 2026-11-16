# Ruparelia Group — website and CMS concept

A website concept for Ruparelia Group, prepared by Bright Thoughts Services Limited, Kampala. It follows the *Ruparelia Group Website and CMS Blueprint* and the company directory of 15 November 2026.

`index.html` is the whole site in one static file. Logos, photos, data and scripts are built into it, so it works offline and deploys as a plain static site (Vercel serves it with no build step).

## What's in it

- **Public site:** home, About, business directory (search plus filters for sector, type, status and relationship, with filters kept in the URL), seven sector pages, a page for every business, Foundation/Impact, News, Careers and Contact.
- **CMS demo** (`#/admin`): dashboard, business records with an editor, categories (rename, reorder, hide), news, a source register (Tier A–D) and an audit log. Changing ownership fields sends a record back to legal review and unpublishes it. Demo data is kept in the browser's localStorage.

## Layout

| Path | Contents |
| --- | --- |
| `index.html` | Built site (generated: do not edit by hand) |
| `src/style.css`, `src/data.js`, `src/app.js` | Styles, portfolio data and sources, app and CMS code |
| `build.py` | Rebuilds `index.html` from `src/` and `build/` |
| `build/logos.json`, `build/photos.json` | Web-size logos and photos (base64) that the build embeds |
| `assets/logos/` | 24 logos cropped from the group collage (low resolution: screen use only) |
| `assets/photos/` | Photos taken from each business's own website, 16 Nov 2026 |
| `design-system/` | Tokens, brand book and components ([live design system](https://claude.ai/artifact/MDHheQU6mEFB3PYNeErvd1)) |

## Rebuild

```bash
python3 build.py
```

## Before launch

- Replace logos with vector originals from each business, and photos with original files (Goldstar, Sanyu FM and Victoria University currently use promotional graphics).
- Confirm records marked *Verify* in the CMS (VCon, Premier Credit, Arie Towers, Kampala Tourist Hotel and others) and the current Premier Recruitment licence.
- Add the group office address, phone, press contact and approved leadership list.
- Connect the contact form and CMS to a real backend. The demo saves only in the browser.
