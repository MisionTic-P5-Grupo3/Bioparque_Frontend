<template>
  <div class="reservar">
    <h1>Reservar Visitas a la reserva de aves AVESMS</h1>
    <form v-on:submit.prevent="agregarReserva" class="form" method="POST">
      <div>
        <label>Nombre Ave</label>
        <input type="text" v-model="getAveById.nombreAve" />
      </div>
      <div>
        <label>Nombre Cientifico Ave</label>
        <input type="text" v-model="getAveById.nombreCientificoAve" />
      </div>
      <div>
        <label>Jornada</label>
        <select type="text" v-model="getAveById.tipoAve">
         <option value="diurno">Diurno</option>
         <option value="nocturno">Nocturno</option>
        </select>
      </div>
      <div>
        <label>Tamaño (centimetros)</label>
         <input type="number" v-model="getAveById.tamano" />
      </div>
      <div>
        <label>Descripción Ave</label>
        <input type="text" v-model="getAveById.descripcion" />
      </div>
      <div>
        <label>Url Imagen Ave</label>
        <input type="text" v-model="getAveById.url" />
      </div>
      <button type="submit" class="btn btn-form">Editar Ave</button>
    </form>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'EditarAve',
  data: function () {
    var url = JSON.parse(JSON.stringify(this.$route))
    var params = url.params
    return {
      idAve: params.id_ave,
      getAveById: []
    }
  },
  apollo: {
    getAveById: {
      query: gql`
        query GetAves($aveId: String!) {
          getAveById(aveId: $aveId) {
            nombreAve
            nombreCientificoAve
            tamano
            tipoAve
            descripcion
            url
          }
        }`,
      variables () {
        var aveId = this.$route.params.id_ave
        return {
          aveId
        }
      }
    }
  },
  methods: {}
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
