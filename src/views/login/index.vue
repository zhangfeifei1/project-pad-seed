<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >

      <div class="title-container">
        <h3 class="title">后台管理系统</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <!-- <svg-icon icon-class="user" /> -->
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <!-- <svg-icon icon-class="password" /> -->
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <!-- <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" /> -->
        </span>
      </el-form-item>
      <el-form-item prop="code">
        <span class="svg-container">
          <!-- <svg-icon icon-class="user" /> -->
        </span>
        <el-input
          ref="code"
          v-model="loginForm.code"
          placeholder="验证码"
          name="code"
          type="text"
          tabindex="3"
          auto-complete="on"
        />
        <img :src="codeImg" class="login-code-img">
      </el-form-item>

      <el-button
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleLogin"
      >登 录</el-button>

      <div class="tips">
        <span style="margin-right:20px;">用户名: admin</span>
        <span> 密码: 123456</span>
      </div>

    </el-form>
  </div>
</template>

<script>
import {
  validUsername
} from '@/utils/validate'
import {
  randomLenNum
} from '@/utils/index'
// import {
//   login
// } from '@/api/login'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入6位数字密码'))
      } else {
        callback()
      }
    }
    const validateSmsCode = (rule, value, callback) => {
      if (value.length < 4) {
        callback(new Error('请输入4位以上验证码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '123456',
        code: '1234'
      },
      code: '',
      codeImg: '',
      randomStr: '',
      loginRules: {
        username: [{
          required: true,
          trigger: 'blur',
          validator: validateUsername
        }],
        password: [{
          required: true,
          trigger: 'blur',
          validator: validatePassword
        }],
        code: [{
          required: true,
          trigger: 'blur',
          validator: validateSmsCode
        }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  mounted() {
    this.randomStr = randomLenNum(4, true)
    // this.codeImg = process.env.VUE_APP_BASE_API + '/code?randomStr=' + this.randomStr;
    //         this.codeImg=response.data
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     // this.loading = true
      //     const params = {
      //       username: this.loginForm.username,
      //       password: this.loginForm.password,
      //       randomStr: this.randomStr,
      //       code: this.loginForm.code,
      //       grant_type: 'password',
      //       scope: 'server'
      //     }
      //     login(params).then(response => {
      //       this.loading = false
      //       this.$store.commit('user/SET_ACCESS_TOKEN', response.data.access_token)
      //       this.$store.commit('user/SET_REFRESH_TOKEN', response.data.refresh_token)
      //       this.$store.commit('user/SET_EXPIRES_IN', response.data.expires_in)
      //       // this.$store.commit('user/CLEAR_LOCK')
      this.$router.push({
        path: this.redirect || '/'
      })
      //     }).catch(() => {
      //       this.loading = false
      //     })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    }
  }
}

</script>

<style lang="scss">
  /* 修复input 背景不协调 和光标变色 */

  $bg:#283443;
  $light_gray:#fff;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
      color: $cursor;
    }
  }

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }

</style>

<style lang="scss" scoped>
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .login-form {
      position: relative;
      width: 520px;
      max-width: 100%;
      padding: 160px 35px 0;
      margin: 0 auto;
      overflow: hidden;
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }

</style>
