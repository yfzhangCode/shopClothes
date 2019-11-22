<template>
  <div class="category-page">
    <!-- 左侧以及菜单 -->
    <scroll class="one-menu">
      <cat-one-menu :muenList="oneMenuData" @menuItemClick="menuItemClick"></cat-one-menu>
    </scroll>
    <!-- 内容菜单 -->
    <div class="right">
      <tab-control
        :tabList="tablist"
        @itemClick="itemClick"
        ref="tabControlTop1"
        v-show="isFixed"
        class="tab-controlone"
      ></tab-control>
      <scroll class="content" ref="scrollBox" @scrollOn="menuContentScroll" :probeType="3" :pullUpLoad="true">
        <!-- 二级查询字典 -->
        <top-menu :topMenuList="topMenuList"></top-menu>
        <!-- 推荐列表 -->
        <content-recommend
          :tablist="tablist"
          ref="tabControlTop"
          :goods="showGoods"
          @itemClick="itemClick"
          @imgesLoad="imgesLoad"
        ></content-recommend>
      </scroll>
    </div>
    <!-- 返回顶部的导航 -->
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import CatOneMenu from './childrenComs/CatOnemenu'
import TopMenu from './childrenComs/TopMenuContent'
import ContentRecommend from './childrenComs/Recommend'
import TabControl from 'component/content/tabControl/TabControl'
import Scroll from 'component/common/betterScroll/BetterScroll'

import { getCatory, getSubcatory, getSubcatoryDetail} from 'http/catory'
import { backTopMixin } from 'utils/mixins'
import { debounce } from 'utils/common'
export default {
  name: 'Category',
  data () {
    return {
      oneMenuData: [], // 分类一级菜单
      topMenuList: [], // 二级分类页面数据
      bottomGoodsList: [], // 底部展示数据
      mailKey: '', // 二级数据 key
      miniWallkey: '', // 二级推荐数据
      tablist: ['流行','新款', '精选'], // tab 控制栏数据
      currentType: 'pop', // 默认显示流行数据
      goods: { // 商品分类数据
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      isFixed: false // tab栏的吸顶效果
    }
  },
  mixins: [backTopMixin],
  mounted() {
    // 获取分类一级菜单
    this.getCatsData()
    // 图片加载完成后，刷better-scroll可滚动区域
    const refresh = debounce(this.$refs.scrollBox.refresh, 200)
    this.$Bus.$on('imgLoad', function () {
      refresh()
    })
  },
  methods: {
    /**
     * 获取分类数据
     * 
     */
    getCatsData() {
      getCatory().then((res) => {
        // 分类页面 一级菜单数据
        this.oneMenuData = res.data.category.list
        // 获取默认数据
        this.mailKey = this.oneMenuData[0].maitKey
        this.miniWallkey = this.oneMenuData[0].miniWallkey
        if (this.oneMenuData.length > 0) {
          this.getCatItemData(this.oneMenuData[0].maitKey)
          this.getContentRecommendData(this.oneMenuData[0].miniWallkey, this.currentType)
        }
      }).catch((err) => {
        console.log("获取分类数据失败：" + err);
      })
    },
    getCatItemData (maitKey) {
      getSubcatory(maitKey).then((res) => {
        // console.log(res)
        // 获取商品数据
        this.topMenuList = res.data.list
      }).catch((err) => {
        console.log("获取数据失败：" + err);
        
      })
    },
    getContentRecommendData (miniWallkey, type) {
      getSubcatoryDetail(miniWallkey, type).then((res) => {
        // 根据 type 添加数据
        // console.log(res);
        this.goods[type].list = res
      }).catch((err) => {
        console.log(err);
      })
    },
    /**
     * 业务事件处理
     * 
     */
    menuItemClick (item) {
      console.log(item);
      // 获取每一项你内容数据
      this.mailKey = item.maitKey
      this.miniWallkey = item.miniWallkey
      // 获取内容页面数据
      this.getCatItemData(this.mailKey)
      this.getContentRecommendData(this.miniWallkey, this.currentType)
    },
    itemClick (val) {
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
      // tab控制栏切换数据
      this.getContentRecommendData(this.miniWallkey, this.currentType)
      // 同步当前选中的 tabControl
      this.$refs.tabControlTop1.currentIndex = val
      this.$refs.tabControlTop.$refs.tabControlTop.currentIndex = val
    },
    imgesLoad () {
      console.log('pppp')
    },
    // 分类内容页面滚动
    menuContentScroll (e) {
      // 控制返回顶部按钮的出现
      this.isShowBackTop = -e.y > 1000
      // 获取tab-control的offsetTop
      const tabOffsetTop = this.$refs.tabControlTop.$el.offsetTop
      if (-e.y >= tabOffsetTop) {
        this.isFixed = true
        this.$refs.tabControlTop.$refs.tabControlTop.$el.style.display="none"
      } else {
        this.isFixed = false
        this.$refs.tabControlTop.$refs.tabControlTop.$el.style.display="block"
      }
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  components: {
    CatOneMenu,
    TopMenu,
    ContentRecommend,
    TabControl,
    Scroll
  }
}
</script>
<style lang="scss" scoped>
.category-page {
  display: flex;
  height: calc(100vh - 50px);
  overflow: hidden;
  .one-menu {
    width: 100px;
    height: 100%;
    overflow: hidden;
    background-color: #fafafa;
  }
  .right {
    height: 100vh;
    .tab-controlone {
      position: relative;
      z-index: 1;
      height: 44px;
    }
  }
  .content {
    width: calc(100vw - 100px);
    height: calc(100% - 44px - 50px);
    text-align: center;
  }
}
</style>