<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
    <keep-alive :exclude="NOT_ALIVED_ROUTES">
      <router-view class="router-view"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import {NOT_ALIVED_ROUTES} from 'common/js/config'

  export default {
    created() {
      this.NOT_ALIVED_ROUTES = NOT_ALIVED_ROUTES
    },
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