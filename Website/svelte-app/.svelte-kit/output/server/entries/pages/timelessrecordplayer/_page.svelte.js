import { c as pop, p as push, d as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import "svelte-reveal";
/* empty css                                                            */
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div id="content" class="svelte-ux0nim"><h1 class="svelte-ux0nim">Timeless Recordplayer</h1> <p class="svelte-ux0nim">Small creative project; my first experience coding a "game" in C++ SFML. It is an interactive experience where you can ascroll through albums, pick one, take the vinyl, and play it on the recordplayer. All assets, including the custom font, are hand-crafted by me. :)</p> <p class="svelte-ux0nim">How it looks:</p> <video${attr("src", `${stringify(base)}/timeless/TimelessRecordplayer.mov`)} autoplay loop muted playsinline style="width:100%; height:auto;" class="svelte-ux0nim"></video> <p class="svelte-ux0nim">Art Documentation:</p> <iframe${attr("src", `${stringify(base)}/timeless/Timeless-Record-Player_ASSETS.pdf#toolbar=0&navpanes=0&scrollbar=0`)} style="border: none; width: 100%; height: 100vh;"></iframe></div>`;
  pop();
}
export {
  _page as default
};
