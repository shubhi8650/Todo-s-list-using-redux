(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{22:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(4),i=n.n(a),r=n(9),s=n(3),o=(n(22),n(1));var d=function(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],a=e[1],i=Object(s.c)((function(t){return t.TodoReducers.list})),d=Object(c.useState)("none"),l=Object(r.a)(d,2),O=l[0],j=l[1],u=Object(s.b)();return Object(o.jsxs)("div",{className:"main-container",children:[Object(o.jsxs)("div",{className:"todo-container",children:[Object(o.jsx)("h1",{children:"Todo's List"}),Object(o.jsx)("input",{type:"text",value:n,onChange:function(t){return a(t.target.value)}}),Object(o.jsx)("button",{onClick:function(){return u((t=n,{type:"ADD_TODO",payload:{id:(new Date).getTime().toString(),data:t}}),a(""),j("block"));var t},children:"+"})]}),Object(o.jsx)("div",{className:"show-data",children:i.map((function(t){return Object(o.jsxs)("div",{className:"each-data",children:[Object(o.jsx)("h4",{children:t.data}),Object(o.jsx)("button",{onClick:function(){return u({type:"DELETE_TODO",payload:{id:t.id}})},children:"x"})]},t.id)}))}),Object(o.jsx)("div",{className:"remove-data",children:Object(o.jsx)("button",{style:{display:O},onClick:function(){return u({type:"REMOVE_ALL"},j("none"))},children:"Remove All"})})]})};var l=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(d,{})})},O=n(6),j=n(11),u={list:[]},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":var n=e.payload,c=n.id,a=n.data;return{list:[].concat(Object(j.a)(t.list),[{id:c,data:a}])};case"DELETE_TODO":var i=t.list.filter((function(t){return t.id!==e.payload.id}));return{list:i};case"REMOVE_ALL":return{list:[]};default:return t}},h=Object(O.a)({TodoReducers:b}),v=Object(O.b)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(o.jsx)(s.a,{store:v,children:Object(o.jsx)(l,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.5e9b5da0.chunk.js.map