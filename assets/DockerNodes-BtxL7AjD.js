import{W as F}from"./UtilityNavbar-DSt_rGL-.js";import T from"./TemplateSidemenu-BXJcabsH.js";import{_ as P,c as z,w as A,r as K,o as r,b as t,e as M,v as V,j as W,t as l,g as B,h as q,F as E}from"./index-DxSBmpq_.js";import"./SectionHero-BJD0ZBqP.js";const J={components:{WrapperPage:F,TemplateSidemenu:T},inject:["menus","io"],data:()=>({service:"docker_nodes",items:null,current:null,search:""}),async created(){await this.getItems()},methods:{async sync(){const e=await this.io.service(this.service).get("sync");alert(JSON.stringify(e))},async getItems(){try{const e={};if(this.items&&(e.$limit=this.items.limit,e.$skip=this.items.skip),this.search){e.$or=[];const s=["id","hostname","address","engine","os","architecture","nano_cpus","memory_bytes","role","reachability","manager_address","plugins_count","size_total","size_free","docker_node_id","created_at","updated_at"];for(const a of s){const n={};n[a]={$like:`%${this.search}%`},e.$or.push(n)}}this.items=await this.io.service(this.service).find({query:e})}catch(e){this.items=null,console.error(e)}},next(){this.items&&(this.items.skip+=this.items.limit,this.getItems())},previous(){this.items&&(this.items.skip-=this.items.limit,this.getItems())}}},L={class:"flex h-full flex-col md:flex-row"},O={class:"flex-col flex w-full md:w-1/2 flex-shrink-0"},U=t("h2",{class:"font-light text-lg p-4 max-w-full"}," Machines ",-1),G={class:"flex px-4"},H={class:"px-4 pt-4 md:hidden flex"},Q=["disabled"],R={class:"text-sm justify-items-center content-center text-center grow"},X=["disabled"],Y={class:"px-4 pt-4 grow"},Z=["onClick"],ee={class:"p-4 hidden md:flex"},te=["disabled"],se={class:"text-sm justify-items-center content-center text-center grow"},ie=["disabled"],oe={class:"grow p-4 overflow-auto"},le=t("h2",{class:"font-light text-lg max-w-full"}," Details & Actions ",-1);function ne(e,s,a,n,re,o){const D=K("TemplateSidemenu");return r(),z(D,{title:"Applications"},{default:A(()=>{var d,m,h,c,u,p,g,f,v,b,k,w,y,x,_,C,I,S,$,j,N;return[t("div",L,[t("div",O,[U,t("div",G,[M(t("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>e.search=i),placeholder:"Search",onKeypress:s[1]||(s[1]=W((...i)=>o.getItems&&o.getItems(...i),["enter"])),class:"rounded-l bg-slate-50 grow p-2"},null,544),[[V,e.search]]),t("button",{onClick:s[2]||(s[2]=(...i)=>o.getItems&&o.getItems(...i)),class:"hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"}," Search ")]),t("div",H,[t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:!((d=e.items)!=null&&d.skip),onClick:s[3]||(s[3]=i=>o.previous())}," Previous ",8,Q),t("div",R,l((m=e.items)==null?void 0:m.skip)+" - "+l(((h=e.items)==null?void 0:h.skip)+((u=(c=e.items)==null?void 0:c.data)==null?void 0:u.length))+" of "+l((p=e.items)==null?void 0:p.total),1),t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:!e.items||((g=e.items)==null?void 0:g.skip)+((v=(f=e.items)==null?void 0:f.data)==null?void 0:v.length)>=((b=e.items)==null?void 0:b.total),onClick:s[4]||(s[4]=i=>o.next())}," Next ",8,X)]),t("div",Y,[(r(!0),B(E,null,q((k=e.items)==null?void 0:k.data,i=>(r(),B("button",{onClick:ae=>e.current=i,class:"rounded hover:bg-slate-200 font-extralight mb-1 text-left w-full bg-slate-50 py-1 px-2"},l(i.hostname),9,Z))),256))]),t("div",ee,[t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:!((w=e.items)!=null&&w.skip),onClick:s[5]||(s[5]=i=>o.previous())}," Previous ",8,te),t("div",se,l((y=e.items)==null?void 0:y.skip)+" - "+l(((x=e.items)==null?void 0:x.skip)+((C=(_=e.items)==null?void 0:_.data)==null?void 0:C.length))+" of "+l((I=e.items)==null?void 0:I.total),1),t("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:!e.items||((S=e.items)==null?void 0:S.skip)+((j=($=e.items)==null?void 0:$.data)==null?void 0:j.length)>=((N=e.items)==null?void 0:N.total),onClick:s[6]||(s[6]=i=>o.next())}," Next ",8,ie)])]),t("div",oe,[t("button",{onClick:s[7]||(s[7]=i=>o.sync()),class:"hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"}," Sync "),le,t("pre",null,"				"+l(e.current)+`
				`,1)])])]}),_:1})}const ue=P(J,[["render",ne]]);export{ue as default};