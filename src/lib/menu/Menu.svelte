<script>
  import { fly, scale } from "svelte/transition";
  import { quintOut, sineOut, sineIn } from "svelte/easing";

  import BurgerIcon from "@assets/svg/BurgerIcon.svelte";
  import XIcon from "@assets/svg/XIcon.svelte";

  let { data } = $props();

  let isOpen = $state(false);

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeIfOpen() {
    if (isOpen) isOpen = false;
  }

  let scrollY = $state(0);
  let innerWidth = $state(0);

  let bigMenuHidden = $derived(innerWidth < 1350 || scrollY > 350);
</script>

<svelte:window bind:scrollY bind:innerWidth onscroll={closeIfOpen} />

<nav class="fixed z-10 w-full">
  {#if !bigMenuHidden}
    <div
      class="absolute w-full z-3"
      in:fly={{ delay: 0, duration: 400, opacity: 100, easing: sineOut, y: -50 }}
      out:fly={{ delay: 0, duration: 400, opacity: 100, easing: sineIn, y: -50 }}>
      <div class="flex items-center justify-center w-full px-4 py-4 bg-red-400 shadow-md">
        <div class="flex flex-col items-center sm:flex-row sm:ml-10 sm:space-x-4">
          {#each data as { title, target }}
            <a href={target} class="px-3 menu-item">{title}</a>
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <!-- HAMBURGER MENU BUTTON -->
  <!-- {#if bigMenuHidden}
    <div
      class="absolute left-0 w-16 h-16 z-2"
      in:fly={{ delay: 200, duration: 400, opacity: 100, easing: sineOut, y: -50 }}
      out:fly={{ delay: 0, duration: 400, opacity: 100, easing: sineIn, y: -50 }}>
      <div class="relative h-full pb-3 pr-3 bg-white rounded-br-full" class:shadow-md={!isOpen}>
        <button
          type="button"
          class="flex items-center justify-center w-full h-full p-2"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onclick={toggleMenu}>
          {#if !isOpen}
            <div class="absolute" transition:scale={{ duration: 500 }}>
              <BurgerIcon class="hover:text-lime-600 size-6" />
            </div>
          {:else}
            <div class="absolute" transition:scale={{ duration: 500 }}>
              <XIcon class="hover:text-lime-600 size-6" />
            </div>
          {/if}
        </button>
      </div>
    </div>
  {/if} -->

  <!-- HAMBURGER MENU -->
  <!-- {#if isOpen}

    <button class="fixed w-full h-full" onclick={closeIfOpen}></button>


    <div
      id="mobile-menu"
      class="absolute pt-16 pb-6 pl-4 pr-8 bg-white shadow-md rounded-br-2xl"
      transition:fly={{ delay: 0, duration: 300, easing: quintOut, y: -20 }}>
      {#each data as { title, target }}
        <a href={target} class="block py-2 menu-item mobile" onclick={() => (isOpen = false)}>{title} </a>
      {/each}
    </div>
  {/if} -->
</nav>

<style lang="postcss">
  .menu-item {
    @apply text-sm  font-medium space-x-8 whitespace-nowrap uppercase;
  }
  .menu-item.mobile {
    @apply text-base whitespace-normal;
  }
  .menu-item:hover {
    @apply text-lime-600;
  }
</style>
