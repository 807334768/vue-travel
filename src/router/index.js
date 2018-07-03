import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/pages/home/Home'
//import City from '@/pages/city/city'
//import Detail from '@/pages/detail/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import ('@/pages/home/Home')
    },{
    	path:'/home',
    	name:'home',
    	component:  () => import ('@/pages/home/Home')
    },{
    	path:'/city',
    	name:'city',
    	component: () => import ('@/pages/city/city')
    },{
    	path:'/detail/:id',
    	name:'detail',
    	component: () => import ('@/pages/detail/detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	},
})
