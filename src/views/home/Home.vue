<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-tabar class="nav-tabar">
      <div class="title" slot="center">
        <span>购物街</span>
      </div>
    </nav-tabar>
    <!-- 轮播图 -->
    <home-swiper :banner="banners"></home-swiper>
    <!-- 热门标签 -->
    <home-recommend :fetureView="recommend"></home-recommend>
    <!-- 推荐分类 -->
    <hot-recommend></hot-recommend>
    <!-- tab切换 -->
    <tab-control :tabList="tablist" @itemClick="itemClick" class="tab-contr"></tab-control>
    <!-- 商品数据 -->
    <Goods :goods="showGoods"/>
    <!--  -->
  </div>
</template>
<script>

import NavTabar from 'component/common/navtabar/Navtabar'
import HomeSwiper from './childrenCons/Homeswiper'
import HomeRecommend from './childrenCons/HomeRecommend'
import HotRecommend from './childrenCons/HotRecommend'
import TabControl from 'component/content/tabControl/TabControl'
import Goods from 'component/content/goods/Goods'

import { getData, homeData } from '../../http/home.js'
import { ERR_OK } from '../../utils/const'
export default {
  name: 'Home',
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
      }
    }
  },
  components: {
    NavTabar,
    HomeSwiper,
    HomeRecommend,
    HotRecommend,
    TabControl,
    Goods
  },
  created () {
    // 获取首页数据
    this.getMultadata()

    // 获取首页商品数据
    this.getHomeGoodsData('pop')
    this.getHomeGoodsData('new')
    this.getHomeGoodsData('sell')
  },
  methods: {
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
    // 获取首页商品数据
    getHomeGoodsData(type) {
      const page = this.goods[type].page + 1;
      homeData(type, page).then((res) => {
        console.log(res)
        if (res.returnCode === ERR_OK) {
          this.goods[type].list.push(...res.data.list)
          // page + 1
          this.goods[type].page + 1
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // tab 切换数据
    itemClick (val) {
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
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  }
}
</script>
<style lang='scss' scoped>
#home {
  // height: 100vh;
  padding-top: 44px;
  padding-bottom: 59px;
}
.nav-tabar {
  background-color: $theme_color;
  color: #fff;
  font-size: 20px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 5;
}

.tab-contr {
  position: sticky;
  top: 44px;
}
</style>