<template>
  <div class="recommend" v-if="sections.length" ref="recommend">
    <scroller ref="scroller" class="season-list-wrap" :data="scrollRefreshKey">
      <div>
        <template v-for="(section, index) in sections">
          <more-header
            :showClick="shouldShowClick(section)"
            :key="`more-header-${index}`"
            ref="headers"
            :title="section.title"
            v-model="section.showMore"
            @click="(showMore) => onShowMoreChange(showMore, index)"
          ></more-header>
          <season-list :key="`season-list-${index}`" :list="getShowList(section, index)" :type="section.type"></season-list>
        </template>
      </div>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
const INIT_LEN = 2;
import Scroller from "base/scroller/scroller";
import MoreHeader from "base/more-header/more-header";
import SeasonList from "components/season-list/season-list";

export default {
  props: {
    sections: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      scrollRefreshKey: true
    };
  },
  methods: {
    getShowList(section, index) {
      const { data } = section || {};
      return section.showMore ? data : data.slice(0, INIT_LEN);
    },
    scrollerRefresh() {
      this.scrollRefreshKey = !this.scrollRefreshKey;
    },
    onShowMoreChange(showMore, index) {
      if (showMore) {
        const headers = this.$refs.headers.map(header => header.$el)
        // 获取scroller实例上的真正better-scroll实例
        this.$refs.scroller.scroller.scrollToElement(headers[index], 500)
      }
    },
    shouldShowClick(section) {
      return section.data.length > INIT_LEN
    }
  },
  watch: {
    sections(sections) {
      if (sections.length) {
        sections.forEach(sec => {
          if (!sec.showMore) {
            this.$set(sec, "showMore", false);
          }
        });
      }
    }
  },
  components: {
    Scroller,
    MoreHeader,
    SeasonList
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped></style>