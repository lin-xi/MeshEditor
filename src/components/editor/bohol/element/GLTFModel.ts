import {
  Object3D,
  Mesh,
  Raycaster,
  BufferGeometry,
  MeshStandardMaterial,
} from "three";
import { SimplifyModifier } from "three/examples/jsm/modifiers/SimplifyModifier.js";

import { Element } from "./Element";

class GLTFModel extends Element {
  constructor(mesh: Mesh) {
    super();
    this.mesh = mesh;
    this.elements = this.create();
  }

  public create(): Object3D[] {
    if (this.mesh) {
      const material = new MeshStandardMaterial({
        color: 0x0055ff,
        flatShading: true,
        wireframe: true,
      });
      // this.mesh.material = material;

      const modifier = new SimplifyModifier();
      const simplified = this.mesh.geometry as BufferGeometry;
      const count = Math.floor(simplified.attributes.position.count * 0.875); // number of vertices to remove

      console.time("Simplify>>>>>");
      this.mesh.geometry = modifier.modify(simplified, count);
      console.timeEnd("Simplify>>>>>");

      return [this.mesh];
    } else {
      return [new Object3D()];
    }
  }

  /**
   * 元素选中
   */
  public selected(): void {
    console.log("selected");
  }

  public update(): void {
    // const intersects = raycaster.intersectObjects([this.mesh], true);
    // if (intersects.length > 0) {
    //   const intersect = intersects[0];
    //   const face = intersect.face;
    //   if (face) {
    // var linePosition = this.line.geometry.attributes.position;
    // var meshPosition = this.mesh.geometry.attributes.position;
    // linePosition.copyAt(0, meshPosition, face.a);
    // linePosition.copyAt(1, meshPosition, face.b);
    // linePosition.copyAt(2, meshPosition, face.c);
    // linePosition.copyAt(3, meshPosition, face.a);
    // this.mesh.updateMatrix();
    // this.line.geometry.applyMatrix4(this.mesh.matrix);
    // this.line.visible = true;
    // }
    // } else {
    //   this.line.visible = false;
    // }
  }
}

export { GLTFModel };
