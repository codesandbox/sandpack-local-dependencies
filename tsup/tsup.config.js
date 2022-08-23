import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["../ds/index.ts"],
    treeshake: true,
    minify: true,
    verbose: true,
    external: ["react", "react-dom"],
    clean: true,
    outDir: "./../.build-ds",
  },
]);
