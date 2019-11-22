<template>
  <div class="cart">
    <!-- 顶部导航 -->
    <div class="cart-nav">
      <navBar>
        <template v-slot:center>购物车({{cartGoodsList.length}})</template>
      </navBar>
    </div>
    <!-- 购物车内容 -->
    <div class="cart-list-content">
      <cart-list :cartList="cartGoodsList" @itemClick="itemClick"></cart-list>
    </div>
    <!-- 计算价钱 -->
    <div class="make-money">
      <div class="check-all" @click.stop="slectAll">
        <span class="checkbox" :class="isCheckedAll?'checked':''"></span>
        <span>全选</span>
      </div>
      <div class="total-num">
        <span>总价：￥{{totalPrice}}</span>
        <span class="take-pay">去结算</span>
      </div>
    </div>
  </div>
</template>
<script>
import navBar from 'component/common/navtabar/Navtabar'
import cartList from './childrenComs/cartlist/Cartlist'
import { mapGetters } from 'vuex'
export default {
  name: 'Message',
  data () {
    return {
      cartGoodsList: [], // 购物车数据
    }
  },
  activated() {
    this.cartGoodsList = this.$store.state.cartGoodsInfo.slice()
  },
  components: {
    navBar,
    cartList
  },
  computed: {
    // 计算全选按钮
    isCheckedAll () {
      if (this.cartGoodsList.length === 0) return false
      return this.cartGoodsList.filter((item) => {
        if (item.ischecked) {
          return item
        }
      }).length === this.cartGoodsList.length
    },
    // 计算总价钱
    totalPrice () {
      return this.cartGoodsList.filter(item => {
        return item.ischecked
      }).reduce((per, cur) => {
        return per + cur.count * parseInt(cur.price.substring(1))
      }, 0).toFixed(2)
    },
    ...mapGetters([
      'cartGoodsInfo'
    ])
  },
  methods: {
    // 选择商品
    itemClick (val) {
      this.cartGoodsList = val
    },
    // 全选效果
    slectAll () {
      console.log(this.cartGoodsList)
      // 检测是否有未选中产品
      const notSelect = this.cartGoodsList.find(item => { return !item.ischecked })
      // 判断标志
      if (notSelect) {
        this.$store.state.cartGoodsInfo.map(item => {
          item.ischecked = true
        })
      } else {
        this.$store.state.cartGoodsInfo.map(item => {
          item.ischecked = false
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.cart {
  height: 100vh;
  overflow: hidden;
  .cart-nav {
    background-color: $theme_color;
    color: #fff;
  }
  .cart-list-content {
    height: calc(100% - 50px - 44px);
    overflow: hidden;
  }
  .make-money {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    border: 1px solid #eee;
    background-color: #fff;
    box-sizing: border-box;
  }
  .check-all {
    text-align: center;
    padding: 0 15px 0 0;
    display: flex;
    align-items: center;
    span {
      display: inline-block;
    }
    .checkbox {
      width: 15px;
      height: 15px;
      border: 1px solid #eee;
      border-radius: 50%;
      margin-right: 10px;
    }
    .checked {
      background-color: #f3684f;
    }
  }
  .total-num {
    .take-pay {
      display: inline-block;
      padding: 10px;
      color: #fff;
      margin-left: 10px;
      background-color: $theme_color;
    }
  }
}
</style>