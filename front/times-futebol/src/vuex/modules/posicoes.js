import Vue from 'vue'

export default {
  state: {
    listaPosicoes: []
  },
  mutations: {
    updatePosicoes (state, data) {
      state.listaPosicoes = data
    }
  },
  actions: {
    getPosicoes (context) {
      Vue.http.get('api/v1/posicoes').then(response => {
        context.commit('updatePosicoes', response.body)
      }
      )
    }
  }
}
