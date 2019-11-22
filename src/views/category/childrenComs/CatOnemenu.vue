<template>
  <div class="cat-one-menu">
    <ul>
      <li class="menu-item"
        v-for="(item, index) in muenList"
        :key="index"
        :data-index="index"
        ref="dataIndex"
        :class="currentIndex === index ? 'active-item':''"
        @click.stop="itemMenuClick(index, item)"
      >
      <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CatOnemenu',
  data () {
    return {
      currentIndex: 0 // 默认选中
    }
  },
  props: {
    muenList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    itemMenuClick (idx, item) {
      console.log(idx);
      this.currentIndex = idx
      this.$emit('menuItemClick', item)
    }
  }
}
</script>
<style lang="scss" scoped>
.cat-one-menu {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #fafafa;
  .menu-item {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .active-item {
    background-color: coral;
    span {
      display: block;
      color: #fff;
    }
  }
}
</style>