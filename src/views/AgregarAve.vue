<template>
  <div class="reservar">
    <h1>Reservar Visitas a la reserva de aves AVESMS</h1>
    <form v-on:submit.prevent="agregarAve" class="form" method="POST">
      <div>
        <label>Nombre Ave</label>
        <input type="text" v-model="aveData.nombreAve" placeholder="Escribe el nombre del ave" />
      </div>
      <div>
        <label>Nombre Cientifico Ave</label>
        <input type="text" v-model="aveData.nombreCientificoAve" placeholder="Escribe el nombre cientifico del ave" />
      </div>
      <div>
        <label>Jornada</label>
        <select type="text" v-model="aveData.tipoAve">
        <option value="diurno">Diurno</option>
        <option value="nocturno">Nocturno</option>
        </select>
      </div>
      <div>
        <label>Tamaño (centimetros)</label>
        <input type="number" v-model="aveData.tamano" placeholder="Escribe el tamaño promedop del ave en centimetros" />
      </div>
      <div>
        <label>Descripción Ave</label>
        <input type="text" v-model="aveData.descripcion" placeholder="Escribe la descripción del ave" />
      </div>
      <div>
        <label>Url Imagen Ave</label>
        <input type="text"  v-model="aveData.url" placeholder="Escribe la url con una imagen del ave" />
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
      aveData: {
        nombreAve: '',
        nombreCientificoAve: '',
        tamano: null,
        tipoAve: '',
        descripcion: '',
        url: ''
      }
    }
  },
  methods: {
    agregarAve: async function () {
      console.log(this.aveData)
      await this.$apollo.mutate(
        {
          mutation: gql`
            mutation CreateAve($ave: AveInput!) {
              createAve(ave: $ave) {
                nombreAve
                nombreCientificoAve
                tamano
                tipoAve
                descripcion
                url
                }
              }
          `,
          variables: {
            ave: this.aveData
          }
        }
      )
        .then((result) => {
          const message = 'ave creada de manera exitosa.'
          alert(message)
          location.push('/avesAdmin')
          location.reload()
        })
        .catch((error) => {
          console.log(error)
          if (error.message === '400: Bad Request') {
            alert('Error. Fallo en el registro de la Ave.')
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
