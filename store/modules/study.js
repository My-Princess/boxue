const state = {
	// 音频初始化选中颜色
	activeColor: 54, 
	// 获取当前音频数据
	activeAudios:{},
		// 是否是音频 或 句子
	courseType:0,
	//  选中音频第几个
	now:0,
	// 课程详情
	CourseDetails:{},
	// 章节精炼题目
	topicData:[],
	// 答题id
	answerId:'',
	// 班级id
	answerCalssID:'',
	// 答案index
	answerIndex:'',
	
	// 收藏id
	collectid:'',
	// 收藏班级id
	collectClassId:'',
	// 收藏Index
	collectIndex:'',
	// 收藏数据
	collectData:[],
	
	
	
}
const mutations = {
	// 修改选中音频颜色
	changeColor(state,payColor) {
		console.log(payColor)
		state.activeColor = payColor
	},
	// 获取当前音频数据
	changeAudios(state,AudiosData) {
		console.log(AudiosData)
		state.activeAudios = AudiosData
	},
	// 
	getcourseType(state,Id){
		console.log(Id)
		state.courseType = Id - 1
	},
	// 选中音频第几个
	getNow(state,id){
		console.log(id)
		state.now = id
	},
	// 课程详情
	getCourseDetails(state,data){
		console.log(data)
		state.CourseDetails = data
	},
	// 章节精炼题目
	changeTopic(state,data){
		state.topicData = data
	},
	// 答题Id
	changeAnswerId(state,id){
		state.answerId = id
	},
	// 班级id
	changeClassId(state,index){
		state.answerCalssID = index
	},
	// 答案index
	changeanswerIndex(state,index){
		console.log('进来',index)
		state.answerIndex = index
	},
	// 收藏id
	getcollectid(state,id){
		console.log('你大爷',id)
		state.collectid = id
	},
	// 收藏班级ID
	getCollectClassId(state,classId){
		state.collectClassId = classId
	},
	// 收藏INdex
	getcollectIndex(state,Index){
		state.collectIndex = Index
	},
	// 收藏数据
	getcollectData(state,Data){
		state.collectData = Data
	},
	
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