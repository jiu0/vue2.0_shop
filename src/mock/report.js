import Mock from 'mockjs'

 // 获取报表数据
 Mock.mock("/reportlist","post",{
    data:{
       data:{
            title: {
                text: '用户来源'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
                }
            },
            legend: {
                data: ['华东', '华南', '华北', '西部', '其他']
            },
            toolbox: {
                feature: {
                saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top:'10%',
                containLabel: true
            },
            xAxis: [
                {
                type: 'category',
                boundaryGap: false,
                data: ['2017-12-27', '2017-12-28', '2017-12-29', '2017-12-30', '2017-12-31']
                }
            ],
            yAxis: [
                {
                type: 'value',
                //min:5000,
               // max:45000,
                // axisLabel:{
                //     formatter: function (value) {
                //         var texts = [];
                //         if(value==0){
                //         texts.push('woo');
                //         }
                //         else if (value <=1) {
                //         texts.push('好');
                //         }
                //         else if (value<= 2) {
                //         texts.push('很好');
                //         }
                //         else if(value<= 3){
                //         texts.push('非常好');
                //         }
                //         else{
                //         texts.push('完美');
                //         }
                //         return texts;
                //       }
                //    }
                }
            ],
            series: [
                {
                name: '华东',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [4000, 5000, 6000, 5000, 5400, 7000]
                },
                {
                name: '华南',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [8000, 7000, 7900, 10000, 11000, 13000]
                },
                {
                name: '华北',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [15000, 10000, 16000, 22000, 24000, 28000]
                },
                {
                name: '西部',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [25000, 14000, 24000, 36000, 38000, 41000]
                },
                {
                name: '其他',
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [40000, 20000, 33000, 50000, 52000, 53000]
                }
              ]
           },
        meta:{
           msg:"获取报表数据成功",
           status:200
       }   
     }
 })

