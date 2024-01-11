import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

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
  ],

  //
  // where the site lives upon deployment
  //
  site: `http://www.ryanmr.com`,
});
