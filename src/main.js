/**
 * @description 入口文件
 * @author digua
 * @version 0.1.0
 */
import Vue from 'vue' // vue核心包

import '@babel/polyfill' // 兼容旧浏览器
import 'amfe-flexible/index.js'// 适配使用
import 'normalize.css/normalize.css' // 保持浏览器的一些默认样式
import '@/styles/index.scss' // 公共样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App' // 入口页面
import store from './store' // 缓存数据
import router from './router/router.config' // 路由配置
import i18n from './i18n/'// 国际化文件配置

import '@/filter/filter.config' // 公共过滤器
import mixin from '@/mixin/routerMixin' // 路由拦截器配置
import config from '@/settings/defaultSetting' // 添加公共配置文件
import '@/utils/validate'// 验证规则
import '@/permission' // 权限控制

import '@/utils/bridge/dsbridge' // bridge

Vue.use(ElementUI)
Vue.mixin(mixin)

// import Vconsole from 'vconsole'// 使用控制台插件
// new Vconsole()
// 模拟交易数据
import {
  mockXHR
} from '../mock'

if (process.env.NODE_ENV === 'development') {
// 使用mock数据 放开注释
  mockXHR()
}

// 注册elementui框架 设置国际化
// Vue.use(ElementUI, {
// })
// 是否启动生产信息提示
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
// vue实例化
// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// })

const opt = {
  router,
  store,
  render: h => h(App)
}
if (config.useI18n) {
  opt.i18n = i18n
}
new Vue(opt).$mount('#app')
