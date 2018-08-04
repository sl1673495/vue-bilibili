<template>
  <div class="m-header">
    <div @click="toIndex">
      <div class="icon"></div>
      <h1 class="text">Love Bilibili</h1>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    toIndex() {
      this.$router.push('/')
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

.m-header {
  padding: 0 10px;
  position: relative;
  height: 50px;
  color: $color-theme;
  font-size: 0;

  .icon {
    display: inline-block;
    vertical-align: top;
    margin-top: 8px;
    width: 30px;
    height: 32px;
    margin-right: 9px;
    bg-image('logo');
    background-size: 30px 32px;
  }

  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 50px;
    font-size: $font-size-large;
  }

  .mine {
    position: absolute;
    top: 0;
    right: 0;

    .icon-mine {
      display: block;
      padding: 12px;
      font-size: 20px;
      color: $color-theme;
    }
  }
}
</style>