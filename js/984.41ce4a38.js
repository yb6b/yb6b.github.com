"use strict";(globalThis["webpackChunkschema_box"]=globalThis["webpackChunkschema_box"]||[]).push([[984],{7958:(e,l,a)=>{a.a(e,(async(e,t)=>{try{a.d(l,{Z:()=>I});var n=a(4569),u=a(3235),s=a(3574),o=a(8467),i=a(7213),r=a(9103),c=a(5650),d=a(3940),b=a(8014),m=e([s,r]);[s,r]=m.then?(await m)():m;const v={class:"column items-center"},g={key:0,class:"text-h5 q-my-sm text-blue-grey-8 text-spacing"},p={class:"bg-teal-2 text-grey-10 text-right"},f=(0,n._)("td",{class:"text-right bg-teal-2"}," 统计范围 ",-1),h=["innerHTML"],_=["innerHTML"],w=(0,n._)("div",{class:"text-h6 q-pt-xl text-blue-grey-8"}," 键位热力图（单位：%） ",-1),k={class:"col full-width",style:{"overflow-x":"auto"}},y={class:"col q-py-lg justify-right"},Z=(0,n._)("div",{class:"text-grey-9"},[(0,n.Uk)(" 点击打开或拖动文件 "),(0,n._)("div",{class:"q-pt-md text-bold"}," 文件要求： "),(0,n._)("ol",null,[(0,n._)("li",null,[(0,n.Uk)(" 最少 "),(0,n._)("b",null,"6000"),(0,n.Uk)(" 字的字频数据。 ")]),(0,n._)("li",null," 每行一个字和它的频数（正整数）。 "),(0,n._)("li",null,[(0,n.Uk)(" 每行的字和频数用 "),(0,n._)("b",null,"Tab"),(0,n.Uk)(" 符分隔。 ")]),(0,n._)("li",null," 所有按频数从大到小排序好。 ")])],-1),I=(0,n.aZ)({__name:"Single",props:{mabiao:{}},emits:["table"],setup(e){const l=e,a=(0,u.XI)(!1),t=(0,u.XI)(!1),m=(0,u.XI)(s.j),I=(0,n.Fl)((()=>{const e=(0,s._c)(l.mabiao,m.value),a=(0,s.g3)(e.evaluate.slice(0,3)),t=(0,s.g3)(e.evaluate.slice(0,5)),n={...e,sum1:a,sum2:t};return n}));return(e,l)=>{const s=(0,n.up)("QMarkupTable"),x=(0,n.up)("QChip"),Q=(0,n.up)("QBtn"),U=(0,n.up)("QDialog");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",v,[t.value?((0,n.wg)(),(0,n.iD)("div",g," 自定义字频 ")):(0,n.kq)("",!0),(0,n.Wm)(s,{separator:"horizontal",bordered:"",dense:"",class:"sticky-first-column-table full-width col"},{default:(0,n.w5)((()=>[(0,n._)("thead",p,[(0,n._)("tr",null,[f,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,u.SU)(r.z),(e=>((0,n.wg)(),(0,n.iD)("td",{key:e.zhName},[(0,n._)("span",{innerHTML:e.headHtml},null,8,h),"headInfoHtml"in e?((0,n.wg)(),(0,n.j4)(o.Z,{key:0,"no-container":!!e.headInfoHtmlNoContainer},{default:(0,n.w5)((()=>[(0,n._)("div",{innerHTML:e.headInfoHtml},null,8,_)])),_:2},1032,["no-container"])):(0,n.kq)("",!0)])))),128))])]),(0,n._)("tbody",null,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(3,(a=>(0,n.Wm)(c.Z,{key:a,mb:e.mabiao,"evaluate-result":I.value.evaluate[a-1],color:"bg-teal-1","base-fin-load-rate":I.value.baseFinLoadRate,actions:(0,u.SU)(r.z),onClick:l[0]||(l[0]=l=>e.$emit("table",l))},null,8,["mb","evaluate-result","base-fin-load-rate","actions"]))),64)),(0,n.Wm)(c.Z,{"index-label":"小计",class:"bg-teal-1",color:"bg-teal-1",mb:e.mabiao,"evaluate-result":I.value.sum1,actions:(0,u.SU)(r.z),"base-fin-load-rate":I.value.baseFinLoadRate,onClick:l[1]||(l[1]=l=>e.$emit("table",l))},null,8,["mb","evaluate-result","actions","base-fin-load-rate"]),(0,n.Wm)(d.Z,{actions:(0,u.SU)(r.z),color:"bg-teal-1",class:"bg-teal-1","index-label":"加权比重","evaluate-result":I.value.sum1},null,8,["actions","evaluate-result"]),((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(2,(a=>(0,n.Wm)(c.Z,{key:a,mb:e.mabiao,"evaluate-result":I.value.evaluate[a+2],color:"bg-teal-1","base-fin-load-rate":I.value.baseFinLoadRate,actions:(0,u.SU)(r.z),onClick:l[2]||(l[2]=l=>e.$emit("table",l))},null,8,["mb","evaluate-result","base-fin-load-rate","actions"]))),64)),(0,n.Wm)(c.Z,{"index-label":"总计",class:"bg-teal-1",color:"bg-teal-1",mb:e.mabiao,"evaluate-result":I.value.sum2,actions:(0,u.SU)(r.z),"base-fin-load-rate":I.value.baseFinLoadRate,onClick:l[3]||(l[3]=l=>e.$emit("table",l))},null,8,["mb","evaluate-result","actions","base-fin-load-rate"]),(0,n.Wm)(d.Z,{actions:(0,u.SU)(r.z),color:"bg-teal-1",class:"bg-teal-1","index-label":"加权比重","evaluate-result":I.value.sum2},null,8,["actions","evaluate-result"])])])),_:1}),w,(0,n._)("div",k,[(0,n.Wm)(i.Z,{"key-map":I.value.usage},null,8,["key-map"])]),(0,n._)("div",y,[(0,n.Wm)(Q,{outline:"",rounded:"",color:"secondary",onClick:l[4]||(l[4]=e=>a.value=!0)},{default:(0,n.w5)((()=>[(0,n.Uk)(" 自定义字频表 "),t.value?((0,n.wg)(),(0,n.j4)(x,{key:0,dense:"",color:"secondary",class:"text-white"},{default:(0,n.w5)((()=>[(0,n.Uk)(" 已设置 ")])),_:1})):(0,n.kq)("",!0)])),_:1})])]),(0,n.Wm)(U,{modelValue:a.value,"onUpdate:modelValue":l[6]||(l[6]=e=>a.value=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(b.Z,{length:6e3,single:"",label:"自定义字频表",onTsv:l[5]||(l[5]=e=>{m.value=e,a.value=!1,t.value=!0})},{default:(0,n.w5)((()=>[Z])),_:1})])),_:1},8,["modelValue"])],64)}}});t()}catch(v){t(v)}}))},1500:(e,l,a)=>{a.a(e,(async(e,t)=>{try{a.r(l),a.d(l,{default:()=>m});var n=a(4388),u=a(3126),s=a(5964),o=a(8881),i=a(8727),r=a(4040),c=a.n(r),d=e([n]);n=(d.then?(await d)():d)[0];const b=n.Z,m=b;c()(n.Z,"components",{QMarkupTable:u.Z,QBtn:s.Z,QChip:o.Z,QDialog:i.Z}),t()}catch(b){t(b)}}))},8014:(e,l,a)=>{a.d(l,{Z:()=>_});var t=a(4569),n=a(3235),u=a(1041),s=a(1749),o=a(6728),i=a(280);const r=(0,t.aZ)({__name:"UserFreqTsv",props:{label:{},length:{},single:{type:Boolean}},emits:["tsv"],setup(e,{emit:l}){const a=e,r=l,c=(0,n.XI)(),d=(0,n.XI)(),b=(0,n.XI)(!1),m=(0,n.XI)(""),v=(0,t.Fl)((()=>!!c.value&&!b.value));function g(){r("tsv",d.value)}function p(e){const l=a.length,t=a.single;let n=Number.POSITIVE_INFINITY,u=0;const s=/^[0-9]+$/;for(const[a,o]of(0,i.wp)(e)){const e=a.split("\t");if(2!==e.length)return`第 ${o} 行不是两列元素`;if(t&&1!==[...e[0]].length)return`第 ${o} 行的汉字「${e[0]}」不止一个字`;if(!s.test(e[1]))return`第 ${o} 行的频数「${e[1]}」不是整数`;const l=Number.parseInt(e[1]);if(l>n)return`第 ${o} 行「${e[0]} ${l}」的频数比上一行大`;n=l,u++}return u<l?`数据只有${u}行，少于${l}行`:""}return(0,t.YP)(c,(async()=>{const e=c.value;if(!e)return;b.value=!1;const l=new s.cI(e),a=await l.getText(),t=p(a);t?(b.value=!1,b.value=!0,m.value=t):d.value=a})),(e,l)=>{const a=(0,t.up)("QIcon"),s=(0,t.up)("QFile"),i=(0,t.up)("QCardSection"),r=(0,t.up)("QBtn"),d=(0,t.up)("QCardActions"),p=(0,t.up)("QCard");return(0,t.wg)(),(0,t.j4)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=e=>c.value=e),style:{width:"16rem"},filled:"",label:e.label,clearable:"",error:b.value},{prepend:(0,t.w5)((()=>[(0,t.Wm)(a,{name:(0,n.SU)(o.IC9)},null,8,["name"])])),error:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(m.value),1)])),_:1},8,["modelValue","label","error"]),(0,t.WI)(e.$slots,"default")])),_:3}),(0,t.Wm)(d,{align:"right"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{label:"确认",flat:"",disable:!v.value,color:v.value?"primary":"grey",onClick:g},null,8,["disable","color"])])),_:1})])),_:3})}}});var c=a(5940),d=a(1802),b=a(839),m=a(8592),v=a(6111),g=a(5964),p=a(4040),f=a.n(p);const h=r,_=h;f()(r,"components",{QCard:c.Z,QCardSection:d.Z,QFile:b.Z,QIcon:m.Z,QCardActions:v.Z,QBtn:g.Z})},4388:(e,l,a)=>{a.a(e,(async(e,t)=>{try{a.d(l,{Z:()=>n.Z});var n=a(7958),u=e([n]);n=(u.then?(await u)():u)[0],t()}catch(s){t(s)}}))}}]);