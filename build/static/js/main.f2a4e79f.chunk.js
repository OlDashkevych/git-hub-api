(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){"use strict";t.a={GET_POSTS_START:"GET_POSTS_START",GET_POSTS_SUCCESS:"GET_POSTS_SUCCESS",GET_POSTS_FAILURE:"GET_POSTS_FAILURE",CLEAR_LIST:"CLEAR_LIST"}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a=function(e){return e.posts.items},r=function(e){return e.posts.loading}},38:function(e,t,n){e.exports=n(88)},51:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),l=n.n(c),u=n(16),o=n(35),S=n(15),i=n(5),s=n(13),E=Object(i.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case s.a.GET_POSTS_SUCCESS:return a;case s.a.CLEAR_LIST:return[];default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case s.a.GET_POSTS_START:return!0;case s.a.GET_POSTS_FAILURE:case s.a.GET_POSTS_SUCCESS:return!1;default:return e}}}),T=Object(i.combineReducers)({posts:E}),m=[S.a],p=Object(o.a)({reducer:T,middleware:m}),_=(n(51),n(34)),d=n(4),f=n(19),b=n(29),O=function(){var e=Object(u.c)(b.b);return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(f.BlockLoading,null))},h={url:"/",label:"Home"},C=[{path:h.url,label:h.label,exact:!0,Component:Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,126))}))}],L=function(){return r.a.createElement(_.a,null,r.a.createElement(O,null),r.a.createElement(a.Suspense,{fallback:r.a.createElement(f.BlockLoading,null)},r.a.createElement(d.c,null,C.map((function(e){var t=e.Component,n=e.path,a=e.label,c=e.exact;return r.a.createElement(d.a,{path:n,key:a,exact:c,component:t})})))))};l.a.render(r.a.createElement(u.a,{store:p},r.a.createElement(L,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f2a4e79f.chunk.js.map