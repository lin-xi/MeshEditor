<template>
  <div class="editor" ref="editor"></div>
</template>

<script lang="javascript">
import { Stage, PerspectiveView, OrbitControl, Box } from './bohol'


export default {
  name: "editor",
  data() {
    return {
      width: 0,
      height: 0
    }
  },
  mounted() {
    this.$nextTick(()=> {
      this.init()
    })
  },
  methods: {
    init() {
      console.log(this.$refs.editor.getBoundingClientRect())
      const stage = new Stage(this.$refs.editor);
      stage.setBackgroundColor('coral')
      const view = new PerspectiveView();
      stage.addView('default', view, true);

      view.addController(new OrbitControl())

      view.addElement(new Box())
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
