import request from '../util/request.js';

// 分类列表
export const cateGory = () => {
	return request.JA({
		url:'/index/cateGory'
	})
}
//分类子页面
export const categorygetid = (data) => {
	return request.JA({
		url:'/index/categorygetid',
		method:'POST',
		data
	})
}

// 视频专区
export const collectionIndex = () => {
	return request.JA({
		url:'/collection/index',
		method:'get',
	})
}
// 课程详情购买页
export const getIntroduce = (data) => {
	return request.JA({
		url:'/class/introduce',
		method:'POST',
		data
	})
}

// 课程列表
export const getList = (data) => {
	return request.JA({
		url:'/file/list',
		method:'POST',
		data
	})
}

// 音频详情
export const fileWatch = (data) => {
	return request.JA({
		url:'/file/watch',
		method:'POST',
		data
	})
}
// 章节精炼（获取购买的课程大分类）
export const getClassCateGory = (data) => {
	return request.JA({
	  url: '/bank/getClassCateGory',
	  method: "POST",
	  data
	})
}
// 章节提炼 （/bank/getClass）

export const getClass = (data) => {
	return request.JA({
		url:'/bank/getClass',
		method:'POST',
		data
	})
}
// 答题
export const getQuestions = (data) => {
	return request.JA({
	  url: '/bank/getQuestions',
	  method: "POST",
	  data
	})
}

// 题库主页统计
export const countQuestionset = (data) => {
	return request.JA({
		url: '/bank/countQuestionset',
		method: "POST",
		data
	})
}

// 收藏课题分类
export const getBank = (data) => {
	return request.JA({
		url: '/bank/getBank',
		method: "POST",
		data
	})
}

// 收藏课题 题目列表
export const getCollectionQuestions = (data) => {
	return request.JA({
		url: '/bank/getCollectionQuestions',
		method: "POST",
		data
	})
}

// 收藏课题
export const bankAdd = (data) => {
	return request.JA({
		url: '/bank/add',
		method: "POST",
		data
	})
}

// 删除课题
export const bankDel = (data) => {
	return request.JA({
		url: '/bank/del',
		method: "POST",
		data
	})
}


// 连对记录
export const bankAddRecord = (data) => {
	return request.JA({
		url: '/bank/addRecord',
		method: "POST",
		data
	})
}

// 连对记录排行榜
export const getRecord = (data) => {
	return request.JA({
		url: '/bank/getRecord',
		method: "POST",
		data
	})
}

// 视频详情
// 
export const collectionintroduce = (data) => {
	return request.JA({
		url: '/collection/introduce',
		method: "POST",
		data
	})
}
// 视频列表
export const collectionList = (data) => {
	return request.JA({
		url: '/collection/getlist',
		method: "POST",
		data
	})
}

// 添加错题记录
export const addError = (data) => {
	return request.JA({
		url: '/bank/addError',
		method: "POST",
		data
	})
}

// 错题主页
export const getError = (data) => {
	return request.JA({
		url: '/bank/getError',
		method: "POST",
		data
	})
}
// 错题详情
export const getErrorDetails = (data) => {
	return request.JA({
		url: '/bank/getErrorDetails',
		method: "POST",
		data
	})
}

// 重做错题
export const getErrorQuestionsetList = (data) => {
	return request.JA({
		url: '/bank/getErrorQuestionsetList',
		method: "POST",
		data
	})
}


// 提交错题数据（对的）
export const delErrorQuestionset = (data) => {
	return request.JA({
		url: '/bank/delErrorQuestionset',
		method: "POST",
		data
	})
}

// 课程列表评价
export const indexContent = (data) => {
	return request.JA({
		url: '/index/content',
		method: "POST",
		data
	})
}


// 支付
export const prepayApp = (data) => {
	return request.JA({
		url: '/class/prepayApp/',
		method: "POST",
		data
	})
}

