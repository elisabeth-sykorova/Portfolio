<script>
import { reveal } from 'svelte-reveal';
import { goto } from "$app/navigation";

let revealDelay = 60;

const project1 = {
   name: "Buzzz vs The Harvesters",
   img: "buzzz.png",
   category: ["all", "games"],
   roles: ["art direction", "animation", "UI", "textures"],
   description:"descr",
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

<div id="hero">
    <!-- <img src="/images/oliva.jpg" alt="hero"> -->
    <div class="hero-text">
        <h1 use:reveal={{ preset: "fly", duration: 800, delay: revealDelay*10 }}>elisabeth</h1>
        <h2 use:reveal={{ preset: "fly", duration: 800, delay: revealDelay*11 }}>interactive digital art and design </h2>
    </div>

    <div class="logo-container">
        <img class="logo" src="/images/logo_prototype.png" alt="logo" use:reveal={{ preset: "fly", duration: 800, delay: revealDelay*12 }}>
    </div>
</div>

<div id="intro" use:reveal={{ preset: "fly"}}>
<p>
    maybe something about what i do in short yes yes yes
    <br>
    button to about me
</p>
</div>


<div class="project-list" >
<h2 id="work" use:reveal={{ preset: "fly"}}>projects</h2>
<div id="category-buttons" use:reveal={{ preset: "fly", delay: revealDelay*1}}>
    <button on:click={() => chosenCategory = "all"}> all</button>
    <button on:click={() => chosenCategory = "games"}> games</button>
    <button on:click={() => chosenCategory = "ui"}> ui</button>
</div>

</div>


{#each projects as project}
{#each project.category as category}
  {#if category === chosenCategory}

  <div id="entire-project"use:reveal={{ preset: "fly"}}>
    <div id="projects">
        <a href="/{project.page}">
        <img src="/images/{project.img}" alt="project">
        </a>
    <div class="project-info">
        <a href="/{project.page}" class="project-title" use:reveal={{ preset: "fly", delay: revealDelay*2}}>{project.name}</a>
        <div class="project-description" use:reveal={{ preset: "fly", delay: revealDelay*3}}>{project.description}</div>
    </div>


    </div>
    <div id="roles" use:reveal={{ preset: "fly", delay: revealDelay*3}}>
        <p>roles:</p>
        {#each project.roles as role}
        <span>{role}</span>
        {/each}
    </div>

</div>
  {/if}
{/each}
{/each}

<h2 id="cv">
<a href="/CV_Elisabeth_Sýkorová.pdf" target="_blank">cv</a>
</h2>



<style>
    :global(html) {
        scroll-behavior: smooth;
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
        display: block;
        flex-direction: column;
        justify-content: center;

    }
    #roles{
        margin-left: 21%;
        display: inline-flex;
        gap: 1rem;
        margin-top: 1rem;
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
    }
    h2{
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

    button:hover, button:focus{
        color: var(--background-color);
        background-color: var(--text-color);
    }



    #intro{
        height: 13vh;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 20rem;
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
    /* Animation is now handled by svelte-reveal */
</style>
