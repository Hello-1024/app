<template>
  <div class="tools" :class="isActive == true ? 'isActive' :''" @click="toTop(step)"></div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  props: {
    step: {
      //此数据是控制动画快慢的
      type: Number,
      default: 50
    }
  },
  methods: {
    toTop(i) {
      //参数i表示间隔的幅度大小，以此来控制速度
      document.documentElement.scrollTop -= i;
      if (document.documentElement.scrollTop > 0) {
        var c = setTimeout(() => this.toTop(i), 16);
      } else {
        clearTimeout(c);
      }
    },
    handleScroll() {
      //获取滚动距顶部的距离，显示
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // window.console.log(scrollTop);
      if (scrollTop > 200) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }
  },
  mounted: function() {
    window.addEventListener("scroll", this.handleScroll, true); // 监听（绑定）滚轮滚动事件
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); //离开页面需要移除这个监听的事件
  }
};
</script>

<style lang="scss" scoped>
.tools {
  display: none;
  position: fixed;
  bottom: 80px;
  right: 15px;
  width: 38px;
  height: 38px;
  background: url("../../../assets/img/top.png") no-repeat;
  background-size: 38px 38px;
  z-index: 20;
}
.isActive {
  display: block;
}
</style>