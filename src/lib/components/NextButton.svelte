<script>
  let { url } = $props();
  //  let open = $state(false);

  function next() {
    window.location.replace(url);
    window.history.replaceState(nextState, nextTitle, nextURL);
  }
</script>

<button type="button" onclick={next}> Next-- </button>
