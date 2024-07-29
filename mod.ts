import plugins from "./plugins.ts";

import "lume/types.ts";

export default function () {
  return (site: Lume.Site) => {
    // Configure the site
    site.use(plugins());

    // Add remote files
    const files = [
      "_includes/base.vto",
      "_includes/page.vto",
      "_data.yml",
      "404.md",
      "index.vto",
      "styles.css",
      "favicon.png",
    ];

    for (const file of files) {
      site.remoteFile(file, import.meta.resolve(`./src/${file}`));
    }
  };
}
