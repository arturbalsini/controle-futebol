import Vue from 'vue'

export default {
  state: {
    listaTimes: [],
    timeView: []
  },
  mutations: {
    updateTimes (state, data) {
      state.listaTimes = data
    },
    updateTime (state, data) {
      state.timeView = data
    }
  },
  actions: {
    getTimes (context) {
      Vue.http.get('api/v1/times').then(response => {
        context.commit('updateTimes', response.body)
      }
      )
    },
    getTime (context, id) {
      Vue.http.get('api/v1/times/' + id).then(response => {
        context.commit('updateTime', response.body)
      }
      )
    },
    putTime (context, data) {
      Vue.http.put('api/v1/times/' + data.id, data.time).then(response => {
        context.commit('updateTime', response.body)
      }
      )
    },
    async postTime (context, data) {
      await Vue.http.post('api/v1/times', data).then(response => {
        context.commit('updateTimes', response.body)
      })
    },
    async deleteTime (context, id) {
      await Vue.http.delete('api/v1/times/' + id).then(response => {
        context.commit('updateTimes', response.body)
      }
      )
    }
  }
}
