<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="javascript">
export default {
  name: "app"
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .split {
    .gutter {
      background-color: #383838;
      &.gutter-horizontal {
        background-image: none;
      }
    }
  }

  i {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-size: 100% 100%;
  }
  .icon-grid {
    background-image: url(./assets/grid.svg);
  }
}
</style>
