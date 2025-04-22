<script>
import { reveal } from 'svelte-reveal';

let revealDelay = 60;
</script>

<div id="hero">
    <!-- <img src="/images/oliva.jpg" alt="hero"> -->
    <div class="hero-text">
        <h1 use:reveal={{ preset: "fly", duration: 800, delay: revealDelay*10 }}>elisabeth</h1>
        <h2 use:reveal={{ preset: "fly", duration: 800, delay: revealDelay*11 }}>interactive digital art and design </h2>
    </div>
</div>

<div id="intro" use:reveal={{ preset: "fly"}}>
<p>
    maybe something about what i do in short yes yes yes
    <br>
    button to about me
</p>
</div>


<div class="project-list" use:reveal={{ preset: "fly"}}>

<h2 id="work">projects:</h2>
<ul>
    <li>project 1</li>
    <li>project 2</li>
    <li>project 3</li>
</ul>

</div>

<!-- Gallery -->

<!-- <div class ="gallery">
   <Card title="Card 1" description="This is the first card" link="/contact"/>
    <Card title="Card 2" description="This is the second card" link="/contact"/>
    <Card title="Card 3" description="This is the third card" />
    <Card title="Card 4" description="This is the fourth card" />
</div> -->

<style>

    .project-list {
        height: 100vh;
        text-align: left;
        margin-left: var(--medium-space);
        color: var(--text-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem 0;
    }
    h2{
        font-size: 4rem;
    }
    li {
        font-size: 3rem;
    }
    
    .project-list ul {
        list-style-type: none;
        padding: 0;
    }
    
    .project-list li {
        margin-bottom: 0.5rem;
    }
    #hero {
        position: relative;
        height: calc(100vh - 3rem); /* Viewport height minus header height */
        width: 100%;
        overflow: hidden;
    }

    #intro{
        height: 20vh;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 var(--medium-space);
    }
    
    #hero img {
        transform: translate(0%, 3.5%);
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
    
    .hero-text {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: var(--text-color);
        font-size: 4rem;
    }
    
    h1 {
        margin: 0;
    }
    #work{
        font-size: 4rem;
    }
    h2 {
        font-size: 2.25rem;
    }
    /* Animation is now handled by svelte-reveal */
</style>
