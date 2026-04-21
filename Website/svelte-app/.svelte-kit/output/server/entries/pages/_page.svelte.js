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
    description: 'Winning student project created for the Games Fleadh 2025 competition, awarded "Best in Original Art Assets".\nBuzzz Vs The Harvesters is a ps1-style endless runner game where you play as a bumblebee with big weapons, Buzz, protecting your magical mushroom forest from artifical insect invaders, the Harvesters. Entirely made with raylib.',
    page: "buzz"
  };
  const project2 = {
    name: "Visual Identity for KronoShield",
    img: `${base}/images/ks/KS_horizontal.png`,
    category: ["all", "digital art"],
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
  const projectASilentHero = {
    name: "A Silent Hero",
    img: `${base}/images/asilentherothumb.png`,
    category: ["all", "games"],
    roles: [
      "Game Design, Art Assets, Animations, Audio Creation, Narrative Design"
    ],
    description: 'Winning student project created for Animation Dingle 2026 for the "Game Sting" category, sponsored by Story Toys.\n A Silent Hero is a narrative-driven, fable-themed side-scroller, focused on the visuals, audio, and narrative.',
    page: "asilenthero"
  };
  const projectVisualClock = {
    name: "Visual Clock",
    img: `${base}/images/visualclock.png`,
    category: ["all", "digital art"],
    roles: ["Photography", "Video Editing", "Audio"],
    description: 'Personal project on the theme "Visual Clock"',
    page: "visualclock"
  };
  const projectWhoDinedHere = {
    name: "Who Dined Here?",
    img: `${base}/images/whodinedhere/who-dined-here.png`,
    category: ["all", "digital art"],
    roles: ["Photography", "Graphical Design"],
    description: "Original Photography Zine",
    page: "whodinedhere"
  };
  let projects = [
    projectASilentHero,
    projectVisualClock,
    projectWhoDinedHere,
    project1,
    project3,
    project4,
    project2
  ];
  let chosenCategory = "all";
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div id="page-layout" class="svelte-1e4i4i1"><div id="hero" style="position: relative; z-index: 1;" class="svelte-1e4i4i1"><div class="hero-text svelte-1e4i4i1"><h1 class="svelte-1e4i4i1">Elis(abeth)</h1> <h2 class="svelte-1e4i4i1">Interactive Digital Art and Design</h2></div> <video class="hero-video svelte-1e4i4i1" autoplay muted loop playsinline style="position: absolute; inset: 0; object-fit: cover; z-index: -1;"><source${attr("src", base + "/VisualClock.mp4")} type="video/mp4" class="svelte-1e4i4i1"> Your browser does not support the video tag.</video></div> <div id="intro" class="svelte-1e4i4i1"></div> <div class="project-list svelte-1e4i4i1"><h2 id="work" class="svelte-1e4i4i1">Projects</h2> <div id="category-buttons" class="svelte-1e4i4i1"><button${attr("class", to_class("", "svelte-1e4i4i1", { "selected": chosenCategory === "all" }))}>All</button> <button${attr("class", to_class("", "svelte-1e4i4i1", { "selected": chosenCategory === "games" }))}>Games</button> <button${attr("class", to_class("", "svelte-1e4i4i1", { "selected": chosenCategory === "da" }))}>Digital Art</button></div></div> <!--[-->`;
  for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
    let project = each_array[$$index_2];
    const each_array_1 = ensure_array_like(project.category);
    $$payload.out += `<!--[-->`;
    for (let $$index_1 = 0, $$length2 = each_array_1.length; $$index_1 < $$length2; $$index_1++) {
      let category = each_array_1[$$index_1];
      if (category === chosenCategory) {
        $$payload.out += "<!--[-->";
        const each_array_2 = ensure_array_like(project.roles);
        $$payload.out += `<div id="entire-project" style="position: relative; z-index: 1;" class="svelte-1e4i4i1"><div id="projects" class="svelte-1e4i4i1"><a${attr("href", `${stringify(base)}/${stringify(project.page)}`)} class="svelte-1e4i4i1"><img${attr("src", project.img)} alt="project" class="svelte-1e4i4i1"></a> <div class="project-info svelte-1e4i4i1"><a${attr("href", `${stringify(base)}/${stringify(project.page)}`)} class="project-title svelte-1e4i4i1">${escape_html(project.name)}</a> <div class="project-description svelte-1e4i4i1">${escape_html(project.description)}</div> <div id="roles" class="svelte-1e4i4i1"><p class="svelte-1e4i4i1">Roles:</p> <!--[-->`;
        for (let $$index = 0, $$length3 = each_array_2.length; $$index < $$length3; $$index++) {
          let role = each_array_2[$$index];
          $$payload.out += `<span class="svelte-1e4i4i1">${escape_html(role)}</span>`;
        }
        $$payload.out += `<!--]--></div></div></div></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> <div id="cv-download" class="svelte-1e4i4i1"><h2 id="cv" class="svelte-1e4i4i1"><a${attr("href", `${stringify(base)}/CV_Elisabeth_Sýkorová.pdf`)} target="_blank" class="svelte-1e4i4i1">cv<img${attr("src", `${stringify(base)}/images/download.png`)} alt="download button icon" id="download-icon" class="svelte-1e4i4i1"></a></h2></div></div> <div class="background svelte-1e4i4i1"><span class="svelte-1e4i4i1"></span> <span class="svelte-1e4i4i1"></span> <span class="svelte-1e4i4i1"></span> <span class="svelte-1e4i4i1"></span> <span class="svelte-1e4i4i1"></span> <span class="svelte-1e4i4i1"></span> <span class="svelte-1e4i4i1"></span> <span class="svelte-1e4i4i1"></span> <span class="svelte-1e4i4i1"></span> <span class="svelte-1e4i4i1"></span> <span class="svelte-1e4i4i1"></span> <span class="svelte-1e4i4i1"></span></div>`;
}
export {
  _page as default
};
