/**
 * @description 通讯公共方法
 * @author digua
 * @version 0.1.0
 */
import axios from 'axios'
import store from '@/store'
import $config from '@/settings/defaultSetting'
let baseUrl = ''
switch (process.env.NODE_ENV) {
  case 'development':
    // 这里是本地的请求url
    baseUrl = $config.apiUrl.dev
    break
  case 'production':
    // 生产环境url
    baseUrl = $config.apiUrl.pro
    break
}
// axios 配置
const service = axios.create({
  // api的base_url
  baseURL: baseUrl,
  // 设置请求超时时间30s
  headers: $config.apiUrl.headers,
  timeout: $config.apiUrl.timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    const isToken = (config.headers || {}).isToken === false
    const token = store.getters.access_token
    if (token && !isToken) {
      config.headers['Authorization'] = 'Bearer ' + token// token
    }

    // 遮罩打开

    return config
  },
  error => {
    // 遮罩关闭

    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response
    // 遮罩关闭

    return res
  },
  error => {
    // 遮罩关闭

    alert(error.message)
    return Promise.reject(error)
  }
)

export default service
