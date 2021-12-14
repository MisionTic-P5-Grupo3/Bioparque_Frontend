<template>
  <div class="planes">
    <h1>Planes AVESMS</h1>
    <div class="container planes_container">
      <div class="tarjeta_plan" v-for="plan in getPlans" :key="plan.id_plan">
        <img
          class="ave_plan"
          :src="plan.url"
        />
        <h3>Plan: {{ plan.nombre_plan }}</h3>
        <h5>Jornada: {{ plan.jornada}} </h5>
        <p class="descripcion">
          {{ plan.descripcion}}
        </p>
        <h5>Precio: {{plan.precio}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'Planes',
  data: function () {
    return {
      getPlans: []
    }
  },
  apollo: {
    getPlans: {
      query: gql`
        query Query {
          getPlans {
            id_plan
            nombre_plan
            precio
            descripcion
            jornada
            url
          }
        }
      `
    }
  },
  created: function () {
    this.$apollo.queries.getPlans.refetch()
  },
  methods: {}

}

</script>

<style>
.planes_container {
  height: 500px;
}
.tarjeta_plan {
  border: 3px solid black;
  height: 500px;
  width: 30%;
  margin: 40px auto;
}
.ave_plan {
  width: 97%;
  margin-top: 6px;
  height: 230px;
  object-fit: cover;
}
.tarjeta_plan h3 {
  color: black;
  font-size: 22px;
}
.tarjeta_plan h5 {
  color: black;
  font-size: 14px;
  margin: 0;
}
.descripcion {
  color: black;
}
</style>
