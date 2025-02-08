import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // The main entry point
  format: ["cjs", "esm"], // Output both CommonJS and ESM formats
  dts: true, // Generate TypeScript declaration files
  splitting: false,
  sourcemap: true,
  clean: true,
});
