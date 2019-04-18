<template>
 <div class="season-list" ref='list'>
   <ul class="season-list-ul">
      <component v-if="component" :is="component" :item="item"  v-for="item in list" :key="item.season_id"></component>
   </ul>
 </div>
</template>

<script type="text/ecmascript-6">
import SeasonItem from "../season-item/season-item";
import ZhihuItem from "../zhihu-item/zhihu-item";
import LazyLoad from "easy-lazyload";

export default {
  props: ["list", "type"],
  data() {
    return {};
  },
  methods: {
    initLazyload() {
      this.loader = new LazyLoad(this.$refs.list, {
        loading: require("common/image/loading.gif"),
      });
      this._initLoader = true;
    }
  },
  watch: {
    list: {
      handler(newList) {
        if (newList.length && !this._initLoader) {
          this.$nextTick(() => {
            this.initLazyload();
          });
        } else {
          this.$nextTick(() => {
            this.loader.refresh();
          });
        }
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    component() {
      if (this.type === "知乎热图") {
        return "zhihu-item";
      }
      return "season-item";
    }
  },
  components: {
    SeasonItem,
    ZhihuItem
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.season-list {
  .season-list-ul {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
