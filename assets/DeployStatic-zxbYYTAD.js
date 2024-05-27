import{W as w}from"./UtilityNavbar-DZmT1OHs.js";import g from"./TemplateDefault-KWMkNDXf.js";import{S as v}from"./SectionHero-C32cnXy0.js";import{T as k,u as C,a as D}from"./unzipit.module-DWFUeIC9.js";import{_ as T,c as B,w as p,r as u,o as U,a as d,b as o,d as i,e as c,v as f,t as m}from"./index-Dq9G89Tw.js";const A={components:{WrapperPage:w,TemplateDefault:g,SectionHero:v},props:["renderer"],inject:["io"],data:()=>({files:[],hostname:"",repository:"",branch:"main",autodeploy:!1}),methods:{async remove(){const t=prompt("Hostname",this.hostname),e=await this.io.service("static").remove(t);console.log("res",e)},async attach(){const t=prompt("Hostname",this.hostname),e=await this.io.service("static").patch(t,{attach:!0});console.log("res",e)},async detach(){const t=prompt("Hostname",this.hostname),e=await this.io.service("static").patch(t,{detach:!0});console.log("res",e)},async status(){const t=prompt("Hostname",this.hostname),e=await this.io.service("static").patch(t,{status:!0});console.log("res",e)},async list(){const t=await this.io.service("static").find();console.log("res",t)},async update(){var t;try{console.log("files",this.files);const e=await this.io.service("static").update(this.hostname,{buffer:(t=this.files)!=null&&t.length?await this.packTar():null,repository:this.repository,branch:this.branch,autodeploy:this.autodeploy});console.log("res",e)}catch(e){console.log("error",e)}},async deploy(){var t;try{console.log("files",this.files);const e=await this.io.service("static").create({hostname:this.hostname,buffer:(t=this.files)!=null&&t.length?await this.packTar():null,repository:this.repository,autodeploy:this.autodeploy,branch:this.branch});console.log("res",e)}catch(e){console.log("error",e)}},async packTar(){let t=new k;for await(let e of this.files)t.append(e.name,new Uint8Array(e.buffer));return t.out},async uploadZip(){return this.files=[],new Promise(t=>{let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept=".zip",e.onchange=async()=>{let n=Array.from(e.files)[0];const{entries:a}=await C(await n.arrayBuffer());for await(const[r,l]of Object.entries(a))a[r].isDirectory||this.files.push({buffer:await l.arrayBuffer(),name:r});await this.resolveDockerCompose(),t()},e.click()})},async uploadTar(){return this.files=[],new Promise(t=>{let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept=".tar",e.onchange=async()=>{let n=Array.from(e.files)[0],a=await D(await n.arrayBuffer());for await(let r of a)this.files.push({buffer:r.buffer,name:r.name});await this.resolveDockerCompose(),t()},e.click()})},async uploadFolder(){return this.files=[],new Promise(t=>{let e=document.createElement("input");e.type="file",e.multiple=!0,e.webkitdirectory=!0,e.dir=!0,e.onchange=async()=>{let n=Array.from(e.files);for await(let a of n)this.files.push({buffer:await a.arrayBuffer(),name:a.webkitRelativePath});await this.resolveDockerCompose(),t()},e.click()})},async uploadFiles(){return this.files=[],new Promise(t=>{let e=document.createElement("input");e.type="file",e.multiple=!0,e.onchange=async()=>{let n=Array.from(e.files);for await(let a of n){let r=await a.arrayBuffer();this.files.push({buffer:r,name:"root/"+a.name})}await this.resolveDockerCompose(),t()},e.click()})}}},S=o("h1",{class:"font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase"}," Deploy Static App ",-1),H={class:"mt-8 mb-20 relative overflow-auto w-full"},P={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},$=o("label",{class:"block my-2"}," Basic app settings ",-1),F={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},x=o("label",{class:"block my-2"}," Upload using drop of Tar / Zip / Folder / Docker Compose File / Docker File ",-1),V={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},W={class:"block my-2"},E={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},z=o("label",{class:"block my-2"}," Clone using Github (With option to autodeploy using push webhooks) ",-1),N={class:"text-right"};function R(t,e,n,a,r,l){const h=u("SectionHero"),y=u("WrapperPage"),b=u("TemplateDefault");return U(),B(b,{renderer:n.renderer},{default:p(()=>[d(h,null,{default:p(()=>[S]),_:1}),d(y,{class:"p-6"},{default:p(()=>[o("div",H,[o("div",P,[$,i(),c(o("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>t.hostname=s),placeholder:"Hostname",class:"px-4 py-2 block w-full mb-4"},null,512),[[f,t.hostname]])]),o("div",F,[x,o("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:e[1]||(e[1]=s=>l.uploadFiles())}," Upload files "),o("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:e[2]||(e[2]=s=>t.uploadFolde())}," Upload folder "),o("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:e[3]||(e[3]=s=>l.uploadTar())}," Upload tar "),o("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:e[4]||(e[4]=s=>l.uploadZip())}," Upload zip "),o("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:e[5]||(e[5]=s=>t.files=[])}," Clear files ")]),o("div",V,[o("label",W,m(t.files.length),1)]),o("div",E,[z,o("button",{class:"rounded p-2 bg-slate-200",onClick:e[6]||(e[6]=s=>t.connect())}," Connect to Github "),o("button",{class:"rounded p-2 bg-slate-200 ml-4",onClick:e[7]||(e[7]=s=>t.connect())}," Select repository "),o("button",{class:"rounded p-2 bg-slate-200 ml-4",onClick:e[8]||(e[8]=s=>t.autodeploy=!t.autodeploy)},m(t.autodeploy?"Autodeploy on":"Autodeploy off"),1),i(),c(o("input",{"onUpdate:modelValue":e[9]||(e[9]=s=>t.repository=s),placeholder:"Repository url",class:"mt-2 px-4 py-2 w-full"},null,512),[[f,t.repository]]),i(),c(o("input",{"onUpdate:modelValue":e[10]||(e[10]=s=>t.branch=s),placeholder:"Branch name",class:"mt-2 px-4 py-2 w-full"},null,512),[[f,t.branch]])]),o("div",N,[o("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[11]||(e[11]=s=>l.deploy())}," Launch "),o("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[12]||(e[12]=s=>l.update())}," Update "),o("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[13]||(e[13]=s=>l.attach())}," Attach webhook "),o("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[14]||(e[14]=s=>l.detach())}," Detach webhook "),o("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[15]||(e[15]=s=>l.status())}," Status webhook "),i(),o("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[16]||(e[16]=s=>l.list())}," List "),o("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[17]||(e[17]=s=>l.remove())}," Remove ")])])]),_:1})]),_:1},8,["renderer"])}const O=T(A,[["render",R]]);export{O as default};