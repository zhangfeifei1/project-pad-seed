/**
 *  @name 路由配置
 *  meta{
 *    title: '欢迎',//设置标题栏标题内容
 *    icon: 'dashboard'//保留字段用于设置icon图标，目前没用
 *    menuType:'func'//左侧菜单类型，menu:左侧显示主菜单,func:左侧显示功能菜单,null:没有左侧菜单,默认是menu
 *    menuStatus:0//菜单当前选中索引 0是第一项
 *    subMenuStatus:0//功能菜单当前选中索引 0是第一项
 *    keepAlive:true//true:页面有缓存，false:页面没有缓存
 *
 *  }
 **/
import Layout from '@/layout'
export default [
  // 菜单页
  {
    path: '/home',
    component: Layout,
    name: 'Home',
    redirect: '/home/dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '欢迎',
        menuType: 'menu',
        menuStatus: 0,
        icon: 'dashboard'
      }
    },
    {
      path: 'form',
      name: 'Form',
      component: () => import('@/views/dashboard/form'),
      meta: {
        title: '测试表单1',
        menuType: 'func',
        subMenuStatus: 0,
        icon: 'dashboard',
        keepAlive: true
      }
    },
    {
      path: 'formRes',
      name: 'FormRes',
      component: () => import('@/views/dashboard/formRes'),
      meta: {
        title: '结果',
        menuType: 'func',
        subMenuStatus: 1,
        icon: 'dashboard'
      }
    }
    ],
    meta: {
      title: '首页欢迎',
      icon: 'dashboard'
    }
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/menu',
    children: [{
      path: 'menu',
      name: 'Menu',
      component: () => import('@/views/menu/userMenu'),
      meta: {
        title: '客户经理菜单',
        icon: 'dashboard',
        menuType: 'menu',
        menuStatus: '1'
      }
    }]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    meta: {
      title: '登录',
      icon: 'dashboard'
    }
  }
]
