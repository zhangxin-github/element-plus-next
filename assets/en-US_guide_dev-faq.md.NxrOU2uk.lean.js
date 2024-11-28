import{_ as n}from"./chunks/theme.C0VdCxcc.js";import{_ as a,o as t,c as h,a as e,W as s,y as l}from"./chunks/framework.SZaum9Aq.js";const y=JSON.parse('{"title":"Development FAQ","description":"","frontmatter":{"title":"Development FAQ","lang":"en-US"},"headers":[{"level":2,"title":"If you encounter dependency related issues","slug":"if-you-encounter-dependency-related-issues","link":"#if-you-encounter-dependency-related-issues","children":[]},{"level":2,"title":"Link local dependencies","slug":"link-local-dependencies","link":"#link-local-dependencies","children":[]},{"level":2,"title":"Theme","slug":"theme","link":"#theme","children":[]}],"relativePath":"en-US/guide/dev-faq.md","filePath":"en-US/guide/dev-faq.md","lastUpdated":1732797638000}'),d={name:"en-US/guide/dev-faq.md"};function p(r,k,o,c,u,F){const i=n;return t(),h("div",null,[e("h1",{id:"development-faq",tabindex:"-1"},[s("Development FAQ "),e("a",{class:"header-anchor vp-link",href:"#development-faq","aria-label":'Permalink to "Development FAQ"'},"​")]),e("p",null,"Here are the problems that are easy to encounter in development."),e("h2",{id:"if-you-encounter-dependency-related-issues",tabindex:"-1"},[s("If you encounter dependency related issues "),e("a",{class:"header-anchor vp-link",href:"#if-you-encounter-dependency-related-issues","aria-label":'Permalink to "If you encounter dependency related issues"'},"​")]),e("div",{class:"language-shell vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"shell"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"rm"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -rf"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," node_modules")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"pnpm"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," i")])])])]),e("h2",{id:"link-local-dependencies",tabindex:"-1"},[s("Link local dependencies "),e("a",{class:"header-anchor vp-link",href:"#link-local-dependencies","aria-label":'Permalink to "Link local dependencies"'},"​")]),e("div",{class:"language-shell vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"shell"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# get dist")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"pnpm"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," build")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"cd"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," dist/element-plus")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# set cur element-plus to global `node_modules`")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"pnpm"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," link"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --global")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# for esm we also need link element-plus for dist")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"pnpm"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," link"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --global"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," element-plus")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# go to your project, link to `element-plus`")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"cd"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," your-project")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"pnpm"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," link"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --global"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," element-plus")])])])]),e("blockquote",null,[e("p",null,[s("More info see "),e("a",{href:"https://pnpm.io/cli/link",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("pnpm link"),l(i,{class:"link-icon"})]),s(".")])]),e("h2",{id:"theme",tabindex:"-1"},[s("Theme "),e("a",{class:"header-anchor vp-link",href:"#theme","aria-label":'Permalink to "Theme"'},"​")]),e("p",null,"We should not write Chinese comments in scss files."),e("p",null,[s("It will generate warning "),e("code",null,'@charset "UTF-8";'),s(" in the header of css file when built with vite.")]),e("blockquote",null,[e("p",null,[s("More info see "),e("a",{href:"https://github.com/element-plus/element-plus/issues/3219",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("#3219"),l(i,{class:"link-icon"})]),s(".")])])])}const f=a(d,[["render",p]]);export{y as __pageData,f as default};
