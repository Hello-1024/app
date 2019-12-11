<template>
  <div id="Detail-Pages">
    <!-- 接收参数 -->
    <Head @titleClick="titleClick" />
    <div class="listshow1" id="swipe">
      <van-swipe indicator-color="red">
        <van-swipe-item v-for="(imgs,index) in introduce.swipe" :key="index">
          <img :src="imgs.url" width="100%" height="100%" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品价格 -->
    <div class="priceWrap">
      <div class="wrap-price">
        <span>
          <b>¥</b>
          <b class="b">{{introduce.Price}}</b>
          <b>.00</b>
          <div class="cheaper">
            <i class="left">
              <img src="@/assets/img/qian.png" width="100%" height="100%" alt />
            </i>
            <span class="cheaper_info">降价提醒</span>
            <i class="right">
              <!-- <img src="@/assets/img/qian.png" width="100%" height="100%" alt /> -->
            </i>
            <span class="cheaper_info">收藏</span>
          </div>
        </span>
      </div>
    </div>
    <!-- 商品介绍 -->
    <div class="wrap">
      <div class="wrap-Title">
        <i class="mod_tag">
          <img src="@/assets/img/ziying.png" width="100%" height="100%" alt />
        </i>
        <div>{{introduce.Title}}</div>
      </div>
      <div class="Recommend">{{introduce.Recommend}}</div>
    </div>
    <!-- 商品优惠 -->
    <div class="discount">
      <span class="title">优惠</span>
      <div class="content">
        <div class="detail_prom">
          <div class="prom_item">
            <div class="tag">
              <em>{{introduce.ame}}</em>
            </div>
            <div class="line">{{introduce.lina}}</div>
          </div>
          <div class="prom_item">
            <div class="tag">
              <em>{{introduce.bme}}</em>
            </div>
            <div class="line">{{introduce.linb}}</div>
          </div>
          <div class="prom_item">
            <div class="tag">
              <em>{{introduce.cme}}</em>
            </div>
            <div class="line">{{introduce.linc}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品评价 -->
    <div class="listshow2" id="detail_row">
      <h3 class="tit">评价</h3>
      <p class="good">好评 98%</p>
    </div>
    <!-- 商家店铺 -->
    <div ref="mylogin" class="detail_shop">
      <div class="shop_info">
        <span class="shop_logo">
          <img :src="introduce.images" alt />
        </span>
        <div class="shop_name">
          <span>{{introduce.dianneme}}</span>
          <em class="jd">GD自营</em>
        </div>
      </div>
      <div class="info_tab">
        <div class="tab_item">
          <p class="num">17184620</p>
          <p class="desc">粉丝人数</p>
        </div>
        <div class="tab_item">
          <p class="num">17184620</p>
          <p class="desc">粉丝人数</p>
        </div>
      </div>
      <div class="shop_btns">
        <button class="mod_btn">关注店铺</button>
        <button class="mod_btn">进入店铺</button>
      </div>
    </div>
    <!-- 商品详情 -->
    <div class="listshow3" id="Detail">
      <img
        src="//img12.360buyimg.com/cms/jfs/t1/72801/23/15128/194975/5dc7e34dE8eade602/a063778a3a487371.png!q70.webp"
        alt
      />
      <img
        src="//img13.360buyimg.com/cms/jfs/t1/52388/18/10385/1411768/5d77f9b4E2d7878f2/e7c050794c278d17.jpg!q70.dpg.webp"
        alt
      />
      <img
        src="//img12.360buyimg.com/cms/jfs/t1/40404/18/10660/539422/5d7b1c64Ed482a344/c7a223e22eaf0571.jpg!q70.dpg.webp"
        alt
      />
    </div>
    <foot @btnclick="btnclick" />
  </div>
</template>

<script>
import Head from "./component/header";
import foot from "./component/foot";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Detail-Pages",
  components: {
    Head,
    foot
  },
  data() {
    return {
      detaID: "",
      listdata: [],
      introduce: [],
      list: [],
      showIndex: null
    };
  },
  created() {
    //详情页拿到id 获取相对应json的数据
    this.detaID = this.$route.params.id;
  },

  methods: {
    //网络请求
    fun() {
      this.$ajax.get("/static/details.json").then(res => {
        this.listdata = JSON.parse(JSON.stringify(res.data.list));
        // 结合ES6谈一下JS里面的find()方法
        let single = this.listdata.find(item => {
          return item.id == this.detaID;
        });
        this.introduce = single;
        // window.console.log(this.introduce);
      });
    },
    titleClick(index) {
      // window.console.log(index);
      index++;
      let el = document.getElementsByClassName(`listshow${index}`)[0];
      // window.console.log(el.scrollTop);
      if (this.showIndex == index) {
        this.showIndex = null;
      } else {
        this.showIndex = index;
      }
      this.$nextTick(function() {
        // 平滑滑动【这里-100是当前元素上边界相对body的上偏移量】
        window.scrollTo({ behavior: "smooth", top: el.offsetTop - 44 });
      });
    },
    btnclick() {
      const textlist = {};
      textlist.img = this.introduce.swipe[0].url;
      textlist.Price = this.introduce.Price;
      textlist.Title = this.introduce.Title;
      textlist.id = this.introduce.id;
      //绑定(textlist)
      window.console.log(textlist);
      this.addCart(textlist);
      // this.$store.dispatch("addCart", textlist);
    },
    // 映射 addCart(textlist)到mutations
    ...mapMutations(["addCart"])
  },
  computed: {
    // mapState 的作用就是帮我们把一个对象或数组里的值转化成计算属性的写法。将传入的数组或对象转成 computed 计算属性能够识别的代码。
    ...mapState(["cart"])
  },
  mounted() {
    this.fun();
  }
};
</script>

<style lang="scss" scoped>
.headers {
  display: none;
}
#swipe {
  width: 100%;
  height: 375px;
  //深度作用选择器 /deep/
  /deep/ .van-swipe__indicator {
    background-color: #b9b9b9;
  }
}
.priceWrap .wrap-price {
  background: white;
  padding: 16px 10px 5px;
  color: #e4393c;
  font-size: 16px;
  .b {
    font-size: 24px;
  }
  .cheaper {
    float: right;
    padding-top: 10px;
    position: relative;
    .cheaper_info {
      margin: 0 5px 0 5px;
      font-size: 12px;
      color: #999;
    }
    .left {
      position: absolute;
      top: -6px;
      left: 22px;
      width: 15px;
      height: 15px;
    }
    .right {
      position: absolute;
      top: -10px;
      left: 63px;
      width: 25px;
      height: 25px;
      background-image: url("../../assets/img/favour.png");
      background-size: 25px 60px;
      background-position: 0 -35px;
    }
  }
}
.wrap {
  padding: 0 10px 15px;
  background: white;
  overflow: hidden;
  .wrap-Title {
    .mod_tag {
      width: 26px;
      height: 15px;
      display: block;
      margin-right: 5px;
      float: left;
    }
    font-weight: 700;
    line-height: 24px;
    color: #333;
    font-size: 16px;
  }
  .Recommend {
    padding: 5px 0 0;
    line-height: 1.3;
  }
}
.discount {
  margin-top: 10px;
  background: white;
  position: relative;
  padding: 12px 30px 5px 50px;
  font-size: 12px;
  line-height: 18px;
  .title {
    position: absolute;
    left: 10px;
    top: 12px;
    color: #999;
  }
  .detail_prom {
    margin-bottom: 7px;
    color: #333;
    .prom_item {
      display: flex;
      margin: 5px 0;
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
      .tag {
        margin-right: 5px;
        padding-top: 1px;
        em {
          border: 1px solid #e4393c;
          color: #e4393c;
          font-style: normal;
        }
      }
    }
  }
}
#detail_row {
  margin-top: 10px;
  padding: 0 10px;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  .tit {
    font-weight: 400;
    font-size: 16px;
    color: #333;
    padding: 10px 0;
    float: left;
  }
  .good {
    margin-left: 45px;
    height: 44px;
    color: #e4393c;
    line-height: 44px;
  }
}

.detail_shop {
  padding: 10px;
  font-size: 14px;
  color: #333;
  // height: 146px;
  margin-top: 10px;
  background: white;
  .shop_info {
    margin-bottom: 10px;
    .shop_logo {
      position: relative;
      display: block;
      float: left;
      width: 90px;
      padding-top: 30px;
      margin-right: 10px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30px;
      }
    }
    .shop_name {
      height: 29px;
      line-height: 29px;
      .jd {
        display: inline-block;
        width: 49px;
        height: 15px;
        line-height: 15px;
        text-align: center;
        border-radius: 1px;
        margin-left: 5px;
        font-size: 10px;
        color: #fff;
        background-color: #e4393c;
        font-style: normal;
      }
    }
  }
  .info_tab {
    display: flex;
    margin: 10px 0;
    .tab_item {
      flex: 1;
      padding: 2px 0;
      text-align: center;
      border-right: 1px solid #ddd;
      &:last-child {
        border-right: none;
      }
      .num {
        margin-bottom: 3px;
        font-size: 14px;
      }
      .desc {
        margin-top: 3px;
        font-size: 10px;
        color: #999;
      }
    }
  }
  .shop_btns {
    display: flex;
    .mod_btn {
      flex: 1;
      border: 1px solid #ccc;
      margin: 0 10px 0 0;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      background-color: #fff;
    }
  }
}
#Detail {
  margin-top: 10px;
  margin-bottom: 50px;
  img {
    width: 100%;
    height: 100%;
  }
}

#Detail-Pages {
  position: relative;
  z-index: 9;
  background: #f2f2f2;
}
</style>