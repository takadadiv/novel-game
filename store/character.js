export const state = () => ({
  maya: {
    gra: 'maya.png',
    pos: [0, 0]
  },
  maiko: {
    gra: 'maiko.png',
    pos: [0, 0]
  }
})

export const mutations = {
  setGra (chara, gra) {
    state[chara].gra = gra
  },
  setPos (chara, pos) {
    state[chara].pos = pos
  }
}
