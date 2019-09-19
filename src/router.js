import VueRouter from 'vue-router'

import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Search from './components/tabbar/Search.vue'
import ShopCar from './components/tabbar/Shopcar.vue'
import NewsLists from './components/news/NewsList.vue'

var router = new VueRouter({
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', component:Home },
        {path:'/member',component:Member },
        {path:'/search',component:Search },
        {path:'/shopCar',component:ShopCar },
        {path:'/home/newsLists',component:NewsLists}
    ],
    linkActiveClass:'mui-active'
})

export default router
