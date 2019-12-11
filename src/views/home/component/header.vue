<template>
  <div class="top">
    <Head :class="navBarFixed == true ? 'navBarWrap' :''">
      <div slot="left">
        <div class="ui" @click="change">
          <img :src="locat" alt />
        </div>
      </div>
      <div slot="center">
        <dir class="sousou">
          <div class="text">GD</div>
          <i class="l"></i>
          <div class="log"></div>
          <input class="input" type="text" placeholder="iPhone 11 Pro MAX" />
        </dir>
      </div>
      <div slot="right">
        <div class="text" @click="btn">
          <a href="#">登录</a>
        </div>
      </div>
    </Head>
  </div>
</template>

<script>
import Head from "@/components/common/head/Head";
export default {
  data() {
    return {
      navBarFixed: false,
      locat: require("@/assets/img/lanmu.png"),
      text: "Home 的参数传递"
    };
  },
  components: {
    Head
  },
  methods: {
    //----------------点击事件----------------
    change() {
      this.$router.push({
        //核心语句
        path: "/category", //跳转的路径
        query: {
          //路由传参时push和query搭配使用 ，作用时传递参数
          // text: this.text
        }
      });
    },
    btn() {
      this.$router.push({
        //核心语句
        path: "/profile", //跳转的路径
        query: {
          //路由传参时push和query搭配使用 ，作用时传递参数
          // text: this.text
        }
      });
    },

    hidemenu() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // window.console.log(scrollTop);
      //当滚动超过0时，实现吸顶效果（导航高度为45）
      if (scrollTop > 0) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    }
  },

  mounted() {
    window.addEventListener("scroll", this.hidemenu); //监听滚动事件
  }
};
</script>

<style lang="scss" scoped>
.navBarWrap {
  position: fixed;
  top: 0;
  background-color: #e43130;
  z-index: 999;
  width: 100%;
}
.top {
  .ui img {
    margin: 13px 0 0 16px;
    width: 20px;
    height: 18px;
    display: block;
  }
  .sousou {
    margin: 7px 3px 0 -3px;
    height: 30px;
    line-height: 30px;
    background-color: #f7f7f7;
    border-radius: 15px;
    display: flex;
    .text {
      width: 20px;
      height: 15px;
      margin: 1px 8px 0 15px;
      font-size: 16px;
      color: red;
    }
    .l {
      content: "";
      border-right: 1px solid #ddd;
    }
    .log {
      display: block;
      width: 18px;
      height: 15px;
      background: url("../../../assets/img/jd-sprites.png") no-repeat;
      background-position: -80px 0;
      background-size: 200px;
      margin: 8px 0 0 8px;
      z-index: 1;
    }
    .input {
      border: none;
      width: 170px;
      background-color: #f7f7f7;
      margin-left: 9px;
    }
  }
  .text a {
    font-size: 15px;
    color: #fff;
  }
}
</style>