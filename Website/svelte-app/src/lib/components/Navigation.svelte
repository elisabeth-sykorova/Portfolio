<script>
    import { reveal } from 'svelte-reveal';
    import { fade } from 'svelte/transition';

    let revealDelay = 60;
    let copyFeedback = false;
    
    function copyEmail() {
        const email = "elisabeth.sykorova@proton.me"; 
        navigator.clipboard.writeText(email)
            .then(() => {
                copyFeedback = true;
                setTimeout(() => copyFeedback = false, 2000); // reset after 2 seconds
            })
            .catch(err => {
                console.error('Failed to copy email:', err);
            });
    }
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
            <div class="email-container">
                <button class="email-copy" on:click={copyEmail} use:reveal={{ preset: "slide", delay: revealDelay*4 }}>
                    <span class="email-symbol">@</span>
                    <img class="copy-icon" src="/images/copy.png" alt="copy icon">
                </button>
                {#if copyFeedback}
                <div class="copy-feedback" transition:fade={{ duration: 300 }}>email copied</div>
                {/if}
            </div>
            <a class="icon" href="https://www.linkedin.com/in/elisabeth-sykorova-7a2981354/" target="_blank" use:reveal={{ preset: "slide", delay: revealDelay*4 }}><img class="social-icon" src="/images/linkedin.png" alt="linked in icon"></a>
        </div>
    </div>
</nav>

<style>
    html{
        scroll-behavior: smooth;
    }
    /* Style for the copied state */
    .email-container {
        position: relative;
        display: inline-flex;
        align-items: center;
        height: 100%;
    }

    .copy-feedback {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 100%;
        font-size: 0.8rem;
        color: var(--secondary-color);
        white-space: nowrap;
        margin-top: 0.5rem;
        pointer-events: none;
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
    
    .email-copy {
        background: none;
        border: none;
        color: var(--text-color);
        font-size: 20px;
        cursor: pointer;
        padding: 0.2rem;
        margin: 0;
        transition: transform 0.3s ease, color 0.3s ease;
        font-family: inherit;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        line-height: 1;
        position: relative;
        width: 1.5rem;
        height: 1.5rem;
    }

    .email-symbol {
        position: absolute;
        transition: opacity 0.3s ease;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 23px;
    }

    .copy-icon {
        position: absolute;
        height: 1.2rem;
        width: 1.2rem;
        opacity: 0;
        transition: opacity 0.3s ease;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    .email-copy:hover {
        transform: translateY(-3px);
        color: var(--secondary-color);
    }

    .email-copy:hover .email-symbol {
        opacity: 0;
    }

    .email-copy:hover .copy-icon {
        opacity: 1;
    }
</style>