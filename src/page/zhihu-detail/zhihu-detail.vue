<template>
  <scroller>
    <div class="zhihu-detail" ref="list">
      <img class="image" :key="i" v-for="(img, i) in imgSrc" :data-src="img">
    </div>
  </scroller>
</template>

<script>
import Scroller from "base/scroller/scroller";
import store from "global/store";
import LazyLoad from "easy-lazyload/src";

export default {
  name: "zhihu-detail",
  mounted() {
    this.loader = new LazyLoad(this.$refs.list, {
      loading: require("common/image/loading.gif"),
      beforeMount: function (img) {
        img.style.opacity = 0
      },
      mounted: function (img) {
        img.style.transition = 'all .8s'
        img.style.opacity = 1
      }
    });
  },
  data() {
    return {
      imgSrc: store.get("currentImages")
    };
  },
  components: {
    Scroller
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~common/stylus/variable'
.zhihu-detail
  padding 12px
  width 100%
  box-sizing border-box
  .image
    width 100%
    min-height 150px
    margin-bottom 8px
</style>