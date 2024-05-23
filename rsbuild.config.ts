import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: "Hirgana flashcards",
    tags: [
      {
        tag: "script",
        attrs: {
          src: "https://cdn.amplitude.com/libs/analytics-browser-2.7.3-min.js.gz",
        },
      },
    ],
  },
});
