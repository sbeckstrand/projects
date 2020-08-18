import Vue from "vue";
import VueRouter from "vue-router";


// Components
import Login from "./views/Login"
import Groups from "./views/Groups"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Groups,
      login: Login
    },
    meta: {}
  }
];

const router = new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});

export default router;
