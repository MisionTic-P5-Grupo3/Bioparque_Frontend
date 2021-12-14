<template>
  <div class="crearPlan">
    <h1>Crear un Plan</h1>
    <form v-on:submit.prevent="agregarPlan" class="form" method="POST">
      <div>
        <label>Nombre del Plan</label>
        <input v-model="planData.nombre" type="text" placeholder="Escribe el nombre del plan" />
      </div>
      <div>
        <label>Jornada</label>
        <select v-model="planData.jornada" type="text">
         <option value="Diurna">Diurna</option>
         <option value="Nocturna">Nocturna</option>
        </select>
      </div>
      <div>
        <label>Descripcion del plan</label>
        <input v-model="planData.descripcion" type="text" placeholder="Escribe una breve descripción del plan" />
      </div>
      <div>
        <label>Precio</label>
        <input
          v-model="planData.precio" type="number" placeholder="Escribe el precio en pesos colombianos" />
      </div>
      <div>
        <label>Imagen</label>
        <input
          v-model="planData.url" type="text" placeholder="Pega la url de la imagen" />
      </div>
      <button type="submit" class="btn btn-form">Crear Plan Ahora</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CrearPlan',
  data: function () {
    return {
      planData: {
        jornada: '',
        nombre: '',
        descripcion: '',
        precio: ''
      }
    }
  },
  methods: {
    agregarPlan: async function () {
      console.log(this.planData)
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
