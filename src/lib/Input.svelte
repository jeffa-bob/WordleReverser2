<script lang="ts">
  import { createEventDispatcher } from "svelte";

  let value: string;

  const dispatch = createEventDispatcher();
  function click() {
    dispatch("submit", {
      value: value,
    });
  }
</script>

<div class="grid place-items-center h-fit">
  <label
    for="Result"
    class="mb-2 text-lg inline-block font-medium text-gray-900 dark:text-gray-300"
    >Paste Wordle Result</label
  >
  <textarea
    id="Result"
    placeholder={"Wordle 437 5/6\n\n⬜⬜⬜⬜🟩\n⬜🟨⬜⬜🟩\n🟨⬜🟨⬜🟩\n⬜🟩⬜🟨🟩\n🟩🟩🟩🟩🟩"}
    rows="4"
    bind:value
    class="block p-5 w-60 h-80 text-lg text-center resize-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  />
  <button
    type="button"
    class="w-60 m-2 px-5 py-2.5 inline-block focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    on:click={click}
  >
    Go
  </button>
</div>
