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
    </div>
</div>

<div class="project-list">

<h2>projects:</h2>
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

    .project-list{
        text-align: left;
        margin-left: 0.5rem;
        color: var(--secondary-color);
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
        top: 90%;
        left: 0.5rem;
        transform: translateY(-50%);
        text-align: left;
    }
    
    h1 {
        font-size: 3rem;
        color: var(--text-color);
        margin: 0;
    }
</style>
