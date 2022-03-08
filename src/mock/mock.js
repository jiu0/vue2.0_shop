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
            "path":"users",
            "children":[
                    {
                        "id":110,
                        "authName":"用户列表",
                        "path":"users",
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
                        },
                        {
                            "id":107,
                            "authName":"角色列表",
                            "path":"roles",
                            "children":[]
                        },
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
                        },
                        {
                           "id":106,
                           "authName":"商品分类",
                           "path":"categories",
                           "children":[]
                       },
                       {
                        "id":107,
                        "authName":"分类参数",
                        "path":"params",
                        "children":[]
                      },
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


  // 角色授权  分配权限弹框 提交
  Mock.mock("/userrole","put",{
   "data":{
      "data":{
          "id":508,
          "rid":"30",
          "username":"aaaaa",
          "mobile":"18128394056",
          "email":"wurot222@qq.com"
       },
      "meta":{
          "msg":"设置角色成功",
          "status":200
       }   
    }
})



//获取商品分类列表  级联框
Mock.mock("/categories","get",{
   "data":{
      "pagenum":1,
      "pageSize":5,
      "total":30,
      "data":[
          {
           "cat_id":1,
           "cat_name":"大家电",
           "cat_pid":0,
           "cat_level":0,
           "cat_deleted":false,
           "children":[
              {
               "cat_id":21,
               "cat_name":"电视",
               "cat_pid":1,
               "cat_level":1,
               "cat_deleted":false,
                "children":[
                    {
                        "cat_id":211,
                        "cat_name":"曲面电视",
                        "cat_pid":2,
                        "cat_level":2,
                        "cat_deleted":false,
                    },
                    {
                     "cat_id":212,
                     "cat_name":"彩色电视",
                     "cat_pid":3,
                     "cat_level":3,
                     "cat_deleted":false,
                  },
                 ]
               },  
             ]
          },
          {
            "cat_id":4,
            "cat_name":"服装",
            "cat_pid":0,
            "cat_level":0,
            "cat_deleted":false,
            "children":[
               {
                "cat_id":41,
                "cat_name":"衣服",
                "cat_pid":1,
                "cat_level":1,
                "cat_deleted":false,
                 "children":[
                     {
                         "cat_id":411,
                         "cat_name":"男装",
                         "cat_pid":2,
                         "cat_level":2,
                         "cat_deleted":false,
                     },
                     {
                      "cat_id":412,
                      "cat_name":"女装",
                      "cat_pid":3,
                      "cat_level":3,
                      "cat_deleted":false,
                   },
                  ]
                },  
              ]
           },
       ],
      "meta":{
          "msg":"获取商品分类成功",
          "status":200
       },

    }
})



  // 添加商品分类
  Mock.mock("/addcategories","post",{
   "data":{
      "data":{
          "cat_id":64,
          "cat_name":"相恋了",
          "cat_pid":"1",
          "cat_level":"23",
       },
      "meta":{
          "msg":"新增商品分类成功",
          "status":201
       }   
    }
})



  // 获取商品静态参数列表  only 静态参数  many 动态参数
  Mock.mock("/categoriesonlyatr","get",{
   "data":{
      "data":[
         {
          "attr_id":1,
          "attr_name":"版式",
          "cat_id":33,
          "attr_sel":"only",
          "attr_vals":"曲面版式,人工版式,光滑版式,飞面版式,曲度版式",
         },
         {
            "attr_id":2,
            "attr_name":"版式",
            "cat_id":34,
            "attr_sel":"only",
            "attr_vals":"曲面版式44,人工版式44,光滑版式44,飞面版式44,曲度版式44",
           },
      ],
      "meta":{
          "msg":"获取静态参数成功",
          "status":200
       }   
    }
})


  // 获取商品动态参数列表  only 静态参数  many 动态参数
  Mock.mock("/categoriesmanyatr","get",{
   "data":{
      "data":[
           {
            "attr_id":2,
            "attr_name":"cp3",
            "cat_id":34,
            "attr_sel":"many",
            "attr_vals":"曲面版式2,人工版式2,光滑版式2,飞面版式2,曲度版式2",
           },
           {
            "attr_id":78,
            "attr_name":"cp3",
            "cat_id":45,
            "attr_sel":"many",
            "attr_vals":"曲面版式55,人工版式255,光滑版式255,飞面版式255,曲度版式255",
           },
       ],
      "meta":{
          "msg":"获取动态参数成功",
          "status":200
       }   
    }
})


  // 添加商品静态参数  only 静态参数  many 动态参数
  Mock.mock("/addcategoriesonlyatr","post",{
   "data":{
      "data":[
         {
          "attr_id":1,
          "attr_name":"cpo",
          "cat_id":33,
          "attr_sel":"only",
          "attr_write":"list",
          "attr_vals":"a,b,c",
         },
      ],
      "meta":{
          "msg":"添加静态参数成功",
          "status":200
       }   
    }
})

  // 添加商品动态参数  only 静态参数  many 动态参数
  Mock.mock("/addcategoriesmanyatr","post",{
   "data":{
      "data":[
           {
            "attr_id":2,
            "attr_name":"cp3",
            "cat_id":34,
            "attr_sel":"many",
            "attr_write":"list2",
            "attr_vals":"a,b,c,d",
         },
       ],
      "meta":{
          "msg":"添加动态参数成功",
          "status":200
       }   
    }
})



  // 编辑商品静态参数  渲染数据 only 静态参数  many 动态参数
  Mock.mock("/editcategoriesonlyatr","post",{
   "data":{
      "data":[
         {
          "attr_id":1,
          "attr_name":"cpo",
          "cat_id":33,
          "attr_sel":"only",
          "attr_write":"list",
          "attr_vals":"a,b,c",
         },
      ],
      "meta":{
          "msg":"渲染静态参数成功",
          "status":200
       }   
    }
})


  // 编辑商品动态参数 渲染数据  only 静态参数  many 动态参数
  Mock.mock("/editcategoriesmanyatr","post",{
   "data":{
      "data":[
           {
            "attr_id":2,
            "attr_name":"cp3",
            "cat_id":34,
            "attr_sel":"many",
            "attr_write":"list2",
            "attr_vals":"a,b,c,d",
         },
       ],
      "meta":{
          "msg":"渲染动态参数成功",
          "status":200
       }   
    }
})


  // 编辑商品静态参数 确认提交  渲染数据 only 静态参数  many 动态参数
  Mock.mock("/editsubcategoriesonlyatr","put",{
   "data":{
      "data":[
         {
          "attr_id":1,
          "attr_name":"cpo",
          "cat_id":33,
          "attr_sel":"only",
          "attr_write":"list",
          "attr_vals":"a,b,c",
         },
      ],
      "meta":{
          "msg":"提交修改静态参数成功",
          "status":200
       }   
    }
})

  // 编辑商品动态参数 确认提交  渲染数据 only 静态参数  many 动态参数
  Mock.mock("/editsubcategoriesmanyatr","put",{
   "data":{
      "data":[
         {
          "attr_id":1,
          "attr_name":"cpo",
          "cat_id":33,
          "attr_sel":"many",
          "attr_write":"list",
          "attr_vals":"a,b,c",
         },
      ],
      "meta":{
          "msg":"提交修改动态参数成功",
          "status":200
       }   
    }
})

  //  删除参数接口
  Mock.mock("/deletecategories","delete",{
   "data":{
      "data":null,
      "meta":{
          "msg":"删除成功",
          "status":200
       }   
    }
})


