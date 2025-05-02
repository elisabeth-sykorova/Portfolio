<script>
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import ImageGallery from '$lib/components/ImageGallery.svelte';

    // Array of gameplay images for skybox gallery
    const skyboxImages = [
        '/images/buzz/gameplay1.png',
        '/images/buzz/gameplay2.png',
        '/images/buzz/gameplay3.png'
    ];
    
    // Define sections for table of contents
    const tocSections = [
        { id: 'intro', title: 'Introduction', level: 2 },
        { id: 'animation', title: 'Animation', level: 2 },
        { id: 'animation-buzz', title: 'Buzzz', level: 3 },
        { id: 'animation-enemies', title: 'Enemies', level: 3 },
        { id: 'animation-environment', title: 'Environment', level: 3 },
        { id: 'texturing', title: 'Texturing', level: 2 },
        { id: 'texturing-mushrooms', title: 'Mushrooms', level: 3 },
        { id: 'texturing-skybox', title: 'Skybox & Color Correction', level: 3 },
        { id: 'ui', title: 'Font & UI elements', level: 2 },
        { id: 'end', title: 'Trailer & Links', level: 2 }
    ];
    
    let isMobile = false;
    
    onMount(() => {
        console.log("Buzz page loaded");
        isMobile = window.innerWidth <= 768;
        window.addEventListener('resize', () => {
            isMobile = window.innerWidth <= 768;
        });
    });
</script>



<div class="page-layout">
    <div id="content">
        <h1 id="title">
            Buzzz Vs<br>The Harvesters
        </h1>

        <div id="intro">
            <h2>Introduction</h2>
            <p>
                A game created for the Games Fleadh 2025 Competition.
            </p>
            <p>
                Won an award for Best Original in Game Assets
            </p>
            <p>
                roles: art direction, animation, texturing, font & ui
            </p>
            <p> teammates: David Hajek, Pavel Dobias, Lucy Arthur, Robert McGregor</p>
        </div>

        <div id="animation">
            <h2>Animation</h2>
            <div id="animation-buzz">
                <h3>Buzzz</h3>
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xn725u_cIbU?si=2g_Pr2OijrEapBFM&modestbranding=1&controls=0&rel=0&showinfo=0&color=white&iv_load_policy=3&playsinline=1&enablejsapi=1&loop=1&mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div id="animation-enemies">
                <h3>Swarmer</h3>
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/J3aXm9T3Aoc?si=6zDaCH6uiFXOe76f&modestbranding=1&controls=0&rel=0&showinfo=0&color=white&iv_load_policy=3&playsinline=1&enablejsapi=1&loop=1&mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <h3>Feeder</h3>
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/COWe8CeCq8Y?si=7lJBaqGorHTUk4Fd&modestbranding=1&controls=0&rel=0&showinfo=0&color=white&iv_load_policy=3&playsinline=1&enablejsapi=1&loop=1&mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div id="animation-environment">
                <h3>Environment</h3>
                <div class="video-container">
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1080904020?h=04a9a09045&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Environment Animations; BUZZZ VS THE HARVESTERS; Games Fleadh 2025"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            </div>
        </div>

        <div id="texturing">
            <h2>Texturing</h2>
            <div id="texturing-mushrooms">
                <h3>Mushrooms</h3>
                <div class="video-container">
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1080904020?h=04a9a09045&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Environment Animations; BUZZZ VS THE HARVESTERS; Games Fleadh 2025"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            </div>
            <div id="texturing-skybox">
                <h3>Skybox & Overall Color Correction</h3>
                <div class="gallery-card">
                    <ImageGallery images={skyboxImages} />
                </div>
            </div>
        </div>

        <div id="ui">
            <h2>Font & UI elements</h2>
        </div>

        <div id="end">
            <h2>Trailer & Links</h2>
            <div class="video-container">
                <iframe src="https://setuo365-my.sharepoint.com/personal/c00301316_setu_ie/_layouts/15/embed.aspx?UniqueId=e1d77e12-393f-475a-9613-dcec36ac8e35&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="BuzzzVsTheHarvestersTrailer.mp4"></iframe>
            </div>
            <br>
            <a href="https://reverend-speed.itch.io/buzzz-vs-the-harvesters">Link to our itch.io page</a>
        </div>
    </div>
    
    {#if !isMobile}
        <aside class="toc-sidebar">
            <TableOfContents sections={tocSections} />
        </aside>
    {:else}
        <div class="mobile-toc">
            <TableOfContents sections={tocSections} />
        </div>
    {/if}
</div>


<div class="background">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
 </div>



<style>

    #title{
        white-space: nowrap;
    }
    /* Responsive video container */
    .video-container {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        height: 0;
        overflow: hidden;
        max-width: 100%;
        margin: 2rem 0;
        border-radius: 8px;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }
    
    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        pointer-events: none; /* Prevents interaction with video UI */
    }

    h1 {
        margin-top: 10%;
        font-size: 4rem;
        display: flex;
    }

    h2 {
        margin-top: 10%;
        scroll-margin-top: 100px; /* Add spacing for anchor links */
    }

    h3 {
        margin-top: 10%;
        scroll-margin-top: 100px; /* Add spacing for anchor links */
    }

    .page-layout {
        display: flex;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    #content {
        flex: 1;
        max-width: 800px;
    }
    
    .toc-sidebar {
        flex: 0 0 250px;
        margin-left: 2rem;
    }
    
    .mobile-toc {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        z-index: 1000;
    }
    
    @media screen and (max-width: 768px) {
        .page-layout {
            display: block;
            padding: 0 1rem;
        }

        #content {
            max-width: 100%;
        }

        .mobile-toc {
            position: fixed;
            bottom: 1rem;
            right: 1rem;
            z-index: 1000;
        }
    }
    
    /*background*/

    @keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

    .background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: var(--background-color);
    overflow: hidden;
    z-index: -1;
}

.background span {
    width: 50vmin;
    height: 50vmin;
    border-radius: 50vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 45s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: var(--effect-color);
    top: 94%;
    left: 62%;
    animation-duration: 22s;
    animation-delay: -31s;
    transform-origin: -7vw 2vh;
    box-shadow: 100vmin 0 12.854635182458411vmin currentColor;
}
.background span:nth-child(1) {
    color: var(--effect-color);
    top: 83%;
    left: 22%;
    animation-duration: 36s;
    animation-delay: -19s;
    transform-origin: -6vw 20vh;
    box-shadow: -100vmin 0 13.36585824247817vmin currentColor;
}
.background span:nth-child(2) {
    color: var(--effect-color);
    top: 74%;
    left: 18%;
    animation-duration: 10s;
    animation-delay: -4s;
    transform-origin: 18vw -3vh;
    box-shadow: 100vmin 0 13.03396788093905vmin currentColor;
}
.background span:nth-child(3) {
    color: var(--effect-color);
    top: 55%;
    left: 79%;
    animation-duration: 26s;
    animation-delay: -4s;
    transform-origin: -16vw 20vh;
    box-shadow: -100vmin 0 12.945415346585264vmin currentColor;
}
.background span:nth-child(4) {
    color: var(--effect-color);
    top: 62%;
    left: 66%;
    animation-duration: 45s;
    animation-delay: -1s;
    transform-origin: 14vw 22vh;
    box-shadow: -100vmin 0 12.739353426182024vmin currentColor;
}
.background span:nth-child(5) {
    color: var(--effect-color);
    top: 55%;
    left: 36%;
    animation-duration: 6s;
    animation-delay: -27s;
    transform-origin: -17vw 4vh;
    box-shadow: -100vmin 0 12.760383004883787vmin currentColor;
}
.background span:nth-child(6) {
    color: var(--effect-color);
    top: 77%;
    left: 2%;
    animation-duration: 19s;
    animation-delay: -7s;
    transform-origin: -24vw 0vh;
    box-shadow: -100vmin 0 12.851952212086125vmin currentColor;
}
.background span:nth-child(7) {
    color: var(--effect-color);
    top: 92%;
    left: 42%;
    animation-duration: 46s;
    animation-delay: -46s;
    transform-origin: -19vw -7vh;
    box-shadow: -100vmin 0 13.21066056938132vmin currentColor;
}
.background span:nth-child(8) {
    color: var(--effect-color);
    top: 37%;
    left: 36%;
    animation-duration: 10s;
    animation-delay: -32s;
    transform-origin: -24vw 23vh;
    box-shadow: -100vmin 0 13.380017884256299vmin currentColor;
}
.background span:nth-child(9) {
    color: var(--effect-color);
    top: 64%;
    left: 88%;
    animation-duration: 43s;
    animation-delay: -47s;
    transform-origin: -18vw 3vh;
    box-shadow: -100vmin 0 13.254028955934459vmin currentColor;
}
.background span:nth-child(10) {
    color: var(--effect-color);
    top: 84%;
    left: 6%;
    animation-duration: 26s;
    animation-delay: -38s;
    transform-origin: 10vw 0vh;
    box-shadow: -100vmin 0 13.150690606333166vmin currentColor;
}
.background span:nth-child(11) {
    color: var(--effect-color);
    top: 36%;
    left: 82%;
    animation-duration: 17s;
    animation-delay: -33s;
    transform-origin: 18vw 4vh;
    box-shadow: 100vmin 0 12.961230186861755vmin currentColor;
}

</style>
