<template>
    <div class="select-part">
        <more-header title="选集" right="视频是死的啦"></more-header>
        <x-scroller>
            <ul class="part-ul">
               <li v-for="(part, index) in parts"
                   class="part-li"
                   :class="{active: activeIndex === index}"
                   @click="selectPart(index)"
               >
                   <p class="index">
                       第{{index + 1}}部
                   </p>
                   <p class="title">
                       {{part.title}}
                   </p>
               </li>
            </ul>
        </x-scroller>
    </div>
</template>

<script type="text/ecmascript-6">
  import MoreHeader from 'base/more-header/more-header'
  import XScroller from 'base/x-scroller/x-scroller'

  export default {
    props: {
      activeIndex: {
        type: Number,
        default: 0,
      },
      parts: {
        type: Array,
        default: () => []
      }
    },
    components: {
      MoreHeader,
      XScroller
    },
    methods: {
      selectPart(index) {
        this.$emit('selectPart', this.parts[index])
        this.$emit('update:activeIndex', index)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import '~common/stylus/variable';

    .part-ul
        padding 10px 0
        display flex
        flex-wrap nowrap
        .part-li
            flex 0 0 auto
            margin 0 10px
            height 82px
            width 143px
            border 1px solid $color-text-l
            border-radius 4px
            padding 10px
            box-sizing border-box
            .index
                color $color-text-l
            .title
                color grey
                font-size $font-size-small
                margin-top 5px
            &.active
                border 1px solid $color-theme
                .index
                    color $color-theme
                .title
                    color $color-theme
</style>