<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import { reveal } from 'svelte-reveal';
    import TableOfContents from '$lib/components/TableOfContents.svelte';

    let revealDelay = 60;

    // Array of gameplay images for skybox gallery
    const skyboxImages = [
        `${base}/images/buzz/gameplay1.png`,
        `${base}/images/buzz/gameplay2.png`,
        `${base}/images/buzz/gameplay3.png`
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
        { id: 'end', title: 'Relevant Links', level: 2 }
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

<div class="hero">
    <img src="/images/asilenthero/splash.png" alt="" class="hero-bg">

    <div id="content">


        <h1>A Silent Hero</h1>


        <p>    A Silent Hero is a narrative-driven, fable-themed side-scroller.<br>
You play as the silent Little Lamb, living in a quaint town on Ireland’s southwestern
coast. One day, you are chosen to slay the monster An Phiast.
Follow your path and uncover the untold story of An Phiast, but remember!<br>
You have no voice, so only your actions can speak for you.
How closely you watch, and what choices you make, will shape your journey.</p>


        <p id="link">Play "A Silent Hero" here: <a href="https://elisyko.itch.io/a-silent-hero" target="_blank">A Silent Hero on itch.io</a></p>


    </div>
</div>

<!-- <div class="playable" use:reveal={{ preset: "fly", delay: revealDelay}} >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3IUzN_qDRYk?si=BZFvXBNchDVW6sfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div> -->
        

<div id="screenshots">
    <img src='{base}/images/asilenthero/ash-path.png' alt='gameplay screenshot'>
    <img src='{base}/images/asilenthero/ash-store.png' alt='gameplay screenshot'>
    <img src='{base}/images/asilenthero/tsh-fox.png' alt='gameplay screenshot'>
    <img src='{base}/images/asilenthero/ash-town.png' alt='gameplay screenshot'>
    <img src='{base}/images/asilenthero/tsh-forest.png' alt='gameplay screenshot'>
    <img src='{base}/images/asilenthero/tsh-cave.png' alt='gameplay screenshot'>
</div>

<style>
    iframe {
        margin-top: 10rem;
        height: 830px;
        width: 80%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

#screenshots img{
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
}
        h1 {
        margin-top: 10%;
        font-size: 4rem;
        display: flex;
    }
/* Full-width hero section */
.hero {
    position: relative;
    width: 100%;
    height: 100vh; /* adjust height as needed */
    overflow: hidden;
}

/* Full-width background image */
.hero-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    opacity: 1; /* full opacity */
}

/* Centered text container on top of the image */
#content {
    position: relative;
    z-index: 1;
    max-width: 60%;
    margin: 0 auto;
    margin-left: 55%;
    padding-top: 10%;
    color: white;
    text-shadow: 0 2px 10px rgba(0,0,0,0.6); /* improves readability */
}

/* Screenshots below the hero */
#screenshots img {
    width: 60%;
    margin: auto;
    display: block;
    margin: 3rem auto 1rem auto;
}
    p {
        margin-bottom: 2rem;
        max-width: 80%;
    }
    #link{
        font-style: italic;
        font-size: 20px;
    }

    a{
        text-decoration: underline;
    }
</style>