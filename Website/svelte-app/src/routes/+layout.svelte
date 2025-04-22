
<script>
    // Import components
    import {Navigation} from "$lib";
    import {MouseTrail} from "$lib";
</script>

<!-- Header -->
<header>
    <Navigation/>
</header>
<!-- Page Content -->
<main>
    <slot />
    <MouseTrail></MouseTrail>
</main>

<!-- Footer -->
<!-- <footer>
    <p>&copy; 2025 Portfolio. All rights reserved.</p>
</footer> -->


<style>
    
    header {
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
    }

    
    footer {
        color: var(--text-color);
        text-align: center;
        font-size: var(--small-text);
        padding: var(--small-space);
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: var(--separator);
    }

</style>
