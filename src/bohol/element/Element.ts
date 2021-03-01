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
  mesh!: Object3D;

  constructor() {
    super();
    this.uuid = uuidv4();
  }
  /**
   * 创建元素
   */
  public abstract update(raycaster: Raycaster): void;
  public abstract selected(raycaster: Raycaster): void;
}

export { Element };
