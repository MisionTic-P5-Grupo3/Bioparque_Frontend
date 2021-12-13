<template>
  <div id="agendamientos">
    <div class="btn-left" v-if="editar == false">
      <button type="button" class="btn btn-admin">
        <router-link to="/reservar" class="btn" style="text-decoration: none"
          >Crear Reserva</router-link
        >
      </button>
      <input
        type="number"
        class="form-control"
        placeholder="Busca Por Id o Documento"
        v-model="this.searchInput"
      />
      <button type="button" @click="getFilterReservas('id_reserva')">
        Buscar Por Id
      </button>
      <button type="button" @click="getFilterReservas('numero_documento')">
        Buscar Por Usuario
      </button>
      <button type="button" @click="setResult(getReservas)">Sin Filtro</button>
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
            v-for="result in results"
            :key="result.id_reserva"
          >
            <td>{{ result.id_reserva }}</td>
            <td class="tipo_documento_tabla">{{ result.tipo_documento }}</td>
            <td>{{ result.numero_documento }}</td>
            <td>{{ result.nombre_completo }}</td>
            <td>{{ result.telefono }}</td>
            <td>{{ result.correo_electronico }}</td>
            <td>{{ result.fecha }}</td>
            <td>{{ result.id_plan.nombre_plan }}</td>
            <td v-on:click="editarOnClick(result.id_reserva)">Editar</td>
            <td v-on:click="eliminar(result.id_reserva)">Eliminar</td>
          </tr>
        </table>
      </div>
    </div>
    <div>
      <form class="form" v-if="editar">
        <div>
          <label>Tipo de Documento</label>
          <select v-model="reservaUpdate.tipo_documento">
            <option disabled value="">Elige un tipo de documento</option>
            <option>Cédula</option>
            <option>Cedula extranjera</option>
            <option>Pasaporte</option>
          </select>
        </div>
        <div>
          <label>Número de Documento</label>
          <input
            v-model="reservaUpdate.documento"
            type="number"
            placeholder="Escribe tu número de documento"
          />
        </div>
        <div>
          <label>Nombre Completo</label>
          <input
            v-model="reservaUpdate.nombre_completo"
            placeholder="Escribe tu Nombre y Apellidos"
          />
        </div>
        <div>
          <label>Número de Telefono</label>
          <input
            v-model.number="reservaUpdate.telefono"
            type="number"
            placeholder="Escribe tu número de contacto"
          />
        </div>
        <div>
          <label>Correo Electronico</label>
          <input
            v-model="reservaUpdate.mail"
            placeholder="Escribe tu correo electronico"
          />
        </div>
        <div>
          <label>Fecha de reserva</label>
          <input v-model="reservaUpdate.fecha" type="date" />
        </div>
        <div>
          <label>Elige el plan que deseas tomar</label>
          <select v-model="reservaUpdate.id_plan">
            <option disabled value="">Elige el plan que deseas reservar</option>
            <option>Plan 1</option>
            <option>Plan 2</option>
            <option>Plan 3</option>
          </select>
        </div>
        <button type="submit" class="btn btn-form" @click="actualizar">
          Actualizar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'Agendamientos',
  data: function () {
    return {
      searchInput: '',
      reservaId: '',
      editar: false,
      results: [],
      getReservas: [],
      getReserva: {
        id_reserva: '',
        tipo_documento: '',
        documento: '',
        nombre_completo: '',
        telefono: '',
        mail: '',
        fecha: '',
        id_plan: {
          id_plan: ''
        }
      },
      reservaUpdate: {
        tipo_documento: '',
        documento: '',
        nombre_completo: '',
        telefono: '',
        mail: '',
        fecha: '',
        id_plan: ''
      }
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
    },
    getReserva: {
      query: gql`
        query Query($idReserva: Int!) {
          getReserva(idReserva: $idReserva) {
            id_reserva
            tipo_documento
            numero_documento
            nombre_completo
            telefono
            correo_electronico
            fecha
            id_plan {
              id_plan
            }
          }
        }
      `,
      variables () {
        return {
          idReserva: 1
        }
      }
    }
  },
  beforeCreate () {
    console.log('At this point, events and lifecycle have been initialized.')
  },
  created () {
    this.$apollo.queries.getReservas.refetch()
    this.setResult(this.getReservas)
    this.$apollo.queries.getReserva.refetch()
    console.log(this.results)
  },
  methods: {
    eliminar: async function (id) {
      if (window.confirm('Confirma para eliminar')) {
        await this.$apollo.mutate({
          mutation: gql`
            mutation Mutation($idReserva: Int!) {
              deleteReserva(idReserva: $idReserva)
            }
          `,
          variables: { idReserva: id }
        })
      }
    },
    editarOnClick (id) {
      this.editar = true
      this.reservaId = id
    },
    actualizar () {
      this.ReservaUpdate()
      this.$router.push({ name: 'account' })
    },
    setResult (reservaResult) {
      this.results = []
      this.results = [...reservaResult]
    },
    getFilterReservas (input) {
      const getFilterReservas = this.getReservas.filter((reserva) => {
        return reserva[input] === this.searchInput
      })
      console.log(getFilterReservas)
      this.searchInput = ''
      return getFilterReservas.length === 0
        ? alert('No se encontraron registros por ese usuario o id')
        : this.setResult(getFilterReservas)
    },
    ReservaUpdate: async function () {
      try {
        await this.$apollo.mutate({
          mutation: gql`
            mutation Mutation($reserva: ReservaUpdate, $idReserva: Int!) {
              ReservaUpdate(Reserva: $reserva, idReserva: $idReserva) {
                tipo_documento
                nombre_completo
                telefono
                correo_electronico
                fecha
                numero_documento
                id_reserva
                id_plan
              }
            }
          `,
          variables: {
            idReserva: parseInt(this.reservaId),
            reserva: {
              tipo_documento: this.reservaUpdate.tipo_documento,
              nombre_completo: this.reservaUpdate.nombre_completo,
              telefono: this.reservaUpdate.telefono.toString(),
              correo_electronico: this.reservaUpdate.mail,
              fecha: this.reservaUpdate.fecha,
              id_plan: parseInt(this.reservaUpdate.id_plan.substring(5)),
              numero_documento: this.reservaUpdate.documento
            }
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
.container_table {
  border: 1px;
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
  table-layout: fixed;
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
  align-content: space-around;
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
