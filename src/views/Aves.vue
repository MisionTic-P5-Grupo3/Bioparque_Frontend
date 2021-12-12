<template>
  <div class="aves">
    <h1>Todas las aves de nuestra reserva AVESMS.</h1>
    <div class="container planes_container">
      <div class="tarjeta_ave">
        <img
          class="ave_info"
          src="https://okdiario.com/img/2019/09/17/-como-es-el-ave-del-paraiso_-1.jpg"
        />
        <h3>Ave 1</h3>
        <h5>Jornada: Diurno</h5>
        <p class="descripcion">
          Lorem ipsum dolor sit amet, consectetur adip prem ipsum dolor sit
          amet, dolor sit amet, consectetur adip prem ipsum dolor sit amet,
          consectetur adi ipsum dolor sit amet, consectetur adip.
        </p>
      </div>
      <div class="tarjeta_ave">
        <img
          class="ave_info"
          src="https://okdiario.com/img/2019/09/17/-como-es-el-ave-del-paraiso_-1.jpg"
        />
        <h3>Ave 2</h3>
        <h5>Jornada: Diurno</h5>
        <p class="descripcion">
          Lorem ipsum dolor sit amet, consectetur adip prem ipsum dolor sit
          amet, dolor sit amet, consectetur adip prem ipsum dolor sit amet,
          consectetur adi ipsum dolor sit amet, consectetur adip.
        </p>
      </div>
      <div class="tarjeta_ave">
        <img
          class="ave_info"
          src="https://okdiario.com/img/2019/09/17/-como-es-el-ave-del-paraiso_-1.jpg"
        />
        <h3>Ave 3</h3>
        <h5>Jornada: Nocturno</h5>
        <p class="descripcion">
          Lorem ipsum dolor sit amet, consectetur adip prem ipsum dolor sit
          amet, dolor sit amet, consectetur adip prem ipsum dolor sit amet,
          consectetur adi ipsum dolor sit amet, consectetur adip.
        </p>
      </div>
      <div class="tarjeta_ave">
        <img
          class="ave_info"
          src="https://okdiario.com/img/2019/09/17/-como-es-el-ave-del-paraiso_-1.jpg"
        />
        <h3>Ave 4</h3>
        <h5>Jornada: Diurno</h5>
        <p class="descripcion">
          Lorem ipsum dolor sit amet, consectetur adip prem ipsum dolor sit
          amet, dolor sit amet, consectetur adip prem ipsum dolor sit amet,
          consectetur adi ipsum dolor sit amet, consectetur adip.
        </p>
      </div>
      <div class="tarjeta_ave">
        <img
          class="ave_info"
          src="https://okdiario.com/img/2019/09/17/-como-es-el-ave-del-paraiso_-1.jpg"
        />
        <h3>Ave 5</h3>
        <h5>Jornada: Diurno</h5>
        <p class="descripcion">
          Lorem ipsum dolor sit amet, consectetur adip prem ipsum dolor sit
          amet, dolor sit amet, consectetur adip prem ipsum dolor sit amet,
          consectetur adi ipsum dolor sit amet, consectetur adip.
        </p>
      </div>
      <div class="tarjeta_ave">
        <img
          class="ave_info"
          src="https://okdiario.com/img/2019/09/17/-como-es-el-ave-del-paraiso_-1.jpg"
        />
        <h3>Ave 6</h3>
        <h5>Jornada: Nocturno</h5>
        <p class="descripcion">
          Lorem ipsum dolor sit amet, consectetur adip prem ipsum dolor sit
          amet, dolor sit amet, consectetur adip prem ipsum dolor sit amet,
          consectetur adi ipsum dolor sit amet, consectetur adip.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Aves'
}
</script>

<style>
.planes_container {
  display: flex;
  flex-wrap: wrap;
}
.tarjeta_ave {
  border: 3px solid black;
  height: 460px;
  width: 30%;
  margin: 40px auto 0;
}
.ave_info {
  width: 97%;
  margin-top: 6px;
  height: 230px;
  object-fit: cover;
}
.tarjeta_ave h3 {
  color: black;
  font-size: 22px;
}
.tarjeta_ave h5 {
  color: black;
  font-size: 14px;
  margin: 0;
}
</style>
