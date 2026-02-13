<script>
let { children } = $props();
import { base } from '$app/paths';
import { app } from "$lib/ui.svelte";
import "./app.css"
</script>

<nav>
  <a href={`${base}/`}>home</a>
  <a href={`${base}/breeds`}>breeds</a>
  <a href={`${base}/readme`}>readme</a>
  {#if app.canMutateUiState}
    <input 
      type="checkbox" 
      bind:checked={app.debugMode}>
  {/if}
</nav>

<div class="content">
  {@render children()}
</div>

<footer>
  <nav>
    <a href="https://fscheidt.github.io/dogs" title="GitHub Pages" target="_blank">gh pages</a>
    <a href="https://github.com/fscheidt/dogs" title="Project source-code" target="_blank">source</a>
  </nav>
</footer>
