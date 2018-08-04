<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
    <keep-alive :exclude="['season-detail', 'short-video-detail']">
      <router-view class="router-view"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'

  export default {
    components: {
      MHeader,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    height 100%
    .router-view
      height: calc(100% - 50px);
</style>