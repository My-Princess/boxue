(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{258:
/*!*******************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \*******************************************************************************/
/*! no static exports found */function(e,n,o){"use strict";(function(e){o(/*! uni-pages */4);t(o(/*! vue */2));var n=t(o(/*! ./pages/login/login.vue */259));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,o(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["createPage"])},259:
/*!************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/login/login.vue ***!
  \************************************************************/
/*! no static exports found */function(e,n,o){"use strict";o.r(n);var t=o(/*! ./login.vue?vue&type=template&id=b237504c& */260),s=o(/*! ./login.vue?vue&type=script&lang=js& */262);for(var i in s)"default"!==i&&function(e){o.d(n,e,(function(){return s[e]}))}(i);o(/*! ./login.vue?vue&type=style&index=0&lang=less& */264);var a,c=o(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */10),r=Object(c["default"])(s["default"],t["render"],t["staticRenderFns"],!1,null,null,null,!1,t["components"],a);r.options.__file="pages/login/login.vue",n["default"]=r.exports},260:
/*!*******************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/login/login.vue?vue&type=template&id=b237504c& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,n,o){"use strict";o.r(n);var t=o(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=b237504c& */261);o.d(n,"render",(function(){return t["render"]})),o.d(n,"staticRenderFns",(function(){return t["staticRenderFns"]})),o.d(n,"recyclableRender",(function(){return t["recyclableRender"]})),o.d(n,"components",(function(){return t["components"]}))},261:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/pages/login/login.vue?vue&type=template&id=b237504c& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,n,o){"use strict";var t;o.r(n),o.d(n,"render",(function(){return s})),o.d(n,"staticRenderFns",(function(){return a})),o.d(n,"recyclableRender",(function(){return i})),o.d(n,"components",(function(){return t}));var s=function(){var e=this,n=e.$createElement;e._self._c},i=!1,a=[];s._withStripped=!0},262:
/*!*************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/login/login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */function(e,n,o){"use strict";o.r(n);var t=o(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */263),s=o.n(t);for(var i in t)"default"!==i&&function(e){o.d(n,e,(function(){return t[e]}))}(i);n["default"]=s.a},263:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/pages/login/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,n,o){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=o(/*! @/api/index.js */60),s={data:function(){return{phoneVal:"",word:"",cahngeColor:!1,isOvertime:!1,phoneValue:"",messageCode:"",pwsValue:"",areacodenumber:"",loginShow:!0,eyeShow:!0,showPhone:!1,showAuthorization:!0,code:"",session_key:""}},onLoad:function(){var n=this;this.word=this.login.getCode,e.login({success:function(o){if(console.log(o),"login:ok"==o.errMsg){var s={code:o.code};(0,t.getOpenid)(s).then((function(e){console.log(e),n.session_key=e.data.session_key}))}else e.showToast({title:"系统异常，请联系管理员!"})}})},onShow:function(){e.getStorageSync("areacodeData")?this.areacodenumber=e.getStorageSync("areacodeData").mobile_prefix:this.areacodenumber=86},computed:{login:function(){return this.$t("login")},commonality:function(){return this.$t("commonality")}},methods:{cutLogin:function(){console.log("触发"),this.loginShow=!this.loginShow},phoneInput:function(){this.phoneVal&&""!=this.pwsValue?this.cahngeColor=!0:this.cahngeColor=!1},messageInput:function(){this.phoneValue&&""!=this.messageCode?this.cahngeColor=!0:this.cahngeColor=!1},eyeShowtip:function(){this.eyeShow=!this.eyeShow},qqmessages:function(){console.log("触发");var e=this,n=60;if(""==this.phoneValue)return wx.showToast({title:this.login.phoneTip,icon:"none"}),!1;if(console.log(this.isOvertime),!this.isOvertime){var o={phone:this.phoneValue,type:2,prefix:this.areacodenumber};(0,t.getCode)(o).then((function(o){if(e.isOvertime=!0,console.log(o),0!=o.code)console.log("错误"),e.isOvertime=!1,wx.showToast({title:o.msg,icon:"none"});else var t=setInterval((function(){n--;var o="".concat(e.login.Sent)+" "+"(".concat(n,"s)");if(e.word=o,n<0){e.isOvertime=!1,clearInterval(t);var s=e.login.resend;e.word=s}}),1e3)}))}},wxLogin:function(){},pwsLogin:function(){if(""!=this.phoneVal){""==this.pwsValue&&e.showToast({title:this.login.PwsTip,icon:"none"});var n={phone:this.phoneVal,password:this.pwsValue};(0,t.Login)(n).then((function(n){console.log("登录",n),0==n.code?(e.setStorage({key:"token",data:n.data.token,success:function(){console.log("存储成功")}}),e.setStorage({key:"user",data:n.data,success:function(){console.log("存储成功")}}),e.switchTab({url:"../index/index"})):e.showToast({title:n.msg,icon:"none"})}))}else e.showToast({title:this.login.phoneTip,icon:"none"})},messageLogin:function(){if(""!=this.messageCode)if(""!=this.phoneValue){var n={phone:this.phoneValue,code:this.messageCode};(0,t.Setcode)(n).then((function(n){console.log(n),0==n.code?(e.setStorage({key:"token",data:n.data.token,success:function(){console.log("存储成功")}}),e.setStorage({key:"user",data:n.data,success:function(){console.log("存储成功")}}),e.switchTab({url:"../index/index"})):e.showToast({title:n.msg,icon:"none"})}))}else e.showToast({title:this.login.phoneTip,icon:"none"});else e.showToast({title:this.login.codeTip,icon:"none"})},getSetting:function(){return new Promise((function(n,o){e.getSetting({success:function(e){e.authSetting["scope.userInfo"]?(console.log("存在"),n(!0)):(console.log("不存在"),n(!1))}})})).catch((function(e){console.log(e)}))},getUserInfo:function(n){var o=this,s=this.getSetting();s.then((function(s){if(console.log("是否已经授权",s),s){console.log("用户信息，加密数据",n);var i=JSON.parse(n.detail.rawData);console.log(i);var a={encryptedData:n.detail.encryptedData,iv:n.detail.iv,sessionKey:o.session_key};console.log(a),(0,t.getUserInfos)(a).then((function(n){console.log("解密",n),e.setStorage({key:"token",data:n.data.token,success:function(){console.log("存储成功")}}),e.setStorage({key:"user",data:n.data,success:function(){console.log("存储成功")}}),0==n.data.status?e.navigateTo({url:"/pages/login/wxlogin"}):1==n.data.status?e.switchTab({url:"/pages/index/index"}):e.showToast({title:n.msg,icon:"none"})}))}else e.showToast({title:"授权失败，请确认授权已开启",mask:!0,icon:"none"})}))},areaCode:function(){e.navigateTo({url:"./areacode"})},forgetPsw:function(){e.navigateTo({url:"./message"})},agreement:function(){e.navigateTo({url:"./agreement"})}}};n.default=s}).call(this,o(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},264:
/*!**********************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/login/login.vue?vue&type=style&index=0&lang=less& ***!
  \**********************************************************************************************/
/*! no static exports found */function(e,n,o){"use strict";o.r(n);var t=o(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&lang=less& */265),s=o.n(t);for(var i in t)"default"!==i&&function(e){o.d(n,e,(function(){return t[e]}))}(i);n["default"]=s.a},265:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/pages/login/login.vue?vue&type=style&index=0&lang=less& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,n,o){}},[[258,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map