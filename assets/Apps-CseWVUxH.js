import{W as _}from"./UtilityNavbar-DSt_rGL-.js";import u from"./TemplateDefault-BxUiD2te.js";import{S as x}from"./SectionHero-BJD0ZBqP.js";import{_ as g,c as w,w as r,r as l,o as c,a as n,b as t,t as d,g as p,h as v,F as b}from"./index-DxSBmpq_.js";const y={components:{WrapperPage:_,TemplateDefault:u,SectionHero:x},inject:["io"],props:["renderer"],data:()=>({address:"",items:[],service:"apps"}),async created(){try{await this.inspectLeader(),await this.getItems()}catch{}},methods:{async getItems(){console.log("fetching apps");try{this.items=await this.io.service(this.service).find(),console.log("apps",this.items)}catch(e){console.log("apps error",e)}},async inspectLeader(){var o;const e=await this.io.service("state").get();if(e.leaderIP)this.address=e.leaderIP;else{const s=await this.io.service("docker_nodes").find({query:{leader:!0}}),a=(o=s==null?void 0:s.data)==null?void 0:o[0];a&&(this.address=a.address)}}}},k=t("h1",{class:"font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center"}," Apps ",-1),D={class:"flex-col max-w-md place-self-center mt-8 mb-24 w-full flex md:max-w-4xl"},P=t("h1",{class:"px-4 mb-2 mt-6 font-medium text-3xl w-full"}," Docker Apps ",-1),S={class:"px-4 mb-4 mt-2 font-medium text-xl w-full"},$={class:"mt-6 relative mb-16 flex-col md:flex-row flex w-full px-4"},B={class:"grid-cols-2 md:grid-cols-3 gap-11 grid w-full"},C=["onClick"],I={class:"text-slate-100"},L=t("div",{class:"-mb-8 bg-slate-100 -bottom-5 absolute h-0.5 left-4 right-4"},null,-1);function W(e,o,s,a,A,H){const m=l("SectionHero"),f=l("WrapperPage"),h=l("TemplateDefault");return c(),w(h,{renderer:s.renderer},{default:r(()=>[n(m,null,{default:r(()=>[k]),_:1}),n(f,{class:"flex-col"},{default:r(()=>[t("div",D,[P,t("h1",S," Leader node address: "+d(e.address),1),t("div",$,[t("div",B,[(c(!0),p(b,null,v(e.items,i=>(c(),p("div",{class:"p-4 bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80",onClick:T=>e.$router.push("/apps/"+i.id)},[t("h2",I,d(i.id),1)],8,C))),256))]),L])])]),_:1})]),_:1},8,["renderer"])}const q=g(y,[["render",W]]);export{q as default};