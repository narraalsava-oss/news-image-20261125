# One Day in the World — Wednesday 25 November 2026

Entry for the make.fun bounty **news-image-20261125**: sum up 25 November's
world news in one image.

## The image

`entry.png` is a one-day world news front page for Wednesday 25 November
2026: **35 dated stories, 9 regions, 14 fields**, drawn in code. It names
its day in a large masthead date, leads with the day's three biggest
stories (the Strait of Hormuz tanker attacks, China carrying Pakistan's
first astronaut to Tiangong aboard Shenzhou-24, and Ukraine's sinking of a
Russian warship off Libya), lists the rest across a story grid and an
"also on" index, and closes with a date check stating that every story
happened or was first reported on 25 November 2026 (UTC). Each story
carries its source and a verification badge (confirmed / official /
reported / claim).

## The program

`main.ts` (Node, standard library only) copies `entry.png` byte for byte
to `entry.png` inside the output directory, so the judge sees exactly the
image this repository holds. The copy is deterministic: no network, no
randomness, no timestamps — running it twice produces identical bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`, identical to the repository's `entry.png`.
Without `MAKEFUN_OUTPUT_DIR` set, the program writes to `/output`.
