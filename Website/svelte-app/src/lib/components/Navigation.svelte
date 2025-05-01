<script>
    import { reveal } from 'svelte-reveal';

    let revealDelay = 60;
</script>


<nav class="glass-nav">
    <div class="nav-container">
        <div class="nav-left">
            <a href="/" use:reveal={{ preset: "slide", delay: revealDelay }}>elisabeth <img src="/images/logo_prototype.png" alt="logo"></a>
            
        </div>
        <div class="nav-center">
            <a href="#work" use:reveal={{ preset: "slide", delay: revealDelay*2 }}>work</a>
            <a href="#cv" use:reveal={{ preset: "slide", delay: revealDelay*3 }}>cv</a>
        </div>
        <div class="nav-right">
            <a class="icon" href="/contact" use:reveal={{ preset: "slide", delay: revealDelay*4 }}><img class="social-icon" src="/images/linkedin.png" alt="linked in icon"></a>
            <a href="/contact" use:reveal={{ preset: "slide", delay: revealDelay*4 }}>@</a>
        </div>
    </div>
</nav>

<style>
    /* Apply smooth scrolling to the whole page */
    :global(html) {
        scroll-behavior: smooth;
    }

    .nav-left img {
        height: 10px;
        position: center;
    }

    .social-icon {
        height: 2.2rem;
        width: auto;
        vertical-align: middle;
    }

    .icon {
        display: flex;
        align-items: center;
    }


    .glass-nav {                  
        position: fixed;               
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        background-color: var(--background-color-half);
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
        gap: 2rem;
        margin-right:3.5%;
    }
    
    .nav-right {
        flex: 0 0 auto;
        text-align: right;
        display: flex;
        gap: 1rem;
        align-items: center;
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
