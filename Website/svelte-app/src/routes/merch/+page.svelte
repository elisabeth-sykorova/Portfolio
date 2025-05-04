<script>
    import { onMount } from 'svelte';
    import { reveal } from 'svelte-reveal';
    import { slide } from 'svelte/transition';
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import ImageGallery from '$lib/components/ImageGallery.svelte';

    let revealDelay = 60;
    
    // Define sections for table of contents
    const tocSections = [
        { id: 'intro', title: 'Introduction', level: 2 },
        { id: 'moodboard', title: 'Moodboard', level: 2 },
        { id: 'website', title: 'Live Website', level: 2 },
        { id: 'github', title: 'Github Repository', level: 2 },
    ];
    
    let isMobile = false;
    
    onMount(() => {
        console.log("Gregor page loaded");
        isMobile = window.innerWidth <= 768;
        window.addEventListener('resize', () => {
            isMobile = window.innerWidth <= 768;
        });
    });
</script>



<div class="page-layout">
    <div id="content">
        <h1 id="title" use:reveal={{ preset: "fly"}}>
            Merchandise Website
        </h1>
        <p id="roles" use:reveal={{ preset: "fly", delay: revealDelay*1}}>Roles: Web Design, Web Deveopment</p>
            <img src='/images/merch.png' class='media' alt='main page screenshot'>
        <div id="intro">
            <h2>Introduction</h2>
            <p>
                Merchandise Website
                <br>
                Authors: Elisabeth Sykorova, David Hajek, Tymotheuzs Walichnovski
            </p>
        </div>

        <div id="software-used">
            <h3>Tools Used:</h3>
            <ul>
                <li><img src='/images/ps.png' alt='adobe photoshop logo'>Adobe Photoshop</li>
                <li><img src='/images/svelte.png' alt='svelte logo'> Svelte</li>
                <li>- Warp AI</li>
            </ul>
        </div>

        <h2 id='moodboard'>Moodboard</h2>
        <img src='/images/merch/Merch_Store_Moodboard.png' alt='moodboard' class='media'>

        <h2 id='website'>Live Website</h2>
        <a href='https://david-hajek.github.io/Web-UI-Design-Group-Project/' target='_blank'>Merchandise Website</a>


        <h2 id='github'>GitHub Repository</h2>
        <a href='https://github.com/David-Hajek/Web-UI-Design-Group-Project' class='gh-link' target="_blank"><img src='/images/github.png' alt='github logo' class='gh'>Project Repository</a>
    
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

    .gh-link {
        display: inline;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
    }
    .gh {
        height: 2rem;
        width: auto;
        margin-right: 1rem;
        margin-top: 0rem;
    }
    iframe {
        width: 100%;
        height: 60rem;
    }

    .media {
        transition: transform 0.3s ease;
    }

    .media:hover {
        transform: scale(1.15);
    }
    ul {
        list-style: none;
        display: flex;
        gap: 2rem;
    }
    li img{
        margin-top: 0rem;
        height: 2rem;
        margin-right: 0.5rem;
    }

    li {
        display: flex;
        align-items: center;
        overflow: hidden;
    }

    #end {
        margin-bottom: 20%;
    }

    #roles {
        font-style: italic;
    }
    .playable {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        height: 0;
        overflow: hidden;
        max-width: 100%;
        margin: 2rem 0;
        border-radius: 8px;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }

    .playable iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
    h1, h2, h3 {
        margin-bottom: 1rem;
    }

    p {
        margin-block-end: 0rem;
    }

    img{
        margin-top: 2rem;
        border-radius: 10px;
        max-width: 100%;
    }
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

        #title {
            font-size: 3rem;
        }
        div {
            margin-top: 20%;
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
