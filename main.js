import Vue from 'vue'
import App from './App'

import VueClipboard from 'vue-clipboard2'

import i18n from './lang/index.js'
import store from '@/store/index.js'
// 注册全局组件
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
import uView from "uview-ui";
// import createPersistedState from 'vuex-persistedstate'

import request from './util/request.js'




// import 'https://web-stat.jiguang.cn/web-janalytics/scripts/janalytics-web.min.js'
// import VideoPlayer from 'vue-video-player'
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
// Vue.use(VideoPlayer)
// <script src="https://ajax.googleapis.com/ajax/libs/myanmar-tools/1.2.1/zawgyi_detector.min.js"></script>
// import google_myanmar_tools from "myanmar-tools";
// console.log(detector)




Vue.config.productionTip = false

Vue.use(uView);
Vue.use(VueClipboard);
App.mpType = 'app'

// Vue.use(google_myanmar_tools);
let img = 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/'
 let defaultImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604988968519&di=5a13314844da28996fac334778156adc&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201608%2F27%2F165626h9ojzi99ly42zjoy.png'
 Vue.prototype.defaultImg = defaultImg 
 // Vue.prototype.img = img
Vue.prototype.$request = request;
Vue.prototype._i18n = i18n
Vue.component('mescroll-uni', MescrollUni)
Vue.component('mescroll-body', MescrollBody)

Vue.prototype.$store = store
// Vue.prototype.$i18n = i18n  

const app = new Vue({
	i18n,
	store,
	...App,
})
app.$mount()
