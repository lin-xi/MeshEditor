<template>
  <div class="editor" ref="editor"></div>
</template>

<script lang="javascript">
import { Stage, PerspectiveView, MapController, GLTFModel, Loader } from '@/bohol'
import ObjectManager from './ObjectManager.ts'
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
    setTimeout(this.init, 1000)
  },
  methods: {
    async init() {
      const stage = new Stage(this.$refs.editor);
      stage.setBackgroundColor('#cccccc');
      ObjectManager.setStage(stage);

      const view = new PerspectiveView();
      stage.addView('default', view, true);
      view.addController(new MapController());

      global.eventHub.$on('create', ele => {
        ObjectManager.create(ele);
      });

      global.eventHub.$on('propertyChange', (target, data) => {
      })

      // const geo = await Loader.loadPLY("/vr.ply");
      // const element = new PLYModel(geo);
      // element.mesh.rotation.x = Math.PI / 2;
      // view.addElement(element);

      // const gltf = await Loader.loadGLTF("https://robot-vr-public.cdn.bcebos.com/1672358cb6a64b7092e5b68b21ac3c01/model");
      // console.log("gltf>>>", gltf.scene.children[0])
      // const element = new GLTFModel(gltf.scene.children[0]);
      // element.mesh.rotation.x = Math.PI / 2;
      // view.addElement(element);

      // global.eventHub.$emit('property', mesh, {
      //   x: mesh.element.position.x,
      //   y: mesh.element.position.y,
      //   z: mesh.element.position.z
      // })
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
