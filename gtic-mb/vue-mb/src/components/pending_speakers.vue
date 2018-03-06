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
            title: '微纳电子系主任、微电子所所长'
          },
          {
            img: require('../assets/pending_speakers/ps2.png'),
            company: '中国家用电器协会',
            title: '秘书长'
          },
          {
            img: require('../assets/pending_speakers/ps3.png'),
            company: 'NVIDIA',
            title: 'AI技术中心亚太首席技术官'
          },
          {
            img: require('../assets/pending_speakers/ps4.png'),
            company: '联发科技',
            title: '副总经理暨智能设备事业群总经理'
          },
          {
            img: require('../assets/pending_speakers/ps5.png'),
            company: '海尔家电产业',
            title: '集团副总裁兼CTO'
          },
          {
            img: require('../assets/pending_speakers/ps6.png'),
            company: '大华股份',
            title: '公司副总裁兼研发中心总经理'
          },
          {
            img: require('../assets/pending_speakers/ps7.png'),
            company: '高通公司',
            title: '技术副总裁'
          },
          {
            img: require('../assets/pending_speakers/ps8.png'),
            company: '深鉴科技',
            title: '联合创始人兼CEO'
          },
          {
            img: require('../assets/pending_speakers/ps9.png'),
            company: '地平线',
            title: '联合创始人、算法副总裁'
          },
          {
            img: require('../assets/pending_speakers/ps10.png'),
            company: '腾讯',
            title: '智能平台产品部副总经理'
          },
          {
            img: require('../assets/pending_speakers/ps11.png'),
            company: '英特尔',
            title: '首席研究员'
          },
          {
            img: require('../assets/pending_speakers/ps12.png'),
            company: '宇视',
            title: '副总裁、首席架构师'
          },
          {
            img: require('../assets/pending_speakers/ps13.png'),
            company: '触景无限',
            title: 'CEO'
          },
          {
            img: require('../assets/pending_speakers/ps14.png'),
            company: '深思考人工智能',
            title: 'CEO&首席架构师'
          },
          {
            img: require('../assets/pending_speakers/ps15.png'),
            company: '智行者',
            title: '联合创始人兼产品总监'
          },
          {
            img: require('../assets/pending_speakers/ps16.png'),
            company: '小鹏汽车',
            title: '联合创始人、副总裁'
          },
          {
            img: require('../assets/pending_speakers/ps17.png'),
            company: '博世',
            title: '底盘控制系统中国区驾驶员辅助系统雷达研发部门总监'
          },
          {
            img: require('../assets/pending_speakers/ps18.png'),
            company: '云启资本',
            title: '董事总经理'
          },
          {
            img: require('../assets/pending_speakers/ps19.png'),
            company: '启英泰伦',
            title: '董事长'
          },
          {
            img: require('../assets/pending_speakers/ps20.png'),
            company: '灵隆科技',
            title: 'CEO'
          },
          {
            img: require('../assets/pending_speakers/ps21.png'),
            company: '涂鸦智能',
            title: '联合创始人兼COO'
          },
          {
            img: require('../assets/pending_speakers/ps22.png'),
            company: '速感科技',
            title: '联合创始人、CTO'
          },
          {
            img: require('../assets/pending_speakers/ps23.png'),
            company: '商汤科技',
            title: '联合创始人、副总裁'
          },
          {
            img: require('../assets/pending_speakers/ps24.png'),
            company: '云从科技',
            title: '合伙人、高级副总裁'
          },
          {
            img: require('../assets/pending_speakers/ps25.png'),
            company: '比特大陆',
            title: '产品战略总监'
          },
          {
            img: require('../assets/pending_speakers/ps26.png'),
            company: 'NovuMind',
            title: '中国区总裁'
          },
          {
            img: require('../assets/pending_speakers/ps27.png'),
            company: '深思创芯',
            title: 'CEO'
          },
          {
            img: require('../assets/pending_speakers/ps28.png'),
            company: '中科创达',
            title: 'CTO'
          },
          {
            img: require('../assets/pending_speakers/ps29.png'),
            company: '眼擎科技',
            title: 'CEO'
          },
          {
            img: require('../assets/pending_speakers/ps30.png'),
            company: '中信证券',
            title: '前瞻研究首席分析师'
          },
          {
            img: require('../assets/pending_speakers/ps31.png'),
            company: '中国人工智能产业发展联盟',
            title: '标准组副组长'
          },
          {
            img: require('../assets/pending_speakers/ps32.png'),
            company: '智东西',
            title: '联合创始人、CEO'
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
        background-size: 100% auto;
    }
    .ps-content {
        width: 682px;
        margin: 37px auto 0;
        ul{
            width: 105%;
            li{
                float: left;
                width: 164px;
                height: 385px;
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