<script lang="ts">
  import Input from "./lib/Input.svelte";
  import "./app.css";
  import Wordle from "./lib/wordle.svelte";
  import type { colors } from "./lib/extras";
  import { answerlist } from "./lib/lists";
  import { color, words } from "./lib/stores";

  let wordle: Wordle;
  let wordlelist: string[];
  let colorslist: colors[][];
  words.subscribe((value) => (wordlelist = value));
  color.subscribe((value) => (colorslist = value));

  function addWord(word: string, colortype: colors[]) {
    wordlelist.push(word);
    words.set(wordlelist);
    colorslist.push(colortype);
    color.set(colorslist);
  }

  function onInput(event) {
    words.set([]);
    color.set([]);
    let string = event.detail.value;
    console.log("test " + string);
    let regex = /Wordle (\d+) (\d)\/6/su;
    if (!regex.test(string)) {
      console.log("fail");
      return;
    }
    let result = string.match(regex);
    console.log(result);
    let num = result[1];
    let count = result[2];
    if (num === undefined && count === undefined) {
      console.log("fail");
      return;
    }
    let final = answerlist[num];
    addWord(final, [2, 2, 2, 2, 2]);
  }
</script>

<main>
  <div class="items-center w-screen h-screen bg-slate-800 align-center">
    <div class="container mx-auto p-8 content-center">
      <Input on:submit={onInput} />
    </div>
    <Wordle />
  </div>
</main>
