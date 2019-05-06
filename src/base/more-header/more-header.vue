<template>
 <div class="more-header">
   <div class="title">
    {{title}}
   </div>
   <div v-if="showClick" class="more" @click="more">
     {{right}} <i class="icon iconfont" :class="iconCls" />
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  // 重写v-model的发布事件名和传入值名 加强语义化
  model: {
    prop: 'showMore',
    event: 'click',
  },
  props: {
    showClick: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String
    },
    showMore: {
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
      if (typeof this.showMore !== 'boolean') return
      this.$emit("click", !this.showMore);
    }
  },
  computed: {
    iconCls() {
      return this.showMore ? "icon-xiangxia" : "icon-xiangyou";
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
