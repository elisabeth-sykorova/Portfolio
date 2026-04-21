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

      // Generate the list of image paths
  const pages2 = Array.from({ length: 20 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `/images/whodinedhere/who-dined-here-${num}.png`;
  });


  // Generate the list of image paths
  const pages = Array.from({ length: 20 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `/images/whodinedhere/who-dined-here-${num}.png`;
  });

  // Build spreads:
  // Spread 1: [1, 20]
  // Spread 2+: [2,3], [4,5], [6,7], ...
  const spreads = [];

  // First spread: page 1 + page 20
  spreads.push([pages[0], pages[pages.length - 1]]);

  // Remaining spreads: 2-3, 4-5, 6-7...
  for (let i = 1; i < pages.length - 1; i += 2) {
    spreads.push([pages[i], pages[i + 1]]);
  }


</script>


<h1>
    Who Dined Here?
</h1>

<div>
    <iframe allowfullscreen="allowfullscreen" allow="clipboard-write" scrolling="yes" class="fp-iframe" src="https://heyzine.com/flip-book/a2eeefa23b.html" style="border: 100px solid lightgray; width: 100%; height: 990px;"></iframe>
</div>

<div>

<div class="zine-gallery">
  {#each spreads as spread}
    <div class="spread">
      <img src={spread[0]} alt="Left page" />
      <img src={spread[1]} alt="Right page" />
    </div>
  {/each}
</div>





<p>Original Photography Zine</p>
</div>

<style>





  .zine-gallery {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0rem 0;
    display: flex;
    flex-direction: column;
    gap: 10rem;
  }

  .spread {
    display: flex;
  }

  .spread img {
    width: 50%;
    display: block;
  }

  


        h1 {
        margin-top: 2%;
        margin-bottom: 10%;
        font-size: 4rem;
        display: flex;
    }

</style>