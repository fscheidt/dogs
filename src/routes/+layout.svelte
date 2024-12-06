<script>
import { base } from '$app/paths';
import "./app.css"
let {children} = $props();
</script>

<nav>
    <a href={`${base}/`}>dogs</a>
    <a href={`${base}/breeds`}>breeds</a>
    <a href={`${base}/readme`}>readme</a>
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
