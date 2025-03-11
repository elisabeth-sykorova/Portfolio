<script>
    import { onMount } from 'svelte';
    onMount(() =>{
        console.log("Contacts loaded");
    });
    </script>
    
    <div id="hero">
    <h1>Who am I and Where to Find Me</h1>
    </div>
        <ul id="socials">
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Email</li>
        </ul>
    <p>get in touch via email at <a href="mailto:example@email.com">info@example.com</a>.</p>
    
    <style>
        h1{color: #ffffff;}
        p{font-size: 28px;}
        a{color: #ff0000;}
        a:hover {color:  #ffffff;}

        #hero{background-color: var(--primary-color);
        padding: 3rem;
        border-top: 1.5px var(--text-color) solid;
        border-bottom: 1.5px var(--text-color) solid;}

        #socials{
        list-style: none;
        font-size: 14px;
        display: flex;
        justify-content: center;
        border-bottom: 1.5px var(--text-color) solid;
        }
/*SOCIAL LINKS*/
        li{
            padding-inline: 10%;
            padding-block: 10px;
            font-size: 16px;
        }
    </style>