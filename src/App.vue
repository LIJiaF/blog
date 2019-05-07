<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: normal;
    list-style: none;
    text-decoration: none;
    outline: none;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  a {
    color: #409EFF;
  }

  /*快捷操作去区*/
  .operate {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
  }

  .shortcut {
    float: left;
    padding: 3px 6px;
    margin-right: 20px;
    font-size: 12px;
    color: #409EFF;
    border: 1px solid #409EFF;
    border-radius: 3px;
  }

  .shortcut i {
    font-size: 12px;
    color: #409EFF;
  }

  .shortcut:hover {
    color: #fff;
    cursor: pointer;
    background: #409EFF;
  }

  .shortcut:hover i {
    color: #fff;
  }

  .search {
    width: 230px;
  }

  /*表格*/
  .table {
    padding: 10px 15px;
  }

  /*分页*/
  .pagination {
    margin: 20px 0;
    text-align: center;
  }

  /*login.vue 报错提示*/
  .el-alert--error {
    background-color: #f56c6c5c;
    color: #f56c6c;
    width: 272px;
    height: 30px;
    margin: 0px auto 15px;
  }

  .el-alert__title {
    font-size: 13px;
    line-height: 25px;
  }

  /*index.vue 顶部和侧边栏*/
  .el-header {
    padding: 0;
    background: #222;
  }

  .el-main {
    padding: 0;
  }

  /*user_manage.vue 搜索框*/
  .el-input__inner {
    height: 32px;
    line-height: 32px;
  }

  .el-input__icon {
    line-height: 32px;
  }

  /*user/manage/add.vue 提示*/
  .el-alert--warning {
    background-color: #fff;
  }

  /*add.vue 头像*/
  .avatar-uploader {
    height: 100px;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }

  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }

  /*article/manage/list.vue 标签*/
  .el-tag {
    margin: 5px;
  }
</style>
