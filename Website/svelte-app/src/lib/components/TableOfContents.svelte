<script>
    import { onMount, onDestroy } from 'svelte';
    
    // Accept sections prop from parent component
    export let sections = [];
    
    // Track active section
    let activeSection = '';
    let observers = [];
    
    // Smooth scroll to section
    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Offset for header
                behavior: 'smooth'
            });
        }
    }
    
    // Setup Intersection Observer for section highlighting
    onMount(() => {
        // Set up observers for each section
        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                activeSection = section.id;
                            }
                        });
                    },
                    {
                        rootMargin: '-80px 0px -80% 0px', // Adjust these values to control when sections become "active"
                        threshold: 0
                    }
                );
                observer.observe(element);
                observers = [...observers, observer];
            }
        });

        return () => {
            // Cleanup observers
            observers.forEach(observer => observer.disconnect());
        };
    });
</script>

<div class="toc-container">
    <div class="toc-content">
        <nav class="toc-nav">
            <ul>
                {#each sections as { id, title, level }}
                    <li class="level-{level}" class:active={activeSection === id}>
                        <a 
                            href="#{id}" 
                            on:click|preventDefault={() => scrollToSection(id)}
                            class:active={activeSection === id}
                            aria-current={activeSection === id ? 'true' : 'false'}
                        >
                            {title}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    </div>
</div>

<style>
    .toc-container {
        position: sticky;
        top: 22%;
        width: 250px;
        max-height: calc(100vh - 100px);
        border-left: 1px solid var(--text-color-soft, #44434b);
        padding: 1rem;
        font-size: 0.9rem;
        transform: translateX(150%);
    }
    
    .toc-title {
        font-size: 1.2rem;
        margin-top: 0;
        margin-bottom: 1rem;
        color: var(--text-color, #ffffff);
    }
    
    
    .toc-nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .toc-nav li {
        margin-bottom: 0.5rem;
    }
    
    .toc-nav li.level-2 {
        margin-left: 0;
    }
    
    .toc-nav li.level-3 {
        margin-left: 1rem;
        font-size: 0.85rem;
    }
    
    .toc-nav a {
        text-decoration: none;
        color: var(--text-color, #ffffff);
        display: block;
        padding: 0.3rem 0.5rem;
        border-radius: 3px;
        transition: all 0.2s ease;
        border-left: 2px solid transparent;
    }
    
    .toc-nav a:hover {
        color: var(--secondary-color, #a6a5b8);
        background-color: rgba(var(--text-color-rgb), 0.1);
        transform: translateX(3px);
    }
    
    .toc-nav a.active {
        color: var(--secondary-color, #a6a5b8);
        font-weight: 600;
        background-color: rgba(var(--text-color-rgb), 0.1);
        transform: translateX(3px);
    }
    
    /* For devices with hover capability */
    @media (hover: hover) {
        .toc-nav a:hover {
            color: var(--secondary-color, #a6a5b8);
        }
    }
    
    /* Mobile styles */
    @media screen and (max-width: 768px) {
        .toc-container {
            background-color: var(--background-color, #151519);
        }
        
        .toc-content {
            padding: 0.5rem;
        }
        
        .toc-nav li {
            margin-bottom: 0.3rem;
        }
        
        .toc-nav a {
            padding: 0.4rem 0.5rem;
        }
    }
</style>
