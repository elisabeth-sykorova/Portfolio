<script>
    import { onMount, onDestroy } from 'svelte';
    
    // Accept sections prop from parent component
    export let sections = [];
    
    // Track active section
    let activeSection = '';
    let observers = [];
    
    // Wait for element to be available in DOM
    function waitForElement(id, timeout = 2000) {
        return new Promise((resolve, reject) => {
            // Check if element already exists
            const element = document.getElementById(id);
            if (element) {
                return resolve(element);
            }
            
            // Set up an observer to watch for DOM changes
            const observer = new MutationObserver(() => {
                const element = document.getElementById(id);
                if (element) {
                    observer.disconnect();
                    resolve(element);
                }
            });
            
            // Start observing
            observer.observe(document.body, { 
                childList: true, 
                subtree: true 
            });
            
            // Set a timeout to avoid endless waiting
            setTimeout(() => {
                observer.disconnect();
                // Try one more time before rejecting
                const element = document.getElementById(id);
                if (element) {
                    resolve(element);
                } else {
                    reject(new Error(`Element with id ${id} not found after timeout`));
                }
            }, timeout);
        });
    }
    
    // Smooth scroll to section with element availability check
    async function scrollToSection(id) {
        try {
            // Small delay to allow reveal animations to start
            await new Promise(resolve => setTimeout(resolve, 10));
            
            // Wait for the element to be available in DOM
            const element = await waitForElement(id);
            
            // Scroll to the element once it's available
            window.scrollTo({
                top: element.offsetTop - 80, // Offset for header
                behavior: 'smooth'
            });
        } catch (error) {
            console.warn(`Failed to scroll to section ${id}:`, error);
            
            // Fallback attempt with a longer delay
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }, 500);
        }
    }
    
    // Setup Intersection Observer for section highlighting
    onMount(() => {
        // Set up observers for each section with retries for elements that might not be available yet
        const setupObservers = async () => {
            for (const section of sections) {
                try {
                    // Wait for the element to be available
                    const element = await waitForElement(section.id);
                    
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
                } catch (error) {
                    console.warn(`Failed to set up observer for section ${section.id}:`, error);
                }
            }
        };
        
        // Initial setup with a small delay to allow for reveal animations to start
        setTimeout(setupObservers, 100);

        // Return cleanup function
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
