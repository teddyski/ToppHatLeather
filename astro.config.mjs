import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://hightoppleather.com",
  integrations: [tailwind({ applyBaseStyles: false })],
});
