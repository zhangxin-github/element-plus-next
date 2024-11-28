import{_ as e}from"./chunks/theme.C0VdCxcc.js";import{_ as t,o as n,c as h,a as s,W as i,y as l}from"./chunks/framework.SZaum9Aq.js";const m=JSON.parse('{"title":"Dark Mode","description":"","frontmatter":{"title":"Dark Mode","lang":"en-US"},"headers":[{"level":2,"title":"How to enable it?","slug":"how-to-enable-it","link":"#how-to-enable-it","children":[]},{"level":2,"title":"Custom variables","slug":"custom-variables","link":"#custom-variables","children":[{"level":3,"title":"By CSS","slug":"by-css","link":"#by-css","children":[]},{"level":3,"title":"By SCSS","slug":"by-scss","link":"#by-scss","children":[]}]}],"relativePath":"en-US/guide/dark-mode.md","filePath":"en-US/guide/dark-mode.md","lastUpdated":1732797638000}'),k={name:"en-US/guide/dark-mode.md"};function r(p,d,o,c,g,E){const a=e;return n(),h("div",null,[s("h1",{id:"dark-mode",tabindex:"-1"},[i("Dark Mode "),s("span",{class:"vp-tag"},"2.2.0"),i(),s("a",{class:"header-anchor vp-link",href:"#dark-mode","aria-label":'Permalink to "Dark Mode ^(2.2.0)"'},"​")]),s("p",null,"After a long time, Element Plus supports dark mode!"),s("p",null,"We extracted and unified all necessary variables to make it possible to implement based on CSS Vars."),s("h2",{id:"how-to-enable-it",tabindex:"-1"},[i("How to enable it? "),s("a",{class:"header-anchor vp-link",href:"#how-to-enable-it","aria-label":'Permalink to "How to enable it?"'},"​")]),s("p",null,[i("First you can create a switch to toggle "),s("code",null,"dark"),i(" class of html.")]),s("blockquote",null,[s("p",null,[i("If you only need dark mode, just add "),s("code",null,"dark"),i(" class for html.")])]),s("div",{class:"language-html vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"html"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"dark"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"head"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"head"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"body"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"body"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"html"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])]),s("blockquote",null,[s("p",null,[i("If you want to toggle it, i recommend "),s("a",{href:"https://vueuse.org/core/useDark/",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("useDark | VueUse"),l(a,{class:"link-icon"})]),i(".")])]),s("p",null,"Then, you can quickly enable it with just one line of code to import CSS in your entry."),s("div",{class:"language-ts vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// main.ts")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// if you just want to import css")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus/theme-chalk/dark/css-vars.css'")])])])]),s("blockquote",null,[s("p",null,[i("If you want an example, you can refer to "),s("a",{href:"https://github.com/element-plus/element-plus-vite-starter",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("element-plus-vite-starter"),l(a,{class:"link-icon"})]),i(".")])]),s("h2",{id:"custom-variables",tabindex:"-1"},[i("Custom variables "),s("a",{class:"header-anchor vp-link",href:"#custom-variables","aria-label":'Permalink to "Custom variables"'},"​")]),s("h3",{id:"by-css",tabindex:"-1"},[i("By CSS "),s("a",{class:"header-anchor vp-link",href:"#by-css","aria-label":'Permalink to "By CSS"'},"​")]),s("p",null,"Just override it by CSS Vars."),s("p",null,[i("For example, new file "),s("code",null,"styles/dark/css-vars.css"),i(":")]),s("div",{class:"language-css vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"css"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"html"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},".dark"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  /* custom dark bg color */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  --el-bg-color"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"#626aef"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])]),s("p",null,"Import it after styles of Element Plus:"),s("div",{class:"language-ts vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// main.ts")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus/theme-chalk/dark/css-vars.css'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," './styles/dark/css-vars.css'")])])])]),s("h3",{id:"by-scss",tabindex:"-1"},[i("By SCSS "),s("a",{class:"header-anchor vp-link",href:"#by-scss","aria-label":'Permalink to "By SCSS"'},"​")]),s("p",null,"If you use scss, you can also import scss file to compile."),s("blockquote",null,[s("p",null,[i("You can refer "),s("a",{href:"./theming.html",class:"vp-link"},"Theming"),i(" to get more info.")])]),s("div",{class:"language-scss vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"scss"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// styles/element/index.scss")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/*just override what you need*/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"@forward"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus/theme-chalk/src/dark/var.scss'"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," with"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  $bg-color"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": (")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    'page'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": #"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"0a0a0a"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    ''"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": #"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"626aef"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    'overlay'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": #"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"1d1e1f"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")])])])]),s("div",{class:"language-ts vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// main.ts")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," './styles/element/index.scss'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// or just want to import scss?")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// import 'element-plus/theme-chalk/src/dark/css-vars.scss'")])])])])])}const b=t(k,[["render",r]]);export{m as __pageData,b as default};
