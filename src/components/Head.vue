<template>
  <div>
    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="·Vue项目"></mt-header>
  </div>
</template>

<script>
export default {
  name: 'cmsHeader',
  data () {
    return {
      msg: 'Welcome to Your Home'
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-container{
    padding-top:40px;
    overflow-x: hidden;
  }
</style>
