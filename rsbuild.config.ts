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
      {
        tag: "script",
        attrs: {
          src: "https://cdn.amplitude.com/libs/plugin-autocapture-browser-0.9.0-min.js.gz",
        },
      },
      {
        tag: "script",
        children:
          "window.amplitude.add(window.amplitudeAutocapturePlugin.plugin());window.amplitude.init('77dbcaa6411540523a569b1d7b038bf9');",
      },
    ],
  },
});
