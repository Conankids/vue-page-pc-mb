<template>
    <div id="gtic-awards" class="gtic-awards-wrap page">
        <Page :bgSrc="bgSrc" :titleSrc="titleSrc">
            <div class="gtic-awards-content">
                <div class="awards">
                    <img src="../assets/awards.png" alt="">
                </div>
                <div class="gtic-logo">
                    <img src="../assets/gtic_awards.png" alt="">
                </div>
                <LinkTag :link="'http://gtic.zhidx.com/awards2018/mb.php'" :text="'直达 GTIC AWARDS 2018'"></LinkTag>
                <Down/>
            </div>
        </Page>
    </div>
</template>
<script>
  import Page from './page'
  import LinkTag from './link_tag'
  import Down from './down'

  export default {
    data () {
      return {
        bgSrc: require('../assets/common_bg.png'),
        titleSrc: require('../assets/gtic_awards_2018.png')
      }
    },
    components: {
      Page,
      LinkTag,
      Down
    }
  }
</script>
<style scoped lang="less">
    .gtic-awards-wrap{
        position: relative;
    }
    .gtic-awards-content {
        margin-top: 130px;
        text-align: center;
        .awards {
            width: 163px;
            margin: 0 auto;
            img {
                width: 100%;
            }
        }
        .gtic-logo {
            width: 680px;
            margin: 45px auto 0;
            img {
                width: 100%;
            }
        }
        .link-tag {
            margin: 163px 0 190px;
        }
    }
</style>