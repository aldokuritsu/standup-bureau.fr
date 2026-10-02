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

Build / aperçu local Astro :

```bash
npm run build
npm run preview
```

Aperçu comme sur Cloudflare Pages :

```bash
npm run preview:cf
```

Déploiement manuel Pages :

```bash
npx wrangler login
npm run deploy
```

Le dossier de sortie est `dist/`.

## Cloudflare Pages (pas Worker)

Site 100 % statique : **ne pas** configurer un Worker avec `wrangler deploy`.

### Via le dashboard (recommandé avec GitHub)

1. Cloudflare → **Workers & Pages** → **Create** → **Pages** → Import `aldokuritsu/standup-bureau.fr`
2. Réglages :
   - Framework : Astro (ou None)
   - Build command : `npm run build`
   - Build output directory : `dist`
   - Production branch : `main`
3. **Pas** de « Deploy command » du type `wrangler deploy`
4. Chaque push sur `main` redéploie

### Via la CLI

```bash
npm run deploy
# équivaut à : astro build && wrangler pages deploy dist
```

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
