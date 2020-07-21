import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  DirectionalLight,
  AmbientLight,
  GridHelper,
} from "three";
import { View } from "./View";

class PerspectiveView extends View {
  camera!: PerspectiveCamera;

  constructor() {
    super();
  }

  public create(scene: Scene, node: HTMLElement): void {
    this.scene = scene;
    this.container = node;

    const rect = node.getBoundingClientRect();
    console.log(rect);

    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(rect.width, rect.height);
    node.appendChild(this.renderer.domElement);

    const directionalLight = new DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(0.75, 0.75, 1.0).normalize();
    scene.add(directionalLight);

    const ambientLight = new AmbientLight(0xcccccc, 0.2);
    scene.add(ambientLight);

    const helper = new GridHelper(160, 10);
    helper.rotation.x = Math.PI / 2;
    scene.add(helper);

    this.camera = new PerspectiveCamera(50, rect.width / rect.height, 1, 1000);
    this.camera.position.set(0, 0, 50);

    scene.add(this.camera);
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
    this.controllers.forEach((ctrl) => {
      if (ctrl.update) ctrl.update();
    });
    this.elements.forEach((ele) => {
      if (ele.update) ele.update();
    });
  }

  public resize() {
    const rect = this.container.getBoundingClientRect();
    this.camera.aspect = rect.width / rect.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(rect.width, rect.height);
  }
}

export { PerspectiveView };
