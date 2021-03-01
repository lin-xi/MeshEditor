import { Stage, Plane, Box } from "@/bohol";

class ObjectManager {
  stage?: Stage;

  setStage(stage: Stage) {
    this.stage = stage;
  }

  create(eleName: string) {
    console.log("ObjectManager>>> create", eleName);
    if (this.stage) {
      if (eleName === "plane") {
        console.log(">>>add Plane");
        const plane = new Plane();
        this.stage.addElement(plane);
        return plane;
      } else if (eleName === "box") {
        const box = new Box();
        this.stage.addElement(box);
        return box;
      }
    }
  }
}

export default new ObjectManager();
