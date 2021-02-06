<template>
  <div class="editor-property" ref="property">
    <template v-if="showProperty">
      <div class="prop-panel">
        <div class="prop-title">位置</div>
        <div class="prop-item">
          <div class="label">x:</div><div><el-input v-model="x" placeholder="X"></el-input></div>
          <div class="label">y:</div><div><el-input v-model="y" placeholder="Y"></el-input></div>
          <div class="label">z:</div><div><el-input v-model="z" placeholder="Z"></el-input></div>
        </div>
      </div>
      <div class="prop-panel">
        <div class="prop-title">旋转</div>
        <div class="prop-item">
          <div class="label">x:</div><div class="form"><el-slider v-model="rotationX" min="-180" max="180" step="0.1" @change="changeRotationX"></el-slider></div>
        </div>
        <div class="prop-item">
          <div class="label">y:</div><div class="form"><el-slider v-model="rotationY" min="-180" max="180" step="0.1" @change="changeRotationY"></el-slider></div>
        </div>
        <div class="prop-item">
          <div class="label">z:</div><div class="form"><el-slider v-model="rotationZ" min="-180" max="180" step="0.1" @change="changeRotationZ"></el-slider></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="javascript">
import { global } from '../global.ts'

export default {
  name: "property",
  data() {
    return {
      showProperty: false,
      x: 0,
      y: 0,
      z: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
    }
  },
  mounted() {
    global.eventHub.$on('property', (target, props) => {
      this.x = props.x;
      this.y = props.y;
      this.z = props.z;
    })
  },
  methods: {
    changeX(val) {
      this.x = val;
    },
    changeY(val) {
      this.y = val;
    },
    changeZ(val) {
      this.z = val;
    }
  }
}
</script>

<style scoped lang="less">
.editor-property {
  background-color: #111;
  width: 100%;
  height: 100%;
  text-align: left;

  .prop-panel{
    padding: 10px;
    background-color: #222;
    margin-bottom: 1px;
    padding: 5px;
    .prop-title{
      color: #666;
      padding: 5px;
    }
    .prop-item{
      display: flex;
      align-items: center;
      padding: 10px;
      .label{
        color: #ccc;
        padding: 5px;
      }
      .form{
        flex: 1;
      }
    }
  }
}
</style>
