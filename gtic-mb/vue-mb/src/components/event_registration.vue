<template>
    <div id="event-registration" class="event-registration-wrap page">
        <Page :bgSrc="bgSrc" :titleSrc="titleSrc">
            <div class="event-registration-content">
                <div class="register-wrap">
                    <h3>报名通道一</h3>
                    <div class="register-desc">为便于提前邀请入现场群，现开通微信报名通道，扫码添加zhidxzb为好友申请报名，注明姓名-公司-职位，完成表格填写，即可快速确认参会和入群。
                    </div>
                    <div class="register-way">
                        <img src="../assets/qrcode.png" alt="">
                    </div>
                </div>
                <div class="register-wrap second-wrap">
                    <h3>报名通道二</h3>
                    <div class="register-desc">通过大会的首席活动报名平台活动行进行报名。</div>
                    <div class="register-way">
                        <LinkTag :link="'http://www.huodongxing.com/event/9422867206800'" :text="'进入报名'"></LinkTag>
                    </div>
                </div>
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
        titleSrc: require('../assets/event_registration.png')
      }
    },
    components: {
      Page,
      Down,
      LinkTag
    }
  }
</script>
<style scoped lang="less">
    .event-registration-wrap {
        position: relative;
    }

    .event-registration-content {
        margin-top: 70px;
        padding-bottom: 123px;
    }

    .register-wrap {
        width: 410px;
        height: 529px;
        background: url("../assets/register_bg1.png") no-repeat center center;
        background-size: cover;
        padding: 42px 36px 0;
        margin: 0 auto 51px;
        color: #3ADAD1;
        &.second-wrap{
            height: 258px;
            margin-bottom: 0;
            background: url("../assets/register_bg2.png") no-repeat center center;
            background-size: cover;
            .register-way{
                margin-top: 30px;
            }
        }
        h3 {
            font-size: 24px;
            line-height: 33px;
            text-align: center;
        }
        .register-desc{
            margin-top: 33px;
            font-size: 16px;
            line-height: 27px;
            text-align: justify;
        }
        .register-way{
            margin: 66px auto 0;
            width: 197px;
            text-align: center;
            img{
                width: 100%;
            }
        }
    }
    .link-tag{
        width: 160px;
        text-align: center;
    }
</style>