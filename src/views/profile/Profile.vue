<template>
  <div id="profile">
    <div class="page">
      <Head>
        <!-- <div slot="left"></div> -->
        <div slot="center">
          <div class="text-header">GD登录</div>
        </div>
      </Head>
      <div class="input">
        <div class="input-container">
          <input
            class="icon-clear"
            v-on:click="inputFunc"
            @blur="phone"
            type="text"
            v-model="name"
            placeholder=" 用户名/邮箱/手机号"
          />
          <i @click="empty" class="icon-empty" ref="abc"></i>
        </div>
        <div class="Tips">{{Tips}}</div>
        <div class="input-container">
          <!-- <input class="icon-clear" type="password" v-model="pwd" placeholder=" 请输入密码" /> -->
          <input
            class="icon-clear"
            @blur="word"
            v-model="pwd"
            type="password"
            placeholder=" 请输入登录密码"
            v-show="!showPass"
          />
          <input
            class="icon-clear"
            @blur="word"
            v-model="pwd"
            type="text"
            placeholder=" 请输入登录密码"
            v-show="showPass"
          />
          <div @click="showPass = ! showPass">
            <span v-show="!showPass" class="checkbtn"></span>
            <span v-show="showPass" class="checkbtn"></span>
          </div>
          <div class="textbtn">忘记密码</div>
        </div>
        <div class="input-container">
          <input
            class="icon-clear"
            @blur="yanzheng"
            v-model="code"
            type="text"
            placeholder=" 请输入验证码"
          />
          <div class="yanzheng" @click="refreshCode">
            <Sidentify :identifyCode="identifyCode" />
          </div>
        </div>
        <!-- 提示框 -->
        <div class="word">{{Tipstext}}</div>
      </div>
      <!-- 提示框 -->
      <div class="information">{{datalies}}</div>
      <div class="btn">
        <a
          href="javascript:"
          ref="one"
          class="a-btn"
          v-on:click="onbBtn"
          @click="Myclick"
          v-if="block"
        >登录</a>
        <a href="javascript:" class="a-btn">
          <router-link to="register">一键注册</router-link>
        </a>
      </div>
      <p class="quick">
        <span>短信验证码登录</span>
        <span>手机快速注册</span>
      </p>
      <div class="quick-login">
        <h4 class="txt-Login">其他登录方式</h4>
        <p class="quick-type">
          <a href="javascipt" class="logo">QQ</a>
          <a href="javascipt" class="logo">微信</a>
        </p>
      </div>
      <p class="policy_tip">
        <span>登录即代表您已同意</span>
        <a href="javascript:">GD隐私政策</a>
      </p>
    </div>
  </div>
</template>

<script>
import Head from "@/components/common/head/Head";
import Sidentify from "./compoent/Sidentify ";
export default {
  name: "profile",
  components: {
    Head,
    Sidentify
  },
  data() {
    return {
      block: true,
      passWord: null,
      showPass: false,
      name: "",
      pwd: "",
      datalies: "",
      Tips: "",
      Tipstext: "",
      identifyCodes: "1234567890",
      identifyCode: "",
      code: "", //text框输入的验证码
      text: false
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
        url: "/login/login.php",
        data: {
          username: this.name,
          password: this.pwd
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
        window.console.log(res.data);
        this.datalies = res.data;
      });
    },
    inputFunc() {
      this.$refs.abc.style.display = "block";
    },
    empty() {
      this.$refs.abc.style.display = "none";
      this.name = "";
    },
    //手机号的正则验证
    phone() {
      let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!phoneReg.test(this.name) || this.name === "") {
        // alert("账号格式错误");
        this.Tips = "账号格式错误";
      } else {
        this.Tips = " ";
      }
    },
    //密码正则验证
    word() {
      if (this.pwd === "") {
        this.Tipstext = "密码不能为空";
        this.$refs.one.style.background =
          "linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba)";
      } else {
        this.Tipstext = "";
        this.$refs.one.style.background =
          "linear-gradient(90deg,#f10000,#ff2000 73%,#ff4f18)";
        return (this.text = true);
      }
    },
    //验证码
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      window.console.log(this.identifyCode);
    },
    //验证码判断
    yanzheng() {
      if (this.code == "") {
        alert("请输入验证码");
        return;
      }
      if (this.identifyCode !== this.code) {
        this.code = "";
        this.refreshCode();
        alert("请输入有效验证码");
        return;
      }
    },
    Myclick() {
      if (this.text == true) {
        this.$router.push("/My");
        window.console.log(1);
      }
    }
  },
  //验证码
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
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
        right: 100px;
        background: url("../../assets/img/cuo.png");
        width: 24px;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: 0;
      }
      .yanzheng {
        position: absolute;
        right: 0;
        top: 5px;
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
      right: 100px;
      top: 12px;
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
    .textbtn {
      position: absolute;
      height: 23px;
      line-height: 23px;
      right: 0;
      top: 12.5px;
      color: #000;
      text-align: center;
      padding: 0 10px 0 15px;
      border-left: 1px solid #ccc;
      font-size: 14px;
    }
  }
  .information {
    font-size: 14px;
    line-height: 30px;
    color: #f23030;
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
    a {
      color: #fff;
    }
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
    margin-top: 15px;
    a {
      color: #4a90e2;
    }
  }
}
</style>