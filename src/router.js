import Vue from "vue";
import Router from "vue-router";
import code from "@/helper/father.js";
const Home = () => import("./views/Home.vue");
const ReportPassenter = () => import("./views/reports/ReportPassenger.vue");
const ReportVehicle = () => import("./views/reports/ReportVehicle .vue");
const Login = () => import("./views/Login.vue");

Vue.use(Router);

const route = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: true
      },
      redirect: {
        name: "Dashboard"
      }
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/passenger",
      name: "Vassenger",
      component: ReportPassenter,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/vehicle",
      name: "Vehicle",
      component: ReportVehicle,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("thor")) {
          next({
            path: "/dashboard"
          });
        } else {
          next();
        }
      }
    }
  ]
});

route.beforeEach((to, from, next) => {
  let thor = {
    user: null
  };
  if (localStorage.getItem("thor")) {
    thor = JSON.parse(code.from(localStorage.getItem("thor")));
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (thor.user == null) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default route;
