// @ts-check
import { defineConfig } from 'astro/config';

// Site statique pour Cloudflare Pages
export default defineConfig({
  site: 'https://standup-bureau.com',
  output: 'static',
  trailingSlash: 'always',
  // La compression HTML d’Astro 7 supprime l’espace entre un mot et un lien
  // placé en début de ligne (« notre<a>lien</a> ») : on la désactive.
  compressHTML: false,
});
