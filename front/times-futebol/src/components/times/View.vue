<template>

  <div>
    <b-row>
      <b-col cols="12">
        <h1>{{time.nome}} ({{time.sigla}})</h1>
      </b-col>
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
                :data   = "jogadoresVinculados"
                :fields = "fieldsExcel"
                :title = "titleExcel"
                worksheet = "Time x Jogadores"
                name    = "time_jogadores.xls">

          <i class="fas fa-file-excel"></i> Exportar Excel
        </download-excel>
      </b-col>
      <b-col cols="3">
        <b-button variant="success" style="margin: 15px;" v-b-modal.modal-1 ><i class="fas fa-paperclip"></i> Vincular Jogador</b-button>
      </b-col>
      <b-col cols="12">
        <b-table
                id="my-table"
                striped
                responsive
                sortable
                :items="jogadoresVinculados"
                :fields="fields"
                :per-page="perPage"
                :current-page="currentPage"
                :filter="filter"
        >
          <template v-slot:cell(opção)="row">
            <b-button variant="danger" v-on:click="removeVinculo(row.item.id)"><i class="fas fa-times"></i> Excluir Vinculo</b-button>
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

    <b-modal id="modal-1" title="Vincular Jogadores">
      <b-row>
        <b-col cols="6" style="margin: 15px 0px">
          <b-input
                  placeholder="Procurar"
                  type="search"
                  v-model="filter"
          />
        </b-col>
        <b-col cols="6"></b-col>
        <b-col cols="12">
          <b-table
                  id="my-table"
                  striped
                  responsive
                  sortable
                  :items="jogadoresSemVinculo"
                  :fields="fields2"
                  :per-page="perPage"
                  :current-page="currentPage"
                  :filter="filter"
          >
            <template v-slot:cell(opção)="row">
              <b-button variant="success" v-on:click="vincular(row.item.id)"><i class="fas fa-plus"></i></b-button>
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
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'TimeView',
  data () {
    return {
      edit: false,
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
      fields2: [
        { key: 'id', sortable: true },
        { key: 'nome', sortable: true },
        { key: 'descricao', label: 'Posição', sortable: true },
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
    editar: function () {
      this.edit = true
    },
    salvar: function () {
      this.$store.dispatch('putTime', {id: this.$route.params.id, time: this.time})
      this.edit = false
    },
    vincular: function (id) {
      let jogador = this.jogadoresSemVinculo.filter((jogador) => {
        return jogador.id === id
      })
      jogador[0].id_time = parseInt(this.$route.params.id)

      this.$store.dispatch('putJogador', {id: jogador[0].id, jogador: jogador[0]}).then(res => {
      })
    },
    removeVinculo: function (id) {
      let jogador = this.jogadoresVinculados.filter((jogador) => {
        return jogador.id === id
      })
      jogador[0].id_time = null

      this.$store.dispatch('putJogador', {id: jogador[0].id, jogador: jogador[0]}).then(res => {
      })
    }
  },
  computed: {
    titleExcel () {
      return `Jogadores vinculados ao time ${this.time.nome} (${this.time.sigla})`
    },
    time () {
      return this.$store.state.times.timeView
    },
    rows () {
      return this.time.length
    },
    jogadoresVinculados () {
      let jogadores = this.$store.state.jogadores.listaJogadores
      return jogadores.filter((jogador) => {
        return jogador.id_time === parseInt(this.$route.params.id)
      })
    },
    jogadoresSemVinculo () {
      let jogadores = this.$store.state.jogadores.listaJogadores
      return jogadores.filter((jogador) => {
        return jogador.id_time === null
      })
    }
  },
  created () {
    this.$store.dispatch('getTime', this.$route.params.id)
    this.$store.dispatch('getJogadores')
  }
}
</script>

<style scoped>

</style>
