(function(t){function e(e){for(var n,r,a=e[0],c=e[1],d=e[2],l=0,u=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(u.length)u.shift()();return s.push.apply(s,d||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,r=1;r<o.length;r++){var a=o[r];0!==i[a]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},i={app:0},s=[];function a(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-88176186":"7c0ca798"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={"chunk-88176186":1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=new Promise((function(e,o){for(var n="css/"+({}[t]||t)+"."+{"chunk-88176186":"86e29229"}[t]+".css",i=c.p+n,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var d=s[a],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===i))return e()}var u=document.getElementsByTagName("style");for(a=0;a<u.length;a++){d=u[a],l=d.getAttribute("data-href");if(l===n||l===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],p.parentNode.removeChild(p),o(s)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=s);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(t);var u=new Error;d=function(e){l.onerror=l.onload=null,clearTimeout(p);var o=i[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,o[1](u)}i[t]=void 0}};var p=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/altrecipe/",c.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var u=0;u<d.length;u++)e(d[u]);var p=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"21bb":function(t,e,o){"use strict";o("2dad")},"2dad":function(t,e,o){},"37a2":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],s=(o("5c0b"),o("2877")),a={},c=Object(s["a"])(a,r,i,!1,null,null,null),d=c.exports,l=o("9483");Object(l["a"])("".concat("/altrecipe/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});o("d3b7"),o("3ca3"),o("ddb0");var u=o("8c4f"),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("h1",[t._v("Todo list")]),o("todo-form"),o("list")],1)},f=[],m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.addTodo.apply(null,arguments)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form__input",attrs:{name:"title",id:"title",placeholder:"Enter title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form__textarea",attrs:{name:"description",id:"description",rows:"4",placeholder:"Enter description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),o("button",{staticClass:"form__button",attrs:{type:"submit"}},[t._v("Create todo")])])},h=[],v=(o("a4d3"),o("e01a"),{name:"Form",data:function(){return{title:"",description:""}},methods:{addTodo:function(){if(this.title&&this.description){var t={id:Date.now(),title:this.title,description:this.description,completed:!1};this.$store.dispatch("createTodo",t),this.clearForm()}},clearForm:function(){this.title="",this.description=""}}}),g=v,b=(o("aeca"),Object(s["a"])(g,m,h,!1,null,"d5ed07d4",null)),_=b.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-list"},[t.todos.length?o("div",t._l(t.todos,(function(t,e){return o("todo",{key:t.id,attrs:{todo:t,index:e}})})),1):o("div",[t._v(" No todos ... ")])])},T=[],w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo",class:{todo_completed:t.todo.completed}},[o("div",{staticClass:"todo__info"},[o("span",{staticClass:"todo__number"},[t._v(t._s(t.index+1))]),o("span",{staticClass:"todo__title"},[t._v(t._s(t.todo.title))]),o("span",{staticClass:"todo__description"},[t._v(t._s(t.todo.description))])]),o("div",{staticClass:"todo__actions"},[o("span",{staticClass:"todo__check-icon",on:{click:t.completeTodo}}),o("router-link",{staticClass:"todo__open-link-icon",attrs:{to:{name:"Todo",params:{id:t.todo.id}}}}),o("span",{staticClass:"todo__delete-icon",on:{click:t.deleteTodo}})],1)])},C=[],k=(o("a9e3"),{name:"Todo",props:{todo:{type:Object,required:!0},index:{type:Number,required:!0}},computed:{completed:function(){return this.todo.completed}},methods:{completeTodo:function(){this.$store.dispatch("completeTodo",this.todo.id)},deleteTodo:function(){this.$store.dispatch("deleteTodo",this.todo.id)}}}),O=k,x=(o("8694"),Object(s["a"])(O,w,C,!1,null,"641306c1",null)),j=x.exports,S={name:"List",components:{Todo:j},computed:{todos:function(){return this.$store.getters.todos}}},E=S,N=Object(s["a"])(E,y,T,!1,null,"2696d7e6",null),P=N.exports,$={name:"Home",components:{TodoForm:_,List:P}},A=$,I=(o("21bb"),Object(s["a"])(A,p,f,!1,null,null,null)),F=I.exports;n["a"].use(u["a"]);var L=[{path:"/",name:"Home",component:F},{path:"/:id",name:"Todo",component:function(){return o.e("chunk-88176186").then(o.bind(null,"a3b3"))}}],J=new u["a"]({mode:"history",base:"/altrecipe/",routes:L}),q=J,B=(o("e9c4"),o("c740"),o("a434"),o("7db0"),o("2f62"));n["a"].use(B["a"]);var D=new B["a"].Store({state:{todos:JSON.parse(localStorage.getItem("todos"))||[]},mutations:{createTodo:function(t,e){t.todos.push(e),localStorage.setItem("todos",JSON.stringify(t.todos))},completeTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e}));t.todos[o].completed=!0,localStorage.setItem("todos",JSON.stringify(t.todos))},deleteTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e}));t.todos.splice(o,1),localStorage.setItem("todos",JSON.stringify(t.todos))}},actions:{createTodo:function(t,e){var o=t.commit;o("createTodo",e)},completeTodo:function(t,e){var o=t.commit;o("completeTodo",e)},deleteTodo:function(t,e){var o=t.commit;o("deleteTodo",e)}},getters:{todos:function(t){return t.todos},todoById:function(t){return function(e){return t.todos.find((function(t){return t.id===e}))}}}});n["a"].config.productionTip=!1,new n["a"]({router:q,store:D,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";o("9c0c")},8694:function(t,e,o){"use strict";o("37a2")},8740:function(t,e,o){},"9c0c":function(t,e,o){},aeca:function(t,e,o){"use strict";o("8740")}});
//# sourceMappingURL=app.f8f95451.js.map