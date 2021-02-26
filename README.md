# Chroma
red green blue

Deploying
---

Ensure you have `yarn` and TypeScript installed.

In the root directory, run:
```
yarn install
yarn build
```

This will compile the TypeScript files for an ES3 target -- this keeps
backwards compatibility to IE8, Firefox 3, Safari 4, and Chrome 4.

No other work is needed to deploy after running the build command.