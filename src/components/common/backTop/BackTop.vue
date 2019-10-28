<template>
  <div class="back-top">
    <div class="top-img">
      <img src="~assets/img/common/top.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'BackTop',
  data () {
    return {
    }
  },
  methods: {
    // backTop () { // 直接监听组件的点击事件 @click.native
    //   this.$emit('backTop')
    // }
  }
}
</script>
<style lang="scss" scoped>
.back-top {
  position: fixed;
  z-index: 6;
  right: 10px;
  bottom: 60px;
  .top-img {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
    }
  }
}
</style>