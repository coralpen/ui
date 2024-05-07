import{W as w}from"./UtilityNavbar-BroTegl_.js";import _ from"./TemplateSidemenu-B8Ph4RqA.js";import{_ as y,c as C,w as $,r as S,o as n,b as t,d as I,v as B,l as D,t as r,f as k,g as T,F as V}from"./index-C8ogcS7-.js";import"./SectionHero-C5G_P2hH.js";const j={components:{WrapperPage:w,TemplateSidemenu:_},inject:["menus","io"],props:["renderer"],data:()=>({service:"docker_services_volumes",items:null,current:null,search:""}),async created(){await this.getItems()},methods:{async getItems(){var s;try{const e={};this.items&&(e.$limit=(s=this.items)==null?void 0:s.limit),this.search&&(e.$or=[{name:{$like:`%${this.search}%`}},{path:{$like:`%${this.search}%`}},{docker_service_id:{$like:`%${this.search}%`}}]),this.items=await this.io.service(this.service).find({query:e})}catch(e){this.items=null,console.error(e)}},next(){this.items&&(this.items.skip+=this.items.limit)},previous(){this.items&&(this.items.skip-=this.items.limit)}}},A={class:"flex h-full flex-col md:flex-row"},N={class:"flex-col flex w-full md:w-1/2 flex-shrink-0"},P=t("h2",{class:"font-light text-lg p-4 max-w-full"}," App Volumes ",-1),F={class:"flex px-4"},K={class:"px-4 pt-4 md:hidden flex"},W={class:"text-sm justify-items-center content-center text-center grow"},q={class:"px-4 pt-4 grow"},E=["onClick"],L={class:"p-4 hidden md:flex"},M={class:"text-sm justify-items-center content-center text-center grow"},U={class:"grow p-4 overflow-auto"},z=t("h2",{class:"font-light text-lg max-w-full"}," Details & Actions ",-1);function G(s,e,b,H,J,l){const x=S("TemplateSidemenu");return n(),C(x,{title:"Applications",renderer:b.renderer},{default:$(()=>{var o,a,d,m,c,h,u,p,g,f,v;return[t("div",A,[t("div",N,[P,t("div",F,[I(t("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>s.search=i),placeholder:"Search",onKeypress:e[1]||(e[1]=D((...i)=>l.getItems&&l.getItems(...i),["enter"])),class:"rounded-l bg-slate-50 grow p-2"},null,544),[[B,s.search]]),t("button",{onClick:e[2]||(e[2]=(...i)=>l.getItems&&l.getItems(...i)),class:"hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"}," Search ")]),t("div",K,[t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items?.skip",onClick:e[3]||(e[3]=i=>l.previous())}," Previous "),t("div",W,r(((o=s.items)==null?void 0:o.skip)+1)+" - "+r(((a=s.items)==null?void 0:a.skip)+((m=(d=s.items)==null?void 0:d.data)==null?void 0:m.length))+" of "+r((c=s.items)==null?void 0:c.total),1),t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items || (items?.skip + items?.data?.length) >= items?.data?.length",onClick:e[4]||(e[4]=i=>l.next())}," Next ")]),t("div",q,[(n(!0),k(V,null,T((h=s.items)==null?void 0:h.data,i=>(n(),k("button",{onClick:O=>s.current=i,class:"rounded hover:bg-slate-200 font-extralight mb-1 text-left w-full bg-slate-50 py-1 px-2"},r(i.name),9,E))),256))]),t("div",L,[t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items?.skip",onClick:e[5]||(e[5]=i=>l.previous())}," Previous "),t("div",M,r(((u=s.items)==null?void 0:u.skip)+1)+" - "+r(((p=s.items)==null?void 0:p.skip)+((f=(g=s.items)==null?void 0:g.data)==null?void 0:f.length))+" of "+r((v=s.items)==null?void 0:v.total),1),t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items || (items?.skip + items?.data?.length) >= items?.data?.length",onClick:e[6]||(e[6]=i=>l.next())}," Next ")])]),t("div",U,[z,t("pre",null,"				"+r(s.current)+`
				`,1)])])]}),_:1},8,["renderer"])}const Z=y(j,[["render",G]]);export{Z as default};
