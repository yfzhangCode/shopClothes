<template>
  <div class="main-tabar">
    <tabar>
      <!-- 首页 -->
      <router-link to="/home" tag="div" class="link">
        <tabar-item path="/home">
          <img slot="icon-img" src="~assets/img/tarbar/tab_icon_club_def@3x.png" alt="">
          <img slot="active-icon-img" src="~assets/img/tarbar/tab_icon_club_selected@3x.png" alt="">
          <div slot="icon-text" class="icon_text">
            <span>首页</span>
          </div>
        </tabar-item>
      </router-link>
      <!-- 分类 -->
      <router-link to="/category" tag="div" class="link">
        <tabar-item path="/category">
          <img slot="icon-img" src="~assets/img/tarbar/tab_icon_exercise_def@3x.png" alt="">
          <img slot="active-icon-img" src="~assets/img/tarbar/tab_icon_exercise_selected@3x.png" alt="">
          <div slot="icon-text" class="icon_text">
            <span>分类</span>
          </div>
        </tabar-item>
      </router-link>
      <!-- 消息 -->
      <router-link to="/message" tag="div" class="link">
        <tabar-item path="/message">
          <img slot="icon-img" src="~assets/img/tarbar/tab_icon_message_def@3x.png" alt="">
          <img slot="active-icon-img" src="~assets/img/tarbar/tab_icon_message_selected@3x.png" alt="">
          <div slot="icon-text" class="icon_text">
            <span>购物车</span>
          </div>
        </tabar-item>
      </router-link>
      <!-- 我的 -->
      <router-link to="/profile" tag="div" class="link">
        <tabar-item path="/profile">
          <img slot="icon-img" src="~assets/img/tarbar/tab_icon_personal_center_def@3x.png" alt="">
          <img slot="active-icon-img" src="~assets/img/tarbar/tab_icon_personal_center_selected@3x.png" alt="">
          <div slot="icon-text" class="icon_text">
            <span>我的</span>
          </div>
        </tabar-item>
      </router-link>
    </tabar>
  </div>
</template>
<script>
import Tabar from 'component/common/tabar/Tabar'
import TabarItem from 'component/common/tabar/TabarItem'
export default {
  name: 'Maintabar',
  components: {
    Tabar,
    TabarItem
  }
}
</script>
<style lang='scss' scoped>
.link {
  flex: 1;
}
.active {
  .icon_text{ 
    color: $theme_color;
  }
}
</style>