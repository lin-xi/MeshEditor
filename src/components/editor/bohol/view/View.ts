import { Camera, WebGLRenderer, Scene } from "three";
import { Element } from "../element";
import { Controller } from "../controller";

interface View {
  scene: Scene;
  camera: Camera;
  container: HTMLElement;
  renderer: WebGLRenderer;
  elements: Element[];
  controllers: Controller[];
}

abstract class View {
  private isInitialized = false;

  constructor() {
    this.elements = [];
    this.controllers = [];
  }

  public addElement(ele: Element) {
    this.elements.push(ele);
    console.log("scene>>>", this.scene, ele.element);
    this.scene.add(ele.element);
  }

  public addController(ctrl: Controller) {
    ctrl.init(this.camera, this.renderer);
    this.controllers.push(ctrl);
  }

  public init(scene: Scene, node: HTMLElement): void {
    if (!this.isInitialized) {
      this.create(scene, node);
      this.isInitialized = true;
    }
  }

  public abstract create(scene: Scene, node: HTMLElement): void;
  public abstract render(): void;
  public abstract resize(): void;
}

export { View };
