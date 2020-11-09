import { Geometry, Mesh } from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface Loader {
  geometry: Geometry;
}

class Loader {
  public static async loadPLY(url: string) {
    const loader = new PLYLoader();
    return new Promise((resolve, reject) => {
      loader.load(
        url,
        (geometry) => {
          resolve(geometry);
        },
        (progress) => {
          console.log(progress.loaded);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  public static async loadGLTF(url: string) {
    const loader = new GLTFLoader();
    return new Promise((resolve, reject) => {
      loader.load(
        url,
        (gltf) => {
          resolve(gltf);
        },
        (progress) => {
          console.log(progress.loaded);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}

export { Loader };
