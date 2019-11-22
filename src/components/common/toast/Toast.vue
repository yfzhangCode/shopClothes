<template>
  <div class="toast">
    <div><span v-if="isShow">{{message}}</span></div>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show (message="默认文字", dur=2000) {
      this.isShow = true
      // 赋值
      this.message = message
      // 设置延迟隐藏
      setTimeout(() => {
        this.isShow = false
        this.message = '默认文字'
      }, dur)
    }
  }
}
</script>
<style lang="scss">
.toast {
  width: 200px;
  height: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  z-index: 999;
  text-align: center;
  line-height: 50px;
  div {
    height: 100%;
    span {
      display: block;
      color: #fff;
      background-color: rgba(0,0,0,.8);
    }
  }
}
</style>