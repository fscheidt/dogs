<script>
import {user} from "$lib/app.svelte.js";
import dogs from '$lib/data/dogs.json';
import Dog from "$lib/Dog.svelte";
const userPrefs = $user || {
    search: ""
}
</script>

<main>
    <header>
        <h1 id="title">Dogs</h1>
    </header>

    <input type="text" bind:value={userPrefs.search}>
    <pre>{JSON.stringify(userPrefs, null, 2)}</pre>

    <p style="font-style:italic;">from <a href="https://dog.ceo/dog-api/" target="_blank">dog API</a></p>
    
    <div class="contents">
        {#each dogs as dog}
            <Dog {dog}/>
        {/each}
    </div>
</main>

<style>
.contents{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: flex-start;
}
</style>