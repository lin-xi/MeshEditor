import {
  Object3D,
  Mesh,
  Geometry,
  MeshStandardMaterial,
  BufferGeometry,
  BufferAttribute,
  LineBasicMaterial,
  Line,
} from "three";

import { Element } from "./Element";

class PLYModel extends Element {
  constructor(geometry: Geometry) {
    super(geometry);
  }

  public create(): Object3D {
    if (this.geometry) {
      this.geometry.computeVertexNormals();
      const material = new MeshStandardMaterial({
        color: 0x0055ff,
        flatShading: true,
        wireframe: true,
      });
      const mesh = new Mesh(this.geometry, material);

      return mesh;
    } else {
      return new Object3D();
    }
  }

  /**
   * 元素选中
   */
  public selected(): void {
    console.log("selected");
  }
}

export { PLYModel };
