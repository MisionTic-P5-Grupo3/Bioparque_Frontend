<template>
  <div id="agendamientos">
    <div class="btn-left">
      <router-link to="/crearPlan"><button type="button" class="btn btn-admin">Crear Plan</button></router-link>
    </div>
    <div class="container_table">
      <table>
        <tr class="encabezado_tabla">
          <th class="id_tabla">ID</th>
          <th class="tipo_documento_tabla">Nombre del Plan</th>
          <th class="documento_tabla">Descripción</th>
          <th class="nombre_tabla">Precio</th>
          <th class="telefono_tabla">Jornada</th>
          <th class="editar_tabla">Editar</th>
          <th class="eliminar_tabla">Eliminar</th>
        </tr>
        <tr class="cuerpo_tabla" v-for="plan in getPlans" :key="plan.id_plan">
          <td>{{ plan.id_plan }}</td>
          <td>{{ plan.nombre_plan }}</td>
          <td>{{ plan.descripcion }}</td>
          <td>${{plan.precio}}</td>
          <td>{{ plan.jornada }}</td>
          <td><router-link :to="{name: 'EditarPlan', params: { id_plan: plan.id_plan }}"><button>Editar</button></router-link></td>
          <td><button v-on:click="deletePlan(plan.id_plan)">Eliminar</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'Agendamientos',
  data: function () {
    return {
      getPlans: []
    }
  },
  apollo: {
    getPlans: {
      query: gql`
        query Query {
          getPlans {
            id_plan
            nombre_plan
            precio
            descripcion
            jornada
          }
        }
      `
    }
  },
  methods: {
    deletePlan: async function (e) {
      if (window.confirm('Seguro que deseas eliminar el plan?')) {
        var planId = await Number(e)
        await this.$apollo.mutate(
          {
            mutation: gql`
              mutation DeletePlan($planId: Int!) {
                deletePlan(planId: $planId)
              }
            `,
            variables: {
              planId: planId
            }
          }
        ).then((result) => {
          const message = 'Plan eliminado de manera exitosa.'
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
  },
  created: function () {
    this.$apollo.queries.getPlans.refetch()
  }
}
</script>

<style>
.container_table {
  color: black;
  margin-top: 35px;
  padding: 25px 10px;
  height: auto;
}
.encabezado_tabla th {
  border: 2px solid black;
}
.cuerpo_tabla td {
  border: 1px solid rgb(68, 68, 68);
  height: 25px;
}
.container_table table {
  margin: 0 auto;
  word-wrap: break-word;
}
.id_tabla {
  width: 40px;
  max-width: 40px;
}
.tipo_documento_tabla {
  width: 150px;
  max-width: 150px;
}
.id_tabla {
  width: 30px;
}
.id_tabla {
  width: 30px;
}
</style>
