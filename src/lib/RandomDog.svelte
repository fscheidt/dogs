<script>
import { onMount } from "svelte";
import { app } from "$lib/ui.svelte";
import DogCard from "$lib/DogCard.svelte";

let endpoint = $state(`https://dog.ceo/api/breeds/image/random`);
let url = $state(null);
let urlFallback = $state("https://images.dog.ceo/breeds/shiba/shiba_20.jpg");
let debug = $derived(app.debugMode);

async function getPicture(){
  const response = await fetch(endpoint);
  if (response.ok) {
    const data = response.json();
    return data;
  }
  else {
    const errorDetails = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
      headers: Array.from(response.headers.entries()),
    };
    throw new Error(`HTTP status ${JSON.stringify(errorDetails, null, 2)}`);
  }
}
onMount(()=>{
  getPicture().then((data)=>{
    url = data.message;
  }).catch((error)=>{
    message = `${error}`;
    url = urlFallback;
  })
});
</script>

<div>
  {#if url}
    <DogCard {url} {debug}/>
  {/if}
</div>

<style>

</style>