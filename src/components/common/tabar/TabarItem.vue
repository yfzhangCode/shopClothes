<template>
  <div class="tabar-item">
    <div v-if="isActive">
      <slot name="active-icon-img"></slot>
    </div>
    <div v-else>
      <slot name="icon-img"></slot>
    </div>
    <div>
      <slot name="icon-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) > -1;
    }
  }
}
</script>
<style lang='scss' scoped>
.tabar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  img {
    width: 30px;
    height: 30px;
  }
}
</style>