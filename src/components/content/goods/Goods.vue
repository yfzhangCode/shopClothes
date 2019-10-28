<template>
  <div class="goods">
    <goods-list 
      v-for="(item, index) in goods" 
      :key="index"
      :goodslist="item"
      >
    </goods-list>
  </div>
</template>
<script>
import GoodsList from './Goodslist'
export default {
  name: 'Goods',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {

  },
  components: {
    GoodsList
  }
}
</script>
<style lang="scss" scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  padding: 0 4px;
  box-sizing: border-box;
}
</style>