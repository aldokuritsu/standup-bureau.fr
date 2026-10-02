# Design system : Atelier clair, v2

Révision du 2 octobre 2026. La v1 est archivée dans `_archive/design-system.md`.

## Pourquoi une v2

La direction « Atelier clair » (bois clair, acier graphite, lumière de journée) reste la bonne : elle sert le persona A (télétravail, 35 à 55 ans) et le persona B (grands gabarits). La v1 l’appliquait trop timidement : une colonne de texte, des encadrés gris, aucune image, rien qui évoque l’objet. La v2 garde l’univers et lui donne une présence éditoriale.

## Ce qui change

| Élément | v1 | v2 | Lien avec la niche ou le persona |
| --- | --- | --- | --- |
| Illustration | Aucune | Bureau SVG dont le plateau monte et descend entre les repères INRS (68 à 76 cm assis, 107 à 115 cm debout) | Le geste central du produit ; les chiffres répondent à la question « à quelle hauteur ? » du persona B |
| Signature | Filets gris | « Chant de plateau » : lamelle chêne + filet acier sous chaque en-tête | Coupe d’un plateau posé sur son cadre |
| Typo texte | Source Sans 3 | Instrument Sans | Plus contemporaine, même lisibilité à 18 px pour un lectorat 35 à 55 ans |
| Typo titres | Fraunces 700 | Fraunces 500, italique sapin pour la nuance | Ton éditorial, moins « blog » |
| Accueil | Héros + texte | Héros asymétrique, bandeau « 4 chiffres », parcours en 3 décisions, index des dossiers, « ce qu’il fait / ne fait pas » | Répond dans l’ordre aux questions des personas |
| Navigation de dossier | Liens en ligne | Colonne collante sur desktop, puces défilantes sur mobile | Garde le cloisonnement du cocon tout en restant visible |
| Bloc achat | Bouton seul | Encadré acier sombre, mention d’affiliation intégrée, liseré chêne | Signalé, distinct du contenu éditorial |

## Tokens

### Couleurs (contrastes calculés, WCAG 2.2)

| Token | Valeur | Usage | Contraste |
| --- | --- | --- | --- |
| `--paper` | `#F4EFE6` | Fond de page | |
| `--paper-2` | `#EBE4D6` | Bandeaux, en-têtes de tableau | |
| `--card` | `#FFFCF6` | Encadrés | |
| `--ink` | `#1F1D1A` | Texte | 14,7:1 sur paper |
| `--ink-2` | `#57514A` | Texte secondaire | 6,8:1 sur paper, 6,2:1 sur paper-2 |
| `--sapin` | `#2C5A4C` | Liens, accents | 6,9:1 sur paper, 7,7:1 sur card |
| `--night` | `#1D3D34` | Bandeau chiffres | paper dessus : 10,4:1 |
| `--oak-light` | `#E3B98F` | Chiffres sur night | 6,6:1 |
| `--steel` | `#1F1D1A` | Pied de page, bloc achat | `#B8AFA2` dessus : 7,8:1 |
| `--cuivre` | `#9A5B3C` | Bouton d’achat uniquement | card dessus : 5,2:1 |
| `--oak` | `#C9A36B` | Décor uniquement (jamais du texte) | |
| `--danger` | `#8B3A2F` | « Mauvais choix si » | 7,5:1 sur card |

### Typographie

- Titres : **Fraunces** (OFL), axes `opsz` et `SOFT`, graisse 500, italique pour l’accent.
- Texte : **Instrument Sans** (OFL), 400 / 500 / 600, 1,125 rem, interligne 1,65.
- Chargement : Google Fonts, `display=swap`.
- Échelle : H1 2,2 à 3,6 rem (4,6 rem sur l’accueil), H2 1,55 à 2,1 rem, H3 1,3 rem.

### Mesures, formes, mouvement

- Conteneur 74 rem, colonne de lecture 42 rem, colonne de dossier 15 à 18 rem.
- Rayons : 3 px (boutons, métal usiné), 6 px, 12 px (encadrés).
- Ombre unique, très douce, sous les encadrés.
- Mouvement : montée et descente du plateau (9 s, en boucle), survols discrets. `prefers-reduced-motion` : tout est figé, le plateau reste en position debout.

## Composants

| Composant | Fichier | Rôle |
| --- | --- | --- |
| L’essentiel (verdict) | `Verdict.astro` | Critères cochés + mention de méthode |
| Bon choix si / Mauvais choix si | `ForWho.astro` | Pour qui, pour qui ce n’est pas |
| Bloc achat | `AffiliateButton.astro` | Lien `rel="sponsored"`, mention d’affiliation intégrée |
| Liste de guides | `GuideList.astro` | Sommaire numéroté des pages filles d’un hub |
| Menu de dossier | `SiloNav.astro` | Page mère et sœurs uniquement |
| Fil d’Ariane | `Breadcrumb.astro` | + JSON-LD `BreadcrumbList` dans le layout |
| Lien transverse | `SeeAlso.astro` | Uniquement pour les liens de la liste fermée |
| Sources | `Sources.astro` | Liste numérotée en fin de page |
| Étapes | classe `.formula` | Méthodes pas à pas (mesurer ses coudes, régler son poste) |
| Illustration | `DeskIllustration.astro` | Signature visuelle de l’accueil |
| Pictos | `Icon.astro` | Dessinés au trait, pas d’emoji |

## Typographie française automatique

`src/middleware.ts` ajoute l’espace insécable avant « : », l’espace fine insécable avant « ; ! ? » et les espaces insécables dans les guillemets, sur tout le HTML généré (hors balises, scripts et styles).

## Interdits toujours respectés

Pas de héros centré suivi de trois cartes, pas de violet, pas de photo de banque d’images, pas de faux badge, pas de carrousel, pas de méga-menu, pas d’emoji.
