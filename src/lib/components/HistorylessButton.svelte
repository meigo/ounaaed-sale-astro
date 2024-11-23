<script>
  import { onMount } from "svelte";
  let { label = ">>", href = "", back = false } = $props();

  let js = $state(false);

  onMount(async () => {
    js = true;
  });
</script>

<div class="m-4 pointer-events-auto text-white text-3xl font-gelica">
  {#if js && back}
    <button type="button" onclick={() => history.back()}>{label}</button>
  {:else}
    <a {href} class="cursor-pointer" data-astro-history="replace">{label}</a>
  {/if}
</div>
