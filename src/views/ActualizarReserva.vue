<template>
  <div class="actualizarReserva">
    <h1>Actualizar agendamiento</h1>
    <form class="form" method="POST" v-on:submit.prevent="actualizarReserva">
      <div>
        <label>Tipo de Documento</label>
        <select  type="select" v-model="getReserva.tipo_documento">
         <option value="cedula">Cedula</option>
         <option value="Cédula extranjera">Cédula extranjera</option>
         <option value="Pasaporte">Pasaporte</option>
        </select>
      </div>
      <div>
        <label>Número de Documento</label>
        <input
        type="number"
        v-model="getReserva.numero_documento" />
      </div>
      <div>
        <label>Nombre Completo</label>
        <input  type="text" v-model="getReserva.nombre_completo" />
      </div>
      <div>
        <label>Número de Telefono</label>
        <input
           type="text" v-model="getReserva.telefono" />
      </div>
      <div>
        <label>Correo Electronico</label>
        <input  type="mail" v-model="getReserva.correo_electronico" />
      </div>
      <div>
        <label>Fecha de reserva</label>
        <input  type="text" v-model="getReserva.fecha" />
      </div>
      <div>
        <label>Elige el plan que deseas tomar</label>
        <input  type="number" v-model="getReserva.nombre_plan">
      </div>
      <button type="submit" class="btn btn-form">Actualizar Ahora</button>
    </form>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'ActualizarReserva',
  data: function () {
    return {
      reservaData: {
        tipoDocumento: '',
        numeroDocumento: null,
        nombreCompleto: '',
        telefono: '',
        correoElectronico: '',
        fecha: '2000-01-01',
        idPlan: null
      },
      getReserva: []
    }
  },
  apollo: {
    getReserva: {
      query: gql`
        query Query {
          getReserva (idReserva: 11) {
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
        }`,

      variables () {
        return {
          idRes: this.idReserva
        }
      }
    }
  },
  methods: {
    actualizarReserva: async function () {
      console.log(this.getReserva)
      await this.$apollo.mutate(
        {
          mutation: gql`
            mutation ReservaUpdate($reserva: ReservaUpdate) {
              ReservaUpdate(reserva: $reserva) {
                id_reserva
                tipo_documento
                numero_documento
                nombre_completo
                telefono
                correo_electronico
                fecha
                id_plan
              }
            }
          `,
          variables: {
            reserva: this.getReserva
          }
        }
      )
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
