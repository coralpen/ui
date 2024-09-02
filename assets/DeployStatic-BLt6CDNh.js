import{W as E}from"./UtilityNavbar-DSt_rGL-.js";import H from"./TemplateDefault-BxUiD2te.js";import{S as L}from"./SectionHero-BJD0ZBqP.js";import{T as N,u as W,a as Z}from"./unzipit.module-DT3G5DTd.js";import{_ as K,c as M,w as b,r as y,o as l,a as I,b as o,t as u,g as r,k as h,d,e as c,v as f,h as m,F as g,f as w,j as G,p as J,l as Q}from"./index-DxSBmpq_.js";const X={components:{WrapperPage:E,TemplateDefault:H,SectionHero:L},props:["renderer"],inject:["io"],data:()=>({files:[],hostname:"",repository:"",branch:"",branches:[],webhook:!1,searchRepos:!1,oauthProviders:[],consentUrl:"",search:"",user:null,query:"",organisations:[],repositories:null,loading:"",log:null}),watch:{async searchRepos(t){t&&(await this.getOAuthProviders(),await this.getUser(),await this.getOrganisations(),!this.query&&this.orgs.length&&(this.query=this.orgs[0].query,await this.getRepositories()))},async query(){await this.getRepositories()},async repository(t){var i;const e=(i=this.repositories)==null?void 0:i.items.find(n=>n.clone_url===t);e&&(this.branch=e.default_branch,await this.getBranches(e))}},computed:{id(){return this.$route.params.id||this.hostname},oauthProvidersFiltered(){const t=["github"];return this.oauthProviders.filter(e=>t.includes(e.provider))},orgs(){var t,e;return[{title:(t=this.user)==null?void 0:t.login,query:`user:${(e=this.user)==null?void 0:e.login}`},...this.organisations.map(i=>{var n,p;return{title:(n=i==null?void 0:i.organization)==null?void 0:n.login,query:`org:${(p=i==null?void 0:i.organization)==null?void 0:p.login}`}})]}},async created(){await this.getOAuthProviders(),this.id?await this.getItem():this.branch="main"},methods:{async getUser(){this.loading="user";const t=this.oauthProvidersFiltered.find(e=>e.provider==="github");if(t){let e=await fetch("https://api.github.com/user",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${t.token}`}});this.user=await e.json(),console.log("user",this.user)}this.loading=""},async getOrganisations(){this.loading="organisations";const t=this.oauthProvidersFiltered.find(e=>e.provider==="github");if(t){let e=await fetch("https://api.github.com/user/memberships/orgs?per_page=150",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${t.token}`}});this.organisations=await e.json(),console.log("orgs",this.organisations)}this.loading=""},async getRepositories(){this.loading="repositories";const t=this.oauthProvidersFiltered.find(e=>e.provider==="github");if(t){let e="q="+encodeURIComponent(this.search+(" "+this.query||" user:"+this.user.login)),i=await fetch(`https://api.github.com/search/repositories?${e}&per_page=150`,{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${t.token}`}});this.repositories=await i.json(),console.log("repos",this.repositories)}this.loading=""},async getBranches(t){this.loading="branches";const e=this.oauthProvidersFiltered.find(i=>i.provider==="github");if(e){let i=await fetch(t.branches_url.replace("{/branch}","")+"?per_page=150",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${e.token}`}});this.branches=await i.json(),console.log("branches",this.branches)}this.loading=""},consent(t){t&&window.open(t,"_blank")},async getOAuthProviders(){this.loading="providers";const t=await this.io.service("oauth_providers").find({query:{}});this.oauthProviders=t==null?void 0:t.data,this.loading=""},async getItem(){this.loading="app";const t=await this.io.service("static").get(this.id);this.hostname=t.id,this.repository=t.repository,this.branch=t.branch,this.webhook=t.webhook,this.log=t.log,console.log("res",t),this.loading=""},async remove(){this.loading="remove app";const t=await this.io.service("static").remove(this.id);console.log("res",t),this.$router.push("/apps-static"),this.loading=""},async attach(){this.loading="attach webhook";const t=await this.io.service("static").patch(this.id,{attach:!0});console.log("res",t),await this.getItem(),this.loading=""},async detach(){this.loading="detach webhook";const t=await this.io.service("static").patch(this.id,{detach:!0});console.log("res",t),await this.getItem(),this.loading=""},async update(){var t;this.loading="update app";try{console.log("files",this.files);const e=await this.io.service("static").update(this.id,{buffer:(t=this.files)!=null&&t.length?await this.packTar():null,repository:this.repository,branch:this.branch});console.log("res",e),await this.getItem()}catch(e){console.log("error",e)}this.loading=""},async deploy(){var t;this.loading="deploy app";try{console.log("files",this.files);const e=await this.io.service("static").create({hostname:this.id,buffer:(t=this.files)!=null&&t.length?await this.packTar():null,repository:this.repository,branch:this.branch});console.log("res",e),await this.getItem()}catch(e){console.log("error",e)}this.loading=""},async packTar(){let t=new N;for await(let e of this.files)t.append(e.name,new Uint8Array(e.buffer));return t.out},async uploadZip(){return this.files=[],new Promise(t=>{let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept=".zip",e.onchange=async()=>{let i=Array.from(e.files)[0];const{entries:n}=await W(await i.arrayBuffer());for await(const[p,a]of Object.entries(n))n[p].isDirectory||this.files.push({buffer:await a.arrayBuffer(),name:p});t()},e.click()})},async uploadTar(){return this.files=[],new Promise(t=>{let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept=".tar",e.onchange=async()=>{let i=Array.from(e.files)[0],n=await Z(await i.arrayBuffer());for await(let p of n)this.files.push({buffer:p.buffer,name:p.name});t()},e.click()})},async uploadFolder(){return this.files=[],new Promise(t=>{let e=document.createElement("input");e.type="file",e.multiple=!0,e.webkitdirectory=!0,e.dir=!0,e.onchange=async()=>{let i=Array.from(e.files);for await(let n of i)this.files.push({buffer:await n.arrayBuffer(),name:n.webkitRelativePath});t()},e.click()})},async uploadFiles(){return this.files=[],new Promise(t=>{let e=document.createElement("input");e.type="file",e.multiple=!0,e.onchange=async()=>{let i=Array.from(e.files);for await(let n of i){let p=await n.arrayBuffer();this.files.push({buffer:p,name:"root/"+n.name})}t()},e.click()})}}},v=t=>(J("data-v-093e115a"),t=t(),Q(),t),Y={class:"w-full"},_={class:"font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase"},x={key:0,class:"font-thin block xl:pl-6 w-full text-center uppercase"},ee={class:"mt-8 mb-20 relative overflow-auto w-full"},te={key:0,class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},se={class:"block my-2"},oe={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},ie=v(()=>o("label",{class:"block my-2"}," Basic app settings ",-1)),ae={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},le=v(()=>o("label",{class:"block my-2"}," Upload using drop of Tar / Zip / Folder / Docker Compose File / Docker File ",-1)),re={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},ne={class:"block my-2"},ue={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},de=v(()=>o("label",{class:"block my-2"}," Clone using a git provider ",-1)),pe={class:"mr-4 inline-block"},he=["onClick"],ce={key:0},fe={class:"block my-2"},me=["value"],ge={class:"block my-2"},be=["value"],ye={class:"block my-2"},we=["value"],ve={class:"text-right"},ke=["disabled"];function Ce(t,e,i,n,p,a){const V=y("SectionHero"),j=y("WrapperPage"),z=y("TemplateDefault");return l(),M(z,{renderer:i.renderer},{default:b(()=>[I(V,null,{default:b(()=>[o("div",Y,[o("h1",_,u(a.id?a.id:"Deploy Static App"),1),t.loading?(l(),r("h2",x," Loading - "+u(t.loading)+" ... ",1)):h("",!0)])]),_:1}),I(j,{class:"p-6"},{default:b(()=>{var k,C,P,U,A,S,B,R,F,q,T,$,D;return[o("div",ee,[o("div",null,[o("button",{class:"py-4 p-2 w-full rounded bg-slate-200",onClick:e[0]||(e[0]=s=>a.getItem())}," Reload ")]),t.log?(l(),r("div",te,[o("label",se," Last updated "+u(new Date(((U=(P=(C=(k=t.log)==null?void 0:k[0])==null?void 0:C.commit)==null?void 0:P.author)==null?void 0:U.timestamp)*1e3).toLocaleString())+" by "+u((R=(B=(S=(A=t.log)==null?void 0:A[0])==null?void 0:S.commit)==null?void 0:B.author)==null?void 0:R.name),1)])):h("",!0),o("div",oe,[ie,d(),t.$route.params.id?h("",!0):c((l(),r("input",{key:0,"onUpdate:modelValue":e[1]||(e[1]=s=>t.hostname=s),placeholder:"Hostname",class:"px-4 py-2 block w-full mb-4"},null,512)),[[f,t.hostname]]),d(),t.$route.params.id?c((l(),r("input",{key:1,"onUpdate:modelValue":e[2]||(e[2]=s=>a.id=s),placeholder:"Hostname",readonly:"",class:"px-4 py-2 block w-full mb-4"},null,512)),[[f,a.id]]):h("",!0)]),o("div",ae,[le,o("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:e[3]||(e[3]=s=>a.uploadFiles())}," Upload files "),o("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:e[4]||(e[4]=s=>t.uploadFolde())}," Upload folder "),o("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:e[5]||(e[5]=s=>a.uploadTar())}," Upload tar "),o("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:e[6]||(e[6]=s=>a.uploadZip())}," Upload zip "),o("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:e[7]||(e[7]=s=>t.files=[])}," Clear files ")]),o("div",re,[o("label",ne," Files count: "+u(t.files.length),1)]),o("div",ue,[de,(l(!0),r(g,null,m(a.oauthProvidersFiltered,s=>(l(),r("div",pe,[o("button",{class:"rounded p-2 bg-slate-200 mr-1",onClick:O=>a.consent(s.consent_url)}," Connect to "+u(s.provider),9,he),d(),o("button",{class:"rounded p-2 bg-slate-200",onClick:e[8]||(e[8]=O=>t.searchRepos=!t.searchRepos)},u(t.searchRepos?"Close":"Select repository"),1)]))),256)),t.searchRepos?(l(),r("div",ce,[o("label",fe," Select user / organisation ("+u(((F=a.orgs)==null?void 0:F.length)||"0")+") ",1),d(),c(o("select",{"onUpdate:modelValue":e[9]||(e[9]=s=>t.query=s),class:"mt-2 px-4 py-2 w-full"},[(l(!0),r(g,null,m(a.orgs,s=>(l(),r("option",{value:s.query},u(s.title),9,me))),256))],512),[[w,t.query]]),d(),c(o("input",{"onUpdate:modelValue":e[10]||(e[10]=s=>t.search=s),placeholder:"Search for repository ...",class:"mt-2 px-4 py-2 w-full",onKeypress:e[11]||(e[11]=G(s=>a.getRepositories(),["enter"]))},null,544),[[f,t.search]]),d(),o("button",{class:"rounded p-2 mt-2 w-full bg-slate-200",onClick:e[12]||(e[12]=s=>a.getRepositories())}," Search "),d(),o("label",ge," Select Repository ("+u(((T=(q=t.repositories)==null?void 0:q.items)==null?void 0:T.length)||"0")+") ",1),d(),c(o("select",{"onUpdate:modelValue":e[13]||(e[13]=s=>t.repository=s),class:"mt-2 px-4 py-2 w-full"},[(l(!0),r(g,null,m(($=t.repositories)==null?void 0:$.items,s=>(l(),r("option",{value:s.clone_url},u(s.full_name),9,be))),256))],512),[[w,t.repository]]),d(),o("label",ye," Select Branch ("+u(((D=t.branches)==null?void 0:D.length)||"0")+") ",1),d(),c(o("select",{"onUpdate:modelValue":e[14]||(e[14]=s=>t.branch=s),class:"mt-2 px-4 py-2 w-full"},[(l(!0),r(g,null,m(t.branches,s=>(l(),r("option",{value:s.name},u(s.name),9,we))),256))],512),[[w,t.branch]])])):h("",!0),d(),c(o("input",{"onUpdate:modelValue":e[15]||(e[15]=s=>t.repository=s),placeholder:"Repository url",class:"mt-2 px-4 py-2 w-full"},null,512),[[f,t.repository]]),d(),c(o("input",{"onUpdate:modelValue":e[16]||(e[16]=s=>t.branch=s),placeholder:"Branch name",class:"mt-2 px-4 py-2 w-full"},null,512),[[f,t.branch]])]),o("div",ve,[t.$route.params.id?h("",!0):(l(),r("button",{key:0,class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",disabled:!t.hostname,onClick:e[17]||(e[17]=s=>a.deploy())}," Launch ",8,ke)),t.$route.params.id?(l(),r("button",{key:1,class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[18]||(e[18]=s=>a.update())}," Update ")):h("",!0),!t.webhook&&t.repository?(l(),r("button",{key:2,class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[19]||(e[19]=s=>a.attach())}," Attach webhook ")):h("",!0),t.webhook&&t.repository?(l(),r("button",{key:3,class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[20]||(e[20]=s=>a.detach())}," Detach webhook ")):h("",!0),t.$route.params.id?(l(),r("button",{key:4,class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[21]||(e[21]=s=>a.remove())}," Remove ")):h("",!0)])])]}),_:1})]),_:1},8,["renderer"])}const Re=K(X,[["render",Ce],["__scopeId","data-v-093e115a"]]);export{Re as default};