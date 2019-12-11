<template>
  <div>
    <div class="top">
      <Head>
        <div slot="left">
          <span @click="prev">
            <img width="100%" height="100%" src="@/assets/img/left.png" alt />
          </span>
        </div>
        <div slot="center">
          <div class="sousou">个人中心</div>
        </div>
        <div slot="right">
          <span @click="right">
            <img width="100%" src="@/assets/img/right.png" alt />
          </span>
        </div>
      </Head>
      <ul class="Shortcut" ref="ul" v-show="isShow">
        <b class="icon"></b>
        <li>
          <dl class="span"></dl>
          <router-link :to="{path:'/home'}" class="strong">首页</router-link>
        </li>
        <li>
          <dl class="span"></dl>
          <router-link :to="{path:'/category'}" class="strong">分类搜索</router-link>
        </li>
        <li>
          <dl class="span"></dl>
          <router-link :to="{path:'/cart'}" class="strong">购物车</router-link>
        </li>
        <li>
          <dl class="span"></dl>
          <router-link :to="{path:'/profile'}" class="strong">我的京东</router-link>
        </li>
        <li>
          <dl class="span"></dl>
          <router-link :to="{path:'/home'}" class="strong">浏览记录</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Head from "@/components/common/head/Head";
export default {
  data() {
    return {
      isShow: false
    };
  },
  components: {
    Head
  },
  methods: {
    prev() {
      this.$router.go(-1);
    },
    right() {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.$refs.ul.style.display = "block";
      }
    },
    butclick(index) {
      window.console.log(index);
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  z-index: 9;
  position: relative;
  border-bottom: 1px solid #f7f2f2;
  min-height: 44px;
  background: #fff;
  .left {
    width: 50px;
  }
  span {
    width: 20px;
    height: 20px;
    display: block;
    margin: 7px 0 0 17px;
  }
  .sousou {
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #333;
  }
  .right span {
    width: 20px;
    height: 20px;
    display: block;
    margin: 0 auto;
  }
  .Shortcut {
    position: absolute;
    border-radius: 4px;
    top: 53px;
    right: 10px;
    width: 125px;
    background: rgba(0, 0, 0, 0.9);
    .icon {
      position: absolute;
      top: -5px;
      right: 5px;
      width: 10.5px;
      height: 5px;
      background: url("../../../assets/img/icontop.png") no-repeat 50%;
      background-size: 100% 100%;
    }
    li {
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
      display: flex;
      height: 40px;
      line-height: 40px;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      .span {
        width: 40px;
        height: 40px;
        display: block;
        background: url("../../../assets/img/aaa.png") no-repeat center center;
        background-size: 15px;
      }
      &:nth-child(2) .span {
        background: url("../../../assets/img/bbb.png") no-repeat center center;
        background-size: 15px;
      }
      &:nth-child(3) .span {
        background: url("../../../assets/img/ccc.png") no-repeat center center;
        background-size: 15px;
      }
      &:nth-child(4) .span {
        background: url("../../../assets/img/ddd.png") no-repeat center center;
        background-size: 15px;
      }
      &:nth-child(5) .span {
        background: url("../../../assets/img/eee.png") no-repeat center center;
        background-size: 15px;
      }
      a {
        display: block;
        color: #fff;
      }
    }
  }
}
</style>