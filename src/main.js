import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueRsource from 'vue-resource'
Vue.use(VueRsource)

//导入Mint-UI组件
// import {Header} from 'mint-ui'
// Vue.component(Header.name,Header)
//导入Mint-UI组件
import MintUI from 'mint-ui'
//导入node_model下的样式
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
import '../css/app.css'

import router from './router.js'

import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    // router
})
