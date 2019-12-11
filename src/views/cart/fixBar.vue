<template>
  <div class="fixBar">
    <div class="left">
      <icon :isckeck="swi" />
      <span class="icon_log">全选</span>
    </div>
    <div class="total">
      <div class="arrow">
        <p class="t_main">
          总计:
          <span>￥{{pirce}}</span>
        </p>
        <p class="tip">已优惠￥345</p>
      </div>
    </div>
    <div class="buy">去结算</div>
  </div>
</template>

<script>
import icon from "./icon";
export default {
  props: {
    swi: {
      type: Boolean,
      default: false
    }
  },
  components: {
    icon
  },
  computed: {
    pirce() {
      //先过滤不选择的商品
      return this.$store.state.cart
        .filter(item => {
          return item.ckecked;
        }) //然后再拿当前的价格+最后的值
        .reduce((Price, item) => {
          return Price + item.Price * item.count;
        }, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.fixBar {
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 50px;
  background: hsla(0, 0%, 100%, 0.95);
  color: #333;
  font-size: 14px;
  position: fixed;
  z-index: 120;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .icon_log {
    position: absolute;
    left: 1px;
    top: 35px;
    width: 40px;
    font-size: 10px;
    text-align: center;
    height: 15px;
    color: #999;
  }

  .arrow {
    width: 250px;
    text-align: right;
    .t_main {
      font-weight: 700;
      font-size: 16px;
      line-height: 1em;
      height: 1em;
      overflow: hidden;
      span {
        color: #f2270c;
      }
    }
    .tip {
      padding-top: 5px;
      display: block;
      font-size: 10px;
      line-height: 1em;
      color: #999;
    }
  }
  .buy {
    margin-left: 10px;
    font-weight: 700;
    display: block;
    width: 110px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    border-radius: 2px;
    color: #fff;
    background-image: linear-gradient(135deg, #f2140c, #f2270c 70%, #f24d0c);
  }
}
</style>