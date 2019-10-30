<template>
  <div class="goods-base-info">
    <p>详情信息</p>
  </div>
</template>
<script>
export default {
  name: 'GoodsBaseInfo',
  props: {
    goodsInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped>

</style>