<template>
  <div id="agendamientos">
      <div class="btn-left">
        <button type="button" class="btn btn-admin">
          <router-link to="/reservar" class="btn" style="text-decoration: none">Crear Reserva</router-link>
        </button>
      </div>
      <div class="container_table">
        <table>
          <tr class="encabezado_tabla">
            <th class="id_tabla">ID</th>
            <th class="tipo_documento_tabla">Tipo de Documento</th>
            <th class="documento_tabla">Número de Documento</th>
            <th class="nombre_tabla">Nombre Completo</th>
            <th class="telefono_tabla">Telefono</th>
            <th class="correo_tabla">Correo Electrónico</th>
            <th class="fecha_tabla">Fecha</th>
            <th class="plan_tabla">Plan</th>
            <th class="editar_tabla">Editar</th>
            <th class="eliminar_tabla">Eliminar</th>
          </tr>
          <tr
            class="cuerpo_tabla"
            v-for="reserva in getReservas"
            :key="reserva.id_reserva"
          >
            <td>{{ reserva.id_reserva }}</td>
            <td class="tipo_documento_tabla">{{ reserva.tipo_documento }}</td>
            <td>{{ reserva.numero_documento }}</td>
            <td>{{ reserva.nombre_completo }}</td>
            <td>{{ reserva.telefono }}</td>
            <td>{{ reserva.correo_electronico }}</td>
            <td>{{ reserva.fecha }}</td>
            <td>{{ reserva.id_plan.nombre_plan }}</td>
            <td>{{ reserva.fecha }}</td>
            <td><router-link :to="{name: 'ActualizarReserva', params: { id_reserva: reserva.id_reserva }}"><button>Editar</button></router-link></td>
            <td><button v-on:click="deleteReservas(reserva.id_reserva)">Eliminar</button></td>
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
      getReservas: [],
      login: null
    }
  },
  apollo: {
    getReservas: {
      query: gql`
        query Query {
          getReservas {
            id_reserva
            tipo_documento
            numero_documento
            nombre_completo
            telefono
            correo_electronico
            fecha
            id_plan {
              nombre_plan
            }
          }
        }
      `
    }
  },
  created: function () {
    this.$apollo.queries.getReservas.refetch()
    if (localStorage.getItem('login') === true) {
      this.login = true
    }
  },
  methods: {
    deleteReservas (id) {
      console.log(`Delete reserva: # ${id}`)
      this.$apollo.mutate({
        mutation: gql`mutation deleteReservas($id: idReserva){
            deleteReservas(idReserva: $id)
          }`,
        variables: {
          id: id
        }
      }
      )
      // location.reload()
    }
  }
}
</script>

<style>
.container_table {
  color: rgb(0, 0, 0);
  margin-top: 35px;
  padding: 25px 10px;
  height: auto;
}
.encabezado_tabla th {
  border: 2px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
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
.btn-left {
  max-width: 1200px;
  margin: 0 auto;
  text-align: start;
  height: 60px;
}
.btn-admin {
  margin: 25px;
  height: 50px;
  width: 180px;
  background-color: black;
  height: 60px;
  width: 270px;
  margin-bottom: 30px;
  font-size: 20px;
  color: white;
}
</style>
