import Mock from 'mockjs'

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