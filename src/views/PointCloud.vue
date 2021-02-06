<template>
  <div class="page-cloud" ref="root"></div>
</template>

<script lang="javascript">
import { Stage, PerspectiveView, MapController, GLTFModel, Loader } from '@/bohol'

export default {
  name: "pointcloud",
  data() {
    return {
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      const stage = new Stage(this.$refs.root);
      stage.setBackgroundColor('coral');
      const view = new PerspectiveView();
      stage.addView('default', view, true);

      view.addController(new MapController())

      const rect = this.$refs.root.getBoundingClientRect();
      
      const particles = canvas.width * canvas.height;

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
