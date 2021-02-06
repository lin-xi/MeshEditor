import { Controller } from "./Controller";
import { Camera, WebGLRenderer, MOUSE } from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";

class TrackballController extends Controller {
  private control!: TrackballControls;

  constructor() {
    super();
  }

  public create(camera: Camera, renderer: WebGLRenderer): void {
    this.camera = camera;
    this.renderer = renderer;

    this.control = new TrackballControls(camera, renderer.domElement);

    this.control.dynamicDampingFactor = 0.08;
    this.control.minDistance = 10;
    this.control.maxDistance = 1000;
  }

  public update(): void {
    this.control.update();
  }
}

export { TrackballController };
