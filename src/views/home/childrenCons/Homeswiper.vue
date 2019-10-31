<template>
  <div class="home-swiper">
    <swiper :showIndicator="true">
      <!-- 图片数据 -->
      <swiper-item
        v-for="(item, index) in banner"
        :key="index"
        >
        <a :href="item.link" class="actie-link">
          <img :src="item.image" alt="" @load="swiperImgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'component/common/swiper/index.js'
export default {
  name: 'Homeswiper',
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    swiperImgLoad() {
      if (!this.isLoad) {
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }
    }
  }
}
</script>
<style scoped>

</style>