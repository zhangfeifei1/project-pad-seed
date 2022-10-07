/**
 * @description 菜单标识配置文件
 */
import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true, // 左侧菜单栏显示状态 true:显示 false:不显示
    withoutAnimation: false // 展开收起菜单是否有动态效果 true:无，false:有
  },
  device: 'desktop', // 获取设备标识 pc：desktop 手机：mobile
  title: '标题', // 标题栏的标题
  menuType: 'menu', // 左侧菜单类型
  menuStatus: '0', // 左侧菜单选中状态
  subMenus: [], // 功能菜单json数据
  subMenuStatus: 0 // 功能菜单选中状态
}

const mutations = {
  // 设置标题
  SET_TITLE: (state, title) => {
    state.title = title
  },
  // 设置菜单类型
  SET_MENUTYPE: (state, menuType) => {
    state.menuType = menuType
  },
  // 设置主菜单当前选中状态
  SET_MENUSTATUS: (state, menuStatus) => {
    state.menuStatus = menuStatus + ''
  },
  // 设置子菜单JSON数据
  SET_SUBMENUS: (state, subMenus) => {
    state.subMenus = subMenus
  },
  // 设置功能菜单当前选中状态
  SET_SUBMENUSTATUS: (state, subMenuStatus) => {
    state.subMenuStatus = subMenuStatus
  },

  // 开启或关闭左侧菜单
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  // 关闭左侧菜单
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  // 获取设备标识 pc：desktop 手机：mobile
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  }
}

const actions = {
  // 开启或关闭左侧菜单
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  // 关闭左侧菜单
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  // 获取设备标识
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  }
}

export default {
  namespaced: true, // 引用该模块时需要加模块名称 this.$store.dispatch('app/toggleSideBar')
  state,
  mutations,
  actions
}
