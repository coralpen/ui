import{W as m}from"./UtilityNavbar-DUGzOKkF.js";import{T as _}from"./TemplateHero-tDolMKT9.js";import{_ as v,c as k,w as b,r as u,o,a as w,b as e,h as d,v as c,d as n,e as f,F as g,t as y}from"./index-CLSHeoV0.js";const C={inject:["menus","io"],components:{WrapperPage:m,TemplateHero:_},data:()=>({items:null,service:"settings",create:{key:"",value:""}}),async created(){this.resetCreate(),await this.getItems()},methods:{async renewSSLCertificates(){await this.io.service("jobs").remove("renew-ssl-certificates")},async getItems(){this.items=await this.io.service(this.service).find({query:{}})},async createItem(){try{await this.io.service(this.service).create(this.create),await this.getItems(),this.resetCreate()}catch(a){console.error(a),alert(a.message)}},async updateItem(a){try{const s=await this.io.service(this.service).update(a.id,a);for(const i of Object.keys(a))a[i]=s[i]}catch(s){console.error(s),alert(s.message)}},async removeItem(a){try{await this.io.service(this.service).remove(a.id),await this.getItems()}catch(s){console.error(s),alert(s.message)}},resetCreate(){this.create={key:"",value:""}}}},z={class:"relative overflow-auto w-full"},V=e("h2",{class:"text-center"}," Simply key value pairs ",-1),I={class:"shadow-sm my-8"},U={class:"border-collapse table-auto w-full text-sm"},S=e("thead",null,[e("tr",null,[e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"}," ID "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Key "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Value "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Created at "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Updated at "),e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," Publish "),e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," Remove ")])],-1),M={class:"bg-white dark:bg-slate-800"},B=e("td",{class:"text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"},null,-1),H={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},A={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},L=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[e("input",{class:"shadow"})],-1),T=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[e("input",{class:"shadow"})],-1),P={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},W=e("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z","clip-rule":"evenodd"},null,-1),j=e("path",{d:"M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"},null,-1),D=[W,j],R=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"},[e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})])],-1),F={class:"text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"},N={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},q=["onUpdate:modelValue"],E={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},K=["onUpdate:modelValue"],O={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},G=["onUpdate:modelValue"],J={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},Q=["onUpdate:modelValue"],X={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},Y=["onClick"],Z=e("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z","clip-rule":"evenodd"},null,-1),$=e("path",{d:"M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"},null,-1),ee=[Z,$],te={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},se=["onClick"],ae=e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"},null,-1),re=[ae];function le(a,s,i,oe,de,l){const h=u("WrapperPage"),x=u("TemplateHero");return o(),k(x,{title:"Settings"},{default:b(()=>[w(h,{class:"max-w-screen-2xl p-6"},{default:b(()=>{var p;return[e("div",z,[V,e("button",{class:"rounded p-2 bg-slate-200",onClick:s[0]||(s[0]=(...t)=>l.getItems&&l.getItems(...t))}," Reload "),e("button",{class:"rounded p-2 bg-slate-200",onClick:s[1]||(s[1]=(...t)=>l.renewSSLCertificates&&l.renewSSLCertificates(...t))}," Renew certificates "),e("div",I,[e("table",U,[S,e("tbody",M,[e("tr",null,[B,e("td",H,[d(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>a.create.key=t),class:"shadow"},null,512),[[c,a.create.key]])]),e("td",A,[d(e("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>a.create.value=t),class:"shadow"},null,512),[[c,a.create.value]])]),L,T,e("td",P,[(o(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:s[4]||(s[4]=(...t)=>l.createItem&&l.createItem(...t))},D))]),R]),(o(!0),n(g,null,f((p=a.items)==null?void 0:p.data,t=>(o(),n("tr",null,[e("td",F,y(t.id),1),e("td",N,[d(e("input",{class:"shadow","onUpdate:modelValue":r=>t.key=r},null,8,q),[[c,t.key]])]),e("td",E,[d(e("input",{class:"shadow","onUpdate:modelValue":r=>t.value=r,style:{height:"20px"}},null,8,K),[[c,t.value]])]),e("td",O,[d(e("input",{class:"shadow","onUpdate:modelValue":r=>t.created_at=r},null,8,G),[[c,t.created_at]])]),e("td",J,[d(e("input",{class:"shadow","onUpdate:modelValue":r=>t.updated_at=r},null,8,Q),[[c,t.updated_at]])]),e("td",X,[(o(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r=>l.updateItem(t)},ee,8,Y))]),e("td",te,[(o(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r=>l.removeItem(t)},re,8,se))])]))),256))])])])])]}),_:1})]),_:1})}const pe=v(C,[["render",le]]);export{pe as default};
