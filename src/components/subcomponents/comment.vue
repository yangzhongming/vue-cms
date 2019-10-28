<template>
    <div class="cmt-container">
        <h3>评论子组件</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼：&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp; 发表时间：2019/10/10 15:30:24
                </div>

                <div class="cmt-body">
                    用户评论内容
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large">发表评论</mt-button>
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.cmt-container{
    h3 {
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            font-size:13px;
            .cmt-title{
                background-color: #cccccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }

        }
    }
}
</style>
