// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // User site served from the domain root. Other repos publish project sites
  // under their own paths (e.g. /form-builder/), so no page may use those paths.
  site: 'https://whatsaaaa.github.io',
  integrations: [sitemap()],
});
