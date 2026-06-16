import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://www.globalmusicsolutions.ca',
  integrations: [react(), sitemap()],
  output: 'static',
  server: { host: '127.0.0.1' },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});