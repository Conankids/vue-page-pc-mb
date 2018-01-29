<template>
    <a class="register" href="http://www.huodongxing.com/event/9422867206800">
        <h3>立即报名</h3>
        <p>Register</p>
    </a>
</template>
<script>
  export default {}
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