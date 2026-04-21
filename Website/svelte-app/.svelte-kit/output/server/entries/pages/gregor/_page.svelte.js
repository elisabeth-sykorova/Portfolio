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
      id: "assets",
      title: "Concept Document",
      level: 2
    },
    {
      id: "github",
      title: "Github Repository",
      level: 2
    },
    { id: "release", title: "Release", level: 2 }
  ];
  $$payload.out += `<div class="page-layout svelte-16tfmcx"><div id="content" class="svelte-16tfmcx"><h1 id="title" class="svelte-16tfmcx">Save Gregor</h1> <p id="roles" class="svelte-16tfmcx">Roles: Game Design, Game Development, Art Direction, Font &amp; UI</p> <div class="playable svelte-16tfmcx"><iframe width="560" height="315" src="https://www.youtube.com/embed/akxZrRbzTOU?si=8SfhRox2DrfxJUMF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="svelte-16tfmcx"></iframe></div> <div id="intro" class="svelte-16tfmcx"><h2 class="svelte-16tfmcx">Introduction</h2> <p class="svelte-16tfmcx">Save Gregor.</p></div> <div id="software-used" class="svelte-16tfmcx"><h3 class="svelte-16tfmcx">Tools Used:</h3> <ul class="svelte-16tfmcx"><li class="svelte-16tfmcx"><img${attr("src", `${stringify(base)}/images/ps.png`)} alt="adobe photoshop logo" class="svelte-16tfmcx">Adobe Photoshop</li> <li class="svelte-16tfmcx"><img${attr("src", `${stringify(base)}/images/aseprite.png`)} alt="aseprite logo" class="svelte-16tfmcx">Aseprite</li></ul></div> <h2 id="assets" class="svelte-16tfmcx">Concept Document</h2> <iframe${attr("src", `${stringify(base)}/images/gregor/save_gregor_concept.pdf`)} style="border:none;" title="save gregor concept doc" class="svelte-16tfmcx"></iframe> <a${attr("href", `${stringify(base)}/images/gregor/save_gregor_concept.pdf`)} target="_blank" class="svelte-16tfmcx">Download PDF</a> <h2 id="github" class="svelte-16tfmcx">GitHub Repository</h2> <a href="https://github.com/elisabeth-sykorova/SaveGregor" class="gh-link svelte-16tfmcx" target="_blank"><img${attr("src", `${stringify(base)}/images/github.png`)} alt="github logo" class="gh svelte-16tfmcx">Project Repository</a> <h2 id="release" class="svelte-16tfmcx">Release</h2> <a href="https://setuo365-my.sharepoint.com/:u:/g/personal/c00301316_setu_ie/EfRbMnhP7uhJkznqJc3GLg4B1cPhYKeBoLGk-RuKa1Gmow?e=R9zUnk" class="gh-link svelte-16tfmcx" target="_blank">Release Folder</a></div> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<aside class="toc-sidebar svelte-16tfmcx">`;
    TableOfContents($$payload, { sections: tocSections });
    $$payload.out += `<!----></aside>`;
  }
  $$payload.out += `<!--]--></div> <div class="background svelte-16tfmcx"><span class="svelte-16tfmcx"></span> <span class="svelte-16tfmcx"></span> <span class="svelte-16tfmcx"></span> <span class="svelte-16tfmcx"></span> <span class="svelte-16tfmcx"></span> <span class="svelte-16tfmcx"></span> <span class="svelte-16tfmcx"></span> <span class="svelte-16tfmcx"></span> <span class="svelte-16tfmcx"></span> <span class="svelte-16tfmcx"></span> <span class="svelte-16tfmcx"></span> <span class="svelte-16tfmcx"></span></div>`;
  pop();
}
export {
  _page as default
};
