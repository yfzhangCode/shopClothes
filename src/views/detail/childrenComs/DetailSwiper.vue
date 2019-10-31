<template>
  <div class="detail-swiper">
    <swiper :showIndicator="false">
      <swiper-item class="detail-item"
        v-for="(item, index) in TopImges"
        :key="index"
      >
      <div>
        <img :src="item" alt="">
      </div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'component/common/swiper/index'
export default {
  name: 'DetailSwiper',
  data () {
    return {

    }
  },
  props: {
    TopImges: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>
<style lang="scss" scoped>
.detail-swiper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
  .detail-item {
    height: 300px;
  }
}
</style>