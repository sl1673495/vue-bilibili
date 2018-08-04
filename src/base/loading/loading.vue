<template>
    <div class="loading-wrap" v-show="loading">
        <van-loading
                v-bind="$attrs"
                color="white">
        </van-loading>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['loading']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .loading-wrap
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        width 100%
        display flex
        align-items center
        justify-content center
        touch-action none
</style>