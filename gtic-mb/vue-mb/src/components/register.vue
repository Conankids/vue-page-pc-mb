<template>
    <a class="register" href="http://www.huodongxing.com/event/9422867206800" :style="{marginBottom: mgbH+'px'}">
        <h3>立即报名</h3>
        <p>Register</p>
    </a>
</template>
<script>
  import {getParams,isIos} from '@/base/utils'
  export default {
    data () {
      return{
        view_H : 0,
        mgbH : 0
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
          this.mgbH = win_H - this.view_H
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
    .register{
        width: 114px;
        height: 114px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: url("../assets/rigister_bg.png") no-repeat center center;
        background-size: cover;
        position: fixed;
        right: 34px;
        bottom: 72px;
        z-index: 2;
        h3{
            font-size: 22px;
            line-height: 30px;
            color: #060E19;
        }
        p{
            font-size: 14px;
            line-height: 16px;
            color: #5D9A8F;
            transform: scale(0.8);
        }
    }
</style>