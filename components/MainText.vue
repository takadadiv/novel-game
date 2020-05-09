<template lang="pug">
  .wrapper(@click="")
    .speaker {{ speaker }}
    .text {{ text }}
</template>

<script>
export default {
  data () {
    return {
      speaker: 'sample speaker',
      text: 'sample text'
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
