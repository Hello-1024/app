<template>
  <div>
    <p>666</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEnd: false, //倒计时是否结束
      endTime: "2020-10-29 08:00:00" //应为接口获取到的结束时间
    };
  },
  created() {
    let that = this;
    that.setEndTime();
  },
  methods: {
    setEndTime() {
      var that = this;
      var interval = setInterval(function timestampToTime() {
        var date = new Date(that.endTime) - new Date(); //计算剩余的毫秒数
        window.console.log(interval);

        let day = parseInt(date / 1000 / 60 / 60 / 24, 10); //计算剩余多少天
        let Time = parseInt((date / 1000 / 60 / 60) % 24, 10); //计算剩余多少时
        if (Time < 10) {
          Time = "0" + Time;
        }
        let Minute = parseInt((date / 1000 / 60) % 60, 10); //计算剩余的分钟
        if (Minute < 10) {
          Minute = "0" + Minute;
        }
        let second = parseInt((date / 1000) % 60, 10); //计算剩余的秒数
        if (second < 10) {
          second = "0" + second;
        }
        // return day + Time + Minute + second;
        window.console.log(
          parseInt(day),
          parseInt(Time),
          parseInt(Minute),
          parseInt(second)
        );
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>