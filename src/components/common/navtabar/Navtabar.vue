<template>
  <div class="nav-tabar">
    <nav class="left">
      <slot name="left"></slot>
    </nav>
    <nav class="center">
      <slot name="center"></slot>
    </nav>
    <nav class="right">
      <slot name="right"></slot>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Navtabar'
}
</script>
<style lang='scss' scoped>
.nav-tabar {
  display: flex;
  line-height: 44px;
  height: 44px;
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
  }
}
</style>