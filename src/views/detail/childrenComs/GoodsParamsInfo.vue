<template>
  <div class="goods-params-info">
    <table class="table params-table" v-for="(item, index) in pramsRule.tables" :key="index">
      <tbody>
        <tr v-for="(trItem, idx) in item" :key="idx">
          <td v-for="(td, i) in trItem" :key="i">{{td}}</td>
        </tr>
      </tbody>
    </table>
    <table class="table company-info">
      <tbody>
        <tr v-for="(item, index) in paramsInfo.set" :key="index">
          <td>{{item.key}}</td>
          <td class="item-value">{{item.value}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'GoodsParamsInfo',
  props: {
    paramsInfo: {
      type: Object
    },
    pramsRule: {
      type: Object
    }
  }
}
</script>
<style lang="scss" scoped>
.goods-params-info {
  padding: 15px 10px;
  border-bottom: 5px solid #e0e0e0;
  .table {
    width: 100%;
    margin-bottom: 5px;
    tbody {
      td {
        padding: 8px 10px;
        text-align: left;
        border-bottom: 1px solid #eee;
      }
      .item-value {
        color: #eb4868;
      }
    }
  }
}
</style>