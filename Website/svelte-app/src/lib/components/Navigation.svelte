
<nav>
    <div class="nav-container">
        <div class="nav-left">
            <a href="/">elisabeth</a>
        </div>
        <div class="nav-center">
            <a href="#work">work</a>
            <a href="/about">about</a>
        </div>
        <div class="nav-right">
            <a href="/contact">contact</a>
        </div>
    </div>
</nav>

<style>
    /* Apply smooth scrolling to the whole page */
    :global(html) {
        scroll-behavior: smooth;
    }
    
    .nav-container {
        display: flex;
        align-items: center;
        font-size: 20px;
        width: 100%;
        margin: 0;
        padding: 0;
        background-color: var(--background-color);
    }
    
    .nav-left {
        flex: 0 0 auto;
        text-align: left;
        padding-left: var(--small-space);
    }
    
    .nav-center {
        flex: 1;
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    
    .nav-right {
        flex: 0 0 auto;
        text-align: right;
        padding-right: var(--small-space);
    }
    
    a {
        text-decoration: none;
        color: var(--secondary-color);
        transition: transform 0.3s ease, color 0.3s ease;
        display: inline-block;
    }

    a:hover{
        transform: translateY(-3px);
        color: var(--text-color);
    }
</style>
