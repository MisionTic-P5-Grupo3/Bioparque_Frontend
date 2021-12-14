<template>
  <div class="editarPlan">
    <h1>Editar Plan</h1>
    <form v-on:submit.prevent="agregarPlan" class="form" method="POST">
      <div>
        <label>Nombre del Plan</label>
        <input v-model="getPlan.nombre_plan" type="text" placeholder="Escribe el nombre del plan" />
      </div>
      <div>
        <label>Jornada</label>
        <select v-model="getPlan.jornada" type="text">
         <option value="Diurna">Diurna</option>
         <option value="Nocturna">Nocturna</option>
         <option value="Diurno">Diurno</option>
         <option value="Nocturno">Nocturno</option>
        </select>
      </div>
      <div>
        <label>Descripcion del plan</label>
        <input v-model="getPlan.descripcion" type="text" placeholder="Escribe una breve descripción del plan" />
      </div>
      <div>
        <label>Precio</label>
        <input
          v-model="getPlan.precio" type="number" placeholder="Escribe el precio en pesos colombianos" />
      </div>
      <div>
        <label>Imagen</label>
        <input
          v-model="getPlan.url" type="text" placeholder="Pega la url de la imagen" />
      </div>
      <button type="submit" class="btn btn-form">Editar Plan Ahora</button>
    </form>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'EditarPlan',
  data: function () {
    var url = JSON.parse(JSON.stringify(this.$route))
    var params = url.params
    return {
      idRes: params.id_plan,
      getPlan: []
    }
  },
  apollo: {
    getPlan: {
      query: gql`
        query GetPlan($planId: Int!) {
          getPlan(planId: $planId) {
            id_plan
            nombre_plan
            precio
            descripcion
            jornada
            url
          }
        }`,
      variables () {
        var planId = Number(this.$route.params.id_plan)
        return {
          planId
        }
      }
    }
  }
}
</script>

<style>
.form {
  width: 800px;
  margin: 45px auto;
  padding: 25px 20px;
  background-color: rgb(240, 240, 240);
  border-radius: 10px;
}
.form div {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
}
.form div label {
  text-align: start;
  margin: 25px 0 10px;
  color: rgb(68, 68, 68);
}
.form div select,
.form div input {
  height: 40px;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: rgb(223, 223, 223);
  padding: 0 0 0 10px;
}
.btn-form {
  margin: 25px 0 0;
  cursor: pointer;
}
</style>
