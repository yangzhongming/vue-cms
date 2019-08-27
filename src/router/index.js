import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Head from '@/components/Head'

import {Header} from 'mint-ui'
Vue.component(Header.name, Header)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Head',
      name: 'Head',
      component: Head
    }
  ]
})
