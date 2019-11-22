<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)
export default {
  name: 'BetterScroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  mounted () {
    // 初始化Better-Scroll
    this._initBScroll()
  },
  methods: {
    // 初始化 better-scroll
    _initBScroll () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType, // 实时监听滚动数据
        pullUpLoad: this.pullUpLoad
      })
      // 监听滚动
      if (this.probeType === 2 || this.probeType === 3) {
        this.scrollOn()
      }
      // 监听上拉加载
      if (this.pullUpLoad) {
        this.pullUpload()
      }
    },
    // 滚动到顶部
    scrollTo (x, y, time=500) { // time 滚动动画时间 默认值
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    // 滚动事件
    scrollOn() {
      this.scroll.on('scroll', (e) => {
        this.$emit('scrollOn', e)
      })
    },
    // 监听上拉事件
    pullUpload () {
      this.scroll.on('pullingUp',() => {
        // 一次上拉加载动作完成
        this.$emit('LoadMore')
      })
    },
    // 上拉加载完成
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp()
    },
    // 刷新可滚动高度 scrollerhHeight
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    // 获取滚动的 Y 值
    getScrollY () {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>
<style scoped>
.content {
  background-color: #fff;
}
</style>