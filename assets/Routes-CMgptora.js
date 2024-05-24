import{W as v}from"./UtilityNavbar-DziIr_R2.js";import g from"./TemplateDefault-BEHZ3Y7q.js";import{S as y}from"./SectionHero-CZU6UWmw.js";import{_ as U,c as V,w as u,r as h,o as p,a as _,b as e,t as m,e as l,v as o,f as n,g as i,h as C,F as z}from"./index-qDT5arRp.js";const I={inject:["menus","io"],props:["renderer"],components:{WrapperPage:v,TemplateDefault:g,SectionHero:y},data:()=>({address:"",items:null,service:"proxy",create:{hostname:"",redirect_url:"",redirect_status:302,dns_challenge:"",dns_challenge_ready:!1,port:"",force_https:!1,auto_ssl:!1,subdomain_fallback:!1,oauth_origin:!1}}),async created(){try{this.resetCreate(),await this.getItems(),await this.inspectLeader()}catch{}},methods:{async inspectLeader(){var s;const a=await this.io.service("state").get();if(a.leaderIP)this.address=a.leaderIP;else{const d=await this.io.service("docker_nodes").find({query:{leader:!0}}),b=(s=d==null?void 0:d.data)==null?void 0:s[0];b&&(this.address=b.address)}},openItem(a){var d;let s=["studio.vueplay.com","next.vueplay.com","localhost"].includes((d=parent==null?void 0:parent.location)==null?void 0:d.hostname)?":8000":"";window.open("http://"+a.hostname+s,"_blank")},async getItems(){try{this.items=await this.io.service(this.service).find({query:{}})}catch(a){console.log(a.message)}},async createItem(){try{await this.io.service(this.service).create(this.create),await this.getItems(),this.resetCreate()}catch(a){console.error(a),alert(a.message)}},async updateItem(a){try{const s=await this.io.service(this.service).update(a.id,a);for(const d of Object.keys(a))a[d]=s[d]}catch(s){console.error(s),alert(s.message)}},async saveItems(){var a;for(const s of((a=this.items)==null?void 0:a.data)||[])await this.updateItem(s);alert("All Updated")},async removeItem(a){try{await this.io.service(this.service).remove(a.id),await this.getItems()}catch(s){console.error(s),alert(s.message)}},resetCreate(){this.create={hostname:"",redirect_url:"",redirect_status:302,dns_challenge:"",dns_challenge_ready:!1,port:"",force_https:!1,auto_ssl:!1,subdomain_fallback:!1,oauth_origin:!1}}}},M=e("h1",{class:"font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase"}," Routes ",-1),S={class:"relative overflow-auto w-full"},A={class:"font-semibold text-center"},H=e("h2",{class:"text-center"}," Feathers = 5050, Static = 6060, Admin = 9090, Fallback = 8080, Http = 80 or 8000, Https = 443 ",-1),B=e("h2",{class:"text-center"}," Custom OAuth redirect: http://localhost:8000/oauth/github?app_url=http://any.localhost:8000 ",-1),L={class:"flex-row-reverse flex"},P={class:"overflow-auto shadow-sm my-8"},R={class:"border-collapse table-auto w-full text-sm"},D=e("thead",null,[e("tr",null,[e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"}," ID "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Hostname "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Redirect URL "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Redirect Status "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," App Port "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," DNS Challenge "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Challenge Ready "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Auto SSL "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Force HTTPS "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Subdomain Fallback "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," OAuth Origin "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Created at "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Updated at "),e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," Publish "),e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," View "),e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," Remove ")])],-1),F={class:"bg-white dark:bg-slate-800"},T=e("td",{class:"text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"},null,-1),O={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},W={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},N={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},j={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},q={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},E={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},G={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},J={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},K={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},Q={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},X=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[e("input",{class:"shadow"})],-1),Y=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[e("input",{class:"shadow"})],-1),Z={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},$=e("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z","clip-rule":"evenodd"},null,-1),ee=e("path",{d:"M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"},null,-1),te=[$,ee],ae=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"},[e("path",{d:"M12 15a3 3 0 100-6 3 3 0 000 6z"}),e("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z","clip-rule":"evenodd"})])],-1),se=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"},[e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})])],-1),re={class:"text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"},le={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},oe=["onUpdate:modelValue"],de={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ne=["onUpdate:modelValue"],ce={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},pe=["onUpdate:modelValue"],ie={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},be=["onUpdate:modelValue"],ue={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},he=["onUpdate:modelValue"],xe={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},_e=["onUpdate:modelValue"],me={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ke=["onUpdate:modelValue"],we={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},fe=["onUpdate:modelValue"],ve={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ge=["onUpdate:modelValue"],ye={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},Ue=["onUpdate:modelValue"],Ve={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},Ce=["onUpdate:modelValue"],ze={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},Ie=["onUpdate:modelValue"],Me={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},Se=["onClick"],Ae=e("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z","clip-rule":"evenodd"},null,-1),He=e("path",{d:"M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"},null,-1),Be=[Ae,He],Le={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},Pe=["onClick"],Re=e("path",{d:"M12 15a3 3 0 100-6 3 3 0 000 6z"},null,-1),De=e("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z","clip-rule":"evenodd"},null,-1),Fe=[Re,De],Te={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},Oe=["onClick"],We=e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"},null,-1),Ne=[We];function je(a,s,d,b,qe,c){const k=h("SectionHero"),w=h("WrapperPage"),f=h("TemplateDefault");return p(),V(f,{title:"Hostname port routing",renderer:d.renderer},{default:u(()=>[_(k,null,{default:u(()=>[M]),_:1}),_(w,{class:"max-w-screen-2xl p-6"},{default:u(()=>{var x;return[e("div",S,[e("h2",A," Leader node address: "+m(a.address),1),H,B,e("div",L,[e("button",{class:"rounded p-2 bg-slate-200",onClick:s[0]||(s[0]=(...t)=>c.getItems&&c.getItems(...t))}," Reload "),e("button",{class:"mr-2 rounded p-2 bg-slate-200",onClick:s[1]||(s[1]=(...t)=>c.saveItems&&c.saveItems(...t))}," Save all ")]),e("div",P,[e("table",R,[D,e("tbody",F,[e("tr",null,[T,e("td",O,[l(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>a.create.hostname=t),class:"shadow"},null,512),[[o,a.create.hostname]])]),e("td",W,[l(e("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>a.create.redirect_url=t),class:"shadow"},null,512),[[o,a.create.redirect_url]])]),e("td",N,[l(e("input",{"onUpdate:modelValue":s[4]||(s[4]=t=>a.create.redirect_status=t),class:"shadow",type:"number"},null,512),[[o,a.create.redirect_status]])]),e("td",j,[l(e("input",{"onUpdate:modelValue":s[5]||(s[5]=t=>a.create.port=t),type:"number",class:"shadow"},null,512),[[o,a.create.port]])]),e("td",q,[l(e("input",{"onUpdate:modelValue":s[6]||(s[6]=t=>a.create.dns_challenge=t),class:"shadow"},null,512),[[o,a.create.dns_challenge]])]),e("td",E,[l(e("input",{"onUpdate:modelValue":s[7]||(s[7]=t=>a.create.dns_challenge_ready=t),class:"shadow",type:"checkbox"},null,512),[[n,a.create.dns_challenge_ready]])]),e("td",G,[l(e("input",{"onUpdate:modelValue":s[8]||(s[8]=t=>a.create.auto_ssl=t),class:"shadow",type:"checkbox"},null,512),[[n,a.create.auto_ssl]])]),e("td",J,[l(e("input",{"onUpdate:modelValue":s[9]||(s[9]=t=>a.create.force_https=t),class:"shadow",type:"checkbox"},null,512),[[n,a.create.force_https]])]),e("td",K,[l(e("input",{"onUpdate:modelValue":s[10]||(s[10]=t=>a.create.subdomain_fallback=t),class:"shadow",type:"checkbox"},null,512),[[n,a.create.subdomain_fallback]])]),e("td",Q,[l(e("input",{"onUpdate:modelValue":s[11]||(s[11]=t=>a.create.oauth_origin=t),class:"shadow",type:"checkbox"},null,512),[[n,a.create.oauth_origin]])]),X,Y,e("td",Z,[(p(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:s[12]||(s[12]=(...t)=>c.createItem&&c.createItem(...t))},te))]),ae,se]),(p(!0),i(z,null,C((x=a.items)==null?void 0:x.data,t=>(p(),i("tr",null,[e("td",re,m(t.id),1),e("td",le,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.hostname=r,style:{height:"20px"}},null,8,oe),[[o,t.hostname]])]),e("td",de,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.redirect_url=r},null,8,ne),[[o,t.redirect_url]])]),e("td",ce,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.redirect_status=r,type:"number",style:{height:"20px"}},null,8,pe),[[o,t.redirect_status]])]),e("td",ie,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.port=r,type:"number"},null,8,be),[[o,t.port]])]),e("td",ue,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.dns_challenge=r},null,8,he),[[o,t.dns_challenge]])]),e("td",xe,[l(e("input",{class:"shadow",type:"checkbox","onUpdate:modelValue":r=>t.dns_challenge_ready=r},null,8,_e),[[n,t.dns_challenge_ready]])]),e("td",me,[l(e("input",{class:"shadow",type:"checkbox","onUpdate:modelValue":r=>t.auto_ssl=r},null,8,ke),[[n,t.auto_ssl]])]),e("td",we,[l(e("input",{class:"shadow",type:"checkbox","onUpdate:modelValue":r=>t.force_https=r},null,8,fe),[[n,t.force_https]])]),e("td",ve,[l(e("input",{class:"shadow",type:"checkbox","onUpdate:modelValue":r=>t.subdomain_fallback=r},null,8,ge),[[n,t.subdomain_fallback]])]),e("td",ye,[l(e("input",{class:"shadow",type:"checkbox","onUpdate:modelValue":r=>t.oauth_origin=r},null,8,Ue),[[n,t.oauth_origin]])]),e("td",Ve,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.created_at=r},null,8,Ce),[[o,t.created_at]])]),e("td",ze,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.updated_at=r},null,8,Ie),[[o,t.updated_at]])]),e("td",Me,[(p(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r=>c.updateItem(t)},Be,8,Se))]),e("td",Le,[(p(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r=>c.openItem(t)},Fe,8,Pe))]),e("td",Te,[(p(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r=>c.removeItem(t)},Ne,8,Oe))])]))),256))])])])])]}),_:1})]),_:1},8,["renderer"])}const Qe=U(I,[["render",je]]);export{Qe as default};
