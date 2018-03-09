<template>
    <div id="live" class="live-wrap page">
        <Page :bgSrc="bgSrc" :titleSrc="titleSrc">
            <div class="live-content">
                <div class="live-left">
                    <div id="id_test_video" style="width:100%; height:100%;"></div>
                    <div class="player-shadow" v-if="!startLive">直播尚未开始</div>
                </div>
                <div class="live-right">
                    <h3><span>其他直播平台</span></h3>
                    <ul>
                        <li>
                            <a href="http://v.qq.com/live/p/topic/48687/index.html">
                                <div class="color-block yellow"></div>
                                <div class="live-title">腾讯新闻</div>
                            </a>
                        </li>
                        <li>
                            <a href="http://ic.snssdk.com/live_talk/wap/share/6530724477343367693/?app_id=13&tt_from=weixin&utm_source=weixin&utm_medium=toutiao_ios&utm_campaign=client_share&wxshare_count=1&from=singlemessage&isappinstalled=0">
                                <div class="color-block red"></div>
                                <div class="live-title">今日头条</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://yq.aliyun.com/webinar/play/411">
                                <div class="color-block blue"></div>
                                <div class="live-title">云栖社区</div>
                            </a>
                        </li>
                        <li>
                            <a href="http://zhibo.ifeng.com/video.html?liveid=115291">
                                <div class="color-block yellow"></div>
                                <div class="live-title">凤凰直播</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://kuaibao.qq.com/s/20180309A0CYWH00">
                                <div class="color-block yellow"></div>
                                <div class="live-title">天天快报</div>
                            </a>
                        </li>
                        <li>
                            <a href="http://bn.sina.cn/video/live/index/mobile/ty20033944">
                                <div class="color-block red"></div>
                                <div class="live-title">新浪直播</div>
                            </a>
                        </li>
                        <li>
                            <a href="http://c.m.163.com/news/l/173238.html">
                                <div class="color-block blue"></div>
                                <div class="live-title">网易直播</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.douyu.com/432849">
                                <div class="color-block yellow"></div>
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
        titleSrc: require('../assets/live.png'),
        startLive: false
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        if(!this.isStart()) return
        this.startLive = true
        //直播
        const player =  new TcPlayer('id_test_video', {
          "m3u8": "http://live.zhidx.com/AppName/StreamName.m3u8?auth_key=1520339532-0-0-0f52b3529cf19e9dd335def8604c1ddc",
          "autoplay" : false,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
          "coverpic" : {"style":"cover", "src":require('../assets/live-bg.jpg')},
          "width" :  '300',//视频的显示宽度，请尽量使用视频分辨率宽度
          "height" : '176',//视频的显示高度，请尽量使用视频分辨率高度
          "live" : true,
          "wording": {
            1: "直播未开始",
            2: "直播未开始",
            3: "直播未开始",
            4: "直播未开始"
        }
        })
      })
    },
    methods: {
      isStart () {
        const startTimeStr = '2018/03/09 09:00:00'
        const nowTime = new Date()
        const startTime = new Date(startTimeStr)
        return (nowTime>=startTime)
      }
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
        .player-shadow{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            text-align: center;
            padding-top: 50px;
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