import { createRouter, createWebHistory } from "vue-router"
// import Home from "../pages/Home.vue"
// import About from "../pages/About.vue"

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home-chunk" */ "../pages/Home.vue"),
    meta: {
      age: 30,
    },
    children: [
      {
        path: "",
        redirect: "/home/message",
      },
      {
        path: "message",
        component: () => import("../pages/HomeMessage.vue"),
      },
      {
        path: "product",
        component: () => import("../pages/HomeProduct.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about-chunk" */ "../pages/About.vue"),
  },
  {
    path: "/user/:id",
    name: "user",
    component: () =>
      import(/* webpackChunkName: "user-chunk" */ "../pages/User.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "notfound",
    component: () =>
      import(/* webpackChunkName: "user-chunk" */ "../pages/NotFound.vue"),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

// 动态添加路由
// const categoryRoute = {
//   path: '/category',
//   component: () => import("../pages/Category.vue")
// }

// router.addRoute(categoryRoute)

// 动态添加二级路由
// router.addRoute("home", {
//   path: "moment",
//   component: () => import("../pages/Moment.vue")
// })

// 导航守卫
router.beforeEach((to, from) => {
  console.log('进行了一次跳转');
  console.log(to, from);
})

export default router
