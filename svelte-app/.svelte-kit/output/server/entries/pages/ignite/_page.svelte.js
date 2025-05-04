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
      title: "Asset Documentation",
      level: 2
    },
    {
      id: "github",
      title: "Github Repository",
      level: 2
    },
    { id: "release", title: "Release", level: 2 }
  ];
  $$payload.out += `<div class="page-layout svelte-hd5whx"><div id="content" class="svelte-hd5whx"><h1 id="title" class="svelte-hd5whx">Ignite Pixels</h1> <p id="roles" class="svelte-hd5whx">Roles: Game Design, Game Development, Asset Creation</p> <div class="playable svelte-hd5whx"><iframe width="560" height="315" src="https://www.youtube.com/embed/3IUzN_qDRYk?si=BZFvXBNchDVW6sfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="svelte-hd5whx"></iframe></div> <div id="intro" class="svelte-hd5whx"><h2 class="svelte-hd5whx">Introduction</h2> <p class="svelte-hd5whx">This project was created at the end of first year at SETU. It was a joint project between C++ object-oriented programming and Game Art.</p></div> <div id="software-used" class="svelte-hd5whx"><h3 class="svelte-hd5whx">Tools Used:</h3> <ul class="svelte-hd5whx"><li class="svelte-hd5whx"><img${attr("src", `${stringify(base)}/images/ps.png`)} alt="adobe photoshop logo" class="svelte-hd5whx">Adobe Photoshop</li> <li class="svelte-hd5whx"><img${attr("src", `${stringify(base)}/images/aseprite.png`)} alt="aseprite logo" class="svelte-hd5whx">Aseprite</li></ul></div> <h2 id="assets" class="svelte-hd5whx">Asset Documentation</h2> <iframe${attr("src", `${stringify(base)}/images/ignite/project-assets.pdf`)} style="border:none;" title="Project Assets Documentation" class="svelte-hd5whx"></iframe> <a${attr("href", `${stringify(base)}/images/ignite/project-assets.pdf`)} target="_blank" class="svelte-hd5whx">Download PDF</a> <h2 id="github" class="svelte-hd5whx">GitHub Repository</h2> <a href="https://github.com/elisabeth-sykorova/IgnitePixels" class="gh-link svelte-hd5whx" target="_blank"><img${attr("src", `${stringify(base)}/images/github.png`)} alt="github logo" class="gh svelte-hd5whx">Project Repository</a> <h2 id="release" class="svelte-hd5whx">Release</h2> <a href="https://setuo365-my.sharepoint.com/:u:/g/personal/c00301316_setu_ie/EdCnPUu9XClDlJZg4FLfWhEB26mj-G7SQSBJshnSPnmDVw?e=q1mfnQ" class="gh-link svelte-hd5whx" target="_blank">Release Folder</a></div> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<aside class="toc-sidebar svelte-hd5whx">`;
    TableOfContents($$payload, { sections: tocSections });
    $$payload.out += `<!----></aside>`;
  }
  $$payload.out += `<!--]--></div> <div class="background svelte-hd5whx"><span class="svelte-hd5whx"></span> <span class="svelte-hd5whx"></span> <span class="svelte-hd5whx"></span> <span class="svelte-hd5whx"></span> <span class="svelte-hd5whx"></span> <span class="svelte-hd5whx"></span> <span class="svelte-hd5whx"></span> <span class="svelte-hd5whx"></span> <span class="svelte-hd5whx"></span> <span class="svelte-hd5whx"></span> <span class="svelte-hd5whx"></span> <span class="svelte-hd5whx"></span></div>`;
  pop();
}
export {
  _page as default
};
