(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/APlayer/APlayer"],{1308:
/*!*********************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/components/APlayer/APlayer.vue ***!
  \*********************************************************************/
/*! no static exports found */function(n,t,e){"use strict";e.r(t);var o=e(/*! ./APlayer.vue?vue&type=template&id=79d6bdec& */1309),r=e(/*! ./APlayer.vue?vue&type=script&lang=js& */1311);for(var i in r)"default"!==i&&function(n){e.d(t,n,(function(){return r[n]}))}(i);e(/*! ./APlayer.vue?vue&type=style&index=0&lang=scss& */1313);var u,a=e(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */12),c=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],u);c.options.__file="components/APlayer/APlayer.vue",t["default"]=c.exports},1309:
/*!****************************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/components/APlayer/APlayer.vue?vue&type=template&id=79d6bdec& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(n,t,e){"use strict";e.r(t);var o=e(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./APlayer.vue?vue&type=template&id=79d6bdec& */1310);e.d(t,"render",(function(){return o["render"]})),e.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),e.d(t,"components",(function(){return o["components"]}))},1310:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/components/APlayer/APlayer.vue?vue&type=template&id=79d6bdec& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(n,t,e){"use strict";var o;e.r(t),e.d(t,"render",(function(){return r})),e.d(t,"staticRenderFns",(function(){return u})),e.d(t,"recyclableRender",(function(){return i})),e.d(t,"components",(function(){return o}));var r=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.seek=!0,n.current=t.detail.value})},i=!1,u=[];r._withStripped=!0},1311:
/*!**********************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/components/APlayer/APlayer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */function(n,t,e){"use strict";e.r(t);var o=e(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./APlayer.vue?vue&type=script&lang=js& */1312),r=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=r.a},1312:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/components/APlayer/APlayer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n.createInnerAudioContext();console.log(e);var o={props:{src:String,autoplay:Boolean,control:{type:Boolean,default:!0},color:{type:String,default:"#169af3"}},data:function(){return{duration:"",isshowxh:!0,continue:!0,loop:!1,currentTime:"",durationTime:"",current:"",loading:!1,paused:!0,seek:!1}},created:function(){var n=this;e.src=this.src,console.log(e.src),e.onCanplay((function(t){console.log(e.duration),n.duration=e.duration})),this.current=0,this.durationTime=this.format(this.duration),e.obeyMuteSwitch=!1,e.autoplay=this.autoplay,e.onTimeUpdate((function(){n.seek||(n.current=e.currentTime)})),e.onPlay((function(){n.paused=!1,n.loading=!1})),e.onPause((function(){n.paused=!0})),e.onEnded((function(){n.continue?n.next():(n.paused=!0,n.current=0)})),e.onSeeked((function(){n.seek=!1}))},watch:{src:function(n){e.src=n,this.current=0,e.play(),this.loading=!0},duration:function(n){this.durationTime=this.format(n)},current:function(n){this.currentTime=this.format(n)},loop:function(n){console.log("是否循序播放",n),e.loop=n}},methods:{xhBtn:function(){this.isshowxh=!this.isshowxh,this.isshowxh?this.loop=!1:this.loop=!0},lbBtn:function(){this.$emit("lbBtn")},prev:function(){this.$emit("prev")},next:function(){this.$emit("next")},format:function(n){return"0".repeat(2-String(Math.floor(n/60)).length)+Math.floor(n/60)+":"+"0".repeat(2-String(Math.floor(n%60)).length)+Math.floor(n%60)},operation:function(){e.paused?(e.play(),this.loading=!0):e.pause()},change:function(n){e.seek(n.detail.value)}}};t.default=o}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},1313:
/*!*******************************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/components/APlayer/APlayer.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */function(n,t,e){"use strict";e.r(t);var o=e(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./APlayer.vue?vue&type=style&index=0&lang=scss& */1314),r=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=r.a},1314:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/components/APlayer/APlayer.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,t,e){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/APlayer/APlayer.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/APlayer/APlayer-create-component',
    {
        'components/APlayer/APlayer-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(1308))
        })
    },
    [['components/APlayer/APlayer-create-component']]
]);
