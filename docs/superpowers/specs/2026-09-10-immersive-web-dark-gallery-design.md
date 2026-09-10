# Immersive Web Dark Gallery

## Purpose

Turn the personal portfolio’s digital-work index into a high-contrast recruiter-facing gallery in which complete desktop compositions, interface text and motion are immediately legible.

## Approved direction

- Deep graphite page field with crisp warm-white typography and restrained cool-blue utility accents.
- Two projects per row on desktop and one per row on mobile.
- Media uses the native desktop ratio rather than portrait-style cropping.
- HORS-VUE Immersive, HORS-VUE Commerce and HALATION use short muted looping previews with static poster fallbacks.
- Other projects retain carefully framed full-width screenshots.
- Project title, discipline, status, year and concise description sit below the media.
- Motion stops for reduced-motion users. Videos use `autoplay`, `muted`, `loop`, `playsInline` and lazy preload behaviour.

## Layout

```text
[ page title and positioning statement                         ]
[──────────────────────────────────────────────────────────────]
[ 16:9 project preview        ][ 16:9 project preview          ]
[ project information         ][ project information           ]
[ 16:9 project preview        ][ 16:9 project preview          ]
[ project information         ][ project information           ]
```

## Visual system

- Gallery black: `#0A0B0D`
- Raised graphite: `#12151A`
- Primary text: `#F3F0E9`
- Secondary text: `#9DA5AE`
- Hairline: `#2A3038`
- Signal blue: `#8BA7C7`

Typography continues the existing portfolio system. The visual change comes from field, scale, spacing and media behaviour rather than introducing unrelated typefaces.

## Interaction and accessibility

- Video previews begin automatically only when allowed by the browser.
- Posters remain visible until playback is ready and whenever motion is reduced.
- Keyboard focus is visible.
- External projects are labelled and open in a new tab.
- Non-linked commissioned work remains a non-interactive article rather than a misleading link.

## Verification

- Production build and type check.
- Desktop QA at approximately 1440 pixels wide.
- Mobile QA at 390 × 844.
- Confirm two-column and one-column behaviour, full screenshot visibility, video playback, poster fallback, keyboard focus and live production content after deployment.
