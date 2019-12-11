<template>
  <div>
    <div class="foot">
      <div class="icon_btn">
        <i class="icona"></i>
        <span class="txt">联系客服</span>
      </div>
      <div class="icon_btn">
        <i class="iconb"></i>
        <span class="txt">进店</span>
      </div>
      <div class="icon_btn">
        <i class="iconc">
          <span class="tips" ref="two">{{btn}}</span>
        </i>
        <span class="txt">
          <router-link :to="{path:'/cart'}">购物车</router-link>
        </span>
      </div>
      <div class="btn_orange">
        <div class="btn" @click="btnclick">加入购物车</div>
        <div class="btn">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    btn() {
      return this.$store.state.cart.length;
    }
  },
  methods: {
    btnclick() {
      this.$emit("btnclick");
      this.$toast.success({
        message: "成功加入购物车",
        duration: 1500
      });
      this.$refs.two.style.display = "block";
    }
  }
};
</script>

<style lang="scss" scoped>
.foot {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  z-index: 99;
  display: flex;
  background: white;

  .icon_btn {
    width: 14%;
    text-align: center;
    float: left;
    .icona {
      background: url("../../../assets/img/iconkefu.png") 50% no-repeat;
      background-size: auto 20px;
      display: block;
      width: 20px;
      height: 25px;
      margin: 5px auto 0;
    }
    .iconb {
      background: url("../../../assets/img/icondianpu.png") 50% no-repeat;
      background-size: auto 20px;
      display: block;
      width: 20px;
      height: 25px;
      margin: 5px auto 0;
    }
    .iconc {
      position: relative;
      background: url("../../../assets/img/iconcart.png") 50% no-repeat;
      background-size: auto 20px;
      display: block;
      width: 20px;
      height: 25px;
      margin: 5px auto 0;
      .tips {
        // display: none;
        font-style: normal;
        position: absolute;
        top: 0;
        left: 100%;
        background: #e4393c;
        color: #fff;
        font-size: 7px;
        margin-left: -10px;
        line-height: 9px;
        border: 1px solid #fff;
        border-radius: 10px;
        padding: 1px 3px;
      }
    }

    .txt {
      font-size: 10px;
      color: #999;
      display: block;
      line-height: 20px;
    }
  }

  .btn_orange {
    display: flex;
    width: 58%;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    .btn {
      width: 100%;
      flex: 1;
      color: #fff;
      background: linear-gradient(138deg, #ffa600, #ffb000 77%, #ffbc00);
      &:last-child {
        background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
      }
    }
  }
}
</style>