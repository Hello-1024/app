<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{active: index === current}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      current: 0
    };
  },
  methods: {
    itemClick(index) {
      this.current = index;
      // 子组件使用$emit发送数据
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-control {
  display: flex;
  text-align: center;
  margin: 0.24rem 0.24rem 0;
  border-top-left-radius: 0.24rem;
  border-top-right-radius: 0.24rem;
  overflow: hidden;
  font-size: 14px;
  // position: sticky;
  // top: 20px;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
  background-color: white;
  span {
    padding: 7px;
  }
}

.active {
  color: #d4237a;
  span {
    border-bottom: 2px solid #d4237a;
  }
}
</style>