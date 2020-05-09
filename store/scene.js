export const state = () => ({
  no: 1,
  bgImage: null,
  texts: [],
  textIndex: 0
})

export const mutations = {
  no (state, no) {
    state.no = no
  },
  bgImage (state, bgImage) {
    state.bgImage = `/_nuxt/assets/graphic/background/${bgImage}`
  },
  texts (state, texts) {
    state.texts = texts
  },
  textIndex (state, textIndex) {
    state.textIndex = textIndex
  }
}
