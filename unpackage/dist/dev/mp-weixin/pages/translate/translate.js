(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/translate/translate"],{562:
/*!***************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/main.js?{"page":"pages%2Ftranslate%2Ftranslate"} ***!
  \***************************************************************************************/
/*! no static exports found */function(n,t,e){"use strict";(function(n){e(/*! uni-pages */4);r(e(/*! vue */2));var t=r(e(/*! ./pages/translate/translate.vue */563));function r(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["createPage"])},563:
/*!********************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/translate/translate.vue ***!
  \********************************************************************/
/*! no static exports found */function(n,t,e){"use strict";e.r(t);var r=e(/*! ./translate.vue?vue&type=template&id=d55d7f38& */564),a=e(/*! ./translate.vue?vue&type=script&lang=js& */566);for(var i in a)"default"!==i&&function(n){e.d(t,n,(function(){return a[n]}))}(i);e(/*! ./translate.vue?vue&type=style&index=0&lang=scss& */568);var u,c=e(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */10),o=Object(c["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],u);o.options.__file="pages/translate/translate.vue",t["default"]=o.exports},564:
/*!***************************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/translate/translate.vue?vue&type=template&id=d55d7f38& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(n,t,e){"use strict";e.r(t);var r=e(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./translate.vue?vue&type=template&id=d55d7f38& */565);e.d(t,"render",(function(){return r["render"]})),e.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),e.d(t,"components",(function(){return r["components"]}))},565:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/pages/translate/translate.vue?vue&type=template&id=d55d7f38& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(n,t,e){"use strict";e.r(t),e.d(t,"render",(function(){return a})),e.d(t,"staticRenderFns",(function(){return u})),e.d(t,"recyclableRender",(function(){return i})),e.d(t,"components",(function(){return r}));var r={Head:function(){return e.e(/*! import() | components/Head/Head */"components/Head/Head").then(e.bind(null,/*! @/components/Head/Head.vue */1018))}},a=function(){var n=this,t=n.$createElement;n._self._c},i=!1,u=[];a._withStripped=!0},566:
/*!*********************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/translate/translate.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */function(n,t,e){"use strict";e.r(t);var r=e(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./translate.vue?vue&type=script&lang=js& */567),a=e.n(r);for(var i in r)"default"!==i&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=a.a},567:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/pages/translate/translate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},computed:{translate:function(){return this.$t("translate")}},methods:{tipEveryday:function(){n.navigateTo({url:"./everyday/everyday"})},tipArtificial:function(){n.navigateTo({url:"./artificial/artificial"})},historyOrder:function(){n.navigateTo({url:"./historyOrder/historyOrder"})},immediate:function(){n.navigateTo({url:"./immediate/immediate"})},navigateBack:function(){n.navigateBack()}}};t.default=e}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},568:
/*!******************************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/translate/translate.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************/
/*! no static exports found */function(n,t,e){"use strict";e.r(t);var r=e(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./translate.vue?vue&type=style&index=0&lang=scss& */569),a=e.n(r);for(var i in r)"default"!==i&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=a.a},569:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/pages/translate/translate.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,t,e){}},[[562,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/translate/translate.js.map