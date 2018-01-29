<template>
    <div id="about-gtic" class="about-gtic-wrap page">
        <Page :bgSrc="bgSrc" :titleSrc="titleSrc">
            <div class="about-content">
                <div class="about-desc">
                    <p>沉浮60多年，人工智能在全球迎来第三波发展热潮。我国更是在2017年发布《新一代人工智能发展规划》，将人工智能上升为国家战略。</p>
                    <p><br>作为人工智能主流算法之一，深度学习的兴盛带来计算量急剧增加，对算力提出更高要求。GPU、FPGA、ASIC等处理器被用于算法加速，提速人工智能在云端服务器和终端产品中的应用和发展。过去的这一年，NVIDIA和Google在云端进行算力竞赛；终端侧，不仅苹果、高通、ARM、华为等科技巨头纷纷布局，AI专属芯片在中国的创新创业更是百花齐放。AI芯片已经成为中国重新争夺半导体产业主导权的历史契机。</p>
                    <p><br>为此，我们举办GTIC 2018全球AI芯片创新峰会，以“走进AI世界 从芯看未来”为主题，共议这一群芯逐鹿时代。</p>
                </div>
                <div class="about-data">
                    <img src="../assets/about_gtic_num.png" alt="">
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
    data(){
      return{
        bgSrc: require('../assets/common_bg.png'),
        titleSrc: require('../assets/about_gtic.png')
      }
    },
    components:{
      Page,
      Down
    }
  }
</script>
<style scoped lang="less">
    .about-gtic-wrap{
        position: relative;
    }
    .about-content{
        margin-top: 10px;
        padding-bottom: 20px;
    }
    .about-desc{
        width: 630px;
        font-size: 22px;
        line-height: 30px;
        margin: 0 auto;
        color: #3DDFB8;
        text-align: left;
    }
    .about-data{
        width: 541px;
        margin: 18px auto 0;
        img{
            width: 100%;
        }
    }
</style>