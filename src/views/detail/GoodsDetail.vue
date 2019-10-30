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
      <goods-base-info></goods-base-info>
    </div>
  </div>
</template>
<script>
import TopNav from './childrenComs/Topnav'
import SwiperDetail from './childrenComs/DetailSwiper'
import GoodsBaseInfo from './childrenComs/GoodsBaseInfo'

import { Detail } from 'http/detail'
export default {
  name: 'GoodsDetail',
  data() {
    return {
      goodid: '',
      topImg: []
    }
  },
  created() {
    this.goodid = this.$route.params.iid
  },
  mounted () {
    // 获取详情页数据
    this.getDetailData(this.goodid)
  },
  components: {
    TopNav,
    SwiperDetail,
    GoodsBaseInfo
  },
  methods: {
    getDetailData (id) {
      Detail(id).then((res) => {
        console.log(res);
        // 获取详情页面的swiper
        this.topImg = res.result.itemInfo.topImages
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
</style>