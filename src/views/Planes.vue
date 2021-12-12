<template>
  <div class="planes">
    <h1>Planes AVESMS</h1>
    <div class="container planes_container">
      <div class="tarjeta_plan">
        <img
          class="ave_plan"
          src="https://okdiario.com/img/2019/09/17/-como-es-el-ave-del-paraiso_-1.jpg"
        />
        <h3>Plan 1</h3>
        <h5>Jornada: Diurno</h5>
        <p class="descripcion">
          Lorem ipsum dolor sit amet, consectetur adip prem ipsum dolor sit
          amet, dolor sit amet, consectetur adip prem ipsum dolor sit amet,
          consectetur adi ipsum dolor sit amet, consectetur adip.
        </p>
        <h5>Precio: $115.000</h5>
      </div>
      <div class="tarjeta_plan">
        <img
          class="ave_plan"
          src="https://okdiario.com/img/2019/09/17/-como-es-el-ave-del-paraiso_-1.jpg"
        />
        <h3>Plan 2</h3>
        <h5>Jornada: Diurno</h5>
        <p class="descripcion">
          Lorem ipsum dolor sit amet, consectetur adip prem ipsum dolor sit
          amet, dolor sit amet, consectetur adip prem ipsum dolor sit amet,
          consectetur adi ipsum dolor sit amet, consectetur adip.
        </p>
        <h5>Precio: $200.000</h5>
      </div>
      <div class="tarjeta_plan">
        <img
          class="ave_plan"
          src="https://okdiario.com/img/2019/09/17/-como-es-el-ave-del-paraiso_-1.jpg"
        />
        <h3>Plan 3</h3>
        <h5>Jornada: Nocturno</h5>
        <p class="descripcion">
          Lorem ipsum dolor sit amet, consectetur adip prem ipsum dolor sit
          amet, dolor sit amet, consectetur adip prem ipsum dolor sit amet,
          consectetur adi ipsum dolor sit amet, consectetur adip.
        </p>
        <h5>Precio: $90.000</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Planes'
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
