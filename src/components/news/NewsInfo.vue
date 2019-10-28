<template>
    <div class="newsinfo-container">
        <h3 class="title">新闻详情--{{id}}</h3>
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：2019-09-19</span>
            <span>点击次数：0次</span>
        </p>
        <hr>
        <!--内容区域-->
        <div  class="content" v-html="newsinfo.content">
        <!--评论区域-->
        </div>
    </div>

</template>
<script>
    // 导入评论子组件
    import comment from '../subcomponents/comment.vue'
    export  default {
        data(){
            return {id:this.route.params.id,
            newsinfo:{}
            }
        },

        created(){
            this.getNewsInfo
        },
        methods:{
            getNewsInfo(){
                this.$http.get('api/getnew/'+ this.id).then(result =>{
                    if(result.body.status ===0){
                        this.newsinfo = result.body.message[0]
                    } else {

                    }
                })
            }
        },
        components:{
            // 注册子组件
            "comment-box":comment
        }
    }
</script>
<style lang="scss" scoped>
    .newsinfo-container {
        padding:0 4px;
        .title{
            font-size:16px;
            text-align:center;
            margin:15px 0;
            color:red;
        }
        .subtitle{
            font-size:13px;
            color:#226aff;
            display: flex;
            justify-content: space-between;
        }
        .content{
            img{
                width:100px;
            }
        }
    }
</style>
