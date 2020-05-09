<template lang="pug">
  .wrapper(@click="read")
    .text {{ texts[textIndex] }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('scene', [
    'texts', 'textIndex'
  ]),
  methods: {
    read () {
      console.log('read!')
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  height 30vh
  width 100%
  position absolute
  bottom 0
  background-color rgba(255, 255, 255, 0.7)
</style>
