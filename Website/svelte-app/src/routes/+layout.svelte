
<script>
	import Header from "$lib/components/Navigation.svelte";

    // Import components
    import Navigation from "$lib/components/Navigation.svelte";
</script>


<!-- Link to global styles -->
<link rel="stylesheet" href="/styles/global.css" />

<!-- Header -->
<header>
    <Navigation/>
</header>
<!-- Page Content -->
<main>
    <slot />
<div id="categories">
    <img src="/card.png" alt="card">
    <img src="/card.png" alt="card">
    <img src="/card.png" alt="card">
    <img src="/card.png" alt="card">
</div>
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

    #categories {
        padding: 3%;
    }

    img{
        padding: 0.5%;
    }


</style>
