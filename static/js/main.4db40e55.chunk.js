(window.webpackJsonprobofriends=window.webpackJsonprobofriends||[]).push([[0],{20:function(e,n,t){e.exports=t(32)},29:function(e,n,t){},30:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(4),i=t.n(a),c=t(9),s=t(3),l=t(18),u=t(19),d=(t(29),t(6)),h=t(7),f=t(11),b=t(8),p=t(10),g=function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null," ",n," "),o.a.createElement("p",null," ",t," ")))},E=function(e){var n=e.robots,t=n.map(function(e,t){return o.a.createElement(g,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})});return o.a.createElement("div",null,t)},m=function(e){e.searchfield;var n=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},v=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},w=(t(30),function(e){function n(e){var t;return Object(d.a)(this,n),(t=Object(f.a)(this,Object(b.a)(n).call(this,e))).state={hasError:!1},t}return Object(p.a)(n,e),Object(h.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null," Oops..."):this.props.children}}]),n}(r.Component)),O=function(e){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.robots,a=e.isPending,i=r.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return a?o.a.createElement("h1",null,"Loading..."):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"}," RoboFriends "),o.a.createElement(m,{searchChange:t}),o.a.createElement(v,null,o.a.createElement(w,null,o.a.createElement(E,{robots:i}))))}}]),n}(r.Component),R=Object(c.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,ispending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e({type:"REQUEST_ROBOTS_SUCCES",payload:n})}).catch(function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})})})}}})(O),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(31);var j={searchField:""},C={isPending:!1,robots:[],error:""},k=Object(u.createLogger)(),_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{ispending:!0});case"REQUEST_ROBOTS_SUCCES":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),T=Object(s.d)(_,Object(s.a)(l.a,k));i.a.render(o.a.createElement(c.a,{store:T},o.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/robofriends","/service-worker.js");y?(!function(e,n){fetch(e).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):S(n,e)})}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.4db40e55.chunk.js.map