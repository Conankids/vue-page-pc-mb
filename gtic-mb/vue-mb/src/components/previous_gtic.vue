<template>
    <div id="previous-gtic" class="previous-gtic-wrap page">
        <Page :bgSrc="bgSrc" :titleSrc="titleSrc">
            <div class="previous-gtic-content">
                <a href="http://gtic.zhidx.com/" class="card">
                    <img src="../assets/gtic_2017.png" alt="">
                </a>
                <a href="http://vr.zhidx.com/web" class="card">
                    <img src="../assets/vr_ar.png" alt="">
                </a>
                <Down/>
            </div>
        </Page>
    </div>
</template>
<script>
  import Page from './page'
  import Down from './down'

  export default {
    data () {
      return {
        bgSrc: require('../assets/common_bg.png'),
        titleSrc: require('../assets/previous_gtic.png')
      }
    },
    components: {
      Page,
      Down,
    }
  }
</script>
<style scoped lang="less">
    .previous-gtic-wrap{
        position: relative;
    }
    .previous-gtic-content{
        margin-top: 71px;
        text-align: center;
    }
    .card{
        img{
            width: 508px;
            margin-bottom: 35px;
        }
    }
</style>