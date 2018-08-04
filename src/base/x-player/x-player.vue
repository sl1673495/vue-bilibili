<template>
    <div
         class="player"
         ref="player"
         >
    </div>
</template>

<script type="text/ecmascript-6">
  import Player from 'xgplayer';

  export default {
    props: ['url'],
    mounted() {
        this.initPlayer()
    },
    methods: {
      initPlayer() {
        if (!this.url) return
        this.player = new Player({
          el:this.$refs.player,
          url: this.url,
          width: '100%',
        });
      }
    },
    watch: {
      url(url, oldUrl) {
        if (url && url !== oldUrl) {
          if (!this.player) {
            this.initPlayer()
          }else {
            this.player.src = url
            this.player.reload()
          }
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .player
        margin-bottom 20px
</style>