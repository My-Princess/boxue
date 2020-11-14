import Vue from 'vue'
import LangEn from './en.js'
import LangChs from './zh.js'
import LangID from './idID.js'
import VueI18n from './vue-i18n'
Vue.use(VueI18n)
var system_info = uni.getStorageSync('system_info')

if (!system_info.language) {
	// 获取设备信息
	uni.getSystemInfo({
		success: function (res) {
			uni.setStorageSync('system_info', res);
			system_info = res
		}
	})
}
	// const cur_lang = system_info.language == 'en' ? 'en' : 'zh_CN'
	console.log(system_info)
	// 获取系统的值
	let cur_lang = system_info.language
	console.log('系统的值',cur_lang)
	
	// 要传给locale的值
	var lan
	
	// 中文
	if(cur_lang == 'zh_CN' || cur_lang == 'zh_HK' || cur_lang == 'zh_MO' || cur_lang == 'zh_TW' || cur_lang == 'zh_SG' || cur_lang == 'zh'
	 || cur_lang == 'zh-CN' || cur_lang == 'zh-HK' || cur_lang == 'zh-MO' || cur_lang == 'zh-TW' || cur_lang == 'zh-SG'
	){
		lan = 'zh-CN'
	}
	// 英语
	let enLan = cur_lang.slice(0,2)
	if(enLan == 'en'){
		lan = 'en'
	}
	// 印尼语
	if(cur_lang == 'id-ID'){
		lan = 'id-ID'
	}
	
	// 保存检测的
	// uni.setStorageSync('lang', lan)
	
	const i18n = new VueI18n({
		locale: lan || 'zh_CN',  // 默认选择的语言
		messages: {  
				'en': LangEn,
				'zh-CN': LangChs,
				'id-ID': LangID
			}
	})
	export default i18n