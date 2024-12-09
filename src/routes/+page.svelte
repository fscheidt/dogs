<script>
import {onMount} from "svelte";
import {user} from "$lib/app.svelte.js";
import dogs from '$lib/data/dogs.json';
import Dog from "$lib/Dog.svelte";
let userPrefs = $state($user || {
    search: ""
})
function save_storage(){
    chrome.storage.local.set("userPrefs", userPrefs).then(()=>{
        console.log('user preferences saved');
    })
}

</script>

<main>
    <header>
        <h1 id="title">Dogs</h1>
    </header>

    <input type="text" bind:value={userPrefs.search}>
    <button onclick={()=>{save_storage()}}>save</button>
    <pre>userPrefs:{JSON.stringify(userPrefs, null, 2)}</pre>
    <pre>$user: {JSON.stringify($user, null, 2)}</pre>

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