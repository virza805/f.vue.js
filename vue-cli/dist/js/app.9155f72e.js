(function(t){function e(e){for(var r,a,d=e[0],i=e[1],s=e[2],l=0,f=[];l<d.length;l++)a=d[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,d=1;d<n.length;d++){var i=n[d];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},c=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=e,d=d.slice();for(var s=0;s<d.length;s++)e(d[s]);var u=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"08f3":function(t,e,n){},"0f42":function(t,e,n){},1429:function(t,e,n){"use strict";n("0f42")},4229:function(t,e,n){},"4f80":function(t,e,n){"use strict";n("4229")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"container"};function c(t,e,n,c,a,d){var i=Object(r["m"])("Header"),s=Object(r["m"])("AddTask"),u=Object(r["m"])("Tasks");return Object(r["i"])(),Object(r["c"])("div",o,[Object(r["f"])(i,{onToggleAddTask:d.toggleAddTask,title:"Task Tracker",showAddTask:a.showAddTask},null,8,["onToggleAddTask","showAddTask"]),Object(r["r"])(Object(r["d"])("div",null,[Object(r["f"])(s,{onAddTask:d.addTask},null,8,["onAddTask"])],512),[[r["q"],a.showAddTask]]),Object(r["f"])(u,{onToggleReminder:d.toggleReminder,onDeleteTask:d.deleteTask,tasks:a.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])])}var a=n("5530"),d=n("2909");n("99af"),n("4de4"),n("d3b7"),n("d81d");function i(t,e,n,o,c,a){var d=Object(r["m"])("Button");return Object(r["i"])(),Object(r["c"])("header",null,[Object(r["d"])("h1",null,Object(r["n"])(n.title),1),Object(r["f"])(d,{onBtnClick:e[0]||(e[0]=function(e){return t.$emit("toggle-add-task")}),text:n.showAddTask?"Close":"Add Task",color:n.showAddTask?"red":"green"},null,8,["text","color"])])}function s(t,e,n,o,c,a){return Object(r["i"])(),Object(r["c"])("button",{onClick:e[0]||(e[0]=function(t){return a.onClick()}),style:Object(r["h"])({background:n.color}),class:"btn"},Object(r["n"])(n.text),5)}var u={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}},l=n("6b0d"),f=n.n(l);const b=f()(u,[["render",s]]);var m=b,p={name:"Header",props:{title:String,showAddTask:Boolean},components:{Button:m}};n("4f80");const k=f()(p,[["render",i],["__scopeId","data-v-b2bebcc4"]]);var O=k,j=["onToggleReminder","onDeleteTask"],h=["onDblclick"],T=["onClick"];function g(t,e,n,o,c,a){return Object(r["i"])(!0),Object(r["c"])(r["a"],null,Object(r["l"])(n.tasks,(function(e){return Object(r["i"])(),Object(r["c"])("div",{onToggleReminder:function(n){return t.$emit("toggle-reminder",e.id)},onDeleteTask:function(n){return t.$emit("delete-task",e.id)},key:e.id},[Object(r["d"])("div",{onDblclick:function(n){return t.$emit("toggle-reminder",e.id)},class:Object(r["g"])([e.reminder?"reminder":"","task"])},[Object(r["d"])("h4",null,[Object(r["e"])(Object(r["n"])(e.text)+" ",1),Object(r["d"])("i",{onClick:function(n){return t.$emit("delete-task",e.id)},class:"fa fa-times"},null,8,T)]),Object(r["d"])("p",null,Object(r["n"])(e.day),1)],42,h)],40,j)})),128)}function v(t,e,n,o,c,a){return Object(r["i"])(),Object(r["c"])("h3",null,Object(r["n"])(n.task.text),1)}var y={name:"Task",props:{task:Object}};const x=f()(y,[["render",v]]);var A=x,w={name:"Tasks",props:{tasks:Array},commponents:{Task:A},emit:["delete-task","toggle-reminder"]};n("6862");const S=f()(w,[["render",g],["__scopeId","data-v-2b8d43a0"]]);var _=S,D=function(t){return Object(r["k"])("data-v-2bfdfc40"),t=t(),Object(r["j"])(),t},M={class:"form-control"},P=D((function(){return Object(r["d"])("label",{for:""},"Task",-1)})),C={class:"form-control"},R=D((function(){return Object(r["d"])("label",{for:""},"Day & Time",-1)})),$={class:"form-control form-control-check"},B=D((function(){return Object(r["d"])("label",{for:""},"Set Reminder",-1)})),H=D((function(){return Object(r["d"])("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1)}));function I(t,e,n,o,c,a){return Object(r["i"])(),Object(r["c"])("form",{action:"",onSubmit:e[3]||(e[3]=function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),class:"add-form"},[Object(r["d"])("div",M,[P,Object(r["r"])(Object(r["d"])("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.text=t}),name:"text",id:"",placeholder:"Add Task"},null,512),[[r["p"],c.text]])]),Object(r["d"])("div",C,[R,Object(r["r"])(Object(r["d"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.day=t}),name:"day",id:"",placeholder:"Add Day & Time"},null,512),[[r["p"],c.day]])]),Object(r["d"])("div",$,[B,Object(r["r"])(Object(r["d"])("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.reminder=t}),name:"reminder"},null,512),[[r["o"],c.reminder]])]),H],32)}var U={name:"AddTask",data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(t){if(t.preventDefault(),this.text){var e={id:Math.floor(1e5*Math.random()),text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",e),this.text="",this.day="",this.reminder=!1}else alert("Please add a task")}}};n("1429");const V=f()(U,[["render",I],["__scopeId","data-v-2bfdfc40"]]);var J=V,q={name:"App",components:{Header:O,Tasks:_,AddTask:J},data:function(){return{tasks:[],showAddTask:!1}},methods:{toggleAddTask:function(){this.showAddTask=!this.showAddTask},addTask:function(t){this.tasks=[].concat(Object(d["a"])(this.tasks),[t])},deleteTask:function(t){confirm("Are you sure ?")&&(this.tasks=this.tasks.filter((function(e){return e.id!==t})))},toggleReminder:function(t){this.tasks=this.tasks.map((function(e){return e.id===t?Object(a["a"])(Object(a["a"])({},e),{},{reminder:!e.reminder}):e}))}},created:function(){this.tasks=[{id:1,text:"Doctors Appointment",day:"March 1st at 2:30pm",reminder:!0},{id:2,text:"School Metting",day:"March 1st at 2:30pm",reminder:!0},{id:3,text:"Food Shopping",day:"March 1st at 2:30pm",reminder:!1}]}};n("7ba9");const F=f()(q,[["render",c]]);var z=F;Object(r["b"])(z).mount("#app")},6862:function(t,e,n){"use strict";n("86b1")},"7ba9":function(t,e,n){"use strict";n("08f3")},"86b1":function(t,e,n){}});
//# sourceMappingURL=app.9155f72e.js.map