import { c as pop, p as push, d as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import "svelte-reveal";
import { T as TableOfContents } from "../../../chunks/TableOfContents.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  const tocSections = [
    { id: "intro", title: "Introduction", level: 2 },
    {
      id: "moodboard",
      title: "Moodboard",
      level: 2
    },
    {
      id: "website",
      title: "Live Website",
      level: 2
    },
    {
      id: "github",
      title: "Github Repository",
      level: 2
    }
  ];
  $$payload.out += `<div class="page-layout svelte-124ljrr"><div id="content" class="svelte-124ljrr"><h1 id="title" class="svelte-124ljrr">Merchandise Website</h1> <p id="roles" class="svelte-124ljrr">Roles: Web Design, Web Deveopment</p> <img${attr("src", `${stringify(base)}/images/merch.png`)} class="media svelte-124ljrr" alt="main page screenshot"> <div id="intro" class="svelte-124ljrr"><h2 class="svelte-124ljrr">Introduction</h2> <p class="svelte-124ljrr">Merchandise Website <br class="svelte-124ljrr"> Authors: Elisabeth Sykorova, David Hajek, Tymotheuzs Walichnovski</p></div> <div id="software-used" class="svelte-124ljrr"><h3 class="svelte-124ljrr">Tools Used:</h3> <ul class="svelte-124ljrr"><li class="svelte-124ljrr"><img${attr("src", `${stringify(base)}/images/ps.png`)} alt="adobe photoshop logo" class="svelte-124ljrr">Adobe Photoshop</li> <li class="svelte-124ljrr"><img${attr("src", `${stringify(base)}/images/svelte.png`)} alt="svelte logo" class="svelte-124ljrr"> Svelte</li> <li class="svelte-124ljrr">- Warp AI</li></ul></div> <h2 id="moodboard" class="svelte-124ljrr">Moodboard</h2> <img${attr("src", `${stringify(base)}/images/merch/Merch_Store_Moodboard.png`)} alt="moodboard" class="media svelte-124ljrr"> <h2 id="website" class="svelte-124ljrr">Live Website</h2> <a href="https://david-hajek.github.io/Web-UI-Design-Group-Project/" target="_blank" class="svelte-124ljrr">Merchandise Website</a> <h2 id="github" class="svelte-124ljrr">GitHub Repository</h2> <a href="https://github.com/David-Hajek/Web-UI-Design-Group-Project" class="gh-link svelte-124ljrr" target="_blank"><img${attr("src", `${stringify(base)}/images/github.png`)} alt="github logo" class="gh svelte-124ljrr">Project Repository</a></div> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<aside class="toc-sidebar svelte-124ljrr">`;
    TableOfContents($$payload, { sections: tocSections });
    $$payload.out += `<!----></aside>`;
  }
  $$payload.out += `<!--]--></div> <div class="background svelte-124ljrr"><span class="svelte-124ljrr"></span> <span class="svelte-124ljrr"></span> <span class="svelte-124ljrr"></span> <span class="svelte-124ljrr"></span> <span class="svelte-124ljrr"></span> <span class="svelte-124ljrr"></span> <span class="svelte-124ljrr"></span> <span class="svelte-124ljrr"></span> <span class="svelte-124ljrr"></span> <span class="svelte-124ljrr"></span> <span class="svelte-124ljrr"></span> <span class="svelte-124ljrr"></span></div>`;
  pop();
}
export {
  _page as default
};
