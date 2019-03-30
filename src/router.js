import Vue from 'vue'
import Router from 'vue-router'
import Pc from '@/views/Pc.vue'
import Mobile from '@/views/Mobile.vue'
import MobileDetail from '@/views/MobileDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'pc',
    component: Pc
  }, {
    path: '/mobile',
    name: 'mobile',
    component: Mobile
  }, {
    path: '/mobileDetail',
    name: 'mobileDetail',
    component: MobileDetail
  }]
})
