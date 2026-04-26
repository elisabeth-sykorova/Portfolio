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
<div id="content">
<h1>
    Visual Clock Project
</h1>
<p>A creative project with the abstract and open prompt "Create a visual clock. This project is heavily inspired by cut-out stop-motion animations, which I digitally recreated. All photographs in the video are my original work, as well as the background audio. The narrative of the looping video reflects how I feel as a univeristy student in this day and age that must also work part(full)-time to afford being a student! The pictures were taken by my iPhone 12 mini, taken into Photoshop, cut out, and then animated in DaVinci Resolve.</p>

</div>

    <video class= "hero-video"
    loop
    playsinline
    controls
    style="inset: 0; object-fit: cover; z-index: -1; max-width: 70%;"
  >
    <source src="{base + '/VisualClock.mp4'}" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

<style>
        h1 {
        margin-top: 10%;
        font-size: 4rem;
        display: flex;
    }
    p {
        margin-bottom: 3rem;
    }
    #content {
        display: block;
        max-width: 60%;
        margin-right: auto;
        margin-left: auto;
    }
    .hero-video{
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-top: 2rem;
        margin-bottom: 5rem;
    }

</style>