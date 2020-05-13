<template lang="pug">
  .container
    //- .app(:style="{ backgroundImage: `url(${bgImage})` }")
    .app
      Character
      MainText
</template>

<script>
import Character from '~/components/Character.vue'
import MainText from '~/components/MainText.vue'

export default {
  components: {
    MainText,
    Character
  },
  computed: {
    bgImage () {
      return '_nuxt/assets/graphic/background/livehouse.png'
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
  background-image url('~assets/graphic/background/livehouse.png')
  overflow hidden
</style>
