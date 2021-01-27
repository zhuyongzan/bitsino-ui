import Layout from '../../page/index'

/**
 * meta{
 *     keepAlive:true,//是否缓存 true：缓存；false：不缓存；
 * }
 */
export default [{
    path: '/',
    redirect: '/components/home'
}, {
    path: '/components',
    component: Layout,
    redirect: 'components/home',
    children: [{
        path: 'home',
        name: '介绍',
        meta: {
            keepAlive: false,
        },
        component: () =>
            import('../../views/home/index')
    }, {
        path: 'quickstart',
        name: '快速上手',
        meta: {
            keepAlive: false,
        },
        component: () =>
            import('../../views/quickstart/index')
    }]
}]
