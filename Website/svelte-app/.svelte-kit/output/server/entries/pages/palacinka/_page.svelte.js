import { c as pop, p as push, d as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import "svelte-reveal";
/* empty css                                                            */
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="hero svelte-cqxgzy"><img${attr("src", `${stringify(base)}/images/palacinka/palacinka-hero.png`)} alt="" class="hero-bg svelte-cqxgzy"> <div id="content" class="svelte-cqxgzy"><h1 class="svelte-cqxgzy">Palacinka</h1> <p class="svelte-cqxgzy">Palacinka is a Run-and-Gun 2D game set in a futuristic dystopian world inside a comic book.<br> You play as Palacinka, who gets sucked into a comic book that one day lands at her door. Finding herself in a dystopian version of
her reality full of hostile technological creatures, she has to fight her way through and escape out of the comic book.<br> This game was created as part of Game Studies at Tecnocampus in the span of a few weeks. The assignment was to create a "run-and-gun" game in comic book style.<br> I worked as the art lead, animator, character and environmental visual designer, and UI artist.</p> <p id="link" class="svelte-cqxgzy">Play "Palacinka" here: <a href="https://https://rogerpuerta.itch.io/palacinka" target="_blank" class="svelte-cqxgzy">Palacinka on itch.io</a></p></div></div> <div id="screenshots"><iframe width="560" height="315" src="https://www.youtube.com/embed/D3u8UzpBswo?si=WL1dxtfXnwrd6-wF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="svelte-cqxgzy"></iframe></div>`;
  pop();
}
export {
  _page as default
};
