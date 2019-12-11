<template>
  <div class="cart">
    <div class="header">
      <Head>
        <div slot="left">
          <span @click="prev">
            <img width="100%" height="100%" src="@/assets/img/left.png" alt />
          </span>
        </div>
        <div slot="center">购物车</div>
        <div slot="right">
          <span>
            <img width="100%" src="@/assets/img/right.png" alt />
          </span>
        </div>
      </Head>
    </div>
    <div class="section">
      <div class="head_wrap">
        <i class="icon_dui">
          <span></span>
        </i>
        <i class="icon_logo">GD</i>
        <div class="oneline">高调自营</div>
      </div>
      <div class="cart_item" v-for="(item,index) in value" :key="index">
        <div class="selected">
          <!-- 选择 -->
          <icon ref="text" :isckeck="item.ckecked" @click.native="btnClick(index)" />
          <div class="images">
            <img :src="item.img" alt width="100%" height="100%" />
          </div>
          <div class="name">{{item.Title}}</div>
          <div class="sku_line">丹霞橙，8GB+256GB</div>
          <div class="discount_line">白条12期免息</div>
          <div class="price_line">
            <div class="price">
              <i>￥</i>
              <span>{{item.Price}}</span>
            </div>
            <div class="num_wrap">
              <span class="plus" @click="reduce(item)">-</span>
              <input type="number" v-model="item.count" min="1" />
              <span class="plus" @click="plus(item)">+</span>
            </div>
          </div>
          <div class="m_action">
            <span>移入关注</span>
            <span class="item" @click="itemclick(item.id)">删除</span>
          </div>
        </div>
      </div>
    </div>
    <fixBar :swi="swi" @click.native="app" />
  </div>
</template>

<script>
import Head from "@/components/common/head/Head";
import icon from "./icon";
import fixBar from "./fixBar";
// import { mapState } from "vuex";
export default {
  name: "cart",
  data() {
    return {
      value: [],
      swi: true
    };
  },
  components: {
    Head,
    icon,
    fixBar
  },
  methods: {
    //数量减
    reduce(item) {
      this.$store.commit("add", item);
    },
    //数量加
    plus(item) {
      this.$store.commit("app", item);
    },
    prev() {
      this.$router.go(-1);
    },
    //选择按钮
    btnClick(index) {
      if (this.value[index].ckecked) {
        this.value[index].ckecked = false;
      } else {
        this.value[index].ckecked = true;
      }
    },
    //全选
    app() {
      this.swi = !this.swi;
      window.console.log(this.swi);
      for (let i = 0; i < this.value.length; i++) {
        this.value[i].ckecked = !this.value[i].ckecked;
      }
    },
    //删除事件
    itemclick(id) {
      window.console.log(111);
      this.$dialog
        .alert({
          message: "是否确定删除该商品！",
          showCancelButton: true
        })
        .then(() => {
          this.$store.commit("deleteCar", id);
        });
    }
  },
  created() {
    this.value = this.$store.state.cart;
  }
  // computed: {
  //   ...mapState(["cart"])
  // },
  // computed: {
  // value() {
  //   return this.$store.state.cart;
  // }
  // }
};
</script>

<style lang="scss" scoped>
.cart {
  height: 100vh;
  background: white;
  position: relative;
  z-index: 9;
}
.header {
  color: #333;
  font-size: 18px;
  text-align: center;
  .left span {
    width: 20px;
    height: 20px;
    display: block;
    margin: 7px 0 0 17px;
  }
  .right span {
    width: 20px;
    height: 20px;
    display: block;
    margin: 0 auto;
  }
}
.section {
  border-top: 1px solid #f7f2f2;
  .head_wrap {
    height: 46px;
    line-height: 46px;
    display: flex;
    .icon_dui {
      width: 42px;
      height: 100%;
      display: block;
      position: relative;
      span {
        position: absolute;
        left: 50%;
        margin-left: -10px;
        margin-top: 11px;
        background-image: url("../../assets/img/sprite.png");
        background-position: 1px -27px;
        background-size: 116px 110px;
        width: 22px;
        height: 22px;
      }
    }
    .icon_logo {
      margin-right: 5px;
      font-style: normal;
    }
    .oneline {
      color: #333;
      font-size: 16px;
      font-weight: 700;
    }
  }
  .cart_item {
    border-top: 1px solid #f7f2f2;
  }

  .selected {
    color: #333;
    z-index: 1;
    position: relative;
    min-height: 100px;
    padding: 20px 0 20px 150px;
    background: #fff;
    .m_action {
      float: right;
      line-height: 20px;
      span {
        margin-right: 10px;
      }
      .item {
        color: #f2270c;
      }
    }
    .images {
      position: absolute;
      left: 40px;
      width: 100px;
      height: 100px;
    }
    .name {
      font-size: 14px;
      padding-right: 10px;
      margin-bottom: 3px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .sku_line {
      margin: 5px 10px 0 0;
      color: #666;
    }
    .discount_line {
      margin: 5px 10px 0 0;
      height: 20px;
      overflow: hidden;
      white-space: nowrap;
      line-height: 20px;
      color: #f2270c;
    }
    .price_line {
      display: flex;
      justify-content: space-between;
      margin: 5px 10px 5px 0;
      line-height: 20px;
      .price {
        font-size: 16px;
        line-height: 16px;
        color: #f2270c;
        i {
          font-style: normal;
          font-size: 12px;
        }
      }
      .num_wrap {
        display: flex;
        input {
          width: 30px;
          text-align: center;
          border: none;
          background: #f1f1f1;
          margin: 0 1px 0 1px;
        }
        .plus {
          width: 20px;
          height: 20px;
          background: #f1f1f1;
          text-align: center;
          font-size: 20px;
        }
      }
    }
  }
}
</style>  