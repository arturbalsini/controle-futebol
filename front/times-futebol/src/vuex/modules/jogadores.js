import Vue from 'vue'

export default {
  state: {
    listaJogadores: [],
    listaJogador: []
  },
  mutations: {
    updateJogadores (state, data) {
      state.listaJogadores = data
    },
    updateJogador (state, data) {
      state.listaJogador = data
    }
  },
  actions: {
    getJogadores (context) {
      Vue.http.get('api/v1/jogadors').then(response => {
        console.log(response)
        context.commit('updateJogadores', response.body)
      }
      )
    },
    getJogador (context, id) {
      Vue.http.get('api/v1/jogadors/' + id).then(response => {
        context.commit('updateJogador', response.body)
      }
      )
    },
    putJogador (context, data) {
      Vue.http.put('api/v1/jogadors/' + data.id, data.jogador).then(response => {
        context.commit('updateJogador', response.body)
      }
      )
    },
    async postJogador (context, data) {
      await Vue.http.post('api/v1/jogadors', data).then(response => {
        context.commit('updateJogadores', response.body)
      })
    },
    async deleteJogador (context, id) {
      await Vue.http.delete('api/v1/jogadors/' + id).then(response => {
        context.commit('updateJogadores', response.body)
      }
      )
    }
  }
}
