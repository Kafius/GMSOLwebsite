import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
export default defineConfig({
  integrations: [mdx(), react()],
  output: 'static',
  adapter: vercel(),
  server: { host: '0.0.0.0' },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      entries: ['keystatic.config.*', '.astro/keystatic-imports.js'],
      include: ['lodash/debounce', 'direction'],
    },
  },
});