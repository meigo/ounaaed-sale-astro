<script>
  import AccordionItem from "./AccordionItem.svelte";

  let defaultItems = [
    {
      title: "Ometi oli ta pisut nagu pettunud",
      text: "Tema oli lootnud, et sigu tuleb ehk ajama Juss, võib–olla peremees isegi, ja meestega võiks ajada mehejuttu. Aga nüüd ei tulnud tüdrukki, vaid perenaine ise, laps süles. Mis temale ikka öelda, ega tema ometi midagi vastama hakka, millest võiks pikem asjalik jutt ja sõnadega kemplemine tekkida.",
    },
  ];

  let { items = defaultItems } = $props();
</script>

<dl class="space-y-4 divide-y divide-black">
  {#each items as item}
    <AccordionItem data={item} />
  {/each}
</dl>
