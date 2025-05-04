import { f as ensure_array_like, d as stringify } from "../../chunks/index.js";
import "svelte-reveal";
import { b as base } from "../../chunks/paths.js";
import { a as attr, t as to_class } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
function _page($$payload) {
  const project1 = {
    name: "Buzzz vs The Harvesters",
    img: `${base}/images/buzzz.png`,
    category: ["all", "games"],
    roles: [
      "Art Direction",
      "Animation",
      "Font & UI",
      "Textures",
      "Trailer"
    ],
    description: "Buzzz Vs The Harvesters is a ps1-style endless runner game, similar to games such as Starfox or Panzer Dragoon.\nThis game was created for the student competition Games Fleadh 2025 and won Best in Original Art Assets award. ",
    page: "buzz"
  };
  const project2 = {
    name: "Visual Identity for KronoShield",
    img: `${base}/images/ks/KS_horizontal.png`,
    category: ["all", "gd"],
    roles: ["Visual Identity Designer"],
    description: "Full visual identity created for a start-up company KronoShield after winning their student logo competition.",
    page: "kronoshield"
  };
  const project3 = {
    name: "Ignite Pixels",
    img: `${base}/images/ignite_pixels.png`,
    category: ["all", "games"],
    roles: [
      "Game Design",
      "Game Development",
      "Asset Creation"
    ],
    description: "First year university project joint between C++ programming and game art featuring colorful pixel art and action gameplay. (page creation in progress)",
    page: "ignite"
  };
  const project4 = {
    name: "Save Gregor",
    img: `${base}/images/gregor.png`,
    category: ["all", "games"],
    roles: [
      "Game Design",
      "Game Development",
      "Art Direction",
      "Font & UI"
    ],
    description: "First year university project joint between C++ programming and game art featuring colorful pixel art and action gameplay. (page creation in progress)",
    page: "gregor"
  };
  const project5 = {
    name: "Merchandise Website",
    img: `${base}/images/merch.png`,
    category: ["all", "web"],
    roles: ["Web Design", "Web Development"],
    description: "Web development project, second year at SETU. (page creation in progress)",
    page: "merch"
  };
  let projects = [
    project1,
    project2,
    project3,
    project4,
    project5
  ];
  let chosenCategory = "all";
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div id="page-layout" class="svelte-fx1a7z"><div id="hero" style="position: relative; z-index: 1;" class="svelte-fx1a7z"><div class="hero-text svelte-fx1a7z"><h1 class="svelte-fx1a7z">Elis(abeth)</h1> <h2 class="svelte-fx1a7z">Interactive Digital Art and Design</h2></div> <div class="logo-container svelte-fx1a7z"><img class="logo svelte-fx1a7z"${attr("src", `${stringify(base)}/images/logo_prototype.png`)} alt="logo" onload="this.__e=event" onerror="this.__e=event"></div></div> <div id="intro" class="svelte-fx1a7z"><p class="svelte-fx1a7z">Student of Interactive Digital Art and Design, based in Czech Republic and Ireland.</p></div> <div class="project-list svelte-fx1a7z"><h2 id="work" class="svelte-fx1a7z">Projects</h2> <div id="category-buttons" class="svelte-fx1a7z"><button${attr("class", to_class("", "svelte-fx1a7z", { "selected": chosenCategory === "all" }))}>All</button> <button${attr("class", to_class("", "svelte-fx1a7z", { "selected": chosenCategory === "games" }))}>Games</button> <button${attr("class", to_class("", "svelte-fx1a7z", { "selected": chosenCategory === "gd" }))}>Graphic Design</button> <button${attr("class", to_class("", "svelte-fx1a7z", { "selected": chosenCategory === "web" }))}>Web</button></div></div> <!--[-->`;
  for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
    let project = each_array[$$index_2];
    const each_array_1 = ensure_array_like(project.category);
    $$payload.out += `<!--[-->`;
    for (let $$index_1 = 0, $$length2 = each_array_1.length; $$index_1 < $$length2; $$index_1++) {
      let category = each_array_1[$$index_1];
      if (category === chosenCategory) {
        $$payload.out += "<!--[-->";
        const each_array_2 = ensure_array_like(project.roles);
        $$payload.out += `<div id="entire-project" style="position: relative; z-index: 1;" class="svelte-fx1a7z"><div id="projects" class="svelte-fx1a7z"><a${attr("href", `${stringify(base)}/${stringify(project.page)}`)} class="svelte-fx1a7z"><img${attr("src", project.img)} alt="project" class="svelte-fx1a7z"></a> <div class="project-info svelte-fx1a7z"><a${attr("href", `${stringify(base)}/${stringify(project.page)}`)} class="project-title svelte-fx1a7z">${escape_html(project.name)}</a> <div class="project-description svelte-fx1a7z">${escape_html(project.description)}</div> <div id="roles" class="svelte-fx1a7z"><p class="svelte-fx1a7z">Roles:</p> <!--[-->`;
        for (let $$index = 0, $$length3 = each_array_2.length; $$index < $$length3; $$index++) {
          let role = each_array_2[$$index];
          $$payload.out += `<span class="svelte-fx1a7z">${escape_html(role)}</span>`;
        }
        $$payload.out += `<!--]--></div></div></div></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> <div id="cv-download" class="svelte-fx1a7z"><h2 id="cv" class="svelte-fx1a7z"><a${attr("href", `${stringify(base)}/CV_Elisabeth_Sýkorová.pdf`)} target="_blank" class="svelte-fx1a7z">cv<img${attr("src", `${stringify(base)}/images/download.png`)} alt="download button icon" id="download-icon" class="svelte-fx1a7z"></a></h2></div></div> <div class="background svelte-fx1a7z"><span class="svelte-fx1a7z"></span> <span class="svelte-fx1a7z"></span> <span class="svelte-fx1a7z"></span> <span class="svelte-fx1a7z"></span> <span class="svelte-fx1a7z"></span> <span class="svelte-fx1a7z"></span> <span class="svelte-fx1a7z"></span> <span class="svelte-fx1a7z"></span> <span class="svelte-fx1a7z"></span> <span class="svelte-fx1a7z"></span> <span class="svelte-fx1a7z"></span> <span class="svelte-fx1a7z"></span></div>`;
}
export {
  _page as default
};
