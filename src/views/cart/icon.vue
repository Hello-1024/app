<template>
  <div>
    <i class="icon_select" :class="{ckeck: isckeck}"></i>
  </div>
</template>

<script>
export default {
  props: {
    isckeck: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.icon_select {
  width: 20px;
  height: 20px;
  position: absolute;
  background-image: url("../../assets/img/sprite.png");
  background-position: -80px -40px;
  background-size: 116px 110px;
  left: 12px;
  top: 50%;
  margin-top: -10px;
}
.ckeck {
  background-image: url("../../assets/img/sprite.png");
  background-size: 116px 110px;
  background-position: 116px -138px;
  width: 20px;
  height: 20px;
}
</style>