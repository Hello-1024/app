<template>
  <div class="type-bar">
    <div class="lis" v-for="(cate,index) in category" :key="index">
      <div class="lis-img">
        <img :src="cate.url" width="100%" height="100%" />
      </div>
      <span>{{cate.title}}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "show",
  data() {
    return {
      category: []
    };
  },
  created() {
    axios({
      url: "/static/show.json",
      method: "get"
    }).then(res => {
      this.category = JSON.parse(JSON.stringify(res.data.data.show));
      // window.console.log(this.category);
    });
  }
};
</script>

<style scoped>
.type-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.06rem 0.16rem 0.2rem;
}
.lis {
  width: 19.5%;
  text-align: center;
  margin-top: 0.2rem;
  font-size: 0.24rem;
}
.lis-img {
  width: 43px;
  height: 43px;
  margin: 0 auto;
  overflow: hidden;
}
.lis >>> span {
  display: block;
  margin-top: 8px;
}
</style>