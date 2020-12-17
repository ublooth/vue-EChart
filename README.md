# vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### echarts-BUG临时解决方案：

引入echarts的地方改为
```
import * as echarts from 'echarts'
```
webpack的DefinePlugin里加入如下字段
```
// 此处根据情况自行修改，结果为boolean就行，true的情况下会多一些日志信息
'__DEV__': process.env.node_env === 'dev' 
```
或者 √
```
npm un echarts && npm i -E echarts@3.7.2 zrender@3.6.3
```

### 使用 Vue-Cli 脚手架创建 Vue 项目实现 Element 的按需引入
安装 element-ui 和 babel-plugin-component 和 babel-preset-es2015 依赖
```
npm intall element-ui --save
npm install babel-plugin-component -D
npm install babel-preset-es2015 -D
```
修改 .babelrc 文件
```
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```
在 main.js 文件下，按需引入组件，且挂在到 Vue 实例上
```
import {
  Butto（组件名）
} from 'element-ui'

Vue.use(Button)
```
在 template 中便可使用 Button 组件
```
<template>
  <div>
  	<el-button type='primary'>按钮</el-button>
  </div>
</template>
```