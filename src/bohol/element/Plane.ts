import {
  Object3D,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  DoubleSide
} from "three";
import { Element } from "./Element";
import { v4 as uuidv4 } from "uuid";

class Plane extends Element {
  width:number;
  height: number;
  widthSegments: number;
  heightSegments: number;

  constructor(width:number = 1000, height:number = 1000, widthSegments:number = 100, heightSegments:number = 100) {
    super();

    this.width = width;
    this.height = height;
    this.widthSegments = widthSegments;
    this.heightSegments = heightSegments;
    const geometry = new PlaneGeometry(2000, 2000);;
    const material = new MeshBasicMaterial({ color: 0x777777, side: DoubleSide });
    this.mesh = new Mesh(geometry, material);
  }

  /**
   * 元素选中
   */
  public selected(): void {
    console.log("selected");
  }

  public update() {
    //do nothing
  }

  public showWireframe(show: boolean): void {
    throw new Error("Method not implemented.");
  }
  public setBackground(color: string): void {
    throw new Error("Method not implemented.");
  }
}

export { Plane };
