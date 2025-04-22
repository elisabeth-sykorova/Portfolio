<!-- <script>
import { onMount } from 'svelte';

const mouseLocation = {x: 0, y:0};
const circles = document.querySelectorAll(".circle");

// Define the event handler function outside onMount so we can reference it for cleanup
function handleMouseMove(e) {
    mouseLocation.x = e.x;
    mouseLocation.y = e.y;

    console.log(mouseLocation);
}

onMount(() => {
    // Add event listener only after component is mounted (client-side only)
    window.addEventListener("mousemove", handleMouseMove);
    
    // Return a cleanup function that runs when the component is destroyed
    return () => {
        window.removeEventListener("mousemove", handleMouseMove);
    };
});

circles.forEach(function(circle,index) {
    circle.style.left = mouseLocation.x - 12;

})

</script>




<div class ="circle"></div>
<div class ="circle"></div>
<div class ="circle"></div>
<div class ="circle"></div>
<div class ="circle"></div>
<div class ="circle"></div>
<div class ="circle"></div>
<div class ="circle"></div>
<div class ="circle"></div>
<div class ="circle"></div>
<div class ="circle"></div>
<div class ="circle"></div>
<div class ="circle"></div>
<div class ="circle"></div>





<style>
    
.circle{
    height: 24px;
    width: 24px;
    border-radius: 24px;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
}

</style> -->