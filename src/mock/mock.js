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
                            "authName":"数据报表",
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


