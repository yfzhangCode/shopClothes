<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 主页面底部导航栏 -->
    <main-tabar></main-tabar>
  </div>
</template>

<script>
import MainTabar from 'component/content/maintabar/Maintabar.vue'
export default {
  name: 'app',
  components: {
    MainTabar
  }
}
</script>

<style lang="scss">
@import 'assets/style/index.scss';
</style>
