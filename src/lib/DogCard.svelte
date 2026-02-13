<script>
let {
  url,
  breedName = null,
  debug = false,
} = $props();
import { onMount } from "svelte";

function getBreedName(){
  const match = url.match(/breeds\/([^\/]+)/);
  const breed = match?.[1];
  return breed;
}
onMount(()=>{
  if(!breedName) {
    breedName=getBreedName();
  }
});
</script>

<div>
  <figure>
    {#if breedName}
      <figcaption>{breedName}</figcaption>
    {/if}
    <img 
      src={url} 
      alt="{breedName}" 
      title="{breedName}"/>
  </figure>
  {#if debug}
    <pre>{url}</pre>    
  {/if}
</div>

<style>
div {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
pre { 
  margin: .5rem 0;
}
figure {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 0;
  margin: 0;
}
img {
  max-width: 100%;
  max-height: 70vh;
  border-radius: 5px;
  filter: drop-shadow(2px 4px 6px rgb(59, 59, 59));
}
figcaption {
  font-weight: bold;
  text-transform: uppercase;
}
</style>