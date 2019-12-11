<template>
  <div class="theme-section">
    <div class="top"></div>
    <div class="buttem">
      <div class="theme" v-for="(item,index) in category" :key="index">
        <img :src="item.url" width="100%" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "advert",
  data() {
    return {
      category: []
    };
  },
  methods: {
    fun() {
      this.$ajax.get("/static/show.json").then(res => {
        this.category = JSON.parse(JSON.stringify(res.data.data.advertisement));
      });
    }
  },
  created() {
    this.fun();
  }
};
</script>

<style lang="scss" scoped>
.theme-section {
  margin: 0.24rem 0.24rem 0;
  border-radius: 0.24rem;
  overflow: hidden;
  background-color: #fff;
  .top {
    background: url("../../../assets/img/bgtp1.jpg");
    height: 59px;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0.27rem 0.3rem;
    box-sizing: border-box;
  }
  .theme {
    width: 50%;
    display: inline-block;
    border-right: 1px solid rgba(151, 151, 151, 0.3);
    box-sizing: border-box;
    overflow: hidden;
  }
  .theme:nth-child(even) {
    border-right: none;
  }
}
</style>