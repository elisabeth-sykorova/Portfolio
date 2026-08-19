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
        console.log("Palacinka page loaded");
        isMobile = window.innerWidth <= 768;
        window.addEventListener('resize', () => {
            isMobile = window.innerWidth <= 768;
        });
    });
</script>

<div class="hero">
    <img src="{base}/images/palacinka/palacinka-hero.png" alt="" class="hero-bg">

    <div id="content">


        <h1>Palacinka</h1>


        <p>    Palacinka is a Run-and-Gun 2D game set in a futuristic dystopian world inside a comic book.<br>
You play as Palacinka, who gets sucked into a comic book that one day lands at her door. Finding herself in a dystopian version of
her reality full of hostile technological creatures, she has to fight her way through and escape out of the comic book.<br>
This game was created as part of Game Studies at Tecnocampus in the span of a few weeks. The assignment was to create a "run-and-gun" game in comic book style.<br>
I worked as the art lead, animator, character and environmental visual designer, and UI artist.</p>


        <p id="link">Play "Palacinka" here: <a href="https://https://rogerpuerta.itch.io/palacinka" target="_blank">Palacinka on itch.io</a></p>


    </div>
</div>

<!-- <div class="playable" use:reveal={{ preset: "fly", delay: revealDelay}} >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3IUzN_qDRYk?si=BZFvXBNchDVW6sfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div> -->
        

<div id="screenshots">
<iframe width="560" height="315" src="https://www.youtube.com/embed/D3u8UzpBswo?si=WL1dxtfXnwrd6-wF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <!-- <img src='{base}/images/asilenthero/ash-path.png' alt='gameplay screenshot'>
    <img src='{base}/images/asilenthero/ash-store.png' alt='gameplay screenshot'>
    <img src='{base}/images/asilenthero/tsh-fox.png' alt='gameplay screenshot'>
    <img src='{base}/images/asilenthero/ash-town.png' alt='gameplay screenshot'>
    <img src='{base}/images/asilenthero/tsh-forest.png' alt='gameplay screenshot'>
    <img src='{base}/images/asilenthero/tsh-cave.png' alt='gameplay screenshot'> -->
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
    height: 120vh; /* adjust height as needed */
    overflow: hidden;
}

/* Full-width background image */
.hero-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top; /* or center bottom */
}

/* Centered text container on top of the image */
#content {
    position: relative;
    z-index: 1;
    max-width: 60%;
    margin: 0 auto;
    margin-right: 30%;
    padding-top: 7%;
    color: white;
    text-shadow: 0 2px 10px rgba(0,0,0,1),0 2px 100px rgba(0,0,0,1) ; /* improves readability */
    
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