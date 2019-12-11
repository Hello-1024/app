<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <!-- <transition :name="transitionName">
      <router-view></router-view>
    </transition>-->
    <main-tar-bar></main-tar-bar>
  </div>
</template>

<script>
import MainTarBar from "@/components/content/MainTarBar";

// import $ajax from "axios";

export default {
  name: "app",
  //注册主件
  components: {
    MainTarBar
  }
  // data() {
  //   return {
  //     transitionName: ""
  //   };
  // },
  // watch: {
  //   //使用watch 监听$router的变化
  //   $route(to, from) {
  //     //如果to索引大于from索引,判断为前进状态,反之则为后退状态
  //     if (to.meta.index > from.meta.index) {
  //       //设置动画名称
  //       this.transitionName = "slide-left";
  //     } else {
  //       this.transitionName = "slide-right";
  //     }
  //   }
  // }
};
</script>

<style>
@import "./assets/css/base.css";
/* //fade(过渡) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* //bounce(动画) */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
/* .slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
} */
</style>
