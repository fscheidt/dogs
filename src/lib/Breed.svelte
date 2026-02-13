<script>
let {
  breedName = "corgi" 
} = $props();
import { getContext, onMount } from "svelte";
import { app } from "$lib/ui.svelte";

let endpoint = $state(`https://dog.ceo/api/breed/${breedName}/images`);
let photos = $state(null);
let picture = $state(null);
let photoIdx = $state(0);
let message = $state(null);
let debug = $derived(app.is_debug);

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
    picture = getNext();
  }).catch((error)=>{
    message = `${error}`;
  })
});
</script>
<main>
  <h1>{breedName}</h1>
  <p>{photos?.length} photos 
    <button onclick={()=>picture=getNext()}>surprise</button>
  </p>
  {#if message}
    <pre class="error">{message}</pre>
  {/if}
  {#if photos}
    <div>
      {#if debug}
        <pre>{picture}</pre>
      {/if}
      <img src={picture} alt="{breedName}" title="{breedName} [{photoIdx}]"/>
    </div>
  {/if}
</main>

<style>
main{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  min-height: 80vh;
}
img{
  max-width: 100%;
  max-height: 70vh;
}
h1{
  padding: 0;
  margin: 0;
  text-transform: capitalize;
}
</style>