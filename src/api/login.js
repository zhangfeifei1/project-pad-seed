
import request from '@/utils/request'
// import {JsonToQueryString} from '@/utils/index'

/**
 * 登录
 * @param params 登录上送参数
 */
export const login = (params) => {
  const url = '/auth/oauth/token'
  return request({
    url: url,
    method: 'post',
    params
  })
}
