<template>
  <div class="tool-bar">
    <el-menu background-color="#333" text-color="#ccc" active-text-color="#ccc" class="tool-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="file">文件</el-menu-item>
        <el-submenu index="2">
          <template slot="title">插入</template>
          <el-menu-item index="plane">平面</el-menu-item>
          <el-menu-item index="line">线</el-menu-item>
          <el-menu-item index="text">文字</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">模型</template>
            <el-menu-item index="box">box</el-menu-item>
            <el-menu-item index="sphare">sphare</el-menu-item>
            <el-menu-item index="teapot">teapot</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
  </div>
</template>

<script lang="javascript">
import { global } from './global.ts'
export default {
  name: "ToolBar",
  methods: {
    handleSelect(key, keyPath) {
      switch(key) {
        case "plane":
        case "line":
        case "text":
        case "box":
        case "sphare":
        case "teapot":
          global.eventHub.$emit('create', key);
        break;
      }
    }
  }
}
</script>

<style lang="less">
.tool-bar {
  background-color: #333;
  width: 100%;
  height: 100%;

  .tool-item {
    display: flex;
    align-items: center;
    color: #ccc;
    margin: 0 10px;
    cursor: pointer;
  }

  .tool-menu{
    border: none;

    .el-menu-item{
      &.is-active{
        border: none;
      }
    }
    .el-submenu{
      &.is-active{
        .el-submenu__title{
          border: none;
        }
      }
      .el-submenu__icon-arrow{
        display: none;
      }
    }
  }
}
</style>
