"use strict";(globalThis["webpackChunkschema_box"]=globalThis["webpackChunkschema_box"]||[]).push([[196],{1952:(e,t,a)=>{a.a(e,(async(e,l)=>{try{a.d(t,{Z:()=>d});var n=a(3803),o=a(6583),s=a(4814),i=a(1474),r=a(9001),c=e([s]);s=(c.then?(await c)():c)[0];const m={class:"columns justify-center"},u=(0,n._)("thead",{class:"bg-teal-2 text-grey-10"},[(0,n._)("tr",null,[(0,n._)("td",{class:"text-right bg-teal-2"}," 统计范围 "),(0,n._)("td",null,"1 码"),(0,n._)("td",null,"2 码"),(0,n._)("td",null,"3 码"),(0,n._)("td",null,"4 码"),(0,n._)("td",{class:"text-red-8"}," 选重 "),(0,n._)("td",{class:"text-red-8"}," 理论二简 "),(0,n._)("td",null,"加权键长"),(0,n._)("td",null,"加权字均当量"),(0,n._)("td",null,"加权键均当量"),(0,n._)("td",null,"左右互击"),(0,n._)("td",null,"同指大跨排"),(0,n._)("td",null,"同指小跨排"),(0,n._)("td",null,"小指干扰"),(0,n._)("td",null,"错手"),(0,n._)("td",null,"三连击"),(0,n._)("td",null,"超标键位"),(0,n._)("td",null,"缺字标记")])],-1),d=(0,n.aZ)({__name:"Single",props:{mabiao:{}},emits:["table"],setup(e){const t=e,a=(0,s.HM)(t.mabiao),l=(0,s.g3)(a.slice(0,3)),c=(0,s.d$)(l),d=(0,s.g3)(a.slice(0,5)),b=(0,s.d$)(d),f=["1~300","301~500","501~1500","1501~3000","3001~6000"],h=["1501~3000","3001~6000"];return(e,t)=>{const s=(0,n.up)("QMarkupTable");return(0,n.wg)(),(0,n.iD)("div",m,[(0,n.Wm)(s,{separator:"horizontal",bordered:"",dense:"",class:"sticky-first-column-table"},{default:(0,n.w5)((()=>[u,(0,n._)("tbody",null,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(3,(l=>(0,n.Wm)(i.Z,{key:l,"range-label":f[l-1],"mb-name":e.mabiao.name,"eva-item":(0,o.SU)(a)[l-1],onClick:t[0]||(t[0]=t=>e.$emit("table",t))},null,8,["range-label","mb-name","eva-item"]))),64)),(0,n.Wm)(i.Z,{"range-label":"1~1500","index-label":"小计",class:"bg-teal-1","mb-name":e.mabiao.name,"eva-item":(0,o.SU)(l),onClick:t[1]||(t[1]=t=>e.$emit("table",t))},null,8,["mb-name","eva-item"]),(0,n.Wm)(r.Z,{class:"bg-teal-1","index-label":"加权比重","eva-item":(0,o.SU)(c)},null,8,["eva-item"]),((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(2,(l=>(0,n.Wm)(i.Z,{key:l,"range-label":h[l-1],"mb-name":e.mabiao.name,"eva-item":(0,o.SU)(a)[l+2],onClick:t[2]||(t[2]=t=>e.$emit("table",t))},null,8,["range-label","mb-name","eva-item"]))),64)),(0,n.Wm)(i.Z,{"range-label":"1~6000","index-label":"总计",class:"bg-teal-1","mb-name":e.mabiao.name,"eva-item":(0,o.SU)(d),onClick:t[3]||(t[3]=t=>e.$emit("table",t))},null,8,["mb-name","eva-item"]),(0,n.Wm)(r.Z,{class:"bg-teal-1","index-label":"加权比重","eva-item":(0,o.SU)(b)},null,8,["eva-item"])])])),_:1})])}}});l()}catch(m){l(m)}}))},659:(e,t,a)=>{a.a(e,(async(e,l)=>{try{a.d(t,{Z:()=>b});var n=a(3803),o=a(6204),s=a(6583),i=a(6728),r=a(9481),c=a(8219),m=a(8038),u=a(261),d=e([c]);c=(d.then?(await d)():d)[0];const b=(0,n.aZ)({__name:"Visualize",props:{mabiao:{}},setup(e){const t=e,a=`${t.mabiao.name}方案测评`;(0,r.Q)(a);const l=(0,s.iH)("zi"),d=(0,s.XI)(!1),b=(0,s.XI)(),f=(0,s.iH)({rowsPerPage:20});return(e,t)=>{const r=(0,n.up)("QSpace"),h=(0,n.up)("QTooltip"),p=(0,n.up)("QBtn"),g=(0,n.up)("QBar"),w=(0,n.up)("QTab"),v=(0,n.up)("QTabs"),k=(0,n.up)("QSeparator"),_=(0,n.up)("QTabPanel"),y=(0,n.up)("QTabPanels"),Z=(0,n.up)("QCardSection"),x=(0,n.up)("QCard"),L=(0,n.up)("QTable"),Q=(0,n.up)("QScrollArea"),q=(0,n.up)("QDrawer"),W=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(x,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r),(0,n._)("span",{class:"text-overline text-blue-grey-9 text-truncate",style:{overflow:"hidden","max-width":"calc(99vw - 6rem)"}},(0,o.zw)(a)),(0,n.Wm)(r),(0,n.wy)(((0,n.wg)(),(0,n.j4)(p,{round:"",flat:"",icon:(0,s.SU)(i.r5M)},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{self:"center middle",offset:[0,25]},{default:(0,n.w5)((()=>[(0,n.Uk)(" 返回 ")])),_:1})])),_:1},8,["icon"])),[[W]])])),_:1}),(0,n.Wm)(Z,{class:"q-px-lg"},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),"active-color":"primary",class:"text-blue-grey-8","inline-label":""},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{name:"mb",label:"码表信息"}),(0,n.Wm)(w,{name:"zi",label:"字频测评"}),(0,n.Wm)(w,{name:"wd",label:"组词测评"})])),_:1},8,["modelValue"]),(0,n.Wm)(k),(0,n.Wm)(y,{modelValue:l.value,"onUpdate:modelValue":t[2]||(t[2]=e=>l.value=e),animated:"","transition-next":"slide-right","transition-prev":"slide-left",class:"container-lg"},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{name:"zi"},{default:(0,n.w5)((()=>[(0,n.Wm)(c.Z,{mabiao:e.mabiao,onTable:t[1]||(t[1]=e=>{b.value=e,d.value=!0})},null,8,["mabiao"])])),_:1}),(0,n.Wm)(_,{name:"wd"},{default:(0,n.w5)((()=>[(0,n.Wm)(m.Z)])),_:1}),(0,n.Wm)(_,{name:"mb"},{default:(0,n.w5)((()=>[(0,n.Wm)(u.Z)])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(q,{modelValue:d.value,"onUpdate:modelValue":t[4]||(t[4]=e=>d.value=e),"show-if-above":"",width:400,elevated:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Q,{class:"fit q-pa-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(L,(0,n.dG)({pagination:f.value,"onUpdate:pagination":t[3]||(t[3]=e=>f.value=e),dense:"","title-class":"text-truncate text-center text-blue-grey-9 text-body1"},b.value,{"row-key":"index","rows-per-page-options":[20,50,100]}),null,16,["pagination"])])),_:1})])),_:1},8,["modelValue"])],64)}}});l()}catch(b){l(b)}}))},809:(e,t,a)=>{a.a(e,(async(e,l)=>{try{a.d(t,{F:()=>e,c:()=>n});const{comboFeelData:e}=await a.e(98).then(a.bind(a,5098)),{keyFeelData:n}=await a.e(584).then(a.bind(a,3584));l()}catch(n){l(n)}}),1)},4814:(e,t,a)=>{a.a(e,(async(e,l)=>{try{a.d(t,{HM:()=>f,d$:()=>w,g3:()=>g});var n=a(7774),o=a(809),s=e([o]);o=(s.then?(await s)():s)[0];const r=new Set("abcdefghijklmnopqrstuvwxyz;,./"),c=(await a.e(893).then(a.bind(a,2893))).default;function m(e){const t=(0,n.R6)(e);if(t.length<6e3)throw new Error("字频数据少于6000行");return t.map((e=>[e[0],Number.parseInt(e[1])]))}function u(e,t,a=!0){const l=new Set(t.map((e=>e[0]))),n=new Map;for(const s of e.items){const e=s[0];if(e.length>1||!l.has(e))continue;const t=n.get(e);t?a?t[1].length>s[1].length&&n.set(e,s):t[1].length<s[1].length&&n.set(e,s):n.set(e,s)}const o=[];for(const[s,i]of t)if(n.has(s)){const e=n.get(s);o.push({wd:s,freq:i,code:e[1],line:e[2]})}else o.push({wd:s,freq:i});return o}function d(){return{freq:0,L1:[],L2:[],L3:[],L4:[],collision:[],brief2:[],CL:0,ziEq:0,keyEq:0,dh:[],ms:[],ss:[],pd:[],lfd:[],trible:[],overKey:[],lack:[]}}function b(e){const t=[[0,300],[300,500],[500,1500],[1500,3e3],[3e3,6e3]],a=[],l=new Set;for(const[n,o]of t){const t=d();for(let a=n;a<o;a++){const n=e[a];if(t.freq+=n.freq,!("code"in n)){t.lack.push(n);continue}const o=n.code,s=o.length;let i=!1;for(const e of o)if(!r.has(e)){t.overKey.push(n),i=!0;break}if(i)continue;switch(s){case 1:t.L1.push(n);break;case 2:t.L2.push(n);break;case 3:t.L3.push(n);break;case 4:t.L4.push(n);break;default:t.collision.push(n);break}const c=o.slice(0,2);l.has(c)||(l.add(c),t.brief2.push(n));const m=["dh","ms","ss","pd","lfd"];for(const e of m)h(t,e,n);for(let e=2;e<s;e++)o[e-2]===o[e-1]&&o[e-1]===o[e]&&t.trible.push(n);const u=n.freq;if(s<2)t.ziEq+=u,t.keyEq+=u;else{const e=p(o);t.ziEq+=e*u,t.keyEq+=e/(s-1)*u}t.CL+=s*u}a.push(t)}return a}function f(e){return b(u(e,m(c)))}function h(e,t,a){const l=a.code;for(let n=1;n<l.length;n++){const s=l[n-1]+l[n];if(o.F[s]?.[t]){e[t].push(a);break}}}function p(e){let t=0;for(let a=1;a<e.length;a++){const l=e[a-1]+e[a];t+=o.F[l].eq}return t}function g(e){const t=d(),a=["L1","L2","L3","L4","collision","brief2","dh","ms","ss","pd","lfd","trible","overKey","lack"],l=["freq","CL","ziEq","keyEq"];for(const n of e){for(const e of a)t[e]=t[e].concat(n[e]);for(const e of l)t[e]+=n[e]}return t}function w(e){const t={},a=["L1","L2","L3","L4","collision","brief2","dh","ms","ss","pd","lfd","trible","overKey","lack"],l=e.freq;for(const n of a){let a=0;for(const t of e[n])a+=t.freq/l;t[n]=a}return t}l()}catch(i){l(i)}}),1)},261:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(3803);const n=(0,l.aZ)({__name:"Mabiao",setup(e){return(e,t)=>null}}),o=n,s=o},8219:(e,t,a)=>{a.a(e,(async(e,l)=>{try{a.d(t,{Z:()=>u});var n=a(5389),o=a(9006),s=a(7576),i=a(762),r=a.n(i),c=e([n]);n=(c.then?(await c)():c)[0];const m=n.Z,u=m;r()(n.Z,"components",{QTable:o.Z,QMarkupTable:s.Z}),l()}catch(m){l(m)}}))},1474:(e,t,a)=>{a.d(t,{Z:()=>_});var l=a(3803),n=a(6204),o=a(6583),s=a(7774);const i={class:"text-right bg-teal-1"},r=["onClick"],c={key:1,class:"text-right"},m={class:"text-right"},u={class:"text-right"},d={class:"text-right"},b=["onClick"],f={key:1,class:"text-right"},h={key:1,class:"text-right"},p=(0,l.aZ)({__name:"SingleNormalRow",props:{rangeLabel:{},mbName:{},evaItem:{},indexLabel:{}},emits:["click"],setup(e){const t=[{name:"index",label:"汉字",field:"wd"},{name:"code",label:"编码",field:"code",classes:"font-monospace"},{name:"freq",label:"字频",field:"freq"},{name:"line",label:"码表行数",field:"line"}],a=[{name:"index",label:"汉字",field:"wd"},{name:"freq",label:"字频",field:"freq"}],p=[["L1","一码字"],["L2","二码字"],["L3","三码字"],["L4","四码字"],["collision","选重"],["brief2","理论二简"]],g=[["dh","左右互击"],["ms","同指大跨排"],["ss","同指小跨排"],["pd","小指干扰"],["lfd","错手"],["trible","三连击"],["overKey","超标键位"]];return(e,w)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",i,(0,n.zw)(e.indexLabel||e.rangeLabel),1),((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(p,(a=>((0,l.wg)(),(0,l.iD)(l.HY,{key:a[0]},[e.evaItem[a[0]].length?((0,l.wg)(),(0,l.iD)("td",{key:0,class:"cursor-pointer hover-dark text-right",onClick:()=>{e.$emit("click",{title:`${e.mbName} 第 ${e.rangeLabel} 条的${a[1]}`,columns:t,rows:e.evaItem[a[0]]})}},(0,n.zw)(e.evaItem[a[0]].length),9,r)):((0,l.wg)(),(0,l.iD)("td",c,(0,n.zw)(e.evaItem[a[0]].length),1))],64)))),64)),(0,l._)("td",m,(0,n.zw)((0,o.SU)(s.$1)(e.evaItem.CL/e.evaItem.freq)),1),(0,l._)("td",u,(0,n.zw)((0,o.SU)(s.$1)(e.evaItem.ziEq/e.evaItem.freq)),1),(0,l._)("td",d,(0,n.zw)((0,o.SU)(s.$1)(e.evaItem.keyEq/e.evaItem.freq)),1),((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(g,(a=>((0,l.wg)(),(0,l.iD)(l.HY,{key:a[0]},[e.evaItem[a[0]].length?((0,l.wg)(),(0,l.iD)("td",{key:0,class:"cursor-pointer hover-dark text-right",onClick:()=>{e.$emit("click",{title:`${e.mbName} 第 ${e.rangeLabel} 条的${a[1]}`,columns:t,rows:e.evaItem[a[0]]})}},(0,n.zw)(e.evaItem[a[0]].length),9,b)):((0,l.wg)(),(0,l.iD)("td",f,(0,n.zw)(e.evaItem[a[0]].length),1))],64)))),64)),e.evaItem.lack.length?((0,l.wg)(),(0,l.iD)("td",{key:0,class:"cursor-pointer hover-dark text-right",onClick:w[0]||(w[0]=()=>{e.$emit("click",{title:`${e.mbName} 第 ${e.rangeLabel} 条的缺字`,columns:a,rows:e.evaItem.lack})})},(0,n.zw)(e.evaItem.lack.length),1)):((0,l.wg)(),(0,l.iD)("td",h,(0,n.zw)(e.evaItem.lack.length),1))]))}});var g=a(9006),w=a(762),v=a.n(w);const k=p,_=k;v()(p,"components",{QTable:g.Z})},9001:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(3803),n=a(6204),o=a(6583),s=a(7774);const i={class:"text-right bg-teal-1"},r=(0,l.aZ)({__name:"SingleSumRow",props:{evaItem:{},indexLabel:{}},setup(e){const t=["L1","L2","L3","L4","collision","brief2","/","/","/","dh","ms","ss","pd","lfd","trible","overKey","lack"];return(e,a)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",i,(0,n.zw)(e.indexLabel),1),((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(t,(t=>(0,l._)("td",{key:t,class:"text-right"},(0,n.zw)("/"===t?"/":0===e.evaItem[t]?"0":(0,o.SU)(s.$1)(e.evaItem[t],2,!0)),1))),64))]))}}),c=r,m=c},1196:(e,t,a)=>{a.a(e,(async(e,l)=>{try{a.r(t),a.d(t,{default:()=>x});var n=a(1828),o=a(9006),s=a(5041),i=a(8176),r=a(5692),c=a(2158),m=a(8709),u=a(9700),d=a(9497),b=a(4395),f=a(4281),h=a(615),p=a(4825),g=a(7304),w=a(6744),v=a(5679),k=a(762),_=a.n(k),y=e([n]);n=(y.then?(await y)():y)[0];const Z=n.Z,x=Z;_()(n.Z,"components",{QTable:o.Z,QCard:s.Z,QBar:i.Z,QSpace:r.Z,QBtn:c.Z,QTooltip:m.Z,QCardSection:u.Z,QTabs:d.Z,QTab:b.Z,QSeparator:f.Z,QTabPanels:h.Z,QTabPanel:p.Z,QDrawer:g.Z,QScrollArea:w.Z}),_()(n.Z,"directives",{ClosePopup:v.Z}),l()}catch(Z){l(Z)}}))},8038:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(3803);const n=(0,l.aZ)({__name:"Words",setup(e){return(e,t)=>null}}),o=n,s=o},5389:(e,t,a)=>{a.a(e,(async(e,l)=>{try{a.d(t,{Z:()=>n.Z});var n=a(1952),o=e([n]);n=(o.then?(await o)():o)[0],l()}catch(s){l(s)}}))},1828:(e,t,a)=>{a.a(e,(async(e,l)=>{try{a.d(t,{Z:()=>n.Z});var n=a(659),o=e([n]);n=(o.then?(await o)():o)[0],l()}catch(s){l(s)}}))}}]);