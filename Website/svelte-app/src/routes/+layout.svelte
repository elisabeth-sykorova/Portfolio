
<script>
    // Import components
    import {Navigation, Footer} from "$lib";
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
