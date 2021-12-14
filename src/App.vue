<template>
  <div id="app">
    <my-header></my-header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    if (localStorage.getItem('login')) {
    } else {
      localStorage.setItem('login', false)
    }
    if (localStorage.getItem('access')) {
      this.login = true
    } else {
      this.login = false
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
body,
html {
  padding: 0;
  margin: 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.btn {
  background-color: black;
  height: 60px;
  width: 270px;
  margin-bottom: 30px;
  font-size: 20px;
  color: white;
}
.btn:hover {
  cursor: pointer;
}
</style>
