<template>
    <scroller>
        <div class="short-video-detail">
            <x-player :url="shortVideo.video_url"></x-player>
            <div class="video-info">
                <div class="author">
                    <img class="avatar" :src="shortVideo.avatar" />
                    @{{shortVideo.nickname}}
                </div>
                <div class="desc">
                    {{shortVideo.title}}
                </div>
            </div>
            <div class="comment-wrap">
                <p class="title">评论({{shortVideo.comments.length}})</p>
                <ul class="comment-list">
                    <li class="comment-item" v-for="(comment, index) in shortVideo.comments">
                        <div class="avatar-wrap">
                            <img class="avatar" :src="comment.avatar" />
                        </div>
                        <div class="content">
                            <p class="author">{{comment.nickname}}</p>
                            <p class="text" :class="{top: index < 3}">{{comment.text}}</p>
                        </div>
                        <div class="favorite">
                            <i class="iconfont icon iconfont icon-xin"></i>
                            <p class="fav-num">
                                {{comment.zan}}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
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


  export default {
    name: 'short-video-detail',
    created() {
      this.shortVideo = getShortVideo() || {}
    },
    data() {
      return {
        shortVideo: {},
        loading: false
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
    @import '~common/stylus/variable';

    .video-info
        padding 15px 10px
        .author
            display flex
            align-items center
            font-size $font-size-small
            font-weight 700
            .avatar
                border-radius 50%
                width 30px
                height 30px
                margin-right 5px
        .desc
            margin-top 5px
            font-size $font-size-small
    .comment-wrap
        display flex
        flex-direction column
        flex 1
        .title
            padding 10px
        .comment-list
            .comment-item
                display flex
                padding 10px 5px
                .avatar-wrap
                    display flex
                    align-items center
                    justify-content center
                    flex 0 0 50px
                    .avatar
                        border-radius 50%
                        width 20px
                        height 20px
                .content
                    flex 1
                    .author
                        font-size $font-size-small
                        margin-bottom 5px
                    .text
                        font-size $font-size-small
                        word-break break-all
                        &.top
                            color $color-theme
                .favorite
                    flex 0 0 50px
                    text-align center
                    display flex
                    flex-direction column
                    justify-content center
                    .icon-xin
                        font-size $font-size-small-s
                        color: $color-sub-theme;
                    .fav-num
                        margin-top 5px
                        font-size $font-size-small-s
</style>