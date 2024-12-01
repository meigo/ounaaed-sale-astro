<script lang="ts">
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import IconChevronsDown from "./icons/IconChevronsDown.svelte";

  let { data } = $props();
  let open = $state(false);
  let openDuration = $state(300);

  let element: HTMLElement;

  // const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function onOpenClick() {
    open = true;
    const res = await fetch(`/counter.php?add=true`);
    const count = await res.text();

    // await sleep(openDuration);
    // element.scrollIntoView();
  }
</script>

<div class="group relative pt-4" bind:this={element}>
  <!-- BUTTON-->
  {#if !open}
    <button type="button" onclick={onOpenClick} class="z-1 absolute w-full h-full opacity-0" aria-label="Ava kontaktinfo"></button>
  {/if}

  <div
    class="flex flex-col w-full p-4 items-center rounded-lg text-center text-ka-light bg-ka-accent outline-none"
    class:group-hover:opacity-90={!open}>
    <div class="text-xl lg:text-2xl font-bold">
      Kui sa tunned, et just sina võiksid jätkata Kadastiku Õunaaia edulugu, siis ära lase seda unikaalset võimalust mööda. Võta minuga
      isiklikult ühendust juba täna.
    </div>

    <!-- CHEVRON-->
    <div class:invisible={open}>
      <IconChevronsDown class="mt-4 w-12 animate-bounce" />
    </div>

    <!-- CONTACT INFO -->
    {#if open}
      <div class="-mt-12" id="faq-0" transition:slide={{ duration: openDuration, easing: quintOut, axis: "y" }}>
        <div class="text-base leading-7 p-2 text-ka-dark">
          <div>Riho Kadastik</div>
          <div>Kadastiku Õunaaed asutaja ja omanik</div>
          <div class="pointer-events-auto">e-mail: <a href="mailto:riho@ounaaed.ee">riho@ounaaed.ee</a></div>
          <div>tel. 56 234 176</div>
        </div>
      </div>
    {/if}
  </div>
</div>
