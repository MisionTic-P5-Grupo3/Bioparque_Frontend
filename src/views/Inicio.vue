<template>
  <div class="inicio">
    <div class="portada">
      <div class="marco-portada">
        <h1>Bienvenid@ a AVESMS</h1>
        <p>Una Reserva Forestal de Aves que ahora puedes visitar!</p>
      </div>
    </div>
    <div class="imagenes_aves">
      <div class="imagen_ave">
        <img
          class="ave_pic"
          src="https://okdiario.com/img/2019/09/17/-como-es-el-ave-del-paraiso_-1.jpg"
        />
      </div>
      <div class="imagen_ave">
        <img
          class="ave_pic imagen_dos"
          src="https://dam.ngenespanol.com/wp-content/uploads/2020/12/colibries-2.jpg"
        />
      </div>
      <div class="imagen_ave">
        <img
          class="ave_pic imagen_tres"
          src="https://t2.ea.ltmcdn.com/es/images/3/3/8/caracteristicas_de_las_aves_24833_600_square.jpg"
        />
      </div>
      <div class="imagen_ave">
        <img
          class="ave_pic imagen_cuatro"
          src="https://img.bekiamascotas.com/articulos/portada/91000/91805-h3.jpg"
        />
      </div>
      <div class="imagen_ave">
        <img
          class="ave_pic imagen_cinco"
          src="https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2020/07/22/5f187345a6af0.r_1595446812104.0-8-707-358.jpeg"
        />
      </div>
    </div>
    <button class="btn">
      <router-link to="aves" class="btn-text">Aves en la Reserva</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Inicio'
}
</script>

<style>
.portada {
  height: 250px;
  color: rgb(241, 241, 241);
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(2, 0, 36);
  background: -moz-linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(25, 121, 9, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(25, 121, 9, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(25, 121, 9, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
}
.marco-portada {
  border: 3px solid rgb(211, 211, 211);
  padding: 20px 40px;
  margin-top: 45px;
}
.imagenes_aves {
  height: 390px;
  background-color: black;
  width: 100%;
  margin: 0 0 25px;
  display: flex;
  align-items: center;
}
.imagen_ave {
  height: 390px;
  width: 25%;
  margin: 0 auto;
}
.ave_pic {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: -90px center;
  margin: 0 auto;
}
.ave_pic:hover {
  filter: brightness(50%);
  cursor: pointer;
  transition: 1s;
}
.imagen_dos {
  object-position: -150px center;
}
.imagen_tres {
  object-position: 0px center;
}
.imagen_cuatro {
  object-position: -210px center;
}
.imagen_cinco {
  object-position: -180px center;
}
.btn-text {
  text-decoration: none;
  color: white;
}
</style>
