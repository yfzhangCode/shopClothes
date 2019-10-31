<template>
  <div class="tab-control">
    <ul>
      <li class="tab-items"
        v-for="(item, index) in tabList"
        :key="index"
        :class="currentIndex === index ? 'tab-active':''"
        @click.stop="clickItems(index)"
        >
        <span>
          {{ item }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0 // 默认在流行
    }
  },
  props: {
    tabList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    clickItems(idx) {
      this.currentIndex = idx
      this.$emit('itemClick', idx)
    }
  }
}
</script>
<style lang="scss" scoped>
.tab-control {
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: #fff;
  ul {
    display: flex;
    .tab-items{
      flex: 1;
      text-align: center;
      span {
        padding: 5px;
      }
    }
    .tab-active {
      color: $theme_color;
      span {
        border-bottom: 3px solid $theme_color;
      }
    }
  }
}
</style>