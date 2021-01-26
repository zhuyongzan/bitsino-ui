import TabList from './src'

// 为组件提供 install 安装方法，供按需引入
TabList.install = function (Vue) {
    Vue.component(TabList.name, TabList)
}
// 默认导出组件
export default TabList