<script>
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let { data } = $props();
  let open = $state(false);
</script>

<div class="pt-4">
  <dt>
    <button
      type="button"
      class="flex w-full p-2 items-start justify-between text-left hover:text-neutral-600 focus:bg-neutral-200 outline-none"
      aria-controls="faq-0"
      aria-expanded="false"
      onclick={() => {
        open = !open;
      }}>
      <span class="text-xl lg:text-2xl font-bold">
        Kui sa tunned, et just sina võiksid jätkata Kadastiku Õunaaia edulugu, siis ära lase seda unikaalset võimalust mööda. Võta minuga
        isiklikult ühendust juba täna.
      </span>
      <span class="ml-6 flex h-7 items-center">
        {#if !open}
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
          </svg>
        {:else}
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"></path>
          </svg>
        {/if}
      </span>
    </button>
  </dt>

  {#if open}
    <div class="mt-2 mb-6 pr-12" id="faq-0" transition:slide={{ duration: 300, easing: quintOut, axis: "y" }}>
      <ul class="text-base leading-7 p-2 list-none">
        <li>Riho Kadastik</li>
        <li>Kadastiku Õunaaed asutaja ja omanik</li>
        <li>e-mail: riho@ounaaed.ee</li>
        <li>tel. 56 234 176</li>
      </ul>
    </div>
  {/if}
</div>
