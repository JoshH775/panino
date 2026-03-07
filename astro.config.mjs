// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://paninofocacceria.com',
  output: 'static',
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  },

  server: {
    allowedHosts: ['latoyia-chartographical-laverne.ngrok-free.dev']
  },

  adapter: cloudflare({
    imageService: 'passthrough',
    platformProxy: {
      enabled: true
    }
  })
});