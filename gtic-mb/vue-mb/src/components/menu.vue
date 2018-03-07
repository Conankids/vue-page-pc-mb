<template>
    <div id="menu" class="menu-wrap" :style="{display: 'none'}">
        <Page :bgSrc="bgSrc" :titleSrc="''" :innerH="innerH">
            <div class="menu-content">
                <div class="menu-item" data-target="home">首页</div>
                <!--<div class="menu-item" data-target="live">大会直播</div>-->
                <div class="menu-item" data-target="about-gtic">大会介绍</div>
                <div class="menu-item" data-target="pending-speakers">嘉宾阵容</div>
                <div class="menu-item" data-target="gtic-awards">年度评选</div>
                <div class="menu-item" data-target="park">科技公园</div>
                <div class="menu-item" data-target="event-registration">活动报名</div>
                <div class="menu-item" data-target="confrence-venue">大会地点</div>
                <!--<div class="menu-item" data-target="previous-gtic">往届峰会</div>-->
                <div class="menu-item" data-target="host">合作机构</div>
                <div class="menu-item" data-target="contact-us">联系我们</div>
            </div>
        </Page>
    </div>
</template>
<script>
  import Page from './page'
  import $ from 'jquery'
  import bus from '@/base/bus.js'

  export default {
    data () {
      return {
        bgSrc: require('../assets/common_bg.png'),
        innerH: ''
      }
    },
    created () {
      this.initH()
    },
    mounted () {
      this.goToElement()
    },
    methods: {
      initH () {
        const win_H = document.documentElement.clientHeight
        this.innerH = win_H + 'px'
      },
      goToElement () {
        $('.menu-item').click(function () {
          const headerH = $('.header').height()
          const targetDom = $(this).data('target')
          const targetDomTop = $('#' + targetDom).offset().top
          const scrollTop = targetDomTop - headerH
          const menuOpen = false
          bus.$emit('menuOpen', menuOpen)
          $('#menu').hide()
          $('html,body').animate({scrollTop: scrollTop + 'px'}, 'slow')
        })
      }
    },
    components: {
      Page
    }
  }
</script>
<style scoped lang="less">
    .menu-wrap {
        width: 100%;
        padding-top: 120px;
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .menu-content {
        font-size: 32px;
        line-height: 45px;
        color: #40E4A3;
        text-align: center;
        width: 150px;
        margin: 75px auto 0;
        .menu-item {
            display: inline-block;
            margin-bottom: 50px;
            background-image: linear-gradient(to right, rgb(64, 228, 163), rgb(54, 212, 235));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
</style>