import Vue from 'vue'
import app from './App.vue'

//1. 导入Mint-UI组件
import {Header, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
//6.导入轮播图组件
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//2. 导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

//3.导入路由包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//4.导入自己的vue路由模块
import router from './router.js'

//8.导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    //加载路由到VM实例
     router
})
