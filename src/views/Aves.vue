<template>
  <div class="aves">
    <h1>Todas las aves de nuestra reserva AVESMS.</h1>
    <div class="container planes_container">
      <div class="tarjeta_ave">
        <img
          class="ave_info"
          src="https://travelgrafia.co/wp-content/uploads/2020/03/Colibries-de-Colombia.jpg"
        />
        <h3> Colibri Chivito del Ruiz, Oxypogon stuebelii</h3>
        <h5>Jornada: Diurno</h5>
        <p class="descripcion">
          Este colibrí es una de las aves de Colombia que solo encontrarás en la cordillera Central. 
          Una especie endémica que habita en páramos donde se alimenta de las flores de los frailejones. 
          Mide unos 11 centímetros, y deslumbra por su cresta larga de color blanco y negro, barba y pico corto.
        </p>
      </div>
      <div class="tarjeta_ave">
        <img
          class="ave_info"
          src="https://www.colombiamegusta.com/wp-content/uploads/CUANDO-VEAS-UN-COLIBR%C3%8D-UN-ALMA-AMADA-TE-VINO-A-VISITAR..jpg"
        />
        <h3>Colibri</h3>
        <h5>Jornada: Diurno</h5>
        <p class="descripcion">
          Las especies que forman el género Colibri tienen un tamaño que oscila entre 9,5 y 15 cm, y un peso de 4,8 a 8,5 g.
          Tienen cola amplia, bifurcada o redondeada. El pico es negro y delgado, relativamente largo y curvado, 
          y tienen una larga lengua en forma tubular. 
          Los machos tienen una mancha violeta-azul corriendo hacia atrás y abajo del ojo (cuyas plumas se levantan cuando 
          están excitados) y un parche brillante sobre la garganta. El plumaje de las hembras se parece al de los machos, 
          pero los parches del oído y de la garganta son más pequeños.
        </p>
      </div>
      <div class="tarjeta_ave">
        <img
          class="ave_info"
          src="https://www.bioparquelareserva.com/wp-content/uploads/2021/05/tucan-exp-1.jpg"
        />
        <h3>Tucan</h3>
        <h5>Jornada: Diurno</h5>
        <p class="descripcion">
          Este tucán es una de las aves de Colombia que podrás ver mientras viajas por el norte del país, 
          puntualmente por zonas húmedas y zonas secas de montes ribereños. 
          Su pico mide de 12 a 15 centímetros, y normalmente se le puede ver en parejas o grupos pequeños descansando en bosques.
          Pero tu lo puedes ver de cerca cuando visites nuestra reserva.
        </p>
      </div>
      <div class="tarjeta_ave">
        <img
          class="ave_info"
          src="https://www.bioparquelareserva.com/wp-content/uploads/2021/05/buho-exp-1.jpg"
        />
        <h3>Buho</h3>
        <h5>Jornada: Nocturno</h5>
        <p class="descripcion">
          El búho café o búho moteado, es un ave que mide entre 35 y 41 cm de largo y pesa entre 175 y 320 g.
          Esta especie de búho tiene una cabeza redonda sin orejeras. 
          Tienen cejas blancas con manchas negras, la cara delineada con un borde blanco y la parte superior del búho suele 
          ser de color marrón oscuro. Las partes inferiores son de color marrón y con rayas de color marrón oscuro. 
          La cola es larga y también de color marrón oscuro con muchas barras blancas. 
          Los búhos moteados tienen un pico de color amarillo anaranjado distintivo, con ojos marrones.
        </p>
      </div>
      <div class="tarjeta_ave">
        <img
          class="ave_info"
          src="https://travelgrafia.co/wp-content/uploads/2020/03/Tangara-multicolor.jpg"
        />
        <h3>Tangara Multicolor, </h3>
        <h5>Jornada: Diurno</h5>
        <p class="descripcion">
         Esta es una de las aves endémicas de Colombia, habita bosques húmedos y nublados de las cordilleras 
         Central y Occidental, desde los 1.300 hasta 2.200 metros sobre el nivel del mar. 
         Es uno de los pájaros multicolores más lindos y se alimenta principalmente de frutos de árboles y arbustos, 
         y algunos insectos, entre larvas y orugas.
        </p>
      
      </div>
    </div>
  </div>
</template>
<script>

import gql from "graphql-tag";

export default {
  name: 'getAves',

  data : function () {
      return {
          getAves: {
            nombreAve               : "",
            nombreCientificoAve     : "",
            tamano                  : "",
            tipoAve                 : "",
            descripcion             : "",
            url                     : "",
      }
    }
  },

methods: {
    processAves: async function() {
        await this.$apollo.query(
            {
               query: gql`
                query GetAves {
                    getAves {
                  }
                }

    `, 
    variables: {
        ave: this.getAves,
       },
     })
    .then((result) => {
        let datagetAves = {
            aves: this.getAves,
        };

        this.$emit("Aves", datagetAves);
    })
    .catch((error) => {
      console.log(error);
      alert("ERROR: Fallo en el registro del ave.")
    });
  },
 },
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
