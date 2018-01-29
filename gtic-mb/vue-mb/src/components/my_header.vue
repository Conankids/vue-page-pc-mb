<template>
    <div class="header">
        <img src="../assets/zhidx_logo.png" alt="">
        <div class="menu-btn" v-if="menuStatus" @click="openMenu()"></div>
        <div class="menu-btn close" v-else @click="closeMenu()"></div>
    </div>
</template>
<script>
  import $ from 'jquery'
  import bus from '@/base/bus.js'
  export default {
    data () {
      return {
        menuStatus: true
      }
    },
    mounted(){
      bus.$on('menuOpen', (menuOpen) => {
        this.menuStatus = !menuOpen
      })
    },
    methods: {
      openMenu () {
        $('#menu').show()
        this.menuStatus = false
      },
      closeMenu () {
        $('#menu').hide()
        this.menuStatus = true
      }
    }
  }
</script>
<style scoped lang="less">
    .header {
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 35px;
        background-color: #0B1023;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        img {
            width: 110px;
        }
        .menu-btn {
            width: 44px;
            height: 44px;
            background: url("../assets/menu.png") no-repeat center center;
            background-size: cover;
            &.close {
                background: url("../assets/close.png") no-repeat center center;
                background-size: cover;
            }
        }
    }
</style>
