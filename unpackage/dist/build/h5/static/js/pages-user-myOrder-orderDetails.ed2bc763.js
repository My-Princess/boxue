(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-myOrder-orderDetails"],{"0535":function(t,i,e){"use strict";var a=e("2bf2"),s=e.n(a);s.a},"0c1c":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".head-mp[data-v-1db2bffe]{padding-top:%?20?%}.integral-top[data-v-1db2bffe]{position:fixed;width:100%;top:0;left:0;box-sizing:border-box;padding:0 %?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:%?30?%;padding-bottom:%?20?%;z-index:999}.integral-top .icon-zuojiantou[data-v-1db2bffe]{font-size:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.integral-top-title[data-v-1db2bffe]{box-sizing:border-box;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:%?35?%;font-family:PingFang SC;font-weight:500;color:#333}.integral-top-r[data-v-1db2bffe]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}",""]),t.exports=i},"2bf2":function(t,i,e){var a=e("dab1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("2e9209ba",a,!0,{sourceMap:!1,shadowMode:!1})},"370c":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={props:{title:{type:String,required:!1},styles:{type:Object,default:function(){return{background:"#fff"}}}},data:function(){return{}},methods:{navigateBack:function(){console.log("返回上级"),this.$emit("navigateBack")}}};i.default=a},"3e5a":function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var a={Head:e("eb8b").default,OrderBox:e("c757").default},s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"orderdetails"},[e("Head",{attrs:{title:t.user.orderdeaulf},on:{navigateBack:function(i){arguments[0]=i=t.$handleEvent(i),t.navigateBack.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"orderdetails-c"},[e("v-uni-view",{staticClass:"orderdetails-c-box"},[e("Order-box")],1),2==t.type?e("v-uni-view",{staticClass:"orderdetails-c-list"},[t.OrderDetailData.logistics?e("v-uni-view",{staticClass:"orderdetails-c-list-item1"},[e("v-uni-view",{staticClass:"orderdetails-c-list-item1-name"},[t._v(t._s(t.user.status)+"："+t._s(t.OrderDetailData.type))]),e("v-uni-view",{staticClass:"iconfont icon-youjiantou1"})],1):t._e(),t.OrderDetailData.logistics?t._e():e("v-uni-view",{staticClass:"orderdetails-c-list-item"},[e("v-uni-view",{staticClass:"orderdetails-c-list-item-name"},[t._v(t._s(t.user.status)+"：")]),e("v-uni-view",{staticClass:"orderdetails-c-list-item-txt"},[t._v(t._s(t.OrderDetailData.type))])],1),e("v-uni-view",{staticClass:"orderdetails-c-list-item"},[e("v-uni-view",{staticClass:"orderdetails-c-list-item-name"},[t._v(t._s(t.user.ordernum)+"：")]),e("v-uni-view",{staticClass:"orderdetails-c-list-item-txt"},[t._v(t._s(t.OrderDetailData.order_no))])],1),e("v-uni-view",{staticClass:"orderdetails-c-list-item"},[e("v-uni-view",{staticClass:"orderdetails-c-list-item-name"},[t._v(t._s(t.user.ordertime)+"：")]),e("v-uni-view",{staticClass:"orderdetails-c-list-item-txt"},[t._v(t._s(t.OrderDetailData.create_time))])],1)],1):t._e(),1==t.type?e("v-uni-view",{staticClass:"orderdetails-c-list"},[e("v-uni-view",{staticClass:"orderdetails-c-list-item"},[e("v-uni-view",{staticClass:"orderdetails-c-list-item-name"},[t._v(t._s(t.user.ordernum)+"：")]),e("v-uni-view",{staticClass:"orderdetails-c-list-item-txt"},[t._v(".303568")])],1),e("v-uni-view",{staticClass:"orderdetails-c-list-item"},[e("v-uni-view",{staticClass:"orderdetails-c-list-item-name"},[t._v(t._s(t.user.ordertime)+"：")]),e("v-uni-view",{staticClass:"orderdetails-c-list-item-txt"},[t._v("2020.02.29  15:24")])],1),e("v-uni-view",{staticClass:"orderdetails-c-list-item"},[e("v-uni-view",{staticClass:"orderdetails-c-list-item-name"},[t._v(t._s(t.commonality.pay)+"：")]),e("v-uni-view",{staticClass:"orderdetails-c-list-item-txt"},[t._v(t._s(t.commonality.paywx))])],1),e("v-uni-view",{staticClass:"orderdetails-c-list-item1"},[e("v-uni-view",{staticClass:"orderdetails-c-list-item1-name"},[t._v(t._s(t.user.coupons))]),e("v-uni-view",{staticClass:"orderdetails-c-list-item1-txt"},[t._v("￥100.00")])],1),e("v-uni-view",{staticClass:"orderdetails-c-list-item1"},[e("v-uni-view",{staticClass:"orderdetails-c-list-item1-name"},[t._v(t._s(t.commonality.integral))]),e("v-uni-view",{staticClass:"orderdetails-c-list-item1-txt"},[t._v("￥100.00")])],1),e("v-uni-view",{staticClass:"orderdetails-c-list-item1"},[e("v-uni-view",{staticClass:"orderdetails-c-list-item1-name"},[t._v(t._s(t.commonality.discounts))]),e("v-uni-view",{staticClass:"orderdetails-c-list-item1-txt"},[t._v("￥100.00")])],1),e("v-uni-view",{staticClass:"orderdetails-c-list-line"}),e("v-uni-view",{staticClass:"orderdetails-c-list-pay"},[t._v(t._s(t.commonality.netPay)+"：￥1099")])],1):t._e()],1)],1)},n=[]},"47ca":function(t,i,e){"use strict";e.r(i);var a=e("370c"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},"805f":function(t,i,e){var a=e("b6b7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("67102400",a,!0,{sourceMap:!1,shadowMode:!1})},"8d8d":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",t._l(t.orderList,(function(i,a){return e("v-uni-view",{key:i.class_iid,staticClass:"myorder-list-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.orderDetail.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"myorder-list-item-name"},[t._v("订单编号："+t._s(i.order_sn))]),e("v-uni-view",{staticClass:"myorder-list-item-c"},[e("v-uni-view",{staticClass:"myorder-list-item-c-img"},[e("v-uni-image",{attrs:{src:i.image,mode:""}})],1),e("v-uni-view",{staticClass:"myorder-list-item-c-r"},[e("v-uni-view",{staticClass:"myorder-list-item-c-r-name hidden"},[t._v(t._s(i.class_name))]),e("v-uni-view",{staticClass:"myorder-list-item-c-r-txt twohidden"},[t._v(t._s(i.description))]),e("v-uni-view",{staticClass:"myorder-list-item-c-r-time"},[t._v(t._s(i.createTime))])],1)],1),e("v-uni-view",{staticClass:"myorder-list-item-footer"},[e("v-uni-view",{staticClass:"myorder-list-item-footer-r"},[t._v("实付：￥"+t._s(i.money))])],1)],1)})),1)},n=[]},a708:function(t,i,e){"use strict";e.r(i);var a=e("3e5a"),s=e("fb76");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("f1dd");var r,o=e("f0c5"),d=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"a96d9b76",null,!1,a["a"],r);i["default"]=d.exports},b6b7:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.clearfix[data-v-a96d9b76]:after,\n.clearfix[data-v-a96d9b76]:before{content:"";display:table}.clearfix[data-v-a96d9b76]:after{clear:both}.activeColor[data-v-a96d9b76]{color:#db1f13!important}.orderdetails-c[data-v-a96d9b76]{padding-top:%?114?%}.orderdetails-c-list[data-v-a96d9b76]{margin:%?40?% %?40?% 0;padding:%?40?% %?30?%;box-shadow:0 0 4px 1px rgba(0,0,0,.1);border-radius:10px}.orderdetails-c-list-item[data-v-a96d9b76]:nth-child(1){padding-top:0}.orderdetails-c-list-item[data-v-a96d9b76]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% 0;font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#333}.orderdetails-c-list-item1[data-v-a96d9b76]{padding:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.orderdetails-c-list-item1-name[data-v-a96d9b76]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#333}.orderdetails-c-list-item1-txt[data-v-a96d9b76]{font-size:%?26?%;font-family:PingFang SC;font-weight:700;color:#db1f13}.orderdetails-c-list-line[data-v-a96d9b76]{width:100%;height:%?1?%;background:#eee}.orderdetails-c-list-pay[data-v-a96d9b76]{padding-top:%?20?%;text-align:right;font-size:%?32?%;font-family:PingFang SC;font-weight:800;color:#333}',""]),t.exports=i},bdcf:function(t,i,e){var a=e("0c1c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("0704432e",a,!0,{sourceMap:!1,shadowMode:!1})},bfea:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e("59a4"),s={data:function(){return{type:"",id:"",OrderDetailData:{}}},onLoad:function(t){this.type=t.type,this.id=t.id,this.OrderDetail()},computed:{user:function(){return this.$t("user")},commonality:function(){return this.$t("commonality")}},methods:{OrderDetail:function(){var t=this,i={token:uni.getStorageSync("token"),id:this.id};(0,a.getOrderDetail)(i).then((function(i){console.log(i),t.OrderDetailData=i.data}))},navigateBack:function(){uni.navigateBack()}}};i.default=s},c757:function(t,i,e){"use strict";e.r(i);var a=e("8d8d"),s=e("d0c6");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("0535");var r,o=e("f0c5"),d=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"71322011",null,!1,a["a"],r);i["default"]=d.exports},c774:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={props:{orderList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{orderDetail:function(){this.$emit("click")}}};i.default=a},d0c6:function(t,i,e){"use strict";e.r(i);var a=e("c774"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},d989:function(t,i,e){"use strict";var a=e("bdcf"),s=e.n(a);s.a},dab1:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.clearfix[data-v-71322011]:after,\n.clearfix[data-v-71322011]:before{content:"";display:table}.clearfix[data-v-71322011]:after{clear:both}.activeColor[data-v-71322011]{color:#db1f13!important}.myorder-list-item[data-v-71322011]{margin:%?40?% %?40?% 0;padding:%?30?% %?18?% %?30?% %?30?%;box-shadow:0 0 4px 1px rgba(0,0,0,.1);background:#fff;border-radius:10px}.myorder-list-item-name[data-v-71322011]{padding-bottom:%?20?%;font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#333}.myorder-list-item-c[data-v-71322011]{display:-webkit-box;display:-webkit-flex;display:flex;padding-bottom:%?20?%;border-bottom:%?1?% solid #eee}.myorder-list-item-c-img[data-v-71322011]{padding-right:%?20?%;width:%?250?%;height:%?180?%}.myorder-list-item-c-img uni-image[data-v-71322011]{display:block;width:100%;height:100%;background:#fff;border-radius:10px}.myorder-list-item-c-r[data-v-71322011]{width:%?350?%}.myorder-list-item-c-r-name[data-v-71322011]{padding-top:%?6?%;padding-bottom:%?14?%;font-size:%?26?%;font-family:PingFang SC;font-weight:800;color:#333}.myorder-list-item-c-r-txt[data-v-71322011]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#999}.myorder-list-item-c-r-time[data-v-71322011]{padding-top:%?20?%;font-size:%?22?%;font-family:PingFang SC;font-weight:500;color:#999}.myorder-list-item-footer[data-v-71322011]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.myorder-list-item-footer-l[data-v-71322011]{margin-top:%?18?%;width:%?132?%;height:%?52?%;background:url(https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/annei.png);background-size:%?132?% %?52?%;color:#fff;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.myorder-list-item-footer-r[data-v-71322011]{padding-top:%?30?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;font-size:%?32?%;font-family:PingFang SC;font-weight:800;color:#333}',""]),t.exports=i},ea8d:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{},[e("v-uni-view",{staticClass:"integral-top",style:t.styles},[e("v-uni-view",{staticClass:"iconfont icon-zuojiantou",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navigateBack.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"integral-top-title"},[t._v(t._s(t.title))]),e("v-uni-view",{staticClass:"integral-top-r"},[t._t("right")],2)],1),e("v-uni-view",{staticClass:"head"})],1)},n=[]},eb8b:function(t,i,e){"use strict";e.r(i);var a=e("ea8d"),s=e("47ca");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("d989");var r,o=e("f0c5"),d=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"1db2bffe",null,!1,a["a"],r);i["default"]=d.exports},f1dd:function(t,i,e){"use strict";var a=e("805f"),s=e.n(a);s.a},fb76:function(t,i,e){"use strict";e.r(i);var a=e("bfea"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a}}]);