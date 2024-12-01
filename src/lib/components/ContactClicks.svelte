<script lang="ts">
  import { onMount } from "svelte";

  let count = $state(0);

  onMount(async () => {
    const res = await fetch(`/counter.php`);
    count = await res.text();
  });
</script>

<div class="fixed w-full h-full flex justify-center items-center text-center">
  <h3 class="text-ka-light">Kontakte vaadatud <span class="text-ka-main">{count}</span> korda.</h3>
</div>
