const state = {
	// 搜索名称
	searchName: '',
	// 搜索历史
	recordList: [],
	// 首页课程数据
	courseList:[],
	// 
	courseTitle:'',
	 tabBarlist: [
		{
			iconPath: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/sy.png',
			selectedIconPath: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/syxz.png',
			text: '首页',
			count: 0,// 红色角标显示的数
			isDot: false,	// 如果配置此值为true，那么角标将会以红点的形式显示
	
			customIcon: false	,// 如果是凸起按钮项，需配置此值为true
			pagePath: '/pages/index/index',
		},
		{
			iconPath: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/xx.png',
			selectedIconPath: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/xxxz.png',
			text: '学习',
			customIcon: false,
			pagePath: '/pages/index/study',
		},
		{
			iconPath: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/kcicon.png',
			selectedIconPath: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/kcicon.png',
			text: '',
			midButton: true,
			customIcon: false,
				pagePath: '/pages/index/course',
		},
		{
			iconPath: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/sq.png',
			selectedIconPath: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/sqxz.png',
			text: '社区',
			customIcon: false,
						pagePath: '/pages/index/community',
		},
		{
			iconPath: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/user.png',
			selectedIconPath: 'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/tie/userxz.png',
			text: '我的',
			count: 0,
			isDot: false,
			customIcon: false,
			pagePath: '/pages/index/user',
		}
	],
	img:'https://boxue-resource.oss-cn-shenzhen.aliyuncs.com/',
	// 默认头像
	defaultimg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604550938037&di=e72c6e9513ab9168c405ad761c9bbcad&imgtype=0&src=http%3A%2F%2Fpic43.photophoto.cn%2F20170506%2F0470102348231008_b.jpg',
}
const mutations = {
	setRecordList(state, data) {
		state.recordList.push(data)
	},
	// 删除历史记录
	delRecordList(state){
		state.recordList.splice(0,state.recordList.length)
	},
	setSearchName(state, data) {
		console.log(data)
		state.searchName = data
	},
	// 
	SetcourseList(state, data){
		state.courseList = data
	},
	SetcourseTitle(state,data){
		state.courseTitle = data
	}
}
const getters = {
	// 超过数量省略隐藏
	getcordList(state, getters) {
		let recordList = [];
		console.log(state.recordList)
		state.recordList.filter((item, i) => {
			// 计算单字节还是双字节
			var len = 0;
			for (var i = 0; i < item.length; i++) {
				var c = item.charCodeAt(i);
				//单字节加1
				if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
					len++;
				} else {
					len += 2;
				}
			}
			// 超过数量省略隐藏
			if (len >= 12) {
				recordList.unshift(item.slice(0, 6) + '...');
			} else {
				recordList.unshift(item);
			}
		});
		recordList = recordList.slice(0,8)
		return recordList;
	},
}
const actions = {}
export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}
