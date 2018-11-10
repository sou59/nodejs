import Vue from "vue";
import Router from "vue-router";
import Users from "./views/Users.vue";
import Dialogs from "./views/Dialogs.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "users",
      component: Users
    },
    {
      path: "/cars",
      name: "cars",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Cars.vue")
    },
    {
      path: "/dialogs",
      name: "dialogs",
      component: Dialogs
    }
  ]
});
