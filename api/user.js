import request from '@/util/request.js'
// 关注列表
export const focusList = (data) => {
	return request.JA({
		url: '/focus/list',
		method: "POST",
		data
	})
}
// 修改密码
export const updatepwd = (data) => {
	return request.JA({
		url: `/userinfo/updatepwd/${uni.getStorageSync('token')}.html`,
		method: "POST",
		data
	})
}

// 个人中心 人才
export const getUser = () => {
	return request.JA({
		url: `/userinfo/index/${uni.getStorageSync('token')}.html`,
		method: "POST",
	})
}

// 个人主页
export const mineIndex = () => {
	return request.JA({
		url: `/mine/index//${uni.getStorageSync('token')}.html`,
		method: "GET",
		
	})
}


// 修改个人信息资料
export const updateUserInfo = (data) => {
	return request.JA({
		url: `/userinfo/updateUserInfo/${uni.getStorageSync('token')}.html`,
		method: "POST",
		data
	})
}
// 我的粉丝
export const focusFans = (data) => {
	return request.JA({
		url: '/focus/fans',
		method: "POST",
		data
	})
}


// 我的积分
export const integralList = (data) => {
	return request.JA({
		url: '/integral/list',
		method: "POST",
		data
	})
}

// 优惠券
export const couponList = (data) => {
	return request.JA({
		url: '/coupon/list',
		method: "POST",
		data
	})
}
// 购买课程
export const orderGetOrder = (data) => {
	return request.JA({
		url: '/order/getOrder',
		method: "POST",
		data
	})
}

// 我的课程
export const classMine = (data) => {
	return request.JA({
		url: '/class/mine',
		method: "POST",
		data
	})
}

// 我的老师
export const getCalssTeach = (data) => {
	return request.JA({
		url: '/mine/getCalssTeach',
		method: "POST",
		data
	})
}

// 我的老师详情
export const getCalssTeachDetail = (data) => {
	return request.JA({
		url: '/mine/getCalssTeachDetail',
		method: "POST",
		data
	})
}

// 评价老师
export const mineAddContent = (data) => {
	return request.JA({
		url: '/mine/addContent',
		method: "POST",
		data
	})
}
// 钱包
export const getMoneyLog = (data) => {
	return request.JA({
		url: '/mine/getMoneyLog',
		method: "POST",
		data
	})
}

// 调班申请
export const updateClass = (data) => {
	return request.JA({
		url: '/mine/updateClass',
		method: "POST",
		data
	})
}

// 常见问题列表
export const questionList = () => {
	return request.JA({
		url: '/question/list',
		method: "GET",
	})
}

// 常见问题详情
export const questionDetail = (data) => {
	return request.JA({
		url: '/question/detail',
		method: "POST",
		data
	})
}

// 意见反馈
export const feedbackCreate = (data) => {
	return request.JA({
		url: '/feedback/create',
		method: "POST",
		data
	})
}

// 视频专区
export const collectionMine = (data) => {
	return request.JA({
		url: '/collection/mine',
		method: "POST",
		data
	})
}


// 获取语言
export const getClassType = (data) => {
	return request.JA({
		url: '/translation/getClassType',
		method: "POST",
		data
	})
}

// 添加人工翻译
export const translationAdd = (data) => {
	return request.JA({
		url: '/translation/add',
		method: "POST",
		data
	})
}

// 人工翻译 我的预约

export const translationList = (data) => {
	return request.JA({
		url: '/translation/list',
		method: "POST",
		data
	})
}

// 快译订单
export const fastTranslationAdd = (data) => {
	return request.JA({
		url: '/fastTranslation/add',
		method: "POST",
		data
	})
}

// 公众号列表
export const getWxGzh = (data) => {
	return request.JA({
		url: '/index/getWxGzh',
		method: "GET",
		data
	})
}




