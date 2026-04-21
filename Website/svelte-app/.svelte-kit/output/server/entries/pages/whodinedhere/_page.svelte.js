import { f as ensure_array_like, c as pop, p as push } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import "svelte-reveal";
/* empty css                                                            */
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  Array.from({ length: 20 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `${base}/images/whodinedhere/who-dined-here-${num}.png`;
  });
  const pages = Array.from({ length: 20 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `${base}/images/whodinedhere/who-dined-here-${num}.png`;
  });
  const spreads = [];
  spreads.push([pages[0], pages[pages.length - 1]]);
  for (let i = 1; i < pages.length - 1; i += 2) {
    spreads.push([pages[i], pages[i + 1]]);
  }
  const each_array = ensure_array_like(spreads);
  $$payload.out += `<h1 class="svelte-1xvgp9t">Who Dined Here?</h1> <div><iframe allowfullscreen="allowfullscreen" allow="clipboard-write" scrolling="yes" class="fp-iframe" src="https://heyzine.com/flip-book/a2eeefa23b.html" style="border: 100px solid lightgray; width: 100%; height: 990px;"></iframe></div> <div><div class="zine-gallery svelte-1xvgp9t"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let spread = each_array[$$index];
    $$payload.out += `<div class="spread svelte-1xvgp9t"><img${attr("src", spread[0])} alt="Left page" class="svelte-1xvgp9t"> <img${attr("src", spread[1])} alt="Right page" class="svelte-1xvgp9t"></div>`;
  }
  $$payload.out += `<!--]--></div> <p>Original Photography Zine</p></div>`;
  pop();
}
export {
  _page as default
};
