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

//9.配置全局变量，必须放在vue-resource后面
Vue.http.options.root = 'http://127.0.0.1:31001/cms/';

//导入时间处理插件
import moment from 'moment'
//10.定义全局过滤器用来解决时间格式问题
Vue.filter('dateFormat',function (dataStr, pattern = 'yyyy-MM-DD HH:mm:ss') {
    //使用node.js中的moment解决,npm install moment -S
    return moment(dataStr).format(pattern)
})

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    //加载路由到VM实例
     router
})
