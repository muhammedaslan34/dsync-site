# dsync website

The landing page for [dsync](https://github.com/muhammedaslan34/dsync), live at
**https://dsync.pixeloud.com** (Coolify) and https://muhammedaslan34.github.io/dsync-site/
(GitHub Pages).

Built with [Astro](https://astro.build). The download buttons link to the files in dsync's
latest GitHub release: they're read when the site is built, and refreshed in the browser,
so a new release shows up without touching this repo.

```sh
npm install
npm run dev      # http://localhost:4321/dsync-site/
npm run build    # writes dist/
```

Pushing to `main` publishes the site in both places: Coolify builds the `Dockerfile`
(nginx, with the build args `SITE_URL=https://dsync.pixeloud.com` and `BASE_PATH=/`) from
a GitHub webhook, and GitHub Actions builds GitHub Pages (`.github/workflows/deploy.yml`).
It's also rebuilt every day, and can be run by hand from the Actions tab.

The screenshots in `src/assets` come from the dsync repo's `docs/screenshots`; they use
demo data only.
