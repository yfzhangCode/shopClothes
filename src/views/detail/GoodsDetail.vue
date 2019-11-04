<template>
  <div class="goods-detail">
    <!-- 详情导航 -->
    <top-nav class="detail-nav"></top-nav>
    <b-scroll class="content"
      ref="scrollDetail"
      :probeType="3"
      @scrollOn="ScrollContent"
      >
      <!-- 详情页swiper -->
      <swiper-detail :TopImges="topImg"></swiper-detail>
      <!-- 详情基本信息 -->
      <goods-base-info :goodsInfo="goodBaseInfo" :shopInfo="shopInfo"></goods-base-info>
      <!-- 店铺详情 -->
      <shop-info :shopInfo="shopInfo"></shop-info>
      <!-- 商品详细信息 -->
      <goods-detail-info :goodsDetailInfo="detailInfo" @ImgesLoad="ImgesLoad"></goods-detail-info>
      <!-- 商品参数信息 -->
      <goods-params-info :paramsInfo="goodsParmInfo.info" :pramsRule="goodsParmInfo.rule"></goods-params-info>
      <!-- 用户评价 -->
      <user-rate :userRateInfo="userRate"></user-rate>
      <!-- 热门推荐 -->
      <detail-recommend :detailRecodData="detailRecodData"></detail-recommend>
    </b-scroll>

    <!-- backTop -->
    <back-top v-show="idShowabacktop" @click.native="BackTop"></back-top>
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
import BackTop from 'component/common/backTop/BackTop'

import BScroll from 'component/common/betterScroll/BetterScroll'

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
      detailRecodData: [],
      idShowabacktop: false
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
    DetailRecommend,
    BScroll,
    BackTop
  },
  methods: {
    /**
     * 请求网络获取数据
     * 
     */
    getDetailData (id) {
      Detail(id).then((res) => {
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
        // 获取详情页面推荐数据
        this.detailRecodData = res.data.list
      }).catch((err) => {
        console.log("详情页面获取推荐数据失败：" + err)
      })
    },

    /**
     * 业务处理方法
     * 
     */
    ScrollContent (e) {
      this.idShowabacktop = -e.y > 500
    },
    BackTop () {
      this.$refs.scrollDetail.scrollTo(0, 0)
    },
    // 图片加载完毕 刷新当前可滚动区域
    ImgesLoad () {
      this.$refs.scrollDetail.refresh()
    }
  }
}
</script>
<style lang="scss" scoped>
.goods-detail {
  padding-bottom: 60px;
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
  .detail-nav {
    background: #fff;
    position: relative;
    z-index: 10;
  }
  .content {
    width: 100%;
    height: calc(100% - 44px);
  }
}
</style>