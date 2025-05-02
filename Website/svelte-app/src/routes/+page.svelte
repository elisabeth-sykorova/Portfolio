<script>
import { reveal } from 'svelte-reveal';
import { goto } from "$app/navigation";
import ThemeToggle from '$lib/components/ThemeToggle.svelte';
let revealDelay = 60;

const project1 = {
   name: "Buzzz vs The Harvesters",
   img: "buzzz.png",
   category: ["all", "games"],
   roles: ["art direction", "animation", "UI", "textures"],
   description:"Buzzz Vs The Harvesters is a ps1-style endless runner game, similar to games such as Starfox or Panzer Dragoon.\nThis game was created for the student competition Games Fleadh 2025 and won Best in Original Art Assets award there. ",
   page: "buzz"
   
 };

 const project2 = {
   name: "Pixels",
   img: "oliva.jpg",
   category: ["all", "ui"],
   roles: ["something"],
   description:"descr",
   page: "buzz"
 };

 let projects = [project1, project2];

 let chosenCategory = "all";


 

</script>

<div id="hero" style="position: relative; z-index: 1;">
    <!-- <img src="/images/oliva.jpg" alt="hero"> -->
    <div class="hero-text">
        <h1 use:reveal={{ preset: "fly", duration: 800, delay: revealDelay*10 }}>elisabeth</h1>
        <h2 use:reveal={{ preset: "fly", duration: 800, delay: revealDelay*11 }}>interactive digital art and design </h2>
        <ThemeToggle />
    </div>

    <div class="logo-container">
        <img class="logo" src="/images/logo_prototype.png" alt="logo" use:reveal={{ preset: "fly", duration: 800, delay: revealDelay*12 }}>
    </div>
</div>

<div id="intro" use:reveal={{ preset: "fly"}}>
<p>
    Student of Interactive Digital Art and Design
</p>
</div>


<div class="project-list" >
<h2 id="work" use:reveal={{ preset: "fly"}}>projects</h2>
<div id="category-buttons" use:reveal={{ preset: "fly", delay: revealDelay*1}}>
    <button on:click={() => chosenCategory = "all"} class:selected={chosenCategory === "all"}> all</button>
    <button on:click={() => chosenCategory = "games"} class:selected={chosenCategory === "games"}> games</button>
    <button on:click={() => chosenCategory = "ui"} class:selected={chosenCategory === "ui"}> ui</button>
</div>

</div>


{#each projects as project}
{#each project.category as category}
  {#if category === chosenCategory}

  <div id="entire-project" use:reveal={{ preset: "fly"}} style="position: relative; z-index: 1;">
    <div id="projects">
        <a href="/{project.page}">
        <img src="/images/{project.img}" alt="project">
        </a>
    <div class="project-info">
        <a href="/{project.page}" class="project-title" use:reveal={{ preset: "fly", delay: revealDelay*2}}>{project.name}</a>
        <div class="project-description" use:reveal={{ preset: "fly", delay: revealDelay*3}}>{project.description}</div>
        <div id="roles" use:reveal={{ preset: "fly", delay: revealDelay*3}}>
            <p>roles:</p>
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


<div id="cv-download">
<h2 id="cv">
<a href="/CV_Elisabeth_Sýkorová.pdf" target="_blank" >cv<img src="/images/download.png" alt="download button icon" id="download-icon"></a>
</h2>
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
    :global(html) {
        scroll-behavior: smooth;
    }

    #download-icon{
        width:2rem;
        display: inline-block;
        vertical-align: middle;
        margin: 1rem;
    }

    #cv-download a{
        transition: transform 0.3s ease, color 0.3s ease;
    }

    #cv-download a:hover {
        text-decoration: none;
        transform: translateY(-3px);
        color: var(--secondary-color);
    }

    #cv{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: auto;
        margin-left: auto;
        margin-top: 10%;
        margin-bottom: 10%;
        font-size: 2rem;
        position: relative;
        z-index: 1;
    }
    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: auto;
        margin-left: auto;
        margin-top: 5rem;
        width: 5rem;
    }
    
    .logo {
        transform: rotate(90deg);
    }

    .project-description{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 40%;
        width: 50%;
    }
    #roles{
        display:flex;
        gap: 1rem;
        margin-top: 2rem;
        margin-bottom: 5rem;
    }

    .project-title{
        font-size: 2rem;
        text-decoration: none;
        color: var(--text-color);
        transition: transform 0.3s ease, color 0.3s ease;
        display: block; 
    }

    .project-title:hover{
        transform: translateY(-3px);
        color: var(--secondary-color);
    }

    #projects img{
        width: 37rem;
        border-radius: 2rem;
    }
    #projects{
        margin-left: 20%;
        margin-top: 7rem;
        display: flex;
        align-items: flex-start; /* Align items at the top */
        gap: 1rem; /* Adds space between the image and text */
    }


    #category-buttons{
        margin-top: 2rem;
    }

    
    
    .project-list {
        text-align: center;
        color: var(--text-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 20rem;
        position: relative;
        z-index: 1;
        font-size: 4rem;
    }


    button{
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

    button:hover, button:focus{
        color: var(--background-color);
        background-color: var(--text-color);
        font-size: 1.5rem;
        cursor: pointer;
    }



    #intro{
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
    
    .hero-text {
        margin-top: 13%;
        text-align: center;
        color: var(--text-color);
        font-size: 4rem;
        width: 100%;
    }
    
    h1 {
        margin: 0;
    }
    #work{
        font-size: 4rem;
    }
    h2 {
        font-size: 2.25rem;
        margin-bottom: 1rem;
    }

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
