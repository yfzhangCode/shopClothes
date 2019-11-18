// 定义返回顶部的混入
import BackTop from 'component/common/backTop/BackTop'
export const backTopMixin = {
  data () {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    // 返回顶部
    backTop() {
      console.log(this.$refs.scrollBox)
      this.$refs.scrollBox.scrollTo(0,0,500)
    }
  }
}