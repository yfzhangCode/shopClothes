<template>
  <div class="top-nav">
      <nav-bar>
        <!-- 顶部返回按钮 -->
        <template v-slot:left>
          <div class="back" @click.stop="backNext">
            <img src="~assets/img/common/back.svg" alt="">
          </div>
        </template>
        <!-- 顶部导航 -->
        <template v-slot:center>
          <div class="nav-box">
            <div class="nav-item"
              v-for="(item, index) in navTitle"
              :key="index"
              :class="{active: index === currentIndex}"
              @click.stop="navItemClick(index)"
            >{{item}}</div>
          </div>
        </template>
      </nav-bar>
  </div>
</template>
<script>
import NavBar from 'component/common/navtabar/Navtabar'
export default {
  name: 'Topnav',
  data () {
    return {
      currentIndex: 0, // 默认 当前状态
      navTitle: ['商品', '参数', '评论', '推荐']
    }
  },
  components: {
    NavBar
  },
  methods: {
    // 导航切换
    navItemClick (idx) {
      this.currentIndex = idx
      this.$emit('navClick', idx)
    },
    // 返回上一级
    backNext () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.top-nav {
  .active {
    color: $theme_color;
  }
  .back {
    img {
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }
  }
  .nav-box {
    display: flex;
    align-items: center;
    .nav-item {
      flex: 1;
    }
  }
}
</style>