# Brief de création de site : Bureau assis debout (France - FR)

> Brief généré par BotAlly (NicheLab) le 2 oct. 2026.
> Données : analyse DataForSEO du 2 oct. 2026.
> Architecture arbitrée par Jev, le modèle de jugement de TypeSafe (jev-1.13.0), qui a tranché 0 questions typées.
> Ce document est une suite d’instructions pour un agent IA. Lis-le en entier avant de commencer.

## 0. Ta mission

Tu es l’agent chargé de concevoir, rédiger et coder un site d’affiliation unique sur la niche « bureau assis debout », pour le marché France - FR.
Ce site existe pour une seule raison : répondre mieux que quiconque aux besoins réels de personas identifiés à partir de leurs recherches Google. Chaque page, chaque lien, chaque couleur et chaque phrase doit pouvoir se justifier par un persona, une intention de recherche ou une source.

Règles absolues :

1. Tout part des personas et de leurs intentions de recherche (section 3). Pas de page sans persona ni intention.
2. Tu n’inventes rien. Chiffres, caractéristiques, avis, tests, expériences, auteurs : tout fait vérifiable est sourcé et croisé entre au moins deux sources indépendantes. Sans source, tu n’affirmes pas.
3. Le maillage interne suit le cocon sémantique de la section 4 : silos cloisonnés, liens contextuels, aucun méga-menu.
4. La rédaction suit les consignes officielles de Google et les règles de style de la section 6. Aucun tiret cadratin (U+2014) ni demi-cadratin (U+2013), nulle part.
5. Le design system est le fruit d’une recherche originale (section 5), jamais un gabarit par défaut.

**Mode autonome.** Réponds toi-même à tout le questionnaire, consigne tes réponses, révise le plan, puis enchaîne sur la production sans attendre de validation. Tes réponses écrites restent la référence de chaque décision.

## 1. Phase de cadrage : questions et réponses

Crée un fichier `cadrage.md` et réponds par écrit à chaque question ci-dessous. Cette phase vient avant toute production.

- **Réponse du porteur de projet** : c’est une contrainte. Respecte-la. Si elle contredit les données de ce brief, signale la contradiction sans la trancher seul.
- **Sans réponse** : réponds toi-même en suivant la consigne, à partir des données de ce brief et de sources vérifiables que tu cites. Formule ensuite l’objection la plus forte à ta propre réponse, et dis si elle tient.

### 1.1 Questions au porteur de projet

#### Projet

**Q1. Quel est l’objectif du site et comment doit-il gagner de l’argent ?**

Réponse du porteur de projet :

> Affiliation Amazon. Proposer des comparatifs uniques, avec une vue centrée sur réponse aux besoins et questions des utilisateurs

**Q2. Nom, domaine ou positionnement de marque envisagé ?**

Réponse du porteur de projet :

> standup-bureau.com

**Q3. Périmètre de la première version (nombre de pages, délai) ?**

Sans réponse : à toi de répondre. Consigne : Pars du plan d’architecture. Classe les pages par priorité (volume, facilité, rôle dans le cocon) et propose une V1 qui forme des cocons complets : une page mère n’est jamais publiée sans au moins deux pages filles.

#### Expertise (E-E-A-T)

**Q4. Qui signe les contenus et quelle expérience réelle a-t-il du sujet ?**

Sans réponse : à toi de répondre. Consigne : N’invente aucun auteur ni aucune expérience. Prévois une page « Méthodologie » honnête qui explique comment les contenus sont produits et sourcés, et note ce manque d’expérience directe comme un risque à réduire.

**Q5. Des produits seront-ils réellement testés, mesurés ou photographiés ?**

Réponse du porteur de projet :

> non, par contre les produits seront évalués en faisant une synthèse des retours utilisateurs (sans citer mot pour mot)

**Q6. Quelles sources fiables as-tu à disposition ?**

Sans réponse : à toi de répondre. Consigne : Dresse la liste des sources à consulter avant de rédiger (organismes officiels, normes, études publiées, fiches fabricants, associations de consommateurs). Toute donnée chiffrée du site doit venir d’au moins deux sources indépendantes, ou être présentée comme une estimation sourcée.

#### Visiteurs

**Q7. Connais-tu des profils de visiteurs précis ?**

Réponse du porteur de projet :

> Travailleurs indépendants ou travaillant à la maison ou dans un bureau, entre 35 et 55 ans, grands, problèmes de dos

#### Différenciation

**Q8. Qu’est-ce que ce site fera mieux que les sites du top 10 actuel ?**

Sans réponse : à toi de répondre. Consigne : Ouvre chaque résultat du top 10 de la SERP fournie. Pour chaque persona, note la question réelle qui reste sans bonne réponse et la page concurrente qui la traite mal. Ta différence doit répondre à ces manques, pas à une intuition.

**Q9. Quel ton éditorial ?**

Réponse du porteur de projet :

> Vouvoiement, simple d'accès mais professionnel

**Q10. Des sites, styles ou pratiques à ne surtout pas imiter ?**

Sans réponse : à toi de répondre. Consigne : Liste les conventions visuelles et éditoriales répétées par le top 10 et par les sites générés par IA (héros centré, trois cartes, dégradé violet, listes « Top 10 » sans critères…). Ton site n’en reprend aucune sans raison écrite.

#### Design

**Q11. Références visuelles, couleurs imposées ou interdites, contraintes de marque ?**

Sans réponse : à toi de répondre. Consigne : Mène la recherche de design system décrite plus bas : trois directions issues des personas et de l’univers réel de la niche, deux écartées avec leurs raisons, une retenue et déclinée en tokens.

#### Technique

**Q12. Contraintes techniques (CMS, framework, hébergement, langues) ?**

Réponse du porteur de projet :

> Site réalisé avec Astro. Hébergement Cloudflare. Langue française

### 1.2 Arbitrages incertains à trancher

Jev, le modèle de jugement de TypeSafe, a hésité sur les points suivants (probabilités entre parenthèses). Tranche chacun, note ta décision et sa raison dans `cadrage.md`, puis modifie le plan en conséquence.

1. Requête « bureau assis debout electrique » (page `p2` « Bureau assis debout electrique ») : à quelle étape du parcours répond-elle ? Jev hésite entre Comparer (43 %), Résoudre un problème (35 %). Regarde les formats qui se classent sur cette requête (guides, listes, fiches produits) et adapte la page à l’étape retenue.
2. Lien transverse « ikea → pied » : Jev le juge plausible à 69 %, sous le seuil retenu (75 %). Crée-le seulement si une phrase de la première page amène naturellement le lecteur vers la seconde ; sinon, garde les silos étanches.
3. Quel type de sous-sujet est « pied » ? Jev hésite entre Produits associés (63 %), Matières et technologies (29 %), Autres angles (8 %). Si ta réponse diffère du silo proposé, déplace ses pages dans le bon silo et refais leurs liens.
4. Requête « pied bureau assis debout » (page `p27` « Pied bureau assis debout ») : à quelle étape du parcours répond-elle ? Jev hésite entre Résoudre un problème (37 %), Choisir et acheter (34 %). Regarde les formats qui se classent sur cette requête (guides, listes, fiches produits) et adapte la page à l’étape retenue.
5. Lien transverse « électrique → pied » : Jev le juge plausible à 73 %, sous le seuil retenu (75 %). Crée-le seulement si une phrase de la première page amène naturellement le lecteur vers la seconde ; sinon, garde les silos étanches.
6. Requête « bureau assis debout manuel » (page `p4` « Bureau assis debout manuel ») : à quelle étape du parcours répond-elle ? Jev hésite entre Comparer (51 %), Résoudre un problème (34 %). Regarde les formats qui se classent sur cette requête (guides, listes, fiches produits) et adapte la page à l’étape retenue.
7. Lien transverse « ikea → manuel » : Jev le juge plausible à 69 %, sous le seuil retenu (75 %). Crée-le seulement si une phrase de la première page amène naturellement le lecteur vers la seconde ; sinon, garde les silos étanches.
8. Lien transverse « pied → manuel » : Jev le juge plausible à 58 %, sous le seuil retenu (75 %). Crée-le seulement si une phrase de la première page amène naturellement le lecteur vers la seconde ; sinon, garde les silos étanches.
9. Quel type de sous-sujet est « ergonomique » ? Jev hésite entre Autres angles (55 %), Problèmes et besoins (32 %), Matières et technologies (11 %). Si ta réponse diffère du silo proposé, déplace ses pages dans le bon silo et refais leurs liens.
10. Requête « bureau assis debout but » (page `p30` « Bureau assis debout but ») : à quelle étape du parcours répond-elle ? Jev hésite entre Comparer (46 %), Résoudre un problème (38 %). Regarde les formats qui se classent sur cette requête (guides, listes, fiches produits) et adapte la page à l’étape retenue.
11. Requête « bureau assis debout professionnel » (page `p25` « Bureau assis debout professionnel ») : à quelle étape du parcours répond-elle ? Jev hésite entre Résoudre un problème (54 %), Comparer (23 %). Regarde les formats qui se classent sur cette requête (guides, listes, fiches produits) et adapte la page à l’étape retenue.
12. « gaming / gamer » : même sous-sujet ou deux sous-sujets distincts ? Jev les juge synonymes à 67 %, sous le seuil de fusion (70 %). Si un même contenu répond aux deux, fusionne leurs pages ; sinon, garde-les séparées et différencie nettement leurs angles.
13. Quel type de sous-sujet est « professionnel » ? Jev hésite entre Profils d’utilisateurs (54 %), Situations d’usage (45 %), Autres angles (1 %). Si ta réponse diffère du silo proposé, déplace ses pages dans le bon silo et refais leurs liens.
14. Requête « cadre bureau assis debout » (page `p26` « Cadre bureau assis debout ») : à quelle étape du parcours répond-elle ? Jev hésite entre Résoudre un problème (39 %), Choisir et acheter (28 %). Regarde les formats qui se classent sur cette requête (guides, listes, fiches produits) et adapte la page à l’étape retenue.

### 1.3 Contre-interrogatoire (toujours à ta charge)

1. Quelle serait la réponse par défaut d’une IA générique à ce brief (structure, design, ton, pages) ? Décris-la, puis montre point par point en quoi ton site s’en écarte.
2. Pour chaque persona, quelle question réelle reste sans bonne réponse dans le top 10 actuel ? Cite la page concurrente et ce qui lui manque.
3. Quelles pages du plan seraient inutiles pour un humain (contenu mince, intention en doublon, cannibalisation) ? Fusionne-les ou supprime-les en le justifiant.
4. Quels liens du plan de maillage un vrai lecteur ne cliquerait jamais ? Retire-les. Quel lien manque pour qu’il passe naturellement à l’étape suivante de son parcours ?
5. Quelles affirmations prévues ne peux-tu pas appuyer sur deux sources indépendantes ? Retire-les ou présente-les comme des hypothèses.
6. Quel élément du design system pourrait appartenir à n’importe quel autre site ? Remplace-le par un choix motivé par la niche ou par un persona.
7. Si un évaluateur appliquait les consignes de Google sur le contenu utile, quelle page serait la plus faible ? Corrige-la avant de continuer.

## 2. Données de la niche

Source : DataForSEO, 2 oct. 2026. Ce sont des estimations mensuelles. Elles servent à prioriser et à comprendre les intentions ; ce ne sont pas des faits à citer dans le contenu du site.

### 2.1 Indicateurs

| Indicateur | Valeur |
| --- | --- |
| Score de la niche | 82/100 (Opportunité forte) |
| Volume de recherche cumulé | 192 920 / mois |
| Mots-clés analysés | 128 |
| CPC moyen | 1,27 € |
| Difficulté moyenne (KD) | 2/100 |
| Part de mots-clés à intention d’achat | 75 % |
| Quick wins (mots-clés faciles et utiles) | 111 |

### 2.2 Signaux

- **Niche stable** : Stabilité de 73/100 : les recherches varient peu d’un mois à l’autre, tes contenus rapportent toute l’année.
- **Forte intention d’achat** : 75 % des mots-clés ont une intention commerciale ou transactionnelle.
- **Beaucoup de mots-clés faciles** : 111 quick wins : mots-clés faciles (KD ≤ 35) avec une intention d’achat ou au moins 200 recherches/mois, à attaquer en priorité.

### 2.3 Top 10 Google pour « bureau assis debout »

Lis chacune de ces pages avant de rédiger. Ton contenu doit être plus utile que chacune d’elles, pas plus long.

| Rang | Domaine | Type de site | Titre | URL |
| --- | --- | --- | --- | --- |
| 1 | desktronic.fr | Autre | Bureaux assis debout électriques \| Jusqu'à 15 ans de ... | https://desktronic.fr/collections/bureaux-reglables-en-hauteur?srsltid=AU7gw4UZipKMw72MrQAZvNVB0gjdF8v8EGrW39tDgbe-5Zvc_ALhY4QT |
| 2 | www.ikea.com | Marketplace | Bureaux assis-debout | https://www.ikea.com/fr/fr/cat/bureaux-debout-55008/ |
| 3 | www.flexispot.fr | Autre | Bureau Assis Debout \| Expert de Mobilier Ergonomique | https://www.flexispot.fr/ |
| 4 | kqueo.fr | Autre | KQUEO: Bureaux réglables, chaises et mobilier ergonomique | https://kqueo.fr/?srsltid=AU7gw4XXOYWbPmB0BDmxXvcoeTGrKtjEJFXATtvADY69C94ipODXUJ0E |
| 5 | desktronic.fr | Autre | Bureaux assis debout électriques \| Jusqu’à 15 ans de garantie | https://desktronic.fr/collections/bureaux-reglables-en-hauteur |
| 6 | kqueo.fr | Autre | Bureaux réglables, chaises et mobilier ergonomique - KQUEO | https://kqueo.fr/ |
| 7 | www.conforama.fr | Marketplace | Bureau assis debout pas cher | https://www.conforama.fr/s/bureau-assis-debout |

### 2.4 Quick wins

Mots-clés faciles à positionner : publie leurs pages en premier.

- « assis debout bureau » : 27 100 recherches/mois, KD 3
- « assis-debout bureau » : 27 100 recherches/mois, KD 3
- « bureau assis debout » : 27 100 recherches/mois, KD 3
- « bureau assis-debout » : 27 100 recherches/mois, KD 3
- « bureau debout assis » : 27 100 recherches/mois, KD 3
- « bureau assis debout electrique » : 3 600 recherches/mois, KD 7
- « bureau assis-debout electrique » : 3 600 recherches/mois, KD 7
- « bureau assis/debout électrique » : 3 600 recherches/mois, KD 7
- « bureau assis debout ikea » : 2 900 recherches/mois, KD 0
- « bureau assis/debout ikea » : 2 900 recherches/mois, KD 0
- « bureau ikea assis debout » : 2 900 recherches/mois, KD 0
- « bureau ikea assis/debout » : 2 900 recherches/mois, KD 0
- « ikea bureau assis debout » : 2 900 recherches/mois, KD 0
- « ikea bureau assis/debout » : 2 900 recherches/mois, KD 0
- « bureau électrique assis debout » : 1 000 recherches/mois, KD 9

## 3. Personas et intentions de recherche

Les personas ci-dessous sont des points de départ tirés des données, pas des fiches finies. Pour chacun, rédige dans `personas.md` une fiche fondée sur ses requêtes et sur des sources vérifiables : situation, déclencheur de la recherche, questions qu’il se pose, freins, critères de décision, vocabulaire, et ce qui le ferait quitter le site. Marque « hypothèse » tout ce qui n’est pas sourcé.

### Situation « gaming »

- Volume de recherche cumulé : 320 / mois.
- Étapes du parcours couvertes par ses requêtes : Résoudre un problème (4).
- Requêtes représentatives : « bureau assis debout gaming », « bureau assis-debout gaming », « bureau gaming assis debout », « bureau gaming assis-debout ».
- Pages qui le servent : `p31` « Bureau assis debout gaming ».

### Profil « gamer »

- Volume de recherche cumulé : 320 / mois.
- Étapes du parcours couvertes par ses requêtes : Résoudre un problème (3).
- Requêtes représentatives : « bureau assis debout gamer », « bureau assis-debout gamer », « bureau assis/debout gamer ».
- Pages qui le servent : `p24` « Bureau assis debout gamer ».

### Acheteur sans profil particulier

- Volume de recherche cumulé : 41 020 / mois.
- Étapes du parcours couvertes par ses requêtes : Résoudre un problème (22), Comparer (23), Choisir et acheter (28).
- Requêtes représentatives : « assis debout bureau », « assis-debout bureau », « bureau assis debout », « bureau assis-debout », « bureau debout assis », « bureau assis debout electrique », « bureau assis-debout electrique », « bureau assis/debout électrique ».
- Pages qui le servent : `home` « Bureau assis debout », `p2` « Bureau assis debout electrique », `p3` « Bureau assis debout électrique 160x80 », `p4` « Bureau assis debout manuel », `p5` « Bureau assis debout manivelle », `p7` « Bureau assis debout ikea », `p8` « Bureau assis debout amazon », `p9` « Bureau assis debout conforama », `p10` « Songmics bureau assis debout », `p11` « Bureau assis debout flexispot », `p12` « Meilleur bureau assis debout », `p13` « Bureau assis debout avec rangement », `p14` « Bureau assis debout bois », `p15` « Bureau assis debout pas cher », `p16` « Bureau assis debout design », `p18` « Bureau assis debout angle », `p19` « Bureau assis debout 160x80 », `p20` « Bureau assis debout 180x80 », `p21` « Bureau assis debout 120x60 », `p22` « Bureau assis debout 140x70 », `p25` « Bureau assis debout professionnel », `p26` « Cadre bureau assis debout », `p27` « Pied bureau assis debout », `p29` « Bureau ergonomique assis debout », `p30` « Bureau assis debout but ».

### Matrice persona × étape du parcours

Chaque case vide est une question : manque-t-il une page, ou cette étape n’existe-t-elle pas pour ce persona ?

| Persona | Découvrir | Résoudre un problème | Comparer | Choisir et acheter | Utiliser et entretenir |
| --- | --- | --- | --- | --- | --- |
| Situation « gaming » |   | p31 |   |   |   |
| Profil « gamer » |   | p24 |   |   |   |
| Acheteur sans profil particulier |   | home, p13, p25, p26, p27, p29 | p2, p4, p5, p14, p16, p18, p19, p20, p21, p22, p30 | p3, p7, p8, p9, p10, p11, p12, p15 |   |

Étapes du parcours :

- **Découvrir** : le visiteur veut comprendre le sujet ; aucun projet d’achat visible.
- **Résoudre un problème** : le visiteur a un problème ou une situation précise et cherche quel type de solution lui convient.
- **Comparer** : le visiteur met en balance des types, des technologies, des tailles ou des marques, ou se demande comment choisir.
- **Choisir et acheter** : le visiteur est prêt à choisir un produit : meilleurs modèles, avis, prix, promotions, où acheter.
- **Utiliser et entretenir** : le visiteur possède déjà le produit et veut l’utiliser, l’entretenir, le réparer ou s’en débarrasser.

## 4. Architecture en cocon sémantique

### 4.1 Principes

Le site applique le cocon sémantique tel que l’a formalisé Laurent Bourrelly (https://www.laurentbourrelly.com/). Relis ses ressources si un point te semble flou.

- Le site est organisé selon les intentions de recherche des personas, pas selon un catalogue produit.
- Chaque silo est un cocon : une page mère, des pages filles qui la soutiennent, parfois des petites-filles. Une page n’appartient qu’à un silo.
- Chaque page fille fait un lien vers sa mère, haut dans le contenu. La mère fait un lien vers chacune de ses filles.
- Les liens passent d’une intention à la suivante par glissement sémantique : le lecteur doit sentir que le lien répond à sa prochaine question.
- Les silos sont cloisonnés. Un lien entre deux silos n’existe que si la sémantique le justifie (liste fermée en 4.4).
- La page d’accueil est la seule page qui ouvre tous les silos, par leurs pages mères.

### 4.2 Arborescence proposée (32 pages, 8 silos)

C’est une proposition à challenger, pas un ordre. Tu peux fusionner, scinder, ajouter ou supprimer des pages : écris chaque changement et sa raison dans `architecture.md`.

Accueil : `home` **Bureau assis debout** · `/` · requête cible « assis debout bureau » · 27 100 recherches/mois · KD 3 · étape Résoudre un problème · persona Acheteur sans profil particulier · quick win
  Requêtes secondaires à couvrir : « assis-debout bureau », « bureau assis debout », « bureau assis-debout », « bureau debout assis ».

#### Silo « Matières et technologies » (4 660 recherches/mois)

Angles couverts : « électrique », « manuel ».

- `p1` **Bureau assis debout : matières et technologies** · `/matieres-et-technologies/` · page mère sans donnée : choisis sa requête cible après avoir vérifié son volume
  - `p2` **Bureau assis debout electrique** · `/matieres-et-technologies/bureau-assis-debout-electrique/` · requête cible « bureau assis debout electrique » · 3 600 recherches/mois · KD 7 · étape Comparer · persona Acheteur sans profil particulier · quick win
    Requêtes secondaires à couvrir : « bureau assis-debout electrique », « bureau assis/debout électrique », « bureau électrique assis debout », « bureau électrique assis-debout ».
    - `p3` **Bureau assis debout électrique 160x80** · `/matieres-et-technologies/bureau-assis-debout-electrique/bureau-assis-debout-electrique-160x80/` · requête cible « bureau assis debout électrique 160x80 » · 170 recherches/mois · KD 0 · étape Choisir et acheter · persona Acheteur sans profil particulier
      Requêtes secondaires à couvrir : « bureau assis-debout électrique 160x80 », « bureau assis/debout électrique 160x80 ».
  - `p4` **Bureau assis debout manuel** · `/matieres-et-technologies/bureau-assis-debout-manuel/` · requête cible « bureau assis debout manuel » · 720 recherches/mois · KD 0 · étape Comparer · persona Acheteur sans profil particulier · quick win
    Requêtes secondaires à couvrir : « bureau assis-debout manuel ».
  - `p5` **Bureau assis debout manivelle** · `/matieres-et-technologies/bureau-assis-debout-manivelle/` · requête cible « bureau assis debout manivelle » · 170 recherches/mois · KD 5 · étape Comparer · persona Acheteur sans profil particulier
    Requêtes secondaires à couvrir : « bureau assis-debout manivelle », « bureau assis/debout manivelle ».

#### Silo « Marques et modèles » (4 220 recherches/mois)

Angles couverts : « ikea », « amazon », « conforama », « songmics », « flexispot ».

- `p6` **Bureau assis debout : marques et modèles** · `/marques-et-modeles/` · page mère sans donnée : choisis sa requête cible après avoir vérifié son volume
  - `p7` **Bureau assis debout ikea** · `/marques-et-modeles/bureau-assis-debout-ikea/` · requête cible « bureau assis debout ikea » · 2 900 recherches/mois · KD 0 · étape Choisir et acheter · persona Acheteur sans profil particulier · quick win
    Requêtes secondaires à couvrir : « bureau assis/debout ikea », « bureau ikea assis debout », « bureau ikea assis/debout », « ikea bureau assis debout », « ikea bureau assis/debout ».
  - `p8` **Bureau assis debout amazon** · `/marques-et-modeles/bureau-assis-debout-amazon/` · requête cible « bureau assis debout amazon » · 590 recherches/mois · KD 0 · étape Choisir et acheter · persona Acheteur sans profil particulier · quick win
    Requêtes secondaires à couvrir : « bureau assis-debout amazon », « amazon bureau assis debout », « amazon bureau assis-debout ».
  - `p9` **Bureau assis debout conforama** · `/marques-et-modeles/bureau-assis-debout-conforama/` · requête cible « bureau assis debout conforama » · 260 recherches/mois · KD 0 · étape Choisir et acheter · persona Acheteur sans profil particulier
    Requêtes secondaires à couvrir : « bureau assis-debout conforama », « conforama bureau assis debout », « conforama bureau assis-debout ».
  - `p10` **Songmics bureau assis debout** · `/marques-et-modeles/songmics-bureau-assis-debout/` · requête cible « songmics bureau assis debout » · 260 recherches/mois · KD 0 · étape Choisir et acheter · persona Acheteur sans profil particulier
    Requêtes secondaires à couvrir : « songmics bureau assis-debout ».
  - `p11` **Bureau assis debout flexispot** · `/marques-et-modeles/bureau-assis-debout-flexispot/` · requête cible « bureau assis debout flexispot » · 210 recherches/mois · KD 0 · étape Choisir et acheter · persona Acheteur sans profil particulier
    Requêtes secondaires à couvrir : « bureau assis-debout flexispot ».

#### Silo « Guides d’achat » (1 570 recherches/mois)

- `p12` **Meilleur bureau assis debout** · `/meilleur-bureau-assis-debout/` · requête cible « meilleur bureau assis debout » · 720 recherches/mois · KD 0 · étape Choisir et acheter · persona Acheteur sans profil particulier · quick win
  Requêtes secondaires à couvrir : « meilleur bureau assis-debout », « meilleurs bureau assis debout ».
  - `p13` **Bureau assis debout avec rangement** · `/meilleur-bureau-assis-debout/bureau-assis-debout-avec-rangement/` · requête cible « bureau assis debout avec rangement » · 260 recherches/mois · KD 0 · étape Résoudre un problème · persona Acheteur sans profil particulier
    Requêtes secondaires à couvrir : « bureau assis-debout avec rangement ».
  - `p14` **Bureau assis debout bois** · `/meilleur-bureau-assis-debout/bureau-assis-debout-bois/` · requête cible « bureau assis debout bois » · 210 recherches/mois · KD 0 · étape Comparer · persona Acheteur sans profil particulier
    Requêtes secondaires à couvrir : « bureau assis-debout bois ».
  - `p15` **Bureau assis debout pas cher** · `/meilleur-bureau-assis-debout/bureau-assis-debout-pas-cher/` · requête cible « bureau assis debout pas cher » · 210 recherches/mois · KD 0 · étape Choisir et acheter · persona Acheteur sans profil particulier
    Requêtes secondaires à couvrir : « bureau assis/debout pas cher ».
  - `p16` **Bureau assis debout design** · `/meilleur-bureau-assis-debout/bureau-assis-debout-design/` · requête cible « bureau assis debout design » · 170 recherches/mois · KD 4 · étape Comparer · persona Acheteur sans profil particulier
    Requêtes secondaires à couvrir : « bureau assis-debout design ».

#### Silo « Tailles et formats » (1 260 recherches/mois)

Angles couverts : « 160x80 », « angle ».

- `p17` **Bureau assis debout : tailles et formats** · `/tailles-et-formats/` · page mère sans donnée : choisis sa requête cible après avoir vérifié son volume
  - `p18` **Bureau assis debout angle** · `/tailles-et-formats/bureau-assis-debout-angle/` · requête cible « bureau assis debout angle » · 390 recherches/mois · KD 0 · étape Comparer · persona Acheteur sans profil particulier · quick win
    Requêtes secondaires à couvrir : « bureau assis-debout angle », « bureau d angle assis debout », « bureau d’angle assis debout ».
  - `p19` **Bureau assis debout 160x80** · `/tailles-et-formats/bureau-assis-debout-160x80/` · requête cible « bureau assis debout 160x80 » · 320 recherches/mois · KD 0 · étape Comparer · persona Acheteur sans profil particulier
  - `p20` **Bureau assis debout 180x80** · `/tailles-et-formats/bureau-assis-debout-180x80/` · requête cible « bureau assis debout 180x80 » · 210 recherches/mois · KD 0 · étape Comparer · persona Acheteur sans profil particulier
    Requêtes secondaires à couvrir : « bureau assis-debout 180x80 ».
  - `p21` **Bureau assis debout 120x60** · `/tailles-et-formats/bureau-assis-debout-120x60/` · requête cible « bureau assis debout 120x60 » · 170 recherches/mois · KD 0 · étape Comparer · persona Acheteur sans profil particulier
    Requêtes secondaires à couvrir : « bureau assis-debout 120x60 ».
  - `p22` **Bureau assis debout 140x70** · `/tailles-et-formats/bureau-assis-debout-140x70/` · requête cible « bureau assis debout 140x70 » · 170 recherches/mois · KD 0 · étape Comparer · persona Acheteur sans profil particulier

#### Silo « Profils d’utilisateurs » (850 recherches/mois)

Angles couverts : « gamer », « professionnel ».

- `p23` **Bureau assis debout : profils d’utilisateurs** · `/profils-d-utilisateurs/` · page mère sans donnée : choisis sa requête cible après avoir vérifié son volume
  - `p24` **Bureau assis debout gamer** · `/profils-d-utilisateurs/bureau-assis-debout-gamer/` · requête cible « bureau assis debout gamer » · 320 recherches/mois · KD 0 · étape Résoudre un problème · persona Profil « gamer »
    Requêtes secondaires à couvrir : « bureau assis-debout gamer », « bureau assis/debout gamer ».
  - `p25` **Bureau assis debout professionnel** · `/profils-d-utilisateurs/bureau-assis-debout-professionnel/` · requête cible « bureau assis debout professionnel » · 320 recherches/mois · KD 0 · étape Résoudre un problème · persona Acheteur sans profil particulier
    Requêtes secondaires à couvrir : « bureau assis-debout professionnel ».
  - `p26` **Cadre bureau assis debout** · `/profils-d-utilisateurs/cadre-bureau-assis-debout/` · requête cible « cadre bureau assis debout » · 210 recherches/mois · KD 0 · étape Résoudre un problème · persona Acheteur sans profil particulier
    Requêtes secondaires à couvrir : « cadre bureau assis-debout ».

#### Silo « Produits associés » (880 recherches/mois)

Angles couverts : « pied ».

- `p27` **Pied bureau assis debout** · `/pied-bureau-assis-debout/` · requête cible « pied bureau assis debout » · 880 recherches/mois · KD 0 · étape Résoudre un problème · persona Acheteur sans profil particulier · quick win
  Requêtes secondaires à couvrir : « pied bureau assis-debout », « pieds bureau assis debout », « pied de bureau assis debout », « pied de bureau assis-debout », « pieds de bureau assis debout ».

#### Silo « Autres angles » (800 recherches/mois)

Angles couverts : « ergonomique », « but ».

- `p28` **Bureau assis debout : autres angles** · `/autres-angles/` · page mère sans donnée : choisis sa requête cible après avoir vérifié son volume
  - `p29` **Bureau ergonomique assis debout** · `/autres-angles/bureau-ergonomique-assis-debout/` · requête cible « bureau ergonomique assis debout » · 480 recherches/mois · KD 17 · étape Résoudre un problème · persona Acheteur sans profil particulier · quick win
    Requêtes secondaires à couvrir : « bureau ergonomique assis-debout ».
  - `p30` **Bureau assis debout but** · `/autres-angles/bureau-assis-debout-but/` · requête cible « bureau assis debout but » · 320 recherches/mois · KD 0 · étape Comparer · persona Acheteur sans profil particulier
    Requêtes secondaires à couvrir : « bureau assis-debout but », « but bureau assis debout », « but bureau assis-debout ».

#### Silo « Situations d’usage » (320 recherches/mois)

Angles couverts : « gaming ».

- `p31` **Bureau assis debout gaming** · `/bureau-assis-debout-gaming/` · requête cible « bureau assis debout gaming » · 320 recherches/mois · KD 0 · étape Résoudre un problème · persona Situation « gaming »
  Requêtes secondaires à couvrir : « bureau assis-debout gaming », « bureau gaming assis debout », « bureau gaming assis-debout ».

### 4.3 Plan de maillage, page par page

Les liens de chaque page sont listés dans l’ordre où ils apparaissent dans le contenu : les liens forts en haut, les liens faibles en bas. Chaque lien est contextuel, placé dans une phrase qui donne envie de le suivre.

**`home` Bureau assis debout**

1. `p1` « Bureau assis debout : matières et technologies » : page fille, lien fort, dans le corps du texte.
2. `p6` « Bureau assis debout : marques et modèles » : page fille, lien fort, dans le corps du texte.
3. `p12` « Meilleur bureau assis debout » : page fille, lien fort, dans le corps du texte.
4. `p17` « Bureau assis debout : tailles et formats » : page fille, lien moyen, dans le corps du texte.
5. `p23` « Bureau assis debout : profils d’utilisateurs » : page fille, lien moyen, dans le corps du texte.
6. `p27` « Pied bureau assis debout » : page fille, lien moyen, dans le corps du texte.
7. `p28` « Bureau assis debout : autres angles » : page fille, lien moyen, dans le corps du texte.
8. `p31` « Bureau assis debout gaming » : page fille, lien moyen, dans le corps du texte.

**`p1` Bureau assis debout : matières et technologies**

1. `home` « Bureau assis debout » : page mère, lien fort, dans l’introduction.
2. `p2` « Bureau assis debout electrique » : page fille, lien moyen, dans le corps du texte.
3. `p4` « Bureau assis debout manuel » : page fille, lien moyen, dans le corps du texte.
4. `p5` « Bureau assis debout manivelle » : page fille, lien moyen, dans le corps du texte.

**`p2` Bureau assis debout electrique**

1. `p1` « Bureau assis debout : matières et technologies » : page mère, lien fort, dans l’introduction.
2. `p3` « Bureau assis debout électrique 160x80 » : étape suivante du parcours, lien fort, dans le corps du texte.
3. `p4` « Bureau assis debout manuel » : page sœur, lien moyen, dans le corps du texte.
4. `p5` « Bureau assis debout manivelle » : page sœur, lien moyen, dans le corps du texte.

**`p3` Bureau assis debout électrique 160x80**

1. `p2` « Bureau assis debout electrique » : page mère, lien fort, dans l’introduction.

**`p4` Bureau assis debout manuel**

1. `p1` « Bureau assis debout : matières et technologies » : page mère, lien fort, dans l’introduction.
2. `p2` « Bureau assis debout electrique » : page sœur, lien moyen, dans le corps du texte.
3. `p5` « Bureau assis debout manivelle » : page sœur, lien moyen, dans le corps du texte.
4. `p29` « Bureau ergonomique assis debout » : lien transverse, lien faible, en fin de contenu, validé par Jev à 75 %.

**`p5` Bureau assis debout manivelle**

1. `p1` « Bureau assis debout : matières et technologies » : page mère, lien fort, dans l’introduction.
2. `p2` « Bureau assis debout electrique » : page sœur, lien moyen, dans le corps du texte.
3. `p4` « Bureau assis debout manuel » : page sœur, lien moyen, dans le corps du texte.

**`p6` Bureau assis debout : marques et modèles**

1. `home` « Bureau assis debout » : page mère, lien fort, dans l’introduction.
2. `p7` « Bureau assis debout ikea » : page fille, lien moyen, dans le corps du texte.
3. `p8` « Bureau assis debout amazon » : page fille, lien moyen, dans le corps du texte.
4. `p9` « Bureau assis debout conforama » : page fille, lien moyen, dans le corps du texte.
5. `p10` « Songmics bureau assis debout » : page fille, lien moyen, dans le corps du texte.
6. `p11` « Bureau assis debout flexispot » : page fille, lien moyen, dans le corps du texte.

**`p7` Bureau assis debout ikea**

1. `p6` « Bureau assis debout : marques et modèles » : page mère, lien fort, dans l’introduction.
2. `p8` « Bureau assis debout amazon » : page sœur, lien moyen, dans le corps du texte.
3. `p9` « Bureau assis debout conforama » : page sœur, lien moyen, dans le corps du texte.
4. `p29` « Bureau ergonomique assis debout » : lien transverse, lien faible, en fin de contenu, validé par Jev à 76 %.

**`p8` Bureau assis debout amazon**

1. `p6` « Bureau assis debout : marques et modèles » : page mère, lien fort, dans l’introduction.
2. `p7` « Bureau assis debout ikea » : page sœur, lien moyen, dans le corps du texte.
3. `p9` « Bureau assis debout conforama » : page sœur, lien moyen, dans le corps du texte.
4. `p29` « Bureau ergonomique assis debout » : lien transverse, lien faible, en fin de contenu, validé par Jev à 75 %.

**`p9` Bureau assis debout conforama**

1. `p6` « Bureau assis debout : marques et modèles » : page mère, lien fort, dans l’introduction.
2. `p7` « Bureau assis debout ikea » : page sœur, lien moyen, dans le corps du texte.
3. `p8` « Bureau assis debout amazon » : page sœur, lien moyen, dans le corps du texte.

**`p10` Songmics bureau assis debout**

1. `p6` « Bureau assis debout : marques et modèles » : page mère, lien fort, dans l’introduction.
2. `p7` « Bureau assis debout ikea » : page sœur, lien moyen, dans le corps du texte.
3. `p8` « Bureau assis debout amazon » : page sœur, lien moyen, dans le corps du texte.

**`p11` Bureau assis debout flexispot**

1. `p6` « Bureau assis debout : marques et modèles » : page mère, lien fort, dans l’introduction.
2. `p7` « Bureau assis debout ikea » : page sœur, lien moyen, dans le corps du texte.
3. `p8` « Bureau assis debout amazon » : page sœur, lien moyen, dans le corps du texte.
4. `p29` « Bureau ergonomique assis debout » : lien transverse, lien faible, en fin de contenu, validé par Jev à 76 %.

**`p12` Meilleur bureau assis debout**

1. `home` « Bureau assis debout » : page mère, lien fort, dans l’introduction.
2. `p13` « Bureau assis debout avec rangement » : page fille, lien moyen, dans le corps du texte.
3. `p14` « Bureau assis debout bois » : page fille, lien moyen, dans le corps du texte.
4. `p15` « Bureau assis debout pas cher » : page fille, lien moyen, dans le corps du texte.
5. `p16` « Bureau assis debout design » : page fille, lien moyen, dans le corps du texte.

**`p13` Bureau assis debout avec rangement**

1. `p12` « Meilleur bureau assis debout » : page mère, lien fort, dans l’introduction.
2. `p14` « Bureau assis debout bois » : étape suivante du parcours, lien fort, dans le corps du texte.
3. `p16` « Bureau assis debout design » : page sœur, lien moyen, dans le corps du texte.
4. `p15` « Bureau assis debout pas cher » : page sœur, lien moyen, dans le corps du texte.

**`p14` Bureau assis debout bois**

1. `p12` « Meilleur bureau assis debout » : page mère, lien fort, dans l’introduction.
2. `p15` « Bureau assis debout pas cher » : étape suivante du parcours, lien fort, dans le corps du texte.
3. `p13` « Bureau assis debout avec rangement » : page sœur, lien moyen, dans le corps du texte.
4. `p16` « Bureau assis debout design » : page sœur, lien moyen, dans le corps du texte.

**`p15` Bureau assis debout pas cher**

1. `p12` « Meilleur bureau assis debout » : page mère, lien fort, dans l’introduction.
2. `p14` « Bureau assis debout bois » : page sœur, lien moyen, dans le corps du texte.
3. `p16` « Bureau assis debout design » : page sœur, lien moyen, dans le corps du texte.

**`p16` Bureau assis debout design**

1. `p12` « Meilleur bureau assis debout » : page mère, lien fort, dans l’introduction.
2. `p15` « Bureau assis debout pas cher » : étape suivante du parcours, lien fort, dans le corps du texte.
3. `p13` « Bureau assis debout avec rangement » : page sœur, lien moyen, dans le corps du texte.
4. `p14` « Bureau assis debout bois » : page sœur, lien moyen, dans le corps du texte.

**`p17` Bureau assis debout : tailles et formats**

1. `home` « Bureau assis debout » : page mère, lien fort, dans l’introduction.
2. `p18` « Bureau assis debout angle » : page fille, lien moyen, dans le corps du texte.
3. `p19` « Bureau assis debout 160x80 » : page fille, lien moyen, dans le corps du texte.
4. `p20` « Bureau assis debout 180x80 » : page fille, lien moyen, dans le corps du texte.
5. `p21` « Bureau assis debout 120x60 » : page fille, lien moyen, dans le corps du texte.
6. `p22` « Bureau assis debout 140x70 » : page fille, lien moyen, dans le corps du texte.

**`p18` Bureau assis debout angle**

1. `p17` « Bureau assis debout : tailles et formats » : page mère, lien fort, dans l’introduction.
2. `p19` « Bureau assis debout 160x80 » : page sœur, lien moyen, dans le corps du texte.
3. `p20` « Bureau assis debout 180x80 » : page sœur, lien moyen, dans le corps du texte.

**`p19` Bureau assis debout 160x80**

1. `p17` « Bureau assis debout : tailles et formats » : page mère, lien fort, dans l’introduction.
2. `p18` « Bureau assis debout angle » : page sœur, lien moyen, dans le corps du texte.
3. `p20` « Bureau assis debout 180x80 » : page sœur, lien moyen, dans le corps du texte.

**`p20` Bureau assis debout 180x80**

1. `p17` « Bureau assis debout : tailles et formats » : page mère, lien fort, dans l’introduction.
2. `p18` « Bureau assis debout angle » : page sœur, lien moyen, dans le corps du texte.
3. `p19` « Bureau assis debout 160x80 » : page sœur, lien moyen, dans le corps du texte.

**`p21` Bureau assis debout 120x60**

1. `p17` « Bureau assis debout : tailles et formats » : page mère, lien fort, dans l’introduction.
2. `p18` « Bureau assis debout angle » : page sœur, lien moyen, dans le corps du texte.
3. `p19` « Bureau assis debout 160x80 » : page sœur, lien moyen, dans le corps du texte.

**`p22` Bureau assis debout 140x70**

1. `p17` « Bureau assis debout : tailles et formats » : page mère, lien fort, dans l’introduction.
2. `p18` « Bureau assis debout angle » : page sœur, lien moyen, dans le corps du texte.
3. `p19` « Bureau assis debout 160x80 » : page sœur, lien moyen, dans le corps du texte.

**`p23` Bureau assis debout : profils d’utilisateurs**

1. `home` « Bureau assis debout » : page mère, lien fort, dans l’introduction.
2. `p24` « Bureau assis debout gamer » : page fille, lien moyen, dans le corps du texte.
3. `p25` « Bureau assis debout professionnel » : page fille, lien moyen, dans le corps du texte.
4. `p26` « Cadre bureau assis debout » : page fille, lien moyen, dans le corps du texte.

**`p24` Bureau assis debout gamer**

1. `p23` « Bureau assis debout : profils d’utilisateurs » : page mère, lien fort, dans l’introduction.
2. `p25` « Bureau assis debout professionnel » : page sœur, lien moyen, dans le corps du texte.
3. `p26` « Cadre bureau assis debout » : page sœur, lien moyen, dans le corps du texte.

**`p25` Bureau assis debout professionnel**

1. `p23` « Bureau assis debout : profils d’utilisateurs » : page mère, lien fort, dans l’introduction.
2. `p26` « Cadre bureau assis debout » : page sœur, lien moyen, dans le corps du texte.
3. `p24` « Bureau assis debout gamer » : page sœur, lien moyen, dans le corps du texte.

**`p26` Cadre bureau assis debout**

1. `p23` « Bureau assis debout : profils d’utilisateurs » : page mère, lien fort, dans l’introduction.
2. `p25` « Bureau assis debout professionnel » : page sœur, lien moyen, dans le corps du texte.
3. `p24` « Bureau assis debout gamer » : page sœur, lien moyen, dans le corps du texte.

**`p27` Pied bureau assis debout**

1. `home` « Bureau assis debout » : page mère, lien fort, dans l’introduction.

**`p28` Bureau assis debout : autres angles**

1. `home` « Bureau assis debout » : page mère, lien fort, dans l’introduction.
2. `p29` « Bureau ergonomique assis debout » : page fille, lien moyen, dans le corps du texte.
3. `p30` « Bureau assis debout but » : page fille, lien moyen, dans le corps du texte.

**`p29` Bureau ergonomique assis debout**

1. `p28` « Bureau assis debout : autres angles » : page mère, lien fort, dans l’introduction.
2. `p30` « Bureau assis debout but » : étape suivante du parcours, lien fort, dans le corps du texte.
3. `p11` « Bureau assis debout flexispot » : lien transverse, lien faible, en fin de contenu, validé par Jev à 76 %.
4. `p7` « Bureau assis debout ikea » : lien transverse, lien faible, en fin de contenu, validé par Jev à 76 %.

**`p30` Bureau assis debout but**

1. `p28` « Bureau assis debout : autres angles » : page mère, lien fort, dans l’introduction.
2. `p29` « Bureau ergonomique assis debout » : page sœur, lien moyen, dans le corps du texte.

**`p31` Bureau assis debout gaming**

1. `home` « Bureau assis debout » : page mère, lien fort, dans l’introduction.

### 4.4 Liens transverses autorisés

Liste fermée : aucun autre lien entre silos n’est permis. Jev a jugé chacun utile pour le même lecteur (probabilité d’au moins 75 %). Place-les en fin de contenu.

| De | Vers | Probabilité Jev |
| --- | --- | --- |
| p4 Bureau assis debout manuel | p29 Bureau ergonomique assis debout | 75 % |
| p7 Bureau assis debout ikea | p29 Bureau ergonomique assis debout | 76 % |
| p8 Bureau assis debout amazon | p29 Bureau ergonomique assis debout | 75 % |
| p11 Bureau assis debout flexispot | p29 Bureau ergonomique assis debout | 76 % |
| p29 Bureau ergonomique assis debout | p11 Bureau assis debout flexispot | 76 % |
| p29 Bureau ergonomique assis debout | p7 Bureau assis debout ikea | 76 % |

### 4.5 Règles de maillage et de navigation

- Pas de méga-menu, pas de menu global qui relie tout à tout. L’en-tête contient le logo (lien vers l’accueil) et rien qui casse le cloisonnement.
- Navigation contextuelle : fil d’Ariane sur chaque page, plus un menu de silo qui ne montre que la page mère et les pages sœurs du silo courant.
- Pied de page minimal : mentions légales, à propos, méthodologie, contact, transparence sur l’affiliation. Pas de liste d’articles.
- Pas de widget « articles récents » ou « populaires », pas de nuage de tags, pas de pages de tags ni d’archives par date.
- Aucune page orpheline. Chaque page reste à trois clics maximum de l’accueil.
- Ancres descriptives et variées, tirées du vocabulaire des personas. Jamais « cliquez ici » ou « en savoir plus ». Jamais la même ancre exacte vers deux pages différentes, jamais la même ancre exacte répétée partout vers une page.
- Les liens d’affiliation ne font pas partie du maillage : rel="sponsored", clairement signalés comme tels.
- Un lien qui n’est pas dans le plan n’est ajouté que s’il sert le lecteur et reste dans le silo. Note-le dans `architecture.md`.

## 5. Design system original

### 5.1 Recherche

1. Collecte l’univers réel de la niche : matières, objets, lieux, gestes, saisons, vocabulaire des personas. Ne pars pas des sites concurrents.
2. Propose trois directions. Pour chacune : un nom, l’émotion visée, le persona qu’elle sert le mieux, une palette, une paire typographique, un langage de formes, une iconographie et un composant clé dessiné en exemple.
3. Écarte deux directions en écrivant pourquoi. Retiens la troisième.
4. Décline-la en tokens, puis en composants.

### 5.2 Livrable `design-system.md`

- Tokens : couleurs sémantiques (contraste WCAG 2.2 AA vérifié et chiffré pour chaque paire texte/fond), deux familles typographiques au plus (licence et chargement précisés), échelle typographique, espacements, rayons, ombres, mouvements (avec prefers-reduced-motion).
- Composants propres à un site d’affiliation utile : bloc verdict, tableau comparatif accessible, fiche produit avec critères explicites, encadré « pour qui / pour qui ce n’est pas », encadré sources, FAQ, fil d’Ariane, menu de silo, bouton d’affiliation signalé.
- Mobile d’abord, navigation au clavier, Core Web Vitals au vert.
- Pour chaque choix, une ligne qui le relie à un persona ou à l’univers de la niche.

### 5.3 Interdits

- Les gabarits reconnaissables : héros centré suivi de trois cartes, thèmes par défaut des CMS, kits d’interface génériques.
- Le dégradé violet ou bleu générique, les emojis en guise d’icônes, les illustrations 3D sans rapport avec la niche, les photos de banques d’images qui ne montrent pas le produit réel.
- Les faux badges (« Meilleur choix ») sans critères publiés, les comptes à rebours, les carrousels, les méga-menus.

## 6. Règles de rédaction

### 6.1 Consignes officielles de Google

Lis-les avant d’écrire la première page et applique-les à toutes :

- [Créer du contenu utile, fiable et axé sur les personnes](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) : la grille d’auto-évaluation s’applique à chaque page.
- [Règles relatives au spam](https://developers.google.com/search/docs/essentials/spam-policies) : en particulier l’abus de contenu à grande échelle et les pages d’affiliation sans valeur ajoutée.
- [Rédiger des avis de qualité](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews) : obligatoire pour toute page d’avis, de test ou de comparatif.
- [Utiliser du contenu généré par IA](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) : l’IA est un outil, la valeur pour le lecteur reste le critère.
- [Qualifier les liens sortants](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links) : rel="sponsored" sur chaque lien d’affiliation.
- [Liens explorables et textes d’ancre](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) : ancres descriptives, liens en HTML standard.
- [Liens de titre](https://developers.google.com/search/docs/appearance/title-link) : un title unique et descriptif par page.
- [Extraits et meta descriptions](https://developers.google.com/search/docs/appearance/snippet) : une meta description unique, qui résume la page.
- [Données structurées](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) : uniquement pour ce qui est visible et vrai sur la page.
- [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals) : LCP, INP et CLS au vert sur mobile.
- [Consignes aux évaluateurs de la qualité (Search Quality Rater Guidelines)](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf) : pour comprendre ce que Google entend par E-E-A-T.

### 6.2 Fond

- Chaque page répond d’abord à l’intention de sa requête cible, dès le premier paragraphe. Le reste développe, dans l’ordre des questions du persona.
- Rien n’est inventé. Chaque donnée vient d’une source citée, et chaque affirmation importante est confirmée par au moins deux sources indépendantes. Une information introuvable est signalée comme telle, ou retirée.
- Aucune expérience simulée : pas de « nous avons testé », pas d’anecdote d’utilisation, pas d’auteur fictif, sauf si le porteur de projet les a fournis en phase 1.
- Pages d’avis et de comparatifs : critères de choix explicites, points forts et points faibles, alternatives, profils pour qui le produit ne convient pas.
- Les sources sont listées en fin de page, avec un lien. Une donnée chiffrée est aussi liée à sa source dans le texte.
- La relation d’affiliation est annoncée clairement, avant le premier lien d’affiliation.
- Une date de mise à jour n’apparaît que si la page a réellement été revue.

### 6.3 Style

- Varie la longueur des phrases. Des phrases courtes. D’autres de longueur moyenne, qui posent une idée et sa nuance. Et quelques phrases longues, bien construites, quand un raisonnement le demande, sans jamais en aligner trois de la même longueur.
- Aucun tiret cadratin (U+2014) ni demi-cadratin (U+2013) pour ponctuer : utilise une virgule, deux-points, des parenthèses ou un point. Le trait d’union des mots composés reste permis.
- Typographie française : espace insécable avant « : ; ! ? » et à l’intérieur des guillemets « », apostrophe typographique (’).
- Paragraphes courts. Intertitres informatifs (jamais « Introduction » ou « Conclusion »).
- Le vocabulaire est celui des requêtes des personas, pas celui d’une fiche technique.
- Tics d’IA interdits : « Dans un monde où », « Il est important de noter », « En conclusion », « Plongeons », « N’hésitez pas », « Que vous soyez… ou… », « Véritable allié », « Incontournable », les listes à puces systématiques, les triplets d’adjectifs, les questions rhétoriques en ouverture.
- Title et meta description uniques par page, écrits pour le lecteur.

### 6.4 Structure d’une page

1. Un H1 qui formule naturellement l’intention de la requête cible.
2. Une introduction qui répond tout de suite et contient le lien vers la page mère.
3. Un corps organisé selon les questions du persona, avec les liens forts placés tôt.
4. Une fin avec les sources, puis les liens faibles et transverses, et une FAQ seulement si de vraies questions restent.
5. Des données structurées adaptées (BreadcrumbList partout, Article pour les guides, Product et Review uniquement si les informations sont réelles et visibles).

## 7. Ordre de travail et livrables

1. `cadrage.md` : la phase 1 complète (questions, arbitrages, contre-interrogatoire).
2. `personas.md` : les fiches personas sourcées.
3. `architecture.md` : le plan révisé (pages ajoutées, fusionnées ou supprimées, avec leur raison) et le maillage final.
4. `design-system.md` : la recherche, la direction retenue, les tokens et les composants.
5. `sources.md` : les sources consultées, page par page.
6. Le site, en commençant par des cocons complets (une page mère et ses filles) et par les quick wins.
7. `controle.md` : la liste de contrôle ci-dessous, cochée, avec la preuve de chaque point.

## 8. Liste de contrôle finale

- [ ] Aucun tiret cadratin (U+2014) ni demi-cadratin (U+2013) dans les contenus (recherche sur tout le site).
- [ ] Chaque page, hors accueil, contient son lien vers la page mère dans l’introduction.
- [ ] Aucun lien entre silos en dehors de la liste 4.4 et des changements justifiés dans `architecture.md`.
- [ ] Aucune page orpheline ; aucune page à plus de trois clics de l’accueil.
- [ ] Ni méga-menu, ni liste d’articles en pied de page, ni widget de liens globaux.
- [ ] Chaque chiffre a sa source ; chaque affirmation importante en a deux.
- [ ] Aucun test, avis personnel, auteur ou expérience inventé.
- [ ] Liens d’affiliation en rel="sponsored" et signalés.
- [ ] Contrastes AA vérifiés, navigation clavier, prefers-reduced-motion respecté.
- [ ] Longueurs de phrases variées, vérifiées sur un échantillon de pages.
- [ ] Title et meta description uniques.

## Annexe A. Mots-clés analysés

| Mot-clé | Volume/mois | KD | Intention | Page du plan |
| --- | --- | --- | --- | --- |
| assis debout bureau | 27 100 | 3 | transactionnelle | home |
| assis-debout bureau | 27 100 | 3 | transactionnelle | home |
| bureau assis debout | 27 100 | 3 | transactionnelle | home |
| bureau assis-debout | 27 100 | 3 | navigationnelle | home |
| bureau debout assis | 27 100 | 3 | transactionnelle | home |
| bureau assis debout electrique | 3 600 | 7 | transactionnelle | p2 |
| bureau assis-debout electrique | 3 600 | 7 | transactionnelle | p2 |
| bureau assis/debout électrique | 3 600 | 7 | transactionnelle | p2 |
| bureau assis debout ikea | 2 900 | 0 | transactionnelle | p7 |
| bureau assis/debout ikea | 2 900 | 0 | navigationnelle | p7 |
| bureau ikea assis debout | 2 900 | 0 | navigationnelle | p7 |
| bureau ikea assis/debout | 2 900 | 0 | navigationnelle | p7 |
| ikea bureau assis debout | 2 900 | 0 | navigationnelle | p7 |
| ikea bureau assis/debout | 2 900 | 0 | transactionnelle | p7 |
| bureau électrique assis debout | 1 000 | 9 | transactionnelle | p2 |
| bureau électrique assis-debout | 1 000 | 7 | transactionnelle | p2 |
| pied bureau assis debout | 880 | 0 | transactionnelle | p27 |
| pied bureau assis-debout | 880 | 0 | transactionnelle | p27 |
| pieds bureau assis debout | 880 | 0 | transactionnelle | p27 |
| bureau assis debout manuel | 720 | 0 | transactionnelle | p4 |
| bureau assis-debout manuel | 720 | 0 | transactionnelle | p4 |
| meilleur bureau assis debout | 720 | 0 | transactionnelle | p12 |
| meilleur bureau assis-debout | 720 | 0 | commerciale | p12 |
| meilleurs bureau assis debout | 720 | 0 | transactionnelle | p12 |
| bureau assis debout amazon | 590 | 0 | transactionnelle | p8 |
| bureau assis-debout amazon | 590 | 0 | navigationnelle | p8 |
| bureau ergonomique assis debout | 480 | 17 | transactionnelle | p29 |
| bureau ergonomique assis-debout | 480 | 17 | transactionnelle | p29 |
| bureau assis debout angle | 390 | 0 | transactionnelle | p18 |
| bureau assis-debout angle | 390 | 0 | transactionnelle | p18 |
| bureau d angle assis debout | 390 | 0 | navigationnelle | p18 |
| bureau d'angle assis debout | 390 | 0 | transactionnelle | p18 |
| amazon bureau assis debout | 320 | 0 | navigationnelle | p8 |
| amazon bureau assis-debout | 320 | 0 | transactionnelle | p8 |
| bureau assis debout 160x80 | 320 | 0 | transactionnelle | p19 |
| bureau assis debout but | 320 | 0 | navigationnelle | p30 |
| bureau assis debout gamer | 320 | 0 | transactionnelle | p24 |
| bureau assis debout gaming | 320 | 0 | navigationnelle | p31 |
| bureau assis debout professionnel | 320 | 0 | transactionnelle | p25 |
| bureau assis-debout but | 320 | 0 | navigationnelle | p30 |
| bureau assis-debout gamer | 320 | 0 | navigationnelle | p24 |
| bureau assis-debout gaming | 320 | 0 | navigationnelle | p31 |
| bureau assis-debout professionnel | 320 | 0 | navigationnelle | p25 |
| bureau assis/debout gamer | 320 | 0 | transactionnelle | p24 |
| bureau assis debout avec rangement | 260 | 0 | transactionnelle | p13 |
| bureau assis debout conforama | 260 | 0 | transactionnelle | p9 |
| bureau assis-debout avec rangement | 260 | 0 | transactionnelle | p13 |
| bureau assis-debout conforama | 260 | 0 | navigationnelle | p9 |
| bureau gaming assis debout | 260 | 0 | navigationnelle | p31 |
| bureau gaming assis-debout | 260 | 0 | navigationnelle | p31 |
| pied de bureau assis debout | 260 | 0 | transactionnelle | p27 |
| pied de bureau assis-debout | 260 | 0 | transactionnelle | p27 |
| pieds de bureau assis debout | 260 | 0 | transactionnelle | p27 |
| songmics bureau assis debout | 260 | 0 | navigationnelle | p10 |
| songmics bureau assis-debout | 260 | 0 | transactionnelle | p10 |
| bureau assis debout 180x80 | 210 | 0 | transactionnelle | p20 |
| bureau assis debout bois | 210 | 0 | transactionnelle | p14 |
| bureau assis debout flexispot | 210 | 0 | transactionnelle | p11 |
| bureau assis debout pas cher | 210 | 0 | transactionnelle | p15 |
| bureau assis-debout 180x80 | 210 | 0 | transactionnelle | p20 |
| bureau assis-debout bois | 210 | 0 | transactionnelle | p14 |
| bureau assis-debout flexispot | 210 | 0 | navigationnelle | p11 |
| bureau assis/debout pas cher | 210 | 0 | transactionnelle | p15 |
| but bureau assis debout | 210 | 0 | navigationnelle | p30 |
| but bureau assis-debout | 210 | 0 | navigationnelle | p30 |
| cadre bureau assis debout | 210 | 0 | transactionnelle | p26 |
| cadre bureau assis-debout | 210 | 0 | transactionnelle | p26 |
| bureau assis debout 120x60 | 170 | 0 | transactionnelle | p21 |
| bureau assis debout 140x70 | 170 | 0 | transactionnelle | p22 |
| bureau assis debout design | 170 | 4 | transactionnelle | p16 |
| bureau assis debout manivelle | 170 | 5 | transactionnelle | p5 |
| bureau assis debout électrique 160x80 | 170 | 0 | transactionnelle | p3 |
| bureau assis-debout 120x60 | 170 | 0 | transactionnelle | p21 |
| bureau assis-debout design | 170 | 4 | navigationnelle | p16 |
| bureau assis-debout manivelle | 170 | 5 | transactionnelle | p5 |
| bureau assis-debout électrique 160x80 | 170 | 0 | transactionnelle | p3 |
| bureau assis/debout manivelle | 170 | 5 | transactionnelle | p5 |
| bureau assis/debout électrique 160x80 | 170 | 0 | transactionnelle | p3 |
| conforama bureau assis debout | 170 | 0 | transactionnelle | p9 |
| conforama bureau assis-debout | 170 | 0 | navigationnelle | p9 |
| flexispot bureau assis debout | 170 | 0 | transactionnelle |   |
| flexispot bureau assis-debout | 170 | 0 | transactionnelle |   |
| support bureau assis debout | 170 | 0 | transactionnelle |   |
| support bureau assis-debout | 170 | 0 | navigationnelle |   |
| bureau assis debout 200x80 | 140 | 0 | transactionnelle |   |
| bureau assis debout 4 pieds | 140 | 0 | transactionnelle |   |
| bureau assis debout d angle | 140 | 0 | transactionnelle |   |
| bureau assis debout d'angle | 140 | 0 | transactionnelle |   |
| bureau assis debout songmics | 140 | 0 | navigationnelle |   |
| bureau assis-debout 200x80 | 140 | 0 | transactionnelle |   |
| chaise bureau assis debout | 140 | 0 | transactionnelle |   |
| chaise bureau assis-debout | 140 | 0 | transactionnelle |   |
| convertisseur de bureau assis debout | 140 | 0 | transactionnelle |   |
| convertisseur de bureau assis-debout | 140 | 0 | transactionnelle |   |
| kqueo bureau assis debout électrique | 140 | 0 | transactionnelle |   |
| bureau assis debout 100 x 60 | 110 | 0 | transactionnelle |   |
| bureau assis debout 120x70 | 110 | 0 | transactionnelle |   |
| bureau d'angle assis debout electrique | 110 | 0 | navigationnelle |   |
| bureau assis-debout bois massif | 90 | 0 | transactionnelle |   |
| ikea bureau assis/debout électrique | 90 | 0 | transactionnelle |   |

## Annexe B. Plan au format JSON

Le même plan, lisible par un programme (pages, silos, personas, liens dans leur ordre).

```json
{
  "seed": "bureau assis debout",
  "market": "France - FR",
  "engine": "jev",
  "model": "jev-1.13.0",
  "silos": [
    {"id":"s0","label":"Matières et technologies","facet":"material_technology","hub_id":"p1","angles":["électrique","manuel"],"volume":4660},
    {"id":"s1","label":"Marques et modèles","facet":"brand_model","hub_id":"p6","angles":["ikea","amazon","conforama","songmics","flexispot"],"volume":4220},
    {"id":"s7","label":"Guides d’achat","facet":"general","hub_id":"p12","angles":[],"volume":1570},
    {"id":"s3","label":"Tailles et formats","facet":"size_format","hub_id":"p17","angles":["160x80","angle"],"volume":1260},
    {"id":"s5","label":"Profils d’utilisateurs","facet":"audience","hub_id":"p23","angles":["gamer","professionnel"],"volume":850},
    {"id":"s2","label":"Produits associés","facet":"related_product","hub_id":"p27","angles":["pied"],"volume":880},
    {"id":"s4","label":"Autres angles","facet":"other","hub_id":"p28","angles":["ergonomique","but"],"volume":800},
    {"id":"s6","label":"Situations d’usage","facet":"usage_context","hub_id":"p31","angles":["gaming"],"volume":320}
  ],
  "personas": [
    {"id":"p1","label":"Situation « gaming »","basis":"usage_context","angle":"gaming","queries":["bureau assis debout gaming","bureau assis-debout gaming","bureau gaming assis debout","bureau gaming assis-debout"],"volume":320,"stages":{"solve":4},"page_ids":["p31"]},
    {"id":"p2","label":"Profil « gamer »","basis":"audience","angle":"gamer","queries":["bureau assis debout gamer","bureau assis-debout gamer","bureau assis/debout gamer"],"volume":320,"stages":{"solve":3},"page_ids":["p24"]},
    {"id":"general","label":"Acheteur sans profil particulier","basis":"general","queries":["assis debout bureau","assis-debout bureau","bureau assis debout","bureau assis-debout","bureau debout assis","bureau assis debout electrique","bureau assis-debout electrique","bureau assis/debout électrique"],"volume":41020,"stages":{"choose":28,"compare":23,"solve":22},"page_ids":["home","p2","p3","p4","p5","p7","p8","p9","p10","p11","p12","p13","p14","p15","p16","p18","p19","p20","p21","p22","p25","p26","p27","p29","p30"]}
  ],
  "pages": [
    {"id":"home","level":0,"kind":"home","title":"Bureau assis debout","slug":"/","keyword":"assis debout bureau","secondary":["assis-debout bureau","bureau assis debout","bureau assis-debout","bureau debout assis"],"volume":27100,"kd":3,"intent":"transactional","stage":"solve","stage_confidence":0.47,"persona_id":"general","quick_win":true},
    {"id":"p1","level":1,"kind":"hub","silo_id":"s0","parent_id":"home","title":"Bureau assis debout : matières et technologies","slug":"/matieres-et-technologies/","keyword":"","secondary":[],"volume":0,"kd":null,"intent":"unknown","quick_win":false},
    {"id":"p2","level":2,"kind":"angle","silo_id":"s0","parent_id":"p1","title":"Bureau assis debout electrique","slug":"/matieres-et-technologies/bureau-assis-debout-electrique/","keyword":"bureau assis debout electrique","secondary":["bureau assis-debout electrique","bureau assis/debout électrique","bureau électrique assis debout","bureau électrique assis-debout"],"volume":3600,"kd":7,"intent":"transactional","stage":"compare","stage_confidence":0.29,"persona_id":"general","quick_win":true},
    {"id":"p3","level":3,"kind":"longtail","silo_id":"s0","parent_id":"p2","title":"Bureau assis debout électrique 160x80","slug":"/matieres-et-technologies/bureau-assis-debout-electrique/bureau-assis-debout-electrique-160x80/","keyword":"bureau assis debout électrique 160x80","secondary":["bureau assis-debout électrique 160x80","bureau assis/debout électrique 160x80"],"volume":170,"kd":0,"intent":"transactional","stage":"choose","stage_confidence":0.4,"persona_id":"general","quick_win":false},
    {"id":"p4","level":2,"kind":"angle","silo_id":"s0","parent_id":"p1","title":"Bureau assis debout manuel","slug":"/matieres-et-technologies/bureau-assis-debout-manuel/","keyword":"bureau assis debout manuel","secondary":["bureau assis-debout manuel"],"volume":720,"kd":0,"intent":"transactional","stage":"compare","stage_confidence":0.39,"persona_id":"general","quick_win":true},
    {"id":"p5","level":2,"kind":"angle","silo_id":"s0","parent_id":"p1","title":"Bureau assis debout manivelle","slug":"/matieres-et-technologies/bureau-assis-debout-manivelle/","keyword":"bureau assis debout manivelle","secondary":["bureau assis-debout manivelle","bureau assis/debout manivelle"],"volume":170,"kd":5,"intent":"transactional","stage":"compare","stage_confidence":0.49,"persona_id":"general","quick_win":false},
    {"id":"p6","level":1,"kind":"hub","silo_id":"s1","parent_id":"home","title":"Bureau assis debout : marques et modèles","slug":"/marques-et-modeles/","keyword":"","secondary":[],"volume":0,"kd":null,"intent":"unknown","quick_win":false},
    {"id":"p7","level":2,"kind":"angle","silo_id":"s1","parent_id":"p6","title":"Bureau assis debout ikea","slug":"/marques-et-modeles/bureau-assis-debout-ikea/","keyword":"bureau assis debout ikea","secondary":["bureau assis/debout ikea","bureau ikea assis debout","bureau ikea assis/debout","ikea bureau assis debout","ikea bureau assis/debout"],"volume":2900,"kd":0,"intent":"transactional","stage":"choose","stage_confidence":0.99,"persona_id":"general","quick_win":true},
    {"id":"p8","level":2,"kind":"angle","silo_id":"s1","parent_id":"p6","title":"Bureau assis debout amazon","slug":"/marques-et-modeles/bureau-assis-debout-amazon/","keyword":"bureau assis debout amazon","secondary":["bureau assis-debout amazon","amazon bureau assis debout","amazon bureau assis-debout"],"volume":590,"kd":0,"intent":"transactional","stage":"choose","stage_confidence":0.98,"persona_id":"general","quick_win":true},
    {"id":"p9","level":2,"kind":"angle","silo_id":"s1","parent_id":"p6","title":"Bureau assis debout conforama","slug":"/marques-et-modeles/bureau-assis-debout-conforama/","keyword":"bureau assis debout conforama","secondary":["bureau assis-debout conforama","conforama bureau assis debout","conforama bureau assis-debout"],"volume":260,"kd":0,"intent":"transactional","stage":"choose","stage_confidence":1,"persona_id":"general","quick_win":false},
    {"id":"p10","level":2,"kind":"angle","silo_id":"s1","parent_id":"p6","title":"Songmics bureau assis debout","slug":"/marques-et-modeles/songmics-bureau-assis-debout/","keyword":"songmics bureau assis debout","secondary":["songmics bureau assis-debout"],"volume":260,"kd":0,"intent":"navigational","stage":"choose","stage_confidence":0.95,"persona_id":"general","quick_win":false},
    {"id":"p11","level":2,"kind":"angle","silo_id":"s1","parent_id":"p6","title":"Bureau assis debout flexispot","slug":"/marques-et-modeles/bureau-assis-debout-flexispot/","keyword":"bureau assis debout flexispot","secondary":["bureau assis-debout flexispot"],"volume":210,"kd":0,"intent":"transactional","stage":"choose","stage_confidence":0.97,"persona_id":"general","quick_win":false},
    {"id":"p12","level":1,"kind":"guide","silo_id":"s7","parent_id":"home","title":"Meilleur bureau assis debout","slug":"/meilleur-bureau-assis-debout/","keyword":"meilleur bureau assis debout","secondary":["meilleur bureau assis-debout","meilleurs bureau assis debout"],"volume":720,"kd":0,"intent":"transactional","stage":"choose","stage_confidence":0.98,"persona_id":"general","quick_win":true},
    {"id":"p13","level":2,"kind":"guide","silo_id":"s7","parent_id":"p12","title":"Bureau assis debout avec rangement","slug":"/meilleur-bureau-assis-debout/bureau-assis-debout-avec-rangement/","keyword":"bureau assis debout avec rangement","secondary":["bureau assis-debout avec rangement"],"volume":260,"kd":0,"intent":"transactional","stage":"solve","stage_confidence":0.58,"persona_id":"general","quick_win":false},
    {"id":"p14","level":2,"kind":"guide","silo_id":"s7","parent_id":"p12","title":"Bureau assis debout bois","slug":"/meilleur-bureau-assis-debout/bureau-assis-debout-bois/","keyword":"bureau assis debout bois","secondary":["bureau assis-debout bois"],"volume":210,"kd":0,"intent":"transactional","stage":"compare","stage_confidence":0.52,"persona_id":"general","quick_win":false},
    {"id":"p15","level":2,"kind":"guide","silo_id":"s7","parent_id":"p12","title":"Bureau assis debout pas cher","slug":"/meilleur-bureau-assis-debout/bureau-assis-debout-pas-cher/","keyword":"bureau assis debout pas cher","secondary":["bureau assis/debout pas cher"],"volume":210,"kd":0,"intent":"transactional","stage":"choose","stage_confidence":1,"persona_id":"general","quick_win":false},
    {"id":"p16","level":2,"kind":"guide","silo_id":"s7","parent_id":"p12","title":"Bureau assis debout design","slug":"/meilleur-bureau-assis-debout/bureau-assis-debout-design/","keyword":"bureau assis debout design","secondary":["bureau assis-debout design"],"volume":170,"kd":4,"intent":"transactional","stage":"compare","stage_confidence":0.32,"persona_id":"general","quick_win":false},
    {"id":"p17","level":1,"kind":"hub","silo_id":"s3","parent_id":"home","title":"Bureau assis debout : tailles et formats","slug":"/tailles-et-formats/","keyword":"","secondary":[],"volume":0,"kd":null,"intent":"unknown","quick_win":false},
    {"id":"p18","level":2,"kind":"angle","silo_id":"s3","parent_id":"p17","title":"Bureau assis debout angle","slug":"/tailles-et-formats/bureau-assis-debout-angle/","keyword":"bureau assis debout angle","secondary":["bureau assis-debout angle","bureau d angle assis debout","bureau d'angle assis debout"],"volume":390,"kd":0,"intent":"transactional","stage":"compare","stage_confidence":0.54,"persona_id":"general","quick_win":true},
    {"id":"p19","level":2,"kind":"angle","silo_id":"s3","parent_id":"p17","title":"Bureau assis debout 160x80","slug":"/tailles-et-formats/bureau-assis-debout-160x80/","keyword":"bureau assis debout 160x80","secondary":[],"volume":320,"kd":0,"intent":"transactional","stage":"compare","stage_confidence":0.47,"persona_id":"general","quick_win":false},
    {"id":"p20","level":2,"kind":"angle","silo_id":"s3","parent_id":"p17","title":"Bureau assis debout 180x80","slug":"/tailles-et-formats/bureau-assis-debout-180x80/","keyword":"bureau assis debout 180x80","secondary":["bureau assis-debout 180x80"],"volume":210,"kd":0,"intent":"transactional","stage":"compare","stage_confidence":0.5,"persona_id":"general","quick_win":false},
    {"id":"p21","level":2,"kind":"angle","silo_id":"s3","parent_id":"p17","title":"Bureau assis debout 120x60","slug":"/tailles-et-formats/bureau-assis-debout-120x60/","keyword":"bureau assis debout 120x60","secondary":["bureau assis-debout 120x60"],"volume":170,"kd":0,"intent":"transactional","stage":"compare","stage_confidence":0.5,"persona_id":"general","quick_win":false},
    {"id":"p22","level":2,"kind":"angle","silo_id":"s3","parent_id":"p17","title":"Bureau assis debout 140x70","slug":"/tailles-et-formats/bureau-assis-debout-140x70/","keyword":"bureau assis debout 140x70","secondary":[],"volume":170,"kd":0,"intent":"transactional","stage":"compare","stage_confidence":0.49,"persona_id":"general","quick_win":false},
    {"id":"p23","level":1,"kind":"hub","silo_id":"s5","parent_id":"home","title":"Bureau assis debout : profils d’utilisateurs","slug":"/profils-d-utilisateurs/","keyword":"","secondary":[],"volume":0,"kd":null,"intent":"unknown","quick_win":false},
    {"id":"p24","level":2,"kind":"angle","silo_id":"s5","parent_id":"p23","title":"Bureau assis debout gamer","slug":"/profils-d-utilisateurs/bureau-assis-debout-gamer/","keyword":"bureau assis debout gamer","secondary":["bureau assis-debout gamer","bureau assis/debout gamer"],"volume":320,"kd":0,"intent":"transactional","stage":"solve","stage_confidence":0.81,"persona_id":"p2","quick_win":false},
    {"id":"p25","level":2,"kind":"angle","silo_id":"s5","parent_id":"p23","title":"Bureau assis debout professionnel","slug":"/profils-d-utilisateurs/bureau-assis-debout-professionnel/","keyword":"bureau assis debout professionnel","secondary":["bureau assis-debout professionnel"],"volume":320,"kd":0,"intent":"transactional","stage":"solve","stage_confidence":0.43,"persona_id":"general","quick_win":false},
    {"id":"p26","level":2,"kind":"angle","silo_id":"s5","parent_id":"p23","title":"Cadre bureau assis debout","slug":"/profils-d-utilisateurs/cadre-bureau-assis-debout/","keyword":"cadre bureau assis debout","secondary":["cadre bureau assis-debout"],"volume":210,"kd":0,"intent":"transactional","stage":"solve","stage_confidence":0.23,"persona_id":"general","quick_win":false},
    {"id":"p27","level":1,"kind":"angle","silo_id":"s2","parent_id":"home","title":"Pied bureau assis debout","slug":"/pied-bureau-assis-debout/","keyword":"pied bureau assis debout","secondary":["pied bureau assis-debout","pieds bureau assis debout","pied de bureau assis debout","pied de bureau assis-debout","pieds de bureau assis debout"],"volume":880,"kd":0,"intent":"transactional","stage":"solve","stage_confidence":0.21,"persona_id":"general","quick_win":true},
    {"id":"p28","level":1,"kind":"hub","silo_id":"s4","parent_id":"home","title":"Bureau assis debout : autres angles","slug":"/autres-angles/","keyword":"","secondary":[],"volume":0,"kd":null,"intent":"unknown","quick_win":false},
    {"id":"p29","level":2,"kind":"angle","silo_id":"s4","parent_id":"p28","title":"Bureau ergonomique assis debout","slug":"/autres-angles/bureau-ergonomique-assis-debout/","keyword":"bureau ergonomique assis debout","secondary":["bureau ergonomique assis-debout"],"volume":480,"kd":17,"intent":"transactional","stage":"solve","stage_confidence":0.63,"persona_id":"general","quick_win":true},
    {"id":"p30","level":2,"kind":"angle","silo_id":"s4","parent_id":"p28","title":"Bureau assis debout but","slug":"/autres-angles/bureau-assis-debout-but/","keyword":"bureau assis debout but","secondary":["bureau assis-debout but","but bureau assis debout","but bureau assis-debout"],"volume":320,"kd":0,"intent":"navigational","stage":"compare","stage_confidence":0.31,"persona_id":"general","quick_win":false},
    {"id":"p31","level":1,"kind":"angle","silo_id":"s6","parent_id":"home","title":"Bureau assis debout gaming","slug":"/bureau-assis-debout-gaming/","keyword":"bureau assis debout gaming","secondary":["bureau assis-debout gaming","bureau gaming assis debout","bureau gaming assis-debout"],"volume":320,"kd":0,"intent":"navigational","stage":"solve","stage_confidence":0.74,"persona_id":"p1","quick_win":false}
  ],
  "links": [
    {"from":"home","to":"p1","kind":"child","strength":"fort","zone":"corps","order":1},
    {"from":"home","to":"p6","kind":"child","strength":"fort","zone":"corps","order":2},
    {"from":"home","to":"p12","kind":"child","strength":"fort","zone":"corps","order":3},
    {"from":"home","to":"p17","kind":"child","strength":"moyen","zone":"corps","order":4},
    {"from":"home","to":"p23","kind":"child","strength":"moyen","zone":"corps","order":5},
    {"from":"home","to":"p27","kind":"child","strength":"moyen","zone":"corps","order":6},
    {"from":"home","to":"p28","kind":"child","strength":"moyen","zone":"corps","order":7},
    {"from":"home","to":"p31","kind":"child","strength":"moyen","zone":"corps","order":8},
    {"from":"p1","to":"home","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p1","to":"p2","kind":"child","strength":"moyen","zone":"corps","order":2},
    {"from":"p1","to":"p4","kind":"child","strength":"moyen","zone":"corps","order":3},
    {"from":"p1","to":"p5","kind":"child","strength":"moyen","zone":"corps","order":4},
    {"from":"p2","to":"p1","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p2","to":"p3","kind":"next_step","strength":"fort","zone":"corps","order":2},
    {"from":"p2","to":"p4","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p2","to":"p5","kind":"sibling","strength":"moyen","zone":"corps","order":4},
    {"from":"p3","to":"p2","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p4","to":"p1","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p4","to":"p2","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p4","to":"p5","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p4","to":"p29","kind":"transverse","strength":"faible","zone":"fin","order":4,"probability":0.75},
    {"from":"p5","to":"p1","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p5","to":"p2","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p5","to":"p4","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p6","to":"home","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p6","to":"p7","kind":"child","strength":"moyen","zone":"corps","order":2},
    {"from":"p6","to":"p8","kind":"child","strength":"moyen","zone":"corps","order":3},
    {"from":"p6","to":"p9","kind":"child","strength":"moyen","zone":"corps","order":4},
    {"from":"p6","to":"p10","kind":"child","strength":"moyen","zone":"corps","order":5},
    {"from":"p6","to":"p11","kind":"child","strength":"moyen","zone":"corps","order":6},
    {"from":"p7","to":"p6","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p7","to":"p8","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p7","to":"p9","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p7","to":"p29","kind":"transverse","strength":"faible","zone":"fin","order":4,"probability":0.76},
    {"from":"p8","to":"p6","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p8","to":"p7","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p8","to":"p9","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p8","to":"p29","kind":"transverse","strength":"faible","zone":"fin","order":4,"probability":0.75},
    {"from":"p9","to":"p6","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p9","to":"p7","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p9","to":"p8","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p10","to":"p6","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p10","to":"p7","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p10","to":"p8","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p11","to":"p6","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p11","to":"p7","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p11","to":"p8","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p11","to":"p29","kind":"transverse","strength":"faible","zone":"fin","order":4,"probability":0.76},
    {"from":"p12","to":"home","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p12","to":"p13","kind":"child","strength":"moyen","zone":"corps","order":2},
    {"from":"p12","to":"p14","kind":"child","strength":"moyen","zone":"corps","order":3},
    {"from":"p12","to":"p15","kind":"child","strength":"moyen","zone":"corps","order":4},
    {"from":"p12","to":"p16","kind":"child","strength":"moyen","zone":"corps","order":5},
    {"from":"p13","to":"p12","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p13","to":"p14","kind":"next_step","strength":"fort","zone":"corps","order":2},
    {"from":"p13","to":"p16","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p13","to":"p15","kind":"sibling","strength":"moyen","zone":"corps","order":4},
    {"from":"p14","to":"p12","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p14","to":"p15","kind":"next_step","strength":"fort","zone":"corps","order":2},
    {"from":"p14","to":"p13","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p14","to":"p16","kind":"sibling","strength":"moyen","zone":"corps","order":4},
    {"from":"p15","to":"p12","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p15","to":"p14","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p15","to":"p16","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p16","to":"p12","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p16","to":"p15","kind":"next_step","strength":"fort","zone":"corps","order":2},
    {"from":"p16","to":"p13","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p16","to":"p14","kind":"sibling","strength":"moyen","zone":"corps","order":4},
    {"from":"p17","to":"home","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p17","to":"p18","kind":"child","strength":"moyen","zone":"corps","order":2},
    {"from":"p17","to":"p19","kind":"child","strength":"moyen","zone":"corps","order":3},
    {"from":"p17","to":"p20","kind":"child","strength":"moyen","zone":"corps","order":4},
    {"from":"p17","to":"p21","kind":"child","strength":"moyen","zone":"corps","order":5},
    {"from":"p17","to":"p22","kind":"child","strength":"moyen","zone":"corps","order":6},
    {"from":"p18","to":"p17","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p18","to":"p19","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p18","to":"p20","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p19","to":"p17","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p19","to":"p18","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p19","to":"p20","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p20","to":"p17","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p20","to":"p18","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p20","to":"p19","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p21","to":"p17","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p21","to":"p18","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p21","to":"p19","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p22","to":"p17","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p22","to":"p18","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p22","to":"p19","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p23","to":"home","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p23","to":"p24","kind":"child","strength":"moyen","zone":"corps","order":2},
    {"from":"p23","to":"p25","kind":"child","strength":"moyen","zone":"corps","order":3},
    {"from":"p23","to":"p26","kind":"child","strength":"moyen","zone":"corps","order":4},
    {"from":"p24","to":"p23","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p24","to":"p25","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p24","to":"p26","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p25","to":"p23","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p25","to":"p26","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p25","to":"p24","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p26","to":"p23","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p26","to":"p25","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p26","to":"p24","kind":"sibling","strength":"moyen","zone":"corps","order":3},
    {"from":"p27","to":"home","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p28","to":"home","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p28","to":"p29","kind":"child","strength":"moyen","zone":"corps","order":2},
    {"from":"p28","to":"p30","kind":"child","strength":"moyen","zone":"corps","order":3},
    {"from":"p29","to":"p28","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p29","to":"p30","kind":"next_step","strength":"fort","zone":"corps","order":2},
    {"from":"p29","to":"p11","kind":"transverse","strength":"faible","zone":"fin","order":3,"probability":0.76},
    {"from":"p29","to":"p7","kind":"transverse","strength":"faible","zone":"fin","order":4,"probability":0.76},
    {"from":"p30","to":"p28","kind":"parent","strength":"fort","zone":"intro","order":1},
    {"from":"p30","to":"p29","kind":"sibling","strength":"moyen","zone":"corps","order":2},
    {"from":"p31","to":"home","kind":"parent","strength":"fort","zone":"intro","order":1}
  ]
}
```
