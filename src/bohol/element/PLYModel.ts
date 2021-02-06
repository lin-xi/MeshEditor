// import {
//   Object3D,
//   Mesh,
//   Geometry,
//   MeshStandardMaterial,
//   Raycaster,
//   BufferGeometry,
//   BufferAttribute,
//   LineBasicMaterial,
//   Line,
// } from "three";
// import { SimplifyModifier } from "three/examples/jsm/modifiers/SimplifyModifier.js";

// import { Element } from "./Element";

// class PLYModel implements Element {
//   line: Line;
//   geometry: BufferGeometry;
//   elements: Object3D[];

//   constructor(geometry: BufferGeometry) {
//     this.geometry = geometry;
//     this.line = new Line();
//     this.elements = this.create();
//   }

//   public create(): Promise<Object3D[]> {
//     await Promise.resolve();

//     this.geometry.computeVertexNormals();
//     const material = new MeshStandardMaterial({
//       color: 0x0055ff,
//       flatShading: true,
//       wireframe: true,
//     });

//     this.mesh = new Mesh(this.geometry, material);

//     const modifier = new SimplifyModifier();
//     const count = Math.floor(this.geometry.attributes.position.count * 0.875); // number of vertices to remove
//     console.time("Simplify>>>>>");
//     const simplifyGeometry = modifier.modify(this.geometry, count);
//     console.timeEnd("Simplify>>>>>");
//     // simplifyGeometry.computeVertexNormals();
//     // const simplified = new Mesh(this.geometry, material);

//     const geometry = new BufferGeometry();
//     geometry.setAttribute(
//       "position",
//       new BufferAttribute(new Float32Array(4 * 3), 3)
//     );

//     const linematerial = new LineBasicMaterial({
//       color: 0xffffff,
//       transparent: true,
//     });

//     this.line = new Line(geometry, linematerial);
//     return [this.mesh, this.line];
//     } else {
//       return [new Object3D()];
//     }
//   }

//   /**
//    * 元素选中
//    */
//   public selected(): void {
//     console.log("selected");
//   }

//   public update(raycaster: Raycaster): void {
//     // const intersects = raycaster.intersectObjects([this.mesh], true);
//     // if (intersects.length > 0) {
//     //   const intersect = intersects[0];
//     //   const face = intersect.face;
//     //   if (face) {
//     // var linePosition = this.line.geometry.attributes.position;
//     // var meshPosition = this.mesh.geometry.attributes.position;
//     // linePosition.copyAt(0, meshPosition, face.a);
//     // linePosition.copyAt(1, meshPosition, face.b);
//     // linePosition.copyAt(2, meshPosition, face.c);
//     // linePosition.copyAt(3, meshPosition, face.a);
//     // this.mesh.updateMatrix();
//     // this.line.geometry.applyMatrix4(this.mesh.matrix);
//     // this.line.visible = true;
//     // }
//     // } else {
//     //   this.line.visible = false;
//     // }
//   }
// }

// export { PLYModel };
