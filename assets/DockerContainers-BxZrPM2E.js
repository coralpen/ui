import{W as $}from"./UtilityNavbar-DsUEu85q.js";import I from"./TemplateSidemenu-DskKiYia.js";import{_ as K,c as T,w as V,r as j,o as l,b as s,e as d,v as u,j as y,t as n,g as r,h as N,F as B,m as C,d as a}from"./index-B-k1DLuu.js";import"./SectionHero-DXwUj8gw.js";const D={components:{WrapperPage:$,TemplateSidemenu:I},inject:["menus","io"],data:()=>({service:"docker_containers",items:null,current:null,search:"",command:"",output:"",autoscroll:!0,listener:null}),async created(){await this.getItems()},async beforeUnmount(){this.listener&&(console.log("Killing container terminal session"),this.io.service("containers").off("output",this.listener))},methods:{async getItems(){var t;try{const e={};this.items&&(e.$limit=(t=this.items)==null?void 0:t.limit),this.search&&(e.hostname={$like:`%${this.search}%`}),this.items=await this.io.service(this.service).find({query:e})}catch(e){this.items=null,console.error(e)}},async connect(){if(!this.current){alert("Select container before connect");return}this.listener&&(console.log("Killing previous terminal session"),this.io.service("containers").off("output",this.listener)),console.log("Generating new terminal session"),this.listener=t=>{var e;(e=this.$refs)!=null&&e.output?(this.output+=`${t.data}
`,this.autoscroll&&(this.$refs.output.scrollTop=this.$refs.output.scrollHeight)):(console.log("Killing previous terminal session"),this.io.service("containers").off("output",this.listener))},console.log("Start listener"),this.io.service("containers").on("output",this.listener),console.log("Que terminal session"),await this.io.service("containers").get(this.current.docker_container_id)},async send(){if(!this.current)return console.log("current not set",this.current);if(!this.command)return console.log("command not set",this.command);try{await this.io.service("containers").patch(this.current.docker_container_id,{command:this.command}),this.command=""}catch(t){console.log("error",t.message)}},next(){this.items&&(this.items.skip+=this.items.limit)},previous(){this.items&&(this.items.skip-=this.items.limit)}}},U={class:"flex h-full flex-col md:flex-row"},A={class:"flex-col flex w-full md:w-1/2 flex-shrink-0"},P=s("h2",{class:"font-light text-lg p-4 max-w-full"}," Containers ",-1),F={class:"flex px-4"},W={class:"px-4 pt-4 md:hidden flex"},q={class:"text-sm justify-items-center content-center text-center grow"},E={class:"px-4 pt-4 grow"},G=["onClick"],H={class:"p-4 hidden md:flex"},L={class:"text-sm justify-items-center content-center text-center grow"},M={class:"grow p-4 overflow-auto"},Q={key:0},z={key:1,class:"overflow-hidden"},J=s("h2",{class:"font-light text-lg max-w-full"}," Details & Actions ",-1);function O(t,e,R,X,Y,i){const S=j("TemplateSidemenu");return l(),T(S,{title:"Applications"},{default:V(()=>{var m,c,h,f,p,g,v,b,w,k,x;return[s("div",U,[s("div",A,[P,s("div",F,[d(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.search=o),placeholder:"Search",onKeypress:e[1]||(e[1]=y((...o)=>i.getItems&&i.getItems(...o),["enter"])),class:"rounded-l bg-slate-50 grow p-2"},null,544),[[u,t.search]]),s("button",{onClick:e[2]||(e[2]=(...o)=>i.getItems&&i.getItems(...o)),class:"hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"}," Search ")]),s("div",W,[s("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items?.skip",onClick:e[3]||(e[3]=o=>i.previous())}," Previous "),s("div",q,n((m=t.items)==null?void 0:m.skip)+" - "+n(((c=t.items)==null?void 0:c.skip)+((f=(h=t.items)==null?void 0:h.data)==null?void 0:f.length))+" of "+n((p=t.items)==null?void 0:p.total),1),s("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items || (items?.skip + items?.data?.length) >= items?.data?.length",onClick:e[4]||(e[4]=o=>i.next())}," Next ")]),s("div",E,[(l(!0),r(B,null,N((g=t.items)==null?void 0:g.data,o=>(l(),r("button",{onClick:Z=>t.current=o,class:"overflow-hidden rounded hover:bg-slate-200 font-extralight mb-1 text-left w-full bg-slate-50 py-1 px-2"},n(o.name),9,G))),256))]),s("div",H,[s("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items?.skip",onClick:e[5]||(e[5]=o=>i.previous())}," Previous "),s("div",L,n((v=t.items)==null?void 0:v.skip)+" - "+n(((b=t.items)==null?void 0:b.skip)+((k=(w=t.items)==null?void 0:w.data)==null?void 0:k.length))+" of "+n((x=t.items)==null?void 0:x.total),1),s("button",{class:"p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100",disabled:"!items || (items?.skip + items?.data?.length) >= items?.data?.length",onClick:e[6]||(e[6]=o=>i.next())}," Next ")])]),s("div",M,[t.current?(l(),r("h2",Q," Selected "+n(t.current.docker_container_id),1)):C("",!0),t.current?C("",!0):(l(),r("h2",z," Select Container ")),a(),s("button",{onClick:e[7]||(e[7]=o=>i.connect()),class:"mb-1 w-full hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"}," Connect "),d(s("textarea",{ref:"output",readonly:"","onUpdate:modelValue":e[8]||(e[8]=o=>t.output=o),class:"justify-start flex-col-reverse flex overflow-auto h-64 w-full p-4 rounded bg-slate-50",style:{"font-family":"monospace"}},null,512),[[u,t.output]]),a(),d(s("input",{onKeypress:e[9]||(e[9]=y(o=>i.send(),["enter"])),"onUpdate:modelValue":e[10]||(e[10]=o=>t.command=o),placeholder:"cmd",class:"w-full p-2"},null,544),[[u,t.command]]),a(),s("button",{onClick:e[11]||(e[11]=o=>i.send()),class:"w-full hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"}," Send "),a(),s("button",{class:"mt-1 w-full hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100",onClick:e[12]||(e[12]=o=>t.autoscroll=!t.autoscroll)}," Autoscroll "+n(t.autoscroll?"on":"off"),1),J,s("pre",null,"				"+n(t.current)+`
				`,1)])])]}),_:1})}const oe=K(D,[["render",O]]);export{oe as default};
