import{u as le,f as r,M as Pe,S as ke,i as s,N as oe,O as Te,t as m,b as De,x as Ge,y as _,P as Ee,Q as Z,R as i,T as Ke,B as F,U as X,I as Y,V as J,G as T,W as z,X as W,Y as ee,Z as Re,q as Me,r as ze,C,_ as x,$ as I,a0 as w,a1 as te,D as Ne,a2 as Oe,a3 as Ae,a4 as He,a5 as Ve,F as D,a6 as N,a7 as ae,a8 as ne,a9 as je,aa as Ue,ab as Le,ac as qe,ad as Qe,ae as Be,af as Ze,ag as Xe,k as Ye}from"./index-lRj6mBgc.js";import{c as Je,g as We,a as et,b as tt,d as at,e as nt,f as G,r as rt}from"./index-DqRzxO4A.js";import{f as st}from"./global-D4eCvQc9.js";var lt=m("<pre><code>");const ot=d=>{const[p]=le();return r(Te,{ref:g=>{var a;return(a=d.ref)==null?void 0:a.call(d,g)},get icon(){return r(Pe,{size:24})},get title(){return p("connectionsDetails")},get children(){return r(ke,{get when(){return d.selectedConnectionID},get children(){var g=lt(),a=g.firstChild;return s(a,()=>JSON.stringify(oe().find(({id:$})=>$===d.selectedConnectionID),null,2)),g}})}})};var it=async d=>{typeof d=="string"?await navigator.clipboard.writeText(d):await navigator.clipboard.write(d)},re=m('<div class="flex h-4 items-center">'),ct=m('<div class="flex h-full flex-col gap-2"><div class="flex w-full flex-wrap items-center gap-2"><div class="flex items-center gap-2"><div class="tabs-boxed tabs gap-2 pl-0"></div><div class="flex items-center"><span class="mr-2 hidden lg:inline-block">:</span><input type=checkbox class=toggle></div><select class="select select-bordered select-primary select-sm w-full max-w-full flex-1"><option value=""></option></select></div><div class="join flex flex-1 items-center md:flex-1"><input type=search class="input input-sm join-item input-primary min-w-0 flex-1"></div></div><div class="overflow-x-auto whitespace-nowrap rounded-md bg-base-300"><table><thead class="sticky top-0 z-10 h-8"></thead><tbody>'),dt=m('<button><span></span><div class="badge badge-sm">'),ut=m("<option>"),gt=m("<tr>"),mt=m("<th class=bg-base-200><div><div>"),bt=m("<button class=cursor-pointer>"),pt=m('<tr class="hover:!bg-primary hover:text-primary-content">'),ft=m("<td class=py-2>"),ht=m("<button><div></div><div></div><div>(<!>)");const se=(d,p,g,a)=>{const $=rt(d.getValue(p),g);return a({itemRank:$}),$.passed},St=()=>{const d=De();if(!Ge())return d("/setup",{replace:!0}),null;let p,g;const[a]=le(),[$,ie]=_(0),{activeConnections:O,closedConnections:A,paused:ce,setPaused:de}=Ee(),[ue,H]=_(""),[V,ge]=Z(_(!1),{name:"enableQuickFilter",storage:localStorage}),[me,be]=_(),pe=[{header:()=>a("details"),enableGrouping:!1,enableSorting:!1,enableColumnFilter:!1,enableGlobalFilter:!1,accessorKey:i.Details,cell:({row:e})=>(()=>{var l=re();return s(l,r(F,{class:"btn-circle btn-xs",onClick:()=>{be(e.original.id),g==null||g.showModal()},get icon(){return r(Ke,{size:"16"})}})),l})()},{header:()=>a("close"),enableGrouping:!1,enableSorting:!1,enableColumnFilter:!1,enableGlobalFilter:!1,accessorKey:i.Close,cell:({row:e})=>(()=>{var l=re();return s(l,r(F,{class:"btn-circle btn-xs",onClick:()=>X(e.original.id),get icon(){return r(Y,{size:"16"})}})),l})()},{header:()=>a("ID"),enableGrouping:!1,accessorKey:i.ID,accessorFn:e=>e.id},{header:()=>a("type"),accessorKey:i.Type,accessorFn:e=>`${e.metadata.type}(${e.metadata.network})`},{header:()=>a("process"),accessorKey:i.Process,accessorFn:e=>e.metadata.process||e.metadata.processPath.replace(/^.*[/\\](.*)$/,"$1")||"-"},{header:()=>a("host"),accessorKey:i.Host,accessorFn:e=>`${e.metadata.host?e.metadata.host:e.metadata.destinationIP}:${e.metadata.destinationPort}`},{header:()=>a("sniffHost"),accessorKey:i.SniffHost,accessorFn:e=>e.metadata.sniffHost||"-"},{header:()=>a("rules"),accessorKey:i.Rule,accessorFn:e=>e.rulePayload?`${e.rule} :: ${e.rulePayload}`:e.rule},{header:()=>a("chains"),accessorKey:i.Chains,accessorFn:e=>e.chains.slice().reverse().join(" :: ")},{header:()=>a("connectTime"),enableGrouping:!1,accessorKey:i.ConnectTime,accessorFn:e=>st(e.start),sortingFn:(e,l)=>J(e.original.start).valueOf()-J(l.original.start).valueOf()},{header:()=>a("dlSpeed"),enableGrouping:!1,accessorKey:i.DlSpeed,accessorFn:e=>`${T(e.downloadSpeed)}/s`,sortingFn:(e,l)=>e.original.downloadSpeed-l.original.downloadSpeed},{header:()=>a("ulSpeed"),enableGrouping:!1,accessorKey:i.ULSpeed,accessorFn:e=>`${T(e.uploadSpeed)}/s`,sortingFn:(e,l)=>e.original.uploadSpeed-l.original.uploadSpeed},{header:()=>a("dl"),enableGrouping:!1,accessorKey:i.Download,accessorFn:e=>T(e.download),sortingFn:(e,l)=>e.original.download-l.original.download},{header:()=>a("ul"),enableGrouping:!1,accessorKey:i.Upload,accessorFn:e=>T(e.upload),sortingFn:(e,l)=>e.original.upload-l.original.upload},{header:()=>a("sourceIP"),accessorKey:i.SourceIP,accessorFn:e=>{const l=z().find(f=>f.sourceIP===e.metadata.sourceIP);return l?l.tagName:e.metadata.sourceIP}},{header:()=>a("sourcePort"),accessorKey:i.SourcePort,accessorFn:e=>e.metadata.sourcePort},{header:()=>a("destination"),accessorKey:i.Destination,accessorFn:e=>e.metadata.remoteDestination||e.metadata.destinationIP||e.metadata.host},{header:()=>a("inboundUser"),accessorKey:i.InboundUser,accessorFn:e=>e.metadata.inboundUser||e.metadata.inboundName||e.metadata.inboundPort}],[fe,he]=_([]),[ve,Ce]=Z(_([{id:i.ConnectTime,desc:!0}]),{name:"connectionsTableSorting",storage:localStorage}),y=Je({filterFns:{fuzzy:se},state:{get columnOrder(){return W()},get grouping(){return fe()},get sorting(){return ve()},get columnVisibility(){return ee()},get globalFilter(){return ue()}},get data(){const e=$()===0?O():A();if(e.sort((f,P)=>f.id.localeCompare(P.id)),!V())return e;const l=new RegExp(Re(),"i");return e.filter(f=>!l.test(f.chains.join("")))},sortDescFirst:!0,enableHiding:!0,columns:pe,onGlobalFilterChange:H,globalFilterFn:se,onGroupingChange:he,onSortingChange:Ce,getFilteredRowModel:We(),getSortedRowModel:et(),getExpandedRowModel:tt(),getGroupedRowModel:at(),getCoreRowModel:nt()}),E=y.getFlatHeaders().find(({id:e})=>e===i.SourceIP),[K,$e]=_("");Me(ze(K,()=>{const e=z().find(l=>l.sourceIP===K());E==null||E.column.setFilterValue(e?e.tagName:K())}));const Se=C(()=>[{type:0,name:a("active"),count:O().length},{type:1,name:a("closed"),count:A().length}]);return(()=>{var e=ct(),l=e.firstChild,f=l.firstChild,P=f.firstChild,j=P.nextSibling,R=j.firstChild,_e=R.firstChild,U=R.nextSibling,M=j.nextSibling,xe=M.firstChild,k=f.nextSibling,L=k.firstChild,ye=l.nextSibling,q=ye.firstChild,Q=q.firstChild,Fe=Q.nextSibling;return s(P,r(te,{get each(){return Se()},children:t=>(()=>{var o=dt(),n=o.firstChild,h=n.nextSibling;return o.$$click=()=>ie(t().type),s(n,()=>t().name),s(h,()=>t().count),x(()=>I(o,w($()===t().type&&"tab-active","tab-sm sm:tab-md tab gap-2 px-2"))),o})()})),s(R,()=>a("quickFilter"),_e),U.addEventListener("change",t=>ge(t.target.checked)),M.addEventListener("change",t=>$e(t.target.value)),s(xe,()=>a("all")),s(M,r(te,{get each(){return Ne.uniq(oe().map(({metadata:{sourceIP:t}})=>{const o=z().find(n=>n.sourceIP===t);return o?o.tagName:t})).sort()},children:t=>(()=>{var o=ut();return s(o,t),x(()=>o.value=t()),o})()}),null),L.$$input=t=>H(t.target.value),s(k,r(F,{class:"btn btn-primary join-item btn-sm",onClick:()=>de(t=>!t),get icon(){return C(()=>!!ce())()?r(Oe,{}):r(Ae,{})}}),null),s(k,r(F,{class:"btn btn-primary join-item btn-sm",onClick:()=>{y.getState().globalFilter?y.getFilteredRowModel().rows.forEach(({original:t})=>X(t.id)):He()},get icon(){return r(Y,{})}}),null),s(k,r(F,{class:"btn btn-primary join-item btn-sm",onClick:()=>p==null?void 0:p.showModal(),get icon(){return r(Ve,{})}}),null),s(Q,r(D,{get each(){return y.getHeaderGroups()},children:t=>(()=>{var o=gt();return s(o,r(D,{get each(){return t.headers},children:n=>(()=>{var h=mt(),v=h.firstChild,c=v.firstChild;return s(v,(()=>{var u=C(()=>!!n.column.getCanGroup());return()=>u()?(()=>{var b=bt();return N(b,"click",n.column.getToggleGroupingHandler(),!0),s(b,(()=>{var S=C(()=>!!n.column.getIsGrouped());return()=>S()?r(ae,{size:18}):r(ne,{size:18})})()),b})():null})(),c),N(c,"click",n.column.getToggleSortingHandler(),!0),s(c,()=>G(n.column.columnDef.header,n.getContext())),s(v,()=>({asc:r(je,{}),desc:r(Ue,{})})[n.column.getIsSorted()]??null,null),x(u=>{var b=w("flex items-center gap-2"),S=w(n.column.getCanSort()&&"cursor-pointer select-none","flex-1");return b!==u.e&&I(v,u.e=b),S!==u.t&&I(c,u.t=S),u},{e:void 0,t:void 0}),h})()})),o})()})),s(Fe,r(D,{get each(){return y.getRowModel().rows},children:t=>(()=>{var o=pt();return s(o,r(D,{get each(){return t.getVisibleCells()},children:n=>(()=>{var h=ft();return h.$$contextmenu=v=>{v.preventDefault();const c=n.renderValue();c&&it(c).catch(()=>{})},s(h,(()=>{var v=C(()=>!!n.getIsGrouped());return()=>v()?(()=>{var c=ht(),u=c.firstChild,b=u.nextSibling,S=b.nextSibling,Ie=S.firstChild,B=Ie.nextSibling;return B.nextSibling,N(c,"click",t.getToggleExpandedHandler(),!0),s(u,(()=>{var we=C(()=>!!t.getIsExpanded());return()=>we()?r(ae,{size:18}):r(ne,{size:18})})()),s(b,()=>G(n.column.columnDef.cell,n.getContext())),s(S,()=>t.subRows.length,B),x(()=>I(c,w(t.getCanExpand()?"cursor-pointer":"cursor-normal","flex items-center gap-2"))),c})():(()=>{var c=C(()=>!!n.getIsAggregated());return()=>c()?G(n.column.columnDef.aggregatedCell??n.column.columnDef.cell,n.getContext()):(()=>{var u=C(()=>!!n.getIsPlaceholder());return()=>u()?null:G(n.column.columnDef.cell,n.getContext())})()})()})()),h})()})),o})()})),s(e,r(Qe,{ref:t=>p=t,get order(){return W()},get visible(){return ee()},onOrderChange:t=>Le(t),onVisibleChange:t=>qe({...t})}),null),s(e,r(ot,{ref:t=>g=t,get selectedConnectionID(){return me()}}),null),x(t=>{var o=a("search"),n=w(Be(Ze()),"table table-zebra relative rounded-none");return o!==t.e&&Xe(L,"placeholder",t.e=o),n!==t.t&&I(q,t.t=n),t},{e:void 0,t:void 0}),x(()=>U.checked=V()),e})()};Ye(["input","click","contextmenu"]);export{St as default};
