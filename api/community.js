import request from '@/util/request.js'
// 消息列表
export const tieMessage = (data) => {
	return request.JA({
		url:'/tie/message',
		method:'POST',
		data
	})
}

// 帖子列表
export const tieList = (data) => {
	return request.JA({
		url:'/tie/list',
		method:'POST',
		data
	})
}
// 文章列表
export const newsList = (data) => {
	return request.JA({
		url:'/news/list',
		method:'POST',
		data
	})
}

// 贴吧分类
export const tieType = () => {
	return request.JA({
		url:'/tie/type'
	})
}
// 文章分类
export const getNewsType = () => {
	return request.JA({
		url:'/news/getNewsType'
	})
}

// 帖子详情
export const tieDetail = (data) => {
	return request.JA({
		url:'/tie/detail',
		method:'POST',
		data
	})
}
// 文章详情
export const newsDetail = (data) => {
	return request.JA({
		url:'/news/details',
		method:'POST',
		data
	})
}


// 创建帖子
export const tieCreate = (data) => {
	return request.JA({
		url:'/tie/create',
		method:'POST',
		data
	})
}

// 删除帖子
export const tieDelete = (data) => {
	return request.JA({
		url:'/tie/delete',
		method:'POST',
		data
	})
}

// 贴吧评论
export const tieComment = (data) => {
	return request.JA({
		url:'/tie/comment',
		method:'POST',
		data
	})
}
// 文章评论
export const newsCollectCreate = (data) => {
	return request.JA({
		url:'/newsCollect/create',
		method:'POST',
		data
	})
}

// 删除评论
export const tieDelComment = (data) => {
	return request.JA({
		url:'/tie/delComment',
		method:'POST',
		data
	})
}


// 贴吧点赞
export const tieCollectCreate = (data) => {
	return request.JA({
		url:'/tieCollect/create',
		method:'POST',
		data
	})
}

// 文章点赞
export const CnewsCollectCreate = (data) => {
	return request.JA({
		url:'/newsCollect/CollectCreate',
		method:'POST',
		data
	})
}

// 贴吧取消点赞
export const tieCollectDel = (data) => {
	return request.JA({
		url:'/tieCollect/delete',
		method:'POST',
		data
	})
}

// 文章取消点赞
export const CnewsCollectDel = (data) => {
	return request.JA({
		url:'/newsCollect/CollectDelete',
		method:'POST',
		data
	})
}

// 关注
export const focusCreate = (data) => {
	return request.JA({
		url:'/focus/create',
		method:'POST',
		data
	})
}

// 取消关注
export const focusDel = (data) => {
	return request.JA({
		url:'/focus/delete',
		method:'POST',
		data
	})
}