<template>
  <div>
    <b-row>
      <b-col offset="1" cols="5">
        <b-form-input type="text" v-model="time.nome" placeholder="Nome do time"></b-form-input>
      </b-col>
      <b-col cols="5">
        <b-form-input type="text" v-model="time.sigla" placeholder="Sigla do time"></b-form-input>
      </b-col>
      <b-col cols="12" style="margin-top: 20px;">
        <b-button variant="success" v-on:click="salvar">Salvar</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'TimeCreate',
  data () {
    return {
      time: {
        nome: '',
        sigla: ''
      }
    }
  },
  methods: {
    salvar: function () {
      this.$store.dispatch('postTime', this.time).then(res => {
        this.$router.push('/times/')
      })
    }
  }
}
</script>

<style scoped>

</style>
