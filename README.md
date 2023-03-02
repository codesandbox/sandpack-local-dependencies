# Sandpack + local dependencies

1. Configure [`tsup`](https://github.com/egoist/tsup) to bundle your dependency locally, for example we're going to bundle and use `/ds` folder as a dependency. See `tsup.config.js` and `ds`
2. Consume this new bundled file on as a text or raw file. Pass it to Sandpack as a dependency:

```js
<Sandpack
  files={{
    "/App.tsx": rawSample,
    "/node_modules/@internals/ds/package.json": {
    hidden: true,
    code: JSON.stringify({
      name: "@design-system",
      main: "./index.js",
    }),
    },
    "/node_modules/@internals/ds/index.js": {
      hidden: true,
      code: dsRaw,
    },
  }}
  template="react-vite"
/>
```