function agregarTipoGestion(){
    //Obtenemos el resultado 
    var tipo_gestion = document.getElementById("text_tipo_gestion").value;
        // Definicion de encabezado
        const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
        
    //Datos a enviar 
    const raw = JSON.stringify({
        "nombre_tipo_gestion": tipo_gestion,
        "fecha_registro": "2025-05-05 17:40:00"
    });
        
    //Configuracion de la solicitud 
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
        
        // Ejecutamos la solicitud de HTTP a la API
    fetch("http://144.126.136.43/api/tipo_gestion", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
        }

