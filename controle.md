# Contrôle final (checklist brief §8)

Date de contrôle : 2 octobre 2026.

- [x] Aucun tiret cadratin (U+2014) ni demi-cadratin (U+2013) dans `src/` (scan Python : aucun restant)
- [x] Chaque page hors accueil : lien vers page mère dans l’introduction (hubs → `/`, filles → hub)
- [x] Liens inter-silos limités à la liste architecture (manuel / ikea / amazon / flexispot ↔ ergonomique)
- [x] Pas de page orpheline ; hubs + footer légal ; ≤ 3 clics depuis l’accueil
- [x] Header : logo seul ; footer : méthodo, à propos, affiliation, mentions, contact
- [x] Chiffres / affirmations santé sourcés INRS + Cochrane ; specs enseignes citées
- [x] Aucun test / auteur / expérience inventés (page Méthodologie)
- [x] Liens affiliation `rel="sponsored noopener"` + encadré signalé
- [x] Tokens AA documentés ; focus visible ; `prefers-reduced-motion` dans CSS
- [x] Title et meta description uniques par page
- [x] Build Astro OK : **37 pages** (`npm run build`)
- [x] Tag Amazon `standup-bureau-21` dans `src/data/products.ts`

## Preuves

| Point | Preuve |
| --- | --- |
| Build | `npm run build` → 37 page(s) built, exit 0 |
| Grep tirets | Script Python sur `src/` : remaining none |
| Architecture | `architecture.md` + `src/data/silos.ts` |
| Cadrage | `cadrage.md`, `personas.md`, `design-system.md`, `sources.md` |

## Contrôle après refonte design et contenus (2 octobre 2026)

- [x] Aucun tiret cadratin ni demi-cadratin dans `src/` (grep U+2013 / U+2014 : aucun)
- [x] Tics d’IA de la liste §6.3 : aucun (grep)
- [x] Liens internes du contenu : aucun lien inter-silos hors liste 4.4, aucun lien cassé (script sur `dist/`)
- [x] Aucune ancre identique vers deux pages différentes (script)
- [x] Title et meta description uniques sur les 37 pages (script)
- [x] Chaque page fille : lien vers la page mère dans l’introduction ; chaque hub : lien vers l’accueil
- [x] Chiffres santé et ergonomie : INRS ou Cochrane cités, relevés le jour même (voir `sources.md`)
- [x] Prix datés (« relevés le 2 octobre 2026 »)
- [x] Mobile 375 px : aucun défilement horizontal (10 pages vérifiées)
- [x] `prefers-reduced-motion` : animation du plateau désactivée
- [x] Typographie française (espaces insécables) appliquée par `src/middleware.ts`
- [x] Bug corrigé : la compression HTML d’Astro 7 supprimait l’espace avant les liens en début de ligne (« notre<a>…») ; `compressHTML: false`
- [x] Build : 37 pages
