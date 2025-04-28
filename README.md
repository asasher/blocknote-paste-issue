# Blocknote Paste Issue Demo

## Steps To Reproduce

1. Run `pnpm dev`
2. Type something in the editor
3. Copy part of the the text, Cmd+C
4. Arrow down and paste, Cmd+V
5. Boom

[Demo Video](./demo.mp4)

## The Fix

Addin the following as a pnpm override seems to fix the issue

```
"pnpm": {
    "overrides": {
      "prosemirror-model": "1.25.0"
    }
  }
```

See [package.json](./package.json)
