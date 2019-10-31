<template>
  <div class="home-recommend">
    <div class="feture-item"
      v-for="(item, index) in fetureView"
      :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="text">
          <span>{{item.title}}</span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    fetureView: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home-recommend {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0 15px;
  border-bottom: 8px solid #eee;
  .feture-item {
    flex: 1;
    width: 25%;
    padding: 5px;
    text-align: center;
    img {
      width: 100%;
      margin-bottom: 5px;
    }
    .text {
      font-size: $font_text_s;
      color: $color_text_3;
    }
  }
}
</style>