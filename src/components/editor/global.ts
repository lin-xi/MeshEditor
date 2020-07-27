import Vue from "vue";

class Global {
  eventHub: Vue;
  constructor() {
    this.eventHub = new Vue();
  }
}

const global = new Global();
export { global };
