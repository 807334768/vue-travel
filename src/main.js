// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'//统一样式
import './assets/styles/border.css'//解决1像素边框显示为多像素边框
import  fastClick from 'fastclick' //引入第三方模块，解决移动端某些机型上的300毫秒点击延迟的问题
Vue.config.productionTip = false
fastClick.attach(document.body)//attach是faseClcik自带的方法，绑定到docoument.body上
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
