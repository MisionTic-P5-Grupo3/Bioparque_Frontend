<template>
  <div class="reservar">
    <h1>Reservar Visitas a la reserva de aves AVESMS</h1>
    <form class="form">
      <div>
        <label>Tipo de Documento</label>
        <select v-model="selected" placeholder="Escribe tu correo electronico">
          <option disabled value="">Elige un tipo de documento</option>
          <option>Cédula</option>
          <option>Cedula extranjera</option>
          <option>Pasaporte</option>
        </select>
      </div>
      <div>
        <label>Número de Documento</label>
        <input
          v-model.number="documento"
          type="number"
          placeholder="Escribe tu número de documento"
        />
      </div>
      <div>
        <label>Nombre Completo</label>
        <input v-model="message" placeholder="Escribe tu Nombre y Apellidos" />
      </div>
      <div>
        <label>Número de Telefono</label>
        <input
          v-model.number="telefono"
          type="number"
          placeholder="Escribe tu número de contacto"
        />
      </div>
      <div>
        <label>Correo Electronico</label>
        <input v-model="mail" placeholder="Escribe tu correo electronico" />
      </div>
      <div>
        <label>Fecha de reserva</label>
        <input v-model="date" type="date" />
      </div>
      <div>
        <label>Elige el plan que deseas tomar</label>
        <select v-model="selected" placeholder="Escribe tu correo electronico">
          <option disabled value="">Elige el plan que deseas reservar</option>
          <option>Plan 1</option>
          <option>Plan 2</option>
          <option>Plan 3</option>
        </select>
      </div>
      <button type="submit" class="btn btn-form">Reservar Ahora</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Inicio'
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
