<template>
  <div class="editarPlan">
    <h1>Editar Plan</h1>
    <form v-on:submit.prevent="agregarPlan" class="form" id="formPlan" method="POST">
      <div>
        <label>Nombre del Plan</label>
        <input v-model="getPlan.nombre_plan" name="nombrePlan" type="text" placeholder="Escribe el nombre del plan" />
      </div>
      <div>
        <label>Jornada</label>
        <select v-model="getPlan.jornada" name="jornada" type="text">
         <option value="Diurna">Diurna</option>
         <option value="Nocturna">Nocturna</option>
         <option value="Diurno">Diurno</option>
         <option value="Nocturno">Nocturno</option>
        </select>
      </div>
      <div>
        <label>Descripcion del plan</label>
        <input v-model="getPlan.descripcion" name="descripcion" type="text" placeholder="Escribe una breve descripción del plan" />
      </div>
      <div>
        <label>Precio</label>
        <input
          v-model="getPlan.precio" name="precio" type="number" placeholder="Escribe el precio en pesos colombianos" />
      </div>
      <div>
        <label>Imagen</label>
        <input
          v-model="getPlan.url" name="imagen" type="text" placeholder="Pega la url de la imagen" />
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
  },
  methods: {
    actualizarPlan: async function (e) {
      if (window.confirm('Seguro que deseas actualizar el plan?')) {
        var form = document.forms.formPlan
        const formData = await new FormData(form)
        var nombrePlan = formData.get('nombrePlan')
        var jornada = formData.get('jornada')
        var descripcion = formData.get('descripcion')
        var precio = Number(formData.get('precio'))
        var imagen = formData.get('imagen')
        await this.$apollo.mutate(
          {
            mutation: gql`
              mutation UpdatePlan($plan: PlanUpdate) {
                updatePlan(plan: $plan) {
                  id_plan
                  nombre_plan
                  precio
                  descripcion
                  jornada
                  url
                }
              }
            `,
            variables: {
              idPlan: Number(this.$route.params.id_plan),
              plan: {
                nombre_plan: nombrePlan,
                precio: precio,
                descripcion: descripcion,
                jornada: jornada,
                url: imagen
              }
            }
          }
        ).then((result) => {
          const message = 'Plan actualizado de manera exitosa.'
          alert(message)
        })
          .catch((error) => {
            console.log(error)
            if (error.message === '400: Bad Request') {
              alert('Error. Fallo en el actualizacion de plan.')
            }
          })
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
