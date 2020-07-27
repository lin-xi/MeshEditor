<template>
  <div class="property" ref="property">
    <Number :value="x" @change="changeX" label="X" />
    <Number :value="y" @change="changeY" label="Y" />
    <Number :value="z" @change="changeZ" label="Z" />
  </div>
</template>

<script lang="javascript">
import Number from './Number.vue'
import { global } from '../global.ts'

export default {
  name: "property",
  data() {
    return {
      x: 0,
      y: 0,
      z: 0
    }
  },
  components: {
    Number
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
.editor {
  background-color: #333;
  width: 100%;
  height: 100%;
}
</style>
