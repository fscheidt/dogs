<script>
import dogs from '$lib/data/dogs.json';
import Dog from "$lib/Dog.svelte";
</script>

<main>
    <header>
        <h1 id="title">Dogs</h1>
    </header>

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