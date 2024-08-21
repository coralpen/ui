import{W as O}from"./UtilityNavbar-Bvh6ZX9G.js";import E from"./TemplateDefault-Dv9vyowm.js";import{S as L}from"./SectionHero-CJc4JE80.js";import{T as W,u as M,a as H}from"./unzipit.module-BIZnlCut.js";import{_ as K,c as Y,w as v,r as k,o as a,a as B,b as s,t as g,g as n,k as f,d as h,e as r,v as u,h as y,F as w,f as _,j as Z,p as G,l as J}from"./index-CHUHkIjT.js";const Q={components:{WrapperPage:O,TemplateDefault:E,SectionHero:L},props:["renderer"],inject:["io"],data:()=>({dockerComposeFile:"",files:[],name:"",slug:"",repository:"",branch:"",branches:[],adjustVolumes:!0,inherit:!0,running:!1,webhook:!1,searchRepos:!1,oauthProviders:[],consentUrl:"",search:"",user:null,query:"",organisations:[],repositories:null,log:null,loading:"",services:[]}),watch:{async searchRepos(e){e&&(await this.getOAuthProviders(),await this.getUser(),await this.getOrganisations(),!this.query&&this.orgs.length&&(this.query=this.orgs[0].query,await this.getRepositories()))},async query(){await this.getRepositories()},async repository(e){var d;const t=(d=this.repositories)==null?void 0:d.items.find(m=>m.clone_url===e);t&&(this.branch=t.default_branch,await this.getBranches(t),await this.getDockerCompose(t))},async branch(e){var d;const t=(d=this.repositories)==null?void 0:d.items.find(m=>m.clone_url===this.repository);t&&await this.getDockerCompose(t)}},computed:{id(){return this.$route.params.id||this.slug},oauthProvidersFiltered(){const e=["github"];return this.oauthProviders.filter(t=>e.includes(t.provider))},orgs(){var e,t;return[{title:(e=this.user)==null?void 0:e.login,query:`user:${(t=this.user)==null?void 0:t.login}`},...this.organisations.map(d=>{var m,b;return{title:(m=d==null?void 0:d.organization)==null?void 0:m.login,query:`org:${(b=d==null?void 0:d.organization)==null?void 0:b.login}`}})]}},async created(){await this.getOAuthProviders(),this.id&&(await this.getItem(),await this.getServices())},methods:{async getServices(){console.log("Syncing docker with database..."),await this.io.service("docker_nodes").get("sync"),console.log("Fetching services...");const e=(await this.io.service("docker_services").find({query:{stackname:this.slug,$limit:1e3}})).data;console.log("Fetching service resources...",e);for(const t of e)console.log("Resolve",t.name),console.log("Fetching environments"),t.environments=(await this.io.service("docker_services_environments").find({query:{docker_service_id:t.docker_service_id,$limit:1e3}})).data,console.log("Fetching networks"),t.networks=(await this.io.service("docker_services_networks").find({query:{docker_service_id:t.docker_service_id,$limit:1e3}})).data,console.log("Fetching ports"),t.ports=(await this.io.service("docker_services_ports").find({query:{docker_service_id:t.docker_service_id,$limit:1e3}})).data,console.log("Fetching volumes"),t.volumes=(await this.io.service("docker_services_volumes").find({query:{docker_service_id:t.docker_service_id,$limit:1e3}})).data,console.log("Fetching tasks"),t.tasks=(await this.io.service("docker_tasks").find({query:{docker_service_id:t.docker_service_id,$limit:1e3}})).data,console.log("Fetching containers"),t.containers=(await this.io.service("docker_containers").find({query:{docker_service_id:t.docker_service_id,$limit:1e3}})).data,console.log("Done",t.name);console.log("Completed",e),this.services=e},async getDockerCompose(e){this.loading="docker compose file";const t=this.oauthProvidersFiltered.find(d=>d.provider==="github");if(t)try{const m=await(await fetch(e.contents_url.replace("{+path}","docker-compose.yml")+`?ref=${this.branch}`,{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${t.token}`}})).json();m.download_url&&(this.dockerComposeFile=await(await fetch(m.download_url)).text())}catch{console.error("Could not fetch docker-compose.yml",error)}this.loading=""},async getUser(){this.loading="user";const e=this.oauthProvidersFiltered.find(t=>t.provider==="github");if(e){let t=await fetch("https://api.github.com/user",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${e.token}`}});this.user=await t.json(),console.log("user",this.user)}this.loading=""},async getOrganisations(){this.loading="organisations";const e=this.oauthProvidersFiltered.find(t=>t.provider==="github");if(e){let t=await fetch("https://api.github.com/user/memberships/orgs?per_page=150",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${e.token}`}});this.organisations=await t.json(),console.log("orgs",this.organisations)}this.loading=""},async getRepositories(){this.loading="repositories";const e=this.oauthProvidersFiltered.find(t=>t.provider==="github");if(e){let t="q="+encodeURIComponent(this.search+(" "+this.query||" user:"+this.user.login)),d=await fetch(`https://api.github.com/search/repositories?${t}&per_page=150`,{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${e.token}`}});this.repositories=await d.json(),console.log("repos",this.repositories)}this.loading=""},async getBranches(e){this.loading="branches";const t=this.oauthProvidersFiltered.find(d=>d.provider==="github");if(t){let d=await fetch(e.branches_url.replace("{/branch}","")+"?per_page=150",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${t.token}`}});this.branches=await d.json(),console.log("branches",this.branches)}this.loading=""},consent(e){e&&window.open(e,"_blank")},async getOAuthProviders(){this.loading="providers";const e=await this.io.service("oauth_providers").find({query:{}});this.oauthProviders=e==null?void 0:e.data,this.loading=""},async getItem(){this.loading="app";const e=await this.io.service("apps").get(this.id);this.name=e.name,this.slug=e.id,this.repository=e.repository,this.branch=e.branch,this.adjustVolumes=e.adjustVolumes,this.inherit=e.inherit,this.running=e.running,this.dockerComposeFile=e.dockerComposeFile,this.webhook=e.webhook,this.log=e.log,console.log(e),this.loading=""},async remove(){this.loading="remove app";try{const e=await this.io.service("apps").remove(this.id);console.log("res",e),this.$router.push("/apps")}catch(e){console.log("err",e)}this.loading=""},async attach(){this.loading="attach webhook";try{const e=await this.io.service("apps").patch(this.id,{attach:!0});console.log("res",e)}catch(e){console.log("err",e)}await this.getItem(),this.loading=""},async detach(){this.loading="detach webhook";try{const e=await this.io.service("apps").patch(this.id,{detach:!0});console.log("res",e)}catch(e){console.log("err",e)}await this.getItem(),this.loading=""},async start(){this.loading="start app";try{const e=await this.io.service("apps").patch(this.id,{start:!0});console.log("res",e)}catch(e){console.log("err",e)}await this.getItem(),this.loading=""},async stop(){this.loading="stop app";try{const e=await this.io.service("apps").patch(this.id,{stop:!0});console.log("res",e)}catch(e){console.log("err",e)}await this.getItem(),this.loading=""},async build(){this.loading="build app";try{const e=await this.io.service("apps").patch(this.id,{build:!0});console.log("res",e)}catch(e){console.log("err",e)}await this.getItem(),this.loading=""},async destroy(){this.loading="destroy app";try{const e=await this.io.service("apps").patch(this.id,{destroy:!0});console.log("res",e)}catch(e){console.log("err",e)}await this.getItem(),this.loading=""},async compose(){this.loading="compose app";const e=await this.io.service("apps").patch(this.id,{compose:this.dockerComposeFile});console.log("res",e),await this.getItem(),this.loading=""},async deploy(){var e;this.loading="deploy app";try{console.log("files",this.files);const t=await this.io.service("apps").create({name:this.name,slug:this.id,buffer:(e=this.files)!=null&&e.length?await this.packTar():null,repository:this.repository,branch:this.branch,dockerComposeFile:this.dockerComposeFile,adjustVolumes:this.adjustVolumes,inherit:this.inherit});console.log("res",t)}catch(t){console.log("error",t)}await this.getItem(),this.loading=""},async update(){var e;this.loading="update app";try{const t=await this.io.service("apps").update(this.id,{buffer:(e=this.files)!=null&&e.length?await this.packTar():null,repository:this.repository,dockerComposeFile:this.dockerComposeFile,inherit:this.inherit,adjustVolumes:this.adjustVolumes,branch:this.branch,name:this.name});console.log("res",t)}catch(t){console.log("error",t)}await this.getItem(),this.loading=""},async resolveDockerCompose(){this.loading="docker compose file";const e=this.files.find(t=>t.name.endsWith("docker-compose.yml"));if(e){const t=new TextDecoder().decode(e.buffer);this.dockerComposeFile=t}this.loading=""},async packTar(){let e=new W;for await(let t of this.files)e.append(t.name,new Uint8Array(t.buffer));return e.out},async uploadZip(){return this.files=[],this.dockerComposeFile="",new Promise(e=>{let t=document.createElement("input");t.type="file",t.multiple=!1,t.accept=".zip",t.onchange=async()=>{let d=Array.from(t.files)[0];const{entries:m}=await M(await d.arrayBuffer());for await(const[b,p]of Object.entries(m))m[b].isDirectory||this.files.push({buffer:await p.arrayBuffer(),name:b});await this.resolveDockerCompose(),e()},t.click()})},async uploadTar(){return this.files=[],this.dockerComposeFile="",new Promise(e=>{let t=document.createElement("input");t.type="file",t.multiple=!1,t.accept=".tar",t.onchange=async()=>{let d=Array.from(t.files)[0],m=await H(await d.arrayBuffer());for await(let b of m)this.files.push({buffer:b.buffer,name:b.name});await this.resolveDockerCompose(),e()},t.click()})},async uploadFolder(){return this.files=[],this.dockerComposeFile="",new Promise(e=>{let t=document.createElement("input");t.type="file",t.multiple=!0,t.webkitdirectory=!0,t.dir=!0,t.onchange=async()=>{let d=Array.from(t.files);for await(let m of d)this.files.push({buffer:await m.arrayBuffer(),name:m.webkitRelativePath});await this.resolveDockerCompose(),e()},t.click()})},async uploadFiles(){return this.files=[],this.dockerComposeFile="",new Promise(e=>{let t=document.createElement("input");t.type="file",t.multiple=!0,t.onchange=async()=>{let d=Array.from(t.files);for await(let m of d){let b=await m.arrayBuffer();this.files.push({buffer:b,name:"root/"+m.name})}await this.resolveDockerCompose(),e()},t.click()})}}},c=e=>(G("data-v-e204a492"),e=e(),J(),e),X={class:"w-full"},x={class:"font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase"},ee={key:0,class:"font-thin block xl:pl-6 w-full text-center uppercase"},te={class:"mt-8 mb-20 relative overflow-auto w-full"},se={key:0,class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},oe={class:"block my-2"},le={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},ie=c(()=>s("label",{class:"block my-2"}," Basic app settings ",-1)),ae={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},ne=c(()=>s("label",{class:"block my-2"}," Upload using drop of Tar / Zip / Folder / Docker Compose File / Docker File ",-1)),re={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},de={class:"block my-2"},ue={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},pe=c(()=>s("label",{class:"block my-2"}," Clone using a git provider ",-1)),ce={class:"mr-4 inline-block"},he=["onClick"],me={key:0},ge={class:"block my-2"},fe=["value"],be={class:"block my-2"},ye=["value"],we={class:"block my-2"},ve=["value"],ke=c(()=>s("label",{class:"block my-2"}," Repository ",-1)),_e=c(()=>s("label",{class:"block my-2"}," Branch ",-1)),Ce=c(()=>s("div",{class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},[s("label",{class:"block my-2"}," One click installation browsing images from docker hub ")],-1)),Ve={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},Ue=c(()=>s("label",{class:"block my-2"},"Docker Compose",-1)),$e={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},Fe=c(()=>s("label",{class:"my-2 block"}," Related Services ",-1)),De={class:"bg-slate-50 p-4 overflow-auto shadow-sm mb-2 text-slate-700"},Se={class:"block my-2"},Ie=c(()=>s("b",null,"Service name:",-1)),Ae=c(()=>s("br",null,null,-1)),je=c(()=>s("b",null,"Service ID:",-1)),Pe=c(()=>s("br",null,null,-1)),Re=c(()=>s("b",null,"Image:",-1)),qe={class:"bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700"},Be={class:"w-full"},Ne=c(()=>s("caption",{class:"text-left mb-3"}," Environment Variables ",-1)),Te=c(()=>s("thead",null,[s("tr",null,[s("th",{class:"text-left"}," Key "),s("th",{class:"text-left"}," Value "),s("th",{class:"text-left"}," Actions ")])],-1)),ze={class:"pr-4"},Oe=["onUpdate:modelValue"],Ee={class:"pr-4"},Le=["onUpdate:modelValue"],We={class:"bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700"},Me={class:"w-full"},He=c(()=>s("caption",{class:"text-left mb-3"}," Networks ",-1)),Ke=c(()=>s("thead",null,[s("tr",null,[s("th",{class:"text-left"}," Address "),s("th",{class:"text-left"}," Network ID "),s("th",{class:"text-left"}," Actions ")])],-1)),Ye={class:"pr-4"},Ze=["onUpdate:modelValue"],Ge={class:"pr-4"},Je=["onUpdate:modelValue"],Qe={class:"bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700"},Xe={class:"w-full"},xe=c(()=>s("caption",{class:"text-left mb-3"}," Ports ",-1)),et=c(()=>s("thead",null,[s("tr",null,[s("th",{class:"text-left"}," External "),s("th",{class:"text-left"}," Internal "),s("th",{class:"text-left"}," Actions ")])],-1)),tt={class:"pr-4"},st=["onUpdate:modelValue"],ot={class:"pr-4"},lt=["onUpdate:modelValue"],it={class:"bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700"},at={class:"w-full"},nt=c(()=>s("caption",{class:"text-left mb-3"}," Volumes ",-1)),rt=c(()=>s("thead",null,[s("tr",null,[s("th",{class:"text-left"}," Name "),s("th",{class:"text-left"}," Path "),s("th",{class:"text-left"}," Type "),s("th",{class:"text-left"}," Actions ")])],-1)),dt={class:"pr-4"},ut=["onUpdate:modelValue"],pt={class:"pr-4"},ct=["onUpdate:modelValue"],ht={class:"pr-4"},mt=["onUpdate:modelValue"],gt={class:"bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700"},ft=c(()=>s("caption",{class:"text-left mb-3"}," Tasks ",-1)),bt={class:"w-full"},yt=c(()=>s("thead",null,[s("tr",null,[s("th",{class:"text-left"}," Timestamp "),s("th",{class:"text-left"}," State "),s("th",{class:"text-left",style:{height:"26px"}}," Message "),s("th",{class:"text-left",style:{height:"26px"}}," Desired state "),s("th",{class:"text-left",style:{height:"26px"}}," Slot "),s("th",{class:"text-left",style:{height:"26px"}}," Node ID "),s("th",{class:"text-left",style:{height:"26px"}}," Task ID "),s("th",{class:"text-left"}," Actions ")])],-1)),wt={class:"pr-4"},vt=["onUpdate:modelValue"],kt={class:"pr-4"},_t=["onUpdate:modelValue"],Ct={class:"pr-4"},Vt=["onUpdate:modelValue"],Ut={class:"pr-4"},$t=["onUpdate:modelValue"],Ft={class:"pr-4"},Dt=["onUpdate:modelValue"],St={class:"pr-4"},It=["onUpdate:modelValue"],At={style:{width:"130px"}},jt={class:"bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700"},Pt=c(()=>s("caption",{class:"text-left mb-3"}," Containers ",-1)),Rt={class:"w-full"},qt=c(()=>s("thead",null,[s("tr",null,[s("th",{class:"text-left"}," Name "),s("th",{class:"text-left"}," Command "),s("th",{class:"text-left",style:{height:"26px"}}," State "),s("th",{class:"text-left",style:{height:"26px"}}," Status "),s("th",{class:"text-left",style:{height:"26px"}}," Image "),s("th",{class:"text-left",style:{height:"26px"}}," Task ID "),s("th",{class:"text-left"}," Node ID "),s("th",{class:"text-left"}," Container ID "),s("th",{class:"text-left"}," Actions ")])],-1)),Bt={class:"pr-4"},Nt=["onUpdate:modelValue"],Tt={class:"pr-4"},zt=["onUpdate:modelValue"],Ot={class:"pr-4"},Et=["onUpdate:modelValue"],Lt={class:"pr-4"},Wt=["onUpdate:modelValue"],Mt={class:"pr-4"},Ht=["onUpdate:modelValue"],Kt={class:"pr-4"},Yt=["onUpdate:modelValue"],Zt={class:"pr-4"},Gt=["onUpdate:modelValue"],Jt={class:"pr-4"},Qt=["onUpdate:modelValue"],Xt={style:{width:"130px"}},xt={class:"text-right"},es=["disabled"];function ts(e,t,d,m,b,p){const N=k("SectionHero"),T=k("WrapperPage"),z=k("TemplateDefault");return a(),Y(z,{renderer:d.renderer},{default:v(()=>[B(N,null,{default:v(()=>[s("div",X,[s("h1",x,g(p.id||"Deploy Docker App"),1),e.loading?(a(),n("h2",ee," Loading - "+g(e.loading)+" ... ",1)):f("",!0)])]),_:1}),B(T,{class:"p-6"},{default:v(()=>{var C,V,U,$,F,D,S,I,A,j,P,R,q;return[s("div",te,[s("div",null,[s("button",{class:"py-4 p-2 w-full rounded bg-slate-200",onClick:t[0]||(t[0]=o=>p.getItem())}," Reload ")]),e.log?(a(),n("div",se,[s("label",oe," Last updated "+g(new Date((($=(U=(V=(C=e.log)==null?void 0:C[0])==null?void 0:V.commit)==null?void 0:U.author)==null?void 0:$.timestamp)*1e3).toLocaleString())+" by "+g((I=(S=(D=(F=e.log)==null?void 0:F[0])==null?void 0:D.commit)==null?void 0:S.author)==null?void 0:I.name),1)])):f("",!0),s("div",le,[ie,h(),r(s("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>e.name=o),placeholder:"Name",class:"px-4 py-2 block w-full mb-4"},null,512),[[u,e.name]]),e.$route.params.id?f("",!0):r((a(),n("input",{key:0,"onUpdate:modelValue":t[2]||(t[2]=o=>e.slug=o),placeholder:"Slug",class:"px-4 py-2 block w-full"},null,512)),[[u,e.slug]]),h(),e.$route.params.id?r((a(),n("input",{key:1,"onUpdate:modelValue":t[3]||(t[3]=o=>p.id=o),placeholder:"Slug",readonly:"",class:"px-4 py-2 block w-full"},null,512)),[[u,p.id]]):f("",!0)]),s("div",ae,[ne,s("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:t[4]||(t[4]=o=>p.uploadFiles())}," Upload files "),s("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:t[5]||(t[5]=o=>e.uploadFolde())}," Upload folder "),s("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:t[6]||(t[6]=o=>p.uploadTar())}," Upload tar "),s("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:t[7]||(t[7]=o=>p.uploadZip())}," Upload zip ")]),s("div",re,[s("label",de," Files count: "+g(e.files.length),1)]),s("div",ue,[pe,(a(!0),n(w,null,y(p.oauthProvidersFiltered,o=>(a(),n("div",ce,[s("button",{class:"rounded p-2 bg-slate-200 mr-1",onClick:l=>p.consent(o.consent_url)}," Connect to "+g(o.provider),9,he),h(),s("button",{class:"rounded p-2 bg-slate-200",onClick:t[8]||(t[8]=l=>e.searchRepos=!e.searchRepos)},g(e.searchRepos?"Close":"Select repository"),1)]))),256)),e.searchRepos?(a(),n("div",me,[s("label",ge," Select user / organisation ("+g(((A=p.orgs)==null?void 0:A.length)||"0")+") ",1),h(),r(s("select",{"onUpdate:modelValue":t[9]||(t[9]=o=>e.query=o),class:"mt-2 px-4 py-2 w-full"},[(a(!0),n(w,null,y(p.orgs,o=>(a(),n("option",{value:o.query},g(o.title),9,fe))),256))],512),[[_,e.query]]),h(),r(s("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>e.search=o),placeholder:"Search for repository ...",class:"mt-2 px-4 py-2 w-full",onKeypress:t[11]||(t[11]=Z(o=>p.getRepositories(),["enter"]))},null,544),[[u,e.search]]),h(),s("button",{class:"rounded p-2 mt-2 w-full bg-slate-200",onClick:t[12]||(t[12]=o=>p.getRepositories())}," Search "),h(),s("label",be," Select Repository ("+g(((P=(j=e.repositories)==null?void 0:j.items)==null?void 0:P.length)||"0")+") ",1),h(),r(s("select",{"onUpdate:modelValue":t[13]||(t[13]=o=>e.repository=o),class:"mt-2 px-4 py-2 w-full"},[(a(!0),n(w,null,y((R=e.repositories)==null?void 0:R.items,o=>(a(),n("option",{value:o.clone_url},g(o.full_name),9,ye))),256))],512),[[_,e.repository]]),h(),s("label",we," Select Branch ("+g(((q=e.branches)==null?void 0:q.length)||"0")+") ",1),h(),r(s("select",{"onUpdate:modelValue":t[14]||(t[14]=o=>e.branch=o),class:"mt-2 px-4 py-2 w-full"},[(a(!0),n(w,null,y(e.branches,o=>(a(),n("option",{value:o.name},g(o.name),9,ve))),256))],512),[[_,e.branch]])])):f("",!0),h(),ke,h(),r(s("input",{"onUpdate:modelValue":t[15]||(t[15]=o=>e.repository=o),placeholder:"Repository url",class:"mt-2 px-4 py-2 w-full"},null,512),[[u,e.repository]]),h(),_e,h(),r(s("input",{"onUpdate:modelValue":t[16]||(t[16]=o=>e.branch=o),placeholder:"Branch",class:"mt-2 px-4 py-2 w-full"},null,512),[[u,e.branch]]),h(),s("button",{class:"rounded p-2 bg-slate-200 mt-2",onClick:t[17]||(t[17]=o=>e.adjustVolumes=!e.adjustVolumes)}," Move volumes to app folder: "+g(e.adjustVolumes?"Yes":"No"),1)]),Ce,s("div",Ve,[Ue,s("button",{class:"rounded p-2 bg-slate-200 my-4",onClick:t[18]||(t[18]=o=>e.inherit=!e.inherit)}," Inherit original docker-compose file: "+g(e.inherit?"Yes":"No"),1),s("button",{class:"rounded p-2 bg-slate-200 my-4",onClick:t[19]||(t[19]=o=>e.inherit=!e.inherit)}," Inherit original docker-compose file: "+g(e.inherit?"Yes":"No"),1),h(),r(s("textarea",{class:"w-full p-4","onUpdate:modelValue":t[20]||(t[20]=o=>e.dockerComposeFile=o),rows:"10",placeholder:"docker-compose.override.yml"},null,512),[[u,e.dockerComposeFile]])]),s("div",$e,[Fe,s("button",{class:"rounded p-2 bg-slate-200 my-4",onClick:t[21]||(t[21]=o=>p.getServices())}," Reload "),(a(!0),n(w,null,y(e.services,o=>(a(),n("div",De,[s("label",Se,[Ie,h(" "+g(o.name),1),Ae,je,h(" "+g(o.docker_service_id),1),Pe,Re,h(" "+g(o.docker_image),1)]),s("div",qe,[s("table",Be,[Ne,Te,s("tbody",null,[(a(!0),n(w,null,y(o.environments,l=>(a(),n("tr",null,[s("td",ze,[r(s("input",{"onUpdate:modelValue":i=>l.key=i,class:"w-full p-2 rounded"},null,8,Oe),[[u,l.key]])]),s("td",Ee,[r(s("input",{"onUpdate:modelValue":i=>l.value=i,class:"w-full p-2 rounded"},null,8,Le),[[u,l.value]])]),s("td",null,[s("button",{class:"mr-2 rounded p-2 bg-slate-200 my-4",onClick:t[22]||(t[22]=i=>e.inherit=!e.inherit)}," Save "),s("button",{class:"rounded p-2 bg-slate-200 my-4",onClick:t[23]||(t[23]=i=>e.inherit=!e.inherit)}," Delete ")])]))),256))])]),s("button",{class:"mr-2 rounded p-2 bg-slate-200 my-4",onClick:t[24]||(t[24]=l=>e.inherit=!e.inherit)}," New ")]),s("div",We,[s("table",Me,[He,Ke,s("tbody",null,[(a(!0),n(w,null,y(o.networks,l=>(a(),n("tr",null,[s("td",Ye,[r(s("input",{"onUpdate:modelValue":i=>l.address=i,class:"w-full p-2 rounded"},null,8,Ze),[[u,l.address]])]),s("td",Ge,[r(s("input",{"onUpdate:modelValue":i=>l.docker_network_id=i,class:"w-full p-2 rounded"},null,8,Je),[[u,l.docker_network_id]])]),s("td",null,[s("button",{class:"mr-2 rounded p-2 bg-slate-200 my-4",onClick:t[25]||(t[25]=i=>e.inherit=!e.inherit)}," Save "),s("button",{class:"rounded p-2 bg-slate-200 my-4",onClick:t[26]||(t[26]=i=>e.inherit=!e.inherit)}," Delete ")])]))),256))])]),s("button",{class:"mr-2 rounded p-2 bg-slate-200 my-4",onClick:t[27]||(t[27]=l=>e.inherit=!e.inherit)}," New ")]),s("div",Qe,[s("table",Xe,[xe,et,s("tbody",null,[(a(!0),n(w,null,y(o.ports,l=>(a(),n("tr",null,[s("td",tt,[r(s("input",{"onUpdate:modelValue":i=>l.port_external=i,class:"w-full p-2 rounded"},null,8,st),[[u,l.port_external]])]),s("td",ot,[r(s("input",{"onUpdate:modelValue":i=>l.port_internal=i,class:"w-full p-2 rounded"},null,8,lt),[[u,l.port_internal]])]),s("td",null,[s("button",{class:"mr-2 rounded p-2 bg-slate-200 my-4",onClick:t[28]||(t[28]=i=>e.inherit=!e.inherit)}," Open "),s("button",{class:"mr-2 rounded p-2 bg-slate-200 my-4",onClick:t[29]||(t[29]=i=>e.inherit=!e.inherit)}," Close "),s("button",{class:"mr-2 rounded p-2 bg-slate-200 my-4",onClick:t[30]||(t[30]=i=>e.inherit=!e.inherit)}," Save "),s("button",{class:"rounded p-2 bg-slate-200 my-4",onClick:t[31]||(t[31]=i=>e.inherit=!e.inherit)}," Delete ")])]))),256))])]),s("button",{class:"mr-2 rounded p-2 bg-slate-200 my-4",onClick:t[32]||(t[32]=l=>e.inherit=!e.inherit)}," New ")]),s("div",it,[s("table",at,[nt,rt,s("tbody",null,[(a(!0),n(w,null,y(o.volumes,l=>(a(),n("tr",null,[s("td",dt,[r(s("input",{"onUpdate:modelValue":i=>l.name=i,class:"w-full p-2 rounded"},null,8,ut),[[u,l.name]])]),s("td",pt,[r(s("input",{"onUpdate:modelValue":i=>l.path=i,class:"w-full p-2 rounded"},null,8,ct),[[u,l.path]])]),s("td",ht,[r(s("input",{"onUpdate:modelValue":i=>l.type=i,class:"w-full p-2 rounded"},null,8,mt),[[u,l.type]])]),s("td",null,[s("button",{class:"mr-2 rounded p-2 bg-slate-200 my-4",onClick:t[33]||(t[33]=i=>e.inherit=!e.inherit)}," Save "),s("button",{class:"rounded p-2 bg-slate-200 my-4",onClick:t[34]||(t[34]=i=>e.inherit=!e.inherit)}," Delete ")])]))),256))])]),s("button",{class:"mr-2 rounded p-2 bg-slate-200 my-4",onClick:t[35]||(t[35]=l=>e.inherit=!e.inherit)}," New ")]),s("div",gt,[ft,s("table",bt,[yt,s("tbody",null,[(a(!0),n(w,null,y(o.tasks,l=>(a(),n("tr",null,[s("td",wt,[r(s("input",{"onUpdate:modelValue":i=>l.timestamp=i,class:"w-full p-2 rounded"},null,8,vt),[[u,l.timestamp]])]),s("td",kt,[r(s("input",{"onUpdate:modelValue":i=>l.state=i,class:"w-full p-2 rounded"},null,8,_t),[[u,l.state]])]),s("td",Ct,[r(s("input",{"onUpdate:modelValue":i=>l.message=i,class:"w-full p-2 rounded"},null,8,Vt),[[u,l.message]])]),s("td",Ut,[r(s("input",{"onUpdate:modelValue":i=>l.desired_state=i,class:"w-full p-2 rounded"},null,8,$t),[[u,l.desired_state]])]),s("td",Ft,[r(s("input",{"onUpdate:modelValue":i=>l.slot=i,class:"w-full p-2 rounded"},null,8,Dt),[[u,l.slot]])]),s("td",St,[r(s("input",{"onUpdate:modelValue":i=>l.docker_task_id=i,class:"w-full p-2 rounded"},null,8,It),[[u,l.docker_task_id]])]),s("td",At,[s("button",{class:"mr-2 rounded p-2 bg-slate-200 my-4",onClick:t[36]||(t[36]=i=>e.inherit=!e.inherit)}," Save "),s("button",{class:"rounded p-2 bg-slate-200 my-4",onClick:t[37]||(t[37]=i=>e.inherit=!e.inherit)}," Delete ")])]))),256))])]),s("button",{class:"mr-2 rounded p-2 bg-slate-200 my-4",onClick:t[38]||(t[38]=l=>e.inherit=!e.inherit)}," New ")]),s("div",jt,[Pt,s("table",Rt,[qt,s("tbody",null,[(a(!0),n(w,null,y(o.containers,l=>(a(),n("tr",null,[s("td",Bt,[r(s("input",{"onUpdate:modelValue":i=>l.name=i,class:"w-full p-2 rounded"},null,8,Nt),[[u,l.name]])]),s("td",Tt,[r(s("input",{"onUpdate:modelValue":i=>l.command=i,class:"w-full p-2 rounded"},null,8,zt),[[u,l.command]])]),s("td",Ot,[r(s("input",{"onUpdate:modelValue":i=>l.state=i,class:"w-full p-2 rounded"},null,8,Et),[[u,l.state]])]),s("td",Lt,[r(s("input",{"onUpdate:modelValue":i=>l.status=i,class:"w-full p-2 rounded"},null,8,Wt),[[u,l.status]])]),s("td",Mt,[r(s("input",{"onUpdate:modelValue":i=>l.docker_image_name=i,class:"w-full p-2 rounded"},null,8,Ht),[[u,l.docker_image_name]])]),s("td",Kt,[r(s("input",{"onUpdate:modelValue":i=>l.docker_task_id=i,class:"w-full p-2 rounded"},null,8,Yt),[[u,l.docker_task_id]])]),s("td",Zt,[r(s("input",{"onUpdate:modelValue":i=>l.docker_node_id=i,class:"w-full p-2 rounded"},null,8,Gt),[[u,l.docker_node_id]])]),s("td",Jt,[r(s("input",{"onUpdate:modelValue":i=>l.docker_container_id=i,class:"w-full p-2 rounded"},null,8,Qt),[[u,l.docker_container_id]])]),s("td",Xt,[s("button",{class:"mr-2 rounded p-2 bg-slate-200 my-4",onClick:t[39]||(t[39]=i=>e.inherit=!e.inherit)}," Save "),s("button",{class:"rounded p-2 bg-slate-200 my-4",onClick:t[40]||(t[40]=i=>e.inherit=!e.inherit)}," Delete ")])]))),256))])]),s("button",{class:"mr-2 rounded p-2 bg-slate-200 my-4",onClick:t[41]||(t[41]=l=>e.inherit=!e.inherit)}," New ")])]))),256))]),s("div",xt,[e.$route.params.id?f("",!0):(a(),n("button",{key:0,class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",disabled:!e.slug,onClick:t[42]||(t[42]=o=>p.deploy())}," Launch ",8,es)),e.$route.params.id?(a(),n("button",{key:1,class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:t[43]||(t[43]=o=>p.update())}," Update ")):f("",!0),!e.webhook&&e.$route.params.id&&e.repository?(a(),n("button",{key:2,class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:t[44]||(t[44]=o=>p.attach())}," Attach webhook ")):f("",!0),e.webhook&&e.$route.params.id&&e.repository?(a(),n("button",{key:3,class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:t[45]||(t[45]=o=>p.detach())}," Detach webhook ")):f("",!0),!e.running&&e.$route.params.id?(a(),n("button",{key:4,class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:t[46]||(t[46]=o=>p.start())}," Start ")):f("",!0),h(),e.running&&e.$route.params.id?(a(),n("button",{key:5,class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:t[47]||(t[47]=o=>p.stop())}," Stop ")):f("",!0),h(),e.$route.params.id?(a(),n("button",{key:6,class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:t[48]||(t[48]=o=>p.build())}," Build ")):f("",!0),h(),e.$route.params.id?(a(),n("button",{key:7,class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:t[49]||(t[49]=o=>p.destroy())}," Destroy ")):f("",!0),h(),e.$route.params.id?(a(),n("button",{key:8,class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:t[50]||(t[50]=o=>p.compose())}," Compose ")):f("",!0),h(),e.$route.params.id?(a(),n("button",{key:9,class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:t[51]||(t[51]=o=>p.remove())}," Remove ")):f("",!0)])])]}),_:1})]),_:1},8,["renderer"])}const ns=K(Q,[["render",ts],["__scopeId","data-v-e204a492"]]);export{ns as default};
