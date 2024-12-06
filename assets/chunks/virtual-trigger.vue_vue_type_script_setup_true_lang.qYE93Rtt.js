import{p as x,r as p,q as s,o as i,t as b,v as t,y as e,W as l,X as T,_ as v,c as d,a as u,M as g,ab as $,b as C,a0 as B}from"./framework.BfK9qma0.js";const z=x({__name:"advanced-usage",setup(_){const a=p(!1);return(n,o)=>{const f=s("el-button"),c=s("el-tooltip");return i(),b(c,{disabled:a.value,content:"click to close tooltip function",placement:"bottom",effect:"light"},{default:t(()=>[e(f,{onClick:o[0]||(o[0]=r=>a.value=!a.value)},{default:t(()=>[l(" click to "+T(a.value?"active":"close")+" tooltip function ",1)]),_:1})]),_:1},8,["disabled"])}}}),R={};function L(_,a){const n=s("el-button"),o=s("el-tooltip");return i(),b(o,{content:"I am an el-tooltip"},{default:t(()=>[e(n,null,{default:t(()=>[l("trigger me")]),_:1})]),_:1})}const U=v(R,[["render",L]]),E={};function w(_,a){const n=s("el-button"),o=s("el-tooltip");return i(),d("div",{class:"tooltip-base-box"},[u("div",{class:"row center"},[e(o,{class:"box-item",effect:"dark",content:"Top Left prompts info",placement:"top-start"},{default:t(()=>[e(n,null,{default:t(()=>[l("top-start")]),_:1})]),_:1}),e(o,{class:"box-item",effect:"dark",content:"Top Center prompts info",placement:"top"},{default:t(()=>[e(n,null,{default:t(()=>[l("top")]),_:1})]),_:1}),e(o,{class:"box-item",effect:"dark",content:"Top Right prompts info",placement:"top-end"},{default:t(()=>[e(n,null,{default:t(()=>[l("top-end")]),_:1})]),_:1})]),u("div",{class:"row"},[e(o,{class:"box-item",effect:"dark",content:"Left Top prompts info",placement:"left-start"},{default:t(()=>[e(n,null,{default:t(()=>[l("left-start")]),_:1})]),_:1}),e(o,{class:"box-item",effect:"dark",content:"Right Top prompts info",placement:"right-start"},{default:t(()=>[e(n,null,{default:t(()=>[l("right-start")]),_:1})]),_:1})]),u("div",{class:"row"},[e(o,{class:"box-item",effect:"dark",content:"Left Center prompts info",placement:"left"},{default:t(()=>[e(n,{class:"mt-3 mb-3"},{default:t(()=>[l("left")]),_:1})]),_:1}),e(o,{class:"box-item",effect:"dark",content:"Right Center prompts info",placement:"right"},{default:t(()=>[e(n,null,{default:t(()=>[l("right")]),_:1})]),_:1})]),u("div",{class:"row"},[e(o,{class:"box-item",effect:"dark",content:"Left Bottom prompts info",placement:"left-end"},{default:t(()=>[e(n,null,{default:t(()=>[l("left-end")]),_:1})]),_:1}),e(o,{class:"box-item",effect:"dark",content:"Right Bottom prompts info",placement:"right-end"},{default:t(()=>[e(n,null,{default:t(()=>[l("right-end")]),_:1})]),_:1})]),u("div",{class:"row center"},[e(o,{class:"box-item",effect:"dark",content:"Bottom Left prompts info",placement:"bottom-start"},{default:t(()=>[e(n,null,{default:t(()=>[l("bottom-start")]),_:1})]),_:1}),e(o,{class:"box-item",effect:"dark",content:"Bottom Center prompts info",placement:"bottom"},{default:t(()=>[e(n,null,{default:t(()=>[l("bottom")]),_:1})]),_:1}),e(o,{class:"box-item",effect:"dark",content:"Bottom Right prompts info",placement:"bottom-end"},{default:t(()=>[e(n,null,{default:t(()=>[l("bottom-end")]),_:1})]),_:1})])])}const X=v(E,[["render",w]]),q=x({__name:"controlled",setup(_){const a=p(!1);return(n,o)=>{const f=s("el-button"),c=s("el-tooltip");return i(),b(c,{visible:a.value},{content:t(()=>[u("span",null,"Content")]),default:t(()=>[e(f,{onMouseenter:o[0]||(o[0]=r=>a.value=!0),onMouseleave:o[1]||(o[1]=r=>a.value=!1)},{default:t(()=>[l(" Hover me ")]),_:1})]),_:1},8,["visible"])}}}),M={};function y(_,a){const n=s("el-button"),o=s("el-tooltip");return i(),b(o,{content:"<span>The content can be <strong>HTML</strong></span>","raw-content":""},{default:t(()=>[e(n,null,{default:t(()=>[l("hover me")]),_:1})]),_:1})}const A=v(M,[["render",y]]),H={};function D(_,a){const n=s("el-button"),o=s("el-tooltip");return i(),b(o,{placement:"top"},{content:t(()=>[l(" multiple lines"),u("br"),l("second line ")]),default:t(()=>[e(n,null,{default:t(()=>[l("Top center")]),_:1})]),_:1})}const F=v(H,[["render",D]]),I=x({__name:"singleton",setup(_){const a=p(),n=p(),o=p(!1);return(f,c)=>{const r=s("el-button"),k=s("el-tooltip");return i(),d(g,null,[u("div",null,[(i(),d(g,null,$(3,h=>e(r,{key:h,onMouseover:c[0]||(c[0]=m=>a.value=m.currentTarget),onClick:c[1]||(c[1]=m=>o.value=!o.value)},{default:t(()=>[l("Click to open tooltip")]),_:2},1024)),64))]),e(k,{ref_key:"tooltipRef",ref:n,visible:o.value,"popper-options":{modifiers:[{name:"computeStyles",options:{adaptive:!1,enabled:!1}}]},"virtual-ref":a.value,"virtual-triggering":"","popper-class":"singleton-tooltip"},{content:t(()=>[u("span",null," Some content ")]),_:1},8,["visible","virtual-ref"])],64)}}}),N={};function S(_,a){const n=s("el-button"),o=s("el-tooltip");return i(),d(g,null,[e(o,{content:"Top center",placement:"top"},{default:t(()=>[e(n,null,{default:t(()=>[l("Dark")]),_:1})]),_:1}),e(o,{content:"Bottom center",placement:"bottom",effect:"light"},{default:t(()=>[e(n,null,{default:t(()=>[l("Light")]),_:1})]),_:1}),e(o,{content:"Bottom center",effect:"customized"},{default:t(()=>[e(n,null,{default:t(()=>[l("Customized theme")]),_:1})]),_:1})],64)}const O=v(N,[["render",S]]),W=x({__name:"virtual-trigger",setup(_){const a=p(!1),n=p({getBoundingClientRect(){return o.value}}),o=p({top:0,left:0,bottom:0,right:0}),f=c=>{o.value=DOMRect.fromRect({width:0,height:0,x:c.clientX,y:c.clientY})};return C(()=>{document.addEventListener("mousemove",f)}),B(()=>{document.removeEventListener("mousemove",f)}),(c,r)=>{const k=s("el-tooltip"),h=s("el-button");return i(),d(g,null,[e(k,{visible:a.value,"onUpdate:visible":r[0]||(r[0]=m=>a.value=m),content:"Bottom center",placement:"bottom",effect:"light",trigger:"click","virtual-triggering":"","virtual-ref":n.value},null,8,["visible","virtual-ref"]),e(h,{onClick:r[1]||(r[1]=m=>a.value=!a.value)},{default:t(()=>[l("test")]),_:1})],64)}}});export{X as E,z as _,O as a,F as b,A as c,W as d,I as e,q as f,U as g};
