<template>
    <div id="pending-speakers" class="ps-wrap page">
        <Page :bgSrc="bgSrc" :titleSrc="titleSrc">
            <div class="ps-content">
                <ul class="clearfix">
                    <li v-for="(item,index) in speakers">
                        <img :src="item.img" alt="">
                        <p>{{item.company}}</p>
                        <p>{{item.title}}</p>
                    </li>
                </ul>
                <div class="more-speakers none">
                    <img src="../assets/more_speakers.png" alt="">
                </div>
            </div>
        </Page>
    </div>
</template>
<script>
  import Page from './page'

  export default {
    data () {
      return {
        bgSrc: require('../assets/common_bg.png'),
        titleSrc: require('../assets/pending_speakers.png'),
        speakers: [
          {
            img: require('../assets/pending_speakers/ps1.png'),
            company: '清华大学',
            title: '微电子所所长'
          },
          {
            img: require('../assets/pending_speakers/ps2.png'),
            company: 'NVIDIA',
            title: '首席科学家'
          },
          {
            img: require('../assets/pending_speakers/ps3.png'),
            company: '英特尔',
            title: '数据中心事业部副总裁'
          },
          {
            img: require('../assets/pending_speakers/ps4.png'),
            company: '高通',
            title: '工程技术副总裁'
          },
          {
            img: require('../assets/pending_speakers/ps5.png'),
            company: '联发科技',
            title: '副总经理暨家庭娱乐产品事业群总经理'
          },
          {
            img: require('../assets/pending_speakers/ps6.png'),
            company: '大华股份',
            title: '副总裁、研发中心总经理'
          },
          {
            img: require('../assets/pending_speakers/ps7.png'),
            company: '百度',
            title: '副总裁、IDG总经理'
          },
          {
            img: require('../assets/pending_speakers/ps8.png'),
            company: '宇视',
            title: '副总裁、首席架构师'
          },
          {
            img: require('../assets/pending_speakers/ps9.png'),
            company: '地平线',
            title: '创始人兼CEO'
          },
          {
            img: require('../assets/pending_speakers/ps10.png'),
            company: '深鉴科技',
            title: '联合创始人&CEO'
          },
          {
            img: require('../assets/pending_speakers/ps11.png'),
            company: '智行者',
            title: '创始人&CEO'
          },
          {
            img: require('../assets/pending_speakers/ps12.png'),
            company: '小鹏汽车',
            title: '联合创始人、副总裁'
          },
          {
            img: require('../assets/pending_speakers/ps13.png'),
            company: '云从科技',
            title: '合伙人、高级副总裁'
          },
          {
            img: require('../assets/pending_speakers/ps14.png'),
            company: '商汤科技',
            title: '联合创始人、副总裁'
          },
          {
            img: require('../assets/pending_speakers/ps15.png'),
            company: '启英泰伦',
            title: '创始人兼董事长'
          },
          {
            img: require('../assets/pending_speakers/ps16.png'),
            company: '灵隆科技',
            title: '总经理'
          }
        ]
      }
    },
    components: {
      Page
    }
  }
</script>
<style scoped lang="less">
    .page-wrap{
        height: auto;
    }
    .ps-content {
        width: 682px;
        margin: 37px auto 0;
        ul{
            width: 105%;
            li{
                float: left;
                width: 164px;
                height: 360px;
                margin-right: 10px;
                font-size: 18px;
                line-height: 25px;
                color: #fff;
                text-align: center;
                font-weight: 100;
                img{
                    width: 100%;
                }
            }
        }
        .more-speakers{
            width: 256px;
            margin: 43px auto 0;
            img{
                width: 100%;
            }
        }
    }
</style>