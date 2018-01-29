<template>
    <div class="page-wrap" :style="{backgroundImage: 'url('+bgSrc+')',height: innerH}">
        <div class="page-title" v-if="titleSrc">
            <img :src="titleSrc" alt="">
        </div>
        <slot></slot>
    </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    props: {
      bgSrc: {
        type: String,
        default: ''
      },
      titleSrc: {
        type: String,
        default: ''
      },
      innerH: {
        type: String,
        default: 'auto'
      }
    }
  }
</script>
<style scoped lang="less">
    .page-wrap {
        background-repeat: repeat-y;
        background-position: center;
        background-size: cover;
        padding-top: 20px;
        padding-bottom: 40px;
        min-height: 600px!important;
        .page-title {
            width: 500px;
            height: 70px;
            margin: 0 auto;
            img {
                width: 100%;
            }
        }
    }
</style>