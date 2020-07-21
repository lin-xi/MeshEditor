import { Camera, WebGLRenderer } from "three";

interface Controller {
  camera: Camera;
  renderer: WebGLRenderer;
}
/**
 * 控制器
 */
abstract class Controller {
  private isInitialized = false;

  public init(camera: Camera, renderer: WebGLRenderer) {
    if (!this.isInitialized) {
      this.create(camera, renderer);
      this.isInitialized = true;
    }
  }
  public abstract create(camera: Camera, renderer: WebGLRenderer): void;
  public abstract update(): void;
}

export { Controller };
