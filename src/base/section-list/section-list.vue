<template>
    <div class="recommend" v-if="sections.length">
        <scroller
                class="season-list-wrap"
                :data="scrollRefreshKey"
        >
            <div>
                <template v-for="(section, index) in sections">
                    <more-header :title="section.title" v-model="section.showMore"></more-header>
                    <season-list :list="getShowList(section, index)"></season-list>
                </template>
            </div>
        </scroller>
    </div>
</template>

<script type="text/ecmascript-6">
  const INIT_LEN = 4
  import Scroller from 'base/scroller/scroller'
  import MoreHeader from 'base/more-header/more-header'
  import SeasonList from 'components/season-list/season-list'

  export default {
    props: {
      sections: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        scrollRefreshKey: true,
      }
    },
    methods: {
      getShowList(section, index) {
        const { data } = section || {}
        return section.showMore ? data : data.slice(0, INIT_LEN)
      },
      scrollerRefresh() {
        this.scrollRefreshKey = !this.scrollRefreshKey;
      },
    },
    watch: {
      showMoreFlags: {
        handler() {
          this.scrollerRefresh()
        },
        deep: true
      },
      sections(sections) {
        if (sections.length) {
          sections.forEach(sec => {
            if (!sec.showMore) {
              this.$set(sec, 'showMore', false)
            }
          })
        }
      }
    },
    components: {
      Scroller,
      MoreHeader,
      SeasonList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>