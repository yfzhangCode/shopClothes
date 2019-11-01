<template>
  <div class="goods-detail">
    <!-- 详情导航 -->
    <top-nav></top-nav>
    <!-- 详情页swiper -->
    <div class="swiper">
      <swiper-detail :TopImges="topImg"></swiper-detail>
    </div>
    <!-- 详情基本信息 -->
    <div class="baseinfo">
      <goods-base-info :goodsInfo="goodBaseInfo" :shopInfo="shopInfo"></goods-base-info>
    </div>
    <!-- 店铺详情 -->
    <div class="shop-info">
      <shop-info :shopInfo="shopInfo"></shop-info>
    </div>
    <!-- 商品详细信息 -->
    <div>
      <goods-detail-info :goodsDetailInfo="detailInfo"></goods-detail-info>
    </div>
    <!-- 商品参数信息 -->
    <div>
      <goods-params-info :paramsInfo="goodsParmInfo.info" :pramsRule="goodsParmInfo.rule"></goods-params-info>
    </div>
    <!-- 用户评价 -->
    <user-rate :userRateInfo="userRate"></user-rate>
    <!-- 热门推荐 -->
    <detail-recommend :detailRecodData="detailRecodData"></detail-recommend>
  </div>
</template>
<script>
import TopNav from './childrenComs/Topnav'
import SwiperDetail from './childrenComs/DetailSwiper'
import GoodsBaseInfo from './childrenComs/GoodsBaseInfo'
import ShopInfo from './childrenComs/ShopInfo'
import GoodsDetailInfo from './childrenComs/GoodsDetailInfo'
import GoodsParamsInfo from './childrenComs/GoodsParamsInfo'
import UserRate from './childrenComs/UserRate'
import DetailRecommend from './childrenComs/DetailRecommend'

import { Detail, DetailRecommendR, GoodBaseInfo, Shop } from 'http/detail'
export default {
  name: 'GoodsDetail',
  data() {
    return {
      goodid: '',
      topImg: [],
      goodBaseInfo: {},
      shopInfo: {},
      goodsBtDlInfo: {},
      detailInfo: {},
      goodsParmInfo: {
        rule: {},
        info: {}
      },
      userRate: {},
      detailRecodData: []
    }
  },
  created() {
    this.goodid = this.$route.params.iid
  },
  mounted () {
    // 获取详情页数据
    this.getDetailData(this.goodid)
    this.getdetailRecommend()
  },
  components: {
    TopNav,
    SwiperDetail,
    GoodsBaseInfo,
    ShopInfo,
    GoodsDetailInfo,
    GoodsParamsInfo,
    UserRate,
    DetailRecommend
  },
  methods: {
    /**
     * 请求网络获取数据
     * 
     */
    getDetailData (id) {
      Detail(id).then((res) => {
        console.log(res);
        const data = res.result
        // 获取详情页面的swiper
        this.topImg = data.itemInfo.topImages
        // 商品基本信息详情
        this.goodBaseInfo = new GoodBaseInfo(data.itemInfo, data.columns, data.shopInfo)
        // 店铺基本信息
        this.shopInfo = new Shop(data.shopInfo)
        // 商品底部详细信息
        this.detailInfo = data.detailInfo
        // 商品的参数信息
        this.goodsParmInfo.info = data.itemParams.info
        this.goodsParmInfo.rule = data.itemParams.rule
        // 用户评价信息
        this.userRate = data.rate
      }).catch((err) => {
        console.log(err)
      })
    },
    getdetailRecommend() {
      DetailRecommendR().then((res) => {
        console.log(res);
        // 获取详情页面推荐数据
        this.detailRecodData = res.data.list
      }).catch((err) => {
        console.log("详情页面获取推荐数据失败：" + err)
      })
    }
  }
}
</script>
<style scoped>
.goods-detail {
  padding-bottom: 60px;
}
</style>