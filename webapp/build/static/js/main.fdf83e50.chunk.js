(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{134:function(e,t,n){e.exports=n.p+"static/media/market.4497199f.svg"},135:function(e,t,n){e.exports=n.p+"static/media/newMarker.d04a1686.svg"},149:function(e,t,n){e.exports=n(289)},153:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"setNewMarkerRefPointOn",(function(){return A})),n.d(a,"setNewMarkerRefPointOff",(function(){return N})),n.d(a,"setNewMarkerFromOpen",(function(){return R})),n.d(a,"setNewMarkerFromClose",(function(){return L})),n.d(a,"loadMarkers",(function(){return U}));n(150),n(151),n(152),n(153);var o=n(1),r=n.n(o),l=n(8),c=n.n(l),i=n(25),s=n(39),u=n(137),p=n(71),d=n.n(p),f={markers:{}},m={newMarketShowRefPoint:!1,newMarketFromOpen:!1},g=Object(s.c)({test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"test":return t.payload;default:return e}},markers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"load_markers":var n={};return t.payload.markerList.forEach((function(e){var t;t="null"==e.until?"Estamos averiguando para usted \u2665":e.until,n[e.location_id]={lat:e.lat,lng:e.long,name:e.name,until:t}})),d()(e,{markers:{$merge:n}});default:return e}},globals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_global_config":return d()(e,{$merge:t.payload});default:return e}}}),h=n(146),b=n(40),k=n(22),y=n(23),v=n(26),w=n(24),C=n(72),O=n(27),E=n(101),M=n(102),x=n(100),j=n(103),S=(n(161),n(11)),P=n(138),B=n.n(P),A=function(){return function(e){e({type:"set_global_config",payload:{newMarketShowRefPoint:!0}})}},N=function(){return function(e){e({type:"set_global_config",payload:{newMarketShowRefPoint:!1}})}},R=function(){return function(e){e({type:"set_global_config",payload:{newMarketFromOpen:!0}})}},L=function(){return function(e){e({type:"set_global_config",payload:{newMarketFromOpen:!1}})}},F=n(94),I=n.n(F),z=n(139),_=n(140),T=n.n(_);n(224).config();var U=function(e,t){return function(){var e=Object(z.a)(I.a.mark((function e(t){var n,a,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=JSON.stringify({latMin:-100,latMax:100,lngMin:-100,lngMax:100}),a={headers:{"Content-Type":"application/json","X-Api-Key":"8skpFowIFG90lqBrJPEgW1jcfocKOmqt4IBaNmVN"}},e.next=5,T.a.post("https://f5uu7v12oa.execute-api.us-east-1.amazonaws.com/staging/locations/list",n,a);case 5:return o=e.sent,t({type:"load_markers",payload:{markerList:o.data}}),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},q=n(148),D=n(32),J=n.n(D),G=n(96),H=n.n(G),V=(n(287),function(e){function t(e){var n;Object(k.a)(this,t),n=Object(v.a)(this,Object(w.a)(t).call(this,e));var a=J()();return n.state={nombre:"",time:a,format:"h:mm a",selectCola:[{value:!1,label:"Nada",id:1},{value:!1,label:"Poco",id:2},{value:!1,label:"Algo",id:3},{value:!1,label:"Mucho",id:4}],selectProducto:[{value:!1,label:"Bencian",id:1},{value:!1,label:"Abarrote",id:2},{value:!1,label:"Medicamentos",id:3}]},n}return Object(O.a)(t,e),Object(y.a)(t,[{key:"optionClickedCola",value:function(e){this.setState({selectCola:e})}},{key:"selectedBadgeClickedCola",value:function(e){this.setState({selectCola:e})}},{key:"optionClickedProducto",value:function(e){this.setState({selectProducto:e})}},{key:"selectedBadgeClickedProducto",value:function(e){this.setState({selectProducto:e})}},{key:"render",value:function(){var e=this,t={color:"#160c28",backgroundColor:"#efcb68"},n={backgroundColor:"#fcf8e3",color:"#8a6d3b"};return r.a.createElement("div",null,r.a.createElement(S.Row,{style:{width:"100%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},r.a.createElement(S.Col,{s:8,offset:"s2",style:{textAlign:"center",paddingBottom:"10px"}},"Ayudanos a recolectar algo de informacion :)"),r.a.createElement(S.Col,{s:10,offset:"s1",style:{paddingLeft:"0px",paddingRight:"0px"}},r.a.createElement(S.TextInput,{label:"Nombre de la tienda",value:this.state.nombre,onChange:function(t){return e.setState({nombre:t.target.value})}})),r.a.createElement(S.Col,{s:10,offset:"s1",style:{textAlign:"center",paddingBottom:"10px"}},"\xbfA que hora cierra?:","\xa0","\xa0",r.a.createElement(q.a,{allowEmpty:!1,showSecond:!1,defaultValue:this.state.time,className:"xxx",onChange:function(t){return e.setState({time:t})},format:this.state.format,use12Hours:!0,inputReadOnly:!0})),r.a.createElement(S.Col,{s:10,offset:"s1",style:{textAlign:"center",paddingBottom:"10px"}},r.a.createElement("p",{style:{marginBottom:"5px"}},"\xbfCuanta cola hay?"),r.a.createElement(H.a,{options:this.state.selectCola,optionClicked:this.optionClickedCola.bind(this),selectedBadgeClicked:this.selectedBadgeClickedCola.bind(this),selectedOptionsStyles:t,optionsListStyles:n,isSingleSelect:!0})),r.a.createElement(S.Col,{s:10,offset:"s1",style:{textAlign:"center",paddingBottom:"10px"}},r.a.createElement("p",{style:{marginBottom:"5px"}},"\xbf Que encontraste en este lugar?"),r.a.createElement(H.a,{options:this.state.selectProducto,optionClicked:this.optionClickedProducto.bind(this),selectedBadgeClicked:this.selectedBadgeClickedProducto.bind(this),selectedOptionsStyles:t,optionsListStyles:n})),r.a.createElement(S.Col,{s:12,style:{textAlign:"center",paddingBottom:"10px"}},r.a.createElement(S.Button,{style:{backgroundColor:"#efcb68",color:"#000411"},onClick:function(){e.props.setNewMarkerFromClose(),e.props.setNewMarkerRefPointOff()}},"Agregar el local")),r.a.createElement(S.Col,{s:12,style:{textAlign:"center"}},r.a.createElement(S.Button,{style:{backgroundColor:"#aeb7b3",color:"#000411"},onClick:function(){e.props.setNewMarkerFromClose(),e.props.setNewMarkerRefPointOff()}},"Cancelar"))))}}]),t}(o.Component)),K=Object(i.b)(null,a)(V),Z=function(e){function t(){return Object(k.a)(this,t),Object(v.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(y.a)(t,[{key:"renderToolBar",value:function(){var e=this;return this.props.globals.newMarketShowRefPoint?r.a.createElement("div",null,r.a.createElement(S.Col,{s:4,offset:"s2"},r.a.createElement(S.Button,{style:{backgroundColor:"#aeb7b3",color:"#000411"},onClick:function(){return e.props.setNewMarkerRefPointOff()}},"Cancelar")),r.a.createElement(S.Col,{s:4},r.a.createElement(S.Button,{style:{backgroundColor:"#efcb68",color:"#000411"},onClick:function(){return e.props.setNewMarkerFromOpen()}},"Continuar"))):r.a.createElement(S.Button,{style:{backgroundColor:"#efcb68",color:"#000411"},onClick:function(){e.props.setNewMarkerRefPointOn()}},"Agregar local")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.Row,{style:{textAlign:"center",marginBottom:"10px"}},r.a.createElement(S.Col,{s:12,style:{paddingTop:"10px",paddingBottom:"10px"}},this.renderToolBar())))}}]),t}(o.Component);Object(i.b)((function(e){return{globals:e.globals}}),a)(Z);var $=function(e){function t(){return Object(k.a)(this,t),Object(v.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(o.Component),Q=(Object(i.b)()($),n(145)),W=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(v.a)(this,Object(w.a)(t).call(this,e))).state={userLat:0,userLng:0},n}return Object(O.a)(t,e),Object(y.a)(t,[{key:"componentDidUpdate",value:function(e){return this.props.isGeolocationAvailable&&this.props.isGeolocationEnabled&&(console.log(this.props.coords.latitude),console.log(this.props.coords.longitude),alert(this.props.coords.longitude),console.log(navigator.geolocation.getCurrentPosition((function(e){return console.log(e.coords.latitude)})))),!0}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(r.a.Component),X=(Object(Q.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(W),n(3)),Y=n.n(X),ee=new Y.a.Icon({iconUrl:n(134),iconRetinaUrl:n(134),iconAnchor:[30,65],popupAnchor:[0,0],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new Y.a.Point(60,75)}),te=new Y.a.Icon({iconUrl:n(135),iconRetinaUrl:n(135),iconAnchor:[30,65],popupAnchor:[0,0],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new Y.a.Point(60,75)}),ne=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(v.a)(this,Object(w.a)(t).call(this,e))).mapRef=r.a.createRef(),n.state={zoom:14,centerLat:-33.019,centerLng:-71.55,newMarkerIcon:{lat:-33.019,lng:-71.55}},n.centerMap=n.centerMap.bind(Object(C.a)(n)),n}return Object(O.a)(t,e),Object(y.a)(t,[{key:"centerMap",value:function(e,t){this.setState({centerLat:e,centerLng:t})}},{key:"renderMarker",value:function(){var e=[];return this.props.globals.newMarketShowRefPoint||Object.entries(this.props.markers).forEach((function(t){var n=t[0],a=t[1];e.push(r.a.createElement(E.a,{key:n,position:[a.lat,a.lng],icon:ee},r.a.createElement(M.a,{autoPan:!1},r.a.createElement("p",null,r.a.createElement("b",null,a.name)),r.a.createElement("p",null,"Se cierra a las: ",r.a.createElement("b",null,a.until)))))})),r.a.createElement(B.a,null,e)}},{key:"renderNewMarketIcon",value:function(){if(this.props.globals.newMarketShowRefPoint)return r.a.createElement(E.a,{position:[this.state.newMarkerIcon.lat,this.state.newMarkerIcon.lng],icon:te})}},{key:"componentDidMount",value:function(){var e=this;this.props.loadMarkers();navigator.geolocation.getCurrentPosition((function(t){var n=t.coords.latitude,a=t.coords.longitude;"undefined"!==typeof n&&"undefined"!==typeof a&&(console.log(n),console.log(a),e.setState({centerLat:n,centerLng:a}))}),null,{enableHighAccuracy:!0,maximumAge:0})}},{key:"componentDidUpdate",value:function(e,t,n){return!0}},{key:"onChangeMapPosition",value:function(e){this.setState({newMarkerIcon:{lat:e.center[0],lng:e.center[1]}})}},{key:"renderNewMarkerFrom",value:function(){if(this.props.globals.newMarketFromOpen)return r.a.createElement(K,{newMarkerLat:this.state.newMarkerIcon.lat,newMarkerLng:this.state.newMarkerIcon.lng})}},{key:"render",value:function(){var e=this,t=this.props.globals.newMarketFromOpen?"none":"block";return r.a.createElement("div",null,r.a.createElement(S.Card,{style:{position:"absolute",width:"100%",zIndex:"100000",borderRadius:"40px",fontSize:"10px"},className:"blue-grey darken-1",textClassName:"white-text"},"Estamos trabajando para que ma\xf1ana mi\xe9rcoles puedas saber d\xf3nde abastecerte. Trabajamos sin fines de lucro y confiamos en las personas \u2665."),this.renderNewMarkerFrom(),r.a.createElement(x.a,{maxZoom:19,minZoom:5,ref:this.mapRef,style:{display:t},center:[this.state.centerLat,this.state.centerLng],zoom:this.state.zoom,onViewportChange:function(t){return e.onChangeMapPosition(t)},zoomControl:!1},r.a.createElement(j.a,{attribution:'&copy OpenStreetMap \\m/ <font color="#160c28"> Con \u2665 por Sudo B00yz</font>',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),this.renderMarker(),this.renderNewMarketIcon()))}}]),t}(o.Component);var ae=Object(i.b)((function(e){return{markers:e.markers.markers,globals:e.globals}}),a)(ne),oe=function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(b.a,{exact:!0,path:"/",component:ae})))},re=Object(s.e)(g,{},Object(s.d)(Object(s.a)(u.a),window.devToolsExtension?window.devToolsExtension():function(e){return e}));c.a.render(r.a.createElement(i.a,{store:re},r.a.createElement(oe,null)),document.querySelector("#root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.fdf83e50.chunk.js.map