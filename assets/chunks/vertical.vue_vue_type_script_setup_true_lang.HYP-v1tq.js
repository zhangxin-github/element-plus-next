import{p as b,r as g,q as d,o as x,c as k,y as t,v as e,W as l,a as _,M as G,u as m,t as T,aC as V,_ as y}from"./framework.SZaum9Aq.js";import{C as w,x as O,Y as C,y as N}from"./theme.C0VdCxcc.js";const E=b({__name:"basic",setup(v){const c=g("1"),a=g("1"),u=(i,o)=>{console.log(i,o)};return(i,o)=>{const n=d("el-menu-item"),s=d("el-sub-menu"),f=d("el-menu");return x(),k(G,null,[t(f,{"default-active":c.value,class:"el-menu-demo",mode:"horizontal",onSelect:u},{default:e(()=>[t(n,{index:"1"},{default:e(()=>[l("Processing Center")]),_:1}),t(s,{index:"2"},{title:e(()=>[l("Workspace")]),default:e(()=>[t(n,{index:"2-1"},{default:e(()=>[l("item one")]),_:1}),t(n,{index:"2-2"},{default:e(()=>[l("item two")]),_:1}),t(n,{index:"2-3"},{default:e(()=>[l("item three")]),_:1}),t(s,{index:"2-4"},{title:e(()=>[l("item four")]),default:e(()=>[t(n,{index:"2-4-1"},{default:e(()=>[l("item one")]),_:1}),t(n,{index:"2-4-2"},{default:e(()=>[l("item two")]),_:1}),t(n,{index:"2-4-3"},{default:e(()=>[l("item three")]),_:1})]),_:1})]),_:1}),t(n,{index:"3",disabled:""},{default:e(()=>[l("Info")]),_:1}),t(n,{index:"4"},{default:e(()=>[l("Orders")]),_:1})]),_:1},8,["default-active"]),_("div",{class:"h-6"}),t(f,{"default-active":a.value,class:"el-menu-demo",mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",onSelect:u},{default:e(()=>[t(n,{index:"1"},{default:e(()=>[l("Processing Center")]),_:1}),t(s,{index:"2"},{title:e(()=>[l("Workspace")]),default:e(()=>[t(n,{index:"2-1"},{default:e(()=>[l("item one")]),_:1}),t(n,{index:"2-2"},{default:e(()=>[l("item two")]),_:1}),t(n,{index:"2-3"},{default:e(()=>[l("item three")]),_:1}),t(s,{index:"2-4"},{title:e(()=>[l("item four")]),default:e(()=>[t(n,{index:"2-4-1"},{default:e(()=>[l("item one")]),_:1}),t(n,{index:"2-4-2"},{default:e(()=>[l("item two")]),_:1}),t(n,{index:"2-4-3"},{default:e(()=>[l("item three")]),_:1})]),_:1})]),_:1}),t(n,{index:"3",disabled:""},{default:e(()=>[l("Info")]),_:1}),t(n,{index:"4"},{default:e(()=>[l("Orders")]),_:1})]),_:1},8,["default-active"])],64)}}}),F=b({__name:"collapse",setup(v){const c=g(!0),a=(i,o)=>{console.log(i,o)},u=(i,o)=>{console.log(i,o)};return(i,o)=>{const n=d("el-radio-button"),s=d("el-radio-group"),f=d("el-icon"),r=d("el-menu-item"),p=d("el-menu-item-group"),h=d("el-sub-menu"),I=d("el-menu");return x(),k(G,null,[t(s,{modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=P=>c.value=P),style:{"margin-bottom":"20px"}},{default:e(()=>[t(n,{value:!1},{default:e(()=>[l("expand")]),_:1}),t(n,{value:!0},{default:e(()=>[l("collapse")]),_:1})]),_:1},8,["modelValue"]),t(I,{"default-active":"2",class:"el-menu-vertical-demo",collapse:c.value,onOpen:a,onClose:u},{default:e(()=>[t(h,{index:"1"},{title:e(()=>[t(f,null,{default:e(()=>[t(m(w))]),_:1}),_("span",null,"Navigator One")]),default:e(()=>[t(p,null,{title:e(()=>[_("span",null,"Group One")]),default:e(()=>[t(r,{index:"1-1"},{default:e(()=>[l("item one")]),_:1}),t(r,{index:"1-2"},{default:e(()=>[l("item two")]),_:1})]),_:1}),t(p,{title:"Group Two"},{default:e(()=>[t(r,{index:"1-3"},{default:e(()=>[l("item three")]),_:1})]),_:1}),t(h,{index:"1-4"},{title:e(()=>[_("span",null,"item four")]),default:e(()=>[t(r,{index:"1-4-1"},{default:e(()=>[l("item one")]),_:1})]),_:1})]),_:1}),t(r,{index:"2"},{title:e(()=>[l("Navigator Two")]),default:e(()=>[t(f,null,{default:e(()=>[t(m(O))]),_:1})]),_:1}),t(r,{index:"3",disabled:""},{title:e(()=>[l("Navigator Three")]),default:e(()=>[t(f,null,{default:e(()=>[t(m(C))]),_:1})]),_:1}),t(r,{index:"4"},{title:e(()=>[l("Navigator Four")]),default:e(()=>[t(f,null,{default:e(()=>[t(m(N))]),_:1})]),_:1})]),_:1},8,["collapse"])],64)}}}),$=b({__name:"left-and-right",setup(v){const c=g("1"),a=(u,i)=>{console.log(u,i)};return(u,i)=>{const o=d("el-menu-item"),n=d("el-sub-menu"),s=d("el-menu");return x(),T(s,{"default-active":c.value,class:"el-menu-demo",mode:"horizontal",ellipsis:!1,onSelect:a},{default:e(()=>[t(o,{index:"0"},{default:e(()=>[_("img",{style:{width:"100px"},src:V,alt:"Element logo"})]),_:1}),t(o,{index:"1"},{default:e(()=>[l("Processing Center")]),_:1}),t(n,{index:"2"},{title:e(()=>[l("Workspace")]),default:e(()=>[t(o,{index:"2-1"},{default:e(()=>[l("item one")]),_:1}),t(o,{index:"2-2"},{default:e(()=>[l("item two")]),_:1}),t(o,{index:"2-3"},{default:e(()=>[l("item three")]),_:1}),t(n,{index:"2-4"},{title:e(()=>[l("item four")]),default:e(()=>[t(o,{index:"2-4-1"},{default:e(()=>[l("item one")]),_:1}),t(o,{index:"2-4-2"},{default:e(()=>[l("item two")]),_:1}),t(o,{index:"2-4-3"},{default:e(()=>[l("item three")]),_:1})]),_:1})]),_:1})]),_:1},8,["default-active"])}}}),S={};function W(v,c){const a=d("el-menu-item"),u=d("el-sub-menu"),i=d("el-menu");return x(),T(i,{ellipsis:"",class:"el-menu-popper-demo",mode:"horizontal","popper-offset":16,style:{"max-width":"600px"}},{default:e(()=>[t(a,{index:"1"},{default:e(()=>[l("Processing Center")]),_:1}),t(u,{index:"2"},{title:e(()=>[l("Workspace")]),default:e(()=>[t(a,{index:"2-1"},{default:e(()=>[l("item one")]),_:1}),t(a,{index:"2-2"},{default:e(()=>[l("item two")]),_:1}),t(a,{index:"2-3"},{default:e(()=>[l("item three")]),_:1}),t(u,{index:"2-4"},{title:e(()=>[l("item four")]),default:e(()=>[t(a,{index:"2-4-1"},{default:e(()=>[l("item one")]),_:1}),t(a,{index:"2-4-2"},{default:e(()=>[l("item two")]),_:1}),t(a,{index:"2-4-3"},{default:e(()=>[l("item three")]),_:1})]),_:1})]),_:1}),t(u,{index:"3","popper-offset":8},{title:e(()=>[l("Override Popper Offset")]),default:e(()=>[t(a,{index:"3-1"},{default:e(()=>[l("item one")]),_:1}),t(a,{index:"3-2"},{default:e(()=>[l("item two")]),_:1}),t(a,{index:"3-3"},{default:e(()=>[l("item three")]),_:1}),t(u,{index:"3-4","popper-offset":20},{title:e(()=>[l("override child")]),default:e(()=>[t(a,{index:"3-4-1"},{default:e(()=>[l("item one")]),_:1}),t(a,{index:"3-4-2"},{default:e(()=>[l("item two")]),_:1}),t(a,{index:"3-4-3"},{default:e(()=>[l("item three")]),_:1})]),_:1})]),_:1}),t(a,{index:"4",disabled:""},{default:e(()=>[l("Info")]),_:1}),t(a,{index:"5"},{default:e(()=>[l("Orders")]),_:1})]),_:1})}const M=y(S,[["render",W]]),q=b({__name:"vertical",setup(v){const c=(u,i)=>{console.log(u,i)},a=(u,i)=>{console.log(u,i)};return(u,i)=>{const o=d("el-icon"),n=d("el-menu-item"),s=d("el-menu-item-group"),f=d("el-sub-menu"),r=d("el-menu"),p=d("el-col"),h=d("el-row");return x(),T(h,{class:"tac"},{default:e(()=>[t(p,{span:12},{default:e(()=>[_("h5",{class:"mb-2"},"Default colors"),t(r,{"default-active":"2",class:"el-menu-vertical-demo",onOpen:c,onClose:a},{default:e(()=>[t(f,{index:"1"},{title:e(()=>[t(o,null,{default:e(()=>[t(m(w))]),_:1}),_("span",null,"Navigator One")]),default:e(()=>[t(s,{title:"Group One"},{default:e(()=>[t(n,{index:"1-1"},{default:e(()=>[l("item one")]),_:1}),t(n,{index:"1-2"},{default:e(()=>[l("item two")]),_:1})]),_:1}),t(s,{title:"Group Two"},{default:e(()=>[t(n,{index:"1-3"},{default:e(()=>[l("item three")]),_:1})]),_:1}),t(f,{index:"1-4"},{title:e(()=>[l("item four")]),default:e(()=>[t(n,{index:"1-4-1"},{default:e(()=>[l("item one")]),_:1})]),_:1})]),_:1}),t(n,{index:"2"},{default:e(()=>[t(o,null,{default:e(()=>[t(m(O))]),_:1}),_("span",null,"Navigator Two")]),_:1}),t(n,{index:"3",disabled:""},{default:e(()=>[t(o,null,{default:e(()=>[t(m(C))]),_:1}),_("span",null,"Navigator Three")]),_:1}),t(n,{index:"4"},{default:e(()=>[t(o,null,{default:e(()=>[t(m(N))]),_:1}),_("span",null,"Navigator Four")]),_:1})]),_:1})]),_:1}),t(p,{span:12},{default:e(()=>[_("h5",{class:"mb-2"},"Custom colors"),t(r,{"active-text-color":"#ffd04b","background-color":"#545c64",class:"el-menu-vertical-demo","default-active":"2","text-color":"#fff",onOpen:c,onClose:a},{default:e(()=>[t(f,{index:"1"},{title:e(()=>[t(o,null,{default:e(()=>[t(m(w))]),_:1}),_("span",null,"Navigator One")]),default:e(()=>[t(s,{title:"Group One"},{default:e(()=>[t(n,{index:"1-1"},{default:e(()=>[l("item one")]),_:1}),t(n,{index:"1-2"},{default:e(()=>[l("item two")]),_:1})]),_:1}),t(s,{title:"Group Two"},{default:e(()=>[t(n,{index:"1-3"},{default:e(()=>[l("item three")]),_:1})]),_:1}),t(f,{index:"1-4"},{title:e(()=>[l("item four")]),default:e(()=>[t(n,{index:"1-4-1"},{default:e(()=>[l("item one")]),_:1})]),_:1})]),_:1}),t(n,{index:"2"},{default:e(()=>[t(o,null,{default:e(()=>[t(m(O))]),_:1}),_("span",null,"Navigator Two")]),_:1}),t(n,{index:"3",disabled:""},{default:e(()=>[t(o,null,{default:e(()=>[t(m(C))]),_:1}),_("span",null,"Navigator Three")]),_:1}),t(n,{index:"4"},{default:e(()=>[t(o,null,{default:e(()=>[t(m(N))]),_:1}),_("span",null,"Navigator Four")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{M as E,E as _,$ as a,q as b,F as c};
