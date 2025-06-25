// @ts-check
import { defineConfig } from "astro/config";
import { defaultLang, languajeList } from "./src/i18n/config/languaje";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",

  i18n: {
    defaultLocale: defaultLang,
    locales: languajeList,
    routing: {
      prefixDefaultLocale: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});