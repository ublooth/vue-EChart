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