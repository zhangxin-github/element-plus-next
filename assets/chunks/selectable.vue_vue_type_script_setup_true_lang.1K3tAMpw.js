import{p as i,q as h,o as b,t as m,r as g,c as x,y as _,u as k,a as L,v as f,W as w,M as y,X as D,w as $}from"./framework.SZaum9Aq.js";import{aE as C}from"./theme.C0VdCxcc.js";const E=i({__name:"accordion",setup(u){const t=a=>{console.log(a)},n=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],o={children:"children",label:"label"};return(a,l)=>{const e=h("el-tree");return b(),m(e,{style:{"max-width":"600px"},data:n,props:o,accordion:"",onNodeClick:t})}}}),R=i({__name:"basic",setup(u){const t=a=>{console.log(a)},n=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],o={children:"children",label:"label"};return(a,l)=>{const e=h("el-tree");return b(),m(e,{style:{"max-width":"600px"},data:n,props:o,onNodeClick:t})}}}),T=i({__name:"checking-tree",setup(u){const t=g(),n=()=>{console.log(t.value.getCheckedNodes(!1,!1))},o=()=>{console.log(t.value.getCheckedKeys(!1))},a=()=>{t.value.setCheckedNodes([{id:5,label:"Level two 2-1"},{id:9,label:"Level three 1-1-1"}],!1)},l=()=>{t.value.setCheckedKeys([3],!1)},e=()=>{t.value.setCheckedKeys([],!1)},r={children:"children",label:"label"},c=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(p,s)=>{const d=h("el-button");return b(),x(y,null,[_(k(C),{ref_key:"treeRef",ref:t,style:{"max-width":"600px"},data:c,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:r},null,512),L("div",{class:"buttons"},[_(d,{onClick:n},{default:f(()=>[w("get by node")]),_:1}),_(d,{onClick:o},{default:f(()=>[w("get by key")]),_:1}),_(d,{onClick:a},{default:f(()=>[w("set by node")]),_:1}),_(d,{onClick:l},{default:f(()=>[w("set by key")]),_:1}),_(d,{onClick:e},{default:f(()=>[w("reset")]),_:1})])],64)}}}),V=i({__name:"custom-leaf",setup(u){const t={label:"name",children:"zones",isLeaf:"leaf"},n=(o,a)=>{if(o.level===0)return a([{name:"region"}]);if(o.level>1)return a([]);setTimeout(()=>{a([{name:"leaf",leaf:!0},{name:"zone"}])},500)};return(o,a)=>{const l=h("el-tree");return b(),m(l,{style:{"max-width":"600px"},props:t,load:n,lazy:"","show-checkbox":""})}}}),K=i({__name:"custom-node-class",setup(u){const t=(o,a)=>o.isPenultimate?"is-penultimate":null,n=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",isPenultimate:!0,children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",isPenultimate:!0,children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",isPenultimate:!0,children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(o,a)=>{const l=h("el-tree");return b(),x("div",{class:"custom-tree-node-container"},[_(l,{style:{"max-width":"600px"},data:n,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,props:{class:t}},null,8,["props"])])}}}),B=i({__name:"customized-node",setup(u){let t=1e3;const n=e=>{const r={id:t++,label:"testtest",children:[]};e.children||(e.children=[]),e.children.push(r),l.value=[...l.value]},o=(e,r)=>{const c=e.parent,p=c.data.children||c.data,s=p.findIndex(d=>d.id===r.id);p.splice(s,1),l.value=[...l.value]},a=(e,{node:r,data:c,store:p})=>e("span",{class:"custom-tree-node"},e("span",null,r.label),e("span",null,e("a",{onClick:()=>n(c)},"Append "),e("a",{style:"margin-left: 8px",onClick:()=>o(r,c)},"Delete"))),l=g([{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}]);return(e,r)=>{const c=h("el-tree");return b(),x("div",{class:"custom-tree-container"},[L("p",null,"Using render-content"),_(c,{style:{"max-width":"600px"},data:l.value,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":a},null,8,["data"]),L("p",null,"Using scoped slot"),_(c,{style:{"max-width":"600px"},data:l.value,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},{default:f(({node:p,data:s})=>[L("span",{class:"custom-tree-node"},[L("span",null,D(p.label),1),L("span",null,[L("a",{onClick:d=>n(s)}," Append ",8,["onClick"]),L("a",{style:{"margin-left":"8px"},onClick:d=>o(p,s)}," Delete ",8,["onClick"])])])]),_:1},8,["data"])])}}}),S=i({__name:"default-state",setup(u){const t={children:"children",label:"label"},n=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(o,a)=>{const l=h("el-tree");return b(),m(l,{style:{"max-width":"600px"},data:n,"show-checkbox":"","node-key":"id","default-expanded-keys":[2,3],"default-checked-keys":[5],props:t})}}}),U=i({__name:"disabled",setup(u){const t={children:"children",label:"label",disabled:"disabled"},n=[{id:1,label:"Level one 1",children:[{id:3,label:"Level two 2-1",children:[{id:4,label:"Level three 3-1-1"},{id:5,label:"Level three 3-1-2",disabled:!0}]},{id:2,label:"Level two 2-2",disabled:!0,children:[{id:6,label:"Level three 3-2-1"},{id:7,label:"Level three 3-2-2",disabled:!0}]}]}];return(o,a)=>{const l=h("el-tree");return b(),m(l,{style:{"max-width":"600px"},data:n,props:t,"show-checkbox":""})}}}),A=i({__name:"draggable",setup(u){const t=(s,d)=>{console.log("drag start",s)},n=(s,d,v)=>{console.log("tree drag enter:",d.label)},o=(s,d,v)=>{console.log("tree drag leave:",d.label)},a=(s,d,v)=>{console.log("tree drag over:",d.label)},l=(s,d,v,N)=>{console.log("tree drag end:",d&&d.label,v)},e=(s,d,v,N)=>{console.log("tree drop:",d.label,v)},r=(s,d,v)=>d.data.label==="Level two 3-1"?v!=="inner":!0,c=s=>!s.data.label.includes("Level three 3-1-1"),p=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}];return(s,d)=>{const v=h("el-tree");return b(),m(v,{style:{"max-width":"600px"},"allow-drop":r,"allow-drag":c,data:p,draggable:"","default-expand-all":"","node-key":"id",onNodeDragStart:t,onNodeDragEnter:n,onNodeDragLeave:o,onNodeDragOver:a,onNodeDragEnd:l,onNodeDrop:e})}}}),F=i({__name:"filtering",setup(u){const t=g(""),n=g(),o={children:"children",label:"label"};$(t,e=>{n.value.filter(e)});const a=(e,r)=>e?r.label.includes(e):!0,l=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(e,r)=>{const c=h("el-input");return b(),x(y,null,[_(c,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=p=>t.value=p),style:{width:"240px"},placeholder:"Filter keyword"},null,8,["modelValue"]),_(k(C),{ref_key:"treeRef",ref:n,style:{"max-width":"600px"},class:"filter-tree",data:l,props:o,"default-expand-all":"","filter-node-method":a},null,512)],64)}}}),M=i({__name:"multiple-times-load",setup(u){const t={label:"name",children:"zones",isLeaf:"leaf"};let n=0;const o=(a,l,e)=>{if(a.level===0)return l([{name:"region"}]);n++,a.level>=1&&setTimeout(()=>n>3?l([{name:"zone1",leaf:!0},{name:"zone2",leaf:!0},{name:"zone3",leaf:!0}]):e(),3e3)};return(a,l)=>{const e=h("el-tree");return b(),m(e,{style:{"max-width":"600px"},props:t,load:o,lazy:""})}}}),O=i({__name:"selectable",setup(u){let t=1;const n={label:"name",children:"zones"},o=(l,e,r)=>{console.log(l,e,r)},a=(l,e)=>{if(l.level===0)return e([{name:"Root1"},{name:"Root2"}]);if(l.level>3)return e([]);let r=!1;l.data.name==="region1"?r=!0:l.data.name==="region2"?r=!1:r=Math.random()>.5,setTimeout(()=>{let c=[];r?c=[{name:`zone${t++}`},{name:`zone${t++}`}]:c=[],e(c)},500)};return(l,e)=>{const r=h("el-tree");return b(),m(r,{style:{"max-width":"600px"},props:n,load:a,lazy:"","show-checkbox":"",onCheckChange:o})}}});export{R as _,O as a,V as b,M as c,U as d,S as e,T as f,B as g,K as h,F as i,E as j,A as k};
