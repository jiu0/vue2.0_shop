//项目发布阶段需要用到的 babel 插件
const prodPlugins = []
if(process.env.NODE_ENV === 'production'){
  prodPlugins.push('transform-remove-console')
}
module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    //"transform-remove-console",
    ...prodPlugins,  // 移除项目中所有的console.log
    "@babel/plugin-syntax-dynamic-import"   // 路由濑加载  按需加载路由
  ]
}