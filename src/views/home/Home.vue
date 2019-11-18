<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-tabar class="nav-tabar">
      <div class="title" slot="center">
        <span>购物街</span>
      </div>
    </nav-tabar>
    <tab-control
      :tabList="tablist"
      @itemClick="itemClick"
      ref="tabControlTop"
      class="tab-control-fixed"
      v-show="isFixed"
    ></tab-control>
    <scroll class="content"
      ref="scrollBox"
      @scrollOn="scrollContent"
      :probeType="3"
      :pull-up-load="true"
      @LoadMore="UpLoadMore"
      >
      <!-- 轮播图 -->
      <home-swiper :banner="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <!-- 热门标签 -->
      <home-recommend :fetureView="recommend"></home-recommend>
      <!-- 推荐分类 -->
      <hot-recommend></hot-recommend>
      <!-- tab切换 -->
      <tab-control
        :tabList="tablist"
        @itemClick="itemClick"
        ref="tabControl"
        class="tab-contr"
        v-show="!isFixed"
        ></tab-control>
      <!-- 商品数据 -->
      <Goods :goods="showGoods"/>
    </scroll>
    <!-- 返回顶部的导航 -->
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>

import NavTabar from 'component/common/navtabar/Navtabar'
import HomeSwiper from './childrenCons/Homeswiper'
import HomeRecommend from './childrenCons/HomeRecommend'
import HotRecommend from './childrenCons/HotRecommend'
import TabControl from 'component/content/tabControl/TabControl'
import Goods from 'component/content/goods/Goods'
import Scroll from 'component/common/betterScroll/BetterScroll'

import { getData, homeData } from '../../http/home.js'
import { ERR_OK } from 'utils/const'
import { debounce } from 'utils/common'
import { backTopMixin } from 'utils/mixins'
export default {
  name: 'Home',
  mixins: [backTopMixin],
  data() {
    return {
      banners: [], // 轮播图数据
      recommend: [], // 推荐数据
      tablist: ['流行','新款', '精选'], // 首页 tab 切换表头
      currentType: 'pop',
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      swiperImgisLoad: true, // 调用一次函数
      isTabControlOffsetHeight: 0, // 获取tabControl的距离顶部距离
      isFixed: false // 控制tabControl的展示
    }
  },
  components: {
    NavTabar,
    HomeSwiper,
    HomeRecommend,
    HotRecommend,
    TabControl,
    Goods,
    Scroll
  },
  created () {
    // 获取首页数据
    this.getMultadata()
    // 获取首页商品数据
    this.getHomeGoodsData('pop')
    this.getHomeGoodsData('new')
    this.getHomeGoodsData('sell')

  },
  mounted () {
    // 图片加载完成重新计算可滚动区域高度
    const refresh = debounce(this.$refs.scrollBox.refresh, 200) // 防抖函数
    this.$Bus.$on('imgLoad', () => {
      // this.$refs.scrollBox.refresh()
      refresh()
    })

  },
  // 当前活跃
  activated() {
    this.$refs.scrollBox.scrollTo(0, this.saveY, 0)
    // 重新计算滚动高度
    this.$refs.scrollBox.refresh()
  },
  // 离开时
  deactivated() {
    this.saveY = this.$refs.scrollBox.getScrollY()
  },
  methods: {
    /**
     * 网络请求事件
     */
    // 获取多个数据
    getMultadata() {
      getData().then((res) =>{
        //轮播图数据
        this.banners = res.data.banner.list
        // 推荐数据
        this.recommend = res.data.recommend.list
      }).catch((err) => {
        console.log(err)
      })
    },
    /**
     * 业务逻辑事件
     */
    // 获取首页商品数据
    getHomeGoodsData(type) {
      const page = this.goods[type].page + 1;
      homeData(type, page).then((res) => {
        // console.log(res)
        if (res.returnCode === ERR_OK) {
          this.goods[type].list.push(...res.data.list)
          // page + 1
          this.goods[type].page++
        }
        // 完成上拉加载更多
        this.$refs.scrollBox.finishPullUp()
      }).catch((err) => {
        console.log(err)
      })
    },
    // 获取 tabControl 的距离顶部的距离
    swiperImgLoad() {
      console.log('轮播图片加载完成')
      // 获取tab-control 的offsetTop
      console.log(this.$refs.tabControl.$el.offsetTop);
      this.isTabControlOffsetHeight = this.$refs.tabControl.$el.offsetTop
    },
    // tab 切换数据
    itemClick(val) {
      console.log(val)
      switch (val) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
        default:
          break;
      }

      // 统一 tabControl 的当前选中项
      this.$refs.tabControlTop.currentIndex = val
      this.$refs.tabControl.currentIndex = val
    },
    // 返回顶部按钮的显示或隐藏
    scrollContent(e) {
      // 监听返回顶部内容的滚动
      this.isShowBackTop = -e.y > 1000
      // 监听 tabControl 的滚动
      this.isFixed = -e.y > this.isTabControlOffsetHeight
    },
    // 上拉加载更多
    UpLoadMore() {
      this.getHomeGoodsData(this.currentType)
    },
    // 获取详情页面数据
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  }
}
</script>
<style lang='scss' scoped>
#home {
  height: 100vh;
  position: relative;
  box-sizing: border-box;
}
.nav-tabar {
  background-color: $theme_color;
  color: #fff;
  width: 100%;
  // position: fixed;
  // top: 0;
  // z-index: 5;
}
.tab-control-fixed {
  position: relative;
  z-index: 2;
}
.content {
  width: 100%;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  overflow: hidden;
}
</style>