import{T as r}from"./TemplateSetup-CN5EobIy.js";import{_ as p,c as u,w as f,r as g,o as m,g as o,e as n,v as l,b as s,t as c}from"./index-wBVE613Q.js";import"./UtilityNavbar-Cd40bNCa.js";import"./TemplateDefault-B1cdjZuM.js";const b={inject:["io"],components:{TemplateSetup:r},data:()=>({config:{host:"",port:"",user:"",password:"",database:""},loading:!1}),async created(){await this.connect()},methods:{async connect(){this.loading=!0;const e=await this.io.service("setup").get("database");this.resolve(e)},async setup(e=!1){this.loading=!0;let t=await this.io.service("setup").update("database",{...this.config,create:e});this.resolve(t)},async resolve(e){e&&!e.ready?e!=null&&e.config&&(this.config=e.config):this.$router.push("/login"),this.loading=!1}}},h=s("h2",{class:"mb-2"}," Connect to database ",-1),w=["disabled"],v=["disabled"],y={class:"mt-2"};function x(e,t,C,T,V,i){const d=g("TemplateSetup");return m(),u(d,null,{default:f(()=>[h,o(),n(s("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.config.email=a),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"Host: 127.0.0.1"},null,512),[[l,e.config.email]]),o(),n(s("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>e.config.passwor=a),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"Port: 3306"},null,512),[[l,e.config.passwor]]),o(),n(s("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>e.config.user=a),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"Username:"},null,512),[[l,e.config.user]]),o(),n(s("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>e.config.password=a),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"Password:"},null,512),[[l,e.config.password]]),o(),n(s("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>e.config.database=a),class:"mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full",placeholder:"Database:"},null,512),[[l,e.config.database]]),o(),s("button",{onClick:t[5]||(t[5]=a=>i.setup()),disabled:e.loading,class:"hover:bg-fuchsia-950 mt-2 rounded-lg bg-fuchsia-900 w-full p-3",title:"Install using already running database instance"}," Connect to existing database ",8,w),o(),s("button",{onClick:t[6]||(t[6]=a=>i.setup(!0)),disabled:e.loading,class:"hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3",title:"Install using already running database instance"}," Create a new database ",8,v),s("h2",y," Loading: "+c(e.loading),1)]),_:1})}const D=p(b,[["render",x]]);export{D as default};
