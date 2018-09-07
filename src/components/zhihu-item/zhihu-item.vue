<template>
     <li class="zhihu-item" @click="select">
        <div class="image-wrap">
            <img class="image" :data-src="mainImage"/>
            <h1 class="title">
              {{item.meta.title}}
            </h1>
        </div>
    </li>
</template>

<script>
import store from 'global/store'
export default {
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  methods: {
    select() {
      store.set('currentImages', this.item.imgSrc)
      this.$router.push('zhihu-detail')
    }
  },
  computed: {
    mainImage() {
      return this.item.imgSrc && this.item.imgSrc[0];
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.zhihu-item {
    flex: 0 0 50%;
    margin-bottom: 5px;

    .image-wrap {
        padding: 10px;

        .image {
            width: 100%;
            border-radius: 5px;
        }

        .title {
            margin-top: 8px;
            font-size: $font-size-small;
        }
    }
}
</style>