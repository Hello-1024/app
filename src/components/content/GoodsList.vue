<template>
  <div class="goods">
    <ul class="item">
      <li v-for="(item , index) in goods" :key="index">
        <div class="similar">
          <div class="similar-img">
            <img :src="item.url" alt width="100%" height="100%" />
          </div>
          <span class="text1">{{item.title}}</span>
          <span class="text2">{{item.text}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabul",
  props: {
    goods: {
      default() {
        return [];
      }
    }
  }
  //用props属性进行传数据，此时子组件已经获取到sell的数据了
};
</script>

<style lang="scss" scoped>
.goods {
  margin: 2px 0.24rem;
  .item {
    height: 830px;
    li {
      float: left;
      width: 50%;
      box-sizing: border-box;
      margin-bottom: 4px;
      &:nth-child(odd) {
        padding-right: 2px;
      }
      &:nth-child(even) {
        padding-left: 2px;
      }
      .similar {
        background-color: white;
        text-align: center;
        height: 271px;
        .similar-img {
          width: 176px;
          height: 176px;
        }
      }
      .text1 {
        height: 31px;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-top: 5px;
        line-height: 16px;
        margin-bottom: 3px;
        padding: 0 4px;
      }
      .text2 {
        color: red;
      }
    }
  }
}
</style>