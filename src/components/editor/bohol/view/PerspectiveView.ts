import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  DirectionalLight,
  AmbientLight,
  GridHelper,
  CameraHelper,
  Raycaster,
  Vector2
} from "three";
import { View } from "./View";

class PerspectiveView extends View {
  camera!: PerspectiveCamera;
  observeCamera!: PerspectiveCamera;
  mouse: Vector2;
  raycaster: Raycaster;

  constructor() {
    super();
    this.mouse = new Vector2();
    this.raycaster = new Raycaster();
  }

  public create(scene: Scene, node: HTMLElement): void {
    this.scene = scene;
    this.container = node;

    const rect = node.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;

    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(rect.width, rect.height);
    this.renderer.autoClear = false;
    node.appendChild(this.renderer.domElement);

    const lightUp = new DirectionalLight(0xffffff);
    lightUp.position.set(1, 1, 1).normalize();
    scene.add(lightUp);

    const lightDown = new DirectionalLight(0xffffff);
    lightDown.position.set(-1, -1, -1).normalize();
    scene.add(lightDown);

    const ambientLight = new AmbientLight(0xcccccc);
    scene.add(ambientLight);

    const helper = new GridHelper(160, 10);
    scene.add(helper);

    const aspect = (0.5 * this.width) / this.height;
    this.camera = new PerspectiveCamera(50, aspect, 1, 1000);
    this.camera.position.set(0, 0, 200);

    this.observeCamera = new PerspectiveCamera(50, aspect, 150, 1000);
    this.observeCamera.position.set(0, 0, 800);
    this.observeCamera.rotation.y = Math.PI;

    const cameraPerspectiveHelper = new CameraHelper(this.camera);
    scene.add(cameraPerspectiveHelper);

    scene.add(this.camera);
    scene.add(this.observeCamera);

    document.addEventListener("mousemove", this.onMouseMove, false);
  }

  public render() {
    this.renderer.setViewport(0, 0, this.width, this.height);
    this.renderer.render(this.scene, this.camera);

    this.controllers.forEach((ctrl) => {
      if (ctrl.update) ctrl.update();
    });

    this.raycaster.setFromCamera(this.mouse, this.camera);

    this.elements.forEach((ele) => {
      if (ele.update) ele.update(this.raycaster);
    });

    // this.renderer.setViewport(0, 0, 400, 200);
    // this.renderer.render(this.scene, this.observeCamera);
  }

  private onMouseMove(event: MouseEvent) {
    event.preventDefault();
    this.mouse.x = (event.clientX / this.width) * 2 - 1;
    this.mouse.y = -(event.clientY / this.height) * 2 + 1;
  }

  public resize() {
    const rect = this.container.getBoundingClientRect();
    this.camera.aspect = rect.width / rect.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(rect.width, rect.height);
  }
}

export { PerspectiveView };
