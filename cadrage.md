# Cadrage : standup-bureau.com

Date : 2 octobre 2026. Mode autonome. Réponses écrites = référence des décisions.

## 1.1 Questions au porteur de projet

### Q1. Objectif et monétisation

**Réponse porteur (contrainte)** : Affiliation Amazon. Comparatifs uniques, centrés sur les besoins et questions des utilisateurs.

Pas de contradiction avec les données. Le site gagne de l’argent uniquement via liens d’affiliation Amazon (rel="sponsored"), après valeur informative réelle.

### Q2. Nom et positionnement

**Réponse porteur (contrainte)** : standup-bureau.com

Positionnement : guide d’achat francophone qui aide à choisir un bureau assis-debout selon la situation (dos, taille, télétravail, budget), sans faux tests.

Note : le dossier local s’appelle `standup-bureau.fr` ; le domaine de marque retenu reste standup-bureau.com.

### Q3. Périmètre V1

**Réponse agent** : V1 = cocons complets prioritaires (mère + ≥ 2 filles), classés par volume × KD × rôle.

| Priorité | Cocon | Pages | Volume cumulé approx. | Raison |
| --- | --- | --- | --- | --- |
| P0 | Accueil + pages légales | home, méthodologie, à-propos, affiliation, mentions, contact | 27 100 | Hub + E-E-A-T |
| P1 | Matières et technologies | p1, p2, p3, p4, p5 | 4 660 | Quick wins électrique / manuel |
| P2 | Marques et modèles | p6, p7, p8, p9, p10, p11, p30 (BUT déplacé) | ~4 540 | Ikea 2 900, Amazon 590 |
| P3 | Guides d’achat | p12, p13, p14, p15, p16 | 1 570 | Intent « meilleur » |
| P4 | Tailles et formats | p17 à p22 | 1 260 | Décision dimension |
| P5 | Produits associés | p27, p26 (cadre déplacé) | ~1 090 | Pied 880 |
| P6 | Ergonomie | p28, p29 | ~480 | Ergonomique 480 |
| P7 | Profils | p23, p24 (gamer+gaming fusionnés), p25 | ~640 | Personas ciblés |

**Objection** : tout publier d’un coup dilue la qualité rédactionnelle. **Tient partiellement** : la V1 livrée ici construit le site Astro entier pour garder l’étanchéité du cocon, avec contenus sourcés et honnêtes ; les pages à faible volume restent plus courtes.

### Q4. Signature et expérience

**Réponse agent** : aucun auteur inventé, aucune expérience simulée. Page Méthodologie qui explique : synthèse de fiches fabricants, avis agrégés (reformulés), sources institutionnelles (INRS, Cochrane). Risque E-E-A-T noté : absence d’expérience directe. Mitigation : transparence, sources croisées, critères publics, pas de « nous avons testé ».

**Objection** : sans visage d’expert, Google peut juger le site « thin affiliate ». **Tient** : d’où la page Méthodologie, l’annonce d’affiliation, et des critères de choix visibles avant tout lien sponsorisé.

### Q5. Tests produits

**Réponse porteur (contrainte)** : non. Évaluation par synthèse des retours utilisateurs, sans citation mot à mot.

### Q6. Sources fiables

**Réponse agent** (liste à consulter avant rédaction) :

1. INRS : travail sur écran (ED 6538), postures sédentaires, prévention.
2. Cochrane : revue Shrestha 2018 sur les interventions pour réduire l’assise au travail.
3. Fiches et catalogues fabricants / enseignes : IKEA, FlexiSpot, Songmics, Desktronic, Kqueo (caractéristiques, pas d’avis inventés).
4. Normes / repères : plages de hauteur courantes indiquées par fabricants ; toujours présentées comme données fabricant.
5. Associations / presse conso : UFC-Que Choisir, 60 Millions (si article existent ; sinon ne pas inventer).

Règle : chiffre = ≥ 2 sources indépendantes, ou estimation clairement étiquetée.

**Objection** : les fiches fabricants sont biaisées. **Tient** : elles ne servent qu’aux specs ; les bénéfices santé viennent d’INRS/Cochrane.

### Q7. Profils visiteurs

**Réponse porteur (contrainte)** : indépendants / télétravail / bureau, 35–55 ans, grands, problèmes de dos.

Enrichi dans `personas.md` à partir des requêtes.

### Q8. Différenciation vs top 10

**Réponse agent** (après lecture SERP) :

| Concurrent | Ce qu’il fait | Manque pour nos personas |
| --- | --- | --- |
| Desktronic / FlexiSpot / Kqueo | Catalogue marque | Pas de comparatif multi-marques honnête ni critères transverses |
| IKEA | Catalogue + promesse bien-être | Surpromet calories / posture ; peu d’aide « pour qui / pas pour qui » |
| Conforama | Listing prix | Aucun critère ergonomique ni taille pour grands |

Questions sans bonne réponse :

- Grand (1m85+) : quelle plage de hauteur minimale / maximale ? (IKEA et marques listent mal pour ce persona)
- Dos : le bureau soigne-t-il vraiment ? (Cochrane dit : réduction d’assise oui, bénéfices santé incertains ; aucun concurrent top 10 ne le dit clairement)
- Électrique vs manuel vs manivelle : tableau de critères (bruit, vitesse, panne, prix) absent des catalogues

Différence retenue : verdicts par besoin, honnêteté scientifique, tableaux de critères, pages « pour qui / pas pour qui ».

### Q9. Ton

**Réponse porteur (contrainte)** : vouvoiement, simple d’accès, professionnel.

### Q10. À ne pas imiter

**Réponse agent** :

- Héros centré + 3 cartes avantages
- Dégradé violet / bleu générique, badges « Meilleur choix » sans critères
- Top 10 sans grille de notation
- Promesses minceur / calories (IKEA)
- Méga-menu, carrousels, comptes à rebours
- Listes à puces systématiques et tics IA (« Dans un monde où… »)

### Q11. Design

**Réponse agent** : voir `design-system.md`. Direction retenue : « Atelier clair » (bois clair, métal graphite, lumière de journée télétravail). Deux directions écartées documentées.

### Q12. Technique

**Réponse porteur (contrainte)** : Astro, hébergement Cloudflare, français.

Stack retenue : Astro (static), CSS custom tokens (pas de kit UI générique), déploiement Cloudflare Pages.

---

## 1.2 Arbitrages Jev

| # | Sujet | Décision | Raison |
| --- | --- | --- | --- |
| 1 | Étape « électrique » | **Comparer** | Formats SERP = guides / listes de types ; le lecteur tranche électrique vs alternatives |
| 2 | Lien ikea → pied | **Refusé** | < 75 % ; aucune phrase naturelle obligatoire |
| 3 | Type « pied » | **Produits associés** | Kit de pieds / base, pas une matière |
| 4 | Étape « pied » | **Choisir et acheter** | Intention d’acheter une base ; page orientée modèles et critères d’achat |
| 5 | Lien électrique → pied | **Refusé** | < 75 % |
| 6 | Étape « manuel » | **Comparer** | Même logique que électrique |
| 7 | Lien ikea → manuel | **Refusé** | < 75 % |
| 8 | Lien pied → manuel | **Refusé** | < 75 % |
| 9 | Type « ergonomique » | **Problèmes / besoins** (silo renommé Ergonomie) | L’angle répond au besoin dos / posture, pas à une « autre » curiosité |
| 10 | Étape « BUT » | **Comparer** | Enseigne à évaluer vs IKEA / Amazon ; page déplacée dans Marques |
| 11 | Étape « professionnel » | **Résoudre un problème** | Besoin bureau d’entreprise / télétravail pro |
| 12 | gaming / gamer | **Fusion** | Cannibalisation (même volume, mêmes SERP) ; une page `bureau-assis-debout-gamer` couvre aussi « gaming » |
| 13 | Type « professionnel » | **Profils d’utilisateurs** | Conservé |
| 14 | Étape « cadre » | **Choisir et acheter** + **déplacé vers Produits associés** | « Cadre » = structure métallique du bureau, pas le métier cadre |

Détail des déplacements : `architecture.md`.

---

## 1.3 Contre-interrogatoire

### 1. Réponse IA générique vs notre écart

IA générique : site violet, 3 cartes, Top 10, « véritable allié du bien-être », méga-menu, faux tests.

Écarts :

- Design « Atelier clair » lié au télétravail réel
- Critères avant liens
- Cochrane / INRS cités sans promesse miracle
- Cocon étanche, pas de méga-menu
- Pas de tirets cadratin, pas de tics IA

### 2. Questions personas sans réponse dans le top 10

- **Acheteur dos / télétravail** : « Est-ce que ça soulage vraiment mon dos ? » → IKEA promet trop ; Desktronic vend sans nuance. Notre page ergonomie + home répondent avec Cochrane + INRS.
- **Grand 35–55** : « Quelle hauteur max pour 1m90 ? » → catalogues sans tableau taille → pages tailles.
- **Gamer** : Desktronic / IKEA gaming listent RGB ; manquent stabilité PC lourd + câble management → page gamer fusionnée.

### 3. Pages inutiles / fusions

- **p31 gaming + p24 gamer** : fusionnés (cannibalisation).
- **p28 hub « autres angles »** : renommé « Ergonomie » ; BUT sorti vers Marques.
- **p26 cadre** : retiré des profils → Produits associés.
- Pages mères sans mot-clé : requêtes hub choisies (voir architecture).

### 4. Liens inutiles / manquants

- Retirés : transverses sous 75 % (ikea→pied, électrique→pied, etc.).
- Manquant ajouté : depuis home vers méthodologie (footer seulement, pas maillage cocon) ; depuis électrique vers tailles 160x80 reste dans silo via p3.

### 5. Affirmations non sourçables (retirées)

- « Brûler des calories significatives » (contredit Cochrane)
- « Guérit le mal de dos »
- Pourcentages inventés de satisfaction
- « Meilleur bureau 2026 » sans grille

### 6. Élément design trop générique remplacé

Écarté : hero plein écran stock photo + overlay sombre. Remplacé : bandeau matière (texture plateau chêne / structure acier) + typo display « Instrument Serif » / texte « Source Sans 3 », couleur graphite + vert sapin (plante de bureau / posture).

### 7. Page la plus faible pour un rater Google

Risque : page Conforama ou BUT purement catalogue. Correction : chaque page enseigne ajoute grille « service / SAV / gamme / prix constatés / pour qui », synthèse d’avis reformulée, et renvoi vers critères ergonomiques.