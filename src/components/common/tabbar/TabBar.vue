<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1); */
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
}
</style>
