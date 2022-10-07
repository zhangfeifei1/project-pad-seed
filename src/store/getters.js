const getters = {
  title: state => state.app.title, // 标题内容
  menuType: state => state.app.menuType, // 左侧菜单类型
  subMenus: state => state.app.subMenus, // 功能菜单数据
  menuStatus: state => state.app.menuStatus, // 主菜单状态
  submenuStatus: state => state.app.submenuStatus // 功能菜单状态
}
export default getters
