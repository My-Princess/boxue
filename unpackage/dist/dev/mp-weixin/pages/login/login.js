(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{258:
/*!*******************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \*******************************************************************************/
/*! no static exports found */function(e,o,n){"use strict";(function(e){n(/*! uni-pages */4);t(n(/*! vue */2));var o=t(n(/*! ./pages/login/login.vue */259));function t(e){return e&&e.__esModule?e:{default:e}}e(o.default)}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["createPage"])},259:
/*!************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/login/login.vue ***!
  \************************************************************/
/*! no static exports found */function(e,o,n){"use strict";n.r(o);var t=n(/*! ./login.vue?vue&type=template&id=b237504c& */260),i=n(/*! ./login.vue?vue&type=script&lang=js& */262);for(var s in i)"default"!==s&&function(e){n.d(o,e,(function(){return i[e]}))}(s);n(/*! ./login.vue?vue&type=style&index=0&lang=less& */264);var a,c=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */12),r=Object(c["default"])(i["default"],t["render"],t["staticRenderFns"],!1,null,null,null,!1,t["components"],a);r.options.__file="pages/login/login.vue",o["default"]=r.exports},260:
/*!*******************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/login/login.vue?vue&type=template&id=b237504c& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,o,n){"use strict";n.r(o);var t=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=b237504c& */261);n.d(o,"render",(function(){return t["render"]})),n.d(o,"staticRenderFns",(function(){return t["staticRenderFns"]})),n.d(o,"recyclableRender",(function(){return t["recyclableRender"]})),n.d(o,"components",(function(){return t["components"]}))},261:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/pages/login/login.vue?vue&type=template&id=b237504c& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,o,n){"use strict";var t;n.r(o),n.d(o,"render",(function(){return i})),n.d(o,"staticRenderFns",(function(){return a})),n.d(o,"recyclableRender",(function(){return s})),n.d(o,"components",(function(){return t}));var i=function(){var e=this,o=e.$createElement;e._self._c},s=!1,a=[];i._withStripped=!0},262:
/*!*************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/login/login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */function(e,o,n){"use strict";n.r(o);var t=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */263),i=n.n(t);for(var s in t)"default"!==s&&function(e){n.d(o,e,(function(){return t[e]}))}(s);o["default"]=i.a},263:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/pages/login/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,o,n){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=n(/*! @/api/index.js */8),i={data:function(){return{phoneVal:"",word:"",cahngeColor:!1,isOvertime:!1,phoneValue:"",messageCode:"",pwsValue:"",areacodenumber:"",loginShow:!0,eyeShow:!0,showPhone:!1,showAuthorization:!0,code:"",session_key:""}},onLoad:function(){var o=this;this.word=this.login.getCode,e.login({success:function(n){if(console.log(n),"login:ok"==n.errMsg){var i={code:n.code};(0,t.getOpenid)(i).then((function(e){console.log(e),o.session_key=e.data.session_key}))}else e.showToast({title:"系统异常，请联系管理员!"})}})},onShow:function(){e.getStorageSync("areacodeData")?this.areacodenumber=e.getStorageSync("areacodeData").mobile_prefix:this.areacodenumber=86},computed:{login:function(){return this.$t("login")},commonality:function(){return this.$t("commonality")}},methods:{cutLogin:function(){console.log("触发"),this.loginShow=!this.loginShow},phoneInput:function(){this.phoneVal&&""!=this.pwsValue?this.cahngeColor=!0:this.cahngeColor=!1},messageInput:function(){this.phoneValue&&""!=this.messageCode?this.cahngeColor=!0:this.cahngeColor=!1},eyeShowtip:function(){this.eyeShow=!this.eyeShow},qqmessages:function(){console.log("触发");var e=this,o=60;if(""==this.phoneValue)return wx.showToast({title:this.login.phoneTip,icon:"none"}),!1;if(console.log(this.isOvertime),!this.isOvertime){var n={phone:this.phoneValue,type:2,prefix:this.areacodenumber};(0,t.getCode)(n).then((function(n){if(e.isOvertime=!0,console.log(n),0!=n.code)console.log("错误"),e.isOvertime=!1,wx.showToast({title:n.msg,icon:"none"});else var t=setInterval((function(){o--;var n="".concat(e.login.Sent)+" "+"(".concat(o,"s)");if(e.word=n,o<0){e.isOvertime=!1,clearInterval(t);var i=e.login.resend;e.word=i}}),1e3)}))}},wxLogin:function(){console.log("H5微信登录")},wxAuthorize:function(){window.location.href;var e=this.getWxUrlData("code");if(console.log("fsdfsad"),console.log("params",e),e){console.log("code",e);var o={code:e};getopenid(o).then((function(e){console.log(e)}))}else{var n="wxe23e57a4e7b1c293",t="http://ceshi.xiaoyuzhong123.com/api/home/cc",i=encodeURIComponent(t),s="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+n+"&redirect_uri="+i+"&scope=snsapi_userinfo&response_type=code&#wechat_redirect";window.location.href=s}},getWxUrlData:function(e){for(var o=window.location.search.substring(1),n=o.split("&"),t=0;t<n.length;t++){var i=n[t].split("=");if(i[0]==e)return i[1]}return!1},pwsLogin:function(){if(""!=this.phoneVal){""==this.pwsValue&&e.showToast({title:this.login.PwsTip,icon:"none"});var o={phone:this.phoneVal,password:this.pwsValue};(0,t.Login)(o).then((function(o){console.log("登录",o),0==o.code?(e.setStorage({key:"token",data:o.data.token,success:function(){console.log("存储成功")}}),e.setStorage({key:"user",data:o.data,success:function(){console.log("存储成功")}}),e.switchTab({url:"../index/index"})):e.showToast({title:o.msg,icon:"none"})}))}else e.showToast({title:this.login.phoneTip,icon:"none"})},messageLogin:function(){if(""!=this.messageCode)if(""!=this.phoneValue){var o={phone:this.phoneValue,code:this.messageCode};(0,t.Setcode)(o).then((function(o){console.log(o),0==o.code?(e.setStorage({key:"token",data:o.data.token,success:function(){console.log("存储成功")}}),e.setStorage({key:"user",data:o.data,success:function(){console.log("存储成功")}}),e.switchTab({url:"../index/index"})):e.showToast({title:o.msg,icon:"none"})}))}else e.showToast({title:this.login.phoneTip,icon:"none"});else e.showToast({title:this.login.codeTip,icon:"none"})},getSetting:function(){return new Promise((function(o,n){e.getSetting({success:function(e){e.authSetting["scope.userInfo"]?(console.log("存在"),o(!0)):(console.log("不存在"),o(!1))}})})).catch((function(e){console.log(e)}))},getUserInfo:function(o){var n=this,i=this.getSetting();i.then((function(i){if(console.log("是否已经授权",i),i){console.log("用户信息，加密数据",o);var s=JSON.parse(o.detail.rawData);console.log(s);var a={encryptedData:o.detail.encryptedData,iv:o.detail.iv,sessionKey:n.session_key};console.log(a),(0,t.getUserInfos)(a).then((function(o){console.log("解密",o),e.setStorage({key:"token",data:o.data.token,success:function(){console.log("存储成功")}}),e.setStorage({key:"user",data:o.data,success:function(){console.log("存储成功")}}),0==o.data.status?e.navigateTo({url:"/pages/login/wxlogin"}):1==o.data.status?e.switchTab({url:"/pages/index/index"}):e.showToast({title:o.msg,icon:"none"})}))}else e.showToast({title:"授权失败，请确认授权已开启",mask:!0,icon:"none"})}))},areaCode:function(){e.navigateTo({url:"./areacode"})},forgetPsw:function(){e.navigateTo({url:"./message"})},agreement:function(){e.navigateTo({url:"./agreement"})}}};o.default=i}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},264:
/*!**********************************************************************************************!*\
  !*** C:/Users/HP/Desktop/bxh1/bxh10/pages/login/login.vue?vue&type=style&index=0&lang=less& ***!
  \**********************************************************************************************/
/*! no static exports found */function(e,o,n){"use strict";n.r(o);var t=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&lang=less& */265),i=n.n(t);for(var s in t)"default"!==s&&function(e){n.d(o,e,(function(){return t[e]}))}(s);o["default"]=i.a},265:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/HP/Desktop/bxh1/bxh10/pages/login/login.vue?vue&type=style&index=0&lang=less& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,o,n){}},[[258,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map