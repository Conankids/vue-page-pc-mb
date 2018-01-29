<template>
    <div id="host" class="host-wrap page">
        <div class="host-content">
            <img src="../assets/host.png" alt="">
        </div>
        <Down/>
    </div>
</template>
<script>
  import Down from './down'

  export default {
    components: {
      Down
    }
  }
</script>
<style scoped lang="less">
    .host-wrap{
        background-color: #fff;
        position: relative;
    }
    .host-content{
        width: 638px;
        padding: 44px 0 60px;
        margin: 0 auto;
        img{
            width: 100%;
        }
    }
</style>