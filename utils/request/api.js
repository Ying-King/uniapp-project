import {
  apiShopDomain,
  apiFoodDomain,
  apiCMSDomain,
  apiPayDomain,
  apiCMSLoginDomain
} from "../const/domain.js";

//授权登录
export const openIdPath = `${apiCMSLoginDomain}/member/login/login-by-wechat`;

// 添加用户信息
export const updateMemberPath = `${apiCMSLoginDomain}/member/wechat-app/save-userinfo`;

/************************************************ CMS ************************************* */

// 获取列表
export const getListCMSPath = `${apiCMSDomain}/content/content-list`;

// 获取列表详情
export const getListDetailPath = `${apiCMSDomain}/content/details`;

// 上传动态数据图片
export const addDynamicImgPath = `${apiCMSDomain}/dynamic/upload-pic`;

// 添加动态数据
export const addDynamicPath = `${apiCMSDomain}/dynamic/add`;

// 获取动态数据列表
export const dynamicDataPath = `${apiCMSDomain}/dynamic/dynamic-data-info-list`;

// 获取 导航列表
export const getNavPath = `${apiCMSDomain}/nav/nav`;

// 删除动态数据
export const delDynamicPath = `${apiCMSDomain}/dynamic/delete-dynamic-data`;

// 我的收藏列表
export const starListPath = `${apiCMSDomain}/member/star-list`;

// 游记收藏
export const collectNotePath = `${apiCMSDomain}/member/set-star`;

// 新增浏览量
export const updateCountPath = `${apiCMSDomain}/frontend/content/update-preview-count`;

/************************************************门票************************************* */
// 门票分类
export const ticketCategoryPath = `${apiCMSDomain}/frontend/ticket/category`;

// 门票列表
export const ticketListPath = `${apiCMSDomain}/frontend/ticket/list`; 

// 门票详情
export const ticketDetailPath = `${apiCMSDomain}/frontend/ticket/detail`; 

// 订单生成
export const ticketAddOrderPath = `${apiFoodDomain}/gz_ticket_inter/inteface/routine/addOrders.json`;

// 提交订单支付状态
export const ticketPayOrderPath = `${apiFoodDomain}/gz_ticket_inter/inteface/routine/payOrders.json`; 

// 订单查询详情 openId
export const ticketOrdersPath = `${apiFoodDomain}/gz_ticket_inter/inteface/routine/searchOrderMain.json`; 

// 订单查询详情 orderId
export const ticketOrderDetailPath = `${apiFoodDomain}/gz_ticket_inter/inteface/routine/searchOrderChild.json`;

// 支付 -- 支付系统
export const payPath = `${apiPayDomain}/frontend/wx-pay/pre-create-order`;

/************************************************ 智能客服 ************************************* */
// 获取页面数据
export const allQuestionPath = `${apiCMSDomain}/frontend/question/get-question-setting`; 

// 根据题目获取答案
export const getAnswerPath = `${apiCMSDomain}/frontend/question/get-answer-by-question`; 

// 根据关键词获取答案
export const getAnswerByKeyPath = `${apiCMSDomain}/frontend/question/get-question-by-keyword`; 


/*******************************************************商城***************************************************/

//获取轮播图
export const bannerShopPath = `${apiShopDomain}/api/platform/get-banner`

// 商城为你优选列表数据
export const goodsListPath = `${apiShopDomain}/api/platform/get-goods`

//商城详情
export const goodsDetailPath = `${apiShopDomain}/api/goods/goods-detail`

//添加购物车
export const addCartPath = `${apiShopDomain}/api/cart/add-cart`

//购物车列表
export const cartListPath = `${apiShopDomain}/api/cart/cart-list`

//获取购物车数量
export const cartNumPath = `${apiShopDomain}/api/cart/cart-num`


//修改购物车中商品数量
export const addNumPath = `${apiShopDomain}/api/cart/edit-cart`

//删除购物车商品
export const delGoodPath = `${apiShopDomain}/api/cart/delete-cart`

//选择的购物车产品
export const confirmOrderPath = `${apiShopDomain}/api/cart/select-cart`

//提交订单
export const submitOrderPath = `${apiShopDomain}/api/buy/create-order`

//订单详情
export const OrderDetailPath = `${apiShopDomain}/api/payment/get-pay-order-info`

//获取优惠券
// export const couponPath = `${apiFormalDomain}/ClubMemberSystem/inteface/coupon/getCouponinfoById.json`

//获取精选视频 优质音频
export const videoGoodsPath = `${apiShopDomain}/api/video-goods/get-video-goods`

//音视频详情
export const videoDetailPath = `${apiShopDomain}/api/video-goods/get-video-goods-detail`

//视听商品播放记录
export const addGoodsLogPath = `${apiShopDomain}/api/video-goods/add-view-video-goods-log`

//支付
export const shopPayPath = `${apiShopDomain}/api/payment/pay`

//确认收货
export const orderReceivePath = `${apiShopDomain}/api/order/order-receive`

//结算判段购物车库存
export const checkStoragePath = `${apiShopDomain}/api/cart/check-cart-storage`

// 获取商品订单列表
export const shopOrdersPath = `${apiShopDomain}/api/order/order-list`; 

/******************************************收货地址*********************************** */
//收货地址列表
export const addressListPath = `${apiShopDomain}/api/address/get-address`

//添加收货地址
export const addressAddPath = `${apiShopDomain}/api/address/add`

//删除地址
export const addressDelPath = `${apiShopDomain}/api/address/del`

//地址修改
export const addressEditPath = `${apiShopDomain}/api/address/edit`

// 根据地址id获取地址
export const addressInfoPath = `${apiShopDomain}/api/address/get-address-by-id`


/************************************************ 游园预约 ************************************* */
// 提交预约
export const addReservationPath = `${apiCMSDomain}/frontend/park-reservation/add-park-reservation`; 

// 我的预约
export const getReservationPath = `${apiCMSDomain}/frontend/park-reservation/get-my-park-reservation`; 

/************************************************ 意见反馈 ************************************* */
// 提交意见
export const addSuggestionPath = `${apiCMSDomain}/frontend/opinion/add-opinion`; 

// 我的意见
export const getSuggestionPath = `${apiCMSDomain}/frontend/opinion/get-my-opinion`; 

// 上传图片
export const uploadPicPath = `${apiCMSDomain}/frontend/common/upload-file`; 

/************************************************ 限时活动 ************************************* */
// 活动列表
export const activityListPath = `${apiCMSDomain}/frontend/activity/get-activity`; 

// 活动详情
export const activityDetailPath = `${apiCMSDomain}/frontend/activity/get-activity-detail`; 

// 活动支付
export const activityPayPath = `${apiCMSDomain}/frontend/activity/place-order`; 

/************************************************ 酒店 ************************************* */
// 酒店列表
export const hotelListPath = `${apiCMSDomain}/frontend/hotel/get-hotel-list`; 

// 酒店详情
export const hotelDetailPath = `${apiCMSDomain}/frontend/hotel/get-hotel-detail`; 

/************************************************ 其他 ************************************* */
// 我的足迹
export const getVisitLogPath = `${apiCMSDomain}/frontend/content/get-my-visit-log`;

// 记录浏览记录
export const addVisitLogPath = `${apiCMSDomain}/frontend/content/add-visit-log`;

/************************************************ 游记 ************************************* */
// 发布游记
export const addNotesPath = `${apiCMSDomain}/frontend/opinion/add-yj`; 

// 我的游记
export const userNotesPath = `${apiCMSDomain}/frontend/opinion/get-my-yj`; 

// 删除游记
export const deleteNotesPath = `${apiCMSDomain}/frontend/opinion/del-my-yj`; 
