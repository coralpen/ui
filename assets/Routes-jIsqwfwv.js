import{W as v}from"./UtilityNavbar-B-j3bfdI.js";import f from"./TemplateDefault-Bv2r1MeS.js";import{S as g}from"./SectionHero-DQMH2l1I.js";import{_ as y,c as U,w as b,r as u,o as p,a as x,b as e,t as _,e as o,v as d,f as c,g as i,h as V,F as C}from"./index-CVJNd4yd.js";const z={inject:["menus","io"],props:["renderer"],components:{WrapperPage:v,TemplateDefault:f,SectionHero:g},data:()=>({address:"",items:null,service:"proxy",create:{hostname:"",redirect_url:"",redirect_status:"",port:"",force_https:!1,auto_ssl:!1,subdomain_fallback:!1,oauth_origin:!1}}),async created(){this.resetCreate(),await this.getItems(),await this.inspectLeader()},methods:{async inspectLeader(){var l;const s=await this.io.service("docker_nodes").find({query:{leader:!0}}),a=(l=s==null?void 0:s.data)==null?void 0:l[0];a&&(this.address=a.address)},openItem(s){var l;let a=["studio.vueplay.com","next.vueplay.com","localhost"].includes((l=parent==null?void 0:parent.location)==null?void 0:l.hostname)?":8000":"";window.open("http://"+s.hostname+a,"_blank")},async getItems(){try{this.items=await this.io.service(this.service).find({query:{}})}catch(s){console.log(s.message)}},async createItem(){try{await this.io.service(this.service).create(this.create),await this.getItems(),this.resetCreate()}catch(s){console.error(s),alert(s.message)}},async updateItem(s){try{const a=await this.io.service(this.service).update(s.id,s);for(const l of Object.keys(s))s[l]=a[l]}catch(a){console.error(a),alert(a.message)}},async saveItems(){var s;for(const a of((s=this.items)==null?void 0:s.data)||[])await this.updateItem(a);alert("All Updated")},async removeItem(s){try{await this.io.service(this.service).remove(s.id),await this.getItems()}catch(a){console.error(a),alert(a.message)}},resetCreate(){this.create={hostname:"",redirect_url:"",redirect_status:"",port:"",force_https:!1,auto_ssl:!1,subdomain_fallback:!1,oauth_origin:!1}}}},I=e("h1",{class:"font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase"}," Routes ",-1),M={class:"relative overflow-auto w-full"},H={class:"font-semibold text-center"},S=e("h2",{class:"text-center"}," Feathers = 5050, Static = 6060, Admin = 9090, Fallback = 8080, Http = 8000, Https = 443 ",-1),A=e("h2",{class:"text-center"}," Custom redir: http://localhost:8000/oauth/github?app_url=http://banana.localhost:8000 ",-1),B={class:"flex-row-reverse flex"},L={class:"overflow-auto shadow-sm my-8"},R={class:"border-collapse table-auto w-full text-sm"},D=e("thead",null,[e("tr",null,[e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"}," ID "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Hostname "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Redirect URL "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Redirect Status "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," App Port "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Auto SSL "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Force HTTPS "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Subdomain Fallback "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," OAuth Origin "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Created at "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Updated at "),e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," Publish "),e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," View "),e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," Remove ")])],-1),F={class:"bg-white dark:bg-slate-800"},P=e("td",{class:"text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"},null,-1),T={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},W={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},O={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},j={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},q={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},N={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},E={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},G={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},J=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[e("input",{class:"shadow"})],-1),K=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[e("input",{class:"shadow"})],-1),Q={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},X=e("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z","clip-rule":"evenodd"},null,-1),Y=e("path",{d:"M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"},null,-1),Z=[X,Y],$=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"},[e("path",{d:"M12 15a3 3 0 100-6 3 3 0 000 6z"}),e("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z","clip-rule":"evenodd"})])],-1),ee=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"},[e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})])],-1),te={class:"text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"},se={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ae=["onUpdate:modelValue"],re={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},oe=["onUpdate:modelValue"],le={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},de=["onUpdate:modelValue"],ne={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ce=["onUpdate:modelValue"],pe={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ie=["onUpdate:modelValue"],be={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ue=["onUpdate:modelValue"],he={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},xe=["onUpdate:modelValue"],_e={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},me=["onUpdate:modelValue"],ke={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},we=["onUpdate:modelValue"],ve={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},fe=["onUpdate:modelValue"],ge={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},ye=["onClick"],Ue=e("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z","clip-rule":"evenodd"},null,-1),Ve=e("path",{d:"M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"},null,-1),Ce=[Ue,Ve],ze={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},Ie=["onClick"],Me=e("path",{d:"M12 15a3 3 0 100-6 3 3 0 000 6z"},null,-1),He=e("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z","clip-rule":"evenodd"},null,-1),Se=[Me,He],Ae={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},Be=["onClick"],Le=e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"},null,-1),Re=[Le];function De(s,a,l,Fe,Pe,n){const m=u("SectionHero"),k=u("WrapperPage"),w=u("TemplateDefault");return p(),U(w,{title:"Hostname port routing",renderer:l.renderer},{default:b(()=>[x(m,null,{default:b(()=>[I]),_:1}),x(k,{class:"max-w-screen-2xl p-6"},{default:b(()=>{var h;return[e("div",M,[e("h2",H," Leader node address: "+_(s.address),1),S,A,e("div",B,[e("button",{class:"rounded p-2 bg-slate-200",onClick:a[0]||(a[0]=(...t)=>n.getItems&&n.getItems(...t))}," Reload "),e("button",{class:"mr-2 rounded p-2 bg-slate-200",onClick:a[1]||(a[1]=(...t)=>n.saveItems&&n.saveItems(...t))}," Save all ")]),e("div",L,[e("table",R,[D,e("tbody",F,[e("tr",null,[P,e("td",T,[o(e("input",{"onUpdate:modelValue":a[2]||(a[2]=t=>s.create.hostname=t),class:"shadow"},null,512),[[d,s.create.hostname]])]),e("td",W,[o(e("input",{"onUpdate:modelValue":a[3]||(a[3]=t=>s.create.redirect_url=t),class:"shadow"},null,512),[[d,s.create.redirect_url]])]),e("td",O,[o(e("input",{"onUpdate:modelValue":a[4]||(a[4]=t=>s.create.redirect_status=t),class:"shadow",type:"number"},null,512),[[d,s.create.redirect_status]])]),e("td",j,[o(e("input",{"onUpdate:modelValue":a[5]||(a[5]=t=>s.create.port=t),type:"number",class:"shadow"},null,512),[[d,s.create.port]])]),e("td",q,[o(e("input",{"onUpdate:modelValue":a[6]||(a[6]=t=>s.create.auto_ssl=t),class:"shadow",type:"checkbox"},null,512),[[c,s.create.auto_ssl]])]),e("td",N,[o(e("input",{"onUpdate:modelValue":a[7]||(a[7]=t=>s.create.force_https=t),class:"shadow",type:"checkbox"},null,512),[[c,s.create.force_https]])]),e("td",E,[o(e("input",{"onUpdate:modelValue":a[8]||(a[8]=t=>s.create.subdomain_fallback=t),class:"shadow",type:"checkbox"},null,512),[[c,s.create.subdomain_fallback]])]),e("td",G,[o(e("input",{"onUpdate:modelValue":a[9]||(a[9]=t=>s.create.oauth_origin=t),class:"shadow",type:"checkbox"},null,512),[[c,s.create.oauth_origin]])]),J,K,e("td",Q,[(p(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:a[10]||(a[10]=(...t)=>n.createItem&&n.createItem(...t))},Z))]),$,ee]),(p(!0),i(C,null,V((h=s.items)==null?void 0:h.data,t=>(p(),i("tr",null,[e("td",te,_(t.id),1),e("td",se,[o(e("input",{class:"shadow","onUpdate:modelValue":r=>t.hostname=r,style:{height:"20px"}},null,8,ae),[[d,t.hostname]])]),e("td",re,[o(e("input",{class:"shadow","onUpdate:modelValue":r=>t.redirect_url=r},null,8,oe),[[d,t.redirect_url]])]),e("td",le,[o(e("input",{class:"shadow","onUpdate:modelValue":r=>t.redirect_status=r,type:"number",style:{height:"20px"}},null,8,de),[[d,t.redirect_status]])]),e("td",ne,[o(e("input",{class:"shadow","onUpdate:modelValue":r=>t.port=r,type:"number"},null,8,ce),[[d,t.port]])]),e("td",pe,[o(e("input",{class:"shadow",type:"checkbox","onUpdate:modelValue":r=>t.auto_ssl=r},null,8,ie),[[c,t.auto_ssl]])]),e("td",be,[o(e("input",{class:"shadow",type:"checkbox","onUpdate:modelValue":r=>t.force_https=r},null,8,ue),[[c,t.force_https]])]),e("td",he,[o(e("input",{class:"shadow",type:"checkbox","onUpdate:modelValue":r=>t.subdomain_fallback=r},null,8,xe),[[c,t.subdomain_fallback]])]),e("td",_e,[o(e("input",{class:"shadow",type:"checkbox","onUpdate:modelValue":r=>t.oauth_origin=r},null,8,me),[[c,t.oauth_origin]])]),e("td",ke,[o(e("input",{class:"shadow","onUpdate:modelValue":r=>t.created_at=r},null,8,we),[[d,t.created_at]])]),e("td",ve,[o(e("input",{class:"shadow","onUpdate:modelValue":r=>t.updated_at=r},null,8,fe),[[d,t.updated_at]])]),e("td",ge,[(p(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r=>n.updateItem(t)},Ce,8,ye))]),e("td",ze,[(p(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r=>n.openItem(t)},Se,8,Ie))]),e("td",Ae,[(p(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r=>n.removeItem(t)},Re,8,Be))])]))),256))])])])])]}),_:1})]),_:1},8,["renderer"])}const qe=y(z,[["render",De]]);export{qe as default};
