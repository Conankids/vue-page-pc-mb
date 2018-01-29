<template>
    <div id="confrence-venue" class="confrence-vence-wrap page">
        <Page :bgSrc="bgSrc" :titleSrc="titleSrc">
            <div class="confrence-vence-content">
                <div class="map-wrap">
                    <img src="../assets/map.png" alt="">
                    <div class="map-desc">
                        <div class="line"></div>
                        <div class="map-title">
                            <h3>大会地点</h3>
                            <p>Adress</p>
                        </div>
                        <div class="map-name">
                            <h3>上海卓美亚喜玛拉雅酒店</h3>
                            <p><span>Jumeirah Himalayas Hotel Shanghai</span></p>
                        </div>
                        <div class="map-detail">上海浦东新区梅花路1108号（近花木路），上海新国际博览中心对面，位于7号线花木路地铁站3号出口正上方。</div>
                    </div>
                </div>
            </div>
        </Page>
        <Down/>
    </div>
</template>
<script>
  import Page from './page'
  import Down from './down'

  export default {
    data () {
      return {
        bgSrc: require('../assets/common_bg.png'),
        titleSrc: require('../assets/conference_venue.png')
      }
    },
    components: {
      Page,
      Down,
    }
  }
</script>
<style scoped lang="less">
    .confrence-vence-wrap {
        position: relative;
    }

    .confrence-vence-content {
        margin-top: 18px;
        padding-bottom: 80px;
    }

    .map-wrap {
        position: relative;
        width: 688px;
        margin: 0 auto;
        img {
            width: 100%;
        }
    }

    .map-desc {
        width: 240px;
        height: 829px;
        padding: 46px 29px 46px 15px;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 44px;
        left: 2px;
        color: #fff;
        font-weight: 100;
    }

    .line {
        width: 106px;
        height: 6px;
        background-color: #37D4EC;
    }

    .map-title {
        margin-top: 15px;
        h3 {
            font-weight: 100;
            font-size: 20px;
            line-height: 25px;
        }
        p {
            font-size: 15px;
            line-height: 20px;
        }
    }
    .map-name{
        margin-top: 55px;
        p{
            margin-top: 20px;
        }
    }
    .map-detail{
        position: absolute;
        width: 80%;
        text-align: justify;
        bottom: 40px;
    }
</style>