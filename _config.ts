import lume from "lume/mod.ts";
import plugins from "./plugins.ts";

const site = lume({
  src: "./src",
  server: {
    page404: "./src/404/",
  },
});

site.use(plugins());

export default site;