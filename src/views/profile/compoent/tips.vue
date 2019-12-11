<template>
  <div>
    <div class="form-group" style="display: flex;">
      <div>
        <input
          type="text"
          id="code"
          @blur="word"
          v-model="code"
          class="code"
          placeholder="请输入您的验证码"
        />
      </div>
      <div class="login-code" @click="refreshCode">
        <!--验证码组件-->
        <Sidentify :identifyCode="identifyCode"></Sidentify>
      </div>
    </div>
  </div>
</template>

<script>
import Sidentify from "./Sidentify ";
export default {
  components: {
    Sidentify
  },
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      code: "" //text框输入的验证码
    };
  },
  methods: {
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
    word() {
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
    }
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  }
};
</script>

<style lang="scss" scoped>
.code {
  width: 124px;
  height: 31px;
  border: 1px solid rgba(186, 186, 186, 1);
}
.login-code {
  cursor: pointer;
}
</style>