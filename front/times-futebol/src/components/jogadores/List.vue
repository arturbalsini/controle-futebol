<template>
    <div>
      <b-row>
        <b-col cols="3" style="margin: 15px 0px">
          <b-input
            placeholder="Procurar"
            type="search"
            v-model="filter"
          />
        </b-col>
        <b-col cols="6">
          <download-excel
            style="margin: 15px;"
            class   = "btn btn-primary"
            :data   = "jogadores"
            :fields = "fieldsExcel"
            worksheet = "Jogadores"
            name    = "jogadores.xls">

            <i class="fas fa-file-excel"></i> Exportar Excel

          </download-excel>
        </b-col>
        <b-col cols="3">
          <b-button variant="success" style="margin: 15px;" v-on:click="goToNew"><i class="fas fa-plus"></i> Novo Jogador</b-button>
        </b-col>
        <b-col cols="12">
          <b-table
            id="my-table"
            striped
            responsive
            sortable
            :items="jogadores"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            :filter="filter"
          >
            <template v-slot:cell(opção)="row">
              <b-button variant="success" v-on:click="goToView(row.item.id)"><i class="fas fa-search"></i> Ver</b-button>
              <b-button variant="danger" v-on:click="deletaJogador(row.item.id)"><i class="fas fa-times"></i> Excluir</b-button>
            </template>
          </b-table>
        </b-col>
        <b-col cols="3">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            align="fill"
            aria-controls="my-table"
          />
        </b-col>
      </b-row>
    </div>
</template>

<script>
export default {
  name: 'lista-jogadores',
  data () {
    return {
      fields: [
        { key: 'id', sortable: true },
        { key: 'nome', sortable: true },
        { key: 'descricao', label: 'Posição', sortable: true },
        { key: 'nome_time', label: 'Time', sortable: true },
        { key: 'ataque', sortable: true },
        { key: 'defesa', sortable: true },
        { key: 'fisico', label: 'Físico', sortable: true },
        { key: 'drible', sortable: true },
        { key: 'chute', sortable: true },
        { key: 'passe', sortable: true },
        { key: 'opção', sortable: true }
      ],
      fieldsExcel: {
        id: 'id',
        nome: 'nome',
        descricao: 'descricao',
        nome_time: 'nome_time',
        ataque: 'ataque',
        defesa: 'defesa',
        fisico: 'fisico',
        drible: 'drible',
        chute: 'chute',
        passe: 'passe'
      },
      perPage: 10,
      currentPage: 1,
      filter: null
    }
  },
  methods: {
    deletaJogador: function (id) {
      this.$store.dispatch('deleteJogador', id).then(res => {
        this.msgTela('Time excluido com sucesso!', 'success')
      })
    },
    goToView: function (id) {
      this.$router.push('/jogadores/' + id)
    },
    goToNew: function (id) {
      this.$router.push('/jogadores/create')
    },
    msgTela: function (msg, variant) {
      this.$bvToast.toast(msg, {
        title: 'Informa!',
        autoHideDelay: 2000,
        variant: variant,
        appendToast: false
      })
    }
  },
  computed: {
    jogadores () {
      return this.$store.state.jogadores.listaJogadores
    },
    rows () {
      return this.jogadores.length
    }
  },
  created () {
    this.$store.dispatch('getJogadores')
  }
}
</script>

<style scoped>

</style>
