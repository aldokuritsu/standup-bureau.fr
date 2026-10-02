# Standup Bureau (standup-bureau.com)

Site d’affiliation francophone sur les bureaux assis-debout. Stack : **Astro** (statique), déploiement prévu sur **Cloudflare Pages**.

## Documents de cadrage

- `botally-brief-site-bureau-assis-debout-fr.md` : brief source
- `cadrage.md`, `personas.md`, `architecture.md`, `design-system.md`, `sources.md`
- `controle.md` : checklist finale

## Développement

```bash
npm install
npm run dev
```

Build :

```bash
npm run build
npm run preview
```

Le dossier de sortie est `dist/` (à publier sur Cloudflare Pages).

## Notes techniques

- `compressHTML: false` dans `astro.config.mjs` : la compression d’Astro 7 supprimait l’espace entre un mot et un lien placé en début de ligne.
- `src/middleware.ts` applique la typographie française (espaces insécables) au HTML généré.
- L’ancienne version des sources est archivée dans `_archive/src-v0/`.

## Affiliation

Tag Partenaires Amazon : `standup-bureau-21` (`src/data/products.ts`).

Comparatif de modèles : `/bureaux/` · Comparateur 2 modèles : `/bureaux/comparer/`.
Images via CDN `m.media-amazon.com` (pas de réhébergement).


## Règles éditoriales

- Pas de tests inventés, pas de tirets cadratin/demi-cadratin
- Cocon sémantique : navigation de silo uniquement, liens transverses listés dans `architecture.md`
- Liens d’achat : `rel="sponsored"`
