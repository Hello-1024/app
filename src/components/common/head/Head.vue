<template>
  <!-- <div id="head" :class="navBarFixed == true ? 'navBarWrap' :''"> -->
  <div id="head">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>


<script >
export default {
  name: "Head"
  // data() {
  //   return {
  //     navBarFixed: false
  //   };
  // },
  // mounted() {
  //   window.addEventListener("scroll", this.hidemenu); //监听滚动事件
  // },
  // methods: {
  //   hidemenu() {
  //     let scrollTop =
  //       window.pageYOffset ||
  //       document.documentElement.scrollTop ||
  //       document.body.scrollTop;
  //     // window.console.log(scrollTop);
  //     //当滚动超过0时，实现吸顶效果（导航高度为45）
  //     if (scrollTop > 0) {
  //       this.navBarFixed = true;
  //     } else {
  //       this.navBarFixed = false;
  //     }
  //   }
  // }
};
</script>


<style scoped>
#head {
  display: flex;
  height: 44px;
  line-height: 44px;
}
.left,
.right {
  width: 55px;
  text-align: center;
}
.center {
  flex: 1;
}
/* .navBarWrap {
  position: fixed;
  top: 0;
  background-color: #e43130;
  z-index: 999;
  width: 100%;
} */
</style>