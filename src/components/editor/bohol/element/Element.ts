import { Object3D } from "three";
import { v4 as uuidv4 } from "uuid";

interface Element {
  uuid: string;
  element: Object3D;
  update(): void;
  selected(): void;
}

/** 元素类 */
abstract class Element extends Object3D {
  constructor() {
    super();
    this.init();
  }

  private init() {
    this.uuid = uuidv4();
    this.element = this.create();
  }

  /**
   * 创建元素
   */
  public abstract create(): Object3D;
}

export { Element };
