<template>
  <div class="content-top-menu">
    <ul>
      <li class="top-menu-item"
        v-for="(item, index) in topMenuList"
        :key="index"
      >
        <a :href="item.link" class="item">
          <img :src="item.image" alt="" @load="imgesLoad">
          <span class="title">{{item.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TopMenuContent',
  props: {
    topMenuList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    imgesLoad () {
      this.$emit('imgesLoad')
    }
  }
}
</script>
<style lang="scss" scoped>
.content-top-menu {
  width: 100%;
  padding-top: 20px;
  padding-left: 10px;
  box-sizing: border-box;
  ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .top-menu-item {
      width: 48%;
      text-align: center;
      margin-bottom: 20px;
      .item {
        display: inline-block;
        margin: 0;
        padding: 0;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        img {
          width: 100%;
          margin-bottom: 5px;
        }
        .title {
          color: #333;
        }
      }
    }
  }
}
</style>