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

  }
}

function completarFila(element,index,arr) {
  arr[index] = document.querySelector("#tbl_resultado tbody").innerHTML +=
  `<tr>
  <td>${element.id_resultado}</td>
  
}