<template>
    <div class="down" @click="goToNext($event)"></div>
</template>
<script>
  import $ from 'jquery'

  export default {
    methods: {
      goToNext (e) {
        const headerH = $('.header').height()
        const currentDom = $(e.target).closest('.page')
        const nextDom = currentDom.next()
        const nextDomH = nextDom.offset().top
        const scrollTop = nextDomH - headerH
        $('html,body').animate({scrollTop: scrollTop + 'px'}, 'slow')
      }
    }
  }
</script>
<style scoped lang="less">
    .down {
        width: 12px;
        height: 16px;
        background: url("../assets/down.png") no-repeat center center;
        background-size: cover;
        position: absolute;
        left: 50%;
        margin-left: -6px;
        animation: jump 1s linear infinite;
    }

    @keyframes jump {
        0% {
            bottom: 18px;
        }
        50% {
            bottom: 8px;
        }
        100% {
            bottom: 18px;
        }
    }
</style>