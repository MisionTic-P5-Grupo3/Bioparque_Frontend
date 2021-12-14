<template>
  <div class="reservar">
    <h1>Reservar Visitas a la reserva de aves AVESMS</h1>
    <form v-on:submit.prevent="agregarReserva" class="form" method="POST">
      <div>
        <label>Nombre Ave</label>
        <input type="text" placeholder="Escribe el nombre del ave" />
      </div>
      <div>
        <label>Nombre Cientifico Ave</label>
        <input type="text" placeholder="Escribe el nombre cientifico del ave" />
      </div>
      <div>
        <label>Jornada</label>
        <select type="text">
         <option value="diurno">Diurno</option>
         <option value="nocturno">Nocturno</option>
        </select>
      </div>
      <div>
        <label>Tamaño (centimetros)</label>
         <input type="number" placeholder="Escribe el tamaño promedop del ave en centimetros" />
      </div>
      <div>
        <label>Descripción Ave</label>
        <input type="text" placeholder="Escribe la descripción del ave" />
      </div>
      <div>
        <label>Url Imagen Ave</label>
        <input type="text" placeholder="Escribe la url con una imagen del ave" />
      </div>
      <button type="submit" class="btn btn-form">Agregar Ave</button>
    </form>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'AgregarAve',
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
