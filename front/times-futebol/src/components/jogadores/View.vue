<template>
  <div>
    <b-row style="margin-bottom: 30px">
      <b-col cols="12">
        <h1 class="titulo">{{jogador.nome}} - {{jogador.descricao}}</h1>
      </b-col>
      <b-col offset="1" cols="7" class="alinha-esq">
        <label>Nome do Jogador: </label>
        <b-form-input v-model="jogador.nome" :disabled="!editar"></b-form-input>
      </b-col>
      <b-col cols="3" class="alinha-esq">
        <label>Posição: </label>
        <b-form-select v-model="jogador.id_posicao" :options="posicoes" :disabled="!editar"></b-form-select>
      </b-col>
    </b-row>
    <b-row>
      <b-col offset="1" cols="11" class="alinha-esq">
        <h2 class="subtitulo">Atributos</h2>
      </b-col>
      <b-col offset="1" cols="4" class="alinha-esq">
        <div><b>Ataque</b></div>
        <b-button v-on:click="valorAtaque(1)" v-bind:class="[jogador.ataque >= 1 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorAtaque(2)" v-bind:class="[jogador.ataque >= 2 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorAtaque(3)" v-bind:class="[jogador.ataque >= 3 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorAtaque(4)" v-bind:class="[jogador.ataque >= 4 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorAtaque(5)" v-bind:class="[jogador.ataque >= 5 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorAtaque(6)" v-bind:class="[jogador.ataque >= 6 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorAtaque(7)" v-bind:class="[jogador.ataque >= 7 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorAtaque(8)" v-bind:class="[jogador.ataque >= 8 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorAtaque(9)" v-bind:class="[jogador.ataque >= 9 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorAtaque(10)" v-bind:class="[jogador.ataque >= 10 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
      </b-col><b-col cols="7"></b-col>
      <b-col offset="1" cols="4" class="alinha-esq">
        <div><b>Defesa</b></div>
        <b-button v-on:click="valorDefesa(1)" v-bind:class="[jogador.defesa >= 1 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDefesa(2)" v-bind:class="[jogador.defesa >= 2 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDefesa(3)" v-bind:class="[jogador.defesa >= 3 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDefesa(4)" v-bind:class="[jogador.defesa >= 4 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDefesa(5)" v-bind:class="[jogador.defesa >= 5 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDefesa(6)" v-bind:class="[jogador.defesa >= 6 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDefesa(7)" v-bind:class="[jogador.defesa >= 7 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDefesa(8)" v-bind:class="[jogador.defesa >= 8 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDefesa(9)" v-bind:class="[jogador.defesa >= 9 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDefesa(10)" v-bind:class="[jogador.defesa >= 10 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
      </b-col><b-col cols="7"></b-col>
      <b-col offset="1" cols="4" class="alinha-esq">
        <div><b>Físico</b></div>
        <b-button v-on:click="valorFisico(1)" v-bind:class="[jogador.fisico >= 1 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorFisico(2)" v-bind:class="[jogador.fisico >= 2 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorFisico(3)" v-bind:class="[jogador.fisico >= 3 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorFisico(4)" v-bind:class="[jogador.fisico >= 4 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorFisico(5)" v-bind:class="[jogador.fisico >= 5 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorFisico(6)" v-bind:class="[jogador.fisico >= 6 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorFisico(7)" v-bind:class="[jogador.fisico >= 7 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorFisico(8)" v-bind:class="[jogador.fisico >= 8 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorFisico(9)" v-bind:class="[jogador.fisico >= 9 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorFisico(10)" v-bind:class="[jogador.fisico >= 10 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
      </b-col><b-col cols="7"></b-col>
      <b-col offset="1" cols="4" class="alinha-esq">
        <div><b>Drible</b></div>
        <b-button v-on:click="valorDrible(1)" v-bind:class="[jogador.drible >= 1 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDrible(2)" v-bind:class="[jogador.drible >= 2 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDrible(3)" v-bind:class="[jogador.drible >= 3 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDrible(4)" v-bind:class="[jogador.drible >= 4 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDrible(5)" v-bind:class="[jogador.drible >= 5 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDrible(6)" v-bind:class="[jogador.drible >= 6 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDrible(7)" v-bind:class="[jogador.drible >= 7 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDrible(8)" v-bind:class="[jogador.drible >= 8 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDrible(9)" v-bind:class="[jogador.drible >= 9 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorDrible(10)" v-bind:class="[jogador.drible >= 10 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
      </b-col><b-col cols="7"></b-col>
      <b-col offset="1" cols="4" class="alinha-esq">
        <div><b>Chute</b></div>
        <b-button v-on:click="valorChute(1)" v-bind:class="[jogador.chute >= 1 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorChute(2)" v-bind:class="[jogador.chute >= 2 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorChute(3)" v-bind:class="[jogador.chute >= 3 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorChute(4)" v-bind:class="[jogador.chute >= 4 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorChute(5)" v-bind:class="[jogador.chute >= 5 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorChute(6)" v-bind:class="[jogador.chute >= 6 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorChute(7)" v-bind:class="[jogador.chute >= 7 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorChute(8)" v-bind:class="[jogador.chute >= 8 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorChute(9)" v-bind:class="[jogador.chute >= 9 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorChute(10)" v-bind:class="[jogador.chute >= 10 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
      </b-col><b-col cols="7"></b-col>
      <b-col offset="1" cols="4" class="alinha-esq">
        <div><b>Passe</b></div>
        <b-button v-on:click="valorPasse(1)" v-bind:class="[jogador.passe >= 1 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorPasse(2)" v-bind:class="[jogador.passe >= 2 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorPasse(3)" v-bind:class="[jogador.passe >= 3 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorPasse(4)" v-bind:class="[jogador.passe >= 4 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorPasse(5)" v-bind:class="[jogador.passe >= 5 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorPasse(6)" v-bind:class="[jogador.passe >= 6 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorPasse(7)" v-bind:class="[jogador.passe >= 7 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorPasse(8)" v-bind:class="[jogador.passe >= 8 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorPasse(9)" v-bind:class="[jogador.passe >= 9 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
        <b-button v-on:click="valorPasse(10)" v-bind:class="[jogador.passe >= 10 ? 'btn-primary' : 'nao-marcado']" :disabled="!editar"></b-button>
      </b-col><b-col cols="7"></b-col>
    </b-row>
    <hr>
    <b-row>
      <b-col offset="8" cols="4">
        <b-button variant="warning" v-on:click="editarJogador" v-if="!editar">Editar</b-button>
        <b-button variant="warning" v-on:click="salvar" v-else>Salvar</b-button>
      </b-col>
    </b-row>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'JogadoresView',
  data () {
    return {
      editar: false
    }
  },
  methods: {
    editarJogador: function () {
      this.editar = true
    },
    salvar: function () {
      this.$store.dispatch('putJogador', {id: this.$route.params.id, jogador: this.jogador}).then(res => {
        this.editar = false
      })
    }
  },
  computed: {
    jogador () {
      let jogador = this.$store.state.jogadores.listaJogador
      return jogador[0] === undefined ? jogador : jogador[0]
    },
    posicoes () {
      let pos = this.$store.state.posicoes.listaPosicoes
      return pos.map(function (p) {
        return {value: p.id, text: `${p.sigla} - ${p.descricao}`}
      })
    }
  },
  created () {
    this.$store.dispatch('getJogador', this.$route.params.id)
    this.$store.dispatch('getPosicoes')
  }
}
</script>

<style scoped>
  .alinha-esq {
    text-align: left;
  }
  .titulo {
    margin-bottom: 50px;
  }
  .subtitulo {
    margin: 0px 0px 40px 0px;
  }
  .nao-marcado {
    background-color: white;
    border: 1px solid #007bff;
  }
  .nao-marcado:hover {
    background-color: #007bff;
  }
</style>
