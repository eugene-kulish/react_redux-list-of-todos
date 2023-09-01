(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n,s=c(7),a=c.n(s),r=c(5),l=c(15),i=c(6),o=c(13),d=c(14),u=function(e){return{type:"currentTodo/set",payload:e}},j=function(){return{type:"currentTodo/remove"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/set":return t.payload;case"currentTodo/remove":return null;default:return e}},h=c(4);!function(e){e.All="all",e.Completed="completed",e.Active="active"}(n||(n={}));var m=function(e){return{type:"filter/setQuery",payload:e}},f=function(e){return{type:"filter/setStatus",payload:e}},O=function(){return{type:"filter/clearQuery"}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{query:"",status:n.All},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/setQuery":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"filter/clearQuery":return Object(h.a)(Object(h.a)({},e),{},{query:""});case"filter/setStatus":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},p=function(e){return{type:"currentTodos/set",payload:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"currentTodos/set"===t.type?t.payload:e},y=Object(i.combineReducers)({currentTodo:b,filter:x,todos:v}),N=Object(i.createStore)(y,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(d.a))),g=c(3),T=c(0),w=(c(23),c(24),c(11)),C=c.n(w),k=r.b,S=r.c,A=c(1),q=function(){var e=k(),t=S((function(e){return e.todos})),c=S((function(e){return e.filter})),s=c.status,a=c.query,r=S((function(e){return e.currentTodo})),l=function(t){return function(){e(u(t))}},i=Object(T.useMemo)((function(){return t.filter((function(e){var t=e.title.toLowerCase(),c=a.toLowerCase();switch(s){case n.Completed:return e.completed&&t.includes(c);case n.Active:return!e.completed&&t.includes(c);default:return e&&t.includes(c)}}))}),[a,s,t]);return Object(A.jsx)(A.Fragment,{children:!!t.length&&(i.length?Object(A.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"#"}),Object(A.jsx)("th",{children:Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:"fas fa-check"})})}),Object(A.jsx)("th",{children:"Title"}),Object(A.jsx)("th",{children:" "})]})}),Object(A.jsx)("tbody",{children:i.map((function(e){return Object(A.jsxs)("tr",{"data-cy":"todo",children:[Object(A.jsx)("td",{className:"is-vcentered",children:e.id}),Object(A.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(A.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(A.jsx)("i",{className:"fas fa-check"})})}),Object(A.jsx)("td",{className:"is-vcentered is-expanded",children:Object(A.jsx)("p",{className:C()(e.completed?"has-text-success":"has-text-danger"),children:e.title})}),Object(A.jsx)("td",{className:"has-text-right is-vcentered",children:Object(A.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:l(e),children:Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:C()("far",e.id===(null===r||void 0===r?void 0:r.id)?"fa-eye-slash":"fa-eye")})})})})]},e.id)}))})]}):Object(A.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}))})},_=function(){var e=S((function(e){return e.filter})).query,t=k();return Object(A.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(A.jsx)("p",{className:"control",children:Object(A.jsx)("span",{className:"select",children:Object(A.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){t(f(e.target.value))},children:[Object(A.jsx)("option",{value:"all",children:"All"}),Object(A.jsx)("option",{value:"active",children:"Active"}),Object(A.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(A.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(A.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:e,onChange:function(e){t(m(e.target.value))}}),Object(A.jsx)("span",{className:"icon is-left",children:Object(A.jsx)("i",{className:"fas fa-magnifying-glass"})}),!!e.length&&Object(A.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(A.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"Clear",onClick:function(){t(O())}})})]})]})},E=(c(26),function(){return Object(A.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(A.jsx)("div",{className:"Loader__content"})})});function L(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var Q=function(){var e=Object(T.useState)(null),t=Object(g.a)(e,2),c=t[0],n=t[1],s=S((function(e){return e.currentTodo})),a=k(),r=function(e){return(t=e,L("/users/".concat(t))).then(n);var t};return Object(T.useEffect)((function(){s&&r(s.userId)}),[]),Object(A.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(A.jsx)("div",{className:"modal-background"}),c?Object(A.jsxs)("div",{className:"modal-card",children:[Object(A.jsxs)("header",{className:"modal-card-head",children:[Object(A.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===s||void 0===s?void 0:s.id)}),Object(A.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"Close",onClick:function(){return a(j())}})]}),Object(A.jsxs)("div",{className:"modal-card-body",children:[Object(A.jsx)("p",{className:"block","data-cy":"modal-title",children:null===s||void 0===s?void 0:s.title}),Object(A.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==s&&void 0!==s&&s.completed?Object(A.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(A.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(A.jsx)("a",{href:"mailto:Sincere@april.biz",children:c.name})]})]})]}):Object(A.jsx)(E,{})]})},B=function(){var e=Object(T.useState)(!1),t=Object(g.a)(e,2),c=t[0],n=t[1],s=S((function(e){return e.currentTodo})),a=k(),l=function(){n(!0),L("/todos").then((function(e){return a(p(e))})).finally((function(){return n(!1)}))};return Object(T.useEffect)((function(){l()}),[]),Object(A.jsxs)(r.a,{store:N,children:[Object(A.jsx)("div",{className:"section",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("div",{className:"box",children:[Object(A.jsx)("h1",{className:"title",children:"Todos:"}),Object(A.jsx)("div",{className:"block",children:Object(A.jsx)(_,{})}),Object(A.jsxs)("div",{className:"block",children:[c&&Object(A.jsx)(E,{}),Object(A.jsx)(q,{})]})]})})}),s&&Object(A.jsx)(Q,{})]})},D=function(){return Object(A.jsx)(r.a,{store:N,children:Object(A.jsx)(l.a,{children:Object(A.jsx)(B,{})})})};a.a.render(Object(A.jsx)(D,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.50ab1d20.chunk.js.map