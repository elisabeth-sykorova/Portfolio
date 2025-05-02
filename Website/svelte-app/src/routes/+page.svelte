<script>
import { reveal } from 'svelte-reveal';
import { goto } from "$app/navigation";
import ThemeToggle from '$lib/components/ThemeToggle.svelte';
let revealDelay = 60;

const project1 = {
   name: "Buzzz vs The Harvesters",
   img: "buzzz.png",
   category: ["all", "games"],
   roles: ["Art Direction", "Animation", "Font & UI", "Textures"],
   description:"Buzzz Vs The Harvesters is a ps1-style endless runner game, similar to games such as Starfox or Panzer Dragoon.\nThis game was created for the student competition Games Fleadh 2025 and won Best in Original Art Assets award there. ",
   page: "buzz"
   
 };

 const project2 = {
   name: "Pixels",
   img: "oliva.jpg",
   category: ["all", "ui"],
   roles: ["something"],
   description:"Buzzz Vs The Harvesters is a ps1-style endless runner game, similar to games such as Starfox or Panzer Dragoon.\nThis game was created for the student competition Games Fleadh 2025 and won Best in Original Art Assets award there. ",
   page: "buzz"
 };

 let projects = [project1, project2];

 let chosenCategory = "all";


 

</script>
<div id="page-layout">
<div id="hero" style="position: relative; z-index: 1;">
    <!-- <img src="/images/oliva.jpg" alt="hero"> -->
    <div class="hero-text">
        <h1 use:reveal={{ preset: "fly", duration: 800, delay: revealDelay*10 }}>Elis(abeth)</h1>
        <h2 use:reveal={{ preset: "fly", duration: 800, delay: revealDelay*11 }}>Interactive Digital Art and Design </h2>
        <ThemeToggle />
    </div>

    <div class="logo-container">
        <img class="logo" src="/images/logo_prototype.png" alt="logo" use:reveal={{ preset: "fly", duration: 800, delay: revealDelay*12 }}>
    </div>
</div>

<div id="intro" use:reveal={{ preset: "fly"}}>
<p>
    Student of Interactive Digital Art and Design, based in Czech Republic and Ireland.
</p>
</div>


<div class="project-list" >
<h2 id="work" use:reveal={{ preset: "fly"}}>Projects</h2>
<div id="category-buttons" use:reveal={{ preset: "fly", delay: revealDelay*1}}>
    <button on:click={() => chosenCategory = "all"} class:selected={chosenCategory === "all"}> All</button>
    <button on:click={() => chosenCategory = "games"} class:selected={chosenCategory === "games"}> Games</button>
    <button on:click={() => chosenCategory = "ui"} class:selected={chosenCategory === "ui"}> Graphic Design</button>
</div>

</div>


{#each projects as project}
{#each project.category as category}
  {#if category === chosenCategory}

  <div id="entire-project" style="position: relative; z-index: 1;">
    <div id="projects">
        <a href="/{project.page}">
        <img src="/images/{project.img}" alt="project">
        </a>
    <div class="project-info">
        <a href="/{project.page}" class="project-title">{project.name}</a>
        <div class="project-description">{project.description}</div>
        <div id="roles" >
            <p>Roles:</p>
            {#each project.roles as role}
            <span>{role}</span>
            {/each}
        </div>
    </div>


    </div>

</div>
  {/if}
{/each}
{/each}


<div id="cv-download" use:reveal={{ preset: "fly"}}>
<h2 id="cv">
<a href="/CV_Elisabeth_Sýkorová.pdf" target="_blank" >cv<img src="/images/download.png" alt="download button icon" id="download-icon"></a>
</h2>
</div>
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
    /* Base styles (mobile-first) */
    #page-layout {
        display: block;
        padding: 0 1rem;
    }
    
    /* Hero section */
    .hero-text {
        margin-top: 15%;
        text-align: center;
        color: var(--text-color);
        width: 100%;
    }
    
    .hero-text h1 {
        margin: 0;
        font-size: 3rem;
    }
    
    .hero-text h2 {
        font-size: 1.1rem;
    }
    
    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: auto;
        margin-left: auto;
    }

    .logo-container img{
        margin-top: 1.5rem;
        width:3rem;
    }
    
    /* Project layout */
    #projects {
        max-width: 99%;
        margin: 2rem auto;
        display: flex;
        flex-direction: column;
        align-items: left;
        gap: 1rem;
        padding: 0;
    }
    
    #projects img {
        width: 100%;
        max-width: 100%;  /* Slightly reduced from 280px */
        border-radius: 0.5rem;
        margin: 0 auto 0.8rem auto;
        display: block;
    }
    
    .project-info {
        text-align: left;
        margin: 0 auto;
        padding: 0 0.5rem;  /* Slightly reduced padding */
    }
    
    
    .project-title {
        margin: 0 0 0.8rem 0;  /* Reduced from 1rem */
        font-size: 1.5rem;  /* Slightly reduced */
        text-decoration: none;
        color: var(--text-color);
        transition: transform 0.3s ease, color 0.3s ease;
        display: block;
        text-align: left;
    }
    
    #roles {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        gap: 0.3rem;
        margin: 0.5rem 0 1.5rem 0;  /* Reduced bottom margin */
        font-style: italic;
    }
    
    #roles span {
        font-size: 0.85rem;
        margin: 0.2rem;
        background-color: rgba(var(--text-color-rgb), 0.1);
        border-radius: 1rem;
    }
    
    /* Project section spacing */
    .project-list {
        text-align: center;
        color: var(--text-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 5rem;
        position: relative;
        z-index: 1;
    }
    
    #work {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
    
    /* Category buttons */
    #category-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.4rem;
        margin-top: 1rem;
    }
    
    button {
        font-family: var(--font-family);
        font-size: 0.9rem;
        border-radius: 15px;
        border-color: rgba(240, 248, 255, 0);
        margin: 0.3rem;
        padding: 0.3rem 0.6rem;
        background-color: var(--background-color);
        color: var(--text-color);
        transition: font-size 0.6s ease, color 0.6s ease, background-color 0.6s ease;
    }
    
    button.selected {
        color: var(--background-color);
        background-color: var(--text-color);
        font-size: 1rem;
    }
    
    button:hover, button:focus {
        color: var(--background-color);
        background-color: var(--text-color);
        font-size: 1rem;
        cursor: pointer;
    }
    
    /* Introduction section */
    #intro {
        height: auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 5rem;  /* Reduced margin */
        margin-bottom: 2rem;
        position: relative;
        z-index: 1;
        padding: 0 1rem;
    }
    
    /* CV section */
    #cv {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 3rem auto;  /* Smaller margin for mobile */
        font-size: 1.5rem;  /* Smaller font for mobile */
        position: relative;
        z-index: 1;
    }
    
    #entire-project {
        margin-bottom: 2rem;  /* Reduced from 3rem */
    }
    
    /* Desktop styles to preserve exact current appearance */
    @media screen and (min-width: 1025px) {
        #page-layout {
            padding: 0;
            display: block;
        }
        
        .hero-text {
            margin-top: 17%;
            font-size: 4rem;
        }
        
        .hero-text h1 {
            font-size: 4rem;
        }
        
        .hero-text h2 {
            font-size: 2.25rem;
        }
        
        .logo-container {
            margin-top: 5rem;
            width: 5rem;
        }
        
        #projects {
            margin-left: 20%;
            margin-top: 7rem;
            margin-right: auto;
            flex-direction: row;
            align-items: flex-start;
            gap: 1rem; /* Adds space between the image and text */
        }
        
        #projects img {
            width: 37rem;
            max-width: none;
            border-radius: 2rem;
            margin: 0;
        }
        
        .project-info {
            text-align: left;
            width: 100%;  /* Changed from auto to 100% */
            padding-right: 0;  /* Remove any padding */
        }
        
        .project-description {
            width: 50%;
            margin-right: 40%;  /* Ensure this is consistently applied */
            margin-left: 0;
            text-align: left;
            font-size: 1rem;
            white-space: pre-line;  /* Add this to ensure consistent text wrapping */
        }
        
        .project-title {
            font-size: 2rem;
            text-align: left;
        }
        
        #roles {
            justify-content: flex-start;
            gap: 1rem;
            margin-top: 2rem;
            margin-bottom: 5rem;
        }
        
        .project-list {
            margin-top: 20rem;
            font-size: 4rem;
        }
        
        #work {
            font-size: 4rem;
        }
        
        h1 {
            margin: 0;
        }
        
        h2 {
            font-size: 2.25rem;
            margin-bottom: 1rem;
        }
        
        #category-buttons {
            margin-top: 2rem;
        }
        
        button {
            font-family: var(--font-family);
            font-size: 1.3rem;
            border-radius: 15px;
            border-color: rgba(240, 248, 255, 0);
            padding: 0.2rem;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            background-color: var(--background-color);
            color: var(--text-color);
            transition: font-size 0.6s ease, color 0.6s ease, background-color 0.6s ease;
        }
        
        button.selected {
            color: var(--background-color);
            background-color: var(--text-color);
            font-size: 1.5rem;
        }
        
        button:hover, button:focus {
            color: var(--background-color);
            background-color: var(--text-color);
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        #intro {
            height: 13vh;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 20rem;
            position: relative;
            z-index: 1;
        }
        
        #hero img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
        
        #cv {
            font-size: 2rem;
            margin-top: 10%;
            margin-bottom: 10%;
        }
        
        #download-icon {
            width: 2rem;
            margin: 1rem;
        }
    }

    #download-icon {
        width: 1.2rem;  /* Further reduced for mobile */
        display: inline-block;
        vertical-align: middle;
        margin: 0.4rem;
    }
    
    #cv-download a {
        transition: transform 0.3s ease, color 0.3s ease;
    }
    
    #cv-download a:hover {
        text-decoration: none;
        transform: translateY(-3px);
        color: var(--secondary-color);
    }
    .logo {
        transform: rotate(90deg);
    }

    /* Animation for background elements */

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
    animation-duration: 45;
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
