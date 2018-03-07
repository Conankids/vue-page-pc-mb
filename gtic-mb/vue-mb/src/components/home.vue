<template>
    <div id="home" class="home-wrap page" ref="home" :style="{height: height+ 'px'}">
        <Down/>
    </div>
</template>
<script>
  import Down from './down'
  import {getParams,isIos} from '@/base/utils'

  export default {
    data () {
      return {
        height: 667,
        view_H: 0
      }
    },
    created () {
      this.initHeight()
    },
    methods: {
      initHeight () {
        this.getViewH()
        let win_H = document.documentElement.clientHeight
        if(this.view_H){
          win_H = this.view_H
        }
        this.height = win_H
      },
      getViewH () {
        if(!isIos) return
        const params = getParams()
        if (!params) return
        this.view_H = params.height
      }
    },
    components: {
      Down
    }
  }
</script>
<style scoped lang="less">
    .home-wrap {
        background: url("../assets/home_bg.jpg") no-repeat center center;
        background-size: cover;
        position: relative;
    }
</style>
