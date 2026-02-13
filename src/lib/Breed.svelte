<script>
let {
  breedName = "corgi" 
} = $props();
import { getContext, onMount } from "svelte";
import { app } from "$lib/ui.svelte";
import DogCard from "$lib/DogCard.svelte";

let endpoint = $state(`https://dog.ceo/api/breed/${breedName}/images`);
let photos = $state(null);
let url = $state(null);
let photoIdx = $state(0);
let message = $state(null);
let debug = $derived(app.debugMode);

function getNext () {
    photoIdx = Math.floor(Math.random(0,1)*photos.length);
    return photos[photoIdx];
}
async function getBreedPhotos(){
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
  getBreedPhotos().then((data)=>{
    photos = data.message;
    url = getNext();
  }).catch((error)=>{
    message = `${error}`;
  })
});
</script>
<main>
  <h1>{ breedName }</h1>
  <div class="row">
    <button 
      class="surprise" 
      onclick={() => url=getNext()}
      >Surprise</button>
    <span>{photoIdx+1} of {photos?.length} photos</span>
  </div>
  {#if message}
    <pre class="error">{message}</pre>
  {/if}
  {#if photos}
    <DogCard {url} {debug} {breedName} />
  {/if}
</main>

<style>
main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  min-height: 80vh;
  padding: 0 10px;
}
.row {
  display: flex;
  gap: 1rem;
  padding: .5rem 0;
}
h1 {
  font-family: var(--base-font);
  border-bottom: 2px solid #510948;
  color: #510948;
  padding: .25rem 0rem;
  margin: 0;
  text-transform: capitalize;
}
</style>