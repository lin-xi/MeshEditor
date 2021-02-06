import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Edit from "../views/Edit.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Edit",
    component: Edit
  },
  {
    path: "/pointcloud",
    name: "PointCloud",
    component: () =>
      import(/* webpackChunkName: "PointCloud" */ "../views/PointCloud.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  }
];

const router = new VueRouter({
  routes
});

export default router;
