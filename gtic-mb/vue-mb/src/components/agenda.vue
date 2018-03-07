<template>
    <div id="conference-agenda" class="agenda-wrap page">
        <Page :bgSrc="bgSrc" :titleSrc="titleSrc">
            <div class="agenda-content">
                <div class="agenda">
                    <img src="../assets/conference-agenda.png" alt="">
                </div>
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
        titleSrc: require('../assets/agenda.png')
      }
    },
    components: {
      Page,
      Down
    }
  }
</script>
<style scoped lang="less">
    .agenda-wrap{
        position: relative;
    }
    .page-wrap{
        height: auto;
        background-size: 100% auto;
    }
    .agenda-content {
        margin-top: 48px;
        text-align: center;
        .agenda {
            width: 687px;
            margin: 0 auto;
            img {
                width: 100%;
            }
        }
    }
</style>