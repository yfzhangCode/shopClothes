<template>
  <div class="swiper-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'SwiperItem'
}
</script>
<style lang="scss" scoped>
.swiper-item {
  width: 100%;
  flex-shrink: 0;
  img {
    width: 100%;
  }
}
</style>