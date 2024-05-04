import{W as m}from"./UtilityNavbar-Cd40bNCa.js";import{T as k}from"./TemplateHero-BZr4uiCz.js";import{_ as w,c as v,w as b,r as h,o as c,a as f,b as t,e as o,v as l,j as n,d as p,i as g,F as y,t as U}from"./index-wBVE613Q.js";const V={components:{WrapperPage:m,TemplateHero:k},inject:["menus","io"],data:()=>({items:null,service:"proxy",create:{hostname:"",redirect_url:"",redirect_status:"",port:"",force_https:!0,auto_ssl:!0,subdomain_fallback:!0,oauth_origin:!0}}),async created(){this.resetCreate(),await this.getItems()},methods:{openItem(s){var i;let a=["studio.vueplay.com","next.vueplay.com","localhost"].includes((i=parent==null?void 0:parent.location)==null?void 0:i.hostname)?":8000":"";window.open("http://"+s.hostname+a,"_blank")},async getItems(){try{this.items=await this.io.service(this.service).find({query:{}})}catch(s){console.log(s.message)}},async createItem(){try{await this.io.service(this.service).create(this.create),await this.getItems(),this.resetCreate()}catch(s){console.error(s),alert(s.message)}},async updateItem(s){try{const a=await this.io.service(this.service).update(s.id,s);for(const i of Object.keys(s))s[i]=a[i]}catch(a){console.error(a),alert(a.message)}},async saveItems(){var s;for(const a of((s=this.items)==null?void 0:s.data)||[])await this.updateItem(a);alert("All Updated")},async removeItem(s){try{await this.io.service(this.service).remove(s.id),await this.getItems()}catch(a){console.error(a),alert(a.message)}},resetCreate(){this.create={hostname:"",redirect_url:"",redirect_status:"",port:"",force_https:!0,auto_ssl:!0,subdomain_fallback:!0,oauth_origin:!0}}}},C={class:"relative overflow-auto w-full"},z=t("h2",{class:"text-center"}," Make an A Record on your domain to 127.0.0.1. ",-1),I=t("h2",{class:"text-center"}," Add hostname below and point it to wanted port or redirect url. ",-1),M=t("h2",{class:"text-center"}," Feathers port is 5050. ",-1),A=t("h2",{class:"text-center"}," Static port is 6060. ",-1),H=t("h2",{class:"text-center"}," Admin port is 9090. ",-1),S=t("h2",{class:"text-center"}," Fallback port is 8080. ",-1),B=t("h2",{class:"text-center"}," Http proxy port is 8000. ",-1),T=t("h2",{class:"text-center"}," Https proxy port is 443. ",-1),R=t("h2",{class:"text-center"}," Set oauth_origin in settings to match feathers url, so oauth callbacks is routed correctly ",-1),F=t("h2",{class:"text-center",style:{height:"24px"}}," Use ?app_url= to be redirected to another frontend url (Must be one below with oauth origin checked). ",-1),L=t("h2",{class:"text-center"}," If url should not be routed here, uncheck Auto SSL ",-1),P=t("h2",{class:"text-center"}," To allow redirect, url must be registered here ",-1),W=t("h2",{class:"text-center"}," http://localhost:8000/oauth/github?app_url=http://banana.localhost:8000 ",-1),j={class:"shadow-sm my-8"},D={class:"border-collapse table-auto w-full text-sm"},O=t("thead",null,[t("tr",null,[t("th",{class:"border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"}," ID "),t("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Hostname "),t("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Redirect URL "),t("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Redirect Status "),t("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," App Port "),t("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Auto SSL "),t("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Force HTTPS "),t("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Subdomain Fallback "),t("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," OAuth Origin "),t("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Created at "),t("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Updated at "),t("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," Publish "),t("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," View "),t("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," Remove ")])],-1),N={class:"bg-white dark:bg-slate-800"},q=t("td",{class:"text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"},null,-1),E={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},G={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},J={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},K={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},Q={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},X={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},Y={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},Z={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},$=t("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[t("input",{class:"shadow"})],-1),tt=t("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[t("input",{class:"shadow"})],-1),et={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},st=t("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z","clip-rule":"evenodd"},null,-1),at=t("path",{d:"M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"},null,-1),rt=[st,at],ot=t("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"},[t("path",{d:"M12 15a3 3 0 100-6 3 3 0 000 6z"}),t("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z","clip-rule":"evenodd"})])],-1),lt=t("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"},[t("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})])],-1),dt={class:"text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"},nt={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ct=["onUpdate:modelValue"],it={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},pt=["onUpdate:modelValue"],ut={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},bt=["onUpdate:modelValue"],ht={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},xt=["onUpdate:modelValue"],_t={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},mt=["onUpdate:modelValue"],kt={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},wt=["onUpdate:modelValue"],vt={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ft=["onUpdate:modelValue"],gt={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},yt=["onUpdate:modelValue"],Ut={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},Vt=["onUpdate:modelValue"],Ct={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},zt=["onUpdate:modelValue"],It={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},Mt=["onClick"],At=t("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z","clip-rule":"evenodd"},null,-1),Ht=t("path",{d:"M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"},null,-1),St=[At,Ht],Bt={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},Tt=["onClick"],Rt=t("path",{d:"M12 15a3 3 0 100-6 3 3 0 000 6z"},null,-1),Ft=t("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z","clip-rule":"evenodd"},null,-1),Lt=[Rt,Ft],Pt={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},Wt=["onClick"],jt=t("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"},null,-1),Dt=[jt];function Ot(s,a,i,Nt,qt,d){const x=h("WrapperPage"),_=h("TemplateHero");return c(),v(_,{title:"Hostname port routing"},{default:b(()=>[f(x,{class:"max-w-screen-2xl p-6"},{default:b(()=>{var u;return[t("div",C,[z,I,M,A,H,S,B,T,R,F,L,P,W,t("button",{class:"rounded p-2 bg-slate-200",onClick:a[0]||(a[0]=(...e)=>d.getItems&&d.getItems(...e))}," Reload "),t("button",{class:"ml-2 rounded p-2 bg-slate-200",onClick:a[1]||(a[1]=(...e)=>d.saveItems&&d.saveItems(...e))}," Save all "),t("div",j,[t("table",D,[O,t("tbody",N,[t("tr",null,[q,t("td",E,[o(t("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>s.create.hostname=e),class:"shadow"},null,512),[[l,s.create.hostname]])]),t("td",G,[o(t("input",{"onUpdate:modelValue":a[3]||(a[3]=e=>s.create.redirect_url=e),class:"shadow"},null,512),[[l,s.create.redirect_url]])]),t("td",J,[o(t("input",{"onUpdate:modelValue":a[4]||(a[4]=e=>s.create.redirect_status=e),class:"shadow",type:"number"},null,512),[[l,s.create.redirect_status]])]),t("td",K,[o(t("input",{"onUpdate:modelValue":a[5]||(a[5]=e=>s.create.port=e),type:"number",class:"shadow"},null,512),[[l,s.create.port]])]),t("td",Q,[o(t("input",{"onUpdate:modelValue":a[6]||(a[6]=e=>s.create.auto_ssl=e),class:"shadow",type:"checkbox"},null,512),[[n,s.create.auto_ssl]])]),t("td",X,[o(t("input",{"onUpdate:modelValue":a[7]||(a[7]=e=>s.create.force_https=e),class:"shadow",type:"checkbox"},null,512),[[n,s.create.force_https]])]),t("td",Y,[o(t("input",{"onUpdate:modelValue":a[8]||(a[8]=e=>s.create.subdomain_fallback=e),class:"shadow",type:"checkbox"},null,512),[[n,s.create.subdomain_fallback]])]),t("td",Z,[o(t("input",{"onUpdate:modelValue":a[9]||(a[9]=e=>s.create.oauth_origin=e),class:"shadow",type:"checkbox"},null,512),[[n,s.create.oauth_origin]])]),$,tt,t("td",et,[(c(),p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:a[10]||(a[10]=(...e)=>d.createItem&&d.createItem(...e))},rt))]),ot,lt]),(c(!0),p(y,null,g((u=s.items)==null?void 0:u.data,e=>(c(),p("tr",null,[t("td",dt,U(e.id),1),t("td",nt,[o(t("input",{class:"shadow","onUpdate:modelValue":r=>e.hostname=r,style:{height:"20px"}},null,8,ct),[[l,e.hostname]])]),t("td",it,[o(t("input",{class:"shadow","onUpdate:modelValue":r=>e.redirect_url=r},null,8,pt),[[l,e.redirect_url]])]),t("td",ut,[o(t("input",{class:"shadow","onUpdate:modelValue":r=>e.redirect_status=r,type:"number",style:{height:"20px"}},null,8,bt),[[l,e.redirect_status]])]),t("td",ht,[o(t("input",{class:"shadow","onUpdate:modelValue":r=>e.port=r,type:"number"},null,8,xt),[[l,e.port]])]),t("td",_t,[o(t("input",{class:"shadow",type:"checkbox","onUpdate:modelValue":r=>e.auto_ssl=r},null,8,mt),[[n,e.auto_ssl]])]),t("td",kt,[o(t("input",{class:"shadow",type:"checkbox","onUpdate:modelValue":r=>e.force_https=r},null,8,wt),[[n,e.force_https]])]),t("td",vt,[o(t("input",{class:"shadow",type:"checkbox","onUpdate:modelValue":r=>e.subdomain_fallback=r},null,8,ft),[[n,e.subdomain_fallback]])]),t("td",gt,[o(t("input",{class:"shadow",type:"checkbox","onUpdate:modelValue":r=>e.oauth_origin=r},null,8,yt),[[n,e.oauth_origin]])]),t("td",Ut,[o(t("input",{class:"shadow","onUpdate:modelValue":r=>e.created_at=r},null,8,Vt),[[l,e.created_at]])]),t("td",Ct,[o(t("input",{class:"shadow","onUpdate:modelValue":r=>e.updated_at=r},null,8,zt),[[l,e.updated_at]])]),t("td",It,[(c(),p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r=>d.updateItem(e)},St,8,Mt))]),t("td",Bt,[(c(),p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r=>d.openItem(e)},Lt,8,Tt))]),t("td",Pt,[(c(),p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r=>d.removeItem(e)},Dt,8,Wt))])]))),256))])])])])]}),_:1})]),_:1})}const Kt=w(V,[["render",Ot]]);export{Kt as default};