import {
  Object3D,
  Mesh,
  Geometry,
  MeshStandardMaterial,
  Raycaster,
  BufferGeometry,
  BufferAttribute,
  LineBasicMaterial,
  Line
} from "three";

import { Element } from "./Element";

class PLYModel extends Element {
  line: Line;

  constructor(geometry: Geometry) {
    super(geometry);
  }

  public create(): Object3D[] {
    if (this.geometry) {
      this.geometry.computeVertexNormals();
      const material = new MeshStandardMaterial({
        color: 0x0055ff,
        flatShading: true,
        wireframe: true,
      });
      this.mesh = new Mesh(this.geometry, material);

      let geometry = new BufferGeometry();
      geometry.setAttribute( 'position', new BufferAttribute( new Float32Array( 4 * 3 ), 3 ) );

			let linematerial = new LineBasicMaterial( { color: 0xffffff, transparent: true } );

			this.line = new Line( geometry, linematerial );
      return [this.mesh, this.line];
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

  public update(raycaster: Raycaster): void {
    var intersects = raycaster.intersectObjects(this.mesh, true );

    if ( intersects.length > 0 ) {
      let intersect = intersects[ 0 ];
      let face = intersect.face;
      if(face) {
        var linePosition = this.line.geometry.attributes.position;
        var meshPosition = this.mesh.geometry.attributes.position;
        linePosition.copyAt( 0, meshPosition, face.a );
        linePosition.copyAt( 1, meshPosition, face.b );
        linePosition.copyAt( 2, meshPosition, face.c );
        linePosition.copyAt( 3, meshPosition, face.a );
        this.mesh.updateMatrix();
        this.line.geometry.applyMatrix4( this.mesh.matrix );
        this.line.visible = true;
      }
    } else {
      this.line.visible = false;
    }
  }
}

export { PLYModel };
