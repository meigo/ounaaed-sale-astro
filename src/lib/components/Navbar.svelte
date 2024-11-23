<script>
  import { onMount } from "svelte";
  import { fly, scale } from "svelte/transition";
  import { quintOut, sineOut, sineIn } from "svelte/easing";
  import BurgerIcon from "../../assets/svg/BurgerIcon.svelte";
  import XIcon from "../../assets/svg/XIcon.svelte";
  // import SpaceTimeLogo from "../components/SpaceTimeLogo.svelte";

  let { id, data } = $props();

  let js = $state(false);

  onMount(async () => {
    js = true;
  });

  let isOpen = $state(false);

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeIfOpen() {
    if (isOpen) isOpen = false;
  }

  let scrollY = $state(0);
  let innerWidth = $state(0);

  let bigMenuHidden = $derived(innerWidth < 640 || scrollY > 350);
</script>

<svelte:window bind:scrollY bind:innerWidth onscroll={closeIfOpen} />

{#if js}
  <header class="absolute z-40 w-full bg-blue-500">
    <nav class="max-w-6xl w-full mx-auto">
      <!-- JS -->
      <div class="absolute h-12 flex items-center z-2">
        <a href="/" class="hover:opacity-80 outline-offset-4">LOGO</a>
      </div>

      {#if !bigMenuHidden}
        <div class="h-12 flex items-center justify-center w-full">
          {#each data as { label, href }}
            <div class="h-full">
              <div class="h-[1px] bg-white {id === label.trim().toLowerCase() ? 'visible' : 'invisible'}"></div>
              <div class="h-full flex items-center mx-1">
                <a {href} class="px-3 menu-item">{label}</a>
              </div>
            </div>
          {/each}
        </div>
      {/if}

      <!-- HAMBURGER MENU BUTTON -->
      {#if bigMenuHidden && !isOpen}
        <div class="absolute right-0 w-12 h-12 z-2">
          <button
            type="button"
            class="flex items-center justify-center w-full h-full p-2"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onclick={toggleMenu}>
            <BurgerIcon />
          </button>
        </div>
      {/if}

      <!-- HAMBURGER MENU -->
      {#if isOpen}
        <button class="fixed w-full h-full backdrop-blur-md bg-black bg-opacity-50" aria-label="Toggle menu button" onclick={closeIfOpen}
        ></button>

        <div id="mobile-menu" class="absolute h-screen w-full flex flex-col justify-center items-center pointer-events-none">
          {#each data as { label, href }, index}
            <div class="relative py-2 pointer-events-none">
              <a
                {href}
                class="block menu-item mobile pointer-events-auto"
                onclick={() => (isOpen = false)}
                in:fly|global={{ delay: index * 50, duration: 300, easing: quintOut, y: 20 }}
                >{label}
              </a>
            </div>
          {/each}
        </div>

        <div class="fixed right-3 top-3 pointer-events-none">
          <XIcon class="text-white  size-6  " />
        </div>
      {/if}
    </nav>
  </header>
{/if}

<style lang="postcss">
  .menu-item {
    @apply text-base space-x-8 whitespace-nowrap text-white;
  }
  .menu-item.mobile {
    @apply text-3xl whitespace-normal;
  }
  .menu-item:hover {
    @apply opacity-80;
  }
</style>
