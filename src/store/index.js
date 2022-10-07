/**
 * @description vuex入口文件
 * @author digua
 * @version 0.1.0
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app' // 菜单类标识

Vue.use(Vuex)
// vuex实例化
const store = new Vuex.Store({
  modules: {
    app
  },
  getters
})

export default store
