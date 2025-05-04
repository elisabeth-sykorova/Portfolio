
<script>
    // Import components
    import { base } from '$app/paths';
    import {Navigation, Footer} from "$lib";
    import { onMount } from 'svelte';
    import { initTheme } from '$lib/stores/theme';
    
    onMount(() => {
        // Initialize theme on client-side
        initTheme();
    });
</script>

<!-- Header -->
<header>
    <Navigation/>
</header>
<!-- Page Content -->
<main>
    <slot />
</main>

<!-- Footer -->
<Footer />


<style>
    
    header {
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
    }

</style>
