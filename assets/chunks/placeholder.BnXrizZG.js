import{p as l,q as d,o,c as n,M as g,ab as b,a as e,X as u,y as s,_ as m,v as r,u as j,W as h}from"./framework.SZaum9Aq.js";import{R as v}from"./theme.C0VdCxcc.js";const x="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",I=l({__name:"basic-usage",setup(f){const c=["fill","contain","cover","none","scale-down"];return(_,a)=>{const t=d("el-image");return o(),n("div",{class:"demo-image"},[(o(),n(g,null,b(c,p=>e("div",{key:p,class:"block"},[e("span",{class:"demonstration"},u(p),1),s(t,{style:{width:"100px",height:"100px"},src:x,fit:p},null,8,["fit"])])),64))])}}}),$=m(I,[["__scopeId","data-v-5a360a6e"]]),y="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",k=l({__name:"image-preview",setup(f){const c=["https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg","https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg","https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg","https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg","https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg","https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg","https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"];return(_,a)=>{const t=d("el-image");return o(),n("div",{class:"demo-image__preview"},[s(t,{style:{width:"100px",height:"100px"},src:y,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":c,"initial-index":4,fit:"cover"})])}}}),B=m(k,[["__scopeId","data-v-6e1e4ae2"]]),w=l({__name:"lazy-load",setup(f){const c=["https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg","https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg","https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg","https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg","https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg","https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg","https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"];return(_,a)=>{const t=d("el-image");return o(),n("div",{class:"demo-image__lazy"},[(o(),n(g,null,b(c,p=>s(t,{key:p,src:p,lazy:""},null,8,["src"])),64))])}}}),D=m(w,[["__scopeId","data-v-08f37e6e"]]),E=l({__name:"load-failed",setup(f){return(c,_)=>{const a=d("el-image"),t=d("el-icon");return o(),n("div",{class:"demo-image__error"},[e("div",{class:"block"},[e("span",{class:"demonstration"},"Default"),s(a)]),e("div",{class:"block"},[e("span",{class:"demonstration"},"Custom"),s(a,null,{error:r(()=>[e("div",{class:"image-slot"},[s(t,null,{default:r(()=>[s(j(v))]),_:1})])]),_:1})])])}}}),N=m(E,[["__scopeId","data-v-974b4c7f"]]),i="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",L=l({__name:"placeholder",setup(f){return(c,_)=>{const a=d("el-image");return o(),n("div",{class:"demo-image__placeholder"},[e("div",{class:"block"},[e("span",{class:"demonstration"},"Default"),s(a,{src:i})]),e("div",{class:"block"},[e("span",{class:"demonstration"},"Custom"),s(a,{src:i},{placeholder:r(()=>[e("div",{class:"image-slot"},[h("Loading"),e("span",{class:"dot"},"...")])]),_:1})])])}}}),V=m(L,[["__scopeId","data-v-4d7a16e7"]]);export{$ as E,V as a,N as b,D as c,B as d};
