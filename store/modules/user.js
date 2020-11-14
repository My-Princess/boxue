const state = {
	// 汇率计算前国家
	frontState: {
		"id": 356,
		"name": "China",
		"name_zh": "中国",
		"code": "CN",
		"currency_name": "Yuan Renminbi",
		"currency_name_zh": "人民币",
		"currency_code": "CNY",
		"rate": 1,
		"hits": 763184,
		"selected": 1,
		"top": 5,
		"lat": 35,
		"lng": 105,
		"code3": "CHN",
		"code_num": "156"
	},
	// 汇率计算后国家
	queenState: {
		"id": 297,
		"name": "United States",
		"name_zh": "美国",
		"code": "US",
		"currency_name": "USD",
		"currency_name_zh": "美元",
		"currency_code": "USD",
		"rate": 0.1465437652955055,
		"hits": 8166248,
		"selected": 1,
		"top": 10,
		"lat": 38,
		"lng": -97,
		"code3": "USA",
		"code_num": "840"
	},
	// 汇率的初始index
	frontIndex: 0,
	queenIndex: 1,
	// 人工翻译数据
	artificialData: {},
	
	// 语言的起始index
	fronti: 0,
	queeni: 1,
	frontLanguage: {
		"name_en": "Chinese (Simplified)",
		"name_in": "Bahasa Tiongkok yang disederhanakan)",
		"name_zh": "中文(简体)",
		"code": "zh"
	},
	queenLanguage: {
		"name_en": "Indonesian",
		"name_in": "bahasa Indonesia",
		"name_zh": "印尼语",
		"code": "id"
	},
	// 请求后翻译数据
	LanguageData:{
		
	}
}
const mutations = {
	// 获取转换汇率前数据
	setFrontState(state, data) {
		console.log('前', data)
		state.frontState = data
	},
	// 获取转换汇率后数据
	setQueenState(state, data) {
		console.log('后', data)
		state.queenState = data
	},
	setFrontIndex(state, data) {
		state.frontIndex = data
	},
	setQueenIndex(state, data) {
		state.queenIndex = data
	},
	
	setfronti(state, data) {
		state.fronti = data
	},
	setqueeni(state, data) {
		state.queeni = data
	},
	// 人工翻译数据
	getartificialData(state, data) {
		state.artificialData = data
	},
	
	
	getfrontLanguage(state, data){
		
		state.frontLanguage = data
	},
	getqueenLanguage(state, data){
		
		state.queenLanguage = data
	},
	setLanguageData(state, data){
		state.LanguageData = data
	}
	

}
const getters = {

}
const actions = {}
export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}
