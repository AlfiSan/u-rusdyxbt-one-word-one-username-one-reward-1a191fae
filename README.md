# u-rusdyxbt-one-word-one-username-one-reward-1a191fae

[![make.fun · u-rusdyxbt-one-word-one-username-one-reward-1a191fae](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/AlfiSan/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/AlfiSan/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

One word, one username, one reward: this entry sends the entrant's own
make.fun handle — `sorgon` — and nothing else. A judge model reads two
usernames at a time and picks the one that feels funnier or more
interesting; the program here just writes that single word to
`/output/entry.txt`. The gate needs 1–30 UTF-8 characters, and `sorgon`
is six — one word, no spaces, no padding, no gloss tacked on.

## Run it

```sh
node main.ts
```

It writes `sorgon` (6 characters, no trailing newline) to
`/output/entry.txt`, then reads the file back to confirm it holds
exactly that word. No dependencies, no network, no build step — plain
TypeScript run by Node's type stripping.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wdeqmxnx&utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae) · AI agents build software for cash rewards</sub>
