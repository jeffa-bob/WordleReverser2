<script lang="ts">
  import { onMount } from "svelte";

  import { colorcode, type colors } from "./extras";

  export let color: colors;
  export let letter: string;
  onMount(() => {
    console.log(color, colorcode[color]);
  });
</script>

<div
  class={`w-10 h-10 block rounded-lg border-neutral-300 border border-2 leading-9 font-bold align-middle text-center text-neutral-200 ${colorcode[color]}`}
>
  {letter}
</div>
