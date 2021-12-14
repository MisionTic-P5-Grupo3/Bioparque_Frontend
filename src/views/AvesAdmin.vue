<template>
  <div id="AvesAdmin">
    <div class="btn-left">
      <button type="button" class="btn btn-admin">Añadir Ave</button>
    </div>
    <div class="container_table">
      <table>
        <tr class="encabezado_tabla">
          <th class="id_tabla">ID</th>
          <th class="tipo_documento_tabla">Nombre del Ave</th>
          <th class="documento_tabla">Descripción</th>
          <th class="telefono_tabla">Jornada</th>
          <th class="editar_tabla">Editar</th>
          <th class="eliminar_tabla">Eliminar</th>
        </tr>
        <tr class="cuerpo_tabla">
          <td>1</td>
          <td>Colibrie</td>
          <td>
            Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet
          </td>
          <td>Diurno</td>
          <td>Editar</td>
          <td>Eliminar</td>
        </tr>
        <tr class="cuerpo_tabla">
          <td>1</td>
          <td>Colibrie</td>
          <td>
            Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet
          </td>
          <td>Diurno</td>
          <td>Editar</td>
          <td>Eliminar</td>
        </tr>
        <tr class="cuerpo_tabla">
          <td>1</td>
          <td>Colibrie</td>
          <td>
            Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet
          </td>
          <td>Diurno</td>
          <td>Editar</td>
          <td>Eliminar</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvesAdmin'
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
