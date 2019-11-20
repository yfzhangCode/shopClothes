<template>
  <div>
    <h2>这是分类页面</h2>
    <p class="">这是分类内容</p>
  </div>
</template>
<script>
import {getCatory} from 'http/catory'
export default {
  name: 'Category',
  mounted() {
    
  },
  methods: {
    getCatsData() {
      getCatory().then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log("获取分类数据失败：" + err);
      })
    }
  }
}
</script>
<style lang='' scoped>

</style>