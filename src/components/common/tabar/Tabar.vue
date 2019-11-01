<template>
  <div class="tabar-box">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'Tabar'
}
</script>
<style lang='scss' scoped>
.tabar-box {
  display: flex;
  height: 49px;
  padding: 5px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  background-color: $color_bg_fa;
}
</style>