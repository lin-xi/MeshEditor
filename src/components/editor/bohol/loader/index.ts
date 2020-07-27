import { Geometry } from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

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
}

export { Loader };
