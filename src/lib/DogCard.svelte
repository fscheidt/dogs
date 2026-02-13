<script>
let {
  url,
  breedName,
  debug = false,
} = $props();
</script>

<div>
  {#if debug}
    <pre>{url}</pre>
  {/if}
  <img 
    src={url} 
    alt="{breedName}" 
    title="{breedName}"/>
</div>

<style>
pre { 
  margin: .5rem 0;
}
img {
  max-width: 100%;
  max-height: 70vh;
  border-radius: 5px;
  filter: drop-shadow(2px 4px 6px rgb(59, 59, 59));
}
</style>