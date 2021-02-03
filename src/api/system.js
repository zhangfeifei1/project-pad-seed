import request from '@/utils/request'
import { JsonToQueryString } from '@/utils/index'

/**
 * 查询应用列表
 * @param id 应用id
 */
export const getAppList = (params) => {
  const forData = {
    id: params.developerName
  }
  let url = 'system/app'
  url = url + '?' + JsonToQueryString(forData)
  return request({
    url: url,
    method: 'get'
  })
}
