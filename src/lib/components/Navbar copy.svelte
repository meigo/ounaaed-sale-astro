<script lang="ts">
  import { onMount } from "svelte";
  import { fly, scale } from "svelte/transition";
  import { quintOut, sineOut, sineIn } from "svelte/easing";
  import BurgerIcon from "./icons/BurgerIcon.svelte";
  import XIcon from "./icons/XIcon.svelte";
  import HomeIcon from "./icons/HomeIcon.svelte";

  // /** @type {{ id: string; data: MenuData }} */
  let { id, type = "page" }: { id: string; type: MenuType } = $props();

  const data: MenuData = {
    main: [
      { label: "Suurna õunaaed", href: "#suurna-ounaaed" },
      { label: "Tehumardi õunaaed", href: "#tehumardi-ounaaed" },
      { label: "Laokompleks", href: "#laokompleks" },
      { label: "Tehnika", href: "#tehnika" },
      { label: "Villa", href: "#villa" },
      { label: "Kontakt", href: "#kontakt" },
    ],
    page: [
      { label: "Home", href: "/" },
      { label: "Suurna õunaaed", href: "/suurna-ounaaed" },
      { label: "Tehumardi õunaaed", href: "/tehumardi-ounaaed" },
      { label: "Laokompleks", href: "/laokompleks" },
      { label: "Tehnika", href: "/tehnika" },
      { label: "Villa", href: "/villa" },
      { label: "Kontakt", href: "/#kontakt" },
    ],
  };

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

  //sm: 640px, md: 768px, lg: 1024px
  let bigMenuHidden = $derived(innerWidth < 850);
  // let bigMenuHidden = $derived(innerWidth < 1024 || scrollY > 350);
</script>

<svelte:window bind:scrollY bind:innerWidth onscroll={closeIfOpen} />

{#if js}
  <header class={`relative z-40 w-full max-h-12 ${!bigMenuHidden ? "bg-ka-main" : "bg-transparent"}`}>
    <nav class="w-full mx-auto">
      {#if !bigMenuHidden}
        <div class=" h-12 flex items-center justify-center w-full">
          {#each data[type] as { label, href }, index}
            {#if index == 0 && href === "/"}
              <div class="h-full flex items-center mx-1">
                <a href="/" class="px-3 menu-item"><HomeIcon /></a>
              </div>
            {:else}
              <div class="h-full flex items-center mx-1">
                <a {href} class="px-3 menu-item" class:menu-anchor={type == "main"}>{label}</a>
              </div>
            {/if}
          {/each}
        </div>
      {/if}

      <!-- HAMBURGER MENU BUTTON -->
      {#if bigMenuHidden && !isOpen}
        <div class="w-full flex justify-end items-center">
          <div class="right-0 w-14">
            <button
              type="button"
              class="flex items-center justify-center text-ka-dark p-2"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onclick={toggleMenu}>
              <BurgerIcon />
            </button>
          </div>
        </div>
      {/if}

      <!-- HAMBURGER MENU -->
      {#if isOpen}
        <button
          class="fixed top-0 w-full h-full backdrop-blur-md bg-ka-dark bg-opacity-90"
          aria-label="Toggle menu button"
          onclick={closeIfOpen}></button>

        <div id="mobile-menu" class="fixed top-0 h-screen w-full flex flex-col justify-center items-center pointer-events-none">
          {#each data[type] as { label, href }, index}
            {#if index == 0 && href === "/"}
              <div class="relative py-2 pointer-events-none">
                <a
                  href="/"
                  class="block menu-item mobile pointer-events-auto"
                  onclick={() => (isOpen = false)}
                  in:fly|global={{ delay: index * 50, duration: 300, easing: quintOut, y: 20 }}
                  ><HomeIcon class="w-12" />
                </a>
              </div>
            {:else}
              <div class="relative py-2 pointer-events-none">
                <a
                  {href}
                  class="block menu-item mobile pointer-events-auto"
                  class:menu-anchor={type == "main"}
                  onclick={() => (isOpen = false)}
                  in:fly|global={{ delay: index * 50, duration: 300, easing: quintOut, y: 20 }}
                  >{label}
                </a>
              </div>
            {/if}
          {/each}
        </div>

        <div class="fixed right-2 top-2 pointer-events-none">
          <XIcon class="text-white size-10" />
        </div>
      {/if}
    </nav>
  </header>
{/if}

<style lang="postcss">
  .menu-item {
    @apply text-base text-lg uppercase space-x-8  whitespace-nowrap text-ka-dark;
  }
  .menu-item.mobile {
    @apply text-3xl whitespace-normal text-ka-light;
  }
  .menu-item:hover {
    @apply opacity-70 scale-102 text-ka-accent;
  }
</style>
