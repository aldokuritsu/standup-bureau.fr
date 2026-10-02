/**
 * Paires de comparaison (ordre alphabétique des slugs pour une URL stable).
 */
import { products, type Product } from './products';

export function pairKey(a: string, b: string): string {
  return [a, b].sort().join('-vs-');
}

export function parsePairKey(key: string): [string, string] | null {
  const parts = key.split('-vs-');
  if (parts.length !== 2) return null;
  const [a, b] = parts;
  if (!a || !b || a === b) return null;
  return [a, b];
}

export function allComparePairs(): { key: string; a: Product; b: Product }[] {
  const out: { key: string; a: Product; b: Product }[] = [];
  for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
      const a = products[i];
      const b = products[j];
      const [first, second] = a.slug < b.slug ? [a, b] : [b, a];
      out.push({ key: pairKey(first.slug, second.slug), a: first, b: second });
    }
  }
  return out;
}

export function compareUrl(slugA: string, slugB: string): string {
  if (slugA === slugB) return '/bureaux/comparer/';
  return `/bureaux/comparer/${pairKey(slugA, slugB)}/`;
}
