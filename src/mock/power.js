import Mock from 'mockjs'
  // 所有权限列表
  Mock.mock("/rightslist","get",{
    "data":{
       "data":[
          {
            "id":101,
            "authName":"商品管理",
            "level":"0",
            "pid":0,
            "path":"goods",
           },
           {
            "id":105,
            "authName":"订单管理",
            "level":"0",
            "pid":0,
            "path":"orders",
           },
        ],
       "meta":{
           "msg":"获取权限列表成功",
           "status":200
        }   
     }
 })


 
  // 角色授权  分配权限弹框 提交
  Mock.mock("/rolestip","post",{
    "data":{
       "data":null,
       "meta":{
           "msg":"分配权限更新成功",
           "status":200
        }   
     }
 })



 
  // 分配所有权限列表
  Mock.mock("/rightstree","get",{
    "data":{
       "data":[
          {
            "id":10,
            "authName":"商品管理",
            "level":"0",
            "pid":0,
            "path":"goods",
            "children":[
               {
                "id":101,
                "authName":"商品列表",
                "pid":101,
                "path":"goods",
                 "children":[
                     {
                        "id":1002,
                        "authName":"添加商品",
                        "pid":'104,101',
                        "path":"goods",
                     },
                     {
                        "id":1003,
                        "authName":"删除商品",
                        "pid":'104,101',
                        "path":"goods",
                     },
                     {
                        "id":1001,
                        "authName":"商品修改",
                        "path":"goods",
                     },
                  ]
                }
             ]
           },
           {
            "id":2,
            "authName":"订单管理",
            "level":"0",
            "pid":1,
            "path":"orders",
            "children":[
                {
                 "id":20,
                 "authName":"订单列表",
                 "pid":101,
                 "path":"orders",
                  "children":[
                      {
                         "id":201,
                         "authName":"添加订单",
                         "pid":'101,105',
                         "path":"orders",
                      },
                      {
                         "id":204,
                         "authName":"删除订单",
                         "pid":'108,109',
                         "path":"orders",
                      },
                      {
                        "id":202,
                        "authName":"订单更新",
                        "path":"orders",
                       },
                       {
                        "id":203,
                        "authName":"获取订单详情",
                        "path":"orders",
                       },
                   ]
                 }
              ]
           },
           {
            "id":3,
            "authName":"角色列表",
            "path":"roles",
            "level":"0",
            "pid":3,
            "children":[
               {
                "id":31,
                "authName":"添加角色",
                "pid":'31',
                "path":"roles",
               },
               {
                "id":32,
                "pid":'33',
                "authName":"角色授权",
                "path":"roles",
               },
               {
                "id":303,
                "pid":'303',   
                "authName":"获取角色授权",
                "path":"roles",
               },
               {
                "id":302,
                "authName":"删除角色",
                "path":"rights",
               },
             ]
           },
           {
            "id":4,
            "authName":"权限管理",
            "path":"rights",
            "level":"0",
             "children":[
                {
                    "id":41,
                    "authName":"权限列表",
                    "path":"rights",
                    "children":[
                            {
                              "id":411,
                              "authName":"查看权限",
                              "path":"roles",
                             },
                             {
                              "id":412,
                              "authName":"添加用户",
                              "path":"roles",
                             },
                             {
                              "id":413,
                              "authName":"更新用户",
                              "path":"roles",
                             },
                             {
                              "id":414,
                              "authName":"分配用户角色",
                              "path":"roles",
                             },
                     ]
                 }
             ]
           },
        ],
       "meta":{
           "msg":"获取分配权限列表成功",
           "status":200
        }   
     }
 })



  // 所有角色列表 表格展开的数据
  Mock.mock("/roles","get",{
    "data":{
       "data":[
           {
            "id":1,
            "roleName":"主管",
            "roleDesc":"技术负责人",
            "children":[
               {
                    "id":10,
                    "authName":"商品管理",
                    "path":"goods",
                    "children":[
                        {
                            "id":101,
                            "authName":"商品列表",
                            "path":"goods",
                            "children":[
                            {
                                "id":1001,
                                "authName":"商品修改",
                                "path":"goods",
                            },
                            ]
                        }
                    ]
                },
                {
                    "id":2,
                    "authName":"订单管理",
                    "path":"orders",
                     "children":[
                         {
                            "id":20,
                            "authName":"订单列表",
                            "path":"orders",
                            "children":[
                               {
                                "id":201,
                                "authName":"添加订单",
                                "path":"orders",
                               },
                               {
                                "id":204,
                                "authName":"删除订单",
                                "path":"orders",
                               },
                            ]
                         },
                         {
                            "id":21,
                            "authName":"角色列表",
                            "path":"roles",
                            "children":[
                               {
                                "id":211,
                                "authName":"添加角色",
                                "path":"roles",
                               },
                               {
                                "id":212,
                                "authName":"角色授权",
                                "path":"roles",
                               },
                            ]
                         },
                     ]
                  },
                  {
                    "id":4,
                    "authName":"权限管理",
                    "path":"rights",
                     "children":[
                         {
                            "id":30,
                            "authName":"角色列表",
                            "path":"rights",
                            "children":[
                               {
                                "id":301,
                                "authName":"添加角色",
                                "path":"rights",
                               },
                               {
                                "id":302,
                                "authName":"删除角色",
                                "path":"rights",
                               },
                               {
                                "id":303,
                                "authName":"取消角色授权",
                                "path":"rights",
                               },
                            ]
                         },
                         {
                            "id":411,
                            "authName":"权限列表",
                            "path":"roles",
                            "children":[
                               {
                                "id":412,
                                "authName":"查看权限",
                                "path":"roles",
                               },
                               {
                                "id":413,
                                "authName":"添加用户",
                                "path":"roles",
                               },
                            ]
                         },
                      ]
                  },
              ]
           },
        ],
       "meta":{
           "msg":"获取角色列表成功",
           "status":200
        }   
     }
 })


//删除表格展开的数据权限
Mock.mock("/rolesrights","delete",{
    "data":{
       "data":[
           {
            "id":30,
            "roleName":"主管",
            "roleDesc":"技术负责人",
            "children":[
               {
                "id":101,
                "authName":"商品管理",
                "path":"goods",
                 "children":[
                     {
                        "id":1001,
                        "authName":"商品列表",
                        "path":"goods",
                        "children":[
                           {
                            "id":10001,
                            "authName":"商品修改",
                            "path":"goods",
                           }
                        ]
                     }
                  ]
                },
                {
                    "id":102,
                    "authName":"订单管理",
                    "path":"orders",
                     "children":[
                         {
                            "id":1002,
                            "authName":"订单列表",
                            "path":"orders",
                            "children":[
                               {
                                "id":10002,
                                "authName":"添加订单",
                                "path":"orders",
                               },
                               {
                                "id":10003,
                                "authName":"订单更新",
                                "path":"orders",
                               },
                            ]
                         },
                         {
                            "id":1003,
                            "authName":"角色列表",
                            "path":"roles",
                            "children":[
                               {
                                "id":10003,
                                "authName":"添加角色",
                                "path":"roles",
                               },
                               {
                                "id":10004,
                                "authName":"添加角色",
                                "path":"roles",
                               },
                               {
                                "id":10005,
                                "authName":"角色授权",
                                "path":"roles",
                               },
                               {
                                "id":10006,
                                "authName":"获取角色授权",
                                "path":"roles",
                               },
                            ]
                         },
                      ]
                  },
                  {
                    "id":103,
                    "authName":"权限管理",
                    "path":"rights",
                     "children":[
                         {
                            "id":1003,
                            "authName":"角色列表",
                            "path":"rights",
                            "children":[
                               {
                                "id":10003,
                                "authName":"添加角色",
                                "path":"rights",
                               },
                               {
                                "id":10004,
                                "authName":"删除角色",
                                "path":"rights",
                               },
                               {
                                "id":10005,
                                "authName":"取消角色授权",
                                "path":"rights",
                               },
                            ]
                         },
                         {
                            "id":1004,
                            "authName":"权限列表",
                            "path":"roles",
                            "children":[
                               {
                                "id":10004,
                                "authName":"查看权限",
                                "path":"roles",
                               },
                               {
                                "id":10005,
                                "authName":"添加用户",
                                "path":"roles",
                               },
                               {
                                "id":10006,
                                "authName":"更新用户",
                                "path":"roles",
                               },
                               {
                                "id":10007,
                                "authName":"分配用户角色",
                                "path":"roles",
                               },
                            ]
                         },
                      ]
                  },
              ]
           },
        ],
       "meta":{
           "msg":"删除角色成功",
           "status":200
        }   
     }
 })




