
<script>
    // Import components
    import { Navigation } from "$lib";
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
<!-- <footer>
    <p>&copy; 2025 Portfolio. All rights reserved.</p>
</footer> -->


<style>
    
    header {
        padding: 0.25rem;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        border-bottom: var(--separator);
        mix-blend-mode: difference;
        border-bottom: 1.5px solid;
        border-color: var(--secondary-color);
    }
    main {
        padding: 0rem;
        padding-top: 3rem; /* Add space for the fixed header */
        text-align: center;
    }
    
    footer {
        color: var(--text-color);
        text-align: center;
        font-size: var(--small-text);
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: var(--separator);
    }

</style>
