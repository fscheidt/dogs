<script>
import Readme from '$lib/data/README.md'
const version = __APP_VERSION__;
</script>

<main class="md">
  <pre>version: {version}</pre>
  <h1>README</h1>
  <Readme/>
</main>

<style>
:global {
  .md pre:has(code) {
    background-color: var(--bg-1) !important;
    padding: 1rem;
    line-height: 1.2rem;
    border-radius: 4px;
    filter: drop-shadow(0px 1px 4px rgb(151, 151, 151));
  }
}
</style>