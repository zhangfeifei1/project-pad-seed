/**
 * @description 数据存取方法
 * @author digua
 * @version 0.1.0
 */
import {
  validatenull
} from '@/utils/validate'
const keyName = 'ly-'
/**
 * @description 存储Storage
 * @param {Object} name key值 keyName+name
 * @param {Object} content 内容
 * @param {Object} type 存储类型，为session时使用sessionStorage否则使用localStorage
 * @example
 *  setStore({
      name: 'access_token',
      content: state.access_token,
      type: 'session'
    })
 */
export const setStore = (params = {}) => {
  // let {
  //   name,
  //   content,
  //   type
  // } = params
  let name = params.name
  const content = params.content
  const type = params.type
  name = keyName + name
  const obj = {
    dataType: typeof (content),
    content: content,
    type: type,
    datetime: new Date().getTime()
  }
  if (type) window.sessionStorage.setItem(name, JSON.stringify(obj))
  else window.localStorage.setItem(name, JSON.stringify(obj))
}
/**
 * @description 获取Storage
 * @param {Object} name key值 keyName+name
 * @param {Object} type true：返回sessionStorage数据，false或者无值，返回localStorage数据
 * @example
 *  getStore({
      name: 'access_token',
    })
 */
export const getStore = (params = {}) => {
  // let {
  //   name,
  //   type
  // } = params
  let name = params.name
  const type = params.type
  name = keyName + name
  let obj = {}
  let content
  if (type) {
    obj = window.sessionStorage.getItem(name)
  } else {
    obj = window.localStorage.getItem(name)
  }

  // if (validatenull(obj)) obj = window.localStorage.getItem(name);
  if (validatenull(obj)) return
  try {
    obj = JSON.parse(obj)
  } catch {
    return obj
  }
  // if (debug) {
  //   return obj;
  // }
  if (obj.dataType === 'string') {
    content = obj.content
  } else if (obj.dataType === 'number') {
    content = Number(obj.content)
  } else if (obj.dataType === 'boolean') {
    content = obj.content === 'true' || obj.content === true
  } else if (obj.dataType === 'object') {
    content = obj.content
  }
  return content
}
/**
   * @description 删除Storage
   * @param {Object} name key值 keyName+name
   * @param {Object} type true：删除sessionStorage，false或者无值，删除localStorage
   * @example
   *  removeStore({
        name: 'access_token',
        type: 'session'
      })
  */
export const removeStore = (params = {}) => {
  // let {
  //   name,
  //   type
  // } = params
  let name = params.name
  const type = params.type
  name = keyName + name
  if (type) {
    window.sessionStorage.removeItem(name)
  } else {
    window.localStorage.removeItem(name)
  }
}

/**
   * @description 获取全部存储数据
   * @param {Object} type true：获取sessionStorage所有数据，false或者无值，获取localStorage所有数据
   * @example
   *  getAllStore({
        type: 'session'
      })
  */
export const getAllStore = (params = {}) => {
  const list = []
  const {
    type
  } = params
  if (type) {
    for (let i = 0; i <= window.sessionStorage.length; i++) {
      list.push({
        name: window.sessionStorage.key(i),
        content: getStore({
          name: window.sessionStorage.key(i),
          type: 'session'
        })
      })
    }
  } else {
    for (let i = 0; i <= window.localStorage.length; i++) {
      list.push({
        name: window.localStorage.key(i),
        content: getStore({
          name: window.localStorage.key(i)
        })
      })
    }
  }
  return list
}

/**
   * @description 清空全部存储数据
   * @param {Object} type true：清空sessionStorage所有数据，false或者无值，清空localStorage所有数据
   * @example
   *  clearStore({
        type: 'session'
      })
  */
export const clearStore = (params = {}) => {
  const { type } = params
  if (type) {
    window.sessionStorage.clear()
  } else {
    window.localStorage.clear()
  }
}
