<template>
    <div class="scroll-wrapper" ref="scroller">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  const replacePx = (str) => str.replace('px', '')

  export default {
    mounted() {
      const ulDom = this.$refs.scroller.querySelector('ul')
      const parentDom = ulDom.parentNode
      const minWidth = parentDom.clientWidth
      if (!ulDom) {
        throw new Error('子节点必须是ul列表')
      }
      const listItems = Array.from(ulDom.querySelectorAll('li'))
      const listWidth = listItems.reduce((total, b) => {
        const style = getComputedStyle(b)
        return total +
          Number(b.offsetWidth) +
          Number(replacePx(style.marginRight)) +
          Number(replacePx(style.marginLeft))
      }, 0)
      // 最小和父元素宽度一样 否则外层写列表样式会出问题
      ulDom.style.width = `${Math.max(minWidth, listWidth)}px`
      this.scroll = new BScroll(this.$refs.scroller, {
        scrollX: true,
        eventPassthrough: 'vertical',
        click: true,
        bounce: false
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>