<template>
    <div id="contact-us" class="contact-us-wrap page">
        <Page :bgSrc="bgSrc" :titleSrc="titleSrc">
            <div class="contact-us-content">
                <ul>
                    <li>
                        <h3>演讲事宜</h3>
                        <p>微信：hihaben</p>
                    </li>
                    <li>
                        <h3>参会事宜</h3>
                        <p>微信：yzjzaizai</p>
                    </li>
                    <li>
                        <h3>媒体事宜</h3>
                        <p>微信：LHZLY20131213</p>
                    </li>
                    <li>
                        <h3>招商事宜</h3>
                        <p>微信：hillsmart</p>
                    </li>
                </ul>
            </div>
        </Page>
    </div>
</template>
<script>
    import Page from './page'
  export default {
      data(){
        return{
          bgSrc: require('../assets/contact_bg.jpg'),
          titleSrc: require('../assets/contact_us.png')
        }
      },
      components:{
        Page
      }
  }
</script>
<style scoped lang="less">
    .contact-us-content{
        margin-top: 72px;
        ul{
            li{
                width: 481px;
                height: 193px;
                margin:0 auto 18px;
                background: url("../assets/contact_item_bg.png") no-repeat center center;
                background-size: cover;
                text-align: center;
                padding-top: 39px;
                color: #3ADAD1;
                h3{
                    font-size: 26px;
                }
                p{
                    font-size: 18px;
                    margin-top: 21px;
                }
            }
        }
    }
</style>