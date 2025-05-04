<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import { reveal } from 'svelte-reveal';
    import { slide } from 'svelte/transition';
    import TableOfContents from '$lib/components/TableOfContents.svelte';

    let revealDelay = 60;

    // Array of gameplay images for skybox gallery
    // Define sections for table of contents
    const tocSections = [
        { id: 'intro', title: 'Introduction', level: 2 },
        { id: 'one', title: 'Logo Variations', level: 2 },
        { id: 'two', title: 'Color Palette', level: 2 },
        { id: 'three', title: 'Font Choice', level: 2 },
        { id: 'four', title: 'Product Mockups', level: 2 },
        { id: 'end', title: 'Relevant Links', level: 2 }
    ];
    
    let isMobile = false;
    
    onMount(() => {
        console.log("KS page loaded");
        isMobile = window.innerWidth <= 768;
        window.addEventListener('resize', () => {
            isMobile = window.innerWidth <= 768;
        });
    });
</script>



<div class="page-layout">
    <div id="content">
        <h1 id="title" use:reveal={{ preset: "fly"}}>
            KronoShield Visual Identity
        </h1>
        <p id="roles" use:reveal={{ preset: "fly", delay: revealDelay*1}}>Roles: Visual Identity Designer</p>
        <div use:reveal={{ preset: "fly", delay: revealDelay}} >
            <img src="{base}/images/ks/KS_horizontal_transparent.png" alt='horizontal logo' class='media'>
        </div>
        <div id="intro">
            <h2>Introduction</h2>
            <p>
                This is a full visual identity created for a start-up cyber-security company KronoShield. It includes variations of logos, color palette, font, and multiple product mockups.
                <br>
                I was asked to create this visual identity after winning KronoShield's student logo competition they held at the end of 2024.
            </p>
        </div>

        <div id="software-used">
            <h3>Tools Used:</h3>
            <ul>
                <li><img src='{base}/images/ink.png' alt ='inkscape logo'>Inkscape</li>
                <li><img src='{base}/images/penpot.png' alt='penpot logo'>Penpot</li>
            </ul>
        </div>

        <div id="one" >

            <h2>Logo Variations</h2>

            <p>
                The logo variations include the main - vertical - logo in multi-color, single-color, and black & white options, and the multi-color horizontal logo.
            </p>
                    <div id='vertical-logos'>
                        <h3>Multi-color Vertical</h3>
                        <img src='{base}/images/ks/KS_multicolor_vertical.png' class='media' alt='multicolor vertical logo'>
                        <br>
                        <h3>Single-color Vertical</h3>
                        <img src='{base}/images/ks/vertical_darker.png' class='media' alt='single-color darker vertical logo'>
                        <img src='{base}/images/ks/vertical_lighter.png' class='media' alt='single-color lighter vertical logo'>
                        <br>
                        <h3>Black & White Vertical</h3>
                        <img src="{base}/images/ks/vertical_black.png" class='media' alt='black vertical logo'>
                        <img src='{base}/images/ks/vertical_white.png' class='media' alt='white vertical logo'>
                    </div>


                <h3>Horizontal Logo</h3>
                    <img src='{base}/images/ks/KS_horizontal_transparent.png' class='media' alt='multicolor horizontal logo'>
                <div>
        </div>
        </div>

        <div id="two">
            <h2>Color Palette</h2>
            <p>For the color palette I ended up choosing these blue/green shades. These colors come off as professional and trustworthy as well as open and friendly, which aligns well with the companies' goals.</p>
            <img src='{base}/images/ks/primary.png' alt='primary color palette' class='media'><img src='{base}/images/ks/secondary.png' alt='secondary color palette' class='media'>
        </div>

        <div id="three">
            <h2>Font Choice</h2>
            <p>Upon the customer's request, the chosen font is sans-serif. I ended up choosing the font Urbanist for its simplicity. </p>
            <img src="{base}/images/ks/font.png" alt="font showcase" class='media'>
        </div>

        <div id='four'>
            <h2>Product Mockups</h2>
            <p>To showcase the usage of the visual identity, I have created a few product mockups that include business card and t-shirt design concepts.</p>
            <h3>Business Card - Colored</h3>
            <img src='{base}/images/ks/KS_business_card_mockup_color.png' class='media' alt='colored business card mockup'>
            <h3>Business Card - Black & White</h3>
            <img src='{base}/images/ks/KS_business_card_mockup_black_and_white.png' class = 'media' alt='black and white business card mockup'>
            <h3> T-Shirt - White, Colored Graphics</h3>
            <img src='{base}/images/ks/KS_tshirt_mockup2.png' class ='media' alt='tshirt design mockup'>
            <h3> T-Shirt - White, Black Graphics</h3>
            <img src='{base}/images/ks/KS_tshirt_mockup1.png' class ='media' alt='tshirt design mockup'>
            <h3> T-Shirt - Black, White Graphics</h3>
            <img src='{base}/images/ks/KS_tshirt_mockup1_dark.png' class ='media' alt='tshirt design mockup'>

        </div>


        <div id="end">
            <h2>Relevant Links</h2>
            <a href="https://design.penpot.app/#/view?file-id=cec80257-5021-8137-8005-ec22326aa22d&page-id=cec80257-5021-8137-8005-ec22326aa22e&section=interactions&index=0&share-id=cec80257-5021-8137-8005-efd66dcf8dad" target="_blank">Visual Identity Catalog on Penpot</a>

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

    #vertical-logos img{
        max-width: 15rem;
        border-radius: 0;
        margin-right: 3rem;
        margin-bottom: 2rem;
        margin-top: 3rem;
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
        margin-block-end: 1rem;
    }

    img{
        border-radius: 10px;
        max-width: 100%;
        margin-top: 2rem;

    }
    #title{
        white-space: nowrap;
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