<script>
let { dog } = $props();
</script>

<main>
  <h2>{dog.breed}</h2>
  <p>{dog?.about}</p>
  <p>
    <img 
      src="./imgs/{dog?.image?.src}"
      alt={dog?.image?.alt} 
      title={dog?.image?.title} />
  </p>
  {#if dog?.image?.source}
    <p>
      <a title="image source" href={dog?.image?.source} target="_blank">image</a>
    </p>
  {/if}
</main>

<style>
main {
  background-color: rgb(214, 206, 220);
  padding: 20px;
  max-width: 300px;
}
img {
  max-width: 100%;
  max-height: 70vh;
  border-radius: 5px;
  filter: drop-shadow(2px 4px 6px rgb(59, 59, 59));
}
</style>