import app from '@/App.vue'



console.log('触发了呀', uni.getStorageSync('common').count)
export default {
	index: {
		placeholder: '请输入您需要搜索的课程或关键词',
		information: '最新资讯：',
		mainCourse: '免费大讲堂',
		introductory: '主打课程',
		compilations: '精选合集',
		future: '近期开班',
		ranking: '排行榜',
		rankingInfo: '仅显示前六名，同等成绩按用户名拼音顺序排列',
		history: '搜索历史',
		cancel: '取消',
		train: '培训专区',
		video: '视频专区',
		section: '总章节',
		store: '积分商城',
		OtherGoods: '其他商品',
		integral: '积分',
		inventory: '库存',
		myintegral: '我的积分',
		record: '兑换记录',
		virtual: '虚拟商品',
		hintTitle: '购买须知',
		conversion: '立即兑换',
		orderAffirm: '订单确认',
		selectsite: '选择收货地址',
		addsite: '+ 新增收货地址',
		addInfo: '填写收货信息',
		consignee: '收货人',
		contactWay: '联系方式',
		Provinces: '省市区',
		ProvincesSelet:'省市区选择',
		address: '详细地址',
		addressInfo: '请输入详细地址',
		please: '请填写',
		defaultAddress: '设为默认地址',
		commoditydetails:'商品详情',
		commodityTxt:'商品购买成功后，会在七个工作日内发货，法定节假日顺延， 请确认商品完好后再签收。若存在质量问题，请务必在签收后7天联系客服。',
		BuyTxt:'商品购买成功后，会在七个工作日内到账，请确认前往我的兑 换记录查看，若存在问题，请务必联系客服，使用积分兑换成 功的商品不支持退换服务。',
		conversion:'兑换',
		conversiontxt:'注：同种商品一次仅能兑换一个',
		Orders:'下单',
		Tofillin:'前往填写',
		OrdersTip:'需填写收货地址才可下单。',
		Default:"默认",
		del:'删除',
		delTip:'确认清除该地址吗？',
		Confirmchange:'确认兑换',
		Forcomplete:'兑换完成',
		ViewOrder:'查看订单',
		topUpPhone:'请填写充值号码',
		confirmTip:'注：请认真核对后点击确认。',

	},
	tabBar: {
		home: '首页'
	},
	study: {
		course: '课程',
		question: '题库',
		video: '视频',
		accuracy: '正确率',
		accomplish: '已完成提数',
		sumaccomplish: '总提数',
		way: '道',
		gongge: '章节精炼',
		schedule: '做题进度',
		practice: '快速练习',
		challenge: '连对挑战',
		record: '最高纪录:',
		even: '连',
		mistakes: '错题本',
		achievement: '成就榜',
		collect: '收藏库',
		section: '章节精炼',
		practice: '章节刷题',
		rankinglist: '连对挑战排行榜',
		ErrorThis: '错题本',
		corect: '正确',
		Error: '错误',
		notDone: '未做',
		AllReset: '重做全套',
		anNewError: '重做错题',
		particulars: '详情',
		catalogue: '目录',
		haveBought: '立即查看课件、完成作业',
		purchase: '立即购买',
		frequency: '音频',
		courseware: '课件',
		Student:'学员评价',
		discussion:'问题讨论',
		languageClass: '语音课',
		SentenceClass: '句子课',
		review:'感谢您对本班课程的点评',
		ClassReview:'请为本班课程评分',
		courseReview:'请为本班课程进行点评，字数不超过200字。',
		Continue:'继续学习课程',
		Myquestion:'我要提问',
		questionNum:'请提交您的课程问题，字数不超过200字。',
		evaluation:'我要评价',
		applyInfo: `共计*节 · 已报名**人`,
		Mycomment:'我要评论',
		Mycommenttxt:'点击"我要评价"，对该班级课程进行点评。',
		Myquestiontxt:'如果你有课程问题，请在"我要提问"中发布。',
		Signupimmediately:'立即报名',
	},
	community: {
		postBar: '贴吧',
		article: '文章',
		updataTxt: '可上传图片和视频，图片上传不能超过9张，视频仅能上传一个不超过两分钟的视频。',
		upDataimg: '图片上传不能超过9张',
		placeholder: '请输入您要说的内容，字数请控制在300字以内。',
		comment: '评论',
		notComment:'目前还没有评论',
		thoughts:'留下你的感想吧',
		send:'发送',
	},
	user: {
		myservice:'博学服务',
		attention: '关注',
		bean: '粉丝',
		mutual: '相互关注',
		myCourses: '我的课程',
		myteacher: '我的老师',
		myinvitation: '我的帖子',
		myattention: '我的关注',
		mytranslate:'我要翻译',
		myaccount: '我的账号',
		mycertificate:'我的证书',
		wallet: '钱包',
		integral: '积分',
		myintegral: '我的积分',
		coupons: '优惠券',
		order: '订单',
		group: '拼团',
		exchange: '汇率',
		set: '设置',
		personalData: '个人资料',
		Settings: '账号设置',
		privacyset: '隐私设置',
		language: '应用语言',
		feedback: '帮助反馈',
		About: '关于我们',
		outLogin: '退出登录',
		headPortrait: '头像',
		nickname: '昵称',
		sex: '性别',
		birthday: '生日',
		city: '所在城市',
		simple: '简介',
		notfilled: '未填写',
		signature: '请输入个性签名',
		man: '男',
		girl: '女',
		confidentiality: '未知',
		simpleData: '请输入您的简介，字数请控制在10-300之内。',
		changepaw: '修改密码',
		BindingWx: '绑定微信',
		cancelchangewx: '取消微信绑定',
		notBound: '未绑定',
		manual: '操作手册',
		opinion: '意见反馈',
		issue: '常见问题',
		phone: '联系方式',
		myphone: '请留下您的联系方式',
		submit: '提交',
		company: '流利外语',
		AboutInfo: "流利外语APP，是用户可以在APP内选择外语课 程，进行免费观看，了解课程内容。用户还可以通过 报名课程，观看课程的视频，听音频，而且还可以背单词，背句子，以及下载课件，通过多种方式学习课 程。另外用户还可以参加优惠活动，还可以用积分来 抵扣学费，降低学习成本。除此之外，用户还可以在APP内发表帖子，与其他用户交流学习体验，提高学 习的参与感。总之，这是一款多功能的帮助用户学习 好外语的APP。",
		official: '官网',
		Tencent: '微信公众号',
		applet: '微信小程序',
		serve: '用户服务及隐私协议',
		close: '关闭',
		QRcode: '保存二维码至手机',
		hisPost: 'TA的贴子',
		hisachievement: 'TA的成就',
		followed: '已关注',
		balance: '余额(元)',
		All: '全部',
		income: '收入',
		expenditure: '支出',
		store: '积分商城',
		integralRule: '积分规则',
		gainintegral:'获得积分',
		integralDeduction: '积分抵扣',
		integralDetail: '积分明细',
		bottom: '已没有更多',
		translate: '我要翻译',
		status: '订单状态',
		orderdeaulf:'订单详情',
		ordernum: '订单编号',
		ordertime: '订单时间',
		exchangetitle: '汇率转换器',
		calculate: '计算',
		train: '培训专区',
		video: '视频专区',
		problemdetails:'问题详情',
		integraltxt:`
			1、每天视频学习累积10分钟，获得10积分，每天最高获得10积分，并且只能是在已购课程中学习才可以；
			2、每天听音频学习累积10分钟，获得10积分，每天最高获得10积分，并且只能是在已购课程中学习才可以；
			3、完成某一个节课中的背单词套题，可以获得10积分，一天最高只能获得10积分； 
			4、完成某一个节课中的背句子套题，可以获得10积分，一天最高只能获得10积分；
			5、发表帖子满50字，获得50积分，一天最高获得50积分； 
			6、发表帖子评论获得10积分，一天最高获得10积分； 
			7、每天签到获得10积分
		`,
		DeductionTxt:'积分可用来在购买课程时直接抵扣，1000积分可抵扣100元。单次购买最多抵扣100元。',
		NickNametxt:'请输入您的昵称',
		simpleTip:'请输入您的简介，字数请控制在10-300之内。',
		opinionTxt:'为了更好的解决您的问题，请告诉我们以下内容：\n1、您的姓名 \n2、问题描述',
		leavePhone:'请留下您的联系方式。',
	},
	commonality: {
		cancel: '取消',
		confirm: '确认',
		send: '发送',
		save: '保存',
		noData:"暂无数据",
		outInfo: '您修改的信息未保存，确定退出吗？',
		unused: '未使用',
		used: '已使用',
		Expired: '已过期',
		purchase: '购买课程',
		phone: '手机号',
		Coursestip: '还没有购买任何课程哦',
		apply: '去报名',
		trainTip: '暂时没有购买视频合辑哦',
		purchase: '去购买',
		applytip: '您还没报名课程哦',
		pay:'支付方式',
		paywx:'微信',
		integral: '积分',
		discounts:'优惠',
		netPay:'实付',
		submit:'提交',
		accomplish:'完成',
		payment:'选择支付方式',
		paymentzfb:'支付宝支付',
		paymentwx:"微信支付",
		payNum:'支付金额',
		payNow:'立即支付',
		loadComplete:'数据已全部加载完',
		textLoading:'加载中',
		service:'客服',
		aiservice:'ai客服',
		
	    searchEmply:'没有搜到相关课程，换一个关键字试试',
		videoEmply:'没有搜到相关视频合辑，换一个关键字试试',
		subSuccess:'提交成功',
		
		ShareTo:'分享至',
	},
	translate:{
		mytranslate:'我要翻译',
		artificial:'人工翻译',
		immediate:'即时翻译',
		explain:'说明',
		translateOrder:'翻译订单',
		translatehistory:'翻译历史',
		choose:'日常快译',
		chooseTip:'在此输入要翻译的文字、词汇或句子',
		languageChoice:'语言选择',
		paysucceed:'支付成功',
		translateTip:'翻译内容已提交成功，请耐心等待老师翻译。',
		staytranslate:'待翻译内容',
		myappointment:'我的预约',
		ljappointment:'立即预约',
		selectlanguage:'选择翻译语言',
		phoneVal:'请输入您的联系方式',
		nameVal:'请输入您的名字',
	    selectType:'选择翻译类型',
		selectTime:'选择预约翻译时间',
		next:'下一步',
		appointmentsuccss:'预约成功',
		 order:'订单',
		 appointmenttxt:'您的人工翻译已预约成功',
		 appointmenttxt1:'请耐心等待老师确认并联系。',
		 appointmentConcent:'预约内容',
		 translartelanguage:'翻译语言',
		 hsName:'客户姓名',
		 translateType:'翻译类型',
		 translateTime:'预约翻译时间',
		 selectlanguage:'请选择语言',
		 selectlanguagetxt:'请输入您需要选择的语言',
	},
	login:{
		login:'登录',
		phoneTip:'请输入手机号',
		PwsTip:'请输入密码',
		codeTip:'请输入验证码',
		Pwsforget:'忘记密码',
		ElseLogin:'其他登录方式',
		wxLOgin:'微信登录',
		yzLogin:'验证码登录',
		zhlogin:'账号登录',
		rexy:'注册即代表您同意',
		privacy:'服务协议与隐私政策',
		getCode:'获取验证码',
		resend:'重新发送',
		Sent:"已发送",
		SetPwsTip:'请输入6-20位字符密码',
		aNew:'请再次输入密码',
		setaNew:'两次输入的密码不一致',
		code:'选择区号',
		areacodeTip:'请输入您需要搜索的国家或区号',
	    blankCode:'没有搜索结果',
		originalPwd:'请输入原密码',
	}
}
