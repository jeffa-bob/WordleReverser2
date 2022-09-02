<script lang="ts">
  import type { colors } from "./extras";

  import Letter from "./letter.svelte";
  import { color, words } from "./stores";

  let wordlelist: string[];
  let colorslist: colors[][];
  words.subscribe((value) => (wordlelist = value));
  color.subscribe((value) => (colorslist = value));
</script>

<div class="container mx-auto p-8 content-center">
  <div class="grid place-items-center h-fit">
    <div id="word-grid" class="grid grid-cols-5 gap-2">
      {#each wordlelist as string, index1}
        {#each [...string] as letter, index2}
          <Letter color={colorslist[index1][index2]} {letter} />
        {/each}
      {/each}
    </div>
  </div>
</div>
