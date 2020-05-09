export const state = () => ({
  no: 1,
  backgroundImage: '_nuxt/assets/graphic/background/livehouse.png',
  current: 0
})

export const mutations = {
  setNo (no) {
    state.no = no
  },
  setBackgroundImage (background) {
    state.background = background
  },
  setCurrent (current) {
    state.current = current
  }
}
