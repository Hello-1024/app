<template>
  <div class="footer">
    <ul class="common-links">
      <li>
        <a>登录</a>
      </li>
      <li>
        <a>注册</a>
      </li>
      <li>
        <a>客户服务</a>
      </li>
      <li>
        <a href="#">返回顶部</a>
      </li>
    </ul>
    <ul class="common-icons">
      <li>
        <img src="@/assets/img/bottom1.png" alt />
      </li>
      <li>
        <img src="@/assets/img/bottom2.png" alt />
      </li>
      <li>
        <img src="@/assets/img/bottom3.png" alt />
      </li>
    </ul>
    <div class="common-text">Copyright © 2004-2019 激动GD.com 版权所有</div>
  </div>
</template>

<script>
export default {
  name: "bottom"
};
</script>

<style lang="scss" scoped>
.footer {
  padding-bottom: 49px;
  background-color: #fff;
  color: #848689;
  font-size: 14px;
  .common-links {
    border-bottom: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;
    height: 58px;
    padding: 16px 20px;
    text-align: center;
    li {
      border-right: 0.026667rem solid rgba(151, 151, 151, 0.3);
      margin-top: 3px;
      float: left;
      width: 25%;
      &:last-child {
        border-right: none;
      }
    }
  }
  .common-icons {
    border-bottom: 1px solid #e5e5e5;
    padding: 4px 7.5px;
    height: 69px;
    li {
      float: left;
      text-align: center;
      width: 33.3333%;
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
  .common-text {
    text-align: center;
    color: #848689;
    font-size: 1.86667vw;
    padding: 2vw 0;
  }
}
</style>