(this["webpackJsonpcoronavirus-tracker"]=this["webpackJsonpcoronavirus-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),u=a(6),s=a.n(u),i=a(9),l=a(73),d=a(74),m=a(84),p=a(83),f=a(224),v=a(228),h=a(225),b=a(226),y=a(32),E=a.n(y),g=a(33),x=a.n(g),C=a(13),_=a.n(C),O=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:_.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(_.a.card,_.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(E.a,{start:0,end:a.value,duration:2,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(_.a.card,_.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(E.a,{start:0,end:n.value,duration:2,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recovered cases from COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(_.a.card,_.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(E.a,{start:0,end:c.value,duration:2,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of deaths caused by COVID-19"))))):"Loading..."},j=a(31),w=a(45),k=a(34),D=a.n(k),N="https://covid19.mathdro.id/api",S=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,D.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.deaths,u=r.recovered,i=r.lastUpdate,console.log(a),e.abrupt("return",{confirmed:c,deaths:o,recovered:u,lastUpdate:i});case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(80),U=a.n(B),A=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)([]),d=Object(j.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.length?r.a.createElement(w.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,v=a?r.a.createElement(w.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"No. of poeple",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in the ".concat(u)}}}):null;return r.a.createElement("div",{className:U.a.container},u?v:f)},z=a(229),G=a(227),J=a(81),M=a.n(J),P=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(j.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(z.a,{className:M.a.FormControl},r.a.createElement(b.a,{variant:"body2"},"Choose country: "),r.a.createElement(G.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},Q=a(46),R=a.n(Q),q=a(82),F=a.n(q),L=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:R.a.container},r.a.createElement("img",{className:R.a.image,src:F.a,alt:"COVID-19"}),r.a.createElement(O,{data:t}),r.a.createElement(P,{handleCountryChange:this.handleCountryChange}),r.a.createElement(A,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(L,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},80:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},81:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},82:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.7abf5eca.chunk.js.map