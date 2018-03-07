<template>
    <div class="footer">
        <div class="logo">
            <img src="../assets/zhidx_logo.png" alt="">
        </div>
        <div class="desc">智东西，智能行业第一媒体，是以商业报道、行研报告、线上社群、线下活动为核心，多端多平台、线上线下联动的智能行业服务型媒体，专注于AI、智能出行、VR/AR、智能家居、穿戴医疗五大领域，助力智能+时代的创业和产业升级。</div>
        <div class="gtic" :style="{paddingBottom: pdbH+'px'}">
            <img src="../assets/gtic_gray.png" alt="">
        </div>
    </div>
</template>
<script>
  import {getParams,isIos} from '@/base/utils'
  export default {
    data () {
      return{
        view_H : 0,
        pdbH : 0
      }
    },
    created () {
      this.initFooterH()
    },
    methods: {
      initFooterH () {
        this.getViewH()
        let win_H = document.documentElement.clientHeight
        if(this.view_H && this.view_H <= win_H){
          this.pdbH = win_H - this.view_H
        }
      },
      getViewH () {
        if(!isIos) return
        const params = getParams()
        if (!params) return
        this.view_H = params.height
      }
    },
  }
</script>
<style scoped lang="less">
    .footer{
        background-color: #F7F7F7;
        padding-top: 48px;
    }
    .logo{
        width: 280px;
        margin: 0 auto;
        img{
            width: 100%;
        }
    }
    .desc{
        width: 435px;
        margin: 35px auto 0;
        font-size: 18px;
        line-height: 25px;
        color: rgba(0,0,0,0.3);
        text-align: justify;
    }
    .gtic{
        height: 60px;
        margin-top: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        box-sizing: content-box;
        img{
           width: 86px;
        }
    }
</style>