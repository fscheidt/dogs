<script>
import dogs from '$lib/data/dogs.json';
import RandomDog from "$lib/RandomDog.svelte";
</script>

<div>
  <header>
    <h1 class="title">picture of the day</h1>
  </header>
  
  <div class="contents">
    <RandomDog/>
  </div>
</div>

<style>
.title {
  text-transform: capitalize;
}
.contents{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-start;
}
</style>