<template>
  <div class="actualizarReserva">
    <h1>Actualizar agendamiento</h1>
    <form class="form" method="POST" v-on:submit.prevent="actualizarReserva">
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
        <label>Nombre Completo {{ getReserva.nombre_completo }}</label>
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
      id_reserva: this.$route.params.id_reserva,
      reservaUpdate: {
        tipo_documento: '',
        documento: '',
        nombre_completo: '',
        telefono: '',
        mail: '',
        fecha: '',
        id_plan: ''
      },
      getReserva: []
    }
  },
  apollo: {
    getReserva: {
      query: gql`
        query Query($idReserva: Int!) {
          getReserva(idReserva: $idReserva) {
            nombre_completo
            tipo_documento
            telefono
            numero_documento
            correo_electronico
            fecha
          }
        }
      `,

      variables () {
        return {
          idReserva: this.id_reserva
        }
      }
    }
  },
  methods: {
    actualizarReserva: async function () {
      console.log(this.$route.params.id_reserva)
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
          idReserva: parseInt(this.id_reserva),
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
      this.$router.push({ name: 'Agendamientos' })
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
