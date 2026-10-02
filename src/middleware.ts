import { defineMiddleware } from 'astro:middleware';

/**
 * Typographie française appliquée au HTML généré :
 * espace insécable avant « : » et à l’intérieur des guillemets, espace fine
 * insécable avant « ; ! ? ». Les balises, scripts et styles ne sont pas touchés.
 */
const NBSP = ' ';
const NNBSP = ' ';

function frenchSpacing(text: string): string {
  return text
    .replace(/[ \t\n\r]+:(?=[\s<]|$)/g, `${NBSP}:`)
    .replace(/[ \t\n\r]+([;!?])/g, `${NNBSP}$1`)
    .replace(/«[ \t\n\r]+/g, `«${NBSP}`)
    .replace(/[ \t\n\r]+»/g, `${NBSP}»`);
}

function typeset(html: string): string {
  const parts = html.split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>)/g);
  return parts.map((part) => (part.startsWith('<') ? part : frenchSpacing(part))).join('');
}

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  const type = response.headers.get('content-type') ?? '';
  if (!type.includes('text/html')) return response;
  const html = await response.text();
  return new Response(typeset(html), {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
});
