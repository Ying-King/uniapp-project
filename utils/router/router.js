import MinRouter from './MinRouter'
// 配置路由
const router = new MinRouter({
	routes: [
		// type必须是以下的值['navigateTo', 'switchTab', 'reLaunch', 'redirectTo']
		// 跳转方式(默认跳转方式)
		// 首页
		{
			path: 'pages/index/index',
			type: 'switchTab',
			name: 'index'
		},
		// 导览
		{
			path: 'pages/guide/guide',
			type: 'switchTab',
			name: 'guide'
		},
		// 发布游记
		{
			path: 'pages/publishNotes/publishNotes',
			type: 'navigateTo',
			name: 'publishNotes'
		},
		// 我的游记
		{
			path: 'pages/userNotes/userNotes',
			type: 'navigateTo',
			name: 'userNotes'
		},
		// 授权
		{
			path: 'pages/authorization/authorization',
			type: 'navigateTo',
			name: 'authorization'
		},
		// 游园预约
		{
			path: 'pages/parkAppointment/parkAppointment',
			type: 'navigateTo',
			name: 'parkAppointment'
		},
		// 我的预约
		{
			path: 'pages/userAppointment/userAppointment',
			type: 'navigateTo',
			name: 'userAppointment'
		},
		// 项目介绍
		{
			path: 'pages/introductionList/introductionList',
			type: 'navigateTo',
			name: 'introductionList'
		},
		// 项目介绍详情
		{
			path: 'pages/introduction/introduction',
			type: 'navigateTo',
			name: 'introduction'
		},
		// 我的收藏
		{
			path: 'pages/userCollection/userCollection',
			type: 'navigateTo',
			name: 'userCollection'
		},
		// 我的足迹
		{
			path: 'pages/userFootprint/userFootprint',
			type: 'navigateTo',
			name: 'userFootprint'
		},
		// 我的意见
		{
			path: 'pages/userSuggestion/userSuggestion',
			type: 'navigateTo',
			name: 'userSuggestion'
		},
		// 公告
		{
			path: 'pages/newsList/newsList',
			type: 'navigateTo',
			name: 'newsList'
		},
		// 公告详情
		{
			path: 'pages/newsDetail/newsDetail',
			type: 'navigateTo',
			name: 'newsDetail'
		},
		// 门票列表
		{
			path: 'pages/ticketList/ticketList',
			type: 'navigateTo',
			name: 'ticketList'
		},
		// 门票详情
		{
			path: 'pages/ticketDetail/ticketDetail',
			type: 'navigateTo',
			name: 'ticketDetail'
		},
		// 门票订单
		{
			path: 'pages/ticketOrder/ticketOrder',
			type: 'navigateTo',
			name: 'ticketOrder'
		},
		// 门票订单详情
		{
			path: 'pages/ticketOrderDetail/ticketOrderDetail',
			type: 'navigateTo',
			name: 'ticketOrderDetail'
		},
		// 门票订单详情
		{
			path: 'pages/ticketOrderDetail/ticketOrderDetail',
			type: 'redirectTo',
			name: 'ticketOrderDetailN'
		},
		// 限时活动列表
		{
			path: 'pages/activityList/activityList',
			type: 'navigateTo',
			name: 'activityList'
		},
		// 活动详情
		{
			path: 'pages/activity/activity',
			type: 'navigateTo',
			name: 'activity'
		},
		// 限时活动--报名
		{
			path: 'pages/activityApply/activityApply',
			type: 'redirectTo',
			name: 'activityApply'
		},
		// 我的活动
		{
			path: 'pages/userActivity/userActivity',
			type: 'navigateTo',
			name: 'userActivity'
		},
		// 游玩攻略
		{
			path: 'pages/notes/notes',
			type: 'navigateTo',
			name: 'notes'
		},
		// 酒店列表
		{
			path: 'pages/hotelList/hotelList',
			type: 'navigateTo',
			name: 'hotelList'
		},
		// 酒店
		{
			path: 'pages/hotel/hotel',
			type: 'navigateTo',
			name: 'hotel'
		},
		//商城
		{
			path: 'pages/shop/index',
			type: 'navigateTo',
			name: 'shop'
		},
		// 商城详情
		{
			path: 'pages/shopDetail/index',
			type: 'navigateTo',
			name: 'shopDetail'
		},
		//购物车
		{
			path: 'pages/shopCar/index',
			type: 'navigateTo',
			name: 'shopCar'
		},
		//商城提交订单
		{
			path: 'pages/shopOrder/index',
			type: 'navigateTo',
			name: 'shopOrder'
		},
		//商城-订单详情
		{
			path: 'pages/shopOrderDetail/index',
			type: 'redirectTo',
			name: 'shopOrderDetail'
		},
		//商城-支付结果
		{
			path: 'pages/shopOrderResult/index',
			type: 'redirectTo',
			name: 'shopOrderResult'
		},
		//登录
		{
			path: 'pages/login/index',
			type: 'navigateTo',
			name: 'login'
		},
		//收货地址
		{
			path: 'pages/address/index',
			type: 'navigateTo',
			name: 'address'
		},
		//新增收获地址
		{
			path: 'pages/addressAdd/index',
			type: 'navigateTo',
			name: 'addressAdd'
		},
		//编辑收货地址
		{
			path: 'pages/addressEdit/index',
			type: 'navigateTo',
			name: 'addressEdit'
		},
		// 我的订单
		{
			path: 'pages/userOrder/userOrder',
			type: 'navigateTo',
			name: 'userOrder'
		},
		// 新商城---店铺列表
		{
			path: 'pages/shopList/shopList',
			type: 'navigateTo',
			name: 'shopList'
		},
		// 新商城---店铺详情
		{
			path: 'pages/shopInfo/shopInfo',
			type: 'navigateTo',
			name: 'shopInfo'
		},
	]
})
export default router
