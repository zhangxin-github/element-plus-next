import{f as y,j as u}from"./theme.C0VdCxcc.js";import{p as o,o as l,c as t,a as e,M as d,ab as h,S as f,X as c,u as p,aE as v,aF as x,aG as k,aH as b,aI as B,aJ as T,aK as $,aL as E,aM as z,aN as C,_ as F,aO as H,aP as L,W as a}from"./framework.SZaum9Aq.js";const M=o({__name:"convention",setup(m){const r=[{level:"Supplementary text",type:"extra-small"},{level:"Body (small)",type:"small"},{level:"Body",type:"base"},{level:"Small Title",type:"medium"},{level:"Title",type:"large"},{level:"Main Title",type:"extra-large"}];function i(_){return _.split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ")}return(_,n)=>(l(),t("table",{class:"demo-typo-size"},[e("tbody",null,[e("tr",null,[e("td",null,"Level"),e("td",null,"Font Size"),e("td",{class:"color-dark-light"},"Demo")]),(l(),t(d,null,h(r,(s,g)=>e("tr",{key:g,style:f(`font-size: var(--el-font-size-${s.type})`)},[e("td",null,c(s.level),1),e("td",null,c(p(y)(`--el-font-size-${s.type}`).value+" "+i(s.type)),1),e("td",null,"Build with Element")],4)),64))])]))}}),N=o({__name:"font",setup(m){return(r,i)=>p(u)?(l(),t("div",{key:1,class:"demo-term-box"},[e("img",{src:T,alt:""}),e("img",{src:$,alt:""}),e("img",{src:E,alt:""}),e("img",{src:z,alt:""}),e("img",{src:C,alt:""})])):(l(),t("div",{key:0,class:"demo-term-box"},[e("img",{src:v,alt:""}),e("img",{src:x,alt:""}),e("img",{src:k,alt:""}),e("img",{src:b,alt:""}),e("img",{src:B,alt:""})]))}}),V=F(N,[["__scopeId","data-v-5e9e2884"]]),j=o({__name:"line-height",setup(m){return(r,i)=>(l(),t("div",null,[p(u)?(l(),t("img",{key:0,class:"lineH-left",src:H})):(l(),t("img",{key:1,class:"lineH-left",src:L})),e("ul",{class:"lineH-right"},[e("li",null,[a("line-height:1 "),e("span",null,"No line height")]),e("li",null,[a("line-height:1.3 "),e("span",null,"Compact")]),e("li",null,[a("line-height:1.5 "),e("span",null,"Regular")]),e("li",null,[a("line-height:1.7 "),e("span",null,"Loose")])])]))}});export{V as E,M as _,j as a};
