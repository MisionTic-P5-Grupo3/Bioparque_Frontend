<template>
  <div id="login">
    <h3>Iniciar Sesion</h3>
    <form class="login_container">
      <div>
        <label>Correo Electrónico</label>
        <input
          v-model.number="mail"
          type="mail"
          placeholder="Escribe tu correo electrónico"
        />
      </div>
      <div>
        <label>Contraseña</label>
        <input
          v-model.number="password"
          type="password"
          placeholder="Escribe tu contraseña"
        />
      </div>
      <button type="submit" class="btn btn-login">Iniciar Sesion</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login'
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
