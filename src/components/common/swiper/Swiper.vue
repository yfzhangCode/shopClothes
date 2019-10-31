<template>
  <div class="zyf-swiper">
    <div class="swiper" ref="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <span
          v-for="(item, index) in slideCount"
          :key="index"
          class="indic-item"
          :class="{active: index === currentIndex - 1}"
         ></span>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Swiper',
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      slideCount: 0, // 轮播图元素个数
      totalWidth: 0, // swiper 总宽度
      swiperStyle: {}, // swiper 样式
      currentIndex: 1, // 当期的index
      scrolling: false // 是否正在滚动
    }
  },
  mounted () {
    setTimeout(() => {
      // 初始化创建 圆点
      this.handlDOM();

      this.startTimer();
    }, 200);
  },
  methods: {
    /** 
     *  控制 DOM 操作
     * 
    */
    handlDOM() {
      // 1 获取操作的元素
      let swiperNum = this.$refs.swiper
      let swiperitemels = swiperNum.getElementsByClassName('swiper-item')
      // console.log(swiperNum)
      // console.log(swiperitemels)
      // 保存轮播图的个数 渲染 控制 圆点
      this.slideCount = swiperitemels.length
      // console.log(this.slideCount)
      // 为轮播图添加前后 克隆元素
      if(this.slideCount > 1) {
        // 克隆第一个元素
        let cloneFirst = swiperitemels[0].cloneNode(true);
        // 克隆最后一个元素
        let cloneLast = swiperitemels[this.slideCount - 1].cloneNode(true);
        // 插入最后一个元素再第一位
        swiperNum.insertBefore(cloneLast, swiperitemels[0])
        // 插入第一个元素放入最后一位
        swiperNum.appendChild(cloneFirst)
        this.totalWidth = swiperNum.offsetWidth;
        this.swiperStyle = swiperNum.style;
      }
      // 显示前面天机的第一个图片
      this.setTransfrom(-this.totalWidth)
    },
    /**
     * 设置轮播图的滚动位置
     * setTransfrom
     */
    setTransfrom (distance) {
      this.swiperStyle.transform = `translate3d(${distance}px, 0, 0)`;
      this.swiperStyle['-webkit-transform'] = `translate3d(${distance}px, 0, 0)`;
      this.swiperStyle['-ms-transform'] = `translate3d(${distance}px, 0, 0)`;
    },
    /**
     * 设置定时器 图片走动滚动
     *
     */
    startTimer () {
      this.player = setInterval(() => {
        this.currentIndex++;
        // 滚动位置
        this.scrollContent(-this.currentIndex * this.totalWidth)
      }, this.interval);
    },
    stopTimer () {
      window.clearInterval(this.player)
    },

    /**
     * 滚动位置
     * 
     */
    scrollContent(currentpos) {
      // 正在滚动
      this.scrolling = true;
      // 开始滚动动画
      // 单位要加
      this.swiperStyle.transition = 'transform ' + this.animDuration + 'ms';
      this.setTransfrom(currentpos);
      // 校验滚动位置
      this.checkPosition()
      // 滚动完成
      this.scrolling = false
    },

    /**
     * 校验滚动位置
     * 当图片滑动到第一个和最后一的过度
     */
    checkPosition() {
      window.setTimeout(() => {
        // 1 校验位置的准确性
        this.swiperStyle.transition = '0ms';
        if (this.currentIndex > this.slideCount) {
          this.currentIndex = 1;
          this.setTransfrom(-this.currentIndex * this.totalWidth)
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransfrom(-this.currentIndex * this.totalWidth)
        }
        // 2 结束移动后的回调
        this.$emit('transitionEnd', this.currentIndex -1);
      }, this.animDuration);
    },
    /**
     * 拖拽操作
     * 
     */
    touchStart (e) {
      // 判断当前是否正在滚动 如果正在滚动不能拖动
      if (this.scrolling) return false;
      // 关闭定时器
      this.stopTimer()
      // 保存开始滚动位置
      this.startX = e.touches[0].pageX
    },
    touchMove(e) {
      // 拖动中计算用户拖动的距离
      this.currentX = e.touches[0].pageX;
      this.disatanceX = this.currentX - this.startX;
      let currentPositon = -this.currentIndex * this.totalWidth;
      let moveDistance = this.disatanceX + currentPositon;
      // 设置当前位置
      this.setTransfrom(moveDistance)
    },
    touchEnd () {
      // 拖拽结束 获取移动距离
      let currentX = Math.abs(this.disatanceX)
      // 判断最终距离
      if (this.disatanceX === 0) {
        return
      } else if(this.disatanceX > 0 && currentX > this.totalWidth * this.moveRatio) { // 向右边移动 超过 0.5
        this.currentIndex--;
      } else if(this.disatanceX < 0 && currentX > this.totalWidth * this.moveRatio) { // 向左边移动超过 0.5
        this.currentIndex++
      }
      // 设置滚动位置
      this.scrollContent(-this.currentIndex * this.totalWidth)
      // 移动完成开启定时器
      this.startTimer()
    },
    
    /**
     * 点击圆点控制切换
     * 
     */
    perev () {
      this.chanageItem(-1)
    },
    next () {
      this.chanageItem(1)
    },
    chanageItem(num) {
      // 关闭定时器
      this.stopTimer()
      // 修改index 和位置
      this.currentIndex += num
      this.scrollContent(-this.currentIndex * this.totalWidth)
      // 开启定时器
      this.startTimer()
    }
  }
}
</script>
<style lang="scss" scoped>
.zyf-swiper {
  overflow: hidden;
  position: relative;
  .swiper {
    display: flex;
  }
  .indicator {
    width: 100%;
    position: absolute;
    bottom: 15px;
    display: flex;
    justify-content: center;
    .indic-item {
      width: 8px;
      height: 8px;
      text-align: center;
      border-radius: 50%;
      display: block;
      margin: 0 10px;
      background-color: #fff;
    }
    .active {
      background-color: rgba(212,62,46,1);
    }
  }
}
</style>