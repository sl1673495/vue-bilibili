<template>
    <div class="white-space" ref="whiteSpace"></div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      height: {
        type: Number,
        default: 10,
      },
    },
    mounted() {
      this.$refs.whiteSpace.style.height = `${this.height}px`
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>