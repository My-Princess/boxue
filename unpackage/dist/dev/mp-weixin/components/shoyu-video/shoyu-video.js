(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/shoyu-video/shoyu-video"],{1025:
/*!*****************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/components/shoyu-video/shoyu-video.vue ***!
  \*****************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var i=e(/*! ./shoyu-video.vue?vue&type=template&id=e3da99e4& */1026),o=e(/*! ./shoyu-video.vue?vue&type=script&lang=js& */1028);for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e(/*! ./shoyu-video.vue?vue&type=style&index=0&lang=css& */1030);var u,c=e(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */10),s=Object(c["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],u);s.options.__file="components/shoyu-video/shoyu-video.vue",n["default"]=s.exports},1026:
/*!************************************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/components/shoyu-video/shoyu-video.vue?vue&type=template&id=e3da99e4& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,n,e){"use strict";e.r(n);var i=e(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shoyu-video.vue?vue&type=template&id=e3da99e4& */1027);e.d(n,"render",(function(){return i["render"]})),e.d(n,"staticRenderFns",(function(){return i["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return i["recyclableRender"]})),e.d(n,"components",(function(){return i["components"]}))},1027:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/components/shoyu-video/shoyu-video.vue?vue&type=template&id=e3da99e4& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,n,e){"use strict";var i;e.r(n),e.d(n,"render",(function(){return o})),e.d(n,"staticRenderFns",(function(){return u})),e.d(n,"recyclableRender",(function(){return r})),e.d(n,"components",(function(){return i}));var o=function(){var t=this,n=t.$createElement;t._self._c},r=!1,u=[];o._withStripped=!0},1028:
/*!******************************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/components/shoyu-video/shoyu-video.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var i=e(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shoyu-video.vue?vue&type=script&lang=js& */1029),o=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=o.a},1029:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/components/shoyu-video/shoyu-video.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"SyVideo",props:{videoUri:{type:[String],default:""},title:{type:String}},data:function(){return{videoContext:t.createVideoContext("myVideo"),showTip:!1,rateShow:!1,distinctShow:!1,currentRate:1,distinctname:"标清",distinctData:[{type:3,name:"流畅"},{type:2,name:"标清"},{type:3,name:"高清"}]}},created:function(){},mounted:function(){},methods:{showSwitchRate:function(t){this.rateShow=!0,this.distinctShow=!1},switchRate:function(t){var n=this,e=Number(t.currentTarget.dataset.rate);n.currentRate=e,n.rateShow=!1,this.videoContext.playbackRate(e)},showdistinct:function(){this.distinctShow=!0,this.rateShow=!1},distinctBtn:function(t){console.log(t),this.distinctname=t.currentTarget.dataset.name;var n=t.currentTarget.dataset.type;this.distinctShow=!1,this.$emit("distincttype",n)},play:function(){var t=this;console.log(this.videoUri),setTimeout((function(){t.showTip=!0}),3e3)},pause:function(){this.showTip=!1},mouseover:function(){console.log("触发"),this.showTip=!1},mouseout:function(){var t=this;console.log("移除"),setTimeout((function(){t.showTip=!0}),3e3)}}};n.default=e}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},1030:
/*!**************************************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/components/shoyu-video/shoyu-video.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var i=e(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shoyu-video.vue?vue&type=style&index=0&lang=css& */1031),o=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=o.a},1031:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/components/shoyu-video/shoyu-video.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/shoyu-video/shoyu-video.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/shoyu-video/shoyu-video-create-component',
    {
        'components/shoyu-video/shoyu-video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(1025))
        })
    },
    [['components/shoyu-video/shoyu-video-create-component']]
]);
