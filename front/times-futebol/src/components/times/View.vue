<template>

  <div>
    <b-row>
      <b-col offset="1" cols="5">
        <span v-if="!edit">Nome: {{time.nome}}</span>
        <b-form-input type="text" v-model="time.nome" placeholder="Nome do time" v-else></b-form-input>
      </b-col>
      <b-col cols="5">
        <span v-if="!edit">Sigla: {{time.sigla}}</span>
        <b-form-input type="text" v-model="time.sigla" placeholder="Sigla do time" v-else></b-form-input>
      </b-col>
      <b-col cols="12" style="margin-top: 20px;">
        <b-button variant="warning" v-on:click="editar" v-if="!edit">Editar</b-button>
        <b-button variant="success" v-on:click="salvar" v-else>Salvar</b-button>
      </b-col>
    </b-row>
    <hr>
    <b-row>
      <b-col cols="12"><h1>Jogadores Vinculados</h1></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'TimeView',
  data () {
    return {
      edit: false
    }
  },
  methods: {
    editar: function () {
      this.edit = true
    },
    salvar: function () {
      this.$store.dispatch('putTime', {id: this.$route.params.id, time: this.time})
      this.edit = false
    }
  },
  computed: {
    time () {
      return this.$store.state.times.timeView
    }
  },
  created () {
    this.$store.dispatch('getTime', this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
