<template>
    <div>
        <h3>Home</h3>
        <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="itme in lunbotuList" :key="item.url">
                <img src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!--九宫格调整为六宫格-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9 ul">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/newsLists">
                        <span class="mui-icon mui-icon-home"></span>
                        <!--图标修改区域-->
                        <!--<img src="图标路径" alt="">-->
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        data(){
            return {
                lunbotuList:[]
            };
        },

        created(){
            this.getLunbotu()
        },
        methods:{
            getLunbotu(){
                // 因main.js中配置了全局变量，以下地址可改写为
                //http://127.0.0.1:31001/cms/page/list/1/3->page/list/1/3
                //注：vue-resource前面不能用/
                this.$http.get("page/list/1/3").then(result => {
                    console.log(result.body)
                    if(result.body.status===0){
                        this.lunbotuList = result.body.message()
                        Toast("加载轮播图成功...")
                    } else {
                        Toast("加载轮播图失败...")
                    }
                })
            }
        }

    }
</script>

<style scoped>
    .mint-swipe {
        height: 200px;
    }
    .mint-swipe-item:nth-child(1) {
        background-color: #2ac845;
    }

    .mint-swipe-item:nth-child(2) {
        background-color: red;
    }

    .mint-swipe-item:nth-child(3) {
        background-color:cyan;
    }

    .img {
        width: 100%;
        height: 100%;
    }

    .ul {
        background-color: white;
    }

    . mui-grid-view mui-grid-9  {
        background-color: white;
        border:none;
        img{
            width: 60px;
            height: 60px;
        }
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 1;
    }
</style>
