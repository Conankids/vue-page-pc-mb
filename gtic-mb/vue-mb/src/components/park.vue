<template>
    <div id="park" class="park-wrap page">
        <Page :bgSrc="bgSrc" :titleSrc="''">
            <div class="park-content">
                <div class="park-logo">
                    <img src="../assets/park.png" alt="">
                </div>
                <div class="park-desc">
                    AWE科技公园由AWE与极果联合主办，<br>
                    定位在一场连接过去与未来，<br>
                    场景化展示科技影响人们生活方式，<br>
                    以消费者体验为中心的全民嘉年华。<br>
                    不仅继续把前沿丰富的智能生活场景展示给消费者，<br>
                    入驻科技公园的品牌也将更加多样性与全球化，<br>
                    围绕科技“跨界”，包含智慧出行、智慧娱乐、智慧家居、<br>
                    智能健康、智能建筑、VR、AR、人工智能等更多领域和产业。
                </div>
                <Linktag :link="'http://park.jiguo.com/'" :text="'直达科技公园'"></Linktag>
                <Down/>
            </div>
        </Page>
    </div>
</template>
<script>
  import Page from './page'
  import Linktag from './link_tag'
  import Down from './down'
  export default {
    data () {
      return {
        bgSrc: require('../assets/park_bg.png')
      }
    },
    components: {
      Page,
      Linktag,
      Down
    }
  }
</script>
<style scoped lang="less">
    .park-wrap{
        position: relative;
        .page-wrap{
            background-size: cover;
        }
    }
    .park-content{
        padding-top: 206px;
        text-align: center;
    }
    .park-logo{
        width: 659px;
        margin: 0 auto;
        img{
            width: 100%;
        }
    }
    .park-desc{
        width: 610px;
        margin: 108px auto 0;
        font-size: 20px;
        line-height: 49px;
        color: #3ADAD1;
    }
    .link-tag{
        margin: 83px 0 144px;
    }
</style>