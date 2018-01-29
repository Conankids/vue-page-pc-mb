<template>
    <a :href="link" class="link-tag">
        {{text}}
        <i class="right"></i>
    </a>
</template>
<script>
  export default {
    props: {
      link: {
        type: String,
        default: 'javascript:;'
      },
      text: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style scoped lang="less">
    .link-tag{
        padding: 0 10px;
        display: inline-block;
        font-size: 22px;
        line-height: 38px;
        color: #3ADAD1;
        border: 1px solid #3ADAD1;
        .right{
            display: inline-block;
            width: 13px;
            height: 13px;
            background: url("../assets/right.png") no-repeat center center;
            background-size: cover;
            margin-left: 10px;
        }
    }
</style>