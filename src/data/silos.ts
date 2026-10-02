export type Crumb = { label: string; href?: string };

export type SiloLink = { label: string; href: string };

export type SiloId =
  | 'matieres'
  | 'marques'
  | 'guides'
  | 'tailles'
  | 'profils'
  | 'produits'
  | 'ergonomie'
  | 'fiches';

export type IconKey =
  | 'bolt'
  | 'tag'
  | 'award'
  | 'ruler'
  | 'user'
  | 'frame'
  | 'posture'
  | 'layers';

export const silos: Record<
  SiloId,
  { label: string; hub: string; icon: IconKey; links: SiloLink[] }
> = {
  matieres: {
    icon: 'bolt',
    label: 'Matières et technologies',
    hub: '/matieres-et-technologies/',
    links: [
      { label: 'Matières et technologies', href: '/matieres-et-technologies/' },
      {
        label: 'Bureau électrique',
        href: '/matieres-et-technologies/bureau-assis-debout-electrique/',
      },
      {
        label: 'Bureau manuel',
        href: '/matieres-et-technologies/bureau-assis-debout-manuel/',
      },
      {
        label: 'Bureau à manivelle',
        href: '/matieres-et-technologies/bureau-assis-debout-manivelle/',
      },
    ],
  },
  marques: {
    icon: 'tag',
    label: 'Marques et modèles',
    hub: '/marques-et-modeles/',
    links: [
      { label: 'Marques et modèles', href: '/marques-et-modeles/' },
      { label: 'IKEA', href: '/marques-et-modeles/bureau-assis-debout-ikea/' },
      { label: 'Amazon', href: '/marques-et-modeles/bureau-assis-debout-amazon/' },
      {
        label: 'Conforama',
        href: '/marques-et-modeles/bureau-assis-debout-conforama/',
      },
      {
        label: 'Songmics',
        href: '/marques-et-modeles/songmics-bureau-assis-debout/',
      },
      {
        label: 'FlexiSpot',
        href: '/marques-et-modeles/bureau-assis-debout-flexispot/',
      },
      { label: 'BUT', href: '/marques-et-modeles/bureau-assis-debout-but/' },
    ],
  },
  guides: {
    icon: 'award',
    label: 'Guides d’achat',
    hub: '/meilleur-bureau-assis-debout/',
    links: [
      {
        label: 'Meilleur bureau assis-debout',
        href: '/meilleur-bureau-assis-debout/',
      },
      {
        label: 'Avec rangement',
        href: '/meilleur-bureau-assis-debout/bureau-assis-debout-avec-rangement/',
      },
      {
        label: 'En bois',
        href: '/meilleur-bureau-assis-debout/bureau-assis-debout-bois/',
      },
      {
        label: 'Pas cher',
        href: '/meilleur-bureau-assis-debout/bureau-assis-debout-pas-cher/',
      },
      {
        label: 'Design',
        href: '/meilleur-bureau-assis-debout/bureau-assis-debout-design/',
      },
    ],
  },
  tailles: {
    icon: 'ruler',
    label: 'Tailles et formats',
    hub: '/tailles-et-formats/',
    links: [
      { label: 'Tailles et formats', href: '/tailles-et-formats/' },
      {
        label: 'Bureau d’angle',
        href: '/tailles-et-formats/bureau-assis-debout-angle/',
      },
      {
        label: '160×80',
        href: '/tailles-et-formats/bureau-assis-debout-160x80/',
      },
      {
        label: '180×80',
        href: '/tailles-et-formats/bureau-assis-debout-180x80/',
      },
      {
        label: '120×60',
        href: '/tailles-et-formats/bureau-assis-debout-120x60/',
      },
      {
        label: '140×70',
        href: '/tailles-et-formats/bureau-assis-debout-140x70/',
      },
    ],
  },
  profils: {
    icon: 'user',
    label: 'Profils d’utilisateurs',
    hub: '/profils-d-utilisateurs/',
    links: [
      { label: 'Profils d’utilisateurs', href: '/profils-d-utilisateurs/' },
      {
        label: 'Gamer / gaming',
        href: '/profils-d-utilisateurs/bureau-assis-debout-gamer/',
      },
      {
        label: 'Professionnel',
        href: '/profils-d-utilisateurs/bureau-assis-debout-professionnel/',
      },
    ],
  },
  produits: {
    icon: 'frame',
    label: 'Produits associés',
    hub: '/produits-associes/',
    links: [
      { label: 'Produits associés', href: '/produits-associes/' },
      {
        label: 'Pieds de bureau',
        href: '/produits-associes/pied-bureau-assis-debout/',
      },
      {
        label: 'Cadre de bureau',
        href: '/produits-associes/cadre-bureau-assis-debout/',
      },
    ],
  },
  ergonomie: {
    icon: 'posture',
    label: 'Ergonomie',
    hub: '/ergonomie/',
    links: [
      { label: 'Ergonomie', href: '/ergonomie/' },
      {
        label: 'Bureau ergonomique',
        href: '/ergonomie/bureau-ergonomique-assis-debout/',
      },
    ],
  },
  fiches: {
    icon: 'layers',
    label: 'Modèles à comparer',
    hub: '/bureaux/',
    links: [
      { label: 'Tous les modèles', href: '/bureaux/' },
      { label: 'Comparer deux modèles', href: '/bureaux/comparer/' },
      {
        label: 'Songmics LSD026',
        href: '/bureaux/songmics-lsd026-160x70/',
      },
      { label: 'ErGear 160×80', href: '/bureaux/ergear-160x80/' },
      { label: 'FlexiSpot E6', href: '/bureaux/flexispot-e6-cadre/' },
      {
        label: 'MAIDeSITe T2 Pro Plus',
        href: '/bureaux/maidesite-t2-pro-plus/',
      },
      {
        label: 'Songmics cadre dual',
        href: '/bureaux/songmics-cadre-double-moteur/',
      },
    ],
  },
};

export { amazonSearch, amazonProductUrl, AMAZON_TAG } from './products';
