import { PlaneGeometry, MeshBasicMaterial, Mesh, DoubleSide } from "three";
import { Element } from "./Element";

class Plane extends Element {
  width: number;
  height: number;
  widthSegments: number;
  heightSegments: number;

  constructor(
    width = 10,
    height = 10,
    widthSegments = 1,
    heightSegments = 1
  ) {
    super();

    this.width = width;
    this.height = height;
    this.widthSegments = widthSegments;
    this.heightSegments = heightSegments;

    const geometry = new PlaneGeometry(width, height);
    const material = new MeshBasicMaterial({
      color: 0x0000cc,
      side: DoubleSide,
    });
    this.mesh = new Mesh(geometry, material);
  }

  /**
   * 元素选中
   */
  public selected(): void {
    //do nothing
  }

  public update() {
    //do nothing
  }
}

export { Plane };
