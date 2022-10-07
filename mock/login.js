export default [
  // user login
  {
    url: '/auth/oauth/token',
    type: 'post',
    response: config => {
      return {
        'access_token': '24d0cc5c-081a-4dae-a5f5-2a423a3bc980',
        'token_type': 'bearer',
        'refresh_token': 'bf81ad76-540f-47b9-ba88-e2d4711fc700',
        'expires_in': 43199,
        'scope': 'server',
        'tenant_id': 1,
        'license': 'made by fairy',
        'dept_id': 1,
        'user_id': 1,
        'username': 'admin'
      }
    }
  },
  {
    url: '/admin/user/info',
    type: 'get',
    response: config => {
      return {
        'code': 0,
        'msg': null,
        'data': {
          'sysUser': {
            'userId': 1,
            'username': 'admin',
            'password': '$2a$10$QOfWxxFyAMmEEmnuw9UI/..1s4B4eF/u9PzE2ZaGO.ij9YfmcUy.u',
            'createTime': '2018-04-20 07:15:18',
            'updateTime': '2019-07-31 14:24:42',
            'delFlag': '0',
            'lockFlag': '0',
            'phone': '17034642889',
            'avatar': '',
            'deptId': 1,
            'tenantId': 1,
            'wxOpenid': 'o_0FT0uyg_H1vVy2H0JpSwlVGhWQ',
            'qqOpenid': null
          },
          'permissions': ['sys_client_edit', 'sys_dict_add', 'sys_user_del', 'sys_dept_del', 'sys_menu_add', 'sys_role_add', 'sys_client_add', 'sys_user_edit', 'sys_dept_edit', 'sys_dict_edit', 'sys_menu_del', 'sys_menu_edit', 'sys_role_edit', 'sys_role_perm', 'sys_user_add', 'sys_token_del', 'sys_dept_add', 'sys_role_del', 'sys_client_del', 'sys_dict_del'],
          'roles': [1]
        }
      }
    }
  },
  {
    url: '/auth/token/logout',
    type: 'delete',
    response: config => {
      return {
        'code': 0,
        'msg': null,
        'data': true
      }
    }
  }
  //   {
  //     url: '/auth/oauth/token',
  //     type: 'post',
  //     response: config => {
  //         const grant_type = 'refresh_token'
  //       return {
  //             "access_token": "24d0cc5c-081a-4dae-a5f5-2a423a3bc980",
  //             "token_type": "bearer",
  //             "refresh_token": "bf81ad76-540f-47b9-ba88-e2d4711fc700",
  //             "expires_in": 43199,
  //             "scope": "server",
  //             "tenant_id": 1,
  //             "license": "made by fairy",
  //             "dept_id": 1,
  //             "user_id": 1,
  //             "username": "admin"
  //           }
  //     }
  //   },

]

