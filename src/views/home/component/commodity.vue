<template>
  <div class="couponRank">
    <div class="title">
      <img class="icon" src="https://gw.alicdn.com/tfs/TB1cE6hXv1H3KVjSZFBXXbSMXXa-171-31.png" alt />
      <div class="left">22点场</div>
      <van-count-down :time="time">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>:
          <span class="item">{{ timeData.minutes }}</span>:
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>

      <div class="right">
        更多秒杀
        <i class="tb"></i>
      </div>
    </div>
    <div class="lis">
      <ul>
        <li v-for="(item,index) in lits" :key="index">
          <div class="lis-img">
            <img :src="item.url" alt />
          </div>
          <div class="lis-text">
            <span class="text1">
              <em>￥</em>
              <b>{{item.title1}}</b>
            </span>
            <span class="text2">{{item.tiele2}}</span>
          </div>
        </li>
        <li class="stop">
          <i class="icon"></i>
          <span>查 看 全 部</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "commodity",
  data() {
    return {
      lits: [],
      time: 30 * 60 * 60 * 1000
    };
  },
  created() {
    axios({
      url: "/static/show.json",
      method: "get"
    }).then(res => {
      this.lits = JSON.parse(JSON.stringify(res.data.data.lis));
      // window.console.log(this.lits);
    });
  }
};
</script>

<style lang="scss" scoped>
.couponRank {
  margin: 0.24rem 0.24rem 0;
  border-radius: 0.24rem;
  overflow: hidden;
  background-color: white;
  padding: 0 0 0.22rem;
  color: red;
  .title {
    display: flex;
    position: relative;
    padding: 0.29rem 0.32rem 0.14rem;
    .icon {
      width: 85.5px;
      height: 15.5px;
    }
    .left {
      font-size: 12px;
      color: #232326;
      font-weight: 700;
      display: inline-block;
      line-height: 18px;
      margin-left: 5px;
    }
    .van-count-down {
      margin-left: 6px;
      margin-top: -1px;
    }
    .item {
      display: inline-block;
      width: 19px;
      height: 17px;
      margin-right: 3px;
      font-size: 12px;
      line-height: 17px;
      text-align: center;
      border: 1px solid #dfdfdf;
    }
    .right {
      position: absolute;
      right: 10px;
      font-size: 12px;
      display: flex;
      margin-top: 4px;
      .tb {
        display: block;
        width: 11px;
        height: 11px;
        background: url(//wq.360buyimg.com/wxsq_project/portal/m_jd_index/images/arrow_rt_2ccb8cd5.png)
          no-repeat;
        background-size: cover;
        margin-left: 3px;
      }
    }
  }
  .swipe {
    font-size: 16px;
    .custom {
      text-align: center;
    }
  }
  .lis {
    border-bottom-left-radius: 0.24rem;
    border-bottom-right-radius: 0.24rem;
    white-space: nowrap; /*文本不会换行，文本会在在同一行上继续*/
    overflow-y: auto; /*可滑动*/
    &::-webkit-scrollbar {
      display: none;
    }
    ul {
      transition: all 0.3s ease 0s;
      transform: translate3d(0px, 0px, 0px);
      width: 810.441px;
      background-color: #fff;
      padding-left: 5px;
      li {
        width: 76.3441px;
        float: left;
        .lis-img {
          width: 100%;
          padding: 3px 5px 0 5px;
          img {
            width: 100%;
            height: auto;
            overflow: hidden;
          }
        }
        .lis-text {
          text-align: center;
          .text1 {
            font-family: JDZhengHT-EN-Bold;
            margin-top: 10px;
            margin-left: -4px;
            display: block;
            color: #e93b3d;
            font-size: 16px;
            line-height: 16px;
            height: 16px;
            em {
              font-size: 11px;
              font-style: normal;
            }
          }
          .text2 {
            text-decoration: line-through;
            color: #999;
            font-size: 12px;
            line-height: 12px;
            margin: 7px 4px 7px 0;
            text-align: center;
            display: inline-block;
          }
        }
      }
      .stop {
        width: 20px;
        margin-left: 5px;
        color: #666;
        line-height: 22px;
        font-size: 10px;
        writing-mode: tb-rl;
        display: flex;
        .icon {
          width: 12px;
          height: 12px;
          background: url(//wq.360buyimg.com/fd/h5/wxsq_dev/m_jd_index/images/index/jd-sprites_c4019063.png) -107px -109px
            no-repeat;
          background-size: 200px 200px;
          display: block;
          margin: 12px 4px 10px 0;
        }
      }
    }
  }
}
</style>