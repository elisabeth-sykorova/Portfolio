<script>
    import { reveal } from 'svelte-reveal';
    import { fade } from 'svelte/transition';
    import { base } from '$app/paths';

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

<footer>
    <div class="footer-container">
        <div class="nav-right">
            <p>Elisabeth Sykorova</p>
            <p>|</p>
            <div class="email-container">
                <button class="email-copy" on:click={copyEmail}>
                    <span class="email-symbol">@</span>
                    <img class="copy-icon" src="{base}/images/copy.png" alt="copy icon">
                </button>
                {#if copyFeedback}
                <div class="copy-feedback" transition:fade={{ duration: 300 }}>email copied</div>
                {/if}
            </div>
            <a class="icon" href="https://www.linkedin.com/in/elisabeth-sykorova-7a2981354/" target="_blank"><img class="social-icon" src="{base}/images/linkedin.png" alt="linked in icon"></a>
        </div>
    </div>
</footer>

<style>
    footer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
        position: relative;
        z-index: 10;
    }

    .footer-container {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    /* Right navigation styles */
    .nav-right {
        display: flex;
        gap: 1rem;
        align-items: center;
        white-space: nowrap;
    }

    /* Email container styles */
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

    .social-icon {
        height: 2.2rem;
        width: auto;
        vertical-align: middle;
    }

    .icon {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: var(--text-color);
        transition: transform 0.3s ease, color 0.3s ease;
    }
    
    .icon:hover {
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
