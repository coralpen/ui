import{W as k}from"./UtilityNavbar-B3GCTqMC.js";import{T as _}from"./TemplateHero-DfBqh-GK.js";import{_ as w,c as v,w as p,r as u,o as n,a as f,b as e,d as l,v as d,e as h,f as c,g,F as I,t as U}from"./index-WjtnPbmN.js";const V={inject:["menus","io"],components:{WrapperPage:k,TemplateHero:_},data:()=>({items:null,service:"users",create:{email:"",email_verified:"",roles:"",name:"",picture:"",locale:"",googleId:"",facebookId:"",githubId:"",twitterId:""}}),async created(){this.resetCreate(),await this.getItems()},methods:{async getItems(){this.items=await this.io.service(this.service).find({query:{}})},async createItem(){try{await this.io.service(this.service).create(this.create),await this.getItems(),this.resetCreate()}catch(s){console.error(s),alert(s.message)}},async updateItem(s){try{const a=await this.io.service(this.service).update(s.id,s);for(const i of Object.keys(s))s[i]=a[i]}catch(a){console.error(a),alert(a.message)}},async removeItem(s){try{await this.io.service(this.service).remove(s.id),await this.getItems()}catch(a){console.error(a),alert(a.message)}},resetCreate(){this.create={email:"",email_verified:"",roles:"",name:"",picture:"",locale:"",googleId:"",facebookId:"",githubId:"",twitterId:""}}}},y={class:"relative overflow-auto w-full"},C={class:"shadow-sm my-8"},z={class:"border-collapse table-auto w-full text-sm"},M=e("thead",null,[e("tr",null,[e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"}," ID "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Email "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Email "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Name "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Picture "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Roles "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Locale "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Github ID "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Facebook ID "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Google ID "),e("th",{class:"text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Twitter ID "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Created at "),e("th",{class:"whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200"}," Updated at "),e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," Publish "),e("th",{class:"border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center"}," Remove ")])],-1),B={class:"bg-white dark:bg-slate-800"},D=e("td",{class:"text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"},null,-1),H={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},A={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},T={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},P={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},L={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},W={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},E={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},F={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},N={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},R={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},j=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[e("input",{class:"shadow"})],-1),G=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},[e("input",{class:"shadow"})],-1),q={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},O=e("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z","clip-rule":"evenodd"},null,-1),S=e("path",{d:"M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"},null,-1),J=[O,S],K=e("td",{class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"},[e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})])],-1),Q={class:"text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"},X={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},Y=["onUpdate:modelValue"],Z={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},$=["onUpdate:modelValue"],ee={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},te=["onUpdate:modelValue"],ae={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},se=["onUpdate:modelValue"],re={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},le=["onUpdate:modelValue"],de={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},oe=["onUpdate:modelValue"],ne={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ce=["onUpdate:modelValue"],ie={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},be=["onUpdate:modelValue"],pe={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ue=["onUpdate:modelValue"],he={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},xe=["onUpdate:modelValue"],me={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},ke=["onUpdate:modelValue"],_e={class:"border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"},we=["onUpdate:modelValue"],ve={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},fe=["onClick"],ge=e("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z","clip-rule":"evenodd"},null,-1),Ie=e("path",{d:"M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"},null,-1),Ue=[ge,Ie],Ve={class:"border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"},ye=["onClick"],Ce=e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"},null,-1),ze=[Ce];function Me(s,a,i,Be,De,o){const x=u("WrapperPage"),m=u("TemplateHero");return n(),v(m,{title:"Users"},{default:p(()=>[f(x,{class:"max-w-screen-2xl p-6"},{default:p(()=>{var b;return[e("div",y,[e("button",{class:"rounded p-2 bg-slate-200",onClick:a[0]||(a[0]=(...t)=>o.getItems&&o.getItems(...t))}," Reload "),e("div",C,[e("table",z,[M,e("tbody",B,[e("tr",null,[D,e("td",H,[l(e("input",{"onUpdate:modelValue":a[1]||(a[1]=t=>s.create.email=t),class:"shadow"},null,512),[[d,s.create.email]])]),e("td",A,[l(e("input",{class:"shadow",type:"checkbox","onUpdate:modelValue":a[2]||(a[2]=t=>s.create.email_verified=t)},null,512),[[h,s.create.email_verified]])]),e("td",T,[l(e("input",{"onUpdate:modelValue":a[3]||(a[3]=t=>s.create.name=t),class:"shadow"},null,512),[[d,s.create.name]])]),e("td",P,[l(e("input",{"onUpdate:modelValue":a[4]||(a[4]=t=>s.create.picture=t),class:"shadow"},null,512),[[d,s.create.picture]])]),e("td",L,[l(e("input",{"onUpdate:modelValue":a[5]||(a[5]=t=>s.create.roles=t),class:"shadow"},null,512),[[d,s.create.roles]])]),e("td",W,[l(e("input",{"onUpdate:modelValue":a[6]||(a[6]=t=>s.create.locale=t),class:"shadow"},null,512),[[d,s.create.locale]])]),e("td",E,[l(e("input",{"onUpdate:modelValue":a[7]||(a[7]=t=>s.create.githubId=t),class:"shadow"},null,512),[[d,s.create.githubId]])]),e("td",F,[l(e("input",{"onUpdate:modelValue":a[8]||(a[8]=t=>s.create.facebookId=t),class:"shadow"},null,512),[[d,s.create.facebookId]])]),e("td",N,[l(e("input",{"onUpdate:modelValue":a[9]||(a[9]=t=>s.create.googleId=t),class:"shadow"},null,512),[[d,s.create.googleId]])]),e("td",R,[l(e("input",{"onUpdate:modelValue":a[10]||(a[10]=t=>s.create.twitterId=t),class:"shadow"},null,512),[[d,s.create.twitterId]])]),j,G,e("td",q,[(n(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:a[11]||(a[11]=(...t)=>o.createItem&&o.createItem(...t))},J))]),K]),(n(!0),c(I,null,g((b=s.items)==null?void 0:b.data,t=>(n(),c("tr",null,[e("td",Q,U(t.id),1),e("td",X,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.email=r},null,8,Y),[[d,t.email]])]),e("td",Z,[l(e("input",{class:"shadow",type:"checkbox","onUpdate:modelValue":r=>t.email_verified=r},null,8,$),[[h,t.email_verified]])]),e("td",ee,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.name=r},null,8,te),[[d,t.name]])]),e("td",ae,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.picture=r},null,8,se),[[d,t.picture]])]),e("td",re,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.roles=r,style:{height:"20px"}},null,8,le),[[d,t.roles]])]),e("td",de,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.locale=r,style:{height:"20px"}},null,8,oe),[[d,t.locale]])]),e("td",ne,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.githubId=r,style:{height:"20px"}},null,8,ce),[[d,t.githubId]])]),e("td",ie,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.facebookId=r,style:{height:"20px"}},null,8,be),[[d,t.facebookId]])]),e("td",pe,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.googleId=r,style:{height:"20px"}},null,8,ue),[[d,t.googleId]])]),e("td",he,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.twitterId=r,style:{height:"20px"}},null,8,xe),[[d,t.twitterId]])]),e("td",me,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.created_at=r},null,8,ke),[[d,t.created_at]])]),e("td",_e,[l(e("input",{class:"shadow","onUpdate:modelValue":r=>t.updated_at=r},null,8,we),[[d,t.updated_at]])]),e("td",ve,[(n(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r=>o.updateItem(t)},Ue,8,fe))]),e("td",Ve,[(n(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mx-auto cursor-pointer hover:text-slate-700",onClick:r=>o.removeItem(t)},ze,8,ye))])]))),256))])])])])]}),_:1})]),_:1})}const Pe=w(V,[["render",Me]]);export{Pe as default};
