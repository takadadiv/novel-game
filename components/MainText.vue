<template lang="pug">
  .wrapper(@click="next")
    .speaker {{ speaker }}
    .text {{ text }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    text () {
      const event = this.events[this.eventIndex]
      return event?.text || event
    },
    speaker () {
      const event = this.events[this.eventIndex]
      return event?.speaker
    },
    ...mapState('scene', [
      'events', 'eventIndex'
    ])
  },
  methods: {
    next () {
      this.$store.commit('scene/eventIndex', this.eventIndex + 1);
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  height 30%
  width 100%
  position absolute
  bottom 0
  background-color rgba(255, 255, 255, 0.7)
</style>
