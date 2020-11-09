import {
  Object3D,
  BufferGeometry,
  BoxBufferGeometry,
  MeshStandardMaterial,
  Vector2,
  Raycaster,
  Mesh,
  Material,
} from "three";
import { v4 as uuidv4 } from "uuid";

/** 元素类 */
abstract class Element extends Object3D {
  uuid: string;
  geometry: BufferGeometry;
  mesh: Mesh;
  elements!: Object3D[];

  constructor() {
    super();
    this.uuid = uuidv4();
    this.geometry = new BoxBufferGeometry(1, 1, 1);
    this.mesh = new Mesh(
      this.geometry,
      new MeshStandardMaterial({
        color: 0x0055ff,
        flatShading: true,
        wireframe: true,
      })
    );
    this.elements = this.create();
  }

  /**
   * 创建元素
   */
  public abstract create(): Object3D[];
  public abstract update(raycaster: Raycaster): void;
}

export { Element };
