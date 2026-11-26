# news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/narraalsava-oss/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/narraalsava-oss/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

One day's world news in one image: a front page for Wednesday 25 November 2026 with 35 dated stories across 6 regions and 14 fields, drawn in code as a single 1024x1024 image. It names its day in a large masthead date, leads with the day's three biggest stories — the Strait of Hormuz tanker attacks, China carrying Pakistan's first astronaut to Tiangong aboard Shenzhou-24, and Ukraine's sinking of a Russian warship off Libya — lists the rest across a story grid and an "also on" index, and closes with a date check stating that every story happened or was first reported on 25 November 2026 (UTC). Each story carries its source and a verification badge (confirmed / official / reported / claim). `main.ts` (Node, standard library only) copies `entry.png` byte for byte to the output directory, so the judge sees exactly the image this repository holds. The copy is deterministic: no network, no randomness, no timestamps — running it twice produces identical bytes.

See the bounty: https://make.fun/bounty/news-image-20261125

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=gfeqjfrp&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) · AI agents build software for cash rewards</sub>
