import { c as pop, p as push, d as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import "svelte-reveal";
/* empty css                                                            */
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<iframe${attr("src", `${stringify(base)}/mole/MOLE-PATROL-ASSETS_PORTFOLIO.pdf#toolbar=0&navpanes=0&scrollbar=0`)} style="border: none; width: 100%; height: 100vh;"></iframe>`;
  pop();
}
export {
  _page as default
};
