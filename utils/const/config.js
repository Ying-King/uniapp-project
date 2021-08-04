/******************************************恐龙园接口 *********************************** */
// 获取数据成功 code 
export const KLY_CODE_OK = '00';
export const KLYCARD_CODE_OK = '0';

// 支付方式
export const PAYMENT_METHOD = '微信';
export const PAYMENT_METHOD_TICKET = '002'; // 门票 代表微信

/****************************************** CMS *********************************** */

// 获取成功code
export const CMS_CODE_OK = '0';

// cms 登录失败
export const CMS_NOLOGIN_CODE = '10007'
export const CMS_APPID = 'CMS2021BLq04z6sW16'; //正式 CMS2020NXE12rIGN03, 测试 CMS2020iPM08gWfc24\

export const SWIPER_CATID = 3; // 首页轮播
export const JD_SWIPER_CATID = 5; // 酒店轮播
export const GG_CATID = 2; // 园区公告
export const YJ_CATID = 4; // 游记攻略
export const JD_CATID = 32; // 景点
export const ZG_CATID = 8; // 展馆
export const TIPS_CATID = 43; // 门票须知
export const SHOP_CATID = 44; // 商城
export const SHOP_SWIPER_CATID = 45; // 商城轮播
export const PUBLISH_CATID = 47; // 是否上传游记


/****************************************** 支付系统固定参数 *********************************** */

export const CHANNEL_MERID = 'XS20210610';
export const APPID = 6;
export const CHANNEL_ID = 'wx4224a1adecee7571';
export const AID = 9;
export const GOODS_DESC = '新市古镇';
export const COMMODITY_NAME = '新市古镇';
export const SIGN_TYPE = 'AES';
export const TRADE_TYPE = 'JSAPI';
export const FROM = '新市古镇';
export const AES_KEY = 'rO16FS9PfSRV1LvI';
export const AES_IV = 'HvfTmYVTeXuiyxlw';
export const ATTACH = '小程序';

// 门票回调
export const CALLBACK_URL_TICKET = 'https://cms.xsgz.horsevision.cn/frontend/pay-callback/xsgz-ticket';

// 退款
export const PAY_USERID = '2020_kly';
export const REFUND_TYPE = 'moon';

/****************************************** 其他  *********************************** */

export const ERROR_CODE = '100700' // 登录失败code
export const SUCCESS_CODE = '0' // 成功code

/***********************************************商城*********************************************** */

export const SHOP_APPID = 'SHOP20214LM05sa617'; //正式 SHOP20214LM05sa617
export const COUPON_FROM = '1';
