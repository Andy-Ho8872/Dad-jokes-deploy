(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{376:function(e,t,r){e.exports=r.p+"img/dadjokes.a9a3adc.jpg"},382:function(e,t,r){"use strict";r.r(t);var n={head:function(){return{title:"Welcome to Dad Jokes House",meta:[{hid:"description",name:"description",content:"The Home page of D J H"}]}}},o=r(78),c=r(110),l=r.n(c),f=(r(7),r(8),r(9),r(43),r(112),r(90),r(233),r(23),r(13),r(14),r(11),r(17),r(28),r(52),r(54),r(61),r(10),r(53),r(2)),d=(r(172),r(0)),O=r(58),j=r(1);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y=["sm","md","lg","xl"],h=y.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),w=y.reduce((function(e,t){return e["offset"+Object(j.t)(t)]={type:[String,Number],default:null},e}),{}),S=y.reduce((function(e,t){return e["order"+Object(j.t)(t)]={type:[String,Number],default:null},e}),{}),k={col:Object.keys(h),offset:Object.keys(w),order:Object.keys(S)};function P(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var D=new Map,N=d.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},S),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,n=t.children,o=(t.parent,"");for(var c in r)o+=String(r[c]);var l=D.get(o);return l||function(){var e,t;for(t in l=[],k)k[t].forEach((function(e){var n=r[e],o=P(t,e,n);o&&l.push(o)}));var n=l.some((function(e){return e.startsWith("col-")}));l.push((e={col:!n||!r.cols},Object(f.a)(e,"col-".concat(r.cols),r.cols),Object(f.a)(e,"offset-".concat(r.offset),r.offset),Object(f.a)(e,"order-".concat(r.order),r.order),Object(f.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),D.set(o,l)}(),e(r.tag,Object(O.a)(data,{class:l}),n)}}),x=r(134),C=r(349),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-row",{attrs:{justify:"center",align:"center"}},[t("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[t("div",{staticClass:"text-center"},[t("h1",{staticClass:"my-6"},[this._v("Welcome My Friend")]),this._v(" "),t("v-img",{attrs:{src:r(376)}})],1)])],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCol:N,VImg:x.a,VRow:C.a})}}]);