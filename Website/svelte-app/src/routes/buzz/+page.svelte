<script>
    import { onMount } from 'svelte';
    onMount(() =>{
        console.log("Contacts loaded");
    });
</script>

<div id="content">
<h1>
BUZZ VS THE HARVESTERS
</h1>


<div id="intro">
<p>
    A game created for the Games Fleadh 2025 Competition.
</p>
<p>
    Won an award for Best Original in Game Assets
</p>
<p>
    roles: art direction, animation, texturing, font & ui
</p>
<p> teammates: David Hajek, Pavel Dobias, Lucy Arthur, Robert McGregor</p>
</div>

<div id="animation">
<h2>Animation</h2>
<h3>Buzzz</h3>
<iframe src="https://setuo365-my.sharepoint.com/personal/c00301316_setu_ie/_layouts/15/embed.aspx?UniqueId=ee5c1aba-f23f-4cda-8aec-71846163f31c&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="Buzzz_Animations.mp4"></iframe>
<h3>Enemies</h3>
<h3>Environment</h3>
</div>

<div id="texturing">
<h2>Texturing</h2>
<h3>Mushrooms</h3>
<h3>Skybox & Overall Color Correction</h3>
</div>

<div id="ui">
<h2>Font & UI elements</h2>
</div>
<div id ='process'>
<h2>The Creation Process</h2>
</div>

<div id='end'>
<iframe src="https://setuo365-my.sharepoint.com/personal/c00301316_setu_ie/_layouts/15/embed.aspx?UniqueId=e1d77e12-393f-475a-9613-dcec36ac8e35&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="BuzzzVsTheHarvestersTrailer.mp4"></iframe>

<br>
<a href="https://reverend-speed.itch.io/buzzz-vs-the-harvesters">Link to our itch.io page</a>
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

    h1 {
        margin-top: 10%;
        font-size: 4rem;
        justify-content: center;
        display: flex;
    }

    h2 {
        margin-top: 10%;
    }

    h3 {
        margin-top: 10%;
    }

    #content {
        display: block;
        flex-direction: column;
        align-items: flex-start; /* Aligns text to the left */
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        text-align: center; /* Ensures text alignment is left */
        width: fit-content; /* Adjusts the width to fit the content */
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
