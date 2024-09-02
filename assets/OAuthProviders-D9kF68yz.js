import{W as w}from"./UtilityNavbar-CnWCl2U4.js";import f from"./TemplateDefault-pDWMJ1PC.js";import{S as y}from"./SectionHero-B15bRrYC.js";import{_ as g,c as U,w as i,r as u,o as c,a as h,b as e,e as l,v as o,i as k,g as p,h as V,F as C,t as z}from"./index-DLFP_OzJ.js";const I={components:{WrapperPage:w,TemplateDefault:f,SectionHero:y},inject:["menus","io","server"],props:["renderer"],data:()=>({items:null,service:"oauth_providers",create:{provider:"",key:"",secret:"",scope:"",nonce:!1,token:"",setup_url:""}}),async created(){try{this.resetCreate(),await this.getItems()}catch{}},methods:{consent(a,s="github"){if(!a)return;const d=this.server.endsWith("/")?`oauth/${s}`:`/oauth/${s}`;window.open(a+`&redirect_uri=${d}/callback?app_url=${location.origin}/oauth-token-stored`,"_blank")},async getItems(){this.items=await this.io.service(this.service).find({query:{}})},async createItem(){try{await this.io.service(this.service).create(this.create),await this.getItems(),this.resetCreate()}catch(a){console.error(a),alert(a.message)}},async updateItem(a){let s={...a};delete s.consent_url,delete s.callback_url;try{const d=await this.io.service(this.service).update(a.id,s);for(const b of Object.keys(a))a[b]=d[b]}catch(d){console.error(d),alert(d.message)}},async removeItem(a){try{await this.io.service(this.service).remove(a.id),await this.getItems()}catch(s){console.error(s),alert(s.message)}},resetCreate(){this.create={provider:"",key:"",secret:"",scope:"",nonce:!1,token:"",setup_url:""}}}},M=e("h1",{class:"font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase"}," Authentication ",-1),A={class:"flex-col flex relative overflow-auto w-full"},B={class:"flex-row-reverse flex"},S={class:"overflow-auto shadow-sm my-8"},H={class:"border-collapse table-auto w-full text-sm"},D=e("thead",null,[e("tr",null,[e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"}," ID "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Provider "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Key "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Secret "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Scope "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Nonce "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Token "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Setup URL "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Callback URL "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Consent URL "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Created at "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Updated at "),e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," Publish "),e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," Remove ")])],-1),L={class:"bg-white dark:bg-slate-800"},P=e("td",{class:"text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"},null,-1),R={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},T={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},W={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},N={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},$={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},j={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},F={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},O=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[e("input",{class:"shadow",readonly:"readonly"})],-1),q=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[e("input",{class:"shadow",readonly:"readonly"})],-1),E=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[e("input",{class:"shadow",readonly:"readonly"})],-1),K=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[e("input",{class:"shadow",readonly:"readonly"})],-1),G={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},J=e("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z","clip-rule":"evenodd"},null,-1),Q=e("path",{d:"M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"},null,-1),X=[J,Q],Y=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"},[e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})])],-1),Z={class:"text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"},ee={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},te=["onUpdate:modelValue"],ae={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},se=["onUpdate:modelValue"],re={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},le=["onUpdate:modelValue"],oe={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},de=["onUpdate:modelValue"],ne={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ce=["onUpdate:modelValue"],pe={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},be=["onUpdate:modelValue"],ie={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ue=["onUpdate:modelValue"],xe={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},he=["onUpdate:modelValue"],ke={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},_e=["onClick","onUpdate:modelValue"],me={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ve=["onUpdate:modelValue"],we={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},fe=["onUpdate:modelValue"],ye={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},ge=["onClick"],Ue=e("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z","clip-rule":"evenodd"},null,-1),Ve=e("path",{d:"M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"},null,-1),Ce=[Ue,Ve],ze={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},Ie=["onClick"],Me=e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"},null,-1),Ae=[Me];function Be(a,s,d,b,Se,n){const _=u("SectionHero"),m=u("WrapperPage"),v=u("TemplateDefault");return c(),U(v,{renderer:d.renderer},{default:i(()=>[h(_,null,{default:i(()=>[M]),_:1}),h(m,{class:"max-w-screen-2xl p-6"},{default:i(()=>{var x;return[e("div",A,[e("div",B,[e("button",{class:"rounded p-2 bg-slate-200",onClick:s[0]||(s[0]=(...t)=>n.getItems&&n.getItems(...t))}," Reload ")]),e("div",S,[e("table",H,[D,e("tbody",L,[e("tr",null,[P,e("td",R,[l(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>a.create.provider=t),class:"shadow"},null,512),[[o,a.create.provider]])]),e("td",T,[l(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>a.create.key=t),class:"shadow"},null,512),[[o,a.create.key]])]),e("td",W,[l(e("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>a.create.secret=t),class:"shadow"},null,512),[[o,a.create.secret]])]),e("td",N,[l(e("input",{"onUpdate:modelValue":s[4]||(s[4]=t=>a.create.scope=t),class:"shadow"},null,512),[[o,a.create.scope]])]),e("td",$,[l(e("input",{"onUpdate:modelValue":s[5]||(s[5]=t=>a.create.nonce=t),class:"shadow",type:"checkbox"},null,512),[[k,a.create.nonce]])]),e("td",j,[l(e("input",{"onUpdate:modelValue":s[6]||(s[6]=t=>a.create.token=t),class:"shadow"},null,512),[[o,a.create.token]])]),e("td",F,[l(e("input",{"onUpdate:modelValue":s[7]||(s[7]=t=>a.create.setup_url=t),class:"shadow"},null,512),[[o,a.create.setup_url]])]),O,q,E,K,e("td",G,[(c(),p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:s[8]||(s[8]=(...t)=>n.createItem&&n.createItem(...t))},X))]),Y]),(c(!0),p(C,null,V((x=a.items)==null?void 0:x.data,t=>(c(),p("tr",null,[e("td",Z,z(t.id),1),e("td",ee,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.provider=r,style:{height:"20px"}},null,8,te),[[o,t.provider]])]),e("td",ae,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.key=r},null,8,se),[[o,t.key]])]),e("td",re,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.secret=r},null,8,le),[[o,t.secret]])]),e("td",oe,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.scope=r},null,8,de),[[o,t.scope]])]),e("td",ne,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.nonce=r,type:"checkbox"},null,8,ce),[[k,t.nonce]])]),e("td",pe,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.token=r},null,8,be),[[o,t.token]])]),e("td",ie,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.setup_url=r},null,8,ue),[[o,t.setup_url]])]),e("td",xe,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.callback_url=r,readonly:"readonly"},null,8,he),[[o,t.callback_url]])]),e("td",ke,[l(e("input",{onClick:r=>n.consent(t.consent_url),class:"shadow","onUpdate:modelValue":r=>t.consent_url=r,readonly:"readonly"},null,8,_e),[[o,t.consent_url]])]),e("td",me,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.created_at=r,readonly:"readonly"},null,8,ve),[[o,t.created_at]])]),e("td",we,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.updated_at=r,readonly:"readonly"},null,8,fe),[[o,t.updated_at]])]),e("td",ye,[(c(),p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r=>n.updateItem(t)},Ce,8,ge))]),e("td",ze,[(c(),p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r=>n.removeItem(t)},Ae,8,Ie))])]))),256))])])])])]}),_:1})]),_:1},8,["renderer"])}const Re=g(I,[["render",Be]]);export{Re as default};
