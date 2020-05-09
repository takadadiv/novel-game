<template lang="pug">
  .container
    .app(:style="{ backgroundImage: `url(${bgImage})` }")
      MainText
</template>

<script>
import MainText from '~/components/MainText.vue'

export default {
  components: {
    MainText
  },
  computed: {
    bgImage () {
      return this.$store.state.scene.bgImage
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  background #ccc
  width 100%
  max-width 450px
  height 100vh
  max-height 900px
  margin 0 auto
  position relative
.app
  width 100%
  height 100%
  background-position center
  background-size cover
</style>
