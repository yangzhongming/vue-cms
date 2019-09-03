import Vue from 'vue'
import app from './App.vue'

//1. 导入Mint-UI组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

//2. 导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

//3.导入路由包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//4.导入自己的vue路由模块
import router from './router.js'

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    //加载路由到VM实例
     router
})
