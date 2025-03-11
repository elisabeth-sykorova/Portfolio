<script>
import { onMount } from 'svelte';
onMount(() =>{
    console.log("Home Page Loaded");
});
</script>

<div id="hero">
<h1>Elisabeth Sykorova</h1>
<p>Interactive Digital Art and Design</p>
</div>
<style>
    #hero{background-color: var(--primary-color);
        padding: 3rem;
        border-top: var(--separator);
        border-bottom: var(--separator)}

</style>