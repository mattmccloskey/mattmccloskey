// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mattmccloskey.com',
  image: {
    // Portfolio screenshots are already pre-optimized WebP; keep responsive widths tight.
    responsiveStyles: true,
  },
});
