# Architecture révisée

Base : brief BotAlly 2 oct. 2026. Modifications issues de `cadrage.md`.

## Changements

| Action | Page | Raison |
| --- | --- | --- |
| Fusion | p31 gaming → p24 gamer | Cannibalisation ; seuil synonymie Jev 67 % ; un contenu différencié couvre les deux requêtes |
| Suppression silo | Situations d’usage | Orphelin après fusion |
| Déplacement | p30 BUT → Marques et modèles | BUT = enseigne, comme IKEA |
| Déplacement | p26 cadre → Produits associés | « Cadre » = structure, pas profil métier |
| Renommage silo | Autres angles → Ergonomie | Angle « ergonomique » = problème / besoin |
| Requêtes hub | p1, p6, p17, p23, p28 | Mot-clés ciblés choisis (voir ci-dessous) |
| Étapes | p2, p4 Comparer ; p27 et p26 Choisir ; p25 Résoudre ; p30 Comparer | Arbitrages Jev |

## Requêtes des pages mères

| Page | Requête cible retenue | Justification |
| --- | --- | --- |
| p1 | bureau assis debout électrique ou manuel | Intention comparative du silo (estimation ; pas dans DataForSEO tel quel : page hub informationnelle) |
| p6 | bureau assis debout marque | Hub marques (intention informationnelle / commerciale) |
| p17 | taille bureau assis debout | Hub formats |
| p23 | bureau assis debout pour qui | Hub profils |
| p28 | bureau ergonomique | Proche de p29 ; hub oriente vers p29 et critères INRS |

Les hubs ne cannibalisent pas les filles : contenu plus large, liens vers filles dès le corps.

## Arborescence finale

```
/                                                    home
/methodologie/                                       E-E-A-T
/a-propos/
/affiliation/
/mentions-legales/
/contact/
/matieres-et-technologies/                           p1 hub
  /bureau-assis-debout-electrique/                   p2
    /bureau-assis-debout-electrique-160x80/          p3
  /bureau-assis-debout-manuel/                       p4
  /bureau-assis-debout-manivelle/                    p5
/marques-et-modeles/                                 p6 hub
  /bureau-assis-debout-ikea/                         p7
  /bureau-assis-debout-amazon/                       p8
  /bureau-assis-debout-conforama/                    p9
  /songmics-bureau-assis-debout/                     p10
  /bureau-assis-debout-flexispot/                    p11
  /bureau-assis-debout-but/                          p30
/meilleur-bureau-assis-debout/                       p12 hub
  /bureau-assis-debout-avec-rangement/               p13
  /bureau-assis-debout-bois/                         p14
  /bureau-assis-debout-pas-cher/                     p15
  /bureau-assis-debout-design/                       p16
/tailles-et-formats/                                 p17 hub
  /bureau-assis-debout-angle/                        p18
  /bureau-assis-debout-160x80/                       p19
  /bureau-assis-debout-180x80/                       p20
  /bureau-assis-debout-120x60/                       p21
  /bureau-assis-debout-140x70/                       p22
/profils-d-utilisateurs/                             p23 hub
  /bureau-assis-debout-gamer/                        p24 (+ gaming)
  /bureau-assis-debout-professionnel/                p25
/produits-associes/                                  hub nouveau (remplace orphelin pied seul)
  /pied-bureau-assis-debout/                         p27
  /cadre-bureau-assis-debout/                        p26
/ergonomie/                                          p28 hub (ex autres-angles)
  /bureau-ergonomique-assis-debout/                  p29
/bureaux/                                            hub comparatif de modèles
  /comparer/                                         outil 2 modèles
  /comparer/{a}-vs-{b}/                              pages de duos (10 paires)
  /songmics-lsd026-160x70/
  /ergear-160x80/
  /flexispot-e6-cadre/
  /maidesite-t2-pro-plus/
  /songmics-cadre-double-moteur/
```

Silo « Modèles à comparer » (ex fiches) : pages pour aider au choix par critères. Tag affiliation `standup-bureau-21`. Images CDN Amazon (`m.media-amazon.com`), liées à l’offre, jamais réhébergées. Wording discret : pas de « fiches produits Amazon ».

## Maillage

Inchangé par rapport au brief **sauf** :

- Suppression de tous les liens vers p31 ; home lie vers p24 (gamer) via hub profils uniquement (home → p23).
- p30 : parent p6 ; sœurs p7, p8.
- p26 : parent hub produits-associés ; sœur p27.
- p27 : parent hub produits-associés (plus home en parent direct) ; home lie le hub.
- Liens transverses autorisés (liste fermée, inchangée) :

| De | Vers |
| --- | --- |
| p4 manuel | p29 ergonomique |
| p7 ikea | p29 |
| p8 amazon | p29 |
| p11 flexispot | p29 |
| p29 | p11, p7 |

## Navigation

- Header : logo → accueil uniquement.
- Fil d’Ariane + menu de silo (mère + sœurs).
- Footer : méthodologie, à propos, affiliation, mentions, contact. Pas de liste d’articles.

## Alerte fuite de jus

Aucun lien transverse hors liste ci-dessus. Vérifié dans le code des layouts Astro.

## Ajustements de maillage (refonte du 2 octobre 2026)

- Accueil : ne lie plus directement p29 ; il passe par le hub Ergonomie (home → hubs uniquement).
- Hub Guides d’achat → `/methodologie/` (page institutionnelle, hors cocon).
- BUT → `/contact/` (signalement de gamme, page institutionnelle).
- Liens transverses : inchangés, rendus par le composant `SeeAlso` en fin de contenu.
