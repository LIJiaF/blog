<template>
  <div class="container">
    <!--主体-->
    <div class="main">
      <img src="../assets/images/loginLogo.png">
      <!--表单内容-->
      <div class="content">
        <el-alert v-show="isNull" :title="msg" type="error" :closable="false" show-icon center></el-alert>
        <div class="inputarea">
          <label for="username" class="iconfont icon-LC_icon_user_fill"></label>
          <input type="text" id="username" placeholder="请输入用户名" v-model="username">
        </div>
        <div class="inputarea">
          <label for="password" class="iconfont icon-icon2"></label>
          <input type="password" id="password" placeholder="请输入密码" v-model="password">
        </div>
        <div class="footer">
          <a href="javascript:;" class="btn active" @click="login()">登陆</a>
          <a href="javascript:;" class="btn" @click="register()">马上注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isNull: false,
        msg: '',
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        if (!this.username || !this.password) {
          this.isNull = true
        } else {
          this.$router.push('/admin/system');
          this.isNull = false
        }
      },
      register() {

      }
    }
  }
</script>

<style scoped>
  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: url("../assets/images/loginBg.jpg") center center;
  }

  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    margin-top: -250px;
    width: 500px;
  }

  .content {
    margin-top: 15px;
    padding: 50px 0;
    background: #F7F7C5;
    border-radius: 20px;
  }

  .inputarea {
    position: relative;
    margin: 0 auto;
    width: 300px;
  }

  .inputarea label {
    float: left;
    margin: 0 10px;
    color: #767676;
    height: 40px;
    line-height: 40px;
    font-size: 27px;
    cursor: pointer;
  }

  .inputarea input[type="text"],
  .inputarea input[type="password"] {
    display: block;
    width: 218px;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 2px solid #BCDEDD;
  }

  .inputarea input.tishi {
    border: 2px solid red;
  }

  .footer {
    margin-top: 30px;
  }

  .btn {
    display: block;
    margin: 10px auto;
    text-align: center;
    border: none;
    outline: none;
  }

  .active {
    width: 300px;
    height: 45px;
    line-height: 45px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    border-radius: 20px;
    background: #2DBBAD;
  }

  .active:hover {
    background: #5D79A8;
  }
</style>
