(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/integrallist"],{1155:
/*!******************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/components/integrallist.vue ***!
  \******************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var a=e(/*! ./integrallist.vue?vue&type=template&id=7af1f3f6&scoped=true& */1156),r=e(/*! ./integrallist.vue?vue&type=script&lang=js& */1158);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e(/*! ./integrallist.vue?vue&type=style&index=0&id=7af1f3f6&lang=less&scoped=true& */1160);var o,s=e(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */12),c=Object(s["default"])(r["default"],a["render"],a["staticRenderFns"],!1,null,"7af1f3f6",null,!1,a["components"],o);c.options.__file="components/integrallist.vue",n["default"]=c.exports},1156:
/*!*************************************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/components/integrallist.vue?vue&type=template&id=7af1f3f6&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,n,e){"use strict";e.r(n);var a=e(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./integrallist.vue?vue&type=template&id=7af1f3f6&scoped=true& */1157);e.d(n,"render",(function(){return a["render"]})),e.d(n,"staticRenderFns",(function(){return a["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return a["recyclableRender"]})),e.d(n,"components",(function(){return a["components"]}))},1157:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/components/integrallist.vue?vue&type=template&id=7af1f3f6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,n,e){"use strict";var a;e.r(n),e.d(n,"render",(function(){return r})),e.d(n,"staticRenderFns",(function(){return o})),e.d(n,"recyclableRender",(function(){return i})),e.d(n,"components",(function(){return a}));var r=function(){var t=this,n=t.$createElement;t._self._c},i=!1,o=[];r._withStripped=!0},1158:
/*!*******************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/components/integrallist.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var a=e(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./integrallist.vue?vue&type=script&lang=js& */1159),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},1159:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/components/integrallist.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(/*! ../api/index.js */8),r={props:{listData:{type:Object,default:function(){return{}}}},data:function(){return{ListData:[],start:0,limit:4,total:"",ishow:"",page:0}},created:function(){this.listData.goods.length<10?this.ishow=!1:this.ishow=!0,this.ListData=this.listData.goods},watch:{listData:function(t){}},methods:{integraldown:function(t,n){this.$emit("integraldown",t,n)},loading:function(n){var e=this;++this.page;var r={token:t.getStorageSync("token"),page:this.page,cate_id:n};(0,a.getGoods)(r).then((function(t){console.log("积分首页",t),t.data.data[0].goods.length<10?e.ishow=!1:e.ishow=!0,e.ListData=e.ListData.concat(t.data.data[0].goods)}))}}};n.default=r}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},1160:
/*!****************************************************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/components/integrallist.vue?vue&type=style&index=0&id=7af1f3f6&lang=less&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var a=e(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./integrallist.vue?vue&type=style&index=0&id=7af1f3f6&lang=less&scoped=true& */1161),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},1161:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/components/integrallist.vue?vue&type=style&index=0&id=7af1f3f6&lang=less&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){}}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/integrallist.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/integrallist-create-component',
    {
        'components/integrallist-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(1155))
        })
    },
    [['components/integrallist-create-component']]
]);
