<template>
  <div>
    <div class="header1" ref="one">
      <div class="left">
        <div class="btn">
          <span @click="prev"></span>
        </div>
      </div>
      <div class="right">
        <div class="btn">
          <span></span>
        </div>
      </div>
    </div>
    <div class="header2" ref="two">
      <div class="left">
        <span @click="prev"></span>
      </div>
      <div class="center">
        <div
          class="li"
          v-for="(item,index) in  list"
          :key="index"
          @click="btnclick(index)"
          :class="{active: index === activated}"
          :ref="item"
        >{{item}}</div>
      </div>
      <div class="right">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navBarFixed: false,
      activated: 0,
      list: ["商品", "评价", "详情", "推荐"]
    };
  },
  methods: {
    //点击事件
    prev() {
      this.$router.go(-1);
    },
    btnclick(index) {
      this.activated = index;
      //$emit 绑定一个自定义事件titleClick，当这个这个语句被执行到的时候，就会将参数arg传递给父组件，父组件通过@titleClick监听并接收参数。
      this.$emit("titleClick", index);
    },
    hidemenu() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // window.console.log(scrollTop);
      if (scrollTop > 60) {
        this.$refs.one.style.display = "none";
        this.$refs.two.style.display = "block";
      } else {
        this.$refs.one.style.display = "block";
        this.$refs.two.style.display = "none";
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.hidemenu); //监听滚动事件
  }
};
</script>

<style lang="scss" scoped>
.header1 {
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  line-height: 44px;
  height: 44px;
  font-size: 14px;
  color: #252525;
  // display: none;
  .left {
    width: 45px;
    .btn {
      width: 30px;
      height: 30px;
      border-radius: 20px;
      margin: 7px 0 0 5px;
      background-color: #666;
      text-align: center;
      span {
        display: inline-block;
        margin: 0 1px 1px 0;
        width: 20px;
        height: 20px;
        background: url("../../../assets/img/Aleft.png") no-repeat 50%;
        background-size: 20px;
      }
    }
  }
  .right {
    width: 45px;
    .btn {
      width: 30px;
      height: 30px;
      border-radius: 20px;
      margin: 7px 0 0 9px;
      background-color: #666;
      text-align: center;
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url("../../../assets/img/Aright.png") no-repeat 50%;
        background-size: 20px;
      }
    }
  }
}
.header2 {
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  line-height: 44px;
  height: 44px;
  font-size: 14px;
  color: #252525;
  display: none;
  .left {
    width: 45px;
    height: 100%;
    float: left;
    span {
      display: inline-block;
      margin: 12px 12px 12px 10px;
      width: 20px;
      height: 20px;
      background: url("../../../assets/img/left.png") no-repeat 50%;
      background-size: 20px;
    }
  }
  .right {
    width: 45px;
    height: 100%;
    float: right;
    span {
      display: inline-block;
      margin: 12px 12px 12px 10px;
      width: 20px;
      height: 20px;
      background: url("../../../assets/img/right.png") no-repeat 50%;
      background-size: 20px;
    }
  }
  .center {
    margin: 0 26px;
    float: left;
    display: flex;
    .li {
      width: 58px;
    }
  }
}
.li.active {
  color: red;
}
</style>