<template>
  <div>
    <el-form ref="loginForm"
             :model="form"
             :rules="rules"
             label-width="0px"
             class="login-box">
      <h3 class="login-title">系统登录</h3>
      <!-- 账号框 -->
      <el-form-item prop="username">
        <el-input type="text"
                  prefix-icon="el-icon-user-solid"
                  placeholder="账号"
                  tabindex="1"
                  v-model="form.username" />
      </el-form-item>
      <!-- 密码框 -->
      <el-form-item prop="password">
        <el-input type="password"
                  prefix-icon="iconfont icon-lock"
                  placeholder="密码"
                  tabindex="2"
                  class="login-input-pwd"
                  v-model="form.password"
                  show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   class="login-input"
                   v-on:click="onsubmit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="温馨提示"
               :visible.sync="dialogVisiable"
               width="30%"
               :before-close="handleClose">
      <span>请输入账号和密码</span>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="dialogVisible = false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#2d3a4b')
  },
  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  },
  name: "Login",
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      //表单验证，需要在 el-form-item 元素中增加prop属性
      rules: {
        username: [
          { required: true, message: "账号不可为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不可为空", tigger: "blur" }
        ]
      },

      //对话框显示和隐藏
      dialogVisible: false
    }
  },
  methods: {
    onSubmit (formName) {
      //为表单绑定验证功能
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //使用vue-router路由到指定界面，该方式称为编程式导航
          this.$router.push('/main');
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss">
.login-box {
  border: 0px solid #dcdfe6;
  width: 380px;
  margin: 170px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
}
.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  font-size: 26px;
  color: #dcdfe6;
}
.login-input {
  width: 100%;
}
.login-input-pwd {
  margin: 18px 0 0px 0px;
}
.svg-container {
  display: inline-block;
}
.el-input__inner {
  background-color: #283443;
  border: 1px solid #464747;
}
</style>
