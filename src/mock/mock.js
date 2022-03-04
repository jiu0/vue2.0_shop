import Mock from 'mockjs'

 // 登录
 Mock.mock("/login","post",{
     "data":{
        "data":{
            "id":500,
            "rid":0,
            "username":"admin",
            "mobile":"123",
            "email":"123@qq.com",
            "token":"uqweirruifjdkiewr893473295732598245",
            },
        "meta":{
            "msg":"登录成功",
            "status":200
        }   
      }
  })

  // 左侧菜单导航数据
  Mock.mock("/menus","get",{
    "data":{
       "data":[
           { 
            "id":125,
            "order":1,
            "authName":"用户管理",
            "path":"user",
            "children":[
                    {
                        "id":110,
                        "authName":"用户列表",
                        "path":"user",
                        "children":[]
                    }
                  ]
             },
             { 
                "id":103,
                "authName":"权限管理",
                "path":"rights",
                "children":[
                        {
                            "id":104,
                            "authName":"权限列表",
                            "path":"rights",
                            "children":[]
                        }
                      ]
             },
             { 
                "id":101,
                "authName":"商品管理",
                "path":"goods",
                "children":[
                        {
                            "id":105,
                            "authName":"商品列表",
                            "path":"goods",
                            "children":[]
                        }
                      ]
             },
             { 
                "id":102,
                "authName":"订单管理",
                "path":"orders",
                "children":[
                        {
                            "id":105,
                            "authName":"订单列表",
                            "path":"orders",
                            "children":[]
                        }
                      ]
              },
              { 
                "id":145,
                "authName":"数据统计",
                "path":"reports",
                "children":[
                        {
                            "id":105,
                            "authName":"数据列表",
                            "path":"reports",
                            "children":[]
                        }
                      ]
              },
         ],
       "meta":{
           "msg":"获取菜单列表成功",
           "status":200
       }   
     }
 })



 // 内容区用户数据列表
 Mock.mock("/users","get",{
    "data":{
       "data":{
           "pagenum":1,
           "total":4,
           "users":[
              {"id":500,"role_name":"超级管理员","username":"admin","create_time":13305868967,
              "type":1,"email":"4835045@qq.com","mobile":"199506660067","mg_state":true},
              {"id":502,"role_name":"超级管理员2","username":"admin2","create_time":13305848967,
              "type":2,"email":"48354345@qq.com","mobile":"1995566660067","mg_state":false},
            ]
           },
       "meta":{
           "msg":"获取管理员列表成功",
           "status":200
       }   
     }
 })


  // 内容区用户数据状态改变
  //Mock.mock("/users/:uId/state/:type","put",{
  Mock.mock("/users","put",{    
    "data":{
       "data":{
           "id":566,
           "rid":30,
           "username":"admin",
           "mobile":"123456",
           "email":"4444@qq.com",
           "mg_state":0
           },
       "meta":{
           "msg":"设置状态成功",
           "status":200
       }   
     }
 })


 // 新增用户
 Mock.mock("/addusers","post",{
    "data":{
       "data":{
            "id":28,
            "username":"49400455ddd",
            "mobile":"12333333",
            "type":1,
            "openid":"",
            "email":"yesgsg@qq.com",
            "create_time":"9999996757888",
            "modify_time":null,
            "is_delete":false,
            "is_active":false
           },
       "meta":{
           "msg":"用户创建成功",
           "status":201
       }   
     }
 })

  // 编辑用户渲染数据到弹框
  Mock.mock("/editusers","get",{
    "data":{
       "data":[
          {
            "id":503,
            "username":"admin3",
            "role_id":0,
            "mobile":18218394056,
            "email":"yesgsg@qq.com",
           },
           {
            "id":504,
            "username":"admin4",
            "role_id":1,
            "mobile":18218394057,
            "email":"6666666g@qq.com",
           },
        ],
       "meta":{
           "msg":"获取用户成功",
           "status":200
       }   
     }
 })

 // 编辑用户后提交数据
 Mock.mock("/editsubmitusers","post",{
    "data":{
       "data":{
            "id":503,
            "username":"admin3",
            "role_id":0,
            "mobile":1888999,
            "email":"yesgsg@qq.com",
           },
       "meta":{
           "msg":"更新成功",
           "status":200
        }   
     }
 })

 // 删除单个用户
 Mock.mock("/deleteuser","delete",{
    "data":{
       "data":null,
       "meta":{
           "msg":"删除成功",
           "status":200
        }   
     }
 })
