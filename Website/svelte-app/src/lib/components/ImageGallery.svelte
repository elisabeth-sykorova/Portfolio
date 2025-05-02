<script>
    export let images = [];
    let currentIndex = 0;
    let touchStart = 0;
    let touchEnd = 0;

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    function handleTouchStart(e) {
        touchStart = e.changedTouches[0].screenX;
    }

    function handleTouchEnd(e) {
        touchEnd = e.changedTouches[0].screenX;
        if (touchStart - touchEnd > 50) {
            nextImage();
        } else if (touchEnd - touchStart > 50) {
            prevImage();
        }
    }

    // Add keyboard navigation
    function handleKeydown(e) {
        if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    }
</script>

<div class="gallery-container" 
    on:touchstart={handleTouchStart} 
    on:touchend={handleTouchEnd}
    tabindex="0"
    on:keydown={handleKeydown}>
    <button class="nav-button prev" on:click={prevImage}>&lt;</button>
    <div class="image-container">
        {#each images as image, i}
            <img 
                src={image} 
                alt="Gameplay screenshot {i + 1}" 
                class="gallery-image" 
                class:active={i === currentIndex}
            />
        {/each}
    </div>
    <button class="nav-button next" on:click={nextImage}>&gt;</button>
    
    <div class="dots">
        {#each images as _, i}
            <button 
                class="dot" 
                class:active={i === currentIndex} 
                on:click={() => currentIndex = i}
            ></button>
        {/each}
    </div>
</div>

<style>
    .gallery-container {
        position: relative;
        width: 100%;
        margin: 2rem 0;
        user-select: none;
    }

    .image-container {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
        overflow: hidden;
        border-radius: 4px;
    }

    .gallery-image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .gallery-image.active {
        opacity: 1;
    }

    .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: var(--background-color);
        color: var(--text-color);
        border: 1px solid var(--text-color-soft);
        padding: 0.8rem;
        cursor: pointer;
        border-radius: 50%;
        z-index: 2;
        transition: all 0.3s ease;
        opacity: 0.7;
    }

    .nav-button:hover {
        background: var(--secondary-color);
        color: var(--tex);
        opacity: 1;
    }

    .prev {
        left: 1rem;
    }

    .next {
        right: 1rem;
    }

    .dots {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 0.5rem;
        z-index: 2;
    }

    .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--text-color-soft);
        border: none;
        cursor: pointer;
        padding: 0;
        transition: all 0.3s ease;
        opacity: 0.5;
    }

    .dot.active {
        background: var(--secondary-color);
        opacity: 1;
    }
</style>

