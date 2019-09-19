<template>
    <div>
        <h3>新闻列表</h3>
        <!--使用mui-master\mui-master\examples\hello-mui\examples\media-list.html样式-->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="https://avatars1.githubusercontent.com/u/31881269?s=60&v=4">
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class='mui-ellipsis'>
                            <span>发布时间：2019-09-10</span>
                            <span>点击次数：0</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media" v-for="item in newsLists" :key="item.id">
                <router-link :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" src="https://avatars1.githubusercontent.com/u/31881269?s=60&v=4">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <!--item.对应后台接口的字符串变量,此处未实现后台-->
                            <!--通过管道方式调用格式化-->
                            <span>发布时间：{{item.add_time | dateFormat }}</span>
                            <span>点击次数：{{item.count}}</span>
                        </p>
                    </div>
                </router-link>
            </li>


        </ul>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                newsLists:[]
            }
        },
        created(){
            this.getNewsLists();
        },
        methods:{
            getNewsLists(){
                this.$http.get('page/list/1/3').then(result =>{
                    if(result.body.status==0){
                        this.newsLists = result.body.message;
                    }else{
                        Toast('获取新闻列表失败...')
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
.mui-table-view{
    li{
      h1{font-size: 14px;}
        .mui-ellipsis{
            font-size:10px;
            color:#226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
