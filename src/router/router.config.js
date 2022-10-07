/**
 * @description 路由公共配置
 * @author digua
 */
import Vue from 'vue'
import Router from 'vue-router'
// import { getStore } from '@/utils/store'

import home from './homeRoute' // 首页模块

// import store from '@/store/index' // 缓存数据
Vue.use(Router)
// 配置路由
const RouterModel = new Router({
  routes: [...home,
    {
      path: '/bridgeDemo',
      component: () => import('@/views/bridgeDemo'),
      meta: {
        keepAlive: true
      }
    },
    // 错误页面
    {
      path: '/404',
      component: () => import('@/views/404'),
      meta: {
        keepAlive: true
      }
    },
    { path: '/', redirect: '/home' },
    // 无路由统一跳转页面
    { path: '*', redirect: '/404', hidden: true }]
})

export default RouterModel
