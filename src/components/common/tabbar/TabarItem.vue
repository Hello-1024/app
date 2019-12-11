<template>
  <!-- 所有的item都展示同一个图片，同一个文字 -->
  <div class="tab-bar-item" @click="itemclick">
    <!-- 给俩个插槽外层包装div,用于设置样式 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabarItem",
  props: {
    path: String,
    //动态绑定颜色
    activeColor: {
      type: String,
      default: "#d4237a"
    }
  },
  data() {
    return {
      // isActive: false
    };
  },
  //计算属性
  computed: {
    isActive() {
      //拿到处于活跃路由的pact
      // home -> item1(/home) = true
      // home -> item1(/cart) = false
      // 因为没找到 所以全部定义为false 如果找到了他就是不等于 -1了
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      // 向isActive询问如果你是处于活跃的时候就调用activeColor否者为空
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemclick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 22px;
  height: 22px;
  margin: 3px 0 0;
}
</style>
