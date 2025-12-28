// @ts-check
import tailwindcss from '@tailwindcss/vite'
import compressor from 'astro-compressor'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  ...(process.env.DOMAIN && { size: `https://${process.env.DOMAIN}` }),
  integrations: [compressor()],
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
})
