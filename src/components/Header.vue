<template>
  <div id="header">
    <div class="container">
      <h3><router-link to="/" class="logo white">AVESMS</router-link></h3>
      <nav v-if="logged === 'false'">
        <router-link to="planes" class="planes-nav white">Planes</router-link>
        <router-link to="aves" class="planes-nav white">Aves</router-link>
        <router-link to="login" class="planes-nav white">LogIn</router-link>
        <button class="button-reservar">
          <router-link to="reservar" class="texto-reservar white"
            >Reservar</router-link
          >
        </button>
      </nav>
      <nav v-if="logged === 'true'">
        <router-link to="agendamientos" class="planes-nav white"
          >Agendamientos</router-link
        >
        <router-link to="planesAdmin" class="planes-nav white"
          >Planes</router-link
        >
        <router-link to="avesAdmin" class="planes-nav white">Aves</router-link>
        <button class="button-reservar" v-on:click="cerrarSesion">
          <router-link to="/" class="texto-reservar white"
            >Cerrar Sesion</router-link
          >
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      logged: localStorage.getItem('login')
    }
  },
  methods: {
    cerrarSesion: function () {
      localStorage.setItem('login', false)
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      this.$router.push('/')
      location.reload()
    }
  }
}
</script>
<style>
#header {
  background-color: black;
  height: 85px;
  padding: 0 45px;
  display: flex;
  align-items: center;
}
.container {
  width: 1200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  color: white;
}
#header h3 {
  margin: 0;
}
.white {
  color: white;
  text-decoration: none;
}
.logo {
  font-size: 25px;
}
.planes-nav {
  margin-right: 20px;
}
.button-reservar {
  background-color: black;
  border: 1px solid white;
  height: 40px;
  width: 150px;
}
.texto-reservar {
  font-size: 17px;
}
</style>
