<script>
import { base } from '$app/paths';
import "./app.css"
let {children} = $props();
</script>

<nav>
    <a href={`${base}/`}>home</a>
    <a href={`${base}/dogs`}>dogs</a>
</nav>

<div class="content">
    {@render children()}
</div>

<footer>
    <nav>
    <a href="https://fscheidt.github.io/dogs" title="GitHub Pages" target="_blank">gh pages</a>
    <a href="https://github.com/fscheidt/dogs" title="Project source-code" target="_blank">source</a>
    </nav>
</footer>
