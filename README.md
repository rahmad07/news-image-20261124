# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/rahmad07/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/rahmad07/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A program that renders the world news of Tuesday 24 November 2026 as a single newspaper front page — masthead "The World", 1024x1024 PNG — and copies it to the harness output directory as `entry.png`.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The image

The front page of **The World** for Tuesday 24 November 2026:

- **Lead — Huang is back at Nvidia.** Eleven days after resigning, Jensen Huang was voted back unanimously as chief executive; shares jumped more than 30% on Monday, the stock's third-best day on record. President Trump said he "convinced" the board; Huang told staff he would be "a better CEO the second time around."
- **Ukraine** — Kyiv says its drones struck a Russian warship at a naval base in Libya; the Novoshakhtinsk refinery is burning after another drone attack; media reports citing leaked government data put Russia's war death toll near 700,000.
- **United States** — ICE arrests at Seattle airport called "out of control": a father and daughter detained on their way to a family baptism, a Princeton neuroscientist held at Dulles after a conference.
- **Iran** — Trump warns Tehran of a "very traumatic" outcome if nuclear talks fail; Washington sanctions an Iranian underground banking network.
- **Korea** — fighter jets scrambled as Russian military aircraft entered South Korea's air defence zone near Ulleungdo; an air raid alert was lifted after five minutes.
- **Trade** — Trump hails new pacts with Japan and Indonesia while the EU threatens retaliation on $84 billion of US goods.
- **Climate** — COP31 talks stall in Türkiye, split over fossil fuels and finance, days after the Antalya summit collapsed with no deal.
- **Also today** — India holds third place in the Asia Power Index; the army searches for scores missing after a Himalayan flood; the Thai–Cambodia truce holds.

## How it works

`layout.html` is the front page itself: plain HTML and CSS, drawn on a cream paper background with a black serif masthead, a black dateline bar, a lead headline, a hero art panel (an inline SVG of a chip with a climbing share-price line), a two-column grid of six short stories, an "Also today" strip and a footer with the date and sources. The page was rendered to `entry.png` (1024x1024) with a headless browser, then checked by eye for overflow and cut-off text.

`main.ts` (Node 22, standard library only) does the one thing the harness needs: it copies `entry.png` beside it into `$MAKEFUN_OUTPUT_DIR` (default `/output`) as `entry.png`. No network, no randomness, no extra files — running it twice writes the same bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=sb2bmxjm&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
