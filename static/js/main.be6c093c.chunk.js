(this["webpackJsonprandom-user-address-book"]=this["webpackJsonprandom-user-address-book"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},41:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c,s=n(0),a=n.n(s),r=n(18),o=n.n(r),i=(n(33),n(12)),l=n(4),j=(n(34),n(1)),d=function(){return Object(j.jsxs)("div",{className:"lds-ring",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})},b=n(20),m=n(9),u=n(27),O=n(24),x=n(10);!function(e){e.SET_LOADING="SET_LOADING",e.SET_RANDOM_USERS="SET_RANDOM_USERS",e.SET_LOAD_MORE_USERS="SET_LOAD_MORE_USERS"}(c||(c={}));var h=function(e){return{type:c.SET_LOAD_MORE_USERS,payload:e}},f={loading:!0,loadMoreUsers:!1,randomUsers:[]},p=Object(m.b)(),_=Object(b.combineReducers)({system:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.SET_LOADING:return Object(x.a)(Object(x.a)({},e),{},{loading:t.payload});case c.SET_LOAD_MORE_USERS:return Object(x.a)(Object(x.a)({},e),{},{loadMoreUsers:t.payload});case c.SET_RANDOM_USERS:var n=t.payload,s=[].concat(Object(O.a)(e.randomUsers),Object(O.a)(n));return Object(x.a)(Object(x.a)({},e),{},{randomUsers:s});default:return e}}}),N=Object(b.createStore)(_,Object(u.composeWithDevTools)()),g=(n(41),function(){var e=Object(m.c)(),t=p((function(e){return e.system.loading})),n=p((function(e){return e.system.loadMoreUsers})),c=p((function(e){return e.system.randomUsers})),s=a.a.useCallback((function(t){var n=t.target;n.scrollHeight-n.scrollTop===n.clientHeight&&e(h(!0))}),[e]);return Object(j.jsxs)("div",{className:"flex flex-col",children:[!t&&Object(j.jsxs)("article",{className:"randomPerson",children:[Object(j.jsx)("header",{children:Object(j.jsxs)("h1",{className:"randomPerson__title",children:[Object(j.jsx)("span",{className:"randomPerson__title--top",children:"Nuvalence"}),Object(j.jsx)("span",{className:"randomPerson__title--bottom",children:"Address Book"})]})}),Object(j.jsx)("main",{className:"randomPerson__profiles",onScroll:function(e){return s(e)},children:c.length&&c.map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsx)(i.b,{to:"/".concat(e.login.uuid),children:Object(j.jsxs)("article",{className:"randomPerson__profile",children:[Object(j.jsx)("img",{src:e.picture.medium,alt:e.name.first,className:"randomPerson__picture"}),Object(j.jsx)("span",{className:"randomPerson__name",children:e.name.first}),Object(j.jsxs)("span",{className:"randomPerson__value",children:[Object(j.jsx)("span",{children:"Age: "}),e.dob.age]})]})}),t===c.length-1&&n&&Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)(d,{})})]},t)}))})]}),Object(j.jsx)("div",{className:"text-center",children:t&&Object(j.jsx)(d,{})})]})}),S=n(25),v=n(15),E=n(11),y=(n(48),function(){var e=Object(l.g)(),t=p((function(e){return e.system.randomUsers})),n=a.a.useState(),c=Object(S.a)(n,2),s=c[0],r=c[1],o=a.a.useState(!0),i=Object(S.a)(o,2),d=i[0],b=i[1];return a.a.useEffect((function(){var n=t.find((function(t){return t.login.uuid===e.id}));r(n),b(!1)}),[e,t]),Object(j.jsxs)(j.Fragment,{children:[s&&Object(j.jsxs)("div",{className:"card-container",children:[Object(j.jsx)("img",{className:"image",src:s.picture.large,alt:s.name.first}),Object(j.jsxs)("div",{className:"text-sm leading-normal mt-2 mb-2 text-blueGray-400 font-bold uppercase",children:[Object(j.jsx)("span",{className:"pr-2 inline-block",children:Object(j.jsx)(v.a,{icon:"male"===s.gender?E.d:E.b})}),Object(j.jsx)("h1",{className:"inline-block",children:"".concat(s.name.first," ").concat(s.name.last)})]}),Object(j.jsxs)("div",{className:"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase",children:[Object(j.jsx)("span",{className:"pr-2 inline-block",children:"Age:"}),Object(j.jsx)("h1",{className:"inline-block",children:s.dob.age})]}),Object(j.jsxs)("div",{className:"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase",children:[Object(j.jsx)("span",{className:"pr-2",children:Object(j.jsx)(v.a,{icon:E.a})}),s.location.city]}),Object(j.jsxs)("div",{className:"mb-2 text-blueGray-600",children:[Object(j.jsx)("span",{className:"pr-2",children:Object(j.jsx)(v.a,{icon:E.e})}),s.phone]}),Object(j.jsxs)("div",{className:"mb-2 text-blueGray-600",children:[Object(j.jsx)("span",{className:"pr-2",children:Object(j.jsx)(v.a,{icon:E.c})}),s.email]})]}),!s&&!d&&Object(j.jsx)(l.a,{to:"/"})]})});var R=function(){var e=Object(m.c)(),t=p((function(e){return e.system.loadMoreUsers})),n=a.a.useCallback((function(){fetch("https://randomuser.me/api/?results=10").then((function(e){if(e.ok)return e.json();throw e})).then((function(t){var n;e((n=t.results,{type:c.SET_RANDOM_USERS,payload:n}))})).catch((function(e){console.error("Error fetching data",e)})).finally((function(){var t;e((t=!1,{type:c.SET_LOADING,payload:t})),e(h(!1))}))}),[e]);return a.a.useEffect((function(){n()}),[n]),a.a.useEffect((function(){t&&setTimeout((function(){n()}),1e3)}),[n,t]),Object(j.jsx)(i.a,{children:Object(j.jsx)(s.Suspense,{fallback:Object(j.jsx)(j.Fragment,{}),children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{exact:!0,path:"/",component:g}),Object(j.jsx)(l.b,{path:"/:id",component:y}),Object(j.jsx)(l.b,{render:function(){return Object(j.jsx)(l.a,{to:{pathname:"/"}})}})]})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m.a,{store:N,children:Object(j.jsx)(R,{})})}),document.getElementById("root")),T()}},[[49,1,2]]]);
//# sourceMappingURL=main.be6c093c.chunk.js.map