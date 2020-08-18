import Vue from "vue";
import VueRouter from "vue-router";


// Components
import Index from "./views/Index"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    props: {
      page: {
        name: "Groups",
        data: 'groups'
    }
  },
    meta: {}
  }

];

const router = new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});

export default router;
