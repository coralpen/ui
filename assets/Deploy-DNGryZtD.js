import{W as g}from"./UtilityNavbar-D8Lxv-OX.js";import w from"./TemplateDefault-EP4Voq7U.js";import{S as k}from"./SectionHero-B1w7WNWQ.js";import{T as v,u as C,a as D}from"./unzipit.module-u-0me9ZN.js";import{_ as F,c as S,w as c,r as m,o as V,a as f,b as s,d as i,e as u,v as p,t as d}from"./index-Cg_k1P6_.js";const T={components:{WrapperPage:g,TemplateDefault:w,SectionHero:k},props:["renderer"],inject:["io"],data:()=>({dockerComposeFile:"",files:[],name:"",slug:"",repository:"",autodeploy:!1,adjustVolumes:!0,inherit:!0,branch:"main"}),methods:{async remove(){const t=prompt("Slug",this.slug),e=await this.io.service("apps").remove(t);console.log("res",e)},async list(){const t=await this.io.service("apps").find();console.log("res",t)},async attach(){const t=prompt("Slug",this.slug),e=await this.io.service("apps").patch(t,{attach:!0});console.log("res",e)},async detach(){const t=prompt("Slug",this.slug),e=await this.io.service("apps").patch(t,{detach:!0});console.log("res",e)},async status(){const t=prompt("Slug",this.slug),e=await this.io.service("apps").patch(t,{status:!0});console.log("res",e)},async start(){const t=prompt("Slug",this.slug),e=await this.io.service("apps").patch(t,{start:!0});console.log("res",e)},async stop(){const t=prompt("Slug",this.slug),e=await this.io.service("apps").patch(t,{stop:!0});console.log("res",e)},async build(){const t=prompt("Slug",this.slug),e=await this.io.service("apps").patch(t,{build:!0});console.log("res",e)},async destroy(){const t=prompt("Slug",this.slug),e=await this.io.service("apps").patch(t,{destroy:!0});console.log("res",e)},async compose(){const t=prompt("Slug",this.slug),e=await this.io.service("apps").patch(t,{compose:this.dockerComposeFile});console.log("res",e)},async deploy(){var t;try{console.log("files",this.files);const e=await this.io.service("apps").create({name:this.name,slug:this.slug,buffer:(t=this.files)!=null&&t.length?await this.packTar():null,repository:this.repository,branch:this.branch,autodeploy:this.autodeploy,dockerComposeFile:this.dockerComposeFile,adjustVolumes:this.adjustVolumes,inherit:this.inherit});console.log("res",e)}catch(e){console.log("error",e)}},async update(){var t;try{const e=await this.io.service("apps").update(this.slug,{buffer:(t=this.files)!=null&&t.length?await this.packTar():null,repository:this.repository,dockerComposeFile:this.dockerComposeFile,inherit:this.inherit,adjustVolumes:this.adjustVolumes,branch:this.branch,name:this.name,autodeploy:this.autodeploy});console.log("res",e)}catch(e){console.log("error",e)}},async packTar(){let t=new v;for await(let e of this.files)t.append(e.name,new Uint8Array(e.buffer));return t.out},async resolveDockerCompose(){const t=this.files.find(e=>e.name.endsWith("docker-compose.yml"));if(t){const e=new TextDecoder().decode(t.buffer);this.dockerComposeFile=e}},async uploadZip(){return this.files=[],this.dockerComposeFile="",new Promise(t=>{let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept=".zip",e.onchange=async()=>{let r=Array.from(e.files)[0];const{entries:a}=await C(await r.arrayBuffer());for await(const[n,l]of Object.entries(a))a[n].isDirectory||this.files.push({buffer:await l.arrayBuffer(),name:n});await this.resolveDockerCompose(),t()},e.click()})},async uploadTar(){return this.files=[],this.dockerComposeFile="",new Promise(t=>{let e=document.createElement("input");e.type="file",e.multiple=!1,e.accept=".tar",e.onchange=async()=>{let r=Array.from(e.files)[0],a=await D(await r.arrayBuffer());for await(let n of a)this.files.push({buffer:n.buffer,name:n.name});await this.resolveDockerCompose(),t()},e.click()})},async uploadFolder(){return this.files=[],this.dockerComposeFile="",new Promise(t=>{let e=document.createElement("input");e.type="file",e.multiple=!0,e.webkitdirectory=!0,e.dir=!0,e.onchange=async()=>{let r=Array.from(e.files);for await(let a of r)this.files.push({buffer:await a.arrayBuffer(),name:a.webkitRelativePath});await this.resolveDockerCompose(),t()},e.click()})},async uploadFiles(){return this.files=[],this.dockerComposeFile="",new Promise(t=>{let e=document.createElement("input");e.type="file",e.multiple=!0,e.onchange=async()=>{let r=Array.from(e.files);for await(let a of r){let n=await a.arrayBuffer();this.files.push({buffer:n,name:"root/"+a.name})}await this.resolveDockerCompose(),t()},e.click()})}}},j=s("h1",{class:"font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase"}," Deploy Docker App ",-1),U={class:"mt-8 mb-20 relative overflow-auto w-full"},A={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},B=s("label",{class:"block my-2"}," Basic app settings ",-1),$={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},P=s("label",{class:"block my-2"}," Upload using drop of Tar / Zip / Folder / Docker Compose File / Docker File ",-1),W={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},E={class:"block my-2"},N={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},z=s("label",{class:"block my-2"}," Clone using Github (With option to autodeploy using push webhooks) ",-1),H=s("div",{class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},[s("label",{class:"block my-2"}," One click installation browsing images from docker hub ")],-1),R={class:"p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"},Z=s("label",{class:"block my-2"},"Docker Compose",-1),x={class:"text-right"};function G(t,e,r,a,n,l){const h=m("SectionHero"),y=m("WrapperPage"),b=m("TemplateDefault");return V(),S(b,{renderer:r.renderer},{default:c(()=>[f(h,null,{default:c(()=>[j]),_:1}),f(y,{class:"p-6"},{default:c(()=>[s("div",U,[s("div",A,[B,i(),u(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.name=o),placeholder:"Name",class:"px-4 py-2 block w-full mb-4"},null,512),[[p,t.name]]),u(s("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.slug=o),placeholder:"Slug",class:"px-4 py-2 block w-full"},null,512),[[p,t.slug]])]),s("div",$,[P,s("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:e[2]||(e[2]=o=>l.uploadFiles())}," Upload files "),s("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:e[3]||(e[3]=o=>t.uploadFolde())}," Upload folder "),s("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:e[4]||(e[4]=o=>l.uploadTar())}," Upload tar "),s("button",{class:"rounded p-2 bg-slate-200 block w-full mt-2",onClick:e[5]||(e[5]=o=>l.uploadZip())}," Upload zip ")]),s("div",W,[s("label",E,d(t.files.length),1)]),s("div",N,[z,s("button",{class:"rounded p-2 bg-slate-200",onClick:e[6]||(e[6]=o=>t.connect())}," Connect to Github "),s("button",{class:"rounded p-2 bg-slate-200 ml-4",onClick:e[7]||(e[7]=o=>t.connect())}," Select repository "),s("button",{class:"rounded p-2 bg-slate-200 ml-4",onClick:e[8]||(e[8]=o=>t.autodeploy=!t.autodeploy)},d(t.autodeploy?"Autodeploy on":"Autodeploy off"),1),s("button",{class:"rounded p-2 bg-slate-200 ml-4",onClick:e[9]||(e[9]=o=>t.adjustVolumes=!t.adjustVolumes)},d(t.adjustVolumes?"Adjust volumes on":"Adjust volumes off"),1),i(),u(s("input",{"onUpdate:modelValue":e[10]||(e[10]=o=>t.repository=o),placeholder:"Repository url",class:"mt-2 px-4 py-2 w-full"},null,512),[[p,t.repository]]),u(s("input",{"onUpdate:modelValue":e[11]||(e[11]=o=>t.branch=o),placeholder:"Branch",class:"mt-2 px-4 py-2 w-full"},null,512),[[p,t.branch]])]),H,s("div",R,[Z,s("button",{class:"rounded p-2 bg-slate-200 my-4",onClick:e[12]||(e[12]=o=>t.inherit=!t.inherit)},d(t.inherit?"Inherit original on":"Inherit original off"),1),i(),u(s("textarea",{class:"w-full p-4","onUpdate:modelValue":e[13]||(e[13]=o=>t.dockerComposeFile=o),rows:"10",placeholder:"docker-compose.override.yml"},null,512),[[p,t.dockerComposeFile]])]),s("div",x,[s("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[14]||(e[14]=o=>l.deploy())}," Launch "),s("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[15]||(e[15]=o=>l.update())}," Update "),s("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[16]||(e[16]=o=>l.attach())}," Attach webhook "),s("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[17]||(e[17]=o=>l.detach())}," Detach webhook "),s("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[18]||(e[18]=o=>l.status())}," Status webhook "),i(),s("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[19]||(e[19]=o=>l.list())}," List "),s("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[20]||(e[20]=o=>l.start())}," Start "),i(),s("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[21]||(e[21]=o=>l.stop())}," Stop "),i(),s("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[22]||(e[22]=o=>l.build())}," Build "),i(),s("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[23]||(e[23]=o=>l.destroy())}," Destroy "),i(),s("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[24]||(e[24]=o=>l.compose())}," Compose "),i(),s("button",{class:"py-4 p-2 mt-4 w-full rounded bg-slate-200",onClick:e[25]||(e[25]=o=>l.remove())}," Remove ")])])]),_:1})]),_:1},8,["renderer"])}const J=F(T,[["render",G]]);export{J as default};
