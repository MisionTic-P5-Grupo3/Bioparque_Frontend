<template>
  <div id="login">
    <h3>Iniciar Sesion</h3>
    <form v-on:submit.prevent="login" class="login_container">
      <div>
        <label>Correo Electrónico</label>
        <input
          v-model="reservaData.username"
          type="mail"
          placeholder="Escribe tu correo electrónico"
        />
      </div>
      <div>
        <label>Contraseña</label>
        <input
          v-model="reservaData.password"
          type="password"
          placeholder="Escribe tu contraseña"
        />
      </div>
      <button type="submit" class="btn btn-login">Iniciar Sesion</button>
    </form>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'Login',
  data: function () {
    return {
      reservaData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login: async function () {
      var credentials = {
        username: this.reservaData.username,
        password: this.reservaData.password
      }
      await this.$apollo.mutate(
        {
          mutation: gql`
            mutation CreateReserva($credentials: CredentialsInput!) {
              logIn(credentials: $credentials) {
                access
                refresh
              }
            }
          `,
          variables: {
            credentials
          }
        }
      ).then((data) => {
        var token = JSON.stringify(data)
        var dataToken = JSON.parse(token)
        localStorage.setItem('login', true)
        localStorage.setItem('access', dataToken.data.logIn.access)
        localStorage.setItem('refresh', dataToken.data.logIn.refresh)
        location.reload()
      }).then(await this.$router.push('/'))
    }
  }
}
</script>

<style>
#login h3 {
  font-size: 35px;
}
.login_container {
  border: 3px solid black;
  height: 300px;
  width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.login_container div {
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  height: 97px;
}
.login_container div label {
  font-size: 18px;
  text-align: start;
  margin: 30px 0 10px;
}
.login_container div input {
  height: 200px;
}
.btn-login {
  margin-top: 20px;
}
</style>
