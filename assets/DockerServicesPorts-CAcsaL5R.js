import{W as C}from"./UtilityNavbar-QkTUu7xf.js";import y from"./TemplateSidemenu-kgeGqXxG.js";import{_ as $,c as I,w as S,r as B,o as n,b as e,e as D,v as T,i as j,t as i,g as a,h as x,F as _}from"./index-Dj2BAxRj.js";import"./SectionHero-DpfKa0Pr.js";const A={components:{WrapperPage:C,TemplateSidemenu:y},inject:["menus","io"],props:["renderer"],data:()=>({service:"docker_services_ports",items:null,current:null,search:"",portProviders:["ufw","google","aws","azure"]}),async created(){await this.getItems()},methods:{async inspectPort(s="ufw"){const t=prompt("Port to inspect"),l=await this.io.service("ports").get({port:t,provider:"ufw"});console.log(l)},async openPort(s="ufw"){const t=prompt("Port to inspect"),l=await this.io.service("ports").create({port:t,provider:"ufw"});console.log(l)},async closePort(s="ufw"){const t=prompt("Port to inspect"),l=await this.io.service("ports").remove({port:t,provider:"ufw"});console.log(l)},async getItems(){var s;try{const t={};this.items&&(t.$limit=(s=this.items)==null?void 0:s.limit),this.search&&(t.$or=[{port_external:{$like:`%${this.search}%`}},{port_internal:{$like:`%${this.search}%`}},{docker_service_id:{$like:`%${this.search}%`}}]),this.items=await this.io.service(this.service).find({query:t})}catch(t){this.items=null,console.error(t)}},next(){this.items&&(this.items.skip+=this.items.limit)},previous(){this.items&&(this.items.skip-=this.items.limit)}}},N={class:"flex h-full flex-col md:flex-row"},F={class:"flex-col flex w-full md:w-1/2 flex-shrink-0"},K=e("h2",{class:"font-light text-lg p-4 max-w-full"}," App Ports ",-1),V={class:"flex px-4"},W={class:"px-4 pt-4 md:hidden flex"},q={class:"text-sm justify-items-center content-center text-center grow"},z={class:"px-4 pt-4 grow"},E=["onClick"],L={class:"p-4 hidden md:flex"},M={class:"text-sm justify-items-center content-center text-center grow"},O={class:"grow p-4 overflow-auto"},U=e("h2",{class:"font-light text-lg max-w-full"}," Details & Actions ",-1),G={class:"mb-2 p-2 bg-slate-50"},H=["onClick"],J=["onClick"],Q=["onClick"];function R(s,t,l,X,Y,r){const P=B("TemplateSidemenu");return n(),I(P,{title:"Applications",renderer:l.renderer},{default:S(()=>{var c,p,m,h,u,g,f,v,b,k,w;return[e("div",N,[e("div",F,[K,e("div",V,[D(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.search=o),placeholder:"Search",onKeypress:t[1]||(t[1]=j((...o)=>r.getItems&&r.getItems(...o),["enter"])),class:"rounded-l bg-slate-50 grow p-2"},null,544),[[T,s.search]]),e("button",{onClick:t[2]||(t[2]=(...o)=>r.getItems&&r.getItems(...o)),class:"hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"}," Search ")]),e("div",W,[e("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items?.skip",onClick:t[3]||(t[3]=o=>r.previous())}," Previous "),e("div",q,i(((c=s.items)==null?void 0:c.skip)+1)+" - "+i(((p=s.items)==null?void 0:p.skip)+((h=(m=s.items)==null?void 0:m.data)==null?void 0:h.length))+" of "+i((u=s.items)==null?void 0:u.total),1),e("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items || (items?.skip + items?.data?.length) >= items?.data?.length",onClick:t[4]||(t[4]=o=>r.next())}," Next ")]),e("div",z,[(n(!0),a(_,null,x((g=s.items)==null?void 0:g.data,o=>(n(),a("button",{onClick:d=>s.current=o,class:"rounded hover:bg-slate-200 font-extralight mb-1 text-left w-full bg-slate-50 py-1 px-2"},i(o.port_external)+":"+i(o.port_internal),9,E))),256))]),e("div",L,[e("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items?.skip",onClick:t[5]||(t[5]=o=>r.previous())}," Previous "),e("div",M,i(((f=s.items)==null?void 0:f.skip)+1)+" - "+i(((v=s.items)==null?void 0:v.skip)+((k=(b=s.items)==null?void 0:b.data)==null?void 0:k.length))+" of "+i((w=s.items)==null?void 0:w.total),1),e("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items || (items?.skip + items?.data?.length) >= items?.data?.length",onClick:t[6]||(t[6]=o=>r.next())}," Next ")])]),e("div",O,[U,e("pre",null,"				"+i(s.current)+`
				`,1),(n(!0),a(_,null,x(s.portProviders,o=>(n(),a("div",G,[e("h3",null,i(o),1),e("button",{onClick:d=>r.inspectPort(o),class:"mb-2 mr-2 hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"}," Inspect Port ",8,H),e("button",{onClick:d=>r.openPort(o),class:"hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"}," Open Port ",8,J),e("button",{onClick:d=>r.closePort(o),class:"hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"}," Close Port ",8,Q)]))),256))])])]}),_:1},8,["renderer"])}const ot=$(A,[["render",R]]);export{ot as default};