<script>
import { onMount } from 'svelte';
import { Card } from '$lib';

onMount(() =>{
    console.log("Home Page Loaded");
});
</script>

<div id="hero">
    <img src="/images/oliva.jpg" alt="hero">
    <div class="hero-text">
        <h1>elisabeth</h1>
        <p>a picture of oliva for now </p>
    </div>
</div>

<div class="project-list">

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
        text-align: left;
        margin-left: var(--medium-space);
        color: var(--secondary-color);
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
    
    #hero img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
    
    .hero-text {
        position: absolute;
        top: 40%;
        left: var(--medium-space);
        transform: translateY(-50%);
        text-align: left;
        color: var(--secondary-color);
        mix-blend-mode: difference;
        font-size: 10rem;
    }
    
    h1 {
        margin: 0;
    }
</style>
