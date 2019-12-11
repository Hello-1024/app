<template>
  <div class="my">
    <Header />
    <div class="header_con">
      <div class="my_shadow">
        <div class="user_info">
          <div class="my_info">
            <img src="../../assets/img/touxi.png" width="100%" height="100%" alt />
          </div>
          <div class="personal">
            <div class="name">Holle-靓仔</div>
            <div class="pin">会员等级: 超级会员</div>
            <div class="tips">
              <div class="notice">京享值99%</div>
              <div class="notice">老板信用100%</div>
            </div>
          </div>
        </div>
        <div class="plus_black">
          <div class="inner">
            <div class="plus_title">
              <i class="icon"></i>
              尊享会员特权
            </div>
            <div class="plus_subtitle">立即查看</div>
          </div>
        </div>
      </div>
    </div>
    <div class="xlist_group">
      <div class="rel_container">
        <div class="list">
          <div class="images">
            <img />
          </div>
          <span class="list_test">待付款</span>
        </div>
        <div class="list">
          <div class="images">
            <img />
          </div>
          <span class="list_test">待收货</span>
        </div>
        <div class="list">
          <div class="images">
            <img />
          </div>
          <span class="list_test">退换／售后</span>
        </div>
        <div class="list">
          <div class="images">
            <img />
          </div>
          <span class="list_test">全部订单</span>
        </div>
      </div>
    </div>
    <div class="xlist_group">
      <div class="rel_container">
        <div class="list">
          <div class="btn">
            <span>0</span>张
          </div>
          <div class="list_item">购物券</div>
        </div>
        <div class="list">
          <div class="btn">开通有礼</div>
          <div class="list_item">白条</div>
        </div>
        <div class="list">
          <div class="btn">
            <span>0</span>个
          </div>
          <div class="list_item">京豆</div>
        </div>
        <div class="list">
          <div class="btn">
            <span>0</span>元
          </div>
          <div class="list_item">红包</div>
        </div>
        <div class="list">
          <div class="btn">
            <span>0</span>元
          </div>
          <div class="list_item">我的资产</div>
        </div>
      </div>
    </div>
    <div class="xlist_group">
      <div class="rel_container">
        <div class="list">
          <div class="num">0</div>
          <div class="text">商品收藏</div>
        </div>
        <div class="list">
          <div class="num">20</div>
          <div class="text">店铺收藏</div>
        </div>
        <div class="list">
          <div class="num">40</div>
          <div class="text">我的足迹</div>
        </div>
      </div>
    </div>
    <div class="activity-wrap">
      <div class="wrap_list">我的预约</div>
      <div class="wrap_list">京东火车票</div>
      <div class="wrap_list">应用推荐</div>
      <div class="wrap_list">用户福利</div>
      <div class="wrap_list">京东机票</div>
      <div class="wrap_list">京东酒店</div>
    </div>
  </div>
</template>

<script>
import Header from "./compoent/header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.my_shadow {
  overflow: hidden;
  border-radius: 0 0 300px 300px / 0 0 20px 20px;
  background: linear-gradient(90deg, #eb3c3c, #ff7459);
  box-sizing: border-box;
  padding-top: 25px;
  box-shadow: 0 2px 4px rgba(228, 57, 60, 0.4);
  .user_info {
    padding: 0 15px 10px;
    display: flex;
    align-items: center;
    .my_info {
      width: 62px;
      height: 62px;
    }
    .personal {
      line-height: 1.5;
      padding: 0 0 0 15px;
      .name {
        font-size: 14px;
        color: #ffff;
      }
      .pin {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.7);
      }
      .tips {
        display: flex;
        .notice {
          max-width: 150px;
          height: 16px;
          line-height: 16px;
          padding: 0 8px;
          margin: 6px 8px 0 0;
          border-radius: 10px;
          font-size: 10px;
          color: #fff;
          background: #c8483f;
          text-align: center;
          overflow: hidden;
        }
      }
    }
  }
  .plus_black {
    width: 100%;
    height: 37px;
    box-sizing: border-box;
    padding: 0 20px;
    color: #ffe678;
    font-size: 12px;
    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 7px 10px 10px;
      background: url("../../assets/img/myimgs.png") no-repeat left top;
      background-size: 100% 67px;
      .plus_title {
        position: relative;
        padding-left: 78px;
        line-height: 19px;
        .icon {
          position: absolute;
          content: "";
          width: 57px;
          height: 12px;
          left: 0;
          top: 3px;
          background: url(https://img11.360buyimg.com/jdphoto/s113x21_jfs/t1/44130/31/4355/2489/5cd2d9bdE7fd63a96/155d2b916c3ede73.png)
            no-repeat center;
          background-size: 100% 100%;
        }
      }
      .plus_subtitle {
        position: absolute;
        height: 18px;
        top: 10px;
        right: 20px;
      }
    }
  }
}
.xlist_group {
  line-height: 44px;
  margin: 15px 0;
  background-color: #fff;
  .rel_container {
    display: flex;
    height: 72px;
    .list {
      text-align: center;
      flex: 1;
      .images {
        background: url("../../assets/img/item1.png") 50% / auto 20px no-repeat;
      }
      &:nth-child(2) .images {
        background: url("../../assets/img/item2.png") 50% / auto 20px no-repeat;
      }
      &:nth-child(3) .images {
        background: url("../../assets/img/item3.png") 50% / auto 20px no-repeat;
      }
      &:nth-child(4) .images {
        background: url("../../assets/img/item4.png") 50% / auto 20px no-repeat;
      }
      .list_test {
        display: block;
        margin-top: -12px;
      }
    }
  }
}
.rel_container .list_item {
  margin-top: -12px;
}
.rel_container .btn {
  color: #e93b3d;
  span {
    font-size: 16px;
    margin-right: 3px;
  }
}
.rel_container .num {
  font-size: 16px;
  font-weight: 700;
  color: #333;
}
.rel_container .text {
  margin-top: -16px;
}
.activity-wrap {
  height: 130px;
  background-color: #fff;
  margin: 15px 0;
  .wrap_list {
    padding: 10px 0 8px;
    text-align: center;
    height: 65px;
    box-sizing: border-box;
    float: left;
    width: 25%;
  }
}

.my {
  background: #f2f2f2;
}
</style>