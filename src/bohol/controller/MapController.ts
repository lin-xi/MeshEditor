import { Controller } from "./Controller";
import { Camera, WebGLRenderer, MOUSE } from "three";
import { MapControls } from "three/examples/jsm/controls/OrbitControls.js";

class MapController extends Controller {
  private control!: MapControls;

  constructor() {
    super();
  }

  public create(camera: Camera, renderer: WebGLRenderer): void {
    this.camera = camera;
    this.renderer = renderer;

    this.control = new MapControls(camera, renderer.domElement);

    this.control.mouseButtons = {
      LEFT: MOUSE.PAN,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.ROTATE,
    };
    this.control.enableDamping = true;
    this.control.dampingFactor = 0.1;

    this.control.screenSpacePanning = false;
    this.control.minDistance = 10;
    this.control.maxDistance = 1000;

    this.control.enablePan = true;
    this.control.enableRotate = true;
    this.control.enableZoom = true;

    this.control.maxPolarAngle = Math.PI / 2;
  }

  public update(): void {
    this.control.update();
  }
}

export { MapController };
