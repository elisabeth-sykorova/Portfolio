import { f as ensure_array_like, h as bind_props, c as pop, p as push, d as stringify } from "./index.js";
import { f as fallback } from "./utils.js";
import { a as attr, t as to_class } from "./attributes.js";
import { e as escape_html } from "./escaping.js";
function TableOfContents($$payload, $$props) {
  push();
  let sections = fallback($$props["sections"], () => [], true);
  let activeSection = "";
  const each_array = ensure_array_like(sections);
  $$payload.out += `<div class="toc-container svelte-134nr5b"><div class="toc-content svelte-134nr5b"><nav class="toc-nav svelte-134nr5b"><ul class="svelte-134nr5b"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { id, title, level } = each_array[$$index];
    $$payload.out += `<li${attr("class", to_class("level-" + level, "svelte-134nr5b", { "active": activeSection === id }))}><a${attr("href", `#${stringify(id)}`)}${attr("aria-current", activeSection === id ? "true" : "false")}${attr("class", to_class("", "svelte-134nr5b", { "active": activeSection === id }))}>${escape_html(title)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></nav></div></div>`;
  bind_props($$props, { sections });
  pop();
}
export {
  TableOfContents as T
};
