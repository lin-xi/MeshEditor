import { Controller } from "./Controller";
import { Camera, WebGLRenderer, MOUSE } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class OrbitController extends Controller {
  private control!: OrbitControls;

  constructor() {
    super();
  }

  public create(camera: Camera, renderer: WebGLRenderer): void {
    this.camera = camera;
    this.renderer = renderer;

    this.control = new OrbitControls(camera, renderer.domElement);

    this.control.mouseButtons = {
      LEFT: MOUSE.PAN,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.ROTATE,
    };
    this.control.enableDamping = true;
    this.control.dampingFactor = 0.08;

    this.control.enablePan = true;
    this.control.enableRotate = true;
    this.control.enableZoom = true;
    this.control.minDistance = 10;
    this.control.maxDistance = 1000;
  }

  public update(): void {
    this.control.update();
  }
}

export { OrbitController };
