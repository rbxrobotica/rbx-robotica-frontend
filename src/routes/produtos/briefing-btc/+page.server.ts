import { loadPage } from '$lib/server/content/gateway';
import { detectLocaleFromUrl } from '$lib/i18n/locale';
import { parseSubscribeParams } from '$lib/briefing/catalog.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
  const locale = detectLocaleFromUrl(url);
  const page = await loadPage('briefing-btc', locale);
  const subscribe = parseSubscribeParams(url.searchParams);
  return { locale, page, subscribe };
};
