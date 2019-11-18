<template>
  <div class="goods-detail">
    <!-- 详情导航 -->
    <top-nav class="detail-nav" @navClick="tabClick" ref="navTab"></top-nav>
    <b-scroll class="content"
      ref="scrollBox"
      :probeType="3"
      @scrollOn="ScrollContent"
      >
      <!-- 详情页swiper -->
      <swiper-detail :TopImges="topImg"></swiper-detail>
      <!-- 详情基本信息 -->
      <goods-base-info
        :goodsInfo="goodBaseInfo"
        :shopInfo="shopInfo"
      ></goods-base-info>
      <!-- 店铺详情 -->
      <shop-info
        :shopInfo="shopInfo"
      ></shop-info>
      <!-- 商品详细信息 -->
      <goods-detail-info
        :goodsDetailInfo="detailInfo"
        @ImgesLoad="ImgesLoad"
        ></goods-detail-info>
      <!-- 商品参数信息 -->
      <goods-params-info
        :paramsInfo="goodsParmInfo.info"
        :pramsRule="goodsParmInfo.rule"
        ref="goodsParamInfo"
      ></goods-params-info>
      <!-- 用户评价 -->
      <user-rate
        :userRateInfo="userRate"
        ref="userInfo"
      ></user-rate>
      <!-- 热门推荐 -->
      <detail-recommend
        :detailRecodData="detailRecodData"
        ref="DetailReconmmend"
      ></detail-recommend>
    </b-scroll>
    <!-- 底部工具栏 -->
    <detail-bottom-bar @addCart="addToCart" @buy="buy"></detail-bottom-bar>
    <!-- backTop -->
    <back-top @click.native="backTop" v-show="isShowBackTop" ></back-top>
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
import DetailBottomBar from './childrenComs/DetailBottombar'

import BScroll from 'component/common/betterScroll/BetterScroll'

import { Detail, DetailRecommendR, GoodBaseInfo, Shop } from 'http/detail'
import { debounce } from 'utils/common'
import { backTopMixin } from 'utils/mixins'
export default {
  name: 'GoodsDetail',
  mixins: [backTopMixin],
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
      scrollToDis: [], // 滚动的距离
      getScrollInfoYs: null,
      currentTabIndex: 0
    }
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
    DetailBottomBar
  },
  created () {
    this.goodid = this.$route.params.iid
  },
  mounted () {
    // 获取详情页数据
    this.getDetailData(this.goodid)
    this.getdetailRecommend()
    this.getScrollInfoYs = debounce(() => {
      // 获取每块的距离顶部的距离
      this.scrollToDis.push(0)
      this.scrollToDis.push(this.$refs.goodsParamInfo.$el.offsetTop);
      this.scrollToDis.push(this.$refs.userInfo.$el.offsetTop);
      this.scrollToDis.push(this.$refs.DetailReconmmend.$el.offsetTop);
      this.scrollToDis.push(Number.MAX_VALUE);
    }, 100)
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
      this.isShowBackTop = -e.y > 500
      // 滚动与tab的联动
      const position = -e.y;
      for (let i = 0; i < this.scrollToDis.length -1; i++) {
        if (this.currentTabIndex !== i &&
          (position >= this.scrollToDis[i] && position < this.scrollToDis[i + 1])) {
          this.currentTabIndex = i
          this.$refs.navTab.currentIndex = i
        }
      }
    },
    // 图片加载完毕 刷新当前可滚动区域
    ImgesLoad () {
      this.$refs.scrollBox.refresh()
      // 防抖函数的获取激励顶部的高度
      this.getScrollInfoYs()
    },
    // 顶部tab栏切换
    tabClick (index) {
      this.$refs.scrollBox.scrollTo(0, -this.scrollToDis[index], 500)
    },
    /**
     * 底部工具栏
     * 
     */
    addToCart () {
      console.log('llll')
    },
    buy () {
      console.log('buy')
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