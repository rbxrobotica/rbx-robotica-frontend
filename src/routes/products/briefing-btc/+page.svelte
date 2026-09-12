<script lang="ts">
  import { untrack } from 'svelte';
  import ContentPage from '$components/ContentPage.svelte';
  import BriefingPlanSummary from '$components/BriefingPlanSummary.svelte';
  import BriefingSubscribeModal from '$components/BriefingSubscribeModal.svelte';
  import { t } from '$lib/i18n/translate';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  let subscribeOpen = $state(untrack(() => data.subscribe.open));
</script>

<ContentPage
  page={data.page}
  fallbackTitle={t(data.locale, 'briefing.headline')}
  fallbackLead={t(data.locale, 'briefing.body')}
  locale={data.locale}
/>

<section class="subscribe">
  <BriefingPlanSummary
    locale={data.locale}
    onopen={() => (subscribeOpen = true)}
    source="briefing-btc-product"
  />
</section>

<BriefingSubscribeModal
  locale={data.locale}
  bind:open={subscribeOpen}
  initialAudience={data.subscribe.audience}
  initialBilling={data.subscribe.billing}
  source="briefing-btc-product"
/>

<style>
  .subscribe {
    max-width: var(--prose-w);
    margin: var(--s-7) 0 var(--s-8);
  }
</style>
