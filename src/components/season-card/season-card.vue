<template>
    <div class="season-card" v-show="season.season_id">
        <div class="card-body">
            <div class="img-wrap">
                <img class="img" :src="season.cover"/>
            </div>
            <div class="season-content" ref="content">
                <p class="title">{{season.title}}</p>
                <p class="data">
                    <span class="play">
                        {{formatNumber(season.play_count)}}次观看
                    </span>
                    <span class="follow">
                        {{formatNumber(season.favorites)}}人追番
                    </span>
                </p>
                <p class="evaluate">
                    {{season.evaluate}}
                </p>
            </div>
            <div class="rating-wrap">
                <div class="score">
                    <span class="score-num">{{season.media && season.media.rating.score}}</span>分
                </div>
                <div class="count">
                    {{formatNumber(season.media && season.media.rating.count)}}人
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {formatNumber} from 'common/js/util'

  export default {
    created() {
      this.formatNumber = formatNumber
    },
    props: ['season'],
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import '~common/stylus/variable';

    .season-card
        min-height 125px
        .card-body
            display flex
            padding 5px
            box-sizing border-box
            align-items center
            .img-wrap
                flex 0 0 80px
                .img
                    width 100%
                    height 100px
            .season-content
                flex 1
                padding 5px 10px
                .data
                    margin-top 5px
                    font-size $font-size-small
                    .follow
                        margin-left 15px
                .evaluate
                    font-size $font-size-small
                    margin-top 5px
            .rating-wrap
                flex 0 0 60px
                text-align center
                .score
                    color $color-theme
                    .score-num
                        font-size $font-size-large-x
                .count
                    font-size $font-size-small-s
                    margin-top 5px
</style>