import { Object3D, Geometry, Vector2, Raycaster, Mesh } from "three";
import { v4 as uuidv4 } from "uuid";

interface Element {
  uuid: string;
  geometry?: Geometry;
  mesh: Mesh,
  elements: Object3D[];
  update(raycaster: Raycaster): void;
  selected(): void;
}

/** 元素类 */
abstract class Element extends Object3D {
  constructor(geo?: Geometry) {
    super();
    this.geometry = geo;
    this.init();
  }

  private init() {
    this.uuid = uuidv4();
    this.elements = this.create();
  }

  /**
   * 创建元素
   */
  public abstract create(): Object3D[];
}

export { Element };
