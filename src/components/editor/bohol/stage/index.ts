import { Scene, Color } from "three";
import { View } from "../view";

class Stage {
  container: HTMLElement;
  scene: THREE.Scene;
  views: Map<string, View>;
  currentView: string;
  width: number;
  height: number;

  constructor(node: HTMLElement) {
    this.container = node;
    const rect = node.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;

    this.scene = new Scene();
    this.views = new Map<string, View>();
    this.currentView = "";
    this.init();
  }

  setBackgroundColor(color: string) {
    this.scene.background = new Color(color);
  }

  addView(name: string, view: View, setCurrent: boolean) {
    view.init(this.scene, this.container);
    this.views.set(name, view);
    if (setCurrent) this.currentView = name;
  }

  setCurrentView(name: string) {
    this.currentView = name;
  }

  init() {
    this.animate();
    window.addEventListener("resize", this.resize, false);
  }

  animate() {
    requestAnimationFrame(() => {
      this.animate();
    });
    const view = this.views.get(this.currentView);
    if (view) view.render();
  }

  resize() {
    const view = this.views.get(this.currentView);
    if (view) view.resize();
  }
}

export { Stage };
