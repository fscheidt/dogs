<script>
let { children } = $props();
import { base } from '$app/paths';
import { app } from "$lib/ui.svelte";
import { onMount } from 'svelte';
import "./app.css"

let themeBtn = $derived(app.theme === "dark" ? "light" : "dark");

function setAppTheme(theme) {  
  document.querySelector("html").classList = "";
  document.querySelector("html").classList.add(theme);
}
function toggleTheme() {
  app.theme = app.theme === "dark" ? "light" : "dark";
  setAppTheme(app.theme);
}
onMount(()=>{
})
</script>

<nav>
  <a href={`${base}/`}>home</a>
  <a href={`${base}/details`}>details</a>
  <a href={`${base}/breeds`}>breeds</a>
  <a href={`${base}/readme`}>readme</a>
  {#if app.canMutateUiState}
    <input 
      type="checkbox" 
      bind:checked={app.debugMode}
    />
    <label>
      <button 
        type="checkbox" 
        onclick={()=> { toggleTheme() }}>
        {themeBtn}</button>
    </label>
  {/if}
  <!-- {#if app.debugMode}<pre>{JSON.stringify(app,null,2)}</pre>{/if} -->
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

<style>
nav {
  align-items: flex-start;
}
</style>