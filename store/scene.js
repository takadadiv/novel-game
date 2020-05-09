export const state = () => ({
  no: 1,
  bgImage: null,
  events: [],
  eventIndex: 0
})

export const mutations = {
  no (state, no) {
    state.no = no
  },
  bgImage (state, bgImage) {
    state.bgImage = `/_nuxt/assets/graphic/background/${bgImage}`
  },
  events (state, events) {
    state.events = events
  },
  eventIndex (state, eventIndex) {
    state.eventIndex = eventIndex
  }
}
