import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import study from './modules/study.js'
import user from './modules/user.js'
import index from './modules/index.js'
Vue.use(Vuex)
// import state from './state.js'
// import mutations from './mutations.js'
// import getters from './getters.js'
// import actions from './actions.js'

// import common from './modules/common.js'
const store = new Vuex.Store({
	// state,
	// mutations,
	// getters,
	// actions,
	modules: {
		study,
		user,
		index,
	},
	plugins: [
		createPersistedState({
			key: 'VUEX',
			paths: ['study', 'user', 'index'], // 存储的指定的模块的名字（存储某个模块对象）
			storage: {
				getItem: (key) => uni.getStorageSync(key), // 获取  
				setItem: (key, value) => uni.setStorageSync(key, value), // 存储  
				removeItem: (key) => uni.removeStorageSync(key) // 删除   
			}
		})
	] // 状态持久化
})
export default store
