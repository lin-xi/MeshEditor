import { Camera, WebGLRenderer, Scene, Object3D } from "three";
import { Element } from "../element";
import { Controller } from "../controller";

interface View {
  scene?: Scene;
  camera?: Camera;
  container: HTMLElement;
  renderer: WebGLRenderer;
  elements: Element[];
  controllers: Controller[];
  width: number;
  height: number;
}

abstract class View {
  private isInitialized = false;

  constructor() {
    this.elements = [];
    this.controllers = [];
  }

  public init(scene: Scene, node: HTMLElement) {
    this.scene = scene;
    this.container = node;
    this.create(scene, node);
  }

  public addElement(ele: Element) {
    if (!ele) {
      throw new Error("element参数不能为空");
    }
    if(this.scene) {
      this.elements.push(ele);
      this.scene.add(ele.mesh);
    }
  }

  public addController(ctrl: Controller) {
    if(this.camera) {
      ctrl.init(this.camera, this.renderer);
      this.controllers.push(ctrl);
    }
  }

  public abstract create(scene: Scene, node: HTMLElement): void;
  public abstract render(): void;
  public abstract resize(): void;
}

export { View };
