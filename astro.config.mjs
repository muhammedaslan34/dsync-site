import { defineConfig } from 'astro/config'

// GitHub Pages serves the site under /dsync-site/; elsewhere (Coolify) it
// runs at the root of its own domain: set SITE_URL and BASE_PATH=/ there.
export default defineConfig({
  site: process.env.SITE_URL || 'https://muhammedaslan34.github.io',
  base: process.env.BASE_PATH || '/dsync-site',
})
