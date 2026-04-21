import { a as attr } from "../../../chunks/attributes.js";
import { c as pop, p as push } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import "svelte-reveal";
/* empty css                                                            */
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div><h1 class="svelte-mzqk31">Visual Clock Project</h1> <p>A creative project with the abstract and open prompt "Create Visual Clock"</p></div> <div><video class="hero-video" autoplay muted loop playsinline style="position:; inset: 0; object-fit: cover; z-index: -1; max-width: 70%; align-content:center;"><source${attr("src", base + "/VisualClock.mp4")} type="video/mp4"> Your browser does not support the video tag.</video></div>`;
  pop();
}
export {
  _page as default
};
