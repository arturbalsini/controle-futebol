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
        <b-col cols="6"></b-col>
        <b-col cols="3">
          <b-button variant="success" style="margin: 15px;" v-on:click="goToNew"><i class="fas fa-search"></i> Novo Time</b-button>
        </b-col>
        <b-col cols="12">
          <b-table
            id="my-table"
            striped
            responsive
            sortable
            :items="times"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            :filter="filter"
          >
            <template v-slot:cell(opção)="row">
              <b-button variant="success" v-on:click="goToView(row.item.id)"><i class="fas fa-search"></i> Ver</b-button>
              <b-button variant="danger" v-on:click="deletaTime(row.item.id)"><i class="fas fa-times"></i> Excluir</b-button>
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
  name: 'lista-times',
  data () {
    return {
      fields: [
        { key: 'id', sortable: true },
        { key: 'nome', sortable: true },
        { key: 'sigla', sortable: true },
        { key: 'opção', sortable: false }
      ],
      perPage: 10,
      currentPage: 1,
      filter: null
    }
  },
  methods: {
    deletaTime: function (id) {
      this.$store.dispatch('deleteTime', id).then(res => {
        this.msgTela('Time excluido com sucesso!', 'success')
      })
    },
    goToView: function (id) {
      this.$router.push('/times/' + id)
    },
    goToNew: function (id) {
      this.$router.push('/times/create')
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
    times () {
      return this.$store.state.times.listaTimes
    },
    rows () {
      return this.times.length
    }
  },
  created () {
    this.$store.dispatch('getTimes')
  }
}
</script>

<style scoped>

</style>
