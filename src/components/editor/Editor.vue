<template>
  <div class="editor" ref="editor"></div>
</template>

<script lang="javascript">
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

let renderer
let scene
let camera
let controls

export default {
  name: "editor",
  data() {
    return {
      width: 0,
      height: 0
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
      const parent = this.$el.parentNode
      const rect = parent.getBoundingClientRect();
      this.width = rect.width;
      this.height = rect.height;
      this.$refs.editor.style.width = this.width + "px";
      this.$refs.editor.style.height = this.height + "px";

      scene = new THREE.Scene()
      scene.background = new THREE.Color('coral')

      camera = new THREE.PerspectiveCamera(50, this.width / this.height, 1, 1000)
      camera.position.set(0, 0, 200)
      scene.add(camera)
      const group = new THREE.Group()
      scene.add(group)

      const geometry = new THREE.BoxBufferGeometry(10, 10, 10);
      const material = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
      directionalLight.position.set(0.75, 0.75, 1.0).normalize()
      scene.add(directionalLight)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.2)
      scene.add(ambientLight)

      const helper = new THREE.GridHelper(160, 10)
      helper.rotation.x = Math.PI / 2
      scene.add(helper)

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(this.width, this.height);
      this.$refs.editor.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.mouseButtons = {
        LEFT: THREE.MOUSE.PAN,
        MIDDLE: THREE.MOUSE.DOLLY,
        RIGHT: THREE.MOUSE.ROTATE
      }
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.enablePan = true;
      controls.enableRotate = true;
      controls.enableZoom = true;
      controls.minDistance = 100;
      controls.maxDistance = 1000;

      window.addEventListener('resize', this.onWindowResize, false);
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.render();
    },
    render() {
      controls.update();
      renderer.render(scene, camera);
    },
    onWindowResize() {
      const rect = this.$parent.$el.getBoundingClientRect();
      this.width = rect.width;
      this.height = rect.height;
      camera.aspect = this.width / this.height;
      camera.updateProjectionMatrix();
      renderer.setSize(this.width, this.height);
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
