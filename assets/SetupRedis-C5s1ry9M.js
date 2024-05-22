import{T as a}from"./TemplateSetup-CcmH1FSf.js";import{_ as n,c as r,w as d,r as u,o as c,d as p,e as g,v as h,b as s,t as f}from"./index-DB6qYAta.js";import"./UtilityNavbar-BMv4MjZ6.js";import"./TemplateDefault-zJ9GvyxW.js";const m={inject:["io"],components:{TemplateSetup:a},data:()=>({config:{url:"redis://localhost:6379"},loading:!1}),async created(){await this.connect()},methods:{async connect(){this.loading=!0;const e=await this.io.service("setup").get("redis");this.resolve(e)},async setup(e=!0){this.loading=!0;let t=await this.io.service("setup").update("redis",{...this.config,redis:e});this.resolve(t)},async resolve(e){console.log("res",e),e&&!e.ready||this.$router.push("/login"),this.loading=!1}}},b=s("h2",{class:"mb-2"}," Setup Redis ",-1),v=["disabled"],w=["disabled"],S={class:"mt-2"};function _(e,t,y,T,k,i){const l=u("TemplateSetup");return c(),r(l,null,{default:d(()=>[b,p(),g(s("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>e.config.url=o),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"redis://"},null,512),[[h,e.config.url]]),s("button",{onClick:t[1]||(t[1]=o=>i.setup()),disabled:e.loading,class:"hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3",title:"Install using cluster for loadbalancing with redis"}," Submit ",8,v),s("button",{onClick:t[2]||(t[2]=o=>i.setup(!1)),disabled:e.loading,class:"hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3",title:"Install without using clustering"}," Skip clustering ",8,w),s("h2",S," Loading: "+f(e.loading),1)]),_:1})}const V=n(m,[["render",_]]);export{V as default};
