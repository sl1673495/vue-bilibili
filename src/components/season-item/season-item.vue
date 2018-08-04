<template>
    <div class="season-item" @click="selectSeason">
        <div class="image-wrap">
            <img class="image" :class="imageCls(item)" :src="item.square_cover"/>
            <div class="info">
                <div class="info-item">
                    <i class="icon iconfont icon-play"></i>
                    <span class="info-text">{{getPlayCount(item)}}</span>
                </div>
                <div class="info-item">
                    <i class="icon iconfont icon-xin"></i>
                    <span class="info-text">{{getFavCount(item)}}</span>
                </div>
            </div>
            <h1 class="title">
                {{item.title}}
            </h1>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
  import {formatNumber} from 'common/js/util'
  import {SHORT_VIDEO_KEY} from 'common/js/config'
  import {setShortVideo} from 'common/js/storage'

  export default {
    created() {
      this.formatNumber = formatNumber
    },
    props: ["item"],
    data() {
      return {};
    },
    methods: {
      selectSeason() {
        const {season_id} = this.item
        if (season_id) {
          this.$router.push(`/season-detail/${season_id}`)
        } else {
          this.$router.push(`/season-detail/${SHORT_VIDEO_KEY}`)
          setShortVideo(this.item)
        }
      },
      imageCls(item) {
        return item.short_id ? 'short-video' : ''
      },
      getPlayCount(item) {
        return item.play_count ? formatNumber(item.play_count) : formatNumber(item.statistics.share)
      },
      getFavCount(item) {
        return item.dm_count ? formatNumber(item.dm_count) : formatNumber(item.statistics.zan)
      }
    },
    components: {}
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '~common/stylus/variable';

    .season-item {
        flex: 0 0 50%;
        margin-bottom: 5px;

        .image-wrap {
            padding: 10px;

            .image {
                width: 100%;
                height: 170px;
                border-radius: 5px;

                &.short-video {
                    height: 332px;
                }
            }

            .info {
                display: flex;

                .info-item {
                    flex: 1;

                    .icon {
                        vertical-align: middle;

                        &.icon-xin {
                            color: $color-sub-theme;
                        }
                    }

                    .info-text {
                        font-size: $font-size-small;
                        vertical-align: middle;
                    }
                }
            }

            .title {
                margin-top: 8px;
                font-size: $font-size-small;
            }
        }
    }
</style>
