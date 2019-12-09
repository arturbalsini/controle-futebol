<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col id="nav" sm="12" md="2">
          <b-nav vertical style="margin-top: 140px;">
            <b-nav-item active href="#/">Home</b-nav-item>
            <b-nav-item active href="#/times">Times</b-nav-item>
            <b-nav-item active href="#/jogadores">Jogadores</b-nav-item>
          </b-nav>
        </b-col>
        <b-col sm="12" md="10">
          <router-view style="margin-top: 60px;"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.row {
  height: 100vh;
}
#nav {
  background: rgba(87,134,180,0.8);
  background-image: url("./assets/fundo.jpg");
  box-shadow: 0px 0px 4px 1px black;
  /*height: 45px;*/
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
  .nav-link {
    color: #f8f9fa;
  }
.nav-link:hover {
  color: #d6d8db;
}
</style>
