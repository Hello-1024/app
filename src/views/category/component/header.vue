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
          <div class="sousou">
            <i></i>
            <input class="input" type="text" placeholder="雷神笔记本" />
          </div>
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
    margin-top: 7px;
    display: flex;
    background: #f7f7f7;
    border-radius: 15px;
    i {
      display: block;
      width: 18px;
      height: 15px;
      background: url(https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline)
        no-repeat;
      background-position: -80px 0;
      background-size: 200px;
      margin: 8px 5px 0 0;
      z-index: 1;
    }
    .input {
      background: #f7f7f7;
      width: 230px;
      height: 30px;
      border: 0;
    }
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