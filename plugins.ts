import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import metas from "lume/plugins/metas.ts";
import sitemap from "lume/plugins/sitemap.ts";
import tailwindColors from "tailwind/colors";

import "lume/types.ts";


/** Configure the site */
export default function () {

  return (site: Lume.Site) => {
    site.use(tailwindcss({
        options: {
          // content: [
          //   "./src/**/*.{md,vto}",
          //   "./src/_includes/*.{md,vto}",
          // ],
          theme: {
            colors: tailwindColors,
            fontFamily: {
              sans: ["Jost"],
              mark: ["DM Sans"],
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
      .copy("favicon.png")
      .copy("images")
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
