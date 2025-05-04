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
      id: "one",
      title: "Logo Variations",
      level: 2
    },
    { id: "two", title: "Color Palette", level: 2 },
    { id: "three", title: "Font Choice", level: 2 },
    {
      id: "four",
      title: "Product Mockups",
      level: 2
    },
    { id: "end", title: "Relevant Links", level: 2 }
  ];
  $$payload.out += `<div class="page-layout svelte-h54ozo"><div id="content" class="svelte-h54ozo"><h1 id="title" class="svelte-h54ozo">KronoShield Visual Identity</h1> <p id="roles" class="svelte-h54ozo">Roles: Visual Identity Designer</p> <div class="svelte-h54ozo"><img${attr("src", `${stringify(base)}/images/ks/KS_horizontal_transparent.png`)} alt="horizontal logo" class="media svelte-h54ozo"></div> <div id="intro" class="svelte-h54ozo"><h2 class="svelte-h54ozo">Introduction</h2> <p class="svelte-h54ozo">This is a full visual identity created for a start-up cyber-security company KronoShield. It includes variations of logos, color palette, font, and multiple product mockups. <br class="svelte-h54ozo"> I was asked to create this visual identity after winning KronoShield's student logo competition they held at the end of 2024.</p></div> <div id="software-used" class="svelte-h54ozo"><h3 class="svelte-h54ozo">Tools Used:</h3> <ul class="svelte-h54ozo"><li class="svelte-h54ozo"><img${attr("src", `${stringify(base)}/images/ink.png`)} alt="inkscape logo" class="svelte-h54ozo">Inkscape</li> <li class="svelte-h54ozo"><img${attr("src", `${stringify(base)}/images/penpot.png`)} alt="penpot logo" class="svelte-h54ozo">Penpot</li></ul></div> <div id="one" class="svelte-h54ozo"><h2 class="svelte-h54ozo">Logo Variations</h2> <p class="svelte-h54ozo">The logo variations include the main - vertical - logo in multi-color, single-color, and black &amp; white options, and the multi-color horizontal logo.</p> <div id="vertical-logos" class="svelte-h54ozo"><h3 class="svelte-h54ozo">Multi-color Vertical</h3> <img${attr("src", `${stringify(base)}/images/ks/KS_multicolor_vertical.png`)} class="media svelte-h54ozo" alt="multicolor vertical logo"> <br class="svelte-h54ozo"> <h3 class="svelte-h54ozo">Single-color Vertical</h3> <img${attr("src", `${stringify(base)}/images/ks/vertical_darker.png`)} class="media svelte-h54ozo" alt="single-color darker vertical logo"> <img${attr("src", `${stringify(base)}/images/ks/vertical_lighter.png`)} class="media svelte-h54ozo" alt="single-color lighter vertical logo"> <br class="svelte-h54ozo"> <h3 class="svelte-h54ozo">Black &amp; White Vertical</h3> <img${attr("src", `${stringify(base)}/images/ks/vertical_black.png`)} class="media svelte-h54ozo" alt="black vertical logo"> <img${attr("src", `${stringify(base)}/images/ks/vertical_white.png`)} class="media svelte-h54ozo" alt="white vertical logo"></div> <h3 class="svelte-h54ozo">Horizontal Logo</h3> <img${attr("src", `${stringify(base)}/images/ks/KS_horizontal_transparent.png`)} class="media svelte-h54ozo" alt="multicolor horizontal logo"> <div class="svelte-h54ozo"></div></div> <div id="two" class="svelte-h54ozo"><h2 class="svelte-h54ozo">Color Palette</h2> <p class="svelte-h54ozo">For the color palette I ended up choosing these blue/green shades. These colors come off as professional and trustworthy as well as open and friendly, which aligns well with the companies' goals.</p> <img${attr("src", `${stringify(base)}/images/ks/primary.png`)} alt="primary color palette" class="media svelte-h54ozo"><img${attr("src", `${stringify(base)}/images/ks/secondary.png`)} alt="secondary color palette" class="media svelte-h54ozo"></div> <div id="three" class="svelte-h54ozo"><h2 class="svelte-h54ozo">Font Choice</h2> <p class="svelte-h54ozo">Upon the customer's request, the chosen font is sans-serif. I ended up choosing the font Urbanist for its simplicity.</p> <img${attr("src", `${stringify(base)}/images/ks/font.png`)} alt="font showcase" class="media svelte-h54ozo"></div> <div id="four" class="svelte-h54ozo"><h2 class="svelte-h54ozo">Product Mockups</h2> <p class="svelte-h54ozo">To showcase the usage of the visual identity, I have created a few product mockups that include business card and t-shirt design concepts.</p> <h3 class="svelte-h54ozo">Business Card - Colored</h3> <img${attr("src", `${stringify(base)}/images/ks/KS_business_card_mockup_color.png`)} class="media svelte-h54ozo" alt="colored business card mockup"> <h3 class="svelte-h54ozo">Business Card - Black &amp; White</h3> <img${attr("src", `${stringify(base)}/images/ks/KS_business_card_mockup_black_and_white.png`)} class="media svelte-h54ozo" alt="black and white business card mockup"> <h3 class="svelte-h54ozo">T-Shirt - White, Colored Graphics</h3> <img${attr("src", `${stringify(base)}/images/ks/KS_tshirt_mockup2.png`)} class="media svelte-h54ozo" alt="tshirt design mockup"> <h3 class="svelte-h54ozo">T-Shirt - White, Black Graphics</h3> <img${attr("src", `${stringify(base)}/images/ks/KS_tshirt_mockup1.png`)} class="media svelte-h54ozo" alt="tshirt design mockup"> <h3 class="svelte-h54ozo">T-Shirt - Black, White Graphics</h3> <img${attr("src", `${stringify(base)}/images/ks/KS_tshirt_mockup1_dark.png`)} class="media svelte-h54ozo" alt="tshirt design mockup"></div> <div id="end" class="svelte-h54ozo"><h2 class="svelte-h54ozo">Relevant Links</h2> <a href="https://design.penpot.app/#/view?file-id=cec80257-5021-8137-8005-ec22326aa22d&amp;page-id=cec80257-5021-8137-8005-ec22326aa22e&amp;section=interactions&amp;index=0&amp;share-id=cec80257-5021-8137-8005-efd66dcf8dad" target="_blank" class="svelte-h54ozo">Visual Identity Catalog on Penpot</a></div></div> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<aside class="toc-sidebar svelte-h54ozo">`;
    TableOfContents($$payload, { sections: tocSections });
    $$payload.out += `<!----></aside>`;
  }
  $$payload.out += `<!--]--></div> <div class="background svelte-h54ozo"><span class="svelte-h54ozo"></span> <span class="svelte-h54ozo"></span> <span class="svelte-h54ozo"></span> <span class="svelte-h54ozo"></span> <span class="svelte-h54ozo"></span> <span class="svelte-h54ozo"></span> <span class="svelte-h54ozo"></span> <span class="svelte-h54ozo"></span> <span class="svelte-h54ozo"></span> <span class="svelte-h54ozo"></span> <span class="svelte-h54ozo"></span> <span class="svelte-h54ozo"></span></div>`;
  pop();
}
export {
  _page as default
};
