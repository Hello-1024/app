<template>
  <div id="listpage">
    <Header />
    <div class="pro_filter">
      <div class="barTabs">
        <a href="javascript:">综合</a>
        <a href="javascript:">销量</a>
        <a href="javascript:">店铺</a>
        <a href="javascript:">筛选</a>
      </div>
    </div>
    <div class="prolist_item">
      <div class="itemList" v-for="(list,index) in list" :key="index" @click="liclick(list.id)">
        <div class="list-img">
          <img :src="list.url" alt width="100%" height="100%" />
        </div>
        <div class="list-text">
          <div class="text_titel">{{list.title}}</div>
          <div class="text_attr">{{list.attr}}</div>
          <div class="text_pirce">{{list.pirce}}</div>
          <div class="text_small">{{list.small}}</div>
          <div class="text_shop">{{list.shop}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./component/header";
export default {
  data() {
    return {
      list: [],
      id: 0
    };
  },
  components: {
    Header
  },
  methods: {
    get() {
      //发送参数
      this.id = this.$route.params.id;
      //网络请求
      this.$ajax.get("/static/listpage.json").then(res => {
        let data = JSON.parse(JSON.stringify(res.data.data[this.id]));
        this.list = data.li;
        // window.console.log(this.list);
      });
    },
    //点击事件
    liclick(index) {
      //动态路由携带id path:'home'
      this.$router.push({ name: "details", params: { id: index } });
      // window.console.log(index);
    }
  },
  created() {
    //在模板编译进路由前调用created方法，触发接收函数
    this.get();
  }
};
</script>

<style lang="scss" scoped>
.pro_filter {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  border-bottom: 1px solid #f7f2f2;
  color: #333;
  .barTabs {
    display: flex;
    a {
      flex: 1;
    }
  }
}
.prolist_item {
  border-bottom: 1px solid #f7f2f2;
}
.itemList {
  padding: 5px 0 5px 10px;
  margin-bottom: 8px;
  background-color: #fff;
  .list-img {
    width: 120px;
    height: 120px;
    overflow: hidden;
    float: left;
  }
  .list-text {
    padding-bottom: 8px;
    box-sizing: border-box;
    padding: 0 10px;
    overflow: hidden;
    line-height: 1;
    .text_titel {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      -webkit-box-orient: vertical;
      font-size: 14px;
      margin-top: 8px;
      color: #333;
      line-height: 1.36;
      height: 38px;
    }
    .text_attr {
      margin: 3px 0 1px;
      height: 15px;
      overflow: hidden;
    }
    .text_pirce {
      font-size: 18px;
      color: #e93b3d;
      margin-top: 9px;
      margin-right: 2px;
      display: inline-block;
      height: 18px;
    }
    .text_small {
      height: 20px;
      padding: 5px 0 2px;
      box-sizing: border-box;
      line-height: 1.2;
      color: #999;
    }
    .text_shop {
      box-sizing: border-box;
      padding-top: 4px;
      height: 19px;
      color: #999;
    }
  }
}
#listpage {
  height: 100vh;
  background: white;
  position: relative;
  z-index: 9;
}
</style>