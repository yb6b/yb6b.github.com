"use strict";(globalThis["webpackChunkschema_box"]=globalThis["webpackChunkschema_box"]||[]).push([[196],{1952:(e,a,t)=>{t.a(e,(async(e,l)=>{try{t.d(a,{Z:()=>d});var n=t(3803),o=t(6583),s=t(4814),r=t(1474),i=t(9001),c=e([s]);s=(c.then?(await c)():c)[0];const u={class:"columns justify-center"},m=(0,n._)("thead",{class:"bg-teal-2 text-grey-10"},[(0,n._)("tr",null,[(0,n._)("td",{class:"text-right bg-teal-1"}," 统计范围 "),(0,n._)("td",null,"1 码"),(0,n._)("td",null,"2 码"),(0,n._)("td",null,"3 码"),(0,n._)("td",null,"4 码"),(0,n._)("td",{class:"text-red-8"}," 选重 "),(0,n._)("td",{class:"text-red-8"}," 理论二简 "),(0,n._)("td",null,"加权键长"),(0,n._)("td",null,"加权字均当量"),(0,n._)("td",null,"加权键均当量"),(0,n._)("td",null,"左右互击"),(0,n._)("td",null,"同指大跨排"),(0,n._)("td",null,"同指小跨排"),(0,n._)("td",null,"小指干扰"),(0,n._)("td",null,"错手"),(0,n._)("td",null,"三连击"),(0,n._)("td",null,"超标键位"),(0,n._)("td",null,"缺字标记")])],-1),d=(0,n.aZ)({__name:"Single",props:{mabiao:{}},setup(e){const a=e,t=(0,s.HM)(a.mabiao),l=(0,s.g3)(t.slice(0,3)),c=(0,s.d$)(l),d=(0,s.g3)(t.slice(0,5)),b=(0,s.d$)(d),f=(0,o.XI)(!1),h=(0,o.XI)(),p=(0,o.iH)({rowsPerPage:20}),g=["1~300","301~500","501~1500","1501~3000","3001~6000"],w=["1501~3000","3001~6000"];return(e,a)=>{const s=(0,n.up)("QMarkupTable"),v=(0,n.up)("QTable"),k=(0,n.up)("QScrollArea"),_=(0,n.up)("QDrawer");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",u,[(0,n.Wm)(s,{separator:"horizontal",bordered:"",dense:"",class:"sticky-first-column-table"},{default:(0,n.w5)((()=>[m,(0,n._)("tbody",null,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(3,(l=>(0,n.Wm)(r.Z,{key:l,"range-label":g[l-1],"mb-name":e.mabiao.name,"eva-item":(0,o.SU)(t)[l-1],onClick:a[0]||(a[0]=e=>{h.value=e,f.value=!0})},null,8,["range-label","mb-name","eva-item"]))),64)),(0,n.Wm)(r.Z,{"range-label":"1~1500","index-label":"小计",class:"bg-teal-1","mb-name":e.mabiao.name,"eva-item":(0,o.SU)(l),onClick:a[1]||(a[1]=e=>{h.value=e,f.value=!0})},null,8,["mb-name","eva-item"]),(0,n.Wm)(i.Z,{class:"bg-teal-1","index-label":"加权比重","eva-item":(0,o.SU)(c)},null,8,["eva-item"]),((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(2,(l=>(0,n.Wm)(r.Z,{key:l,"range-label":w[l-1],"mb-name":e.mabiao.name,"eva-item":(0,o.SU)(t)[l+2],onClick:a[2]||(a[2]=e=>{h.value=e,f.value=!0})},null,8,["range-label","mb-name","eva-item"]))),64)),(0,n.Wm)(r.Z,{"range-label":"1~6000","index-label":"总计",class:"bg-teal-1","mb-name":e.mabiao.name,"eva-item":(0,o.SU)(d),onClick:a[3]||(a[3]=e=>{h.value=e,f.value=!0})},null,8,["mb-name","eva-item"]),(0,n.Wm)(i.Z,{class:"bg-teal-1","index-label":"加权比重","eva-item":(0,o.SU)(b)},null,8,["eva-item"])])])),_:1})]),(0,n.Wm)(_,{modelValue:f.value,"onUpdate:modelValue":a[5]||(a[5]=e=>f.value=e),"show-if-above":"",width:400,elevated:""},{default:(0,n.w5)((()=>[(0,n.Wm)(k,{class:"fit q-pa-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(v,(0,n.dG)({pagination:p.value,"onUpdate:pagination":a[4]||(a[4]=e=>p.value=e),dense:"","title-class":"text-truncate text-center text-blue-grey-9 text-body1"},h.value,{"row-key":"index","rows-per-page-options":[20,50,100]}),null,16,["pagination"])])),_:1})])),_:1},8,["modelValue"])],64)}}});l()}catch(u){l(u)}}))},659:(e,a,t)=>{t.a(e,(async(e,l)=>{try{t.d(a,{Z:()=>f});var n=t(3803),o=t(6204),s=t(6583),r=t(6728),i=t(9481),c=t(8219),u=t(8038),m=t(261),d=e([c]);c=(d.then?(await d)():d)[0];const b="方案测评",f=(0,n.aZ)({__name:"Visualize",props:{mabiao:{}},setup(e){(0,i.Q)(b);const a=(0,s.iH)("zi");return(e,t)=>{const l=(0,n.up)("QSpace"),i=(0,n.up)("QTooltip"),d=(0,n.up)("QBtn"),f=(0,n.up)("QBar"),h=(0,n.up)("QTab"),p=(0,n.up)("QTabs"),g=(0,n.up)("QSeparator"),w=(0,n.up)("QTabPanel"),v=(0,n.up)("QTabPanels"),k=(0,n.up)("QCardSection"),_=(0,n.up)("QCard"),y=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.j4)(_,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(l),(0,n._)("span",{class:"text-overline text-blue-grey-9 text-truncate",style:{overflow:"hidden","max-width":"calc(99vw - 6rem)"}},(0,o.zw)(b)),(0,n.Wm)(l),(0,n.wy)(((0,n.wg)(),(0,n.j4)(d,{round:"",flat:"",icon:(0,s.SU)(r.r5M)},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{self:"center middle",offset:[0,25]},{default:(0,n.w5)((()=>[(0,n.Uk)(" 返回 ")])),_:1})])),_:1},8,["icon"])),[[y]])])),_:1}),(0,n.Wm)(k,{class:"q-px-lg"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),"active-color":"primary",class:"text-blue-grey-8","inline-label":""},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{name:"mb",label:"码表信息"}),(0,n.Wm)(h,{name:"zi",label:"字频测评"}),(0,n.Wm)(h,{name:"wd",label:"组词测评"})])),_:1},8,["modelValue"]),(0,n.Wm)(g),(0,n.Wm)(v,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),animated:"","transition-next":"slide-right","transition-prev":"slide-left",class:"container-lg"},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{name:"zi"},{default:(0,n.w5)((()=>[(0,n.Wm)(c.Z,{mabiao:e.mabiao},null,8,["mabiao"])])),_:1}),(0,n.Wm)(w,{name:"wd"},{default:(0,n.w5)((()=>[(0,n.Wm)(u.Z)])),_:1}),(0,n.Wm)(w,{name:"mb"},{default:(0,n.w5)((()=>[(0,n.Wm)(m.Z)])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}});l()}catch(b){l(b)}}))},809:(e,a,t)=>{t.a(e,(async(e,l)=>{try{t.d(a,{F:()=>e,c:()=>n});const{comboFeelData:e}=await t.e(98).then(t.bind(t,5098)),{keyFeelData:n}=await t.e(584).then(t.bind(t,3584));l()}catch(n){l(n)}}),1)},4814:(e,a,t)=>{t.a(e,(async(e,l)=>{try{t.d(a,{HM:()=>f,d$:()=>w,g3:()=>g});var n=t(7774),o=t(809),s=e([o]);o=(s.then?(await s)():s)[0];const i=new Set("abcdefghijklmnopqrstuvwxyz;,./"),c=(await t.e(893).then(t.bind(t,2893))).default;function u(e){const a=(0,n.R6)(e);if(a.length<6e3)throw new Error("字频数据少于6000行");return a.map((e=>[e[0],Number.parseInt(e[1])]))}function m(e,a,t=!0){const l=new Set(a.map((e=>e[0]))),n=new Map;for(const s of e.items){const e=s[0];if(e.length>1||!l.has(e))continue;const a=n.get(e);a?t?a[1].length>s[1].length&&n.set(e,s):a[1].length<s[1].length&&n.set(e,s):n.set(e,s)}const o=[];for(const[s,r]of a)if(n.has(s)){const e=n.get(s);o.push({wd:s,freq:r,code:e[1],line:e[2]})}else o.push({wd:s,freq:r});return o}function d(){return{freq:0,L1:[],L2:[],L3:[],L4:[],collision:[],brief2:[],CL:0,ziEq:0,keyEq:0,dh:[],ms:[],ss:[],pd:[],lfd:[],trible:[],overKey:[],lack:[]}}function b(e){const a=[[0,300],[300,500],[500,1500],[1500,3e3],[3e3,6e3]],t=[],l=new Set;for(const[n,o]of a){const a=d();for(let t=n;t<o;t++){const n=e[t];if(a.freq+=n.freq,!("code"in n)){a.lack.push(n);continue}const o=n.code,s=o.length;let r=!1;for(const e of o)if(!i.has(e)){a.overKey.push(n),r=!0;break}if(r)continue;switch(s){case 1:a.L1.push(n);break;case 2:a.L2.push(n);break;case 3:a.L3.push(n);break;case 4:a.L4.push(n);break;default:a.collision.push(n);break}const c=o.slice(0,2);l.has(c)||(l.add(c),a.brief2.push(n));const u=["dh","ms","ss","pd","lfd"];for(const e of u)h(a,e,n);for(let e=2;e<s;e++)o[e-2]===o[e-1]&&o[e-1]===o[e]&&a.trible.push(n);const m=n.freq;if(s<2)a.ziEq+=m,a.keyEq+=m;else{const e=p(o);a.ziEq+=e*m,a.keyEq+=e/(s-1)*m}a.CL+=s*m}t.push(a)}return t}function f(e){return b(m(e,u(c)))}function h(e,a,t){const l=t.code;for(let n=1;n<l.length;n++){const s=l[n-1]+l[n];if(o.F[s]?.[a]){e[a].push(t);break}}}function p(e){let a=0;for(let t=1;t<e.length;t++){const l=e[t-1]+e[t];a+=o.F[l].eq}return a}function g(e){const a=d(),t=["L1","L2","L3","L4","collision","brief2","dh","ms","ss","pd","lfd","trible","overKey","lack"],l=["freq","CL","ziEq","keyEq"];for(const n of e){for(const e of t)a[e]=a[e].concat(n[e]);for(const e of l)a[e]+=n[e]}return a}function w(e){const a={},t=["L1","L2","L3","L4","collision","brief2","dh","ms","ss","pd","lfd","trible","overKey","lack"],l=e.freq;for(const n of t){let t=0;for(const a of e[n])t+=a.freq/l;a[n]=t}return a}l()}catch(r){l(r)}}),1)},261:(e,a,t)=>{t.d(a,{Z:()=>s});var l=t(3803);const n=(0,l.aZ)({__name:"Mabiao",setup(e){return(e,a)=>null}}),o=n,s=o},8219:(e,a,t)=>{t.a(e,(async(e,l)=>{try{t.d(a,{Z:()=>b});var n=t(5389),o=t(9006),s=t(7576),r=t(7304),i=t(6744),c=t(762),u=t.n(c),m=e([n]);n=(m.then?(await m)():m)[0];const d=n.Z,b=d;u()(n.Z,"components",{QTable:o.Z,QMarkupTable:s.Z,QDrawer:r.Z,QScrollArea:i.Z}),l()}catch(d){l(d)}}))},1474:(e,a,t)=>{t.d(a,{Z:()=>_});var l=t(3803),n=t(6204),o=t(6583),s=t(7774);const r={class:"text-right bg-teal-1"},i=["onClick"],c={key:1,class:"text-right"},u={class:"text-right"},m={class:"text-right"},d={class:"text-right"},b=["onClick"],f={key:1,class:"text-right"},h={key:1,class:"text-right"},p=(0,l.aZ)({__name:"SingleNormalRow",props:{rangeLabel:{},mbName:{},evaItem:{},indexLabel:{}},emits:["click"],setup(e){const a=[{name:"index",label:"汉字",field:"wd"},{name:"code",label:"编码",field:"code",classes:"font-monospace"},{name:"freq",label:"字频",field:"freq"},{name:"line",label:"码表行数",field:"line"}],t=[{name:"index",label:"汉字",field:"wd"},{name:"freq",label:"字频",field:"freq"}],p=[["L1","一码字"],["L2","二码字"],["L3","三码字"],["L4","四码字"],["collision","选重"],["brief2","理论二简"]],g=[["dh","左右互击"],["ms","同指大跨排"],["ss","同指小跨排"],["pd","小指干扰"],["lfd","错手"],["trible","三连击"],["overKey","超标键位"]];return(e,w)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",r,(0,n.zw)(e.indexLabel||e.rangeLabel),1),((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(p,(t=>((0,l.wg)(),(0,l.iD)(l.HY,{key:t[0]},[e.evaItem[t[0]].length?((0,l.wg)(),(0,l.iD)("td",{key:0,class:"cursor-pointer hover-dark text-right",onClick:()=>{e.$emit("click",{title:`${e.mbName} 第 ${e.rangeLabel} 条的${t[1]}`,columns:a,rows:e.evaItem[t[0]]})}},(0,n.zw)(e.evaItem[t[0]].length),9,i)):((0,l.wg)(),(0,l.iD)("td",c,(0,n.zw)(e.evaItem[t[0]].length),1))],64)))),64)),(0,l._)("td",u,(0,n.zw)((0,o.SU)(s.$1)(e.evaItem.CL/e.evaItem.freq)),1),(0,l._)("td",m,(0,n.zw)((0,o.SU)(s.$1)(e.evaItem.ziEq/e.evaItem.freq)),1),(0,l._)("td",d,(0,n.zw)((0,o.SU)(s.$1)(e.evaItem.keyEq/e.evaItem.freq)),1),((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(g,(t=>((0,l.wg)(),(0,l.iD)(l.HY,{key:t[0]},[e.evaItem[t[0]].length?((0,l.wg)(),(0,l.iD)("td",{key:0,class:"cursor-pointer hover-dark text-right",onClick:()=>{e.$emit("click",{title:`${e.mbName} 第 ${e.rangeLabel} 条的${t[1]}`,columns:a,rows:e.evaItem[t[0]]})}},(0,n.zw)(e.evaItem[t[0]].length),9,b)):((0,l.wg)(),(0,l.iD)("td",f,(0,n.zw)(e.evaItem[t[0]].length),1))],64)))),64)),e.evaItem.lack.length?((0,l.wg)(),(0,l.iD)("td",{key:0,class:"cursor-pointer hover-dark text-right",onClick:w[0]||(w[0]=()=>{e.$emit("click",{title:`${e.mbName} 第 ${e.rangeLabel} 条的缺字`,columns:t,rows:e.evaItem.lack})})},(0,n.zw)(e.evaItem.lack.length),1)):((0,l.wg)(),(0,l.iD)("td",h,(0,n.zw)(e.evaItem.lack.length),1))]))}});var g=t(9006),w=t(762),v=t.n(w);const k=p,_=k;v()(p,"components",{QTable:g.Z})},9001:(e,a,t)=>{t.d(a,{Z:()=>u});var l=t(3803),n=t(6204),o=t(6583),s=t(7774);const r={class:"text-right bg-teal-1"},i=(0,l.aZ)({__name:"SingleSumRow",props:{evaItem:{},indexLabel:{}},setup(e){const a=["L1","L2","L3","L4","collision","brief2","/","/","/","dh","ms","ss","pd","lfd","trible","overKey","lack"];return(e,t)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",r,(0,n.zw)(e.indexLabel),1),((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(a,(a=>(0,l._)("td",{key:a,class:"text-right"},(0,n.zw)("/"===a?"/":0===e.evaItem[a]?"0":(0,o.SU)(s.$1)(e.evaItem[a],2,!0)),1))),64))]))}}),c=i,u=c},1196:(e,a,t)=>{t.a(e,(async(e,l)=>{try{t.r(a),t.d(a,{default:()=>_});var n=t(1828),o=t(5041),s=t(8176),r=t(5692),i=t(2158),c=t(8709),u=t(9700),m=t(9497),d=t(4395),b=t(4281),f=t(615),h=t(4825),p=t(5679),g=t(762),w=t.n(g),v=e([n]);n=(v.then?(await v)():v)[0];const k=n.Z,_=k;w()(n.Z,"components",{QCard:o.Z,QBar:s.Z,QSpace:r.Z,QBtn:i.Z,QTooltip:c.Z,QCardSection:u.Z,QTabs:m.Z,QTab:d.Z,QSeparator:b.Z,QTabPanels:f.Z,QTabPanel:h.Z}),w()(n.Z,"directives",{ClosePopup:p.Z}),l()}catch(k){l(k)}}))},8038:(e,a,t)=>{t.d(a,{Z:()=>s});var l=t(3803);const n=(0,l.aZ)({__name:"Words",setup(e){return(e,a)=>null}}),o=n,s=o},5389:(e,a,t)=>{t.a(e,(async(e,l)=>{try{t.d(a,{Z:()=>n.Z});var n=t(1952),o=e([n]);n=(o.then?(await o)():o)[0],l()}catch(s){l(s)}}))},1828:(e,a,t)=>{t.a(e,(async(e,l)=>{try{t.d(a,{Z:()=>n.Z});var n=t(659),o=e([n]);n=(o.then?(await o)():o)[0],l()}catch(s){l(s)}}))}}]);