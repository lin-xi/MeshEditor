import {
  Object3D,
  BoxBufferGeometry,
  MeshBasicMaterial,
  Mesh,
  Raycaster,
} from "three";
import { Element } from "./Element";

class Box extends Element {
  constructor() {
    super();
  }

  public create(): Object3D[] {
    const geometry = new BoxBufferGeometry(10, 10, 10);
    const material = new MeshBasicMaterial({ color: 0xffaa00 });
    return [new Mesh(geometry, material)];
  }

  /**
   * 元素选中
   */
  public selected(): void {
    console.log("selected");
  }

  public update(raycaster: Raycaster) {
    //do nothing
  }
}

export { Box };
