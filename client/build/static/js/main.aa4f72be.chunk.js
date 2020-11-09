(this["webpackJsonpgoogle-books-search"]=this["webpackJsonpgoogle-books-search"]||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(11),r=n.n(c),l=(n(43),n(13)),i=n(14),s=n(16),u=n(15),m=n(17),d=n(12);n(44);var f=function(){return o.a.createElement("nav",null,o.a.createElement("ul",{className:"nav nav-tabs"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(m.b,{"aria-controls":"/","aria-current":"true",activeClassName:"selected","data-toggle":"tab",to:"/",className:(window.location.pathname,"nav-link")},"Google Books")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(m.b,{"aria-controls":"search","aria-current":"true",activeClassName:"selected",to:"/search","data-toggle":"tab",className:"/search"===window.location.pathname?"nav-link ":"nav-link"},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(m.b,{"aria-controls":"saved","aria-current":"true",activeClassName:"selected",to:"/saved","data-toggle":"tab",className:"/saved"===window.location.pathname?"nav-link ":"nav-link"},"Saved"))))},h=n(19),v=n.n(h),g=function(e){return v.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},E=function(){return v.a.get("/api/books")},p=function(e){return v.a.post("/api/books",e)},k=function(e){return v.a.delete("api/books/"+e)};function b(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function w(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function N(e){var t=e.size,n=e.children;return o.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},n)}n(66);var y=function(e){var t=e.src;return o.a.createElement("div",{className:"thumbnail",role:"img","aria-label":"Book Image",style:{backgroundImage:"url(".concat(t,")")}})},j=n(38),B=n(74),C=n(75);var S=function(e){var t=e.type,n=void 0===t?"default":t,c=e.className,r=e.children,l=e.onClick,i=Object(a.useState)(!1),s=Object(j.a)(i,2),u=s[0],m=s[1],d=function(){return m(!1)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){m(!0),l()},className:["btn btn-md","btn-".concat(n),c].join(" ")},r),o.a.createElement(B.a,{show:u,onHide:d},o.a.createElement(B.a.Header,{closeButton:!0},o.a.createElement(B.a.Title,null,"Your book has been saved!")),o.a.createElement(B.a.Body,null,"View your saved books in the Saved tab!"),o.a.createElement(B.a.Footer,null,o.a.createElement(C.a,{variant:"secondary",onClick:d},"OK"))))};var O=function(e){var t=e.type,n=void 0===t?"default":t,a=e.className,c=e.children,r=e.onClick;return o.a.createElement("button",{onClick:r,className:["btn btn-md","btn-".concat(n),a].join(" ")},c)};n(68);function x(e){var t=e.children;return o.a.createElement("ul",{className:"list-group"},t)}function I(e){return o.a.createElement("li",{className:"list-group-item",key:e.id},o.a.createElement(b,null,o.a.createElement(w,null,o.a.createElement(N,{size:"xs-4 sm-4"},o.a.createElement(y,{src:e.image})),o.a.createElement(N,{size:"xs-8 sm-8"},o.a.createElement("h3",null,e.title),o.a.createElement("p",null,"WRITTEN BY: ",[e.authors].flat().join(", ")),o.a.createElement("p",null,e.description),o.a.createElement("a",{rel:"noreferrer noopener",className:"btn btn-md btn-secondary input-lg view",target:"_blank",href:e.link},"View"),e.id?o.a.createElement(O,{type:"danger",className:"input-md",onClick:function(t){k(e.id).then((function(t){e.loadBooks(),console.log(e.id)})).catch((function(e){return console.log(e)}))}},"Delete"):o.a.createElement(S,{type:"success",className:"input-md",onClick:function(t){p({title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},"Save")))))}n(69);function z(e){return o.a.createElement("div",{className:"input-group input-group-lg"},o.a.createElement("input",Object.assign({className:"form-control",type:"text"},e)))}function Y(e){var t=e.type,n=void 0===t?"default":t,a=e.className,c=e.children,r=e.onClick;return o.a.createElement("button",{onClick:r,className:["search btn btn-md","btn-".concat(n),a].join(" ")},c)}var F=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={books:[],bookSearch:""},e.handleInputChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState({[a]:o})},e.handleFormSubmit=function(t){t.preventDefault(),g(e.state.bookSearch).then((function(t){e.setState({books:t.data.items},(function(){console.log(this.state.books)}))})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,null,o.a.createElement(w,null,o.a.createElement(N,{size:"md-12"},o.a.createElement("form",null,o.a.createElement(b,null,o.a.createElement(w,null,o.a.createElement(N,{size:"xs-9 sm-9"},o.a.createElement(z,{name:"bookSearch",value:this.state.bookSearch,onChange:this.handleInputChange,placeholder:"Search for a Book"})),o.a.createElement(N,{size:"xs-3 sm-3"},o.a.createElement(Y,{onClick:this.handleFormSubmit,type:"success",className:"input-lg search-button"},"Search"))))))),o.a.createElement(w,null,o.a.createElement(N,{size:"xs-12"},o.a.createElement(x,null,this.state.books.map((function(e){return o.a.createElement(I,{key:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,link:e.volumeInfo.infoLink,description:e.volumeInfo.description,image:void 0===e.volumeInfo.imageLinks?"http://siddallheatingandcooling.net/_imgstore/5/1360415/thumbnail/FSeY96wEdX_eY4XkBN2jfYnuY9A.png":"".concat(e.volumeInfo.imageLinks.thumbnail)})})))))))}}]),n}(a.Component),L=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={savedBooks:[]},e.loadBooks=function(t){E().then((function(t){e.setState({savedBooks:t.data},(function(){console.log(this.state.savedBooks)}))})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(b,null,o.a.createElement(w,null,o.a.createElement(N,{size:"xs-12"},o.a.createElement(x,null,this.state.savedBooks.map((function(t){return o.a.createElement(I,{key:t._id,title:t.title,authors:t.authors,link:t.link,description:t.description,image:t.image,id:t._id,loadBooks:e.loadBooks})})))))))}}]),n}(a.Component);n(70);var W=function(){return o.a.createElement("div",{className:"jumbotron text-center"},o.a.createElement("h1",{className:"tittle-text"},"Google Books Search"),o.a.createElement("h3",{className:"sub-tittle-text"},"Search for and Save Books of Interest"))},_=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(W,null),o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",component:F}),o.a.createElement(d.a,{exact:!0,path:"/search",component:F}),o.a.createElement(d.a,{exact:!0,path:"/saved",component:L}))))}}]),n}(a.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(_,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");A?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):D(e)}))}}()}},[[71,1,2]]]);
//# sourceMappingURL=main.aa4f72be.chunk.js.map