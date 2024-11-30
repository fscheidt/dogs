<script>
import dogs from '$lib/data/dogs.json';
import Dog from "$lib/Dog.svelte";
</script>

<main>

    <header>
        <h1 id="title">Dogs</h1>
    </header>

    <p dir="auto">from <a href="https://dog.ceo/dog-api/" rel="nofollow" target="_blank">Dog API</a></p>
    
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