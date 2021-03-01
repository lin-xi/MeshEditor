import { Scene, Color } from "three";
import { View } from "../view";
import { Element } from "../element";

class Stage {
  container: HTMLElement;
  scene: THREE.Scene;
  views: Map<string, View>;
  currentView?: View;
  currentViewName: string;
  width: number;
  height: number;

  constructor(node: HTMLElement) {
    this.container = node;
    const rect = node.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;

    this.scene = new Scene();
    this.views = new Map<string, View>();
    this.currentViewName = "";
    this.init();
  }

  setBackgroundColor(color: string) {
    this.scene.background = new Color(color);
  }

  addView(name: string, view: View, setCurrent = true) {
    view.init(this.scene, this.container);
    this.views.set(name, view);
    if (setCurrent) {
      this.currentView = view;
      this.currentViewName = name;
    }
  }

  addElement(ele: Element) {
    if (this.currentView) {
      this.currentView.addElement(ele);
    }
  }

  setCurrentView(name: string) {
    if (this.views.has(name)) {
      this.currentView = this.views.get(name);
      this.currentViewName = name;
    }
  }

  init() {
    this.animate();
    window.addEventListener("resize", this.resize, false);
  }

  animate() {
    requestAnimationFrame(() => {
      this.animate();
    });
    if (this.currentView) this.currentView.render();
  }

  resize() {
    if (this.currentView) this.currentView.resize();
  }
}

export { Stage };
