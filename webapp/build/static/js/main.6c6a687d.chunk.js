(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{155:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"setNewMarkerRefPointOn",(function(){return I})),n.d(r,"setNewMarkerRefPointOff",(function(){return P})),n.d(r,"setNewMarkerFromOpen",(function(){return x})),n.d(r,"setNewMarkerFromClose",(function(){return F})),n.d(r,"loadMarkers",(function(){return z}));n(78),n(79),n(80);var a=n(0),o=n.n(a),l=n(17),c=n.n(l),s=n(18),i=n(30),u=n(72),p=n(49),f=n.n(p),h={markers:{a0001:{lat:51.505,lng:-.09},a0002:{lat:50.505,lng:-.09}}},m={newMarketShowRefPoint:!1,newMarketFromOpen:!1},g=Object(i.c)({test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"test":return t.payload;default:return e}},markers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"load_markers":return console.log(t.payload),e;default:return e}},globals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_global_config":return f()(e,{$merge:t.payload});default:return e}}}),b=n(75),k=n(31),d=n(25),w=n(26),M=n(28),v=n(27),O=n(29),E=n(56),y=n(57),j=n(55),C=n(58),R=n(51),_=n.n(R),N=n(22),I=function(){return function(e){e({type:"set_global_config",payload:{newMarketShowRefPoint:!0}})}},P=function(){return function(e){e({type:"set_global_config",payload:{newMarketShowRefPoint:!1}})}},x=function(){return function(e){e({type:"set_global_config",payload:{newMarketFromOpen:!0}})}},F=function(){return function(e){e({type:"set_global_config",payload:{newMarketFromOpen:!1}})}},S=n(52),L=n.n(S),A=n(73),B=n(74),T=n.n(B);n(151).config();var z=function(e,t){return function(){var e=Object(A.a)(L.a.mark((function e(t){var n,r,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=JSON.stringify({latMin:-100,latMax:100,lngMin:-100,lngMax:100}),r={headers:{"Content-Type":"application/json","X-Api-Key":"8skpFowIFG90lqBrJPEgW1jcfocKOmqt4IBaNmVN"}},console.log("AQUI1"),e.next=6,T.a.post("https://f5uu7v12oa.execute-api.us-east-1.amazonaws.com/staging/locations/list",n,r);case 6:return a=e.sent,console.log("AQUI2"),console.log(a),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e.catch(0),console.log("AQUI3"),console.log(e.t0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},q=function(e){function t(){return Object(d.a)(this,t),Object(M.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"VENTANA PARA CREAR PUNTO")}}]),t}(a.Component),J=Object(s.b)()(q),U=function(e){function t(){return Object(d.a)(this,t),Object(M.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(w.a)(t,[{key:"renderToolBar",value:function(){var e=this;return this.props.globals.newMarketShowRefPoint?o.a.createElement("div",null,o.a.createElement(N.Col,{s:6},o.a.createElement(N.Button,{onClick:function(){return e.props.setNewMarkerRefPointOff()}},"Cancelar")),o.a.createElement(N.Col,{s:6},o.a.createElement(N.Button,{onClick:function(){return e.props.setNewMarkerFromOpen()}},"Continuar"))):o.a.createElement(N.Button,{onClick:function(){return e.props.setNewMarkerRefPointOn()}},"Nuevo punto")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(N.Row,{style:{textAlign:"center"}},o.a.createElement(N.Col,{s:12},this.renderToolBar())))}}]),t}(a.Component);var W=Object(s.b)((function(e){return{globals:e.globals}}),r)(U),Q=function(e){function t(){return Object(d.a)(this,t),Object(M.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"FILTRO")}}]),t}(a.Component),V=Object(s.b)()(Q),D=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(M.a)(this,Object(v.a)(t).call(this,e))).mapRef=o.a.createRef(),n.state={zoom:13,centerLat:-32.931,centerLng:-71.528,newMarkerIcon:{lat:-32.931,lng:-71.528}},n}return Object(O.a)(t,e),Object(w.a)(t,[{key:"renderMarker",value:function(){var e=[];return this.props.globals.newMarketShowRefPoint||Object.entries(this.props.markers).forEach((function(t){var n=t[0],r=t[1];e.push(o.a.createElement(E.a,{key:n,position:[r.lat,r.lng]},o.a.createElement(y.a,null,"Mi ID es: ",n)))})),o.a.createElement("div",null,e)}},{key:"renderNewMarketIcon",value:function(){if(this.props.globals.newMarketShowRefPoint)return o.a.createElement(E.a,{position:[this.state.newMarkerIcon.lat,this.state.newMarkerIcon.lng]})}},{key:"componentDidMount",value:function(){this.props.loadMarkers();var e=this.mapRef.current.leafletElement.getBounds(),t=Math.abs(e._northEast.lat-e._southWest.lat),n=Math.abs(e._northEast.lng-e._southWest.lng);console.log("Se frist last coord for request"),this.setState({lastLatMax:e._northEast.lat+t,lastLatMin:e._southWest.lat-t,lastLngMax:e._northEast.lng+n,lastLngMin:e._northEast.lng-n})}},{key:"onChangeMapPosition",value:function(e){this.setState({newMarkerIcon:{lat:e.center[0],lng:e.center[1]}})}},{key:"renderNewMarkerFrom",value:function(){if(this.props.globals.newMarketFromOpen)return o.a.createElement(J,{newMarkerLat:this.state.newMarkerIcon.lat,newMarkerLng:this.state.newMarkerIcon.lng})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.renderNewMarkerFrom(),o.a.createElement(j.a,{ref:this.mapRef,style:{display:this.props.globals.newMarketFromOpen?"none":"bock"},center:[this.state.centerLat,this.state.centerLng],zoom:this.state.zoom,onViewportChange:function(t){return e.onChangeMapPosition(t)},zoomControl:!1},o.a.createElement(C.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),this.renderMarker(),this.renderNewMarketIcon(),o.a.createElement(_.a,{position:"topleft"},o.a.createElement(V,null)),o.a.createElement(_.a,{position:"bottomleft"},o.a.createElement(W,null))))}}]),t}(a.Component);var K=Object(s.b)((function(e){return{markers:e.markers.markers,globals:e.globals}}),r)(D),G=function(){return o.a.createElement(b.a,null,o.a.createElement("div",null,o.a.createElement(k.a,{exact:!0,path:"/",component:K})))},X=Object(i.e)(g,{},Object(i.d)(Object(i.a)(u.a),window.devToolsExtension?window.devToolsExtension():function(e){return e}));c.a.render(o.a.createElement(s.a,{store:X},o.a.createElement(G,null)),document.querySelector("#root"))},77:function(e,t,n){e.exports=n(155)},80:function(e,t,n){}},[[77,1,2]]]);
//# sourceMappingURL=main.6c6a687d.chunk.js.map