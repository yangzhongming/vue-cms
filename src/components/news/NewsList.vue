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
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="https://avatars1.githubusercontent.com/u/31881269?s=60&v=4">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="https://avatars1.githubusercontent.com/u/31881269?s=60&v=4">
                    <div class="mui-media-body">
                        CBD
                        <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                    </div>
                </a>
            </li>

        </ul>
    </div>
</template>
<script>

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
