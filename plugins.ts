import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import metas from "lume/plugins/metas.ts";
import sitemap from "lume/plugins/sitemap.ts";

import "lume/types.ts";


/** Configure the site */
export default function () {

  return (site: Lume.Site) => {
    site.use(tailwindcss({
        options: {
          content: [
            "./_site/**/*.{html,md,js,tsx}",
            "./src/**/*.{html,md,js,tsx}",
            "./_includes/**/*.{html,md,js,tsx}",],
          theme: {
            colors: {
              'canvas': 'hsl(var(--hue, 220), 85%, 95%)',
              'dark-red': 'hsl(9, 46%, 49%)',
              'accent': 'hsl(8, 58%, 52%)',
              'on-canvas': 'hsl(var(--hue, 220), 10%, 10%)',
              'on-canvas-dim': 'hsl(var(--hue, 220), 20%, 35%)',
              'on-canvas-nyte': 'hsl(var(--hue, 220), 10%, 90%)',
            },
            fontFamily: {
              sans: ["Jost", "sans-serif"],
              serif: ["Merriweather", "serif"],
            },
          },
          plugins: [],
        }
      }))
      .use(postcss())
      .use(basePath())
      .use(metas())
      .use(resolveUrls())
      .use(slugifyUrls())
      .use(sitemap())
      .copy("fonts")
      .copy("favicon.png")
      .copy("uploads")
      .mergeKey("extra_head", "stringArray")
      .preprocess([".md"], (pages) => {
        for (const page of pages) {
          page.data.excerpt ??= (page.data.content as string).split(
            /<!--\s*more\s*-->/i,
          )[0];
        }
      });
  };
}
