// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://t-aono.github.io',
  base: '/tda',
  vite: {
    plugins: [tailwindcss()]
  }
});