<nav class="glass-nav">
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
    
    .glass-nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        background-color: #140318e8;
    }
    
    .nav-container {
        display: flex;
        align-items: center;
        font-size: 20px;
        width: 100%;
        margin: 0;
        padding: 0.25rem;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        
    }
    .nav-left {
        flex: 0 0 auto;
        text-align: left;
        padding-left: var(--bigger-space);
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
        padding-right: var(--bigger-space);
    }
    
    a {
        text-decoration: none;
        color: var(--text-color);
        transition: transform 0.3s ease, color 0.3s ease;
        display: inline-block;

    }
    
    a:hover {
        transform: translateY(-3px);
        color: var(--secondary-color);
    }
</style>
