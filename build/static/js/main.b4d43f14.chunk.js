(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{1:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"l",(function(){return i})),n.d(t,"p",(function(){return s})),n.d(t,"n",(function(){return c})),n.d(t,"i",(function(){return o})),n.d(t,"h",(function(){return u})),n.d(t,"q",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"s",(function(){return f})),n.d(t,"r",(function(){return g})),n.d(t,"d",(function(){return O})),n.d(t,"u",(function(){return v})),n.d(t,"t",(function(){return h})),n.d(t,"k",(function(){return E})),n.d(t,"m",(function(){return b})),n.d(t,"j",(function(){return m})),n.d(t,"o",(function(){return R})),n.d(t,"f",(function(){return _})),n.d(t,"c",(function(){return j})),n.d(t,"e",(function(){return p}));var r="BLOG_ITEMS",a="ADD_TO_CARD",i="HANDLING_FILTERS",s="REMOVE_ITEM_FROM_ARR",c="OPEN_DROPDOWN",o="GET_MEALS_FILTER",u="GET_MEALS",l="RESET_MEALS",d="GET_FILTERS",f="SIGNUP_USER",g="SIGNIN_USER",O="DELETE_USER",v="VERIFY_USER",h="VERIFY_REFRESH",E="GET_USER",b="LOGOUT_CALL",m="GET_TESTIMONIALS",R="POST_TESTIMONIALS",_="FORGET_PASSWORD",j="CHANGE_PASSWORD",p="ERROR"},20:function(e,t,n){e.exports=n(29)},25:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(9),s=n.n(i),c=(n(25),n(13)),o=n(6),u=n(17),l=n(1),d=n(2),f=n(4),g={item:[]},O={getMeals:[],getMealsFilter:[]},v={filtersHandle:[]},h={getTestimonials:[]},E=Object(o.c)({blogItemReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.b:return Object(d.a)({},e,{blog:t.blog});default:return e}},addToCardReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.a:return Object(d.a)({},e,{item:[].concat(Object(f.a)(e.item),[t.item])});default:return e}},mealsItemReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.h:return console.log(t.getMeals),Object(d.a)({},e,{getMeals:e.getMeals.concat(t.getMeals.meals),count:t.getMeals.totalCount,message:t.getMeals.meassage});case l.i:return Object(d.a)({},e,{getMealsFilter:e.getMealsFilter.concat(t.getMeals.meals),count:t.getMeals.totalCount});default:return e}},filtersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.g:return Object(d.a)({},e,{getFilters:t.getFilters});default:return e}},handleFiltersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.l:for(var n=0;n<e.filtersHandle.length;n++)if(e.filtersHandle[n].name==t.filtersHandle.name){var r=Object(f.a)(e.filtersHandle);return r[n]=Object(d.a)({},r[n],{values:r[n].values.concat(t.filtersHandle.values[0])}),Object(d.a)({},e,{filtersHandle:r})}return Object(d.a)({},e,{filtersHandle:[].concat(Object(f.a)(e.filtersHandle),[t.filtersHandle])});case l.p:for(var a,i=[],s=0;s<e.filtersHandle.length;s++)if(a=e.filtersHandle[s].values.indexOf(t.item),(i=Object(f.a)(e.filtersHandle))[s]=Object(d.a)({},i[s],{values:[].concat(Object(f.a)(i[s].values.slice(0,a)),Object(f.a)(i[s].values.slice(a+1)))}),0==i[s].values.length){e.filtersHandle.splice(s,1);return Object(d.a)({},e)}return Object(d.a)({},e,{filtersHandle:Object(f.a)(i)});default:return e}},signupReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.s:return Object(d.a)({},e,{signupUser:t.signupUser});case l.u:return Object(d.a)({},e,{verifyUser:t.verifyUser});case l.t:return Object(d.a)({},e,{refresh:t.refresh});default:return e}},signinReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.r:return Object(d.a)({},e,{signinUser:t.signinUser});case l.m:return Object(d.a)({},e,{logOutUser:t.logOutUser});default:return e}},dropDownReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.n:return Object(d.a)({},e,{isDropDown:t.isDropDown});default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.k:return Object(d.a)({},e,{userInfo:t.userInfo});case l.d:return Object(d.a)({},e,{deleteUser:t.deleteUser});default:return e}},testimonialsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.j:return Object(d.a)({},e,{getTestimonials:e.getTestimonials.concat(t.testimonial.testimonials),count:t.testimonial.totalCount,message:t.testimonial.meassage});case l.o:return Object(d.a)({},e,{postTestimonials:t.testimonialPost});default:return e}},passwordReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.f:return Object(d.a)({},e,{forgetPassword:t.forgetPassword});case l.c:return Object(d.a)({},e,{changePassword:t.changePassword});default:return e}}}),b=function(e,t){return t.type===l.m&&(e.signinReducer=void 0),t.type===l.q&&(e.mealsItemReducer=void 0),t.type===l.d&&(e.userReducer.userInfo=void 0),E(e,t)},m=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):o.d)(Object(o.a)(u.a)),R=Object(o.e)(b,m);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(2)]).then(n.bind(null,236))}));s.a.render(a.a.createElement(c.a,{store:R},a.a.createElement(r.Suspense,{fallback:a.a.createElement("h1",null,"Still Loading\u2026")},a.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,4]]]);
//# sourceMappingURL=main.b4d43f14.chunk.js.map