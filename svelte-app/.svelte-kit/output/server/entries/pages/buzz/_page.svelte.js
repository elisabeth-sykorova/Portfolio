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
      id: "animation",
      title: "Animation",
      level: 2
    },
    {
      id: "animation-buzz",
      title: "Buzzz",
      level: 3
    },
    {
      id: "animation-enemies",
      title: "Enemies",
      level: 3
    },
    {
      id: "animation-environment",
      title: "Environment",
      level: 3
    },
    {
      id: "texturing",
      title: "Texturing",
      level: 2
    },
    {
      id: "texturing-mushrooms",
      title: "Mushrooms",
      level: 3
    },
    {
      id: "texturing-skybox",
      title: "Skybox & Color Correction",
      level: 3
    },
    {
      id: "ui",
      title: "Font & UI elements",
      level: 2
    },
    { id: "end", title: "Relevant Links", level: 2 }
  ];
  $$payload.out += `<div class="page-layout svelte-16jahjc"><div id="content" class="svelte-16jahjc"><h1 id="title" class="svelte-16jahjc">Buzzz Vs<br class="svelte-16jahjc">The Harvesters</h1> <p id="roles" class="svelte-16jahjc">Roles: Art Direction, Animation, Font &amp; UI, Textures, Trailer</p> <div class="playable svelte-16jahjc"><iframe width="560" height="315" src="https://www.youtube.com/embed/26qRWZ_Tfs4?si=_KqXCan8g1bjoNjx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="svelte-16jahjc"></iframe></div> <div id="intro" class="svelte-16jahjc"><h2 class="svelte-16jahjc">Introduction</h2> <p class="svelte-16jahjc">Buzzz Vs The Harvesters is a ps1-style endless runner game, similar to games such as Starfox or Panzer Dragoon. <br class="svelte-16jahjc"> Buzzz is a wholesome bumblebee living in a magical forest. One day, mechanical creatures, the Harvesters, invade the forest and start stealing its natural resources by feeding on the plants. It is up to Buzzz now to save the forest. <br class="svelte-16jahjc"> <br class="svelte-16jahjc"> This game was created for the student competition Games Fleadh 2025 and won "Best in Original Art Assets" award there. <br class="svelte-16jahjc"> I got to work on this project with David Hajek - 3D models artist, Pavel Dobias - 2D artist + level designer, Lucy Arthur and Robert McGregor - developers. My thanks goes to all of them.</p></div> <div id="software-used" class="svelte-16jahjc"><h3 class="svelte-16jahjc">Tools Used:</h3> <ul class="svelte-16jahjc"><li class="svelte-16jahjc"><img${attr("src", `${stringify(base)}/images/blender.png`)} alt="blender logo" class="svelte-16jahjc">Blender</li> <li class="svelte-16jahjc"><img${attr("src", `${stringify(base)}/images/ps.png`)} alt="adobe photoshop logo" class="svelte-16jahjc">Adobe Photoshop</li> <li class="svelte-16jahjc"><img${attr("src", `${stringify(base)}/images/davinci.png`)} alt="davinci resolve logo" class="svelte-16jahjc">DaVinci Resolve</li> <li class="svelte-16jahjc"><img${attr("src", `${stringify(base)}/images/ink.png`)} alt="inkscape logo" class="svelte-16jahjc">Inkscape</li></ul></div> <div id="animation" class="svelte-16jahjc"><h2 class="svelte-16jahjc">Animation</h2> <p class="svelte-16jahjc">Animated assets include the player character - Buzzz, the bumblebee, two types of enemies - Swarmer and Feeder, the harvesters, and the animated environmental assets - Mushrooms and grass.</p> <br class="svelte-16jahjc"> <p class="svelte-16jahjc">All animations were created using Blender.</p> <div id="animation-buzz" class="svelte-16jahjc"><h3 class="svelte-16jahjc">Buzzz</h3> <div class="video-container svelte-16jahjc"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xn725u_cIbU?si=2g_Pr2OijrEapBFM&amp;modestbranding=1&amp;controls=0&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;playsinline=1&amp;enablejsapi=1&amp;loop=1&amp;mute=1&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="svelte-16jahjc"></iframe></div></div> <div id="animation-enemies" class="svelte-16jahjc"><div class="svelte-16jahjc"><h3 class="svelte-16jahjc">Swarmer</h3> <div class="video-container svelte-16jahjc"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/J3aXm9T3Aoc?si=6zDaCH6uiFXOe76f&amp;modestbranding=1&amp;controls=0&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;playsinline=1&amp;enablejsapi=1&amp;loop=1&amp;mute=1&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="svelte-16jahjc"></iframe></div></div> <div class="svelte-16jahjc"><h3 class="svelte-16jahjc">Feeder</h3> <div class="video-container svelte-16jahjc"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/COWe8CeCq8Y?si=7lJBaqGorHTUk4Fd&amp;modestbranding=1&amp;controls=0&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;playsinline=1&amp;enablejsapi=1&amp;loop=1&amp;mute=1&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="svelte-16jahjc"></iframe></div></div></div> <div id="animation-environment" class="svelte-16jahjc"><h3 class="svelte-16jahjc">Environment</h3> <div class="video-container svelte-16jahjc"><iframe width="560" height="315" src="https://www.youtube.com/embed/HpQ3h0PE6_Y?si=expNpX2rP8R-EVdZ&amp;modestbranding=1&amp;controls=0&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;playsinline=1&amp;enablejsapi=1&amp;loop=1&amp;mute=1&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="svelte-16jahjc"></iframe></div></div></div> <div id="texturing" class="svelte-16jahjc"><h2 class="svelte-16jahjc">Texturing</h2> <p class="svelte-16jahjc">Mushroom textures, environment color correction, and skybox.</p> <p class="svelte-16jahjc">Textures were made using Photoshop with a UV wrap of the models from Blender.</p> <div id="texturing-mushrooms" class="svelte-16jahjc"><h3 class="svelte-16jahjc">Mushrooms</h3> <div class="video-container svelte-16jahjc"><iframe width="560" height="315" src="https://www.youtube.com/embed/HpQ3h0PE6_Y?si=expNpX2rP8R-EVdZ&amp;modestbranding=1&amp;controls=0&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;playsinline=1&amp;enablejsapi=1&amp;loop=1&amp;mute=1&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="svelte-16jahjc"></iframe></div></div> <div id="texturing-skybox" class="svelte-16jahjc"><h3 class="svelte-16jahjc">Skybox &amp; Overall Color Correction</h3> <div class="gallery-card media svelte-16jahjc"><img${attr("src", `${stringify(base)}/images/buzz/gameplay1.png`)} alt="gameplay screenshot" class="svelte-16jahjc"> <img${attr("src", `${stringify(base)}/images/buzz/gameplay2.png`)} alt="gameplay screenshot" class="svelte-16jahjc"> <img${attr("src", `${stringify(base)}/images/buzz/gameplay3.png`)} alt="gameplay screenshot" class="svelte-16jahjc"></div></div></div> <div id="ui" class="svelte-16jahjc"><h2 class="svelte-16jahjc">Font &amp; UI elements</h2> <p class="svelte-16jahjc">The original font was created using Inkscape with the help of the online tool <a href="https://www.calligraphr.com/" class="svelte-16jahjc">Calligraphr</a>.</p> <p class="svelte-16jahjc">All UI elements were created using Adobe Photoshop, utilizing the original font.</p> <img${attr("src", `${stringify(base)}/images/buzz/font.png`)} alt="font showcase" class="media svelte-16jahjc"> <img${attr("src", `${stringify(base)}/images/buzz/ui_elements.png`)} alt="ui elements" class="media svelte-16jahjc"></div> <div id="end" class="svelte-16jahjc"><h2 class="svelte-16jahjc">Relevant Links</h2> <a href="https://reverend-speed.itch.io/buzzz-vs-the-harvesters" target="_blank" class="svelte-16jahjc">Our itch.io page</a> <br class="svelte-16jahjc"> <a href="https://www.setu.ie/news/setu-celebrates-success-at-games-fleadh-2025" target="_blank" class="svelte-16jahjc">Article about Games Fleadh 2025</a></div></div> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<aside class="toc-sidebar svelte-16jahjc">`;
    TableOfContents($$payload, { sections: tocSections });
    $$payload.out += `<!----></aside>`;
  }
  $$payload.out += `<!--]--></div> <div class="background svelte-16jahjc"><span class="svelte-16jahjc"></span> <span class="svelte-16jahjc"></span> <span class="svelte-16jahjc"></span> <span class="svelte-16jahjc"></span> <span class="svelte-16jahjc"></span> <span class="svelte-16jahjc"></span> <span class="svelte-16jahjc"></span> <span class="svelte-16jahjc"></span> <span class="svelte-16jahjc"></span> <span class="svelte-16jahjc"></span> <span class="svelte-16jahjc"></span> <span class="svelte-16jahjc"></span></div>`;
  pop();
}
export {
  _page as default
};
