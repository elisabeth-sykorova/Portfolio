<script>
    // Import components
    
</script>


<!-- Link to global styles -->
<link rel="stylesheet" href="/styles/global.css" />

<!-- Header -->
<header>
    <nav>
        <ul>
            <li class="path"><a href ="/">Home</a></li>
            <li><a href="/contact">Who am I and Where to Find Me?</a></li>
        </ul>
    </nav>
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
    
    nav ul {
        list-style: none;
        font-size: 14px;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: right;
    }
    
    nav ul li {
        margin: 0 15px;
    }
    
    nav ul li a {
        text-decoration: none;
        color: var(--text-color);
        font-weight: bold;
    }
    
    main {
        padding: 0rem;
        text-align: center;
    }
    
    footer {
        color: var(--text-color);
        text-align: center;
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: var(--separator);
    }

    .path{
        text-align: left;
    }
</style>
