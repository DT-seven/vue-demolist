import Vue from "vue";
import VueRouter from "vue-router";
import Button from "../views/Button.vue";
import Cube from "../views/cube.vue";
import SlideShow from "../views/slideshow.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/button" },
  {
    path: "/button",
    name: "button",
    component: Button,
  },
  {
    path: "/cube",
    name: "cube",
    component: Cube,
  },
  {
    path: "/slide",
    name: "slide",
    component: SlideShow,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
