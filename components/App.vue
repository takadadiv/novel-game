<template lang="pug">
  .app(:style="{ backgroundImage: `url(${backgroundImage})` }")
</template>

<script>
export default {
  computed: {
    backgroundImage () {
      return this.$store.state.scene.backgroundImage
    },
  }
}
</script>

<style lang="stylus" scoped>
.app
  width 100%
  height 100%
  background-position center
  background-size cover
</style>
