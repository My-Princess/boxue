import request from '../util/request.js'
/*         首页     */
export const getIndex = () => {
  return request.JA({
    url: '/index/home',
    method: "GET"
  })
}

/*        搜索      */
// 热门搜索
export const hotClass = () => {
  return request.JA({
    url: '/index/hotClass',
    method: "GET"
  })
}
// 搜索结果
export const indexSearch = (data) => {
  return request.JA({
    url: '/index/search',
	data
  })
}

/*     登录模块    */
// 区号
export const getAreacode = () => {
  return request.JA({
    url: '/prefix/list.html',
    method: "GET"
  })
}

// 注册
export const register = (data) => {
	return request.JA({
	  url: '/api/phone/reg',
	  method: "POST",
	  data
	})
}

// 绑定手机号
export const bindPhone = (data) => {
	return request.JA({
	  url: `/userinfo/bindPhone/${uni.getStorageSync('token')}.html`,
	  method: "POST",
	  data
	})
}

// 密码登录
export const Login = (data) => {
	return request.JA({
		url: '/api/phone/phonePwdLogin',
		method: "POST",
		data
	})
}

// 设置密码
export const Setpassword = (data) => {
	return request.JA({
		url: 'api/userinfo/addpwd',
		method: "POST",
		data
	})
}

// 验证码校验
export const Setcode = (data) => {
	return request.JA({
		url: '/api/phone/forgetCode',
		method: "POST",
		data
	})
}


// 获取验证码
export const getCode = (data) => {
	return request.JA({
		url:'/api/phone/getCode',
		method:'GET',
		data
	})
}

// 获取openid
export const getOpenid = (data) => {
	return request.JA({
		url:'/index/getToken',
		method:'POST',
		data
	})
}

// 微信授权登录
export const getUserInfos = (data) => {
	return request.JA({
		url:'/index/userInfo',
		method:'POST',
		data
	})
}



// ----------------------------积分模块 ------------------------------------------
// 积分首页
export const getGoods = (data) => {
	return request.JA({
		url:'/index/goods',
		method:'POST',
		data
	})
}

// 商品详情
export const getDetails = (data) => {
	return request.JA({
		url:'/goods/details',
		method:'POST',
		data
	})
}

// 积分兑换列表
export const getOrderList = (data) => {
	return request.JA({
		url:"/goods/getOrderList",
		method:'POST',
		data
	})
}

// 积分详情
export const getOrderDetail = (data) => {
	return request.JA({
		url:"/goods/getOrderDetail",
		method:'POST',
		data
	})
}


// 积分兑换下单
export const setOrder = (data) => {
	return request.JA({
		url:'/goods/order',
		method:'POST',
		data
	})
}

// 选择收货地址
export const infoAddress = (data) => {
	return request.JA({
		url:'/goods/infoAddress',
		method:'POST',
		data
	})
}

// 收货地址列表
export const getAddress = (data) => {
	return request.JA({
		url:'/goods/getaddress',
		method:'POST',
		data
	})
}

// 添加收货地址
export const Address = (data) => {
	return request.JA({
		url:'/goods/address',
		method:'POST',
		data
	})
}

// 修改收货地址
export const editAddress = (data) => {
	return request.JA({
		url:'/goods/editAddress',
		method:'POST',
		data
	})
}

// 删除收货地址
export const delAddress = (data) => {
	return request.JA({
		url:'/goods/delAddress',
		method:'POST',
		data
	})
}




// 物流查询
export const goodsKdn = (data) => {
	return request.JA({
		url:'/goods/kdn',
		method:'POST',
		data
	})
}

export const customer = (data) => {
	return request.JA({
		url: `/customer/${uni.getStorageSync('token')}.html`,
		method: "GET",
		data
	})
}





