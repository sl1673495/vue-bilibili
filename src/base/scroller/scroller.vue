<template>
  <div ref="scroller" class="scroller" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import { NOT_ALIVED_ROUTES } from 'common/js/config'

export default {
  props: {
    data: {
      default: ''
    },
    options: {
      type: Object,
      default: () => { }
    }
  },
  mounted() {
    const options = Object.assign({
      click: true,
    }, this.options)

    this.scroller = new BScroll(this.$refs.scroller, options);
  },
  data() {
    return {};
  },
  methods: {
    refresh() {
      this.scroller.refresh();
    }
  },
  watch: {
    data: {
      handler() {
        this.$nextTick(() => {
          this.scroller && this.scroller.refresh();
        })
      },
    },
    $route(route) {
      if (!(NOT_ALIVED_ROUTES.includes(route.name))) {
        this.$nextTick(() => {
          this.refresh()
        })
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.scroller
  overflow hidden
  height 100%
</style>
