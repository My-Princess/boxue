(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-community"],{"018d":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-tabs",style:{background:t.bgColor}},[i("v-uni-view",{attrs:{id:t.id}},[i("v-uni-scroll-view",{staticClass:"u-scroll-view",attrs:{"scroll-x":!0,"scroll-left":t.scrollLeft,"scroll-with-animation":!0}},[i("v-uni-view",{staticClass:"u-scroll-box",class:{"u-tabs-scorll-flex":!t.isScroll}},[t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-tab-item u-line-1",style:[t.tabItemStyle(n)],attrs:{id:"u-tab-item-"+n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickTab(n)}}},[t._v(t._s(e[t.name]||e["name"]))])})),t.showBar?i("v-uni-view",{staticClass:"u-tab-bar",style:[t.tabBarStyle]}):t._e()],2)],1)],1)],1)},r=[]},"022d":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),r=i("0b0d"),o=n(i("bcfc")),c=n(i("2ef4")),s={mixins:[o.default,c.default],data:function(){return{styles:{padding:"16rpx 0 30rpx 120rpx","border-bottom":"1rpx solid #eeeeee"},downOption:{auto:!1},upOption:{auto:!1,noMoreSize:1,empty:{tip:"还没有人在该板块发布过帖子哦"}},tieBoxData:[]}},props:{i:Number,index:{type:Number,default:function(){return 0}},tabs:{type:Array,default:function(){return[]}}},methods:{downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(t){var e=this,i=this.tabs[this.i].id,n={token:uni.getStorageSync("token"),page:t.num,size:t.size,typeId:i,uid:0};(0,r.tieList)(n).then((function(i){e.mescroll.endSuccess(i.data.list.length),1==t.num&&(e.tieBoxData=[]),e.tieBoxData=e.tieBoxData.concat(i.data.list)})).catch((function(){e.mescroll.endErr()}))},attentionBtn:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var n,a,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n={token:uni.getStorageSync("token"),focusId:t.uid},0!=t.isFocus){i.next=10;break}return e.backColor="",t.isFocus=1,i.next=6,(0,r.focusCreate)(n);case 6:a=i.sent,console.log(a),i.next=17;break;case 10:if(1!=t.isFocus){i.next=17;break}return t.isFocus=0,e.backColor="btnactive",i.next=15,(0,r.focusDel)(n);case 15:o=i.sent,console.log(o);case 17:case"end":return i.stop()}}),i)})))()},txtDetail:function(t){console.log(t),uni.navigateTo({url:"/pages/community/communityDetail?tieId=".concat(t)})}}};e.default=s},"087a":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530"));i("96cf");var r=n(i("1da1")),o=i("2f62"),c=i("0b0d"),s=n(i("dfe8")),l=n(i("8683")),u={components:{MescrollItem:s.default,ActiveItem:l.default},data:function(){return{TabBarcurrent:3,height:"400px",tab:0,tabsList:[{name:"贴吧"},{name:"文章"}],articleTab:0,articleTabs:[],tieTab:0,tieTabs:[],activeTab:0,backColor:"",articlePage:1,articleSize:10,isFocus:"",page:1,size:10}},onLoad:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.height=uni.getSystemInfoSync().windowHeight+"px",e.next=3,(0,c.tieType)();case 3:return i=e.sent,t.tieTabs=i.data,e.next=7,(0,c.getNewsType)();case 7:n=e.sent,t.articleTabs=n.data,t.tieMessageList();case 10:case"end":return e.stop()}}),e)})))()},computed:(0,a.default)({},(0,o.mapState)("index",["tabBarlist"])),methods:{swiperChange:function(t){this.tieTab=t.detail.current},tieMessageList:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={token:uni.getStorageSync("token"),page:t.page},e.next=3,(0,c.tieMessage)(i);case 3:n=e.sent,console.log(n);case 5:case"end":return e.stop()}}),e)})))()},articleDetail:function(t){uni.navigateTo({url:"../community/articleDetail?tieId=".concat(t,"&type=2")})},postcomment:function(){uni.navigateTo({url:"../community/postcomment"})},activeTabs:function(t){console.log(t),this.tab=t},tieList:function(t,e){this.typeId=e},activeChange:function(t){this.articleTab=t},tieChange:function(t){this.tieTab=t},TipNews:function(){uni.navigateTo({url:"../user/news"})}}};e.default=u},1314:function(t,e,i){"use strict";i.r(e);var n=i("6a3d"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"198d":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),r=i("0b0d"),o={props:{articleLists:{type:Object,default:function(){return{}}}},data:function(){return{isShow:"",praise:""}},created:function(){console.log(this.articleLists.isPraise),0==this.articleLists.isPraise?this.isShow=!0:this.isShow=!1,this.praise=this.articleLists.praise},watch:{praise:function(t){console.log(t);var e=t;return e}},methods:{articleUrl:function(){this.$emit("click")},give:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i={token:uni.getStorageSync("token"),type:"1",tieId:t.articleLists.id},!t.isShow){e.next=8;break}return e.next=4,(0,r.CnewsCollectCreate)(i);case 4:n=e.sent,0==n.code&&(t.isShow=!t.isShow,t.praise=t.praise+1),e.next=13;break;case 8:if(t.isShow){e.next=13;break}return e.next=11,(0,r.CnewsCollectDel)(i);case 11:a=e.sent,0==a.code&&(t.isShow=!t.isShow,t.praise=t.praise-1);case 13:case"end":return e.stop()}}),e)})))()}}};e.default=o},"20a3":function(t,e,i){"use strict";var n=i("560d"),a=i.n(n);a.a},"20f7":function(t,e,i){"use strict";i.r(e);var n=i("2964"),a=i("c3be");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("c9ad");var o,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"2b136b4c",null,!1,n["a"],o);e["default"]=s.exports},"21f0":function(t,e,i){"use strict";i.r(e);var n=i("087a"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"24e3":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.clearfix[data-v-e129b680]:after,\n.clearfix[data-v-e129b680]:before{content:"";display:table}.clearfix[data-v-e129b680]:after{clear:both}.activeColor[data-v-e129b680]{color:#db1f13!important}.rowhidden[data-v-e129b680]{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;text-overflow:ellipsis;-webkit-line-clamp:2}.articleitem-c[data-v-e129b680]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.articleitem-l-t[data-v-e129b680]{margin-top:%?30?%;margin-bottom:%?24?%;font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#343434}.articleitem-l-b[data-v-e129b680]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.articleitem-l-b-title[data-v-e129b680]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#999}.articleitem-l-b-dz[data-v-e129b680]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?28?%}.articleitem-l-b-dz uni-image[data-v-e129b680]{width:%?44?%;height:%?40?%}.articleitem-l-b-dz uni-text[data-v-e129b680]{margin-left:%?8?%;font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#666}.articleitem-l-b-pl[data-v-e129b680]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.articleitem-l-b-pl uni-image[data-v-e129b680]{width:%?44?%;height:%?40?%}.articleitem-l-b-pl uni-text[data-v-e129b680]{margin-left:%?8?%;font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#666}.articleitem-title[data-v-e129b680]{font-size:%?30?%;font-family:PingFang SC;font-weight:700;color:#333}',""]),t.exports=e},2964:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"communityuser"},[i("v-uni-view",{staticClass:"communityuser-title"},[i("v-uni-image",{attrs:{src:t.tieHead.headImg||t.defaultimg}}),i("v-uni-view",{staticClass:"communityuser-title-c"},[i("v-uni-view",{staticClass:"communityuser-title-c-name"},[t._v(t._s(t.tieHead.nickname||t.tieHead.phone))]),i("v-uni-view",{staticClass:"communityuser-title-c-time"},[t._v(t._s(t.createTime))])],1),i("v-uni-view",{staticClass:"communityuser-title-btn"},[t._t("right")],2)],1),i("v-uni-view",{staticClass:"communityuser-concent"},[t._t("default")],2)],1)},r=[]},"2ef4":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(t){this.i!==t||this.isInit||(this.isInit=!0,this.mescroll&&this.mescroll.triggerDownScroll())}},methods:{mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef||this.$refs["mescrollRef"+this.i];t&&(this.mescroll=t.mescroll)}},mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef&&this.mescrollInitByRef(),this.i===this.index&&(this.isInit=!0,this.mescroll.triggerDownScroll())}}},a=n;e.default=a},3156:function(t,e,i){"use strict";i.r(e);var n=i("be5d"),a=i("21f0");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("9869");var o,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"0f054029",null,!1,n["a"],o);e["default"]=s.exports},"45d0":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.clearfix[data-v-2b136b4c]:after,\n.clearfix[data-v-2b136b4c]:before{content:"";display:table}.clearfix[data-v-2b136b4c]:after{clear:both}.activeColor[data-v-2b136b4c]{color:#db1f13!important}.communityuser-title[data-v-2b136b4c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.communityuser-title uni-image[data-v-2b136b4c]{display:block;width:%?100?%;height:%?100?%;border-radius:50%}.communityuser-title-c[data-v-2b136b4c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?20?%}.communityuser-title-c-name[data-v-2b136b4c]{font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#333}.communityuser-title-c-time[data-v-2b136b4c]{font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#999}',""]),t.exports=e},"4c12":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.clearfix[data-v-4ada9034]:after,\n.clearfix[data-v-4ada9034]:before{content:"";display:table}.clearfix[data-v-4ada9034]:after{clear:both}.activeColor[data-v-4ada9034]{color:#db1f13!important}.community-concent-item[data-v-4ada9034]{padding:%?30?% %?40?%}.community-concent1[data-v-4ada9034]{padding:0 %?40?%}.community-concent1-item[data-v-4ada9034]{height:%?240?%!important;border-bottom:%?1?% solid #ededed;height:%?160?%;margin-top:%?27?%;margin-left:%?20?%}.community-concent1-item-img[data-v-4ada9034]{position:relative;width:%?188?%;height:%?160?%;margin-top:%?27?%;margin-left:%?20?%}.community-concent1-item-img uni-image[data-v-4ada9034]{width:100%;height:100%;border-radius:10px}.community-concent1-item-img[data-v-4ada9034] div{width:0;height:0}.community-concent1-item-img[data-v-4ada9034] img{max-height:100%;max-width:100%;width:auto!important;height:auto!important;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;opacity:1}.community-concent1-item-video[data-v-4ada9034]{width:%?188?%}.community-c-isFocus[data-v-4ada9034]{width:%?130?%;height:%?46?%;background:#ff4a3e;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fee;font-size:%?24?%;border-radius:10px}.btnactive[data-v-4ada9034]{background:#fff!important;border:%?1?% solid #adadad;color:#adadad!important}',""]),t.exports=e},5250:function(t,e,i){var n=i("869b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("35b1cbc6",n,!0,{sourceMap:!1,shadowMode:!1})},"560d":function(t,e,i){var n=i("4c12");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("267fc33c",n,!0,{sourceMap:!1,shadowMode:!1})},"579c":function(t,e,i){"use strict";var n=i("5b32"),a=i.n(n);a.a},"5b32":function(t,e,i){var n=i("ca28");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6342a4f0",n,!0,{sourceMap:!1,shadowMode:!1})},"648f":function(t,e,i){"use strict";i.r(e);var n=i("8a9d"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"6a3d":function(t,e,i){"use strict";var n=i("4ea4");i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),r={name:"u-tabs",props:{isScroll:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},height:{type:[String,Number],default:80},fontSize:{type:[String,Number],default:30},duration:{type:[String,Number],default:.5},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#303133"},barWidth:{type:[String,Number],default:40},barHeight:{type:[String,Number],default:6},gutter:{type:[String,Number],default:30},bgColor:{type:String,default:"#ffffff"},name:{type:String,default:"name"},bold:{type:Boolean,default:!0},activeItemStyle:{type:Object,default:function(){return{}}},showBar:{type:Boolean,default:!0},barStyle:{type:Object,default:function(){return{}}},itemWidth:{type:[Number,String],default:"auto"}},data:function(){return{scrollLeft:0,tabQueryInfo:[],componentWidth:0,scrollBarLeft:0,parentLeft:0,id:this.$u.guid(),currentIndex:this.current,barFirstTimeMove:!0}},watch:{list:function(t,e){var i=this;t.length!==e.length&&(this.currentIndex=0),this.$nextTick((function(){i.init()}))},current:{immediate:!0,handler:function(t,e){var i=this;this.$nextTick((function(){i.currentIndex=t,i.scrollByIndex()}))}}},computed:{tabBarStyle:function(){var t={width:this.barWidth+"rpx",transform:"translate(".concat(this.scrollBarLeft,"px, -100%)"),"transition-duration":"".concat(this.barFirstTimeMove?0:this.duration,"s"),"background-color":this.activeColor,height:this.barHeight+"rpx","border-radius":"".concat(this.barHeight/2,"px")};return Object.assign(t,this.barStyle),t},tabItemStyle:function(){var t=this;return function(e){var i={height:t.height+"rpx","line-height":t.height+"rpx","font-size":t.fontSize+"rpx","transition-duration":"".concat(t.duration,"s"),padding:t.isScroll?"0 ".concat(t.gutter,"rpx"):"",flex:t.isScroll?"auto":"1",width:t.$u.addUnit(t.itemWidth)};return e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),e==t.currentIndex?(i.color=t.activeColor,i=Object.assign(i,t.activeItemStyle)):i.color=t.inactiveColor,i}}},methods:{init:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$uGetRect("#"+t.id);case 2:i=e.sent,t.parentLeft=i.left,t.componentWidth=i.width,t.getTabRect();case 6:case"end":return e.stop()}}),e)})))()},clickTab:function(t){t!=this.currentIndex&&this.$emit("change",t)},getTabRect:function(){for(var t=uni.createSelectorQuery().in(this),e=0;e<this.list.length;e++)t.select("#u-tab-item-".concat(e)).fields({size:!0,rect:!0});t.exec(function(t){this.tabQueryInfo=t,this.scrollByIndex()}.bind(this))},scrollByIndex:function(){var t=this,e=this.tabQueryInfo[this.currentIndex];if(e){var i=e.width,n=e.left-this.parentLeft,a=n-(this.componentWidth-i)/2;this.scrollLeft=a<0?0:a;var r=e.left+e.width/2-this.parentLeft;this.scrollBarLeft=r-uni.upx2px(this.barWidth)/2,1==this.barFirstTimeMove&&setTimeout((function(){t.barFirstTimeMove=!1}),100)}}},mounted:function(){this.init()}};e.default=r},"6ea1":function(t,e,i){var n=i("af22");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7d005468",n,!0,{sourceMap:!1,shadowMode:!1})},8683:function(t,e,i){"use strict";i.r(e);var n=i("ce90"),a=i("648f");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("20a3");var o,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"4ada9034",null,!1,n["a"],o);e["default"]=s.exports},"869b":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.clearfix[data-v-2adedc86]:after,\n.clearfix[data-v-2adedc86]:before{content:"";display:table}.clearfix[data-v-2adedc86]:after{clear:both}.activeColor[data-v-2adedc86]{color:#db1f13!important}uni-view[data-v-2adedc86],\nuni-scroll-view[data-v-2adedc86]{box-sizing:border-box}[data-v-2adedc86]::-webkit-scrollbar,[data-v-2adedc86]::-webkit-scrollbar,[data-v-2adedc86]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-box[data-v-2adedc86]{position:relative}uni-scroll-view[data-v-2adedc86] ::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-view[data-v-2adedc86]{width:100%;white-space:nowrap;position:relative}.u-tab-item[data-v-2adedc86]{position:relative;display:inline-block;text-align:center;-webkit-transition-property:background-color,color;transition-property:background-color,color}.u-tab-bar[data-v-2adedc86]{position:absolute;bottom:0}.u-tabs-scorll-flex[data-v-2adedc86]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}',""]),t.exports=e},"8a9d":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),r=i("0b0d"),o=n(i("bcfc")),c=n(i("2ef4")),s={mixins:[o.default,c.default],data:function(){return{styles:{padding:"16rpx 0 30rpx 120rpx","border-bottom":"1rpx solid #eeeeee"},downOption:{auto:!1},upOption:{auto:!1,noMoreSize:1,empty:{tip:"暂时还没有发布文章，请稍后刷新试试"}},articleLists:[]}},props:{i:Number,index:{type:Number,default:function(){return 0}},tabs:{type:Array,default:function(){return[]}}},methods:{articleDetail:function(t){uni.navigateTo({url:"../community/articleDetail?tieId=".concat(t,"&type=2")})},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(t){var e=this,i=this.tabs[this.i].id,n={page:t.num,size:t.size,typeId:i,uid:uni.getStorageSync("user").uid||0};(0,r.newsList)(n).then((function(i){e.mescroll.endSuccess(i.data.list.length),1==t.num&&(e.articleLists=[]),e.articleLists=e.articleLists.concat(i.data.list)})).catch((function(){e.mescroll.endErr()}))},attentionBtn:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var n,a,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n={token:uni.getStorageSync("token"),focusId:t.uid},0!=t.isFocus){i.next=10;break}return e.backColor="",t.isFocus=1,i.next=6,(0,r.focusCreate)(n);case 6:a=i.sent,console.log(a),i.next=17;break;case 10:if(1!=t.isFocus){i.next=17;break}return t.isFocus=0,e.backColor="btnactive",i.next=15,(0,r.focusDel)(n);case 15:o=i.sent,console.log(o);case 17:case"end":return i.stop()}}),i)})))()},txtDetail:function(t){console.log(t),uni.navigateTo({url:"../community/communityDetail?tieId=".concat(t)})}}};e.default=s},"8cda":function(t,e,i){"use strict";i.r(e);var n=i("c08d"),a=i("e558");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("c3fe");var o,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"e129b680",null,!1,n["a"],o);e["default"]=s.exports},"8dc0":function(t,e,i){"use strict";var n=i("5250"),a=i.n(n);a.a},9869:function(t,e,i){"use strict";var n=i("6ea1"),a=i.n(n);a.a},"9f84":function(t,e,i){"use strict";i.r(e);var n=i("018d"),a=i("1314");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("8dc0");var o,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"2adedc86",null,!1,n["a"],o);e["default"]=s.exports},a3dd:function(t,e,i){"use strict";i.r(e);var n=i("022d"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},a9ad:function(t,e,i){var n=i("45d0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("cd698076",n,!0,{sourceMap:!1,shadowMode:!1})},af22:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.clearfix[data-v-0f054029]:after,\n.clearfix[data-v-0f054029]:before{content:"";display:table}.clearfix[data-v-0f054029]:after{clear:both}.activeColor[data-v-0f054029]{color:#db1f13!important}.community-c-isFocus[data-v-0f054029]{width:%?130?%;height:%?46?%;background:#ff4a3e;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fee;font-size:%?24?%;border-radius:10px}.community-concent1-active[data-v-0f054029]{padding-top:%?150?%}.community-concent-item-video[data-v-0f054029] uni-video{width:100%!important}.community .writepl[data-v-0f054029]{position:fixed;right:%?30?%;bottom:%?135?%;width:%?104?%;height:%?104?%}.community .writepl uni-image[data-v-0f054029]{width:100%;height:100%}.community-tab[data-v-0f054029]{width:100%;position:fixed;top:0;left:0;background:#fff;padding-left:30%;padding-right:30%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:99}.community-tab-icon[data-v-0f054029]{position:absolute;right:%?40?%;width:%?44?%;height:%?44?%}.community-tab-icon uni-image[data-v-0f054029]{width:100%;height:100%}.community-tab-icon uni-text[data-v-0f054029]{position:absolute;right:%?-8?%;top:%?-8?%;display:block;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?32?%;height:%?32?%;border-radius:50%;background:#db1f13;font-size:%?16?%;font-family:PingFang SC;font-weight:700;color:#fff}.community-tab1[data-v-0f054029]{z-index:99;width:100%;position:fixed;left:0;top:%?88?%;background:#fff;padding:0 %?10?%}',""]),t.exports=e},bcfc:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){var t=this;this.mescroll.optUp.use?this.mescroll.resetUpScroll():setTimeout((function(){t.mescroll.endSuccess()}),500)},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},a=n;e.default=a},be5d:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uTabs:i("9f84").default,uTabbar:i("5093").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"community"},[i("v-uni-view",{staticClass:"community-c"},[i("v-uni-view",{staticClass:"community-tab"},[i("u-tabs",{attrs:{list:t.tabsList,"bar-style":{background:"#DB1F13"},"font-size":"36","is-scroll":!0,current:t.tab,"active-color":"#333","inactive-color":"#999"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.activeTabs.apply(void 0,arguments)}}})],1),0==t.tab?i("v-uni-view",{staticClass:"community-concent1-active"},[i("v-uni-view",{staticClass:"community-tab1"},[i("u-tabs",{attrs:{list:t.tieTabs,"bar-style":{background:"#DB1F13"},"font-size":"36","is-scroll":!0,current:t.tieTab,"active-color":"#333","inactive-color":"#999"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tieChange.apply(void 0,arguments)}}})],1),i("v-uni-swiper",{style:{height:t.height},attrs:{current:t.tieTab},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.tieTabs,(function(e,n){return i("v-uni-swiper-item",{key:n},[i("mescroll-item",{ref:"mescrollItem",refInFor:!0,attrs:{i:n,index:t.tieTab,tabs:t.tieTabs}})],1)})),1)],1):t._e(),1==t.tab?i("v-uni-view",{staticClass:"community-concent1-active"},[i("v-uni-view",{staticClass:"community-tab1"},[i("u-tabs",{attrs:{list:t.articleTabs,"bar-style":{background:"#DB1F13"},"font-size":"36","is-scroll":!1,current:t.articleTab,"active-color":"#333","inactive-color":"#999"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.activeChange.apply(void 0,arguments)}}})],1),i("v-uni-swiper",{style:{height:t.height},attrs:{current:t.articleTab},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.articleTabs,(function(e,n){return i("v-uni-swiper-item",{key:n},[i("ActiveItem",{ref:"mescrollItem",refInFor:!0,attrs:{i:n,index:t.articleTab,tabs:t.articleTabs}})],1)})),1)],1):t._e(),i("v-uni-view",{staticClass:"writepl",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.postcomment.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/fabu.png",mode:""}})],1)],1),i("u-tabbar",{attrs:{list:t.tabBarlist,"mid-button":!0},model:{value:t.TabBarcurrent,callback:function(e){t.TabBarcurrent=e},expression:"TabBarcurrent"}})],1)},r=[]},c08d:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"articleitem"},[i("v-uni-view",{staticClass:"articleitem-title hidden"},[t._v(t._s(t.articleLists.title))]),i("v-uni-view",{staticClass:"articleitem-c"},[i("v-uni-view",{staticClass:"articleitem-l"},[i("v-uni-view",{staticClass:"articleitem-l-t rowhidden",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.articleUrl.apply(void 0,arguments)}}},[t._v(t._s(t.articleLists.describe))]),i("v-uni-view",{staticClass:"articleitem-l-b"},[i("v-uni-view",{staticClass:"articleitem-l-b-title"},[t._v(t._s(t.articleLists.update_time))]),i("v-uni-view",{staticClass:"articleitem-l-b-dz",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.give.apply(void 0,arguments)}}},[t.isShow?i("v-uni-image",{attrs:{src:"https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/dz.png",mode:""}}):t._e(),t.isShow?t._e():i("v-uni-image",{attrs:{src:"https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/ydz.png",mode:""}}),i("v-uni-text",[t._v(t._s(t.praise))])],1),i("v-uni-view",{staticClass:"articleitem-l-b-pl"},[i("v-uni-image",{attrs:{src:"https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/pl.png",mode:""}}),i("v-uni-text",[t._v(t._s(t.articleLists.weigh))])],1)],1)],1),i("v-uni-view",{staticClass:"articleitem-r"},[t._t("img")],2)],1)],1)},r=[]},c3be:function(t,e,i){"use strict";i.r(e);var n=i("d275"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},c3fe:function(t,e,i){"use strict";var n=i("cb0b"),a=i.n(n);a.a},c9ad:function(t,e,i){"use strict";var n=i("a9ad"),a=i.n(n);a.a},ca28:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.clearfix[data-v-3900a7ac]:after,\n.clearfix[data-v-3900a7ac]:before{content:"";display:table}.clearfix[data-v-3900a7ac]:after{clear:both}.activeColor[data-v-3900a7ac]{color:#db1f13!important}.community-concent-item[data-v-3900a7ac]{padding:%?30?% %?40?%}.community-concent-item-img[data-v-3900a7ac]{position:relative;width:99%;height:%?300?%;margin-top:15px;margin-bottom:10px}.community-concent-item-img[data-v-3900a7ac] div{width:0;height:0}.community-concent-item-img[data-v-3900a7ac] img{max-height:100%;max-width:100%;width:auto!important;height:auto!important;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;opacity:1}.community-c-isFocus[data-v-3900a7ac]{width:%?130?%;height:%?46?%;background:#ff4a3e;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fee;font-size:%?24?%;border-radius:10px}.btnactive[data-v-3900a7ac]{background:#fff!important;border:%?1?% solid #adadad;color:#adadad!important}',""]),t.exports=e},cb0b:function(t,e,i){var n=i("24e3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("10106792",n,!0,{sourceMap:!1,shadowMode:!1})},ce90:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={mescrollUni:i("bc9d").default,ArticleItem:i("8cda").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("mescroll-uni",{ref:"mescrollRef"+t.i,attrs:{height:"100%",top:"40",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"community-concent1"},t._l(t.articleLists,(function(e,n){return i("v-uni-view",{key:n,staticClass:"community-concent1-item"},[i("ArticleItem",{attrs:{articleLists:e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.articleDetail(e.id)}},scopedSlots:t._u([{key:"img",fn:function(){return[e.cover_image?i("v-uni-view",{staticClass:"community-concent1-item-img"},[i("v-uni-image",{attrs:{src:"https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/"+e.cover_image,mode:""}})],1):t._e()]},proxy:!0}],null,!0)})],1)})),1)],1)],1)},r=[]},d275:function(t,e,i){"use strict";var n=i("4ea4");i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),r=i("2f62"),o=(i("0b0d"),{props:{tieHead:{type:Object}},data:function(){return{isattention:!0,isFocus:""}},created:function(){},watch:{tieHead:{handler:function(t){console.log("1111",t),this.isFocus=this.tieHead.isFocus},immediate:!0}},computed:(0,a.default)((0,a.default)({},(0,r.mapState)("index",["defaultimg"])),{},{createTime:function(){return this.tieHead.createTime.split(" ")[0]}}),methods:{}});e.default=o},dfe8:function(t,e,i){"use strict";i.r(e);var n=i("eb16"),a=i("a3dd");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("579c");var o,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"3900a7ac",null,!1,n["a"],o);e["default"]=s.exports},e558:function(t,e,i){"use strict";i.r(e);var n=i("198d"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},eb16:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={mescrollUni:i("bc9d").default,communityUser:i("20f7").default,communityUserItem:i("b425").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("mescroll-uni",{ref:"mescrollRef"+t.i,attrs:{height:"100%",top:"40",down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"community-concent"},t._l(t.tieBoxData,(function(e,n){return i("v-uni-view",{key:n,staticClass:"community-concent-item"},[i("communityUser",{attrs:{tieHead:e},scopedSlots:t._u([{key:"right",fn:function(){return[2!=e.isFocus?i("v-uni-view",{staticClass:"community-c-isFocus",class:1==e.isFocus?"btnactive":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.attentionBtn(e)}}},[t._v(t._s(e.isFocus?"已关注":"关注"))]):t._e()]},proxy:!0}],null,!0)},[i("communityUser-Item",{style:t.styles,attrs:{tieConcent:e},on:{txtDetail:function(e){arguments[0]=e=t.$handleEvent(e),t.txtDetail.apply(void 0,arguments)}},scopedSlots:t._u([{key:"img",fn:function(){return[e.files.length?i("v-uni-view",[1==e.files[0].type?i("v-uni-view",{staticClass:"community-concent-item-img"},[i("v-uni-image",{attrs:{src:e.files[0].file,mode:""}})],1):t._e(),2==e.files[0].type?i("v-uni-view",{staticClass:"community-concent-item-video"},[i("v-uni-video",{attrs:{src:e.files[0].file,controls:!0}})],1):t._e()],1):t._e()]},proxy:!0}],null,!0)})],1)],1)})),1)],1)],1)},r=[]}}]);