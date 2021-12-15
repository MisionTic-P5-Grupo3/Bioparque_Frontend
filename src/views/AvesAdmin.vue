<template>
  <div id="AvesAdmin">
    <div class="btn-left">
      <router-link to="/AgregarAve"><button type="button" class="btn btn-admin">Añadir Ave</button></router-link>
      <input
        type="string"
        class="form-control"
        placeholder="Busca Por nombre cientifico o tipo"
        v-model="this.searchInput"
      />
      <button type="button" @click="getFilterAves('nombreCientificoAve')">
        Buscar Por Nombre Cientifico Ave
      </button>
      <button type="button" @click="getFilterAves('tipoAve')">
        Buscar Por Tipo De Ave
      </button>
      <button type="button" @click="setResult(getAves)">Sin Filtro</button>
    </div>
    <div class="container_table">
      <table>
        <tr class="encabezado_tabla">
          <th class="id_tabla">ID</th>
          <th class="tipo_documento_tabla">Nombre del Ave</th>
          <th class="documento_tabla">Descripción</th>
          <th class="telefono_tabla">Jornada</th>
          <th class="tamano_tabla">Tamaño</th>
          <th class="foto_tabla">Foto</th>
          <th class="editar_tabla">Editar</th>
          <th class="eliminar_tabla">Eliminar</th>
        </tr>
        <tr class="cuerpo_tabla" v-for="ave in results" :key="ave.nombreCientificoAve">
            <td>{{ ave.nombreCientificoAve }}</td>
            <td>{{ ave.nombreAve }}</td>
            <td>{{ ave.descripcion }}</td>
            <td>{{ ave.tipoAve }}</td>
            <td>{{ ave.tamano }}</td>
            <td>{{ ave.url}}</td>
            <td><router-link :to="'/editarAve/'+ave.nombreCientificoAve"><button>Editar</button></router-link></td>
            <td><button v-on:click="deleteAve(ave.nombreCientificoAve)">Eliminar</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'AvesAdmin',
  data: function () {
    return {
      searchInput: '',
      getAves: [],
      results: [],
      getAveById: '',
      getAvesByTipoAve: []
    }
  },
  apollo: {
    getAves: {
      query: gql`
      query GetAves {
        getAves {
          nombreAve
          nombreCientificoAve
          tamano
          tipoAve
          descripcion
          url
        }
      }
    `
    }
  },
  created: function () {
    this.$apollo.queries.getAves.refetch()
    this.setResult(this.getAves)
  },
  methods: {
    deleteAve: async function (id) {
      if (window.confirm('Confirma para eliminar')) {
        console.log(id)
        await this.$apollo.mutate({
          mutation: gql`
          mutation Mutation($aveId: String!) {
            deleteAve(aveId: $aveId)
          }
        `,
          variables: { aveId: id }
        })
      }
      location.reload()
    },
    setResult (aveResult) {
      this.results = []
      this.results = [...aveResult]
    },
    getFilterAves (input) {
      const getFilterAves = this.getAves.filter((ave) => {
        return ave[input] === this.searchInput
      })
      this.searchInput = ''
      return getFilterAves.length === 0
        ? alert('No se encontro ninguna ave')
        : this.setResult(getFilterAves)
    }
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
