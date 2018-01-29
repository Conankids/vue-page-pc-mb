<template>
    <div id="home" class="home-wrap page" ref="home" :style="{height: height+ 'px'}">
        <Down/>
    </div>
</template>
<script>
  import Down from './down'

  export default {
    data () {
      return {
        height: 667
      }
    },
    created () {
      this.initHeight()
    },
    methods: {
      initHeight () {
        const win_H = document.documentElement.clientHeight
        this.height = win_H
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
    }
</style>
