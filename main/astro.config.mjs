import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
export default defineConfig({
  integrations: [react()],
  output: 'static',
  adapter: vercel(),
  server: { host: '127.0.0.1' },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});