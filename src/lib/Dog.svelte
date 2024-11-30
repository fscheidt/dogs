<script>
let {dog} = $props();
</script>

<main>
    <h2>{dog.breed}</h2>
    <p>
        {dog?.about}
    </p>
    <p>
        <img 
            src="./imgs/{dog?.image?.src}"
            alt={dog?.image?.alt} 
            title={dog?.image?.title} />
    </p>
    {#if dog?.image?.source}
        <p>
            <a title="image source" href={dog?.image?.source} target="_blank">source</a>
        </p>
    {/if}
</main>

<style>
main {
    background-color: rgb(214, 206, 220);
    padding: 20px;
    max-width: 300px;
    box-shadow: 3px 3px 5px 1px #b8b8b8;
}
img{
    max-width: 100%;
}
</style>