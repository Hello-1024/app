<template>
  <div id="home">
    <!-- 搜索框 -->
    <div class="hidden">
      <!-- 头部 -->
      <headers />
      <!-- 轮播图 -->
      <div class="swipe">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(banner,index) in swipe" :key="index">
            <img :src="banner" width="100%" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 类别导航 -->
    <show />
    <!-- 小广告 -->
    <advuert />
    <!-- 列表展示 -->
    <commodity />
    <div class="news_list">
      <a href="javascirpt:" class="list_icon">
        <img src="@/assets/img/list.jpg" width="100%" height="100%" alt />
      </a>
      <div class="swipetext">
        <van-swipe style="height: 16px;" :autoplay="3000" vertical :show-indicators="false">
          <van-swipe-item v-for="(item,index)  in text" :key="index">{{item}}</van-swipe-item>
        </van-swipe>
      </div>
      <a class="righttext" href="javascript:">更多</a>
    </div>
    <!-- 懒加载 -->
    <tab-control :titles="['推荐','品牌','潮流']" @tabClick="getChild">
      <!-- 父组件使用@,或者v-on绑定， 来监听子组件发送的数据 -->
    </tab-control>
    <!-- 懒加载内容 -->
    <goodslist :goods="goods[FPX]" />
    <!-- 底部 -->
    <BackTop />
    <bottom />
  </div>
</template>

<script>
import headers from "./component/header";
import show from "./component/show";
import advuert from "./component/advert";
import commodity from "./component/commodity.vue";
import TabControl from "@/components/content/TabControl";
import goodslist from "@/components/content/GoodsList";
import BackTop from "./component/BackTop";
import bottom from "./component/bottom";

export default {
  name: "Home",
  components: {
    headers,
    show,
    advuert,
    commodity,
    TabControl,
    goodslist,
    BackTop,
    bottom
  },
  data() {
    return {
      swipe: [
        require("@/assets/img/swipe1.jpg"),
        require("@/assets/img/swipe2.jpg"),
        require("@/assets/img/swipe3.jpg"),
        require("@/assets/img/swipe4.jpg")
      ],
      text: [
        "华为P30无奈清库存，8GB+128GB售价便宜千元",
        "iPhone X无奈退场，iPhone 11售价感人",
        "麒麟1000+6000毫安，华为Mate 40再创奇迹",
        "苹果5G逆袭！三款新iPhone曝光：要卖疯"
      ],
      goods: {
        sell: [],
        brand: [],
        Trend: []
      },
      FPX: "sell"
    };
  },
  methods: {
    //接收子组件 TabControl 数据
    getChild(index) {
      window.console.log(index);
      switch (index) {
        case 0:
          this.FPX = "sell";
          break;
        case 1:
          this.FPX = "brand";
          break;
        case 2:
          this.FPX = "Trend";
      }
    },
    //-----------------网路请求---------------
    fun() {
      this.$ajax.get("/static/lis.json").then(res => {
        this.goods.sell = JSON.parse(JSON.stringify(res.data.data.recommend));
        this.goods.brand = JSON.parse(JSON.stringify(res.data.data.brand));
        this.goods.Trend = JSON.parse(JSON.stringify(res.data.data.Trend));
        // window.console.log(this.goods.sell);
      });
    }
  },
  created() {
    this.fun();
  }
};
</script>

<style lang="scss" scoped>
#home {
  background: #f2f2f2;
}
.hidden {
  background: url("../../assets/img/bgtp.jpg") no-repeat;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.swipe {
  width: 350px;
  height: 140px;
  margin: 0 auto;
  border-radius: 0.24rem;
  overflow: hidden;
}
.news_list {
  border-radius: 9px;
  height: 30px;
  margin: 0 10px;
  display: flex;
  background-color: white;
  margin-top: 10px;
  .swipetext {
    width: 225px;
    margin-top: 7px;
    margin-left: 5px;
    line-height: 16px;
    /deep/.van-swipe-item {
      -webkit-line-clamp: 2 /*! autoprefixer: off; */;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    }
  }
  .list_icon {
    width: 73px;
    height: 16px;
    display: block;
    margin-top: 7px;
    margin-left: 8px;
  }
  .righttext {
    margin-left: 8px;
    line-height: 30px;
  }
}
</style>