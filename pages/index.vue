<template lang="pug">
  .container
    app
</template>

<script>
import App from '~/components/App.vue'

export default {
  components: {
    App
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
</style>
