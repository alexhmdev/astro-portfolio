import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import analogjsangular from '@analogjs/astro-angular';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
  integrations: [tailwind(), react(), analogjsangular()],
});
