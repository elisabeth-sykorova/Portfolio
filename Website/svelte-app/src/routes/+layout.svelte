
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
<footer>
    <p>&copy; 2025 Portfolio. All rights reserved.</p>
</footer>


<style>
    
    header {
        background-color: var(--secondary-color);
        padding: 0.25rem;
        text-align: center;
    }

    main {
        padding: 0rem;
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
