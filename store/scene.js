export const state = () => ({
  no: 1,
  bgImage: `_nuxt/assets/graphic/background/livehouse.png`,
  events: [],
  eventIndex: 0,
  characters: [
    {
      name: 'maiko',
      image: 'maiko.png',
      style: {
        bottom: 0,
        left: '-12%'
      }
    },
    {
      name: 'maya',
      image: 'maya.png',
      style: {
        bottom: 0,
        right: '5%'
      }
    }
  ]
})

export const mutations = {
  no (state, no) {
    state.no = no
  },
  bgImage (state, bgImage) {
    state.bgImage = `_nuxt/assets/graphic/background/${bgImage}`
  },
  events (state, events) {
    state.events = events
  },
  eventIndex (state, eventIndex) {
    state.eventIndex = eventIndex
  }
}
