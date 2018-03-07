<template>
    <div id="live" class="live-wrap page">
        <Page :bgSrc="bgSrc" :titleSrc="titleSrc">
            <div class="live-content">

            </div>
        </Page>
        <Down/>
    </div>
</template>
<script>
  import Page from './page'
  import Down from './down'

  export default {
    data(){
      return{
        bgSrc: require('../assets/common_bg.png'),
        titleSrc: require('../assets/about_gtic.png')
      }
    },
    components:{
      Page,
      Down
    }
  }
</script>
<style scoped>

</style>