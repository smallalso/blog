import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://smallalso.org',
  server: ({
    command
  }) => ({
    host: true,
    port: command === 'dev' ? 4321 : 4000
  }),
  integrations: [tailwind(), preact()]
});