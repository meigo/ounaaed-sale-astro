<script>
  import { onMount } from "svelte";

  let { label, href = "", back = false } = $props();

  let js = $state(false);

  onMount(async () => {
    js = true;
  });
</script>

<div class="pointer-events-auto text-white hover:scale-110">
  {#if js && back}
    <button type="button" class="p-4 text-white" onclick={() => history.back()}>
      <slot />
    </button>
  {:else}
    <a {href} class="cursor-pointer p-4 text-white" data-astro-history="replace">
      <slot />
    </a>
  {/if}
</div>
