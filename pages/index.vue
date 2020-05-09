<template lang="pug">
  app
</template>

<script>
import App from '~/components/App.vue'

export default {
  components: {
    App
  },
  async fetch ({ store, $axios }) {
    const json = await $axios.$get('scene/scene1.json')
    store.commit('scene/no', 1)
    store.commit('scene/textIndex', 0)
    store.commit('scene/texts', json.texts)
    store.commit('scene/bgImage', json.bgImage)
  }
}
</script>
