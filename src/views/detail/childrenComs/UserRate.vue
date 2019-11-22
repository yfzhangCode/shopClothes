<template>
  <div class="user-rate">
    <div class="title">
      <span>用户评价</span>
      <div>
        <span>更多</span>
        <span class="arrow-right"></span>
      </div>
    </div>
    <div class="user-rate-items" v-if="Object.keys(userRateInfo).length > 0">
      <ul>
        <li class="item" v-for="(item, index) in userRateInfo.list" :key="index">
          <div class="user-info">
            <img :src="item.user.avatar" alt="">
            <span>{{item.user.uname}}</span>
            <div class="color-size">
              <span v-for="(size, ix) in item.extraInfo" :key="ix">{{size}}</span>
            </div>
          </div>
          <div class="user-desc">
            {{item.content}}
          </div>
          <div class="desc-time-and-size">
            <span>{{item.created | showDate}}</span>
            <span>{{item.style}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {FormatDateTime} from 'utils/common'
export default {
  name: 'UserRate',
  props: {
    userRateInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      // 时间戳转换成 Date 对象
      const DateStr = new Date(value * 1000)
      // 使用时间戳转化 format
      return FormatDateTime(DateStr, 'yyyy-mm-dd')
    }
  }
}
</script>
<style lang="scss" scoped>
.user-rate {
  padding-bottom: 20px;
  border-bottom: 5px solid #e0e0e0;
  .title {
    display: flex;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    font-size: $font_text_lx;
    .arrow-right {
      width: 12px;
      height: 12px;
      display: inline-block;
      background-color: transparent;
      border-top: 1px solid #666;
      border-right: 1px solid #666;
      transform: rotate(45deg);
      margin-left: 5px;
      vertical-align: middle;
      margin-top: -2px;
    }
  }
  .user-rate-items {
    ul {
      .item {
        padding: 15px 10px;
        margin-bottom: 15px;
        .user-info {
          display: flex;
          align-items: center;
          font-size: $font_text_m;
          margin-bottom: 8px;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 6px;
          }
          .color-size {
            margin-left: 8px;
            font-size: $font_text_s;
            span {
              margin: 0 3px;
            }
          }
        }
        .user-desc {
          padding: 5px 10px;
          line-height: 25px;
        }
        .desc-time-and-size {
          padding: 6px 10px;
          span {
            margin: 0 6px;
          }
        }
      }
    }
  }
}
</style>