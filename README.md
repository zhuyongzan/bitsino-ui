# 一、目录结构

    bitsino-ui
    |--examples //示例展示
    |--packages //存放组件
        ...
        |--index.js // 整合所有组件并导出
    |--public
    |--.gitignore
    |--babel.config.js
    |--package.json
    |--package-lock.json
    |--README.md
    |--vue.config.js //所有的对项目和webpack的配置

# 二、packages 编写组件
/packages

    packages
    |--alrt //示例组件
        |--src
            |--index.vue
        |--index.js // 导出单个组件
    |--index.js //整合所有组件并导出


# 三、examples 示例展示

## 引入
/examples/main.js

```javascript
import BitsinoUi from '../packages'
Vue.use(BitsinoUi)
```
`npm run serve`启动项目

# 四、打包
vue-cli3 提供了一个[库文件打包命令](https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93)

主要的有四个参数

    1.target：默认为构建应用，改为 `lib` 即可启用构建库模式
    2.name：输出文件名
    3.dest：输出目录，默认为 `dist`，这里我们改为 `lib`
    4.entry：入口文件路径，默认为 `src/App.vue`，这里改为 `packages/index.js`

执行 `npm run build-lib`命令，编译组件
构建一个库会输出：
    
    1.bitsino-ui.common.js //一个给打包器用的 CommonJS 包 (不幸的是，webpack 目前还并没有支持 ES modules 输出格式的包)
    2.bitsino-ui.umd.js //一个直接给浏览器或 AMD loader 使用的 UMD 包
    3.dist/myLib.css //若vue.config.js中 设置css.extract = false 则为强制内联。否则样式会被单独打包，在引用时需引入打包后的样式文件

# 五、发布到npm

- 配置镜像

`npm config set registry http://registry.npmjs.org`
- 登录npm

`npm login`
    
    Username:z_praise
    password:公司域名
    Email:z_praise的企业邮箱    
- 执行发布命令

`npm publish`
