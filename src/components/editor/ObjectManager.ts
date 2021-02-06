import { Stage, Plane } from '@/bohol'

class ObjectManager {
  stage?:Stage

  constructor() {
  }

  setStage(stage:Stage){
    this.stage = stage;
  }

  create(eleName:string) {
    console.log("ObjectManager>>> create", eleName);
    if(this.stage) {
      if(eleName === "plane") {
        console.log(">>>add Plane")
        const plane = new Plane();
        this.stage.addElement(plane);
        return plane;
      }
    }
  }
}

export default new ObjectManager();