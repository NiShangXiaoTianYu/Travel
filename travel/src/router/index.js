import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    },
    {
      // 动态路由 id是动态的
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  // 每次页面切换都让页面在最顶端
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
