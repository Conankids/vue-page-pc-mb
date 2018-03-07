<template>
    <div id="live" class="live-wrap page">
        <Page :bgSrc="bgSrc" :titleSrc="titleSrc">
            <div class="live-content">
                <div class="live-left">
                    <div id="id_test_video" style="width:100%; height:auto;"></div>
                    <!--<video width="300" height="170" src="http://qn.wshls.acgvideo.com/live-qn/101975/live_13308108_4196755.m3u8?wsSecret=924963f7cf14deb0aab8900df249878f&wsTime=1520421110"></video>-->
                </div>
                <div class="live-right">
                    <h3><span>其他直播平台</span></h3>
                    <ul>
                        <li>
                            <a href="javascript:;">
                                <div class="color-block yellow"></div>
                                <div class="live-title">腾讯新闻</div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div class="color-block red"></div>
                                <div class="live-title">今日头条</div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div class="color-block blue"></div>
                                <div class="live-title">云溪社区</div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div class="color-block red"></div>
                                <div class="live-title">凤凰直播</div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div class="color-block yellow"></div>
                                <div class="live-title">天天快报</div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div class="color-block red"></div>
                                <div class="live-title">新浪直播</div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div class="color-block blue"></div>
                                <div class="live-title">网易直播</div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div class="color-block orange"></div>
                                <div class="live-title">斗鱼直播</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Page>
        <Down/>
    </div>
</template>
<script>
  import Page from './page'
  import Down from './down'
  import TcPlayer from 'TcPlayer'

  export default {
    data(){
      return{
        bgSrc: require('../assets/common_bg.png'),
        titleSrc: require('../assets/live.png')
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        //直播
        const player =  new TcPlayer('id_test_video', {
          "m3u8": "http://qn.wshls.acgvideo.com/live-qn/101975/live_13308108_4196755.m3u8?wsSecret=924963f7cf14deb0aab8900df249878f&wsTime=1520421110",
          "autoplay" : false,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
          "coverpic" : {"style":"cover", "src":require('../assets/live-bg.jpg')},
          "width" :  '300',//视频的显示宽度，请尽量使用视频分辨率宽度
          "height" : '176',//视频的显示高度，请尽量使用视频分辨率高度
          "live" : true,
        })
      })
    },
    components:{
      Page,
      Down
    }
  }
</script>
<style lang="less">
    .live-wrap{
        position: relative;
        .park-wrap{
            min-height: 1140px;
            height: auto;
            background-size: 100% auto;
        }
        .live-content{
            width: 618px;
            margin: 0 auto;
            margin-top: 87px;
        }
        .live-left{
            height: 352px;
            border:8px solid #39D8DA;
            border-image: -webkit-linear-gradient( left,#40E4A3,#36D4EB) 30 30;
            border-image: -moz-linear-gradient( left,#40E4A3,#36D4EB) 30 30;
            border-image: -o-linear-gradient( left,#40E4A3,#36D4EB) 30 30;
            border-image: linear-gradient( left,#40E4A3,#36D4EB) 30 30;
            background: url("../assets/live-bg.jpg") no-repeat center center;
            background-size: cover;
            color: #39D8DA;
            position: relative;
        }
        .live-right{
            margin-top: 87px;
            overflow: hidden;
            h3{
                width: 232px;
                font-size: 22px;
                line-height: 30px;
                color: #39D8DA;
                border-bottom: 1.5px solid #39D8DA;
            span{
                display: inline-block;
                background-image: linear-gradient(to right, rgb(64, 228, 163), rgb(54, 212, 235));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            }
            ul{
                margin-top: 23px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li{
                    margin-bottom: 58px;
                    float: left;
                }
            }
            .color-block{
                float: left;
                width: 7px;
                height: 46px;
                &.yellow{
                     background-color: #FFE25C;
                 }
                &.red{
                     background-color: #FF552E;
                 }
                &.blue{
                     background-color: #5CA3FF;
                 }
                &.orange{
                     background-color: #FF7700;
                 }
            }
            .live-title{
                margin-left: 10px;
                width: 250px;
                height: 46px;
                background: url("../assets/live-item-bg.png") no-repeat left center;
                background-size: cover;
                font-size: 20px;
                line-height: 46px;
                color: #000;
                padding-left: 35px;
            }
        }
        .vcp-player{
            width: 100% !important;
            height: 100% !important;
            video{
                width: 100% !important;
                height: 100% !important;
            }
        }
    }
</style>