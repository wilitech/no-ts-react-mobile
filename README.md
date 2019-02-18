# REACT-TEMPLATE

### 项目说明
技术栈：React、React-router、Webpack、Antd-design
本模板由原模板修改，移除了typescript，使用 react-router v4

### 项目运行
```bash
npm install

npm run dev

npm run build
```

### 项目结构
```
  |-- node_modules
  |-- src
  |    |-- assets                // 图片css 资源等
  |    |    |-- css
  |    |    |-- img
  |    |-- components            // 组件
  |    |-- pages                 // 页面
  |    |-- redux                 // redux
  |    |-- router                // 路由（待定）
  |    |-- app.js               // 入口文件
  |    |-- index.html
  |-- static
  |    |-- favicon.ico
  |-- webpackConfig
  |    |--webpack.build.config.js // 生成环境webpack配置
  |    |--webpack.dev.config.js   // 开发环境webpack配置
  |-- package.json
```

### Todo
- Eslint
- Router完善（es6）
- webpack优化
- Redux
- page补充
  - 首页页
  - tabbar
  - 文章列表页
  - 文章详情页
  - 个人中心页
  - 待补充
