<template>
  <div class="actualizarReserva">
    <h1>Actualizar agendamiento</h1>
    <form class="form" id="formReserva" method="POST" v-on:submit.prevent="actualizarReserva" v-if="this.login != false && this.idRes">
      <div>
        <label>Tipo de Documento</label>
        <select  type="select" name="tipoDocumento" v-model="getReserva.tipo_documento">
         <option value="cedula">Cedula</option>
         <option value="Cédula extranjera">Cédula extranjera</option>
         <option value="TI">Tarjeta de identidad</option>
         <option value="Pasaporte">Pasaporte</option>
        </select>
      </div>
      <div>
        <label>Número de Documento</label>
        <input
        type="number"
        name="numeroDocumento"
        v-model="getReserva.numero_documento" />
      </div>
      <div>
        <label>Nombre Completo</label>
        <input  type="text" name="nombreCompleto" v-model="getReserva.nombre_completo" />
      </div>
      <div>
        <label>Número de Telefono</label>
        <input
           type="text" name="telefono" v-model="getReserva.telefono" />
      </div>
      <div>
        <label>Correo Electronico</label>
        <input  type="mail" name="correoElectronico" v-model="getReserva.correo_electronico" />
      </div>
      <div>
        <label>Fecha de reserva</label>
        <input  type="text" name="fecha" v-model="getReserva.fecha" />
      </div>
      <div>
        <label>Plan seleccionado</label>
        <input  type="number" name="idPlan" v-model="getReserva.id_plan.id_plan">
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
    var url = JSON.parse(JSON.stringify(this.$route))
    var params = url.params
    return {
      idRes: params.id_reserva,
      getReserva: []
    }
  },
  apollo: {
    getReserva: {
      query: gql`
        query GetReserva($idReserva: Int!) {
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
        }`,
      variables () {
        var idReserva = Number(this.$route.params.id_reserva)
        return {
          idReserva
        }
      }
    }
  },
  methods: {
    actualizarReserva: async function (e) {
      if (window.confirm('Seguro que deseas actualizar la reserva?')) {
        var form = document.forms.formReserva
        const formData = await new FormData(form)
        var tipoDocumento = formData.get('tipoDocumento')
        var documento = Number(formData.get('numeroDocumento'))
        var nombre = formData.get('nombreCompleto')
        var telefono = formData.get('telefono')
        var correoElectronico = formData.get('correoElectronico')
        var fecha = formData.get('fecha')
        var idPlan = Number(formData.get('idPlan'))
        await this.$apollo.mutate(
          {
            mutation: gql`
              mutation ReservaUpdate($idReserva: Int!, $reserva: ReservaUpdate) {
                ReservaUpdate(idReserva: $idReserva, Reserva: $reserva) {
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
              idReserva: Number(this.$route.params.id_reserva),
              reserva: {
                tipo_documento: tipoDocumento,
                numero_documento: documento,
                nombre_completo: nombre,
                telefono: telefono,
                correo_electronico: correoElectronico,
                fecha: fecha,
                id_plan: idPlan
              }
            }
          }
        ).then((result) => {
          const message = 'Reserva del usuario realizada de manera exitosa.'
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
  },
  onload: function () {

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
