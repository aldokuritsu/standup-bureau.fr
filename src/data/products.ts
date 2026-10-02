/**
 * Modèles sélectionnés pour le comparatif (marché FR).
 * Notes / volumes d’avis : relevé marketplace le 2 oct. 2026 (évolutifs).
 * Images : CDN Amazon (m.media-amazon.com), jamais réhébergées.
 */

export type ProductKind = 'bureau-complet' | 'cadre';

export interface Product {
  slug: string;
  asin: string;
  name: string;
  shortName: string;
  brand: string;
  kind: ProductKind;
  /** Identifiant image CDN Amazon (`…/images/I/{id}…`) */
  imageId: string;
  /** Note moyenne marketplace au moment de la sélection */
  rating: number;
  /** Nombre d’évaluations au moment de la sélection (0 = variable selon déclinaison) */
  ratingCount: number;
  ratingCheckedAt: string;
  /** Accroche courte pour listes */
  blurb: string;
  /** Plage de hauteur constructeur (cm), hors ou avec plateau selon fiche */
  heightRange: string;
  loadKg: number;
  /** Dimensions plateau ou plage pour cadres */
  size: string;
  memories: string;
  noise: string;
  motors: string;
  bestFor: string[];
  notFor: string[];
  strengths: string[];
  watchouts: string[];
  /** Synthèse d’avis reformulée (pas de citation mot à mot) */
  reviewSynthesis: string;
  relatedGuideHrefs: { href: string; label: string }[];
}

export const AMAZON_TAG = 'standup-bureau-21';

export function amazonProductUrl(asin: string): string {
  return `https://www.amazon.fr/dp/${asin}?tag=${AMAZON_TAG}`;
}

export function amazonSearch(query: string): string {
  const q = encodeURIComponent(query);
  return `https://www.amazon.fr/s?k=${q}&tag=${AMAZON_TAG}`;
}

/** Image officielle via CDN Amazon (hotlink, pas de copie locale). */
export function amazonImageUrl(
  imageId: string,
  size: 'sm' | 'md' | 'lg' = 'md',
): string {
  const sl = size === 'sm' ? 'SL300' : size === 'lg' ? 'SL1500' : 'SL500';
  const id = encodeURIComponent(imageId).replace(/%2B/g, '+');
  return `https://m.media-amazon.com/images/I/${id}._AC_${sl}_.jpg`;
}

export const products: Product[] = [
  {
    slug: 'songmics-lsd026-160x70',
    asin: 'B0C65P5M3D',
    name: 'Songmics LSD026 : bureau électrique 160×70',
    shortName: 'Songmics LSD026',
    brand: 'Songmics',
    kind: 'bureau-complet',
    imageId: '71CVAC5lUBL',
    rating: 4.3,
    ratingCount: 5279,
    ratingCheckedAt: '2 oct. 2026',
    blurb:
      'Bureau complet très demandé : plateau 160×70, 4 mémoires, charge 70 kg. Bon point d’entrée si le poste reste léger.',
    heightRange: '72–120 cm (avec plateau)',
    loadKg: 70,
    size: 'Plateau 160×70 cm',
    memories: '4 hauteurs',
    noise: '< 48–50 dB (annonce fabricant)',
    motors: 'Moteur électrique (fiche LSD026)',
    bestFor: [
      'Premier bureau assis-debout prêt à monter',
      'Un ou deux écrans sans tour sur le plateau',
      'Budget maîtrisé avec pack plateau + cadre',
    ],
    notFor: [
      'Setup lourd (plusieurs écrans + bras + tour) au-delà de 70 kg',
      'Grands utilisateurs qui ont besoin d’une course plus haute',
    ],
    strengths: [
      'Volume d’avis très élevé : signaux récurrents plus lisibles',
      'Plateau inclus, format bi-écran courant',
      'Mémoires et passages câbles annoncés sur la fiche',
    ],
    watchouts: [
      'Charge utile 70 kg : additionnez écrans, bras et périphériques',
      'Stabilité en position haute : point à vérifier dès la réception',
      'Hauteur max 120 cm : mesurez votre coude debout avant d’acheter',
    ],
    reviewSynthesis:
      'Les acheteurs apprécient surtout le rapport prix / plateau inclus et la simplicité des mémoires. Les réserves portent souvent sur un léger balancement en hauteur maximale une fois le plateau chargé, et sur un moteur qui ralentit si l’on dépasse confortablement la charge utile. Synthèse reformulée, pas un test Standup Bureau.',
    relatedGuideHrefs: [
      {
        href: '/meilleur-bureau-assis-debout/bureau-assis-debout-pas-cher/',
        label: 'Guide bureau pas cher',
      },
      {
        href: '/marques-et-modeles/songmics-bureau-assis-debout/',
        label: 'Marque Songmics',
      },
      {
        href: '/tailles-et-formats/bureau-assis-debout-160x80/',
        label: 'Formats proches du 160 cm',
      },
    ],
  },
  {
    slug: 'ergear-160x80',
    asin: 'B0D9MCZSCS',
    name: 'ErGear : bureau électrique 160×80',
    shortName: 'ErGear 160×80',
    brand: 'ErGear',
    kind: 'bureau-complet',
    imageId: '61QPzufh5tL',
    rating: 4.5,
    ratingCount: 763,
    ratingCheckedAt: '2 oct. 2026',
    blurb:
      'Bureau complet 160×80, charge 100 kg, moteur brushless annoncé. Plus de profondeur que beaucoup d’entrées de gamme.',
    heightRange: 'selon fiche modèle (vérifier min/max sur Amazon)',
    loadKg: 100,
    size: 'Plateau 160×80 cm',
    memories: 'Mémoires (voir panneau sur fiche)',
    noise: 'Fonctionnement silencieux annoncé',
    motors: 'Moteur brushless (annonce fabricant)',
    bestFor: [
      'Bi-écran avec besoin de 80 cm de profondeur',
      'Poste un peu plus chargé que l’entrée de gamme 70 kg',
    ],
    notFor: [
      'Qui veut uniquement un cadre pour réutiliser un plateau existant',
      'Qui exige une plage de hauteur documentée pour très grands gabarits sans vérifier la fiche',
    ],
    strengths: [
      'Profondeur 80 cm alignée avec le repère INRS pour le travail sur écran',
      'Charge 100 kg plus confortable qu’un pack 70 kg',
      'Note Amazon solide avec plusieurs centaines d’avis',
    ],
    watchouts: [
      'Confirmez la plage de hauteur exacte sur la fiche au moment de l’achat',
      'Accessoires (passe-câbles, crochets) : contenu du colis à lire ligne à ligne',
    ],
    reviewSynthesis:
      'Les retours soulignent souvent la surface de travail et le confort du moteur. Les points de vigilance concernent le montage (temps, alignement) et la stabilité une fois les bras d’écran fixés. Synthèse reformulée à partir des avis Amazon.',
    relatedGuideHrefs: [
      {
        href: '/tailles-et-formats/bureau-assis-debout-160x80/',
        label: 'Guide format 160×80',
      },
      {
        href: '/matieres-et-technologies/bureau-assis-debout-electrique/',
        label: 'Bureaux électriques',
      },
    ],
  },
  {
    slug: 'flexispot-e6-cadre',
    asin: 'B0F83WTMN9',
    name: 'FlexiSpot E6 : cadre électrique double moteur',
    shortName: 'FlexiSpot E6',
    brand: 'FlexiSpot',
    kind: 'cadre',
    imageId: '61iM-1eGmJL',
    rating: 4.6,
    ratingCount: 0,
    ratingCheckedAt: '2 oct. 2026',
    blurb:
      'Cadre 3 colonnes, double moteur, charge jusqu’à 160 kg, plage 58–123 cm. Pour monter votre propre plateau.',
    heightRange: '58–123 cm (cadre)',
    loadKg: 160,
    size: 'Largeur de cadre réglable (plateaux ~120–180 × 60–80 cm typiques)',
    memories: 'Mémoires + contrôle Flex-Pad (pack selon offre)',
    noise: '< 50 dB (annonce fabricant)',
    motors: 'Double moteur, 3 colonnes',
    bestFor: [
      'Plateau déjà choisi ou sur mesure',
      'Postes lourds (multi-écrans, bras, tours au sol + périphériques)',
      'Grands utilisateurs attentifs à la course',
    ],
    notFor: [
      'Qui veut un pack plateau inclus sans bricolage',
      'Budget strict entrée de gamme',
    ],
    strengths: [
      'Charge 160 kg : marge réelle pour un poste chargé',
      'Triple colonne : meilleure tenue en hauteur qu’un cadre basique',
      'Marque spécialisée hauteur variable, SAV plus identifiable',
    ],
    watchouts: [
      'Le prix du plateau s’ajoute au cadre',
      'Vérifiez l’ASIN exact de la variante (couleur, pack Flex-Pad)',
      'Le nombre d’avis affiché varie selon la déclinaison Amazon',
    ],
    reviewSynthesis:
      'Sur les cadres FlexiSpot de cette famille, les acheteurs insistent sur la stabilité et la puissance du double moteur. Les critiques portent surtout sur le temps de montage et sur le choix du plateau (épaisseur, fixation). Note moyenne constatée autour de 4,6/5 sur les fiches E6 consultées ; le compteur d’avis dépend de la variante.',
    relatedGuideHrefs: [
      {
        href: '/produits-associes/cadre-bureau-assis-debout/',
        label: 'Guide cadres',
      },
      {
        href: '/marques-et-modeles/bureau-assis-debout-flexispot/',
        label: 'Marque FlexiSpot',
      },
    ],
  },
  {
    slug: 'maidesite-t2-pro-plus',
    asin: 'B087JF3B5S',
    name: 'MAIDeSITe T2 Pro Plus : cadre double moteur 160 kg',
    shortName: 'MAIDeSITe T2 Pro Plus',
    brand: 'MAIDeSITe',
    kind: 'cadre',
    imageId: '71yvL4pLzcL',
    rating: 4.7,
    ratingCount: 1790,
    ratingCheckedAt: '2 oct. 2026',
    blurb:
      'Cadre 3 colonnes très bien noté (4,7/5, ~1 790 avis) : 62–125 cm, double moteur, charge 160 kg.',
    heightRange: '62–125 cm (cadre)',
    loadKg: 160,
    size: 'Cadre extensible ~108–180 cm (plateaux adaptés)',
    memories: '4 mémoires',
    noise: 'Annoncé plus silencieux que beaucoup de cadres mono-moteur',
    motors: 'Double moteur, ~40 mm/s (annonce)',
    bestFor: [
      'Cadre performant sans forcément passer par FlexiSpot',
      'Plateau large (jusqu’à environ 180 cm selon entraxe)',
    ],
    notFor: [
      'Pack clé en main avec plateau fourni',
      'Qui refuse tout montage DIY',
    ],
    strengths: [
      'Note et volume d’avis parmi les plus solides du rayon cadres',
      'Charge 160 kg et double moteur',
      'Plage de hauteur utile pour grands et petits gabarits',
    ],
    watchouts: [
      'Sans plateau : budgétez bois ou panneau + visserie adaptée',
      'Contrôlez la compatibilité profondeur 60–80 cm',
    ],
    reviewSynthesis:
      'Les avis mettent en avant la fluidité du double moteur et la solidité perçue. Les plaintes récurrentes, quand elles existent, concernent la documentation de montage et des délais SAV variables selon le vendeur marketplace. Synthèse reformulée.',
    relatedGuideHrefs: [
      {
        href: '/produits-associes/cadre-bureau-assis-debout/',
        label: 'Guide cadres',
      },
      {
        href: '/produits-associes/pied-bureau-assis-debout/',
        label: 'Pieds et bases',
      },
    ],
  },
  {
    slug: 'songmics-cadre-double-moteur',
    asin: 'B09T6XPMKF',
    name: 'Songmics : cadre électrique double moteur',
    shortName: 'Songmics cadre dual',
    brand: 'Songmics',
    kind: 'cadre',
    imageId: '511bPtu+bmL',
    rating: 4.8,
    ratingCount: 418,
    ratingCheckedAt: '2 oct. 2026',
    blurb:
      'Cadre seul très bien noté (environ 4,8/5) : 69–115 cm, charge 120 kg, 4 mémoires, longueur de traverse réglable.',
    heightRange: '69–115 cm (cadre)',
    loadKg: 120,
    size: 'Traverse ~107,5–175 cm (plateaux 120–200 × 60–80 cm typiques)',
    memories: '4 hauteurs',
    noise: '< 48 dB (annonce fabricant)',
    motors: 'Double moteur, ~25 mm/s',
    bestFor: [
      'Réutiliser un plateau existant',
      'Bon rapport note / prix sur un cadre dual motor',
    ],
    notFor: [
      'Très grands gabarits : hauteur max 115 cm (cadre) peut être juste',
      'Postes au-delà de 120 kg tout compris',
    ],
    strengths: [
      'Meilleure note de notre sélection au moment du relevé',
      'Double moteur et anti-collision annoncés',
      'Roulettes souvent livrées (selon pack) pour déplacer le bureau',
    ],
    watchouts: [
      'Course plus courte que FlexiSpot E6 / MAIDeSITe T2 (max 115 cm)',
      'Vérifiez la variante ASIN (couleur, Type-C, pack)',
    ],
    reviewSynthesis:
      'Les acheteurs soulignent le silence relatif et la stabilité pour un cadre à ce tarif. Les réserves portent sur la hauteur maximale pour les personnes très grandes et sur la qualité du plateau lorsqu’il est acheté à part. Synthèse reformulée.',
    relatedGuideHrefs: [
      {
        href: '/marques-et-modeles/songmics-bureau-assis-debout/',
        label: 'Marque Songmics',
      },
      {
        href: '/produits-associes/cadre-bureau-assis-debout/',
        label: 'Guide cadres',
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productsByBrand(brand: string): Product[] {
  return products.filter(
    (p) => p.brand.toLowerCase() === brand.toLowerCase(),
  );
}
