<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-tabar class="nav-tabar">
      <div class="title" slot="center">
        <span>购物街</span>
      </div>
    </nav-tabar>
  </div>
</template>
<script>
import NavTabar from 'component/common/navtabar/Navtabar'
import { getData } from '../../http/home.js'
export default {
  name: 'Home',
  components: {
    NavTabar
  },
  created () {
    getData().then((res) =>{
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
<style lang='scss' scoped>
.nav-tabar {
  background-color: $theme_color;
  color: #fff;
  font-size: 20px;
}
</style>