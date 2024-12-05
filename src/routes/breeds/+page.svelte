<script>
import data from '$lib/data/breeds.json';
import Breed from "$lib/Breed.svelte";
let breeds = Object.keys(data.message);
let breedName = $state(null);
</script>

<main>
    <header>
        <h1 id="title">Breeds</h1>
    </header>
    <div class="contents">
        <div>
            <ul>
                {#each breeds as name}
                <li><label><input name="selectedBreed" onclick={()=>{breedName=name;}} type="radio" value={name}>{name}</label></li>
                {/each}
            </ul>
        </div>
        <div>
            {#key breedName}
            {#if breedName}
            <Breed {breedName}/>
            {/if}
            {/key}
        </div>
    </div>

</main>


<style>

.contents{
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 10px;
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
    color: navy;
}
</style>