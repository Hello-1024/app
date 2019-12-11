<template>
  <tar-bar>
    <tar-bar-item path="/home">
      <!--dom 中使用路径需要用~来识别配置的别名-->
      <img slot="item-icon" src="@/assets/img/home1.png" alt />
      <img slot="item-icon-active" src="@/assets/img/home.png" alt />
      <div slot="item-text">首页</div>
    </tar-bar-item>
    <tar-bar-item path="/category">
      <img slot="item-icon" src="@/assets/img/classify1.png" alt />
      <img slot="item-icon-active" src="@/assets/img/classify.png" alt />
      <div slot="item-text">分类</div>
    </tar-bar-item>
    <tar-bar-item path="/cart">
      <img slot="item-icon" src="@/assets/img/cart1.png" alt />
      <img slot="item-icon-active" src="@/assets/img/cart.png" alt />
      <div slot="item-text">购物车</div>
    </tar-bar-item>
    <tar-bar-item path="/profile">
      <img slot="item-icon" src="@/assets/img/my1.png" alt />
      <img slot="item-icon-active" src="@/assets/img/my.png" alt />
      <div slot="item-text">我的</div>
    </tar-bar-item>
  </tar-bar>
</template>

<script>
import TarBar from "../common/tabbar/TabBar";
import TarBarItem from "../common/tabbar/TabarItem";

export default {
  name: "MainTarBar",
  components: {
    TarBar,
    TarBarItem
  }
};
</script>

<style scoped>
</style>
