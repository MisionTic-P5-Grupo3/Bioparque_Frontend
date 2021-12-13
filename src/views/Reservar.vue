<template>
  <div class="reservar">
    <h1>Reservar Visitas a la reserva de aves AVESMS</h1>
    <form v-on:submit.prevent="agregarReserva" class="form" method="POST">
      <div>
        <label>Tipo de Documento</label>
        <select v-model="reservaData.tipo_documento" type="text">
         <option value="Cédula">Cédula</option>
         <option value="Cédula extranjera">Cédula extranjera</option>
         <option value="Pasaporte">Pasaporte</option>
        </select>
      </div>
      <div>
        <label>Número de Documento</label>
        <input v-model="reservaData.numero_documento" type="number" placeholder="Escribe tu número de documento" />
      </div>
      <div>
        <label>Nombre Completo</label>
        <input v-model="reservaData.nombre_completo" type="text" placeholder="Escribe tu Nombre y Apellidos" />
      </div>
      <div>
        <label>Número de Telefono</label>
        <input
          v-model="reservaData.telefono" type="text" placeholder="Escribe tu número de contacto" />
      </div>
      <div>
        <label>Correo Electronico</label>
        <input v-model="reservaData.correo_electronico" type="mail" placeholder="Escribe tu correo electronico" />
      </div>
      <div>
        <label>Fecha de reserva</label>
        <input v-model="reservaData.fecha" type="text" />
      </div>
      <div>
        <label>Elige el plan que deseas tomar</label>
        <input v-model="reservaData.id_plan" type="number">
      </div>
      <button type="submit" class="btn btn-form">Reservar Ahora</button>
    </form>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'Inicio',
  data: function () {
    return {
      reservaData: {
        tipo_documento: '',
        numero_documento: null,
        nombre_completo: '',
        telefono: '',
        correo_electronico: '',
        fecha: '2000-01-01',
        id_plan: null
      }
    }
  },
  methods: {
    agregarReserva: async function () {
      console.log(this.reservaData)
      await this.$apollo.mutate(
        {
          mutation: gql`
            mutation CreateReserva($reserva: ReservaInput) {
              createReserva(reserva: $reserva) {
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
            reserva: this.reservaData
          }
        }
      )
        .then((result) => {
          const message = `Reserva del usuario ${result.data.reservaData.nombre_completo} realizada de manera exitosa. `
          alert(message)
          this.$emit('completedRegister')
        })
        .catch((error) => {
          console.log(error)
          if (error.message === '400: Bad Request') {
            alert('Error. Fallo en el registro de reserva.')
          }
        })
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
