<template>
  <div>
    <Header />
    <div class="content" ref="left">
      <ul class="wrapper">
        <li
          v-for="(liItem,index) in item"
          :key="index"
          @click="listClick(index)"
          :class="{active: index === activated}"
        >
          <span>{{liItem}}</span>
        </li>
      </ul>
    </div>

    <div class="content-show">
      <div class="category" ref="right">
        <div class="branchList">
          <h4 class="h4">{{listname.text}}</h4>
          <ul class="category-ul">
            <!-- <li v-for="(top,index) in category" :key="index" @click="liclick(top.id)"> -->
            <li v-for="(top,index) in category" :key="index" @click="liclick(index)">
              <img class="imges" width="100%" height="100%" :src="top.url" alt />
              <div class="text">{{top.title}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./component/header";
import BScroll from "better-scroll";
export default {
  name: "category",
  data() {
    return {
      listname: [],
      category: [],
      activated: 0,
      item: [
        "热门推荐",
        "手机数码",
        "家用电器",
        "电脑办公",
        "美妆护肤",
        "母婴童装",
        "食品生鲜",
        "热门推荐",
        "手机数码",
        "家用电器",
        "电脑办公",
        "美妆护肤",
        "母婴童装",
        "食品生鲜",
        "宠物生活",
        "酒水饮料",
        "家具厨具",
        "玩具乐器"
      ]
    };
  },
  components: {
    Header
  },
  methods: {
    liclick(index) {
      //动态路由携带参数 path:'home'
      this.$router.push({
        name: "Listpage",
        params: {
          id: index
        }
      });
    },
    //点击事件
    listClick(index) {
      //点击更换样式
      this.activated = index;
      //点击请求json数据
      this.fun(index);
    },
    //分类请求
    fun(index) {
      this.$ajax.get("/static/category.json").then(res => {
        let data = JSON.parse(JSON.stringify(res.data.data[index]));
        this.listname = data.name;
        this.category = data.ul;
      });
    }
  },
  mounted() {
    this.fun(0);
    //滑动事件
    this.scroll = new BScroll(this.$refs.left, {
      click: true
    });
    this.scroll = new BScroll(this.$refs.right, {
      click: true
    });
  },
  activated() {
    window.console.log("刷新");
  }
};
</script>

<style  lang="scss" scoped>
.content {
  width: 86px;
  background: #f8f8f8;
  float: left;
  height: 574px;
  overflow: hidden;
  .wrapper {
    width: 86px;
    li {
      height: 46px;
      line-height: 46px;
      text-align: center;
      font-size: 14px;
      border-left: 2px solid transparent;
    }
  }
}

.content .wrapper li.active {
  color: red;
  background: white;
  border-left: 2px solid red;
}

.content-show {
  overflow: hidden;
  height: 574px;
  width: 289px;
  background: white;
  .category {
    height: 574px;
    width: 289px;
    .branchList {
      margin: 19px 7px 0;
      .h4 {
        font-size: 14px;
        color: #333;
      }
      .category-ul {
        margin-top: 9px;
        padding: 7px 10px 0;
        overflow: hidden;
        li {
          width: 32.8%;
          height: 107px;
          float: left;
          text-align: center;
          .imges {
            width: 70px;
            height: 70px;
          }
          .text {
            color: #333;
            height: 35px;
            margin-top: 2px;
            -webkit-box-pack: start;
          }
        }
      }
    }
  }
}
</style>