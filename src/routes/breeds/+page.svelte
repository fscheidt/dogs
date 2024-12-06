<script>
import { onMount } from 'svelte';
import data from '$lib/data/breeds.json';
import Breed from "$lib/Breed.svelte";
let breeds = Object.keys(data?.message);
let idx = $state(0);
let breedName = $state(null);
let checkedInput = () => {
    const checkedInput = document.querySelector(`input[value="${breedName}"]`);
    if (checkedInput) {
        checkedInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return checkedInput;
}
onMount(()=>{
    idx = Math.floor(Math.random() * breeds?.length);
    breedName = breeds[idx] || "corgi";
    checkedInput()
});
</script>

<main>
    <div class="contents">
        <div id="breeds5">
            <header>
                <h1 id="title">Breeds</h1>
                <p>{breeds?.length} breeds</p>
            </header>
            <div id="breeds">
            <ul>
                {#each breeds as name}
                <li>
                    <label>
                        <input name="selectedBreed" 
                            type="radio" 
                            onclick={()=>{breedName=name;}} 
                            checked={breedName==name}
                            value={name}>
                        {name}
                    </label>
                </li>
                {/each}
            </ul>
            </div>
        </div>
        <div id="photos">
            {#key breedName}
                {#if breedName}
                    <Breed {breedName}/>
                {/if}
            {/key}
        </div>
    </div>
</main>

<style>
#title{
    padding:0;
    margin: 0;
}
.contents{
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 10px;
}
#breeds{
    max-height: 80vh;
    overflow: auto;
    min-width: fit-content;
    padding: 0 10px 10px 0px;
}
#breeds label:has(input:checked){
    color: #510948;
    font-weight: 900;
}
#breeds label{
    text-transform: capitalize;
}
#breeds::-webkit-scrollbar {
    width: 10px;
    height: 12px;
}
#breeds::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #d1d0d0;
}
#breeds::-webkit-scrollbar-thumb {
    background: #483262;
    border-radius: 10px;
}
#breeds::-webkit-scrollbar-thumb:hover {
    background: #8151b9;
}
ul{
    padding: 0;
    margin: 0;
}
li{
    list-style: none;
    line-height: 2rem;
}
label:hover{
    cursor: pointer;
    color: #801471;
}
</style>