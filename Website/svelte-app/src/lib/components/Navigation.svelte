<nav>
    <div class="nav-container">
        <div class="nav-left">
            <a href="/">elisabeth</a>
        </div>
        <div class="nav-center">
            <a href="/work">work</a>
            <a href="/about">about</a>
        </div>
        <div class="nav-right">
            <a href="/contact">contact</a>
        </div>
    </div>
</nav>

<style>
    nav {
        width: 100%;
        padding: var(--spacing-small) 0;
    }
    
    .nav-container {
        display: flex;
        align-items: center;
        font-size: 18px;
        width: 100%;
        margin: 0;
        padding: 0;
        mix-blend-mode: difference;
    }
    
    .nav-left {
        flex: 0 0 auto;
        text-align: left;
        padding-left: var(--margin-size);
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
        padding-right: var(--margin-size);
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
