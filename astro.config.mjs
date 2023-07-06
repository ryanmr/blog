import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  integrations: [
    //
    // enables mdx
    //
    mdx(),

    ///
    // enables react support in the rare case its useful
    //
    react(),

    //
    // enables integrated tailwind support
    ///
    tailwind({
      //
      // disables default tailwind base styles
      // and instead configure it in the ./src/styles/tailwind.css
      ///
      applyBaseStyles: false,
    }),

    // inlines critical css
    // as a better alternative to build.inlineStylesheets='auto'
    critters(),
  ],

  //
  // where the site lives upon deployment
  //
  site: `http://www.ryanmr.com`,
});
