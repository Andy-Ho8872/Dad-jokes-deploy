(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(t,e,n){var content=n(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("026b33a3",content,!0,{sourceMap:!1})},229:function(t,e,n){"use strict";var r={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"About",to:"/about"},{icon:"mdi-message-alert-outline",title:"Jokes",to:"/Jokes"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Dad Jokes House"}}},o=n(78),c=n(110),l=n.n(c),v=n(345),d=n(352),f=n(346),m=n(230),h=n(353),_=n(347),k=n(160),w=n(161),x=n(105),V=n(162),J=n(72),A=n(348),C=n(351),D=n(349),j=n(350),N=n(227),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:"",color:"green"}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{staticClass:"white--text",attrs:{"clipped-left":t.clipped,fixed:"",app:"",color:"blue"}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("mdi-application")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[n("v-icon",[t._v("mdi-minus")])],1),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),n("v-main",[n("v-container",[n("nuxt")],1)],1),t._v(" "),n("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[n("v-list-item-action",[n("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),n("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),n("v-footer",{attrs:{absolute:!t.fixed,app:""}},[n("v-row",{staticClass:"text-center"},[n("div",{staticClass:"p-4 mx-auto"},[t._v("© "+t._s((new Date).getFullYear()))])])],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:f.a,VBtn:m.a,VContainer:h.a,VFooter:_.a,VIcon:k.a,VList:w.a,VListItem:x.a,VListItemAction:V.a,VListItemContent:J.a,VListItemTitle:J.b,VMain:A.a,VNavigationDrawer:C.a,VRow:D.a,VSpacer:j.a,VToolbarTitle:N.a})},236:function(t,e,n){n(237),t.exports=n(238)},259:function(t,e,n){"use strict";var r=n(128);n.n(r).a},260:function(t,e,n){(e=n(15)(!1)).push([t.i,"h1[data-v-d0680786]{font-size:20px}",""]),t.exports=e},320:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return v})),n.d(e,"getters",(function(){return d})),n.d(e,"mutations",(function(){return f})),n.d(e,"actions",(function(){return m}));n(83);var r=n(22),o=n(173),c=n.n(o),l={headers:{Accept:"application/json"}},v=function(){return{currentJoke:"",AllJokes:[]}},d={getCurrentJoke:function(t){return t.currentJoke},getAllJokes:function(t){return t.AllJokes}},f={setCurrentJoke:function(t,e){t.currentJoke=e,t.AllJokes.push(e)},clearAllJokes:function(t){t.AllJokes=[]}},m={fetchCurrentJoke:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("https://icanhazdadjoke.com/",l);case 2:n=e.sent,console.log(n.data),t.commit("setCurrentJoke",n.data.joke);case 5:case"end":return e.stop()}}),e)})))()}}},70:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(259),n(78)),c=n(110),l=n.n(c),v=n(345),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"d0680786",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[236,7,1,8]]]);