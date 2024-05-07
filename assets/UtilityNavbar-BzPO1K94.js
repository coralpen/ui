import{_ as v,o,g as i,k as f,b as n,r as W,c as b,T as E,i as d,d as h,m as R,F as L,h as O,u as I,n as a,p as s,w as D,t as C,q as z,s as M}from"./index-CfI8EekR.js";const N={data:()=>({})},P={class:"flex m-auto max-w-6xl w-full"},j=n("div",{class:"items-center justify-center w-full flex p-4"}," Add anything to the page wrapper ",-1);function T(t,l,e,B,m,c){return o(),i("div",P,[f(t.$slots,"default",{},()=>[j])])}const ye=v(N,[["render",T]]),F={data:()=>({})},V={class:"bg-slate-50",style:{"min-height":"40px"}},X=n("div",{class:"items-center h-9 justify-center w-full flex"}," Add some content to header ",-1);function Y(t,l,e,B,m,c){return o(),i("div",V,[f(t.$slots,"default",{},()=>[X])])}const We=v(F,[["render",Y]]),J={data:()=>({})},U={class:"text-slate-50 bg-slate-800 h-40"},q=n("div",{class:"justify-center items-center h-full w-full flex"}," Add some content to footer ",-1);function G(t,l,e,B,m,c){return o(),i("div",U,[f(t.$slots,"default",{},()=>[q])])}const Re=v(J,[["render",G]]),H={name:"Navbar",props:{menu:{type:Array},child:{type:Boolean,hidden:!0},minified:{type:Boolean,hidden:!0},align:{type:String,default:"left",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Center Right",value:"center-right"},{label:"Right",value:"right"},{label:"Right Strong",value:"right-strong"}]},level:{type:Number,default:0,hidden:!0},indent:{type:String,default:"15px",unit:"px",controller:"SLIDER"},groupWeight:{type:Number,default:500,controller:"SLIDER"},groupColor:{type:String,default:"#333",controller:"COLOR"},groupBackgroundColor:{type:String,default:"#E2E8F0",controller:"COLOR"},groupBackgroundColorSubmenu:{type:String,default:"#CBD5E1",controller:"COLOR"},groupSize:{type:String,default:"",unit:"px",controller:"SLIDER"},groupPaddingTop:{type:String,default:"10px",unit:"px",controller:"SLIDER"},groupPaddingBottom:{type:String,default:"10px",unit:"px",controller:"SLIDER"},fontWeight:{type:Number,default:300,controller:"SLIDER"},fontWeightHover:{type:Number,default:300,controller:"SLIDER"},fontWeightActive:{type:Number,default:500,controller:"SLIDER"},breakpoint:{type:Number,default:768,controller:"SLIDER"},backgroundColor:{type:String,default:"#E2E8F0",controller:"COLOR"},backgroundColorHover:{type:String,default:"#C0D0E0",controller:"COLOR"},backgroundColorActive:{type:String,default:"#E9E9F9",controller:"COLOR"},backgroundColorSubmenu:{type:String,default:"#CBD5E1",controller:"COLOR"},color:{type:String,default:"#000",controller:"COLOR"},colorHover:{type:String,default:"#000",controller:"COLOR"},colorActive:{type:String,default:"#000",controller:"COLOR"},topLeftRadius:{type:String,default:"4px",unit:"px",controller:"SLIDER"},topRightRadius:{type:String,default:"4px",unit:"px",controller:"SLIDER"},bottomLeftRadius:{type:String,default:"4px",unit:"px",controller:"SLIDER"},bottomRightRadius:{type:String,default:"4px",unit:"px",controller:"SLIDER"},topBorderWidth:{type:String,default:"100%",unit:"%",controller:"SLIDER"},topBorderWidthHover:{type:String,default:"100%",unit:"%",controller:"SLIDER"},topBorderWidthActive:{type:String,default:"100%",unit:"%",controller:"SLIDER"},topBorderHeight:{type:String,default:"3px",unit:"%",controller:"SLIDER"},topBorderColor:{type:String,default:"transparent",controller:"COLOR"},topBorderColorHover:{type:String,default:"transparent",controller:"COLOR"},topBorderColorActive:{type:String,default:"transparent",controller:"COLOR"},bottomBorderWidth:{type:String,default:"100%",unit:"%",controller:"SLIDER"},bottomBorderWidthActive:{type:String,default:"60%",unit:"%",controller:"SLIDER"},bottomBorderWidthHover:{type:String,default:"100%",unit:"%",controller:"SLIDER"},bottomBorderHeight:{type:String,default:"3px",unit:"px",controller:"SLIDER"},bottomBorderColor:{type:String,default:"transparent",controller:"COLOR"},bottomBorderColorHover:{type:String,default:"transparent",controller:"COLOR"},bottomBorderColorActive:{type:String,default:"#555",controller:"COLOR"},leftBorderHeight:{type:String,default:"100%",unit:"%",controller:"SLIDER"},leftBorderHeightHover:{type:String,default:"100%",unit:"%",controller:"SLIDER"},leftBorderHeightActive:{type:String,default:"100%",unit:"%",controller:"SLIDER"},leftBorderWidth:{type:String,default:"3px",unit:"%",controller:"SLIDER"},leftBorderColor:{type:String,default:"transparent",controller:"COLOR"},leftBorderColorHover:{type:String,default:"transparent",controller:"COLOR"},leftBorderColorActive:{type:String,default:"#777",controller:"COLOR"},rightBorderHeight:{type:String,default:"100%",unit:"%",controller:"SLIDER"},rightBorderHeightActive:{type:String,default:"60%",unit:"%",controller:"SLIDER"},rightBorderHeightHover:{type:String,default:"100%",unit:"%",controller:"SLIDER"},rightBorderWidth:{type:String,default:"3px",unit:"px",controller:"SLIDER"},rightBorderColor:{type:String,default:"transparent",controller:"COLOR"},rightBorderColorHover:{type:String,default:"transparent",controller:"COLOR"},rightBorderColorActive:{type:String,default:"transparent",controller:"COLOR"},paddingX:{type:String,default:"10px",unit:"px",controller:"SLIDER"},paddingY:{type:String,default:"0.5rem",unit:"rem",controller:"SLIDER"},divider:{type:String,default:""},dividerWidth:{type:String,default:"0px",unit:"px",controller:"SLIDER"},dividerHeight:{type:String,default:"0px",unit:"px",controller:"SLIDER"},dividerBackgroundColor:{type:String,default:"#E2E8F0",controller:"COLOR"},minimize:{type:Boolean,default:!1},side:{type:Boolean,default:!1},sidebar:{type:Boolean,default:!1},float:{type:String,default:"",options:[{label:"Top",value:"top"},{label:"Right",value:"right"},{label:"Bottom",value:"bottom"},{label:"Left",value:"left"}]},buttonWidth:{type:String,default:"40px",unit:"px",controller:"SLIDER"},buttonHeight:{type:String,default:"40px",unit:"px",controller:"SLIDER"}},data:()=>({open:!1,items:[],screenWidth:0,mini:!1,small:!1,resizeListener:null}),computed:{attributes(){const t=JSON.parse(JSON.stringify(this.$attrs));return delete t["vx-slotted"],t},leftBorderHeightComputed(){return"calc("+this.leftBorderHeight+" - ("+this.dividerHeight+" / 2))"},leftBorderHeightActiveComputed(){return"calc("+this.leftBorderHeightActive+" - ("+this.dividerHeight+" / 2))"},leftBorderHeightHoverComputed(){return"calc("+this.leftBorderHeightHover+" - ("+this.dividerHeight+" / 2))"},rightBorderHeightComputed(){return"calc("+this.rightBorderHeight+" - ("+this.dividerHeight+" / 2))"},rightBorderHeightActiveComputed(){return"calc("+this.rightBorderHeightActive+" - ("+this.dividerHeight+" / 2))"},rightBorderHeightHoverComputed(){return"calc("+this.rightBorderHeightHover+" - ("+this.dividerHeight+" / 2))"},bottomBorderWidthComputed(){return"calc("+this.bottomBorderWidth+" - ("+this.dividerWidth+" / 2))"},bottomBorderWidthActiveComputed(){return"calc("+this.bottomBorderWidthActive+" - ("+this.dividerWidth+" / 2))"},bottomBorderWidthHoverComputed(){return"calc("+this.bottomBorderWidthHover+" - ("+this.dividerWidth+" / 2))"},topBorderWidthComputed(){return"calc("+this.topBorderWidth+" - ("+this.dividerWidth+" / 2))"},topBorderWidthActiveComputed(){return"calc("+this.topBorderWidthActive+" - ("+this.dividerWidth+" / 2))"},topBorderWidthHoverComputed(){return"calc("+this.topBorderWidthHover+" - ("+this.dividerWidth+" / 2))"},borderLeftComputed(){return"calc(50% - ("+this.dividerWidth+" / 2))"},borderTopComputed(){return"calc(50% - ("+this.dividerHeight+" / 2))"},dividerWidthMinus(){return"-"+this.dividerWidth},dividerHeightMinus(){return"-"+this.dividerHeight}},created(){this.setItems(),this.mini=this.minified,this.small=this.minified,this.child||(this.isMini(),this.resizeListener=window.addEventListener("resize",()=>this.isMini()))},watch:{minified(t){this.mini=t,this.small=t}},beforeUnmount(){this.resizeListener&&window.removeEventListener("resize",this.resizeListener)},methods:{isMini(){this.mini=this.minimize||this.sidebar||this.side||window.innerWidth<this.breakpoint,this.small=this.minimize||this.sidebar||window.innerWidth<this.breakpoint},setItems(){let t=this.menu?JSON.parse(JSON.stringify(this.menu)):null;this.items=(t||[{label:"Home",route:"/"},{label:"Vue Play",route:"https://vueplay.com",external:!0},{label:"More",children:[{label:"More 1",route:"/more-1"},{label:"More 2",route:"/more-2",children:[{label:"More",route:"/more",children:[{label:"Even more 1",route:"/even-more-1"},{label:"Even more 2",route:"/even-more-2"},{label:"Even more 3",route:"/even-more-3"}]}]},{label:"More 3",route:"/more-3"}]},{label:"Contact",route:"/contact"}]).map(l=>(typeof l.open!="boolean"&&(l.open=!1),l))}}},p=()=>{I(t=>({"41ab122b":t.paddingX,"41ab122c":t.paddingY,"3656caff":t.dividerWidthMinus,"00ec7bf1":t.dividerWidth,"55e14d78":t.borderLeftComputed,"3f417154":t.topBorderWidthComputed,"9d5be3b8":t.topBorderHeight,cbc8c274:t.topBorderColor,c99ac5ae:t.topBorderWidth,"2b1badc0":t.topBorderWidthHoverComputed,72818616:t.topBorderColorHover,"71ede4da":t.topBorderWidthHover,"2d45a9bc":t.topBorderWidthActiveComputed,"5dd94528":t.topBorderColorActive,"0d7cc58f":t.topBorderWidthActive,"5a5872b8":t.bottomBorderWidthComputed,"3e040d02":t.bottomBorderHeight,f44167b0:t.bottomBorderColor,f2136aea:t.bottomBorderWidth,"0c604f9e":t.bottomBorderWidthHoverComputed,"463ce5f4":t.bottomBorderColorHover,ca77251e:t.bottomBorderWidthHover,"7495439e":t.bottomBorderWidthActiveComputed,"74c3f94e":t.bottomBorderColorActive,"9da53d1e":t.bottomBorderWidthActive,ffc45f1c:t.borderTopComputed,"52cda1ea":t.leftBorderHeightComputed,fd397ba2:t.leftBorderWidth,ff677868:t.leftBorderColor,dd93ec44:t.leftBorderHeight,d65161aa:t.leftBorderHeightHoverComputed,f7a5d660:t.leftBorderColorHover,c9b36c04:t.leftBorderHeightHover,"0a03949e":t.leftBorderHeightActiveComputed,"164cb41c":t.leftBorderColorActive,"85f1d2f8":t.leftBorderHeightActive,"9cb334d0":t.rightBorderHeightComputed,"8f05edfc":t.rightBorderWidth,"9133eac2":t.rightBorderColor,"3d551d6b":t.rightBorderHeight,"9f91ae84":t.rightBorderHeightHoverComputed,"1c4d99dd":t.rightBorderColorHover,"07166691":t.rightBorderHeightHover,"4b998e7e":t.rightBorderHeightActiveComputed,"60c9c285":t.rightBorderColorActive,"61cae75e":t.rightBorderHeightActive,d3726980:t.dividerBackgroundColor,"66483d6a":t.topLeftRadius,"02885bc8":t.bottomLeftRadius,"53c62dfd":t.topRightRadius,"3f89db5f":t.bottomRightRadius,d60ecbc2:t.color,"967fb2de":t.backgroundColor,"52096e6b":t.fontWeight,ab506064:t.backgroundColorSubmenu,"6d2e8b46":t.colorHover,"1701252b":t.backgroundColorHover,"092694de":t.fontWeightHover,"5712b205":t.colorActive,"86f0be12":t.backgroundColorActive,"658e1d51":t.fontWeightActive,"5a4d9920":t.buttonWidth,"6e7e40bd":t.buttonHeight,"06809fdc":t.groupSize,"6f6b7793":t.groupWeight,"6e972a30":t.groupColor,"7388501a":t.groupBackgroundColor,"995911c2":t.groupPaddingTop,"3f3f9821":t.groupPaddingBottom,"3b7eebb6":t.groupBackgroundColorSubmenu}))},k=H.setup;H.setup=k?(t,l)=>(p(),k(t,l)):p;const u=t=>(z("data-v-3bbaf2c7"),t=t(),M(),t),K={key:0,class:"flex m-2"},Q=u(()=>n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[n("path",{"fill-rule":"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z","clip-rule":"evenodd"})],-1)),Z={key:1,class:"flex m-2"},_=u(()=>n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[n("path",{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1)),x=[_],$=["divider"],ee={key:0,class:"top-border"},te=["onClick"],re=u(()=>n("path",{"fill-rule":"evenodd",d:"M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z","clip-rule":"evenodd"},null,-1)),oe=[re],ie=["onClick"],le=u(()=>n("path",{"fill-rule":"evenodd",d:"M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z","clip-rule":"evenodd"},null,-1)),de=[le],ne=["onClick","src"],ae=["href"],ge=["onClick"],he=["src","onClick"],ue=["onClick"],ce=u(()=>n("path",{"fill-rule":"evenodd",d:"M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z","clip-rule":"evenodd"},null,-1)),se=[ce],ve=["onClick"],fe=u(()=>n("path",{"fill-rule":"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z","clip-rule":"evenodd"},null,-1)),Be=[fe],me={key:11,class:"left-border"},be={key:12,class:"right-border"},Ce={key:13,class:"bottom-border"};function He(t,l,e,B,m,c){const A=W("router-link"),w=W("Navbar");return o(),i(L,null,[t.open&&t.mini&&!e.child&&!e.sidebar?(o(),b(E,{key:0,to:"body"},[n("div",{class:"outside",onClick:l[0]||(l[0]=r=>t.open=!t.open)})])):d("",!0),h(),e.sidebar?d("",!0):(o(),i("button",R({key:1},c.attributes,{onClick:l[1]||(l[1]=r=>t.open=!t.open),class:["flex items-center justify-center",{open:t.open,hidden:e.child||!t.mini||t.mini&&!t.small}],style:{width:e.buttonWidth,height:e.buttonHeight}}),[t.open?(o(),i("div",Z,x)):(o(),i("div",K,[f(t.$slots,"default",{},()=>[Q],!0)]))],16)),n("ul",R(c.attributes,{class:{shadow:!t.mini&&e.child,"float-top":e.float==="top"&&!(e.child||!t.mini||t.mini&&!t.small),"float-right":e.float==="right"&&!(e.child||!t.mini||t.mini&&!t.small),"float-bottom":e.float==="bottom"&&!(e.child||!t.mini||t.mini&&!t.small),"float-left":e.float==="left"&&!(e.child||!t.mini||t.mini&&!t.small),mini:t.mini,open:t.open||e.side&&!t.small||e.sidebar&&!e.child,root:!e.child,flex:!t.mini,"align-right":["right","center-right","right-strong"].includes(e.align),right:["right","right-strong"].includes(e.align),left:!["right","right-strong","center-right","center"].includes(e.align)}}),[(o(!0),i(L,null,O(t.items,r=>{var S,y;return o(),i("li",{class:a(["whitespace-nowrap place-content-between items-center relative inline-flex",{"justify-center":["center-right","center"].includes(e.align),"justify-end":["right","right-strong"].includes(e.align),open:r.open,active:r.route===t.$route.path,"group-header":!r.route&&!r.children}]),divider:e.divider},[!e.child&&!t.mini?(o(),i("div",ee)):d("",!0),h(),e.align==="right-strong"?(o(),i("svg",{key:1,onClick:g=>r.open=!r.open,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:a(["cursor-pointer ml-2 w-4 h-4 top strong",{flat:!r.open}])},oe,10,te)):d("",!0),["right","right-strong","center-right"].includes(e.align)?(o(),i("svg",{key:2,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"cursor-pointer ml-2 w-4 h-4 sub right",onClick:g=>r.open=!r.open},de,8,ie)):d("",!0),h(),r.icon&&e.align!=="right-strong"?(o(),i("img",{key:3,onClick:g=>r.route?t.$router.push(r.route):"",src:r.icon,class:a(["object-center object-contain ml-2.5 h-6 w-6",{"cursor-pointer":r.route}]),style:s({"margin-left":t.mini&&e.indent&&e.level&&!["right-strong"].includes(e.align)?"calc("+e.level+" * "+e.indent+")":"","margin-right":t.mini&&e.indent&&e.level&&["right-strong"].includes(e.align)?"calc("+e.level+" * "+e.indent+")":""})},null,14,ne)):d("",!0),h(),r.route&&!r.external?(o(),b(A,{key:4,to:r.route,class:a(["grow whitespace-nowrap",{"text-right":["center-right","right","right-strong"].includes(e.align)&&(!t.mini||e.align==="right-strong")}]),style:s({"margin-left":t.mini&&e.indent&&e.level&&!["right-strong"].includes(e.align)?"calc("+e.level+" * "+e.indent+")":"","margin-right":t.mini&&e.indent&&e.level&&["right-strong"].includes(e.align)?"calc("+e.level+" * "+e.indent+")":""})},{default:D(()=>[h(C(r.label),1)]),_:2},1032,["to","class","style"])):r.route?(o(),i("a",{key:5,href:r.route,target:"_blank",class:a(["grow whitespace-nowrap",{"text-right":["center-right","right","right-strong"].includes(e.align)&&(!t.mini||e.align==="right-strong")}]),style:s({"margin-left":t.mini&&e.indent&&e.level&&!["right-strong"].includes(e.align)?"calc("+e.level+" * "+e.indent+")":"","margin-right":t.mini&&e.indent&&e.level&&["right-strong"].includes(e.align)?"calc("+e.level+" * "+e.indent+")":""})},C(r.label),15,ae)):(o(),i("span",{key:6,onClick:g=>r.open=!r.open,class:a(["grow whitespace-nowrap",{"text-right":["center-right","right","right-strong"].includes(e.align)&&(!t.mini||e.align==="right-strong"),"cursor-pointer":(S=r.children)==null?void 0:S.length}]),style:s({"margin-left":t.mini&&e.indent&&e.level&&!["right-strong"].includes(e.align)?"calc("+e.level+" * "+e.indent+")":"","margin-right":t.mini&&e.indent&&e.level&&["right-strong"].includes(e.align)?"calc("+e.level+" * "+e.indent+")":""})},C(r.label),15,ge)),h(),r.icon&&e.align==="right-strong"?(o(),i("img",{key:7,src:r.icon,onClick:g=>r.route?t.$router.push(r.route):"",class:a(["object-center object-contain mr-2.5 h-6 w-6",{"cursor-pointer":r.route}]),style:s({"margin-left":t.mini&&e.indent&&e.level&&!["right-strong"].includes(e.align)?"calc("+e.level+" * "+e.indent+")":"","margin-right":t.mini&&e.indent&&e.level&&["right-strong"].includes(e.align)?"calc("+e.level+" * "+e.indent+")":""})},null,14,he)):d("",!0),e.align!=="right-strong"?(o(),i("svg",{key:8,onClick:g=>r.open=!r.open,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:a(["cursor-pointer mr-2 w-4 h-4 top",{flat:!r.open}])},se,10,ue)):d("",!0),["right","right-strong","center-right"].includes(e.align)?d("",!0):(o(),i("svg",{key:9,onClick:g=>r.open=!r.open,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:a(["cursor-pointer mr-2 w-4 h-4 sub left",{flipped:r.open}])},Be,10,ve)),(y=r.children)!=null&&y.length?(o(),b(w,{key:10,level:e.level+1,indent:e.indent,menu:r.children,child:!0,align:e.align,minified:t.mini,color:e.color,colorHover:e.colorHover,colorActive:e.colorActive,fontWeight:e.fontWeight,fontWeightHover:e.fontWeightHover,fontWeightActive:e.fontWeightActive,backgroundColor:e.backgroundColor,backgroundColorHover:e.backgroundColorHover,backgroundColorActive:e.backgroundColorActive,backgroundColorSubmenu:e.backgroundColorSubmenu,topLeftRadius:e.topLeftRadius,topRightRadius:e.topRightRadius,bottomLeftRadius:e.bottomLeftRadius,bottomRightRadius:e.bottomRightRadius,paddingX:e.paddingX,paddingY:e.paddingY,dividerWidth:e.dividerWidth,dividerHeight:e.dividerHeight,dividerBackgroundColor:e.dividerBackgroundColor,topBorderColor:e.topBorderColor,topBorderColorActive:e.topBorderColorActive,topBorderColorHover:e.topBorderColorHover,topBorderHeight:e.topBorderHeight,topBorderWidth:e.topBorderWidth,topBorderWidthActive:e.topBorderWidthActive,topBorderWidthHover:e.topBorderWidthHover,bottomBorderColor:e.bottomBorderColor,bottomBorderColorActive:e.bottomBorderColorActive,bottomBorderColorHover:e.bottomBorderColorHover,bottomBorderHeight:e.bottomBorderHeight,bottomBorderWidth:e.bottomBorderWidth,bottomBorderWidthActive:e.bottomBorderWidthActive,bottomBorderWidthHover:e.bottomBorderWidthHover,leftBorderColor:e.leftBorderColor,leftBorderColorActive:e.leftBorderColorActive,leftBorderColorHover:e.leftBorderColorHover,leftBorderHeight:e.leftBorderHeight,leftBorderWidth:e.leftBorderWidth,leftBorderHeightActive:e.leftBorderHeightActive,leftBorderHeightHover:e.leftBorderHeightHover,rightBorderColor:e.rightBorderColor,rightBorderColorActive:e.rightBorderColorActive,rightBorderColorHover:e.rightBorderColorHover,rightBorderHeight:e.rightBorderHeight,rightBorderWidth:e.rightBorderWidth,rightBorderHeightActive:e.rightBorderHeightActive,rightBorderHeightHover:e.rightBorderHeightHover,groupWeight:e.groupWeight,groupColor:e.groupColor,groupBackgroundColor:e.groupBackgroundColor,groupBackgroundColorSubmenu:e.groupBackgroundColorSubmenu,groupSize:e.groupSize,groupPaddingTop:e.groupPaddingTop,groupPaddingBottom:e.groupPaddingBottom,class:"grow"},null,8,["level","indent","menu","align","minified","color","colorHover","colorActive","fontWeight","fontWeightHover","fontWeightActive","backgroundColor","backgroundColorHover","backgroundColorActive","backgroundColorSubmenu","topLeftRadius","topRightRadius","bottomLeftRadius","bottomRightRadius","paddingX","paddingY","dividerWidth","dividerHeight","dividerBackgroundColor","topBorderColor","topBorderColorActive","topBorderColorHover","topBorderHeight","topBorderWidth","topBorderWidthActive","topBorderWidthHover","bottomBorderColor","bottomBorderColorActive","bottomBorderColorHover","bottomBorderHeight","bottomBorderWidth","bottomBorderWidthActive","bottomBorderWidthHover","leftBorderColor","leftBorderColorActive","leftBorderColorHover","leftBorderHeight","leftBorderWidth","leftBorderHeightActive","leftBorderHeightHover","rightBorderColor","rightBorderColorActive","rightBorderColorHover","rightBorderHeight","rightBorderWidth","rightBorderHeightActive","rightBorderHeightHover","groupWeight","groupColor","groupBackgroundColor","groupBackgroundColorSubmenu","groupSize","groupPaddingTop","groupPaddingBottom"])):d("",!0),t.mini?(o(),i("div",me)):d("",!0),t.mini?(o(),i("div",be)):d("",!0),!e.child&&!t.mini?(o(),i("div",Ce)):d("",!0)],10,$)}),256))],16)],64)}const Le=v(H,[["render",He],["__scopeId","data-v-3bbaf2c7"]]);export{Re as S,Le as U,ye as W,We as a};
