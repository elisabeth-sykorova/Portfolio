import { c as pop, p as push, d as stringify, e as slot } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import "svelte-reveal";
import { a as attr } from "../../chunks/attributes.js";
import "clsx";
function Navigation($$payload, $$props) {
  push();
  $$payload.out += `<nav class="glass-nav svelte-febh9o"><div class="nav-container svelte-febh9o"><div class="nav-left svelte-febh9o"><a${attr("href", `${stringify(base)}/`)} class="svelte-febh9o">Elis(abeth) <img${attr("src", `${stringify(base)}/images/logo_prototype.png`)} alt="logo" class="svelte-febh9o"></a></div> <div class="nav-center svelte-febh9o"><a${attr("href", `${stringify(base)}/#work`)} class="svelte-febh9o">work</a> <a${attr("href", `${stringify(base)}/CV_Elisabeth_Sýkorová.pdf`)} target="_blank" class="cv-button svelte-febh9o">cv <img class="download-icon svelte-febh9o"${attr("src", `${stringify(base)}/images/download.png`)} alt="download icon"></a></div> <div class="nav-right svelte-febh9o"><div class="email-container svelte-febh9o"><button class="email-copy svelte-febh9o"><span class="email-symbol svelte-febh9o">@</span> <img class="copy-icon svelte-febh9o"${attr("src", `${stringify(base)}/images/copy.png`)} alt="copy icon"></button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <a class="icon svelte-febh9o" href="https://www.linkedin.com/in/elisabeth-sykorova-7a2981354/" target="_blank"><img class="social-icon svelte-febh9o"${attr("src", `${stringify(base)}/images/linkedin.png`)} alt="linked in icon"></a></div></div></nav>`;
  pop();
}
function Footer($$payload, $$props) {
  push();
  $$payload.out += `<footer class="svelte-1dbnxjk"><div class="footer-container svelte-1dbnxjk"><div class="nav-right svelte-1dbnxjk"><p>Elisabeth Sykorova</p> <p>|</p> <div class="email-container svelte-1dbnxjk"><button class="email-copy svelte-1dbnxjk"><span class="email-symbol svelte-1dbnxjk">@</span> <img class="copy-icon svelte-1dbnxjk"${attr("src", `${stringify(base)}/images/copy.png`)} alt="copy icon"></button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <a class="icon svelte-1dbnxjk" href="https://www.linkedin.com/in/elisabeth-sykorova-7a2981354/" target="_blank"><img class="social-icon svelte-1dbnxjk"${attr("src", `${stringify(base)}/images/linkedin.png`)} alt="linked in icon"></a></div></div></footer>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  $$payload.out += `<header class="svelte-1aratut">`;
  Navigation($$payload);
  $$payload.out += `<!----></header> <main><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
