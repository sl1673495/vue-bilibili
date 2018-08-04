<template>
 <div class="more-header">
   <div class="title">
    {{title}}
   </div>
   <div class="more" @click="more">
     {{right}} <i class="icon iconfont" :class="iconCls" />
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String
    },
    value: {
      type: Boolean
    },
    right: {
      type: String,
      default: '查看更多'
    }
  },
  data() {
    return {};
  },
  methods: {
    more() {
      if (typeof this.value !== 'boolean') return
      this.$emit("input", !this.value);
    }
  },
  computed: {
    iconCls() {
      return this.value ? "icon-xiangxia" : "icon-xiangyou";
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable.styl';

.more-header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;

  .title {
    font-size: 18px;
    color: $color-theme;
  }

  .more {
    color: $color-text-l;
    font-size $font-size-medium
  }
}
</style>
