<template>
  <div class="content-recommend">
    <tab-control :tabList="tablist" @itemClick="itemClick"
      ref="tabControlTop" class="tab-control"></tab-control>
    <!-- 商品数据 -->
    <div>
      <goods-list :goods="goods"></goods-list>
    </div>
  </div>
</template>
<script>
import TabControl from 'component/content/tabControl/TabControl'
import GoodsList from 'component/content/goods/Goods'
export default {
  name: 'Recommend',
  data () {
    return {
    }
  },
  props: {
    tablist: {
      type: Array,
      default () {
        return []
      }
    },
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    TabControl,
    GoodsList
  },
  methods: {
    itemClick (val) {
      console.log(val)
      this.$emit('itemClick', val)
    }
  }
}
</script>
<style scoped>
</style>