<script>
    import { theme, toggleTheme } from '$lib/stores/theme';
    import { reveal } from 'svelte-reveal';
    
    let revealDelay = 60;
</script>

<button 
    class="theme-toggle"
    on:click={toggleTheme}
    use:reveal={{ preset: "fly", duration: 800, delay: revealDelay*13 }}
    aria-label="Toggle dark mode"
>
    {#if $theme === 'light'}
        <div class="icon moon"></div>
    {:else}
        <div class="icon sun"></div>
    {/if}
</button>

<style>
    .theme-toggle {
        background: none;
        border: 3px solid var(--text-color);
        color: var(--text-color);
        font-family: var(--font-family);
        font-size: 1rem;
        padding: 0.5rem;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease, color 0.3s ease, background-color 0.3s ease;
        margin: 3rem auto;
    }
    
    .theme-toggle:hover {
        transform: translateY(-3px);
        background-color: var(--text-color);
        color: var(--background-color);
    }
    
    .icon {
        display: inline-flex;
        font-size: 1.2rem;
    }
</style>
