import { detectLocaleFromUrl } from '$lib/i18n/locale';
import { loadPage } from '$lib/server/content/gateway';
import { parseSubscribeParams } from '$lib/briefing/catalog.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
  const locale = detectLocaleFromUrl(url);
  const page = await loadPage('briefing-btc', locale);
  // `?subscribe=1` (also `assinar=1`), `audience=team` and `billing=monthly`
  // open and preset the subscription modal, so the chat assistant and
  // campaigns can link straight into it. Rendered server-side when open.
  const subscribe = parseSubscribeParams(url.searchParams);
  return { page, locale, subscribe };
};
