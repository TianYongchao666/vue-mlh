import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: "/site",
    name: 'Site',
    component: () => import("../views/admin/site.vue")
  },
  {
    path: "/site-new",
    name: 'Site-new',
    component: () => import("../views/admin/site-new.vue")
  },
  {
    path: "/login",
    name: 'Login',
    component: () => import("../views/admin/login.vue")
  },
  // {
  //   path: "/center",
  //   name: 'Center',
  //   component: () => import("../views/admin/center.vue")
  // },
  {
    path: "/reg",
    name: 'Reg',
    component: () => import("../views/admin/reg.vue")
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/search',
    name: 'Search',
    component: () => import("../views/Search.vue")
  },
  {
    path: '/tj',
    name: 'Tj',
    component: () => import("../views/tj.vue")
  },
  {
    path: '/list/:id',
    name: 'List',
    component: () => import('../views/List.vue'),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),

    meta:{
      needlogin:true
    }
   
  },
]

const router = new VueRouter({
  routes,
});
router.beforeEach((to,from,next)=>{
  if(to.meta.needlogin){
   if(localStorage.getItem("token")){
    next()
   }else{
    next({
      name:"Login"
    })
   }
  }else{
    next()
  }
})




export default router;
