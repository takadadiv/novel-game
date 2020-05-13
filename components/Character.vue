<template lang="pug">
  .wrapper
    img.character(
      v-for="character in characters" :key="character.name"
      :src="require(`~/assets/graphic/character/${character.image}`)"
      :style="character.style"
    )
</template>

<script>
export default {
  computed: {
    characters () {
      return this.$store.state.scene.characters
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  height 70%
  position relative
.character
  position absolute
  height 55vh
</style>
