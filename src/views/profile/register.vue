<template>
  <div id="profile">
    <div class="page">
      <Head>
        <div slot="center">
          <div class="text-header">GD注册</div>
        </div>
      </Head>
      <div class="input">
        <div class="input-container">
          <input
            class="icon-clear"
            v-model="name"
            type="text"
            @click="inputFunc"
            @blur="phone"
            placeholder=" 请输入注册手机号"
          />
          <i @click="empty" class="icon-empty" ref="abc"></i>
        </div>
        <!-- 提示框 -->
        <div class="Tips">{{Tips}}</div>

        <div class="input-container">
          <input
            class="icon-clear"
            v-model="pwd"
            @blur="word"
            type="password"
            placeholder=" 请输入注册密码"
            v-show="!showPass"
          />
          <input
            class="icon-clear"
            v-model="pwd"
            @blur="word"
            type="text"
            placeholder=" 请输入注册密码"
            v-show="showPass"
          />
          <div @click="showPass = ! showPass">
            <span v-show="!showPass" class="checkbtn"></span>
            <span v-show="showPass" class="checkbtn"></span>
          </div>
        </div>
        <!-- 提示框 -->
        <div class="word">{{Tipstext}}</div>
      </div>
      <!-- 提示框 -->
      <div class="information">{{datalies}}</div>
      <div class="btn">
        <a href="javascript:" class="a-btn" @click="onbBtn">注册</a>
        <a href="javascript:" class="a-btn">
          <router-link to="Profile">一键登录</router-link>
        </a>
      </div>
      <p class="quick">
        <span>短信验证码登录</span>
        <span>手机快速注册</span>
      </p>
      <p class="policy_tip">
        <span>注册即代表您已同意</span>
        <a href="javascript:">GD隐私政策</a>
      </p>
    </div>
  </div>
</template>

<script>
import Head from "@/components/common/head/Head";
export default {
  name: "profile",
  components: {
    Head
  },

  data() {
    return {
      passWord: null,
      showPass: false,
      name: "",
      pwd: "",
      datalies: "",
      Tips: "",
      Tipstext: ""
    };
  },
  methods: {
    thLoadding() {
      //获取密码
      let vm = this;
      vm.passWord = vm.$refs.passWord.currentValue;
    },
    onbBtn() {
      this.$ajax({
        method: "POST",
        url: "/login/reg.php",
        data: {
          name: this.name,
          pwd: this.pwd
        },
        transformRequest: [
          function(data) {
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          }
        ],
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }).then(res => {
        // window.console.log(res.data);
        this.datalies = res.data;
        window.console.log(this.datalies);
      });
    },
    empty() {
      this.name = "";
      this.$refs.abc.style.display = "none";
    },
    inputFunc() {
      this.$refs.abc.style.display = "block";
    },
    //手机号的正则验证
    phone() {
      let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!phoneReg.test(this.name)) {
        this.Tips = "账号格式错误";
      } else {
        this.Tips = " ";
      }
    },
    //密码正则验证
    word() {
      if (this.pwd === "") {
        this.Tipstext = "密码不能为空";
      } else if (this.pwd.length < 6) {
        this.Tipstext = "密码不能少于6位数";
      } else {
        this.Tipstext = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  padding: 0 25px 25px;

  .text-header {
    text-align: center;
    font-size: 17px;
    color: #000;
  }

  .input {
    position: relative;
    .input-container {
      position: relative;
      margin-top: 20px;
      padding: 10px 0;
      border-bottom: 0.01rem solid #efefef;
      .icon-clear {
        font-size: 16px;
        height: 29px;
        width: 100%;
        border: 0;
      }
      .icon-empty {
        display: none;
        position: absolute;
        top: -1px;
        right: 70px;
        background: url("../../assets/img/cuo.png");
        width: 24px;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: 0;
      }
    }
    .Tips {
      position: absolute;
      right: 0;
      top: 18px;
      color: #f23030;
    }
    .checkbtn {
      position: absolute;
      right: 40px;
      top: 10px;
      width: 24px;
      height: 24px;
      background: url("../../assets/img/biyan.png");
      background-repeat: no-repeat;
      background-size: 100% auto;
      z-index: 99;
      &:last-child {
        background: url("../../assets/img/kaiyan.png");
        background-repeat: no-repeat;
        background-size: 100% auto;
        z-index: 99;
      }
    }
  }
  .information {
    font-size: 14px;
    line-height: 30px;
    color: green;
    text-align: center;
  }
  .word {
    font-size: 14px;
    line-height: 30px;
    color: #f23030;
    text-align: center;
  }
  .a-btn {
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: block;
    text-align: center;
    background-image: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);
    border-radius: 25px;
    font-size: 16px;
    color: #fff;
    margin-top: 15px;
    &:last-child {
      border: 1px solid #ff2000;
      color: #f10000;
      background: white;
      margin-top: 10px;
      a {
        color: #ff2000;
      }
    }
  }
  .quick {
    margin-top: 20px;
    font-size: 14px;
    display: flex;
    color: rgba(0, 0, 0, 0.4);
    justify-content: space-between;
  }
  .quick-login {
    margin-top: 88px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 12px;
    .txt-Login {
      color: rgba(0, 0, 0, 0.2);
      width: 140px;
      margin: -11px auto 0;
      background: #fff;
      text-align: center;
    }
    .quick-type {
      text-align: center;
      margin: 0.25rem 0 0.12rem;
      .logo {
        background: url("../../assets/img/qq.png");
        display: inline-block;
        width: 48px;
        color: rgba(0, 0, 0, 0.4);
        margin: 0 15px;
        background-size: 100% auto;
        padding-top: 53px;
        background-repeat: no-repeat;
        &:last-child {
          background: url("../../assets/img/wx.png");
          background-size: 100% auto;
          background-repeat: no-repeat;
        }
      }
    }
  }
  .policy_tip {
    text-align: center;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.3);
    margin-top: 6.533333rem;
    a {
      color: #4a90e2;
    }
  }
}
</style>