<script>
import {getContext, onMount} from "svelte";
let {breedName} = $props();
let endpoint = $state(`https://dog.ceo/api/breed/${breedName}/images`);
let photos = $state(null);
let photoIdx = $state(0);
function getNext(){
    return Math.floor(Math.random(0,1)*photos.length)
}
async function getBreedPhotos(){
    const response = await fetch(endpoint);
    const data = await response.json();
    if (response.ok) {
        return data;
    } else {throw new Error(data); }
}
onMount(()=>{
    getBreedPhotos().then((data)=>{
        photos = data.message;
    })
})
</script>
<main>

    <h2>{breedName}</h2>
    <p>photos: {photos?.length}</p>
    {#if photos}
    <button onclick={()=>photoIdx=getNext()}>random</button>
    <div>
        <img src={photos[photoIdx]}/>
    </div>
    {/if}

</main>
<style>
main{
    display: inline-grid;
    justify-items: start;
    gap: 10px;
}
img{
    max-width: 100%;
    max-height: 95vh;
}
h2{
    padding: 0;
    margin: 0;
}
</style>