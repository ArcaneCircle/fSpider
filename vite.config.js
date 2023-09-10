import legacy from "@vitejs/plugin-legacy";
import zipPack from "vite-plugin-zip-pack";
import { defineConfig } from "vite";

import { readFileSync } from "node:fs";
import * as toml from "toml";

const manifest = toml.parse(readFileSync("./public/manifest.toml", "utf-8"));
let name = manifest.name || "app";
let version = manifest.version ? "_" + manifest.version : "";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({ renderModernChunks: false }),
    zipPack({
      outDir: "dist-xdc",
      outFileName: name + version + ".xdc",
    }),
  ],
});
