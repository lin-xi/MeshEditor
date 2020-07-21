import { BoxBufferGeometry, MeshBasicMaterial, Mesh } from "three";
import { Element } from "./Element";

class Box extends Element {
  constructor() {
    super();
  }

  public create(): THREE.Object3D {
    const geometry = new BoxBufferGeometry(10, 10, 10);
    const material = new MeshBasicMaterial({ color: 0xffaa00 });
    return new Mesh(geometry, material);
  }

  /**
   * update
   */
  public update(): void {
    console.log("update");
  }

  /**
   * 元素选中
   */
  public selected(): void {
    console.log("selected");
  }
}

export { Box };
