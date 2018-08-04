<template>
    <scroller :options="{eventPassthrough: 'horizontal'}">
        <div class="season-detail">
            <x-player :url="playUrl"></x-player>
            <season-card :season="season"></season-card>
            <select-part :parts="parts"
                         :activeIndex.sync="activePartIndex"
            >
            </select-part>
            <Loading :loading="loading"></Loading>
        </div>
    </scroller>
</template>

<script type="text/ecmascript-6">
  import {getSeasonInfo} from 'api/season'
  import Scroller from 'base/scroller/scroller'
  import Loading from 'base/loading/loading'
  import SeasonCard from 'components/season-card/season-card'
  import XPlayer from 'base/x-player/x-player'
  import SelectPart from 'components/select-part/select-part'
  import WhiteSpace from 'base/white-space/white-space'
  import {SHORT_VIDEO_KEY} from 'common/js/config'
  import {getShortVideo} from 'common/js/storage'

  const DEFAULT_SEASON = {
    season_id: 1,
    cover: 'static/images/miaowu.png',
    title: '秒速五厘米',
    play_count: '99999999',
    favorites: '8888888',
    evaluate: '远野贵树因为父母调职而转校来到东京的小学。一年后，篠原明里也转校来到同一班级。两人因体弱多病，不擅长运动，而喜欢独自待在图书馆。虽然年纪还小，可是两人还是互相吸引，对方在自己心中的存在渐渐变得无法取代。但是，两人亲密的世界因明里再度转校而悲哀地告终。之后，贵树一直努力地适应没有明里的世界。但在中学一年级的夏天，贵树收到明里写给他的信时，感情一下子再度涌现。他们开始通信，并再次得到能够互相传达心意的幸福。',
    media: {
      rating: {
        count: 99999,
        score: 10,
      }
    }
  }

  const parts = [
    {
      title: '命运石之门',
      url: 'static/season/demo.mp4'
    },
    {
      title: '杀戮天使',
      url: 'static/season/demo.mp4'
    },
    {
      title: '秒速五厘米',
      url: 'static/season/demo.mp4'
    },
    {
      title: '你的名字',
      url: 'static/season/demo.mp4'
    }
  ]

  export default {
    name: 'season-detail',
    created() {
      const id = this.$route.params.id
      getSeasonInfo(id)
        .then(season => {
          this.season = season
        })
        .catch(() => {
          this.error = true
          this.season = DEFAULT_SEASON
        })
    },
    data() {
      return {
        season: {},
        error: false,
        activePartIndex: 0,
        parts,
      }
    },
    computed: {
      loading() {
        return !this.season.season_id && !this.error
      },
      playUrl() {
        return this.parts[this.activePartIndex].url
      }
    },
    components: {
      Scroller,
      Loading,
      SeasonCard,
      XPlayer,
      SelectPart,
      WhiteSpace
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>