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
    Timeless Recordplayer
</h1>

<p>Small creative project; my first experience coding a "game" in C++ SFML. It is an interactive experience where you can ascroll through albums, pick one, take the vinyl, and play it on the recordplayer. All assets, including the custom font, are hand-crafted by me. :)</p>


<p>How it looks:</p>
<video 
    src="{base}/timeless/TimelessRecordplayer.mov" 
    autoplay 
    loop 
    muted 
    playsinline 
    style="width:100%; height:auto;">
</video>
<p>Art Documentation:</p>
<iframe
  src="{base}/timeless/Timeless-Record-Player_ASSETS.pdf#toolbar=0&navpanes=0&scrollbar=0"
  style="border: none; width: 100%; height: 100vh;"
></iframe>
</div>

<style>

        h1 {
        margin-top: 10%;
        font-size: 4rem;
        display: flex;
    }
    p {
        margin-bottom: 1rem;
    }
    #content {
        display: block;
        max-width: 60%;
        margin-right: auto;
        margin-left: auto;
    }

video{
    display: block;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0rem;
    margin-bottom: 5rem;
}

</style>