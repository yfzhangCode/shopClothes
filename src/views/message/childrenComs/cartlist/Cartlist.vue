<template>
  <div class="cart-list">
    <!-- better-scroll 滚动 -->
    <cart-scroll class="content" ref="cartScroll">
      <ul>
        <li class="cart-list-item"
          v-for="(item, index) in cartList"
          :key="index"
          :data-index="index"
          @click="itemClick($event, item)"
        >
          <div class="checkbox">
            <span class="checkbox-item" :class="item.ischecked?'checked':''"></span>
          </div>
          <div class="goods-cart">
            <img :src="item.image" alt="">
          </div>
          <div class="goods-info">
            <h3 class="goods-title">{{item.title.substring(0,20)}}</h3>
          </div>
          <div class="price-and-count">
            <span class="price">{{item.price}}</span>
            <span class="count">{{item.count}}</span>
          </div>
        </li>
      </ul>
    </cart-scroll>
  </div>
</template>
<script>
import cartScroll from 'component/common/betterScroll/BetterScroll'
export default {
  name: 'Cartlist',
  data () {
    return {
      isShowCheckbox: false
    }
  },
  components: {
    cartScroll
  },
  props: {
    cartList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  activated() {
    console.log('kkk')
    this.$refs.cartScroll.refresh()
  },
  methods: {
    itemClick (e, $item) {
      this.cartList.find((item) => {
        if (item.iid === $item.iid) {
          item.ischecked = !item.ischecked
        }
      })
      this.$emit('itemClick', this.cartList)
    }
  }
}
</script>
<style lang="scss" scoped>
.cart-list {
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  .content {
    height: 100%;
    padding: 10px;
    > ul {
      padding-top: 10px;
    }
    .cart-list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      overflow: hidden;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
      .checkbox {
        text-align: center;
        width: 15px;
        height: 15px;
        padding: 0 15px 0 0;
        .checkbox-item {
          display: inline-block;
          width: 15px;
          height: 15px;
          border: 1px solid #eee;
          border-radius: 50%;
        }
        .checked {
          background-color: #f3684f;
        }
      }
      .goods-cart {
        width: 80px;
        height: 60px;
        overflow: hidden;
        margin-right: 10px;
        img {
          width: 100%;
        }
      }
      .goods-info {
        margin-right: 10px;
        h3 {
          font-weight: normal;
          font-size: 14px;
        }
        .goods-title {
          width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      .price-and-count {
        line-height: 25px;
        span {
          display: block;
          text-align: center;
        }
        .price {
          color: red;
        }
      }
    }
  }
}
</style>