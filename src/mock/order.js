import Mock from 'mockjs'

 // 订单列表
 Mock.mock("/orders","get",{
    "data":{
       "data":{
           "total":34,
           "pagenum":"3",
           "goods":[
              {
                "order_id":46,
                "user_id":133,
                "order_number":"idue697707007",
                "order_price":322,
                "order_pay":"2",
                "is_send":"是",
                "trade_no":"",
                "order_fapiao_title":"个人",
                "order_fapiao_company":"",
                "order_fapiao_content":"办公用品",
                "consignee_addr":"a:7:{s:6:\"cgn_id\";i:1;s:7:\"user_id\";i:133;s:8:\"cgn_name\";s:9:\"王为\":s:1l:\"cgn_address\";s:51:\"本金市内咸宁显崇阳真大唐存一组\";s:7:\"cgn_tel\";s:11:\"123456788098\";s:8:\"cgn_code\";s:6:\"3045673\";s:11:\"delete_time\";N;}",
                "pay_status":"1",
                "create_time":1233333123,
                "update_time":123333333333,
                },
                {
                    "order_id":47,
                    "user_id":135,
                    "order_number":"idue77697707007",
                    "order_price":3227,
                    "order_pay":"27",
                    "is_send":"是",
                    "trade_no":"",
                    "order_fapiao_title":"个人",
                    "order_fapiao_company":"",
                    "order_fapiao_content":"办公用品",
                    "consignee_addr":"a:7:{s:6:\"cgn_id\";i:1;s:7:\"user_id\";i:133;s:8:\"cgn_name\";s:9:\"王为\":s:1l:\"cgn_address\";s:51:\"本金市内咸宁显崇阳真大唐存一组\";s:7:\"cgn_tel\";s:11:\"123456788098\";s:8:\"cgn_code\";s:6:\"3045673\";s:11:\"delete_time\";N;}",
                    "pay_status":"0",
                    "create_time":13333333098,
                    "update_time":7894564578905,
                    },
             ],
           },
          "meta":{
                "msg":"获取订单列表成功",
                "status":200
           }   
     }
 })




// 获取省
Mock.mock("/citypicker","post",{
    "data":{
       "pagenum":1,
       "pageSize":5,
       "total":30,
       "data":[
           {
            "city_id":2,
            "city_name":"湖北",
            "city_code":1110000,
            "children":[
               {
                "city_id":3,
                "city_name":"咸宁",
                "city_code":4441000,
                 "children":[
                     {
                        "city_id":4,
                        "city_name":"崇阳",
                        "city_code":222000,
                        "children":[
                            {
                              "city_id":77888,
                              "city_name":"桃溪大道",
                              "city_code":999908899,
                            },
                            {
                                "city_id":7788822,
                                "city_name":"桃溪大道2",
                                "city_code":999908892229,
                              },
                        ]
                     },
                     {
                       "city_id":222,
                       "city_name":"通城",
                      "city_code":2220050,
                     },
                  ]
                },  
                {
                    "city_id":222666,
                    "city_name":"武汉",
                    "city_code":222006666650,
                },
              ]
           },
           {
            "city_id":29,
            "city_name":"湖男",
            "city_code":1100,
           },
        ],
       "meta":{
           "msg":"获取省市区县成功",
           "status":200
        },
     }
 })
 

 
 // 查看物流信息
 Mock.mock("/kudidi","get",{
  "data":{
     "data":{
         "data":[
              {
                "time":"2018-05-03 09:23:32",
                "ftime":"2018-05-03 09:23:42",
                "context":"已签收,感谢使用顺丰",
                "location":"",
              },
              {
                "time":"2018-05-04 10:23:32",
                "ftime":"2018-05-04 10:24:42",
                "context":"已签收2,感谢使用顺丰2",
                "location":"",
              },
              {
                "time":"2019-05-04 14:23:32",
                "ftime":"2019-06-04 11:24:42",
                "context":"已签收3,感谢使用顺丰3",
                "location":"",
              },
           ],
         },
        "meta":{
              "msg":"获取物流信息成功",
              "status":200
         }   
   }
})
