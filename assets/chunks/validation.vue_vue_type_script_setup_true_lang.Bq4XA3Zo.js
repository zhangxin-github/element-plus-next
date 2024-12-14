import{p as A,l as w,q as t,o as x,t as P,v as l,y as e,a as N,W as r,r as U,c as q,M as O,ab as T,a5 as D,u as j}from"./framework.BfK9qma0.js";const M=A({__name:"accessibility",setup(F){const n=w({fullName:"",firstName:"",lastName:""});return(c,a)=>{const d=t("el-alert"),s=t("el-input"),u=t("el-form-item"),_=t("el-space"),m=t("el-col"),p=t("el-row"),o=t("el-form");return x(),P(o,{"label-position":"left","label-width":"auto",style:{"max-width":"600px"}},{default:l(()=>[e(_,{fill:""},{default:l(()=>[e(d,{type:"info","show-icon":"",closable:!1},{default:l(()=>[N("p",null,'"Full Name" label is automatically attached to the input:')]),_:1}),e(u,{label:"Full Name"},{default:l(()=>[e(s,{modelValue:n.fullName,"onUpdate:modelValue":a[0]||(a[0]=i=>n.fullName=i)},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{fill:""},{default:l(()=>[e(d,{type:"info","show-icon":"",closable:!1},{default:l(()=>[N("p",null,[r(' "Your Information" serves as a label for the group of inputs. '),N("br"),r(' You must specify labels on the individal inputs. Placeholders are not replacements for using the "label" attribute. ')])]),_:1}),e(u,{label:"Your Information"},{default:l(()=>[e(p,{gutter:20},{default:l(()=>[e(m,{span:12},{default:l(()=>[e(s,{modelValue:n.firstName,"onUpdate:modelValue":a[1]||(a[1]=i=>n.firstName=i),"aria-label":"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(m,{span:12},{default:l(()=>[e(s,{modelValue:n.lastName,"onUpdate:modelValue":a[2]||(a[2]=i=>n.lastName=i),"aria-label":"Last Name",placeholder:"Last Name"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),Y=A({__name:"alignment",setup(F){const n=U("right"),c=U(""),a=w({name:"",region:"",type:""});return(d,s)=>{const u=t("el-radio-button"),_=t("el-radio-group"),m=t("el-form-item"),p=t("el-input"),o=t("el-form");return x(),P(o,{"label-position":n.value,"label-width":"auto",model:a,style:{"max-width":"600px"}},{default:l(()=>[e(m,{label:"Form Align","label-position":"right"},{default:l(()=>[e(_,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=i=>n.value=i),"aria-label":"label position"},{default:l(()=>[e(u,{value:"left"},{default:l(()=>[r("Left")]),_:1}),e(u,{value:"right"},{default:l(()=>[r("Right")]),_:1}),e(u,{value:"top"},{default:l(()=>[r("Top")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"Form Item Align","label-position":"right"},{default:l(()=>[e(_,{modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=i=>c.value=i),"aria-label":"item label position"},{default:l(()=>[e(u,{value:""},{default:l(()=>[r("Empty")]),_:1}),e(u,{value:"left"},{default:l(()=>[r("Left")]),_:1}),e(u,{value:"right"},{default:l(()=>[r("Right")]),_:1}),e(u,{value:"top"},{default:l(()=>[r("Top")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"Name","label-position":c.value},{default:l(()=>[e(p,{modelValue:a.name,"onUpdate:modelValue":s[2]||(s[2]=i=>a.name=i)},null,8,["modelValue"])]),_:1},8,["label-position"]),e(m,{label:"Activity zone","label-position":c.value},{default:l(()=>[e(p,{modelValue:a.region,"onUpdate:modelValue":s[3]||(s[3]=i=>a.region=i)},null,8,["modelValue"])]),_:1},8,["label-position"]),e(m,{label:"Activity form","label-position":c.value},{default:l(()=>[e(p,{modelValue:a.type,"onUpdate:modelValue":s[4]||(s[4]=i=>a.type=i)},null,8,["modelValue"])]),_:1},8,["label-position"])]),_:1},8,["label-position","model"])}}}),H=A({__name:"basic-form",setup(F){const n=w({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),c=()=>{console.log("submit!")};return(a,d)=>{const s=t("el-input"),u=t("el-form-item"),_=t("el-option"),m=t("el-select"),p=t("el-date-picker"),o=t("el-col"),i=t("el-time-picker"),f=t("el-switch"),b=t("el-checkbox"),k=t("el-checkbox-group"),y=t("el-radio"),h=t("el-radio-group"),C=t("el-button"),z=t("el-form");return x(),P(z,{model:n,"label-width":"auto",style:{"max-width":"600px"}},{default:l(()=>[e(u,{label:"Activity name"},{default:l(()=>[e(s,{modelValue:n.name,"onUpdate:modelValue":d[0]||(d[0]=g=>n.name=g)},null,8,["modelValue"])]),_:1}),e(u,{label:"Activity zone"},{default:l(()=>[e(m,{modelValue:n.region,"onUpdate:modelValue":d[1]||(d[1]=g=>n.region=g),placeholder:"please select your zone"},{default:l(()=>[e(_,{label:"Zone one",value:"shanghai"}),e(_,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"Activity time"},{default:l(()=>[e(o,{span:11},{default:l(()=>[e(p,{modelValue:n.date1,"onUpdate:modelValue":d[2]||(d[2]=g=>n.date1=g),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(o,{span:2,class:"text-center"},{default:l(()=>[N("span",{class:"text-gray-500"},"-")]),_:1}),e(o,{span:11},{default:l(()=>[e(i,{modelValue:n.date2,"onUpdate:modelValue":d[3]||(d[3]=g=>n.date2=g),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{label:"Instant delivery"},{default:l(()=>[e(f,{modelValue:n.delivery,"onUpdate:modelValue":d[4]||(d[4]=g=>n.delivery=g)},null,8,["modelValue"])]),_:1}),e(u,{label:"Activity type"},{default:l(()=>[e(k,{modelValue:n.type,"onUpdate:modelValue":d[5]||(d[5]=g=>n.type=g)},{default:l(()=>[e(b,{value:"Online activities",name:"type"},{default:l(()=>[r(" Online activities ")]),_:1}),e(b,{value:"Promotion activities",name:"type"},{default:l(()=>[r(" Promotion activities ")]),_:1}),e(b,{value:"Offline activities",name:"type"},{default:l(()=>[r(" Offline activities ")]),_:1}),e(b,{value:"Simple brand exposure",name:"type"},{default:l(()=>[r(" Simple brand exposure ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"Resources"},{default:l(()=>[e(h,{modelValue:n.resource,"onUpdate:modelValue":d[6]||(d[6]=g=>n.resource=g)},{default:l(()=>[e(y,{value:"Sponsor"},{default:l(()=>[r("Sponsor")]),_:1}),e(y,{value:"Venue"},{default:l(()=>[r("Venue")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"Activity form"},{default:l(()=>[e(s,{modelValue:n.desc,"onUpdate:modelValue":d[7]||(d[7]=g=>n.desc=g),type:"textarea"},null,8,["modelValue"])]),_:1}),e(u,null,{default:l(()=>[e(C,{type:"primary",onClick:c},{default:l(()=>[r("Create")]),_:1}),e(C,null,{default:l(()=>[r("Cancel")]),_:1})]),_:1})]),_:1},8,["model"])}}}),E=A({__name:"custom-validation",setup(F){const n=U(),c=(p,o,i)=>{if(!o)return i(new Error("Please input the age"));setTimeout(()=>{Number.isInteger(o)?o<18?i(new Error("Age must be greater than 18")):i():i(new Error("Please input digits"))},1e3)},a=(p,o,i)=>{if(o==="")i(new Error("Please input the password"));else{if(s.checkPass!==""){if(!n.value)return;n.value.validateField("checkPass")}i()}},d=(p,o,i)=>{o===""?i(new Error("Please input the password again")):o!==s.pass?i(new Error("Two inputs don't match!")):i()},s=w({pass:"",checkPass:"",age:""}),u=w({pass:[{validator:a,trigger:"blur"}],checkPass:[{validator:d,trigger:"blur"}],age:[{validator:c,trigger:"blur"}]}),_=p=>{p&&p.validate(o=>{console.log(o?"submit!":"error submit!")})},m=p=>{p&&p.resetFields()};return(p,o)=>{const i=t("el-input"),f=t("el-form-item"),b=t("el-button"),k=t("el-form");return x(),P(k,{ref_key:"ruleFormRef",ref:n,style:{"max-width":"600px"},model:s,"status-icon":"",rules:u,"label-width":"auto",class:"demo-ruleForm"},{default:l(()=>[e(f,{label:"Password",prop:"pass"},{default:l(()=>[e(i,{modelValue:s.pass,"onUpdate:modelValue":o[0]||(o[0]=y=>s.pass=y),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(f,{label:"Confirm",prop:"checkPass"},{default:l(()=>[e(i,{modelValue:s.checkPass,"onUpdate:modelValue":o[1]||(o[1]=y=>s.checkPass=y),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(f,{label:"Age",prop:"age"},{default:l(()=>[e(i,{modelValue:s.age,"onUpdate:modelValue":o[2]||(o[2]=y=>s.age=y),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),e(f,null,{default:l(()=>[e(b,{type:"primary",onClick:o[3]||(o[3]=y=>_(n.value))},{default:l(()=>[r(" Submit ")]),_:1}),e(b,{onClick:o[4]||(o[4]=y=>m(n.value))},{default:l(()=>[r("Reset")]),_:1})]),_:1})]),_:1},8,["model","rules"])}}}),Q=A({__name:"form-items",setup(F){const n=U(),c=w({domains:[{key:1,value:""}],email:""}),a=_=>{const m=c.domains.indexOf(_);m!==-1&&c.domains.splice(m,1)},d=()=>{c.domains.push({key:Date.now(),value:""})},s=_=>{_&&_.validate(m=>{console.log(m?"submit!":"error submit!")})},u=_=>{_&&_.resetFields()};return(_,m)=>{const p=t("el-input"),o=t("el-form-item"),i=t("el-button"),f=t("el-form");return x(),P(f,{ref_key:"formRef",ref:n,style:{"max-width":"600px"},model:c,"label-width":"auto",class:"demo-dynamic"},{default:l(()=>[e(o,{prop:"email",label:"Email",rules:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}]},{default:l(()=>[e(p,{modelValue:c.email,"onUpdate:modelValue":m[0]||(m[0]=b=>c.email=b)},null,8,["modelValue"])]),_:1}),(x(!0),q(O,null,T(c.domains,(b,k)=>(x(),P(o,{key:b.key,label:"Domain"+k,prop:"domains."+k+".value",rules:{required:!0,message:"domain can not be null",trigger:"blur"}},{default:l(()=>[e(p,{modelValue:b.value,"onUpdate:modelValue":y=>b.value=y},null,8,["modelValue","onUpdate:modelValue"]),e(i,{class:"mt-2",onClick:D(y=>a(b),["prevent"])},{default:l(()=>[r(" Delete ")]),_:2},1032,["onClick"])]),_:2},1032,["label","prop"]))),128)),e(o,null,{default:l(()=>[e(i,{type:"primary",onClick:m[1]||(m[1]=b=>s(n.value))},{default:l(()=>[r("Submit")]),_:1}),e(i,{onClick:d},{default:l(()=>[r("New domain")]),_:1}),e(i,{onClick:m[2]||(m[2]=b=>u(n.value))},{default:l(()=>[r("Reset")]),_:1})]),_:1})]),_:1},8,["model"])}}}),W=A({__name:"inline-form",setup(F){const n=w({user:"",region:"",date:""}),c=()=>{console.log("submit!")};return(a,d)=>{const s=t("el-input"),u=t("el-form-item"),_=t("el-option"),m=t("el-select"),p=t("el-date-picker"),o=t("el-button"),i=t("el-form");return x(),P(i,{inline:!0,model:n,class:"demo-form-inline"},{default:l(()=>[e(u,{label:"Approved by"},{default:l(()=>[e(s,{modelValue:n.user,"onUpdate:modelValue":d[0]||(d[0]=f=>n.user=f),placeholder:"Approved by",clearable:""},null,8,["modelValue"])]),_:1}),e(u,{label:"Activity zone"},{default:l(()=>[e(m,{modelValue:n.region,"onUpdate:modelValue":d[1]||(d[1]=f=>n.region=f),placeholder:"Activity zone",clearable:""},{default:l(()=>[e(_,{label:"Zone one",value:"shanghai"}),e(_,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"Activity time"},{default:l(()=>[e(p,{modelValue:n.date,"onUpdate:modelValue":d[2]||(d[2]=f=>n.date=f),type:"date",placeholder:"Pick a date",clearable:""},null,8,["modelValue"])]),_:1}),e(u,null,{default:l(()=>[e(o,{type:"primary",onClick:c},{default:l(()=>[r("Query")]),_:1})]),_:1})]),_:1},8,["model"])}}}),G=A({__name:"number-validate",setup(F){const n=U(),c=w({age:""}),a=s=>{s&&s.validate(u=>{console.log(u?"submit!":"error submit!")})},d=s=>{s&&s.resetFields()};return(s,u)=>{const _=t("el-input"),m=t("el-form-item"),p=t("el-button"),o=t("el-form");return x(),P(o,{ref_key:"formRef",ref:n,style:{"max-width":"600px"},model:c,"label-width":"auto",class:"demo-ruleForm"},{default:l(()=>[e(m,{label:"age",prop:"age",rules:[{required:!0,message:"age is required"},{type:"number",message:"age must be a number"}]},{default:l(()=>[e(_,{modelValue:c.age,"onUpdate:modelValue":u[0]||(u[0]=i=>c.age=i),modelModifiers:{number:!0},type:"text",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(m,null,{default:l(()=>[e(p,{type:"primary",onClick:u[1]||(u[1]=i=>a(n.value))},{default:l(()=>[r("Submit")]),_:1}),e(p,{onClick:u[2]||(u[2]=i=>d(n.value))},{default:l(()=>[r("Reset")]),_:1})]),_:1})]),_:1},8,["model"])}}}),J=A({__name:"size-control",setup(F){const n=U("default"),c=U("right"),a=w({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""});function d(){console.log("submit!")}return(s,u)=>{const _=t("el-radio-button"),m=t("el-radio-group"),p=t("el-input"),o=t("el-form-item"),i=t("el-option"),f=t("el-select"),b=t("el-date-picker"),k=t("el-col"),y=t("el-time-picker"),h=t("el-checkbox-button"),C=t("el-checkbox-group"),z=t("el-radio"),g=t("el-button"),$=t("el-form");return x(),q(O,null,[N("div",null,[e(m,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=V=>n.value=V),"aria-label":"size control"},{default:l(()=>[e(_,{value:"large"},{default:l(()=>[r("large")]),_:1}),e(_,{value:"default"},{default:l(()=>[r("default")]),_:1}),e(_,{value:"small"},{default:l(()=>[r("small")]),_:1})]),_:1},8,["modelValue"]),e(m,{modelValue:c.value,"onUpdate:modelValue":u[1]||(u[1]=V=>c.value=V),"aria-label":"position control"},{default:l(()=>[e(_,{value:"left"},{default:l(()=>[r("Left")]),_:1}),e(_,{value:"right"},{default:l(()=>[r("Right")]),_:1}),e(_,{value:"top"},{default:l(()=>[r("Top")]),_:1})]),_:1},8,["modelValue"])]),N("br"),e($,{style:{"max-width":"600px"},model:a,"label-width":"auto","label-position":c.value,size:n.value},{default:l(()=>[e(o,{label:"Activity name"},{default:l(()=>[e(p,{modelValue:a.name,"onUpdate:modelValue":u[2]||(u[2]=V=>a.name=V)},null,8,["modelValue"])]),_:1}),e(o,{label:"Activity zone"},{default:l(()=>[e(f,{modelValue:a.region,"onUpdate:modelValue":u[3]||(u[3]=V=>a.region=V),placeholder:"please select your zone"},{default:l(()=>[e(i,{label:"Zone one",value:"shanghai"}),e(i,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(o,{label:"Activity time"},{default:l(()=>[e(k,{span:11},{default:l(()=>[e(b,{modelValue:a.date1,"onUpdate:modelValue":u[4]||(u[4]=V=>a.date1=V),type:"date","aria-label":"Pick a date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(k,{class:"text-center",span:1,style:{margin:"0 0.5rem"}},{default:l(()=>[r("-")]),_:1}),e(k,{span:11},{default:l(()=>[e(y,{modelValue:a.date2,"onUpdate:modelValue":u[5]||(u[5]=V=>a.date2=V),"aria-label":"Pick a time",placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(o,{label:"Activity type"},{default:l(()=>[e(C,{modelValue:a.type,"onUpdate:modelValue":u[6]||(u[6]=V=>a.type=V)},{default:l(()=>[e(h,{value:"Online activities",name:"type"},{default:l(()=>[r(" Online activities ")]),_:1}),e(h,{value:"Promotion activities",name:"type"},{default:l(()=>[r(" Promotion activities ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(o,{label:"Resources"},{default:l(()=>[e(m,{modelValue:a.resource,"onUpdate:modelValue":u[7]||(u[7]=V=>a.resource=V)},{default:l(()=>[e(z,{border:"",value:"Sponsor"},{default:l(()=>[r("Sponsor")]),_:1}),e(z,{border:"",value:"Venue"},{default:l(()=>[r("Venue")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(o,null,{default:l(()=>[e(g,{type:"primary",onClick:d},{default:l(()=>[r("Create")]),_:1}),e(g,null,{default:l(()=>[r("Cancel")]),_:1})]),_:1})]),_:1},8,["model","label-position","size"])],64)}}}),K=A({__name:"validation",setup(F){const n=U("default"),c=U(),a=w({name:"Hello",region:"",count:"",date1:"",date2:"",delivery:!1,location:"",type:[],resource:"",desc:""}),d=["Home","Company","School"],s=w({name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],count:[{required:!0,message:"Please select Activity count",trigger:"change"}],date1:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}],date2:[{type:"date",required:!0,message:"Please pick a time",trigger:"change"}],location:[{required:!0,message:"Please select a location",trigger:"change"}],type:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]}),u=async p=>{p&&await p.validate((o,i)=>{o?console.log("submit!"):console.log("error submit!",i)})},_=p=>{p&&p.resetFields()},m=Array.from({length:1e4}).map((p,o)=>({value:`${o+1}`,label:`${o+1}`}));return(p,o)=>{const i=t("el-input"),f=t("el-form-item"),b=t("el-option"),k=t("el-select"),y=t("el-select-v2"),h=t("el-date-picker"),C=t("el-col"),z=t("el-time-picker"),g=t("el-switch"),$=t("el-segmented"),V=t("el-checkbox"),L=t("el-checkbox-group"),R=t("el-radio"),Z=t("el-radio-group"),S=t("el-button"),I=t("el-form");return x(),P(I,{ref_key:"ruleFormRef",ref:c,style:{"max-width":"600px"},model:a,rules:s,"label-width":"auto",class:"demo-ruleForm",size:n.value,"status-icon":""},{default:l(()=>[e(f,{label:"Activity name",prop:"name"},{default:l(()=>[e(i,{modelValue:a.name,"onUpdate:modelValue":o[0]||(o[0]=v=>a.name=v)},null,8,["modelValue"])]),_:1}),e(f,{label:"Activity zone",prop:"region"},{default:l(()=>[e(k,{modelValue:a.region,"onUpdate:modelValue":o[1]||(o[1]=v=>a.region=v),placeholder:"Activity zone"},{default:l(()=>[e(b,{label:"Zone one",value:"shanghai"}),e(b,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(f,{label:"Activity count",prop:"count"},{default:l(()=>[e(y,{modelValue:a.count,"onUpdate:modelValue":o[2]||(o[2]=v=>a.count=v),placeholder:"Activity count",options:j(m)},null,8,["modelValue","options"])]),_:1}),e(f,{label:"Activity time",required:""},{default:l(()=>[e(C,{span:11},{default:l(()=>[e(f,{prop:"date1"},{default:l(()=>[e(h,{modelValue:a.date1,"onUpdate:modelValue":o[3]||(o[3]=v=>a.date1=v),type:"date","aria-label":"Pick a date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(C,{class:"text-center",span:2},{default:l(()=>[N("span",{class:"text-gray-500"},"-")]),_:1}),e(C,{span:11},{default:l(()=>[e(f,{prop:"date2"},{default:l(()=>[e(z,{modelValue:a.date2,"onUpdate:modelValue":o[4]||(o[4]=v=>a.date2=v),"aria-label":"Pick a time",placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(f,{label:"Instant delivery",prop:"delivery"},{default:l(()=>[e(g,{modelValue:a.delivery,"onUpdate:modelValue":o[5]||(o[5]=v=>a.delivery=v)},null,8,["modelValue"])]),_:1}),e(f,{label:"Activity location",prop:"location"},{default:l(()=>[e($,{modelValue:a.location,"onUpdate:modelValue":o[6]||(o[6]=v=>a.location=v),options:d},null,8,["modelValue"])]),_:1}),e(f,{label:"Activity type",prop:"type"},{default:l(()=>[e(L,{modelValue:a.type,"onUpdate:modelValue":o[7]||(o[7]=v=>a.type=v)},{default:l(()=>[e(V,{value:"Online activities",name:"type"},{default:l(()=>[r(" Online activities ")]),_:1}),e(V,{value:"Promotion activities",name:"type"},{default:l(()=>[r(" Promotion activities ")]),_:1}),e(V,{value:"Offline activities",name:"type"},{default:l(()=>[r(" Offline activities ")]),_:1}),e(V,{value:"Simple brand exposure",name:"type"},{default:l(()=>[r(" Simple brand exposure ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(f,{label:"Resources",prop:"resource"},{default:l(()=>[e(Z,{modelValue:a.resource,"onUpdate:modelValue":o[8]||(o[8]=v=>a.resource=v)},{default:l(()=>[e(R,{value:"Sponsorship"},{default:l(()=>[r("Sponsorship")]),_:1}),e(R,{value:"Venue"},{default:l(()=>[r("Venue")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(f,{label:"Activity form",prop:"desc"},{default:l(()=>[e(i,{modelValue:a.desc,"onUpdate:modelValue":o[9]||(o[9]=v=>a.desc=v),type:"textarea"},null,8,["modelValue"])]),_:1}),e(f,null,{default:l(()=>[e(S,{type:"primary",onClick:o[10]||(o[10]=v=>u(c.value))},{default:l(()=>[r(" Create ")]),_:1}),e(S,{onClick:o[11]||(o[11]=v=>_(c.value))},{default:l(()=>[r("Reset")]),_:1})]),_:1})]),_:1},8,["model","rules","size"])}}});export{H as _,W as a,Y as b,K as c,E as d,Q as e,G as f,J as g,M as h};