(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/message"],{266:
/*!*********************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/main.js?{"page":"pages%2Flogin%2Fmessage"} ***!
  \*********************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";(function(e){t(/*! uni-pages */4);o(t(/*! vue */2));var n=o(t(/*! ./pages/login/message.vue */267));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["createPage"])},267:
/*!**************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/login/message.vue ***!
  \**************************************************************/
/*! no static exports found */function(e,n,t){"use strict";t.r(n);var o=t(/*! ./message.vue?vue&type=template&id=3bb8b738& */268),i=t(/*! ./message.vue?vue&type=script&lang=js& */270);for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t(/*! ./message.vue?vue&type=style&index=0&lang=less& */272);var a,c=t(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */10),s=Object(c["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],a);s.options.__file="pages/login/message.vue",n["default"]=s.exports},268:
/*!*********************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/login/message.vue?vue&type=template&id=3bb8b738& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,n,t){"use strict";t.r(n);var o=t(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./message.vue?vue&type=template&id=3bb8b738& */269);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},269:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/pages/login/message.vue?vue&type=template&id=3bb8b738& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return i})),t.d(n,"staticRenderFns",(function(){return a})),t.d(n,"recyclableRender",(function(){return r})),t.d(n,"components",(function(){return o}));var i=function(){var e=this,n=e.$createElement;e._self._c},r=!1,a=[];i._withStripped=!0},270:
/*!***************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/login/message.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";t.r(n);var o=t(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./message.vue?vue&type=script&lang=js& */271),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},271:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/pages/login/message.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(/*! @/api/index.js */60),i={data:function(){return{phonevlaue:"",cahngeColor:!1,isOvertime:!1,word:"",areacodenumber:"",code:""}},created:function(){},onLoad:function(){this.word=this.login.getCode,console.log("load")},onShow:function(){e.getStorageSync("areacodeData")?this.areacodenumber=e.getStorageSync("areacodeData").mobile_prefix:this.areacodenumber=86},computed:{login:function(){return this.$t("login")}},methods:{areacode:function(){e.navigateTo({url:"./areacode"})},messageInput:function(){""!=this.phonevlaue&&""!=this.code?this.cahngeColor=!0:this.cahngeColor=!1},messages:function(){if(""!=this.code)if(""!=this.phonevlaue){var n={phone:this.phonevlaue,code:this.code};(0,o.Setcode)(n).then((function(n){console.log(n),0==n.code?e.navigateTo({url:"./register"}):e.showToast({title:n.msg,icon:"none"})}))}else e.showToast({title:this.login.phoneTip,icon:"none"});else e.showToast({title:this.login.codeTip,icon:"none"})},qqmessages:function(){console.log("触发");var e=this,n=60;if(""==this.phoneValue)return wx.showToast({title:this.login.phoneTip,icon:"none"}),!1;if(console.log(this.isOvertime),!this.isOvertime){var t={phone:this.phonevlaue,type:4,prefix:this.areacodenumber};(0,o.getCode)(t).then((function(t){if(e.isOvertime=!0,console.log(t),0!=t.code)console.log("错误"),e.isOvertime=!1,wx.showToast({title:t.msg,icon:"none"});else var o=setInterval((function(){n--;var t="".concat(e.login.Sent)+" "+"(".concat(n,"s)");if(e.word=t,n<0){console.log("进来"),e.isOvertime=!1,clearInterval(o);var i=e.login.resend;e.word=i}}),1e3)}))}},agreement:function(){e.navigateTo({url:"./agreement"})}}};n.default=i}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},272:
/*!************************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/login/message.vue?vue&type=style&index=0&lang=less& ***!
  \************************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";t.r(n);var o=t(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./message.vue?vue&type=style&index=0&lang=less& */273),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},273:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/pages/login/message.vue?vue&type=style&index=0&lang=less& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,n,t){}},[[266,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/message.js.map