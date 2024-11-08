<script>
  import { onMount } from "svelte";
  let { label = ">>", url = "", back = false } = $props();

  let js = $state(false);

  onMount(async () => {
    js = true;
  });

  function next() {
    // Don't record image pages to history
    if (back) history.back();
    else window.location.replace(url);
  }
</script>

<div class="m-4 pointer-events-auto text-white text-3xl font-gelica">
  {#if js}
    <button type="button" onclick={next}>{label}</button>
  {:else}
    <a href={url} class="cursor-pointer">{label}</a>
  {/if}
</div>
