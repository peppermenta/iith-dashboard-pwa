(this["webpackJsonpiith-dashboard-pwa"]=this["webpackJsonpiith-dashboard-pwa"]||[]).push([[0],{136:function(e,t,a){e.exports=a(160)},141:function(e,t,a){},150:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),i=(a(141),a(95)),c=a(62),u=a(14),s=a(46),m=(a(103),a(143),a(104)),d=a.n(m),p=a(105),f=a(245),g=a(249),E=a(222),h=a(248),b=a(53),y=a(17),v=a(218),S=a(223),I=a(162),w=a(224),k=a(54),O=a(96),j=a(250),x=a(225),F=a(220),L=Object(v.a)({root:{minWidth:275,marginBottom:"3px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),N=Object(v.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,fontSize:14}}})),T=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function A(e){var t=e.Menu,a=e.schedule,l=e.events,o=e.loading,i=e.error,c=Object(n.useState)(null),s=Object(u.a)(c,2),m=s[0],d=s[1],p=Object(n.useState)(0),f=Object(u.a)(p,2),g=f[0],h=f[1],b=new Date,y=b.getDay(),v=L(),A=N();Object(n.useEffect)((function(){if(!i&&!o&&a){var e=b.getHours()+b.getMinutes()/60,t=[],n=0;if(0===g){var r=a.ToIITH.LINGAMPALLY.map((function(e){return e}));0!==b.getDay()&&6!==b.getDay()||(r=a.ToIITH.LINGAMPALLYW.map((function(e){return e})));for(var l=0;l<r.length;l+=1){var c=r[l].lastIndexOf(":");if(parseFloat(r[l].substring(0,c))+parseFloat(r[l].substring(c+1,r[l].length))/60>e){n=1,t.push(r[l]);break}}0===n&&t.push(r[0]),n=0,r=a.ToIITH.LAB.map((function(e){return e}));for(var u=0;u<r.length;u+=1){var s=r[u].lastIndexOf(":");if(parseFloat(r[u].substring(0,s))+parseFloat(r[u].substring(s+1,r[u].length))/60>e){n=1,t.push(r[u]);break}}0===n&&t.push(r[0]),n=0,r=a.ToIITH.SANGAREDDY.map((function(e){return e}));for(var m=0;m<r.length;m+=1){var p=r[m].lastIndexOf(":");if(parseFloat(r[m].substring(0,p))+parseFloat(r[m].substring(p+1,r[m].length))/60>e){n=1,t.push(r[m]);break}}0===n&&t.push(r[0]),n=0}else{var f=a.FromIITH.LINGAMPALLY.map((function(e){return e}));0!==b.getDay()&&6!==b.getDay()||(f=a.FromIITH.LINGAMPALLYW.map((function(e){return e})));for(var E=0;E<f.length;E+=1){var h=f[E].lastIndexOf(":");if(parseFloat(f[E].substring(0,h))+parseFloat(f[E].substring(h+1,f[E].length))/60>e){n=1,t.push(f[E]);break}}0===n&&t.push(f[0]),n=0,f=a.FromIITH.LAB.map((function(e){return e}));for(var y=0;y<f.length;y+=1){var v=f[y].lastIndexOf(":");if(parseFloat(f[y].substring(0,v))+parseFloat(f[y].substring(v+1,f[y].length))/60>e){n=1,t.push(f[y]);break}}0===n&&t.push(f[0]),n=0,f=a.FromIITH.SANGAREDDY.map((function(e){return e}));for(var S=0;S<f.length;S+=1){var I=f[S].lastIndexOf(":");if(parseFloat(f[S].substring(0,I))+parseFloat(f[S].substring(I+1,f[S].length))/60>e){n=1,t.push(f[S]);break}}0===n&&t.push(f[0]),n=0}console.log("Done"),d(t)}}),[a,g,d,i,o]);var C=function(){var e=b.getHours()+b.getMinutes()/60;return e>=10&&e<=15?"Lunch":e>=15&&e<=18.5?"Snacks":e>=18.5&&e<=22.5?"Dinner":"Breakfast"}();return i?r.a.createElement("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},r.a.createElement("h2",null,"Error. Please try again later"),r.a.createElement(I.a,{color:"primary",onClick:window.location.reload},"Reload")):o?r.a.createElement("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},r.a.createElement(E.a,null)):r.a.createElement("div",null,r.a.createElement(S.a,{className:v.root},r.a.createElement(w.a,null,r.a.createElement(k.a,{variant:"h6"},"Today's Agenda"),r.a.createElement(k.a,null,function(){for(var e=new Date,t=[],a=0;a<l.length;a+=1){var n=l[a],o=new Date(n.start);if(o.getDate()===e.getDate()&&o.getMonth()===e.getMonth()&&o.getFullYear()===e.getFullYear()){var i={};i.title=n.title;var c=new Date(n.end);o.getDate()===c.getDate()&&o.getMonth()===c.getMonth()&&o.getFullYear()===c.getFullYear()?i.timestamp="".concat(o.getHours().toString(),":").concat("0"===o.getMinutes().toString()?"00":o.getMinutes().toString()," - ").concat(c.getHours().toString(),":").concat("0"===c.getMinutes().toString()?"00":c.getMinutes().toString()):i.timestamp="",t.push(i)}}return r.a.createElement("div",null,r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",null,r.a.createElement(k.a,null,"".concat(e.title," ").concat(e.timestamp)))}))))}()))),r.a.createElement(S.a,{className:v.root},r.a.createElement(w.a,null,r.a.createElement(k.a,{variant:"h6"},"Today's"," ".concat(C)),r.a.createElement(k.a,null,function(e){var a=t.LDH[T[y]][e],n="".concat("LDH"," Additional"),l=t[n][T[y]][e];return r.a.createElement(j.a,null,r.a.createElement("div",null,r.a.createElement(j.a,{ml:.5},a.join(", ")),r.a.createElement(F.a,null),r.a.createElement("div",null,r.a.createElement(j.a,{fontWeight:"fontWeightMedium",mt:.5},"Extras")),r.a.createElement(j.a,{ml:.5},l.map((function(e){return r.a.createElement(k.a,null,e)})))))}(C)))),r.a.createElement(S.a,{className:v.root},r.a.createElement(w.a,null,r.a.createElement(k.a,null,r.a.createElement(x.a,{container:!0,spacing:0,style:{padding:"10px"},className:A.root,alignItems:"center"},r.a.createElement(x.a,{item:!0,xs:6,alignItems:"center"},r.a.createElement(j.a,{display:"flex",justifyContent:"flex-start",bgcolor:"background.paper",alignItems:"center"},r.a.createElement(k.a,{variant:"h6"},"Bus schedule"))),r.a.createElement(x.a,{item:!0,xs:6,justifyContent:"flex-end",alignitems:"center"},r.a.createElement(j.a,{display:"flex",bgcolor:"background.paper",justifyContent:"flex-end",alignItems:"center"},r.a.createElement(I.a,{color:"primary",variant:"contained",onClick:function(){h(1-g)}},0===g?"To IITH":"From IITH")))),r.a.createElement(x.a,{container:!0,spacing:0,className:A.root},r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(O.a,{className:A.paper},r.a.createElement(j.a,{fontWeight:"fontWeightMedium"},"Lingampally"))),r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(O.a,{className:A.paper},r.a.createElement(j.a,{fontWeight:"fontWeightMedium"},"MainGate"))),r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(O.a,{className:A.paper},r.a.createElement(j.a,{fontWeight:"fontWeightMedium"},"Sangareddy"))),r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(O.a,{className:A.paper},null!=m?m[0]:"loading")),r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(O.a,{className:A.paper},null!=m?m[1]:"loading")),r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(O.a,{className:A.paper},null!=m?m[2]:"loading")))))))}A.defaultProps={Menu:{},schedule:{},events:[],loading:!0,error:!1};var C=A,M=a(258),D=a(228),W=a(253),H=a(18),P=a(226),G=a(163),B=a(227),Y=a(256),R=a(230),U=a(231),J=a(69),z=a.n(J),K=a(229),V=(a(150),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]);function _(e){var t=e.color;return r.a.createElement("svg",{width:25,height:25},r.a.createElement("path",{fill:t,d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"}))}_.defaultProps={color:"red"};var q=function(e){var t=e.day,a=e.activeStep,n=e.activeColor,l=e.defaultColor,o=e.textColor,i=l;return t===V[a]&&(i=n),r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(_,{color:i}),r.a.createElement("div",{style:{color:o,position:"absolute",top:0,left:0,width:"100%",height:"100%",textAlign:"center",lineHeight:"24px"}},t[0]))};function Q(e){var t=e.Menu,a=e.loading,l=e.error,o=new Date,i=Object(n.useState)(o.getDay()),c=Object(u.a)(i,2),s=c[0],m=c[1],d=Object(H.a)(),p=Object(n.useState)(localStorage.getItem("messPreference")||"LDH"),f=Object(u.a)(p,2),g=f[0],h=f[1],b=function(){var e=o.getHours()+o.getMinutes()/60;return e>=10&&e<=15?"Lunch":e>=15&&e<=18.5?"Snacks":e>=18.5&&e<=22.5?"Dinner":"Breakfast"}(),y=function(e){var a=t[g][V[s]][e],n="".concat(g," Additional"),l=t[n][V[s]][e];return r.a.createElement("div",null,r.a.createElement(P.a,{dense:!0},a.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{key:e},r.a.createElement(B.a,null,r.a.createElement(k.a,null,e))))}))),r.a.createElement(F.a,null),r.a.createElement("div",null,r.a.createElement(k.a,null,"Extras")),r.a.createElement(P.a,{dense:!0},l.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{key:e},r.a.createElement(B.a,null,r.a.createElement(k.a,null,e))))}))))};return l?r.a.createElement("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},r.a.createElement("h2",null,"Error. Please try again later"),r.a.createElement(I.a,{color:"primary",onClick:window.location.reload},"Reload")):a?r.a.createElement("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},r.a.createElement(E.a,null)):r.a.createElement("div",null,r.a.createElement(M.a,{alternativeLabel:!0,nonLinear:!0,activeStep:s},V.map((function(e,t){return r.a.createElement(D.a,{key:e},r.a.createElement(W.a,{icon:r.a.createElement(q,{day:e,activeStep:s,activeColor:d.palette.primary.main,defaultColor:d.palette.primary.contrastText,textColor:"black"}),onClick:function(){return m(t)}}))}))),r.a.createElement(S.a,{className:"card-props"},r.a.createElement(w.a,null,r.a.createElement(k.a,null,r.a.createElement(x.a,{container:!0,spacing:0,className:"button-props",alignItems:"center"},r.a.createElement(x.a,{item:!0,xs:6,alignItems:"center"},r.a.createElement(j.a,{display:"flex",justifyContent:"flex-start",bgcolor:"background.paper",alignItems:"center"},r.a.createElement(k.a,{variant:"h6"},"Mess Menu"))),r.a.createElement(x.a,{item:!0,xs:6,justifyContent:"flex-end",alignItems:"center"},r.a.createElement(j.a,{display:"flex",bgcolor:"background.paper",justifyContent:"flex-end",alignItems:"center"},r.a.createElement(K.a,{disableElevation:!0,variant:"contained",color:"primary"},r.a.createElement(I.a,{onClick:function(){"LDH"===g?(localStorage.setItem("messPreference","UDH"),h("UDH")):(localStorage.setItem("messPreference","LDH"),h("LDH"))}},g))))),r.a.createElement(Y.a,{defaultExpanded:"Breakfast"===b},r.a.createElement(R.a,{expandIcon:r.a.createElement(z.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(j.a,{fontWeight:"fontWeightMedium"},"Breakfast")),r.a.createElement(U.a,null,y("Breakfast"))),r.a.createElement(Y.a,{defaultExpanded:"Lunch"===b},r.a.createElement(R.a,{expandIcon:r.a.createElement(z.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},r.a.createElement(j.a,{fontWeight:"fontWeightMedium"},"Lunch")),r.a.createElement(U.a,null,y("Lunch"))),r.a.createElement(Y.a,{defaultExpanded:"Snacks"===b},r.a.createElement(R.a,{expandIcon:r.a.createElement(z.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},r.a.createElement(j.a,{fontWeight:"fontWeightMedium"},"Snacks")),r.a.createElement(U.a,null,y("Snacks"))),r.a.createElement(Y.a,{defaultExpanded:"Dinner"===b},r.a.createElement(R.a,{expandIcon:r.a.createElement(z.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},r.a.createElement(j.a,{fontWeight:"fontWeightMedium"},"Dinner")),r.a.createElement(U.a,null,y("Dinner")))))))}q.defaultProps={day:"Sunday",activeStep:0,activeColor:"red",defaultColor:"red",textColor:"black"},Q.defaultProps={Menu:{},loading:!0,error:!1};var $=Q,X=a(114),Z=a(115),ee=a(86),te=a(254),ae=a(233),ne=a(239),re=a(235),le=a(236),oe=a(234),ie=a(257),ce=a(252);a(155);function ue(e){var t=e.eventList,a=e.handleNewCustomEvent,l=Object(n.useState)(!1),o=Object(u.a)(l,2),i=o[0],c=o[1],s=Object(n.useState)(null),m=Object(u.a)(s,2),d=m[0],p=m[1],f=Object(n.useState)(null===localStorage.getItem("aimskey")),g=Object(u.a)(f,2),E=g[0],h=g[1],b=Object(H.a)(),y="",S=null,w=null,k=null,O=Object(v.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));Object(n.useEffect)((function(){document.querySelector("#calendar-div").style.setProperty("--primary-color",b.palette.primary.main),document.querySelector("#calendar-div").style.setProperty("--text-color",b.palette.primary.contrastText)})),Object(n.useEffect)((function(){var e=new Date,t="".concat(e.getFullYear().toString(),"-").concat(e.getMonth()+1<10?"0".concat((e.getMonth()+1).toString()):(e.getMonth()+1).toString(),"-").concat(e.getDate().toString(),"T").concat(e.getHours().toString(),":").concat(e.getMinutes().toString());p(t)}),[]);var j=O(),x=function(){c(!1)};return r.a.createElement("div",{id:"calendar-div"},r.a.createElement(X.a,{plugins:[ee.b,Z.a],initialView:"timeGridWeek",headerToolbar:{left:"prev,today,next",right:"dayGridMonth,timeGridWeek,timeGridDay"},slotLabelFormat:{hour:"numeric",hour12:!1},expandRows:!1,scrollTime:"09:00:00",eventOverlap:!0,slotEventOverlap:!1,nowIndicator:!0,events:t,height:500}),r.a.createElement(I.a,{variant:"contained",color:"primary",onClick:function(){c(!0)},style:{margin:"5px"}},"Add event"),r.a.createElement(ie.a,{open:E,autoHideDuration:3e3,onClose:function(e,t){"clickaway"!==t&&h(!1)},style:{marginBottom:"10%"}},r.a.createElement(ce.a,{elevation:6,variant:"filled",severity:"warning"},"AIMS Timetable not synced")),r.a.createElement(ae.a,{open:i,onClose:x,"aria-labelledby":"form-dialog-title"},r.a.createElement(oe.a,{id:"form-dialog-title"},"Add event"),r.a.createElement(re.a,null,r.a.createElement(le.a,null,"Fill out the details of the event below:"),r.a.createElement(te.a,{autoFocus:!0,margin:"dense",id:"title",label:"event title",fullWidth:!0,onChange:function(e){y=e.target.value}}),r.a.createElement(te.a,{id:"event_date",label:"Event date",type:"date",defaultValue:d,className:j.textField,onChange:function(e){S=e.target.value},InputLabelProps:{shrink:!0}}),r.a.createElement(te.a,{id:"start_time",label:"Start Time",type:"time",defaultValue:d,className:j.textField,onChange:function(e){w=e.target.value},InputLabelProps:{shrink:!0}}),r.a.createElement(te.a,{id:"end_time",label:"End Time",type:"time",defaultValue:d,className:j.textField,onChange:function(e){k=e.target.value},InputLabelProps:{shrink:!0}})),r.a.createElement(ne.a,null,r.a.createElement(I.a,{onClick:function(){if(!S||!k||!w)return alert("Start and End Times must be specified to create a new event"),void x();var e=new Date("".concat(S," ").concat(w,":00")),t=new Date("".concat(S," ").concat(k,":00"));e<t?a(y,e,t):a(y,t,e),x()},color:"primary",style:{margin:"10px"}},"Save"))))}ue.defaultProps={eventList:[],handleNewCustomEvent:function(){alert("Error, please try again later")}};var se=ue,me=a(240),de=a(251);a(156);function pe(e){var t=e.schedule,a=e.loading,l=e.error,o=Object(n.useState)("LAB"),i=Object(u.a)(o,2),c=i[0],s=i[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),p=d[0],f=d[1],g=Object(n.useState)(!1),h=Object(u.a)(g,2),b=h[0],y=h[1],v=function(e){return"to"===e?("LINGAMPALLY"===c?p?t.ToIITH.LINGAMPALLYW:t.ToIITH.LINGAMPALLY:t.ToIITH[c]).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{key:e},r.a.createElement(B.a,null,e)),r.a.createElement(F.a,null))})):"from"===e?("LINGAMPALLY"===c?p?t.FromIITH.LINGAMPALLYW:t.FromIITH.LINGAMPALLY:t.FromIITH[c]).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{key:e},r.a.createElement(B.a,null,e)),r.a.createElement(F.a,null))})):r.a.createElement(G.a,null,r.a.createElement(B.a,null,"Error"))};return l?r.a.createElement("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},r.a.createElement("h2",null,"Error. Please try again later"),r.a.createElement(I.a,{color:"primary",onClick:window.location.reload},"Reload")):a?r.a.createElement("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},r.a.createElement(E.a,null)):r.a.createElement("div",null,r.a.createElement(j.a,{display:"flex",flexDirection:"row",justifyContent:"space-between"},r.a.createElement(I.a,{color:"primary",variant:"contained",onClick:function(){f(!p)}},p?"Weekday":"Weekend"),r.a.createElement(de.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:b,onClose:function(){y(!1)},onOpen:function(){y(!0)},value:c,onChange:function(e){s(e.target.value)}},r.a.createElement(me.a,{value:"LINGAMPALLY"},"Lingampally"),r.a.createElement(me.a,{value:"SANGAREDDY"},"Sangareddy"),r.a.createElement(me.a,{value:"ODF"},"ODF"),r.a.createElement(me.a,{value:"LAB"},"Maingate"))),r.a.createElement(j.a,{display:"flex",flexDirection:"row",justifyContent:"space-around",padding:"50px"},r.a.createElement(j.a,null,r.a.createElement("h3",null,"IITH to"," ".concat(c[0]).concat(c.substr(1).toLowerCase())),r.a.createElement(P.a,{className:"times-list"},v("to"))),r.a.createElement(j.a,null,r.a.createElement("h3",null,c[0]+c.substr(1).toLowerCase()," ","to IITH"),r.a.createElement(P.a,{className:"times-list"},v("from")))))}var fe=pe;pe.defaultProps={schedule:{},loading:!0,error:!1};var ge=a(241),Ee=a(242),he=a(106),be=a.n(he),ye=a(107),ve=a.n(ye),Se=a(109),Ie=a.n(Se),we=a(108),ke=a.n(we);var Oe=function(){var e=Object(n.useState)("home"),t=Object(u.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=window.location.pathname;l(e.substr(1))}),[l]),r.a.createElement(ge.a,{value:a,onChange:function(e,t){l(t)},showLabels:!0},r.a.createElement(Ee.a,{component:b.b,to:"",label:"",value:"",icon:r.a.createElement(be.a,null)}),r.a.createElement(Ee.a,{component:b.b,to:"/mess",label:"",value:"mess",icon:r.a.createElement(ve.a,null)}),r.a.createElement(Ee.a,{component:b.b,to:"/timetable",label:"",value:"timetable",icon:r.a.createElement(ke.a,null)}),r.a.createElement(Ee.a,{component:b.b,to:"/bus",label:"",value:"bus",icon:r.a.createElement(Ie.a,null)}))},je=a(246),xe=a(261),Fe=a(255),Le=a(164),Ne=a(243),Te=a(112),Ae=a.n(Te),Ce=a(110),Me=a.n(Ce),De=a(111),We=a.n(De),He=a(247),Pe=a(244),Ge=a(260),Be=Object(v.a)((function(e){return{root:{display:"flex"},drawer:{width:240,flexShrink:0},appBar:{zIndex:e.zIndex.drawer+1},menuButton:{marginRight:e.spacing(2)},toolbar:e.mixins.toolbar,drawerPaper:{width:240},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:e.spacing(3)}}}));function Ye(e){var t=e.updateTT,a=e.toggleTheme,n=Be(),l=r.a.useState(!1),o=Object(u.a)(l,2),i=o[0],c=o[1];function m(){c(!i)}var d=r.a.createElement("div",null,r.a.createElement(F.a,null),r.a.createElement(P.a,null,r.a.createElement(G.a,{button:!0,key:"Sync with aims timetable",type:"submit",onClick:t},r.a.createElement(Ne.a,null,r.a.createElement(Me.a,null)),r.a.createElement(B.a,{primary:"Sync with AIMS Timetable"}))),r.a.createElement(F.a,null),r.a.createElement(P.a,null,r.a.createElement(G.a,{button:!0,key:"Logout",type:"submit",onClick:function(){localStorage.clear(),s.a.auth().signOut(),window.location.reload()}},r.a.createElement(Ne.a,null,r.a.createElement(We.a,null)),r.a.createElement(B.a,{primary:"Logout"}))),r.a.createElement(F.a,null),r.a.createElement(P.a,null,r.a.createElement(G.a,null,r.a.createElement(Pe.a,{control:r.a.createElement(Ge.a,{onChange:a}),label:"Toggle Theme"}))));return r.a.createElement("div",{className:n.root},r.a.createElement(f.a,null),r.a.createElement(je.a,{position:"fixed",className:n.appBar},r.a.createElement(He.a,null,r.a.createElement(Le.a,{color:"inherit","aria-label":"Open drawer",edge:"start",onClick:m,className:n.menuButton},r.a.createElement(Ae.a,null)),r.a.createElement(k.a,{variant:"h6",noWrap:!0},"IITH Dashboard"))),r.a.createElement("nav",{className:n.drawer},r.a.createElement(Fe.a,{smUp:!0,implementation:"css"},r.a.createElement(xe.a,{variant:"temporary",open:i,onClose:m,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},d)),r.a.createElement(Fe.a,{xsDown:!0,implementation:"css"},r.a.createElement(xe.a,{className:n.drawer,variant:"temporary",classes:{paper:n.drawerPaper}},r.a.createElement("div",{className:n.toolbar}),d))),r.a.createElement("div",{className:n.content},r.a.createElement("div",{className:n.toolbar})))}Ye.defaultProps={updateTT:function(){},toggleTheme:function(){}};var Re=Ye,Ue=a(94),Je=a.n(Ue),ze=["2021-02-08 00:00:00","2021-03-08 00:00:00","2021-04-08 00:00:00","2021-05-08 00:00:00","2021-06-08 00:00:00","2021-07-08 00:00:00"],Ke=["2021-03-08 00:00:00","2021-04-08 00:00:00","2021-05-08 00:00:00","2021-06-08 00:00:00","2021-07-08 00:00:00","2021-08-08 00:00:00"],Ve={A:[{day:1,hour:9,minute:0,duration:55},{day:3,hour:11,minute:0,duration:55},{day:4,hour:10,minute:0,duration:55}],B:[{day:1,hour:10,minute:0,duration:55},{day:3,hour:9,minute:0,duration:55},{day:4,hour:11,minute:0,duration:55}],C:[{day:1,hour:11,minute:0,duration:55},{day:3,hour:10,minute:0,duration:55},{day:4,hour:9,minute:0,duration:55}],D:[{day:1,hour:12,minute:0,duration:55},{day:2,hour:9,minute:0,duration:55},{day:5,hour:11,minute:0,duration:55}],E:[{day:2,hour:10,minute:0,duration:55},{day:4,hour:12,minute:0,duration:55},{day:5,hour:9,minute:0,duration:55}],F:[{day:2,hour:11,minute:0,duration:55},{day:3,hour:14,minute:30,duration:55},{day:5,hour:10,minute:0,duration:55}],G:[{day:2,hour:12,minute:0,duration:55},{day:3,hour:12,minute:0,duration:55},{day:5,hour:12,minute:0,duration:55}],P:[{day:1,hour:14,minute:30,duration:85},{day:4,hour:16,minute:0,duration:85}],Q:[{day:1,hour:16,minute:0,duration:85},{day:4,hour:14,minute:30,duration:85}],R:[{day:2,hour:14,minute:30,duration:85},{day:5,hour:16,minute:0,duration:85}],S:[{day:2,hour:16,minute:0,duration:85},{day:5,hour:14,minute:30,duration:85}]};var _e=function(e,t){var a=[];return e&&e.identifiedCourses.forEach((function(t,n){var r=Number(e.identifiedSegments[n][0]),l=Number(e.identifiedSegments[n].slice(-1)),o=e.identifiedSlots[n],i=Je()(ze[r-1]),c=Je()(Ke[l-1]);Ve[o].forEach((function(e){for(var n=e.day;;){var r=i.clone().weekday(n).add(e.hour,"hours").add(e.minute,"minutes");if(r.isBefore(i))n+=7;else{if(r.isAfter(c))break;a.push({start:r.toDate(),end:r.clone().add(e.duration,"minutes").toDate(),title:t}),n+=7}}}))})),[].concat(a,Object(c.a)(t))},qe=a(113),Qe=Object(qe.a)({palette:{primary:{light:"#c158dc",main:"#8e24aa",dark:"#5c007a",contrastText:"#FFFFFF"},secondary:{light:"#c158dc",main:"#8e24aa",dark:"#5c007a",contrastText:"#FFFFFF"},background:{},type:"light"},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),$e=Object(qe.a)({palette:{primary:{light:"#c158dc",main:"#8e24aa",dark:"#5c007a",contrastText:"#FFFFFF"},secondary:{light:"#c158dc",main:"#8e24aa",dark:"#5c007a",contrastText:"#FFFFFF"},background:{},type:"dark"},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}});a(159);d.a.config(),s.a.initializeApp({apiKey:"AIzaSyATtmHvvakc69tD-pUFbYd2RG8QgEBokr8",authDomain:"aims-helper-247320.firebaseapp.com",databaseURL:"https://aims-helper-247320.firebaseio.com",projectId:"aims-helper-247320",storageBucket:"aims-helper-247320.appspot.com",messagingSenderId:"198169856520",appId:"1:198169856520:web:a4480faea25328b5"});var Xe=new s.a.auth.GoogleAuthProvider,Ze=function(){var e=Xe;e.addScope("profile"),e.addScope("email"),s.a.auth().signInWithRedirect(e).then((function(){console.log("Success")})).catch((function(e){console.log(e)}))};var et=function(){var e=Object(p.a)(s.a.auth()),t=Object(u.a)(e,3),a=t[0],l=t[1],o=t[2],m=Object(n.useState)({}),d=Object(u.a)(m,2),v=d[0],S=d[1],I=Object(n.useState)(!0),w=Object(u.a)(I,2),k=w[0],O=w[1],j=Object(n.useState)(!1),x=Object(u.a)(j,2),F=x[0],L=x[1],N=Object(n.useState)({}),T=Object(u.a)(N,2),A=T[0],M=T[1],D=Object(n.useState)(!0),W=Object(u.a)(D,2),H=W[0],P=W[1],G=Object(n.useState)(!1),B=Object(u.a)(G,2),Y=B[0],R=B[1],U=Object(n.useState)(JSON.parse(localStorage.getItem("aimskey"))||null),J=Object(u.a)(U,2),z=J[0],K=J[1],V=Object(n.useState)(JSON.parse(localStorage.getItem("customkey"))||[]),_=Object(u.a)(V,2),q=_[0],Q=_[1],X=Object(n.useState)(JSON.parse(localStorage.getItem("masterkey"))||[]),Z=Object(u.a)(X,2),ee=Z[0],te=Z[1],ae=Object(n.useState)("light"===localStorage.getItem("themeKey")?Qe:$e),ne=Object(u.a)(ae,2),re=ne[0],le=ne[1],oe=s.a.firestore();return Object(n.useEffect)((function(){fetch("https://api.npoint.io/696a3afac07baf8e0827").then((function(e){return e.json()})).then((function(e){S(e),O(!1)})).catch((function(){L(!0)}))}),[S,O,L]),Object(n.useEffect)((function(){fetch("https://api.npoint.io/9acb209ff11e84de8b1c").then((function(e){return e.json()})).then((function(e){M(e),P(!1)})).catch((function(){R(!0)}))}),[M,P,R]),o?r.a.createElement("h1",null,"An error has ocurred. Please try again later"):l?r.a.createElement("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},r.a.createElement(E.a,null)):a?r.a.createElement(b.a,null,r.a.createElement(h.a,{theme:re},r.a.createElement(f.a,null),r.a.createElement(Re,{updateTT:function(){!a||l||o||oe.collection("users").doc(a.uid).get().then((function(e){if(e.exists){var t={};if(t.identifiedCourses=e.data().identifiedCourses,t.identifiedSegments=e.data().identifiedSegments,t.identifiedSlots=e.data().identifiedSlots,JSON.stringify(z)!==JSON.stringify(t)){var a=_e(t,q);console.log(a),localStorage.setItem("masterkey",JSON.stringify(a)),te(a),localStorage.setItem("aimskey",JSON.stringify(t)),K(t)}}else console.log("No such document")})).catch((function(e){console.log("Error getting document:",e)}))},toggleTheme:function(){"dark"===re.palette.type?(localStorage.setItem("themeKey","light"),le(Object(i.a)({},Qe))):(localStorage.setItem("themeKey","dark"),le(Object(i.a)({},$e)))}}),r.a.createElement(g.a,{className:"main-container",disableGutters:!0},r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/mess"},r.a.createElement(g.a,null,r.a.createElement($,{Menu:v,loading:k,error:F}))),r.a.createElement(y.a,{path:"/bus"},r.a.createElement(g.a,null,r.a.createElement(fe,{schedule:A,loading:H,error:Y}))),r.a.createElement(y.a,{path:"/timetable"},r.a.createElement(se,{eventList:ee,handleNewCustomEvent:function(e,t,a){var n={title:e,start:new Date(t),end:new Date(a)};localStorage.setItem("customkey",JSON.stringify([].concat(Object(c.a)(q),[n])));var r=_e(z,[].concat(Object(c.a)(q),[n]));localStorage.setItem("masterkey",JSON.stringify(r)),te(r),Q((function(e){return[].concat(Object(c.a)(e),[n])}))}})),r.a.createElement(y.a,{path:""},r.a.createElement(g.a,null,r.a.createElement(C,{Menu:v,schedule:A,events:ee,loading:H||k,error:F||Y}))))),r.a.createElement(g.a,{className:"bottom-nav",disableGutters:!0,maxWidth:!1},r.a.createElement(Oe,null)))):r.a.createElement("button",{type:"submit",onClick:Ze},"Sign in with google"," ")},tt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function at(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(et,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/iith-dashboard-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/iith-dashboard-pwa","/service-worker.js");tt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):at(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):at(t,e)}))}}()}},[[136,1,2]]]);
//# sourceMappingURL=main.4e7fa546.chunk.js.map