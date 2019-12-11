<template>
  <div>
    <p class="btn">
      <button v-for="(btn,index) in item" :key="index" @click="showDetails(index)">{{btn}}</button>
      <!-- <button @click="showDetails(1)">NO1</button>
      <button @click="showDetails(2)">NO2</button>
      <button @click="showDetails(3)">NO3</button>
      <button @click="showDetails(4)">NO4</button>-->
    </p>
    <div style="background:#3FB883" ref="listshow1">1111111</div>
    <div style="background:#B26031" ref="listshow2">2222222</div>
    <div style="background:#F0686E" ref="listshow3">3333333</div>
    <div style="background:#369BEE" ref="listshow4">4444444</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showIndex: null,
      item: ["NO1", "NO2", "NO3", "NO4"]
    };
  },
  methods: {
    showDetails(index) {
      index++;
      let el = document.getElementsByClassName(`listshow${index}`)[0];
      window.console.log(el.offsetTop);
      window.console.log(index);
      if (this.showIndex == index) {
        this.showIndex = null;
      } else {
        this.showIndex = index;
      }
      this.$nextTick(function() {
        // 平滑滑动【这里-100是当前元素上边界相对body的上偏移量】
        window.scrollTo({ behavior: "smooth", top: el.offsetTop - 44 });
      });
    }
  }
};
</script>

<style scoped>
div {
  width: 100%;
  height: 800px;
}
.listshow1 {
  height: 500px;
}
.listshow2 {
  height: 300px;
}
.listshow3 {
  height: 600px;
}
.listshow4 {
  height: 345px;
}
.btn {
  position: fixed;
  top: 27px;
  left: 0;
}
</style>