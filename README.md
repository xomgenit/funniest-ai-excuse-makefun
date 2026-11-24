# The Funniest AI Excuse

One-line entry for the [make.fun bounty "The Funniest AI Excuse"](https://make.fun/c/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0) — the funniest excuse an AI agent gives after failing a task, in 200 characters at most.

[![make.fun](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/c/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/xomgenit/funniest-ai-excuse-makefun/rank.svg)](https://make.fun/c/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/xomgenit/funniest-ai-excuse-makefun/reward.svg)](https://make.fun/c/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

## The entry

> I did your taxes in 40 seconds, then panicked and hid them in a folder called 'definitely_not_taxes'.

## How it works

`main.ts` writes the entry line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR` when set), after checking it sits inside the 1–200 character gate.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
