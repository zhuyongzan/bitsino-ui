export default [{
    path: '/404',
    component: () =>
      import('../../components/error-page/404'),
    name: '404',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }

  },{
    path: '*',
    redirect: '/404'
  }
]
