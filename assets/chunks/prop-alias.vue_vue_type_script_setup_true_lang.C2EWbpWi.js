import{p as _,r as u,q as p,o as g,t as b,c as V,a as f,y as i,v as r,W as m,X as C,M as x}from"./framework.SZaum9Aq.js";const $=_({__name:"basic",setup(h){const d=u((()=>{const n=[];for(let e=1;e<=15;e++)n.push({key:e,label:`Option ${e}`,disabled:e%4===0});return n})()),o=u([]);return(n,e)=>{const l=p("el-transfer");return g(),b(l,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),data:d.value},null,8,["modelValue","data"])}}}),D=_({__name:"customizable",setup(h){const d=u((()=>{const a=[];for(let t=1;t<=15;t++)a.push({key:t,label:`Option ${t}`,disabled:t%4===0});return a})()),o=u([1]),n=u([1]),e=(a,t)=>a("span",null,t.label),l=(a,t,s)=>{console.log(a,t,s)};return(a,t)=>{const s=p("el-button"),k=p("el-transfer");return g(),V(x,null,[f("p",{style:{"text-align":"center",margin:"0 0 20px"}}," Customize data items using render-content "),f("div",{style:{"text-align":"center"}},[i(k,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=c=>n.value=c),style:{"text-align":"left",display:"inline-block"},filterable:"","left-default-checked":[2,3],"right-default-checked":[1],"render-content":e,titles:["Source","Target"],"button-texts":["To left","To right"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:d.value,onChange:l},{"left-footer":r(()=>[i(s,{class:"transfer-footer",size:"small"},{default:r(()=>[m("Operation")]),_:1})]),"right-footer":r(()=>[i(s,{class:"transfer-footer",size:"small"},{default:r(()=>[m("Operation")]),_:1})]),_:1},8,["modelValue","data"]),f("p",{style:{"text-align":"center",margin:"50px 0 20px"}}," Customize data items using scoped slot "),f("div",{style:{"text-align":"center"}},[i(k,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=c=>o.value=c),style:{"text-align":"left",display:"inline-block"},filterable:"","left-default-checked":[2,3],"right-default-checked":[1],titles:["Source","Target"],"button-texts":["To left","To right"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:d.value,onChange:l},{default:r(({option:c})=>[f("span",null,C(c.key)+" - "+C(c.label),1)]),"left-footer":r(()=>[i(s,{class:"transfer-footer",size:"small"},{default:r(()=>[m("Operation")]),_:1})]),"right-footer":r(()=>[i(s,{class:"transfer-footer",size:"small"},{default:r(()=>[m("Operation")]),_:1})]),_:1},8,["modelValue","data"])])])],64)}}}),T=_({__name:"filterable",setup(h){const d=u((()=>{const e=[],l=["California","Illinois","Maryland","Texas","Florida","Colorado","Connecticut "],a=["CA","IL","MD","TX","FL","CO","CT"];return l.forEach((t,s)=>{e.push({label:t,key:s,initial:a[s]})}),e})()),o=u([]),n=(e,l)=>l.initial.toLowerCase().includes(e.toLowerCase());return(e,l)=>{const a=p("el-transfer");return g(),b(a,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value=t),filterable:"","filter-method":n,"filter-placeholder":"State Abbreviations",data:d.value},null,8,["modelValue","data"])}}}),O=_({__name:"prop-alias",setup(h){const d=u((()=>{const n=[];for(let e=1;e<=15;e++)n.push({value:e,desc:`Option ${e}`,disabled:e%4===0});return n})()),o=u([]);return(n,e)=>{const l=p("el-transfer");return g(),b(l,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),props:{key:"value",label:"desc"},data:d.value},null,8,["modelValue","data"])}}});export{$ as _,T as a,D as b,O as c};
