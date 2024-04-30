import{T as u}from"./TemplateSetup-CL3cRsSJ.js";import{_ as m,c,w as g,r as f,o as d,g as o,h as a,v as n,b as l,d as h,f as b,i,t as y}from"./index-CLSHeoV0.js";import"./UtilityNavbar-DUGzOKkF.js";import"./TemplateDefault-DpiBUKpa.js";const v={inject:["io"],components:{TemplateSetup:u},data:()=>({config:{user:"",pass:"",host:"smtp.gmail.com",port:465,secure:!0,pool:!1,rejectUnauthorized:!0},receiver:"",loading:!1}),async created(){await this.connect()},methods:{async connect(){this.loading=!0;const e=await this.io.service("setup").get("mail");this.resolve(e)},async setup(e=!1){this.loading=!0;let t=await this.io.service("setup").update("mail",{test:e,receiver:this.receiver,...this.config});e?(alert(t),this.loading=!1):this.resolve(t)},async resolve(e){e&&!e.ready||this.$router.push("/login"),this.loading=!1}}},x=l("h2",{class:"mb-2"}," Setup sender email ",-1),w={key:0,class:"hover:no-underline hover:text-sky-100 underline inline-block mb-2",style:{height:"24px"},target:"_blank",href:"https://security.google.com/settings/security/apppasswords"},k=l("label",{class:"block"},"Secure",-1),S=l("label",{class:"block"},"Pool",-1),U=l("label",{class:"block"},"Reject unauthorized",-1),V=l("h2",{class:"mt-10 mb-2",style:{height:"24px"}}," Send a test email ",-1),T=["disabled"],C=l("h2",{class:"mt-10",style:{height:"24px"}}," Store sender ",-1),j=["disabled"],$={class:"mt-2"};function z(e,t,B,M,N,r){const p=f("TemplateSetup");return d(),c(p,null,{default:g(()=>[x,o(),a(l("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>e.config.user=s),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"Email:",name:"email"},null,512),[[n,e.config.user]]),e.config.user.includes("@gmail")?(d(),h("a",w," Get your gmail app password ")):b("",!0),a(l("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>e.config.pass=s),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"Password:",type:"password",name:"password"},null,512),[[n,e.config.pass]]),a(l("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>e.config.host=s),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"Host: smtp.gmail.com",name:"host"},null,512),[[n,e.config.host]]),o(),a(l("input",{"onUpdate:modelValue":t[3]||(t[3]=s=>e.config.port=s),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"Port: 465",type:"number",name:"port"},null,512),[[n,e.config.port]]),o(),k,o(),a(l("input",{name:"secure",type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=s=>e.config.secure=s),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md"},null,512),[[i,e.config.secure]]),o(),S,o(),a(l("input",{name:"pool",type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=s=>e.config.pool=s),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md"},null,512),[[i,e.config.pool]]),o(),U,o(),a(l("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=s=>e.config.rejectUnauthorized=s),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md"},null,512),[[i,e.config.rejectUnauthorized]]),V,a(l("input",{name:"receiver-email","onUpdate:modelValue":t[7]||(t[7]=s=>e.receiver=s),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"Receiver: example@gmail.com"},null,512),[[n,e.receiver]]),l("button",{onClick:t[8]||(t[8]=s=>r.setup(!0)),disabled:e.loading,class:"hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3",title:"Install using already running database instance"}," Send test email ",8,T),C,l("button",{onClick:t[9]||(t[9]=s=>r.setup()),disabled:e.loading,class:"hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3",title:"Install using already running database instance"}," Submit ",8,j),l("h2",$," Loading: "+y(e.loading),1)]),_:1})}const R=m(v,[["render",z]]);export{R as default};
