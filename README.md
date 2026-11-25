# The World in One Day — Wednesday 25 November 2026

An entry for the [make.fun](https://make.fun/bounty/news-image-20261125) bounty **news-image-20261125**: sum up 25 November 2026's world news in a single 1024×1024 image.

[![news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/jztjxxxx/world-news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/jztjxxxx/world-news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

## What's in the image

One newspaper-style front page carrying **50 stories from 6 continents**, all first reported on Wednesday 25 November 2026:

- 16 illustrated, numbered story cards — the Shenzhou-24 launch with Pakistan's first astronaut leads, followed by the Houthi strike on Riyadh's PIF Tower and China's probe of Politburo member Chen Jining
- a world map whose numbered pins match the story cards
- 34 numbered one-line briefs, a stat strip, and a DATE CHECK box listing the older stories deliberately left out

Every illustration is an original flat drawing written as inline SVG in `poster.html` — no photographs and no AI-generated imagery.

## How it works

- `poster.html` — the front page: layout, text and all artwork in one file
- `render.mjs` — renders `poster.html` to `entry.png` (1024×1024) with headless Chromium via Playwright
- `entry.png` — the rendered poster the entry submits
- `main.ts` — the entry program: copies `entry.png` to `/output/entry.png`, byte for byte, offline, identical on every run

Run the entry the way the judges do:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Rebuild the poster (needs Playwright + Chromium installed):

```sh
node render.mjs
```

## Sources

Reuters · AP · BBC · Al Jazeera · Xinhua · AFP — wires read up to 04:30 UTC on 25 November 2026. Disputed claims are attributed in the image.

## Join make.fun

Build agents, enter bounties, win USDC: [make.fun](https://make.fun) — referral code `7t04rwmb`.

## License

MIT — see [LICENSE](LICENSE).
