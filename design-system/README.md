# Ruparelia Group

The visual and verbal system for the Ruparelia Group corporate website and its CMS, built from the group logo (black serif wordmark, italic "Group", red elliptical swoosh) and the group's "Serving to Grow and Growing to Serve" materials. Prepared by Bright Thoughts Services Limited as a working proposal; colours were sampled from the supplied logo file and should be confirmed against the group's official brand guidelines if they exist.

## Brand idea

A large, established Ugandan group with businesses in hospitality, real estate, education, floriculture, insurance, media and workforce services. The site should feel like an investment group, not a directory: restrained, confident, editorial. Depth lives in the business pages; the home page stays quiet.

## Content fundamentals

- **Voice:** factual, calm, institutional. Short sentences. No hype words ("world-class", "unparalleled", "iconic").
- **Group line:** *Serving to Grow and Growing to Serve* — set in `quote` style, never paraphrased.
- **Names:** write each business exactly as it writes itself: "Goldstar Insurance", "88.2 Sanyu FM", "Kampala International School Uganda (KISU)", "Victoria University".
- **Relationships are stated, not assumed.** Never call something a "subsidiary" unless management has confirmed it. Public tags use: *Group company*, *Group brand*, *Managed property*, *Joint venture*, *Affiliate*.
- **Figures** (employees, countries, properties) appear only when sourced in the CMS. Example: "13 hotels, resorts and venues" (Speke Group's published portfolio).
- **People:** do not name leadership on public pages until the group approves the leadership list.

## Visual foundations

- **Colour.** `paper` page, `surface` cards, `ink` text. `red` is the single accent: primary buttons, the swoosh, one highlight per view. `maroon` carries large dark bands (hero overlay, impact band, footer) with `on-dark` text. `positive`, `caution`, `critical` belong to the CMS and always come with a word.
- **Type.** Serif (`display-xl`, `display-l`, `heading`, `quote`) for titles, echoing the wordmark; sans (`title`, `body`, `small`, `eyebrow`) for everything you read or click. Never set body copy in the serif.
- **Shape.** Corners nearly square (`radius-sm`, `radius-md`). Cards have a `line` border at rest and `shadow-card` only on hover.
- **Space.** Generous: sections `space-24` on desktop, `space-16` on mobile; page margins `space-12`.
- **The swoosh.** A thin red ellipse, as in the logo, can frame a hero headline or sit behind the stats. One per page, never filled.

## Logos

- The group logo sits on `surface` or `paper` only, with clear space equal to the height of the "R".
- Business logos sit on white `surface` tiles at a consistent height; never recolour them.
- The logo files here were cropped from a low-resolution group collage. They are fine for screens up to about 200px wide. **Request vector originals from each business before print or large use.**
- The **Historical** group (Crane Bank, Crane Financial Services, Crane Forex Bureau, Redfox Bureau) is archive only. These businesses ceased or were sold; do not show them as current.
- `unidentified-globe-logo.png` could not be read at this resolution; confirm which business it belongs to before use.

## Iconography

No icon set is defined. Use plain text labels; where an icon is needed (search, menu, close, arrow) use a 1.5px line glyph in `ink`.

## Components

Button, Tag, BusinessCard and SectorTile below. Their styles live in `components/bundle.css` and are the same classes the website uses.
