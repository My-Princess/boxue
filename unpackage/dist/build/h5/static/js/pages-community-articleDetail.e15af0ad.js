(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-community-articleDetail"],{"019d":function(t,e,i){"use strict";i.r(e);var n=i("510d"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"38e6":function(t,e,i){"use strict";var n=i("ee3d"),o=i.n(n);o.a},"510d":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var o=n(i("1da1")),a=i("0b0d"),c={data:function(){return{styles:{padding:"16rpx 0 0rpx 0rpx"},isComment:!1,tieId:"",type:"",page:1,size:10,detailList:{title:""},communityTxt:""}},onLoad:function(t){this.tieId=t.tieId,this.type=t.type,console.log(t)},onShow:function(){this.newDetailList()},computed:{community:function(){return this.$t("community")},title:function(t){console.log(t),console.log(this.detailList.title);var e=this.detailList.title.substring(0,8);return e+="...",e}},methods:{newDetailList:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={token:uni.getStorageSync("token"),tieId:t.tieId,page:t.page,size:t.size},e.next=3,(0,a.newsDetail)(i);case 3:n=e.sent,console.log(n),t.detailList=n.data;case 6:case"end":return e.stop()}}),e)})))()},navigateBack:function(){uni.navigateBack()},imgDetail:function(){uni.navigateTo({url:"./imgDetail"})},communityBtn:function(){}}};e.default=c},6311:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={Head:i("eb8b").default,communityUserItem:i("b425").default,CommentUser:i("e0da").default,Comment:i("a924").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"communitydetails"},[i("Head",{attrs:{title:t.title},on:{navigateBack:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateBack.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"communitydetails-c"},[i("communityUser-Item",{style:t.styles,attrs:{tieConcent:t.detailList,type:t.type},scopedSlots:t._u([{key:"img",fn:function(){return t._l(t.detailList.files,(function(e,n){return i("v-uni-view",{key:e.id,staticClass:"community-concent-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.imgDetail.apply(void 0,arguments)}}},[1==e.type?i("v-uni-view",{staticClass:"community-concent-item-img"},[i("v-uni-image",{attrs:{src:e.file,mode:""}})],1):t._e(),2==e.type?i("v-uni-view",{staticClass:"community-concent-item-video"},[i("v-uni-video",{attrs:{src:e.file,controls:!0}})],1):t._e()],1)}))},proxy:!0}])})],1),i("v-uni-view",{staticClass:"communitydetails-comment"},[i("v-uni-view",{staticClass:"communitydetails-comment-title"},[i("v-uni-text",[t._v(t._s(t.community.comment))]),i("v-uni-text",[t._v("("+t._s(t.detailList.comments)+")")])],1),t.detailList.commentList.list.length?i("v-uni-view",{staticClass:"communitydetails-comment-c"},t._l(t.detailList.commentList.list,(function(e){return i("v-uni-view",{key:e.commentId,staticClass:"communitydetails-comment-c-item"},[i("CommentUser",{attrs:{commentHead:e}},[i("Comment",{style:t.styles,attrs:{type:t.type,Comment:e}})],1)],1)})),1):i("v-uni-view",{staticClass:"communitydetails-comment-cc"},[t._v(t._s(t.community.notComment))])],1),i("v-uni-view",{staticClass:"communitydetails-footer"},[i("v-uni-input",{attrs:{type:"text",value:"",placeholder:t.community.thoughts},model:{value:t.communityTxt,callback:function(e){t.communityTxt=e},expression:"communityTxt"}}),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.communityBtn.apply(void 0,arguments)}}},[t._v(t._s(t.community.send))])],1)],1)},a=[]},"811e":function(t,e,i){"use strict";i.r(e);var n=i("6311"),o=i("019d");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("38e6");var c,m=i("f0c5"),l=Object(m["a"])(o["default"],n["b"],n["c"],!1,null,"561c23e2",null,!1,n["a"],c);e["default"]=l.exports},dc12:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.clearfix[data-v-561c23e2]:after,\n.clearfix[data-v-561c23e2]:before{content:"";display:table}.clearfix[data-v-561c23e2]:after{clear:both}.activeColor[data-v-561c23e2]{color:#db1f13!important}.community-concent-item-video[data-v-561c23e2] uni-video{width:100%!important;height:100%!important}.community-concent-item-img[data-v-561c23e2]{width:%?547?%;height:%?289?%;margin-top:%?30?%}.community-concent-item-img uni-image[data-v-561c23e2]{width:100%;height:100%}.community-concent-item-video[data-v-561c23e2]{margin-top:%?30?%;width:%?547?%;height:%?289?%}.communitydetails-c[data-v-561c23e2]{padding:0 %?40?%}.communitydetails-comment[data-v-561c23e2]{position:relative;margin-top:%?55?%;padding:0 %?40?%;margin-bottom:%?4?%}.communitydetails-comment-title[data-v-561c23e2]{font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#333}.communitydetails-comment-title uni-text[data-v-561c23e2]:last-child{margin-left:%?10?%}.communitydetails-comment-c-item[data-v-561c23e2]{margin-top:%?30?%}.communitydetails-comment-cc[data-v-561c23e2]{font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#999;margin-top:%?80?%;padding-bottom:%?200?%;text-align:center}.communitydetails-footer[data-v-561c23e2]{position:fixed;left:0;bottom:0;padding:0 %?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?98?%;background:#fff;box-shadow:0 0 12px 0 #eee}.communitydetails-footer uni-input[data-v-561c23e2]{padding:0 %?30?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?70?%;background:#fff;border:1px solid #eee;border-radius:35px;font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#333}.communitydetails-footer uni-input[data-v-561c23e2]::-webkit-input-placeholder{color:#999}.communitydetails-footer uni-input[data-v-561c23e2]::-moz-placeholder{\n  /* Mozilla Firefox 19+ */color:#999}.communitydetails-footer uni-input[data-v-561c23e2]:-moz-placeholder{\n  /* Mozilla Firefox 4 to 18 */color:#999}.communitydetails-footer uni-input[data-v-561c23e2]:-ms-input-placeholder{\n  /* Internet Explorer 10-11 */color:#999}.communitydetails-footer uni-text[data-v-561c23e2]{margin-left:%?20?%;font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#999}',""]),t.exports=e},ee3d:function(t,e,i){var n=i("dc12");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("4631fba2",n,!0,{sourceMap:!1,shadowMode:!1})}}]);