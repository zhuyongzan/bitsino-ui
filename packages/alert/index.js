import Alert from './src'

// 为组件提供 install 安装方法，供按需引入
Alert.install = function (Vue) {
    Vue.component(Alert.name, Alert)
}
// 默认导出组件
export default Alert