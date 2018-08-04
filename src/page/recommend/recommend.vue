<template>
    <div class="recommend">
        <section-list :sections="sections"></section-list>
        <loading :loading="loading"></loading>
    </div>
</template>

<script type="text/ecmascript-6">
  import {
    getSeasonRecommends,
    getCnRecommends,
    getShortVideos,
    fallbackSeasonRecommends,
    fallbackCnRecommends,
  } from "api/recommend";
  import SectionList from 'base/section-list/section-list'
  import Loading from 'base/loading/loading'
  import {noop} from "common/js/util"

  const sectionOptions = [
    {title: '抖音', req: getShortVideos},
    {title: '热门动画', req: getSeasonRecommends, fallback: fallbackSeasonRecommends},
    {title: '国产动画', req: getCnRecommends, fallback: fallbackCnRecommends}
  ]

  export default {
    created() {
      this.initSections();
    },
    methods: {
      async initSections() {
        let sections = []
        let promises = []
        sectionOptions.forEach(opt => {
          let section = {
            title: opt.title,
            data: null
          }
          // promises for Promise.all
          promises.push(
            this._recursionGetList.call(
              this,
              opt.req,
              opt.fallback
            )
          )
          sections.push(section)
        })
        const datas = await Promise.all(promises)
        datas.forEach((data, i) => sections[i].data = data)
        this.sections = sections
      },
      // 接口很辣鸡，总是失败，所以要准备降级请求本地json
      async _recursionGetList(req, fallback) {
        let data = await req()
        // 请求报错不处理 走回退方案 不catch的话会报错
          .catch(noop)

        if (!data) {
          fallback && (data = await fallback())
        }

        return data
      }
    },
    data() {
      return {
        sections: [],
      };
    },
    computed: {
      loading() {
        return !this.sections.length
      }
    },
    components: {
      SectionList,
      Loading
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .recommend {
        height: 100%
    }
</style>