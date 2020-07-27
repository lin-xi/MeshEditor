<template>
  <div class="tool-bar">
    <div class="tool-item">
      <i class="icon-grid"></i>
      平面
    </div>
    <div class="tool-item">
      <i class="icon-grid"></i>
      网格
    </div>
  </div>
</template>

<script lang="javascript">
export default {
  name: "ToolBar"
}
</script>

<style scoped lang="less">
.tool-bar {
  background-color: #333;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .tool-item {
    display: flex;
    align-items: center;
    color: #ccc;
    margin: 0 10px;
    cursor: pointer;
  }
}
</style>
