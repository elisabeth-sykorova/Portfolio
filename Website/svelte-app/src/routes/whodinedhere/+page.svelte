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
    return `${base}/images/whodinedhere/who-dined-here-${num}.png`;
  });


  // Generate the list of image paths
  const pages = Array.from({ length: 20 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `${base}/images/whodinedhere/who-dined-here-${num}.png`;
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
<div class="page-layout">
<div id="content">
<h1 id="title">
    Who Dined Here?
</h1>
<p>
  "Who Dined Here?" is a mixed-media zine created using original photography captured on my iPhone 12 mini, and digital elements added in Photoshop. What this zine is about is entirely up to your own interpretation!
</p>
<p> Flip through the Zine here:</p>
</div>
</div>

<div>
    <iframe allowfullscreen="allowfullscreen" allow="clipboard-write" scrolling="yes" class="fp-iframe" src="https://heyzine.com/flip-book/a2eeefa23b.html"></iframe>
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

</div>

<style>
.fp-iframe {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10rem;
  border: 0px solid lightgray;
  width: 100%;
  height: 830px;

}
  .zine-gallery {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0rem 0;
    display: flex;
    flex-direction: column;
    gap: 10rem;
  }
    #content {
       flex: 1;
        max-width: 800px;
        align-content: center;
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
    h1, h2, h3 {
        margin-bottom: 1rem;
    }

    p {
        margin-block-end: 3rem;
    }
    #title{
        white-space: nowrap;
    }
    /* Responsive video container */

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

</style>