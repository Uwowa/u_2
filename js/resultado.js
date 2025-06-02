var g_id_resultado ="";
function agregarResultado() {
  //Obtenemos resultado
  var resultado= document.getElementById("txt_resultado").value;
  
  //definicion de encabezados
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  //datos a enviar
  const raw= JSON.stringify({
    "nombre_resultado": resultado,
    "fecha_registro": "2025-06-02 17:34:00"
  });

  //config de la solicitud
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  //ejecutamos la solicitud http a la api
  fetch("http://144.126.136.43/api/resultado", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}

function listarResultados(){
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  //ejecutamos la solicitud http a la api
  fetch("http://144.126.136.43/api/resultado", requestOptions)
  .then((response) => response.json())
  .then((json) => {
    json.forEach(completarFila);
    $('#tbl_resultado').DataTable();
    })
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  }
function completarFila(element,index,arr) {
  arr[index] = document.querySelector("#tbl_resultado tbody").innerHTML +=
  `<tr>
  <td>${element.id_resultado}</td>
  <td>${element.nombre_resultado}</td>
  <td>${element.fecha_registro}</td>
  <td>
  <a href='actualizar.html?id=${element.id_resultado}' class='btn btn-warning'>Actualizar</a>
  <a href='eliminar.html?id=${element.id_resultado}' class='btn btn-danger btn-sm'>Eliminar</a>
  </td>
  </tr>`;
}

function actualizarResultado() {
  //Obtenemos el resultado
  var nombre_resultado = document.getElementById("txt_nombre_resultado").value;

  //Definicion de encabezado
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  //Datos a enviar
  const raw = JSON.stringify({
    "nombre_resultado": nombre_resultado
  });

  //Configuracion de la solicitud
  const requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  // Ejecutamos la solicitud de HTTP a la API
  fetch("http://144.126.136.43/api/resultado/" + g_id_resultado, requestOptions)
    .then((response) => {
      if(response.status === 200) {
        location.href = "listar.html";
      }else{
        console.error("Error al actualizar el resultado");
      }
    })
  }

  function obtenerIdActualizacion() {
    const queryString = window.location.search;
    const parametros = new URLSearchParams(queryString);
    const p_id_resultado = parametros.get("id");
    //asignamos a la variable global el id a actualizar
    g_id_resultado = p_id_resultado;
    obtenerDatosActualizacion(p_id_resultado); 
  }
  function obtenerDatosActualizacion(id_resultado) {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("http://144.126.136.43/api/resultado/" + id_resultado, requestOptions)
      .then((response) => response.json())
      .then((json) => json.forEach(completarFormulario))
      .then((result) => console.log(result)) 
      .catch((error) => console.error(error));
  }

  function completarFormulario(element, index, arr) {
    var nombre = element.nombre_resultado;
    document.getElementById("txt_nombre_resultado").value = nombre;

  }

  function eliminarResultado() {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow"
    };

    fetch("http://144.126.136.43/api/resultado/" + g_id_resultado, requestOptions)
      .then((response) => {
        if(response.status === 200) {
          window.location.href = "listar.html";
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }
  function obtenerIdEliminar() {
    const queryString = window.location.search;
    const parametros = new URLSearchParams(queryString);
    const p_id_resultado = parametros.get("id");
    //asignamos a la variable global el id a eliminar
    g_id_resultado = p_id_resultado;
  }