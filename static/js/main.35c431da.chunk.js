(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),i=t(7),a=t.n(i),c=(t(14),t(1)),s=t(2),l=t(4),h=t(3),u=t(5);function f(e,n,t,o){switch(t){case"ArrowUp":n-=o;break;case"ArrowRight":e+=o;break;case"ArrowDown":n+=o;break;case"ArrowLeft":e-=o;break;default:console.error("Impossible turn!")}return{x:e,y:n,width:o,height:o}}function d(e,n){var t=!0,o=!1,r=void 0;try{for(var i,a=n[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var c=i.value;e.fillStyle=c.fill,e.fillRect(c.x,c.y,c.width,c.height)}}catch(s){o=!0,r=s}finally{try{t||null==a.return||a.return()}finally{if(o)throw r}}}t(16);var g=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(h.a)(n).call(this,e))).draw=function(){var e=t.canvas.current.getContext("2d"),n=t.props.snake,o=n.position,r=n.length,i=n.thickness,a=t.props.size;e.globalCompositeOperation="destination-over",e.clearRect(0,0,a,a),e.save(),t.snake=function(e,n,t){for(var o=[],r=n/t,i=0;i<r;i++){var a={fill:"rgb(39,159,39)",x:e.x+i*t,y:e.y,width:t,height:t};o.push(a)}return o[o.length-1].fill="rgb(200, 0, 0)",o}(o,r,i),d(e,t.snake)},t.handleKeyDown=function(e,n){console.log(e);var o=t.canvas.current.getContext("2d");t.snake=function(e,n,t){var o=JSON.parse(JSON.stringify(e));o.shift();var r=o[o.length-1],i=r.x,a=r.y;return o.push(f(i,a,n,t)),o.map(function(e){e.fill="rgb(39,159,39)"}),o[o.length-1].fill="rgb(200, 0, 0)",o}(n,e,10);var r=n[0],i=n[n.length-1];o.clearRect(r.x,r.y,r.width,r.height),o.clearRect(i.x,i.y,i.width,i.height),d(o,t.snake)},t.snake=[],t.canvas=r.a.createRef(),t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.draw(),this.width=window.innerWidth}},{key:"render",value:function(){var e=this;this.props.size;return r.a.createElement("div",{className:"noOutline",onKeyDown:function(n){return e.handleKeyDown(n.key,e.snake)},tabIndex:"0"},r.a.createElement("canvas",{ref:this.canvas,width:window.innerWidth,height:window.innerHeight-80,className:"FieldContainer"}))}}]),n}(o.PureComponent),w=(t(18),function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"heading"},"Snake game"),r.a.createElement(g,{size:500,snake:{position:{x:150,y:120},thickness:10,length:60},target:""}))}}]),n}(o.Component)),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a.a.render(r.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/snake-game",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/snake-game","/service-worker.js");v?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):p(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):p(e)})}}()},8:function(e,n,t){e.exports=t(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.35c431da.chunk.js.map