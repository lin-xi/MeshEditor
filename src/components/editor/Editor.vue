<template>
  <div class="editor" ref="editor"></div>
</template>

<script lang="javascript">
import { Stage, PerspectiveView, MapController, PLYModel, Loader } from './bohol'
import { global } from './global.ts'

export default {
  name: "editor",
  data() {
    return {
      width: 0,
      height: 0
    }
  },
  mounted() {
    global.eventHub.$on('propertyChange', (target, data) => {
      for (const key in data) {
        target[key] = data[key]
      }
    })
    this.init();
  },
  methods: {
    async init() {
      const stage = new Stage(this.$refs.editor);
      stage.setBackgroundColor('coral');
      const view = new PerspectiveView();
      stage.addView('default', view, true);

      view.addController(new MapController())

      const geo = await Loader.loadPLY("/vr.ply");
      const mesh = new PLYModel(geo);
      mesh.element.rotation.x = Math.PI / 2;
      view.addElement(mesh);

      global.eventHub.$emit('property', mesh, {
        x: mesh.element.position.x,
        y: mesh.element.position.y,
        z: mesh.element.position.z
      })
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
